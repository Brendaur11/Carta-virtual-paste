import { SHEET_URL, FALLBACK_PRODUCTS } from "@/data/products";

/**
 * Transforma una fila cruda del sheet en un objeto producto tipado.
 * Esto desacopla el formato del sheet del formato interno de la app.
 */
function transformRow(row) {
  return {
    id:          String(row.id ?? ""),
    categoria:   String(row.categoria ?? "").toLowerCase().trim(),
    nombre:      String(row.nombre ?? ""),
    descripcion: String(row.descripcion ?? ""),
    precio:      Number(String(row.precio ?? "0").replace(/[^0-9.]/g, "")),
    tamano:      String(row.tamano ?? ""),
    imagen:      String(row.imagen ?? ""),
  };
}

/**
 * Carga productos desde Google Sheets vía opensheet.elk.sh.
 * Si falla, retorna los datos de ejemplo (FALLBACK_PRODUCTS).
 */
export async function fetchProducts() {
  try {
    const res = await fetch(SHEET_URL, { cache: "no-cache" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    return json.map(transformRow).filter((p) => p.id && p.nombre);
  } catch (err) {
    console.warn("[sheetsService] Usando datos locales:", err.message);
    return FALLBACK_PRODUCTS;
  }
}
