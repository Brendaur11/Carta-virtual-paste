import { useState, useEffect, useCallback, useRef } from "react";
import { fetchProducts } from "../services/sheetsService";

/**
 * useProducts — custom hook para cargar y filtrar productos.
 *
 * @param {string|null} categoria - Filtra por categoría. null = todos.
 * @returns {{ data, loading, error, refetch }}
 *
 * Estrategia de caché liviana: los productos crudos se guardan en un ref
 * para no re-fetchear al volver entre secciones en la misma sesión.
 */
const cache = { data: null, timestamp: 0 };
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutos

export function useProducts(categoria = null) {
  const [data, setData]       = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);
  const mounted = useRef(true);

  const load = useCallback(async (force = false) => {
    setLoading(true);
    setError(null);
    try {
      let raw;
      const now = Date.now();
      if (!force && cache.data && now - cache.timestamp < CACHE_TTL_MS) {
        raw = cache.data;
      } else {
        raw = await fetchProducts();
        cache.data = raw;
        cache.timestamp = now;
      }
      if (!mounted.current) return;
      const filtered = categoria ? raw.filter((p) => p.categoria === categoria) : raw;
      setData(filtered);
    } catch (err) {
      if (mounted.current) setError(err.message ?? "Error desconocido");
    } finally {
      if (mounted.current) setLoading(false);
    }
  }, [categoria]);

  useEffect(() => {
    mounted.current = true;
    load();
    return () => { mounted.current = false; };
  }, [load]);

  return { data, loading, error, refetch: () => load(true) };
}
