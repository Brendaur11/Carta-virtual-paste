import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import { MainLayout }   from "./layout/MainLayout";
import HomePage         from "./pages/HomePage";
import CategoryPage     from "./pages/CategoryPage";
import ContactPage      from "./pages/ContactPage";

/**
 * App — entrada de la aplicación.
 *
 * Arquitectura de rutas:
 *  /              → HomePage (hero + destacados)
 *  /tortas        → CategoryPage filtrada
 *  /box-regalo    → CategoryPage filtrada
 *  /individuales  → CategoryPage filtrada
 *  /contacto      → ContactPage
 *
 * MainLayout persiste el Header, FloatingWA y BottomNav en todas las rutas.
 * Escalar a backend: solo hay que modificar sheetsService.js — el resto no cambia.
 */
export default function App() {
  return (
    <HelmetProvider>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index                 element={<HomePage />} />
            <Route path="tortas"         element={<CategoryPage categoria="tortas" />} />
            <Route path="box-regalo"     element={<CategoryPage categoria="box-regalo" />} />
            <Route path="individuales"   element={<CategoryPage categoria="individuales" />} />
            <Route path="contacto"       element={<ContactPage />} />
          </Route>
        </Routes>
    </HelmetProvider>
  );
}
