/**
 * Skeleton placeholder — misma estructura que ProductCard
 * para evitar el layout shift al cargar.
 */
export function SkeletonCard() {
  return (
    <div className="bg-white rounded-xl2 overflow-hidden shadow-card animate-pulse">
      <div className="w-full h-52 bg-beige" />
      <div className="p-4 space-y-3">
        <div className="h-3 w-2/5 bg-beige rounded-full" />
        <div className="h-5 w-3/4 bg-beige rounded-full" />
        <div className="h-3 w-full bg-beige rounded-full" />
        <div className="h-3 w-5/6 bg-beige rounded-full" />
        <div className="flex justify-between pt-1">
          <div className="h-6 w-1/4 bg-beige rounded-full" />
          <div className="h-9 w-1/3 bg-beige rounded-full" />
        </div>
      </div>
    </div>
  );
}
