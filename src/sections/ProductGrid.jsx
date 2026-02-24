import { useProducts } from "../hooks/useProducts";
import { ProductCard } from "../components/ProductCard";
import { SkeletonCard } from "../components/SkeletonCard";
import { RefreshCw } from "lucide-react";

function ErrorState({ message, onRetry }) {
  return (
    <div className="text-center py-16 px-5">
      <p className="text-5xl mb-4">⚠️</p>
      <h3 className="font-serif text-xl mb-2">No pudimos cargar los productos</h3>
      <p className="text-sm text-muted mb-5">{message}</p>
      <button
        onClick={onRetry}
        className="inline-flex items-center gap-2 bg-mocha text-white px-5 py-2.5 rounded-full text-sm font-medium"
      >
        <RefreshCw size={15} />
        Reintentar
      </button>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="text-center py-16 px-5">
      <p className="text-5xl mb-4">🍰</p>
      <h3 className="font-serif text-xl mb-2">Próximamente</h3>
      <p className="text-sm text-muted">Estamos preparando algo delicioso para esta sección.</p>
    </div>
  );
}

/**
 * ProductGrid — sección reutilizable para mostrar productos filtrados por categoría.
 * @param {string|null} categoria
 * @param {number}      limit  — 0 = sin límite
 */
export function ProductGrid({ categoria = null, limit = 0 }) {
  const { data, loading, error, refetch } = useProducts(categoria);

  if (loading) {
    return (
      <div className="px-5 flex flex-col gap-4 mt-4">
        {[1, 2, 3].map((i) => <SkeletonCard key={i} />)}
      </div>
    );
  }

  if (error) return <ErrorState message={error} onRetry={refetch} />;
  if (!data.length) return <EmptyState />;

  const items = limit > 0 ? data.slice(0, limit) : data;

  return (
    <div className="px-5 flex flex-col gap-4 mt-4">
      {items.map((product, i) => (
        <ProductCard key={product.id} product={product} index={i} />
      ))}
    </div>
  );
}
