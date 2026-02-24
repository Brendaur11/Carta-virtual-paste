import { motion } from "motion/react";
import { ShoppingBag } from "lucide-react";
import { WA_NUMBER, CATEGORY_META } from "../data/products";

const waUrl = (nombre) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    `Hola! Quiero pedir la ${nombre} 🎂`
  )}`;

const formatPrice = (n) =>
  new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(n);

// Animación de entrada escalonada — cada card aparece desde abajo
const cardVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.38, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function ProductCard({ product, index = 0 }) {
  const { nombre, descripcion, precio, tamano, imagen, categoria } = product;
  const meta = CATEGORY_META[categoria] ?? { label: categoria, emoji: "🍰" };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      custom={index}
      whileHover={{ y: -3, boxShadow: "0 8px 30px rgba(122,92,78,.14)" }}
      className="bg-white rounded-xl2 overflow-hidden shadow-card border border-rose/20"
    >
      {/* Imagen */}
      {imagen ? (
        <img
          src={imagen}
          alt={nombre}
          loading="lazy"
          className="w-full h-52 object-cover"
        />
      ) : (
        <div className="w-full h-52 bg-gradient-to-br from-lime-400/40 to-lime-50 flex items-center justify-center text-6xl select-none">
          {meta.emoji}
        </div>
      )}

      {/* Cuerpo */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] uppercase tracking-wider font-medium bg-beige text-muted px-3 py-1 rounded-full">
            {meta.label}
          </span>
          <span className="text-[11px] text-muted">📏 {tamano}</span>
        </div>

        <h3 className="font-serif text-[19px] text-[#3D2B22] mb-1.5 leading-tight">
          {nombre}
        </h3>
        <p className="text-[13px] text-muted leading-relaxed mb-4">
          {descripcion}
        </p>

        <div className="flex items-center justify-between">
          <div>
            <span className="font-serif text-[22px] text-mocha font-semibold">
              {formatPrice(precio)}
            </span>
            <span className="text-xs text-muted ml-1">ARS</span>
          </div>

          <motion.a
            href={waUrl(nombre)}
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1.5 bg-lime-500/40 text-mocha px-4 py-2.5 rounded-full text-[13px] font-medium hover:bg-lime-500/60 transition-colors"
          >
            <ShoppingBag size={15} />
            Pedir
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
