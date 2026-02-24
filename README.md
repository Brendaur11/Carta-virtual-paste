# 🎂 Paste — Carta Digital

## Arrancar en desarrollo

```bash
npm install
npm run dev
```

## Publicar en producción

```bash
npm run build
# → carpeta dist/ lista para subir a Vercel, Netlify o cualquier hosting estático
```

---

## ✏️ Cómo actualizar los productos (sin tocar código)

### Opción recomendada: Google Sheets

1. Abrí [este template de Google Sheets](https://docs.google.com/spreadsheets/u/0/)
2. Copiá la plantilla `src/data/plantilla-productos.csv` con las columnas:
   `id | categoria | nombre | descripcion | precio | tamano | imagen`
3. Ir a **Archivo → Publicar en la web** → Seleccionar la pestaña → Formato: **JSON**
4. Copiar el ID del sheet de la URL y pegarlo en `src/data/products.js`:
   ```js
   export const SHEET_URL = "https://opensheet.elk.sh/TU_ID_DE_SHEET/productos";
   ```
5. ¡Listo! Los cambios se reflejan en el sitio en menos de 5 minutos.

### Columnas explicadas

| Columna      | Descripción                                            | Ejemplo              |
|--------------|--------------------------------------------------------|----------------------|
| `id`         | Número único del producto                              | 1                    |
| `categoria`  | `tortas`, `box-regalo` o `individuales`                | tortas               |
| `nombre`     | Nombre del producto                                    | Torta Red Velvet     |
| `descripcion`| Descripción breve (máx. 150 caracteres)                | Húmedo bizcocho...   |
| `precio`     | Precio en ARS sin puntos ni símbolo                    | 12500                |
| `tamano`     | Tamaño o cantidad                                      | 6 porciones          |
| `imagen`     | URL pública de la foto (o dejá vacío para usar emoji)  | https://...jpg       |

---

## 📞 Cambiar número de WhatsApp

Editar `src/data/products.js`:
```js
export const WA_NUMBER = "549XXXXXXXXX"; // ← tu número sin + ni espacios
```

---

## 🗂️ Estructura del proyecto

```
src/
 ├─ components/     # Átomos: ProductCard, SkeletonCard, FloatingWA
 ├─ sections/       # Secciones: ProductGrid (usa el hook + componentes)
 ├─ layout/         # MainLayout, BottomNav (persistentes entre rutas)
 ├─ hooks/          # useProducts() — fetch, caché, loading, error
 ├─ services/       # sheetsService.js — fetch + transform desde Google Sheets
 ├─ data/           # products.js (config + mock), plantilla-productos.csv
 └─ pages/          # HomePage, CategoryPage, ContactPage
```

## 🚀 Escalar a backend

Cuando el negocio crezca, solo hay que modificar `src/services/sheetsService.js`
y apuntar `fetchProducts()` a tu API REST. El resto de la app no cambia.
