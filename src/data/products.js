// ─────────────────────────────────────────────────────────────────
// CONFIGURACIÓN DEL DUEÑO
// ─────────────────────────────────────────────────────────────────

/** Número de WhatsApp sin + ni espacios */
export const WA_NUMBER = "549XXXXXXXXX";

/**
 * ID de Google Sheets publicada como CSV.
 * Para obtener el URL correcto:
 * 1. Abrir la hoja → Archivo → Publicar en la web
 * 2. Seleccionar la pestaña "productos" → formato CSV
 * 3. Copiar el link y pegarlo como SHEET_URL abajo
 *
 * Columnas esperadas: id | categoria | nombre | descripcion | precio | tamano | imagen
 */
export const SHEET_URL =
  "https://opensheet.elk.sh/TU_GOOGLE_SHEET_ID/productos";

// ─────────────────────────────────────────────────────────────────
// DATOS DE EJEMPLO (se usan si SHEET_URL falla o en desarrollo)
// ─────────────────────────────────────────────────────────────────
export const FALLBACK_PRODUCTS = [
  {
    id: "1",
    categoria: "tortas",
    nombre: "Torta Red Velvet",
    descripcion:
      "Húmedo bizcocho de terciopelo rojo con relleno de queso crema y cobertura aterciopelada.",
    precio: 12500,
    tamano: "6 porciones",
    imagen: "",
  },
  {
    id: "2",
    categoria: "tortas",
    nombre: "Torta Naked de Frutos Rojos",
    descripcion:
      "Capas de génoise vainilla con crema chantilly y frutos del bosque frescos. Rústica y elegante.",
    precio: 14800,
    tamano: "8 porciones",
    imagen: "",
  },
  {
    id: "3",
    categoria: "tortas",
    nombre: "Torta de Chocolate Belga",
    descripcion:
      "Tres capas de chocolate 70% con ganache y pralinés de avellana. Intensidad pura.",
    precio: 16500,
    tamano: "10 porciones",
    imagen: "",
  },
  {
    id: "4",
    categoria: "box-regalo",
    nombre: "Box Dulce Amor",
    descripcion:
      "Selección de 12 alfajores artesanales, 6 trufas de chocolate y cookies de mantequilla.",
    precio: 7800,
    tamano: "18 unidades",
    imagen: "",
  },
  {
    id: "5",
    categoria: "box-regalo",
    nombre: "Box Té de la Tarde",
    descripcion:
      "Scones de naranja, financiers de almendras y madeleines de limón en caja kraft personalizable.",
    precio: 5500,
    tamano: "12 unidades",
    imagen: "",
  },
  {
    id: "6",
    categoria: "individuales",
    nombre: "Éclair de Café",
    descripcion:
      "Masa choux crujiente, crema diplomática de café de especialidad y glaseado brillante.",
    precio: 980,
    tamano: "1 unidad",
    imagen: "",
  },
  {
    id: "7",
    categoria: "individuales",
    nombre: "Tarteleta de Limón",
    descripcion:
      "Base sablée mantequilla, lemon curd ácido y merengue italiano tostado.",
    precio: 1100,
    tamano: "1 unidad",
    imagen: "",
  },
  {
    id: "8",
    categoria: "individuales",
    nombre: "Brownie con Sal Marina",
    descripcion:
      "Brownie fudgy de chocolate negro con fleur de sel y centro de dulce de leche.",
    precio: 850,
    tamano: "1 porción",
    imagen: "",
  },
];

export const CATEGORY_META = {
  tortas: {
    label: "Tortas",
    emoji: "🎂",
    description: "Tortas personalizadas para cada ocasión especial",
  },
  "box-regalo": {
    label: "Box de Regalo",
    emoji: "🎁",
    description: "La excusa perfecta para sorprender a alguien",
  },
  individuales: {
    label: "Individuales",
    emoji: "🍮",
    description: "Un capricho artesanal para cualquier momento",
  },
};
