import { Outlet } from "react-router-dom";
import { BottomNav } from "./BottomNav";
import { FloatingWA } from "../components/FloatingWA";

/**
 * MainLayout
 * Wrapper persistente: header fijo + outlet de página + nav inferior + FAB WhatsApp.
 * El padding-bottom del main garantiza que el contenido no quede tapado por la nav.
 */
export function MainLayout() {
  return (
    <div className="max-w-[480px] mx-auto min-h-screen bg-cream relative">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-blue-100/20 px-5 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-lime-500/40 to-blue-100 flex items-center justify-center text-xl">
            🎂
          </div>
          <div>
            <p className="font-serif text-xl font-semibold text-[#3D2B22] leading-none">Paste</p>
            <p className="text-[10px] text-muted uppercase tracking-widest mt-0.5">Pastelería Artesanal</p>
          </div>
        </div>
        <span className="bg-lime-500/40 text-mocha text-[11px] font-medium px-3 py-1 rounded-full">
          ✨ Artesanal
        </span>
      </header>

      {/* Página activa */}
      <main className="pb-24">
        <Outlet />
      </main>

      {/* Persistentes */}
      <FloatingWA />
      <BottomNav />
    </div>
  );
}
