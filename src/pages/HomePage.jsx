import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import { Cake } from "lucide-react";
import { ProductGrid } from "../sections/ProductGrid";

const CATEGORIES = [
  { path: "/tortas",       label: "🎂 Tortas"       },
  { path: "/box-regalo",   label: "🎁 Box Regalo"   },
  { path: "/individuales", label: "🍮 Individuales" },
];

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Paste · Pastelería Artesanal</title>
        <meta name="description" content="Tortas, boxes de regalo y delicias individuales artesanales. Pedí por WhatsApp." />
      </Helmet>

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-lime-500/40 via-lime-50 to-beige px-6 py-10 text-center relative overflow-hidden"
      >
        {/* Decorativos */}
        <span className="absolute top-4 right-6 text-5xl opacity-10 select-none">✦</span>
        <span className="absolute bottom-5 left-4 text-3xl opacity-10 select-none">✦</span>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-[11px] uppercase tracking-[.14em] text-mocha mb-3"
        >
          Pastelería Artesanal
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18 }}
          className="font-serif text-[34px] leading-[1.18] text-[#3D2B22] mb-3"
        >
          Dulces hechos<br />
          <em className="text-mocha">con locura y amor</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.26 }}
          className="text-[14px] text-mocha leading-relaxed max-w-[280px] mx-auto mb-6"
        >
          Tortas personalizadas, boxes de regalo y delicias individuales. Todo artesanal, todo con alma.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.34 }}
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate("/tortas")}
          className="inline-flex items-center gap-2 bg-mocha text-white px-6 py-3 rounded-full text-[14px] font-medium shadow-[0_4px_16px_rgba(122,92,78,.3)]"
        >
          <Cake size={17} />
          Ver la carta
        </motion.button>
      </motion.div>

      {/* Pills de categoría */}
      <div className="flex gap-2 px-5 pt-5 overflow-x-auto scrollbar-hide">
        {CATEGORIES.map(({ path, label }) => (
          <motion.button
            key={path}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(path)}
            className="flex-shrink-0 bg-white border border-rose/30 text-muted text-[13px] font-medium px-4 py-2 rounded-full hover:bg-rose hover:text-mocha transition-colors"
          >
            {label}
          </motion.button>
        ))}
      </div>

      {/* Destacados */}
      <div className="px-5 mt-6">
        <h2 className="font-serif text-2xl text-[#3D2B22]">Destacados</h2>
        <p className="text-[13px] text-muted mt-0.5">Los más pedidos de la semana</p>
      </div>
      <ProductGrid limit={3} />
    </>
  );
}
