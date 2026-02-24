import { motion } from "motion/react";
import { WA_NUMBER } from "@/data/products";

// SVG WhatsApp inline para evitar dependencias extra
const WAIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M11.997 0C5.373 0 0 5.373 0 11.997c0 2.117.556 4.103 1.528 5.828L0 24l6.335-1.512A11.94 11.94 0 0011.997 24C18.621 24 24 18.627 24 11.997 24 5.373 18.621 0 11.997 0zm0 21.818a9.808 9.808 0 01-5.032-1.384l-.36-.214-3.76.897.938-3.663-.236-.374A9.806 9.806 0 012.18 11.997c0-5.42 4.397-9.82 9.817-9.82 5.42 0 9.82 4.4 9.82 9.82 0 5.42-4.4 9.821-9.82 9.821z" />
  </svg>
);

export function FloatingWA() {
  return (
    <motion.a
      href={`https://wa.me/${WA_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.8, type: "spring", stiffness: 300 }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-24 right-4 z-50 w-[52px] h-[52px] rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_4px_18px_rgba(37,211,102,.45)]"
      style={{ right: "max(calc(50vw - 240px + 16px), 16px)" }}
    >
      <WAIcon />
    </motion.a>
  );
}
