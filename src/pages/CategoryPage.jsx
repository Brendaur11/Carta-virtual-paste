import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import { CATEGORY_META } from "@/data/products";
import { ProductGrid } from "@/sections/ProductGrid";

/**
 * CategoryPage — página genérica para una categoría de productos.
 * Se reutiliza para /tortas, /box-regalo e /individuales.
 */
export default function CategoryPage({ categoria }) {
  const meta = CATEGORY_META[categoria] ?? { label: categoria, emoji: "🍰", description: "" };

  return (
    <>
      <Helmet>
        <title>{`Paste · ${meta.label}`}</title>
        <meta name="description" content={meta.description} />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="px-5 pt-6 pb-2"
      >
        <h2 className="font-serif text-[26px] text-[#3D2B22]">
          {meta.emoji} {meta.label}
        </h2>
        <p className="text-[13px] text-muted mt-1">{meta.description}</p>
      </motion.div>

      <ProductGrid categoria={categoria} />
    </>
  );
}
