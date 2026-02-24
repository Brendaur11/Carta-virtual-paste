import { NavLink } from "react-router-dom";
import { motion } from "motion/react";
import { Home, Cake, Gift, Cookie, Phone } from "lucide-react";

const NAV_ITEMS = [
  { to: "/",            label: "Inicio",       Icon: Home   },
  { to: "/tortas",      label: "Tortas",       Icon: Cake   },
  { to: "/box-regalo",  label: "Box Regalo",   Icon: Gift   },
  { to: "/individuales",label: "Individuales", Icon: Cookie },
  { to: "/contacto",    label: "Contacto",     Icon: Phone  },
];

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] bg-white/95 backdrop-blur-md border-t border-lime-500/30 flex z-50"
         style={{ paddingBottom: "max(10px, env(safe-area-inset-bottom))" }}>
      {NAV_ITEMS.map(({ to, label, Icon }) => (
        <NavLink
          key={to}
          to={to}
          end={to === "/"}
          className="flex-1"
        >
          {({ isActive }) => (
            <motion.div
              whileTap={{ scale: 0.9 }}
              className="flex flex-col items-center gap-1 pt-2 pb-1 cursor-pointer"
            >
              <div className={`w-10 h-10 rounded-[14px] flex items-center justify-center transition-colors ${isActive ? "bg-lime-500/40" : "bg-transparent"}`}>
                <Icon size={19} className={isActive ? "text-mocha" : "text-muted"} />
              </div>
              <span className={`text-[9px] font-medium tracking-wide ${isActive ? "text-mocha" : "text-muted"}`}>
                {label}
              </span>
            </motion.div>
          )}
        </NavLink>
      ))}
    </nav>
  );
}
