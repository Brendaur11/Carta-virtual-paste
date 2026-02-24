import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import { Phone, Instagram, MapPin, Clock } from "lucide-react";
import { WA_NUMBER } from "../data/products";

const WAIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M11.997 0C5.373 0 0 5.373 0 11.997c0 2.117.556 4.103 1.528 5.828L0 24l6.335-1.512A11.94 11.94 0 0011.997 24C18.621 24 24 18.627 24 11.997 24 5.373 18.621 0 11.997 0zm0 21.818a9.808 9.808 0 01-5.032-1.384l-.36-.214-3.76.897.938-3.663-.236-.374A9.806 9.806 0 012.18 11.997c0-5.42 4.397-9.82 9.817-9.82 5.42 0 9.82 4.4 9.82 9.82 0 5.42-4.4 9.821-9.82 9.821z"/>
  </svg>
);

const INFO = [
  { label: "Horario",   value: "Lun – Sáb\n9:00 – 19:00" },
  { label: "Encargos",  value: "Con 48 hs\nde anticipación" },
  { label: "Envíos",    value: "Zona centro\na consultar" },
  { label: "Pago",      value: "Efectivo\nTransferencia" },
];

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Paste · Contacto</title>
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="px-5 pt-6 pb-2"
      >
        <h2 className="font-serif text-[26px] text-[#3D2B22]">Contacto</h2>
        <p className="text-[13px] text-muted mt-1">Pedidos, consultas y encargos especiales</p>
      </motion.div>

      <div className="px-5 flex flex-col gap-4 mt-2 pb-8">
        {/* Card pedidos */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="bg-white rounded-xl2 p-6 shadow-card border border-rose/20"
        >
          <h3 className="font-serif text-xl mb-2">Hacé tu pedido 🎂</h3>
          <p className="text-[13px] text-muted leading-relaxed mb-5">
            Escribinos para encargos personalizados, fechas especiales o cualquier consulta. Respondemos en menos de 2 horas.
          </p>
          <a
            href={`https://wa.me/${WA_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-beige hover:bg-lime-500/40 text-[#3D2B22] px-4 py-3.5 rounded-2xl text-[14px] font-medium transition-colors mb-3"
          >
            <WAIcon />
            Escribir por WhatsApp
          </a>
          <a
            href="https://instagram.com/doslocos.pasteleria"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-beige hover:bg-lime-500/40 text-[#3D2B22] px-4 py-3.5 rounded-2xl text-[14px] font-medium transition-colors"
          >
            <Instagram size={18} className="text-mocha" />
            @doslocos.pasteleria
          </a>
        </motion.div>

        {/* Información útil */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12 }}
          className="bg-white rounded-xl2 p-6 shadow-card border border-rose/20"
        >
          <h3 className="font-serif text-xl mb-4">Información útil</h3>
          <div className="grid grid-cols-2 gap-3">
            {INFO.map(({ label, value }) => (
              <div key={label} className="bg-beige rounded-2xl p-3.5">
                <p className="text-[10px] uppercase tracking-wider text-muted mb-1">{label}</p>
                <p className="text-[13px] font-medium text-[#3D2B22] whitespace-pre-line leading-snug">{value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}
