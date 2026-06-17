import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { brand, nav } from "../data/site";

function Logo() {
  return (
    <a href="#top" className="font-title text-2xl font-800 tracking-tight text-slate-900">
      {brand.name}
      <span className="text-aurora">.</span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-slate-200/80 bg-white/90 shadow-[0_10px_30px_-18px_rgba(15,23,42,0.3)] backdrop-blur-2xl"
          : "border-b border-transparent bg-white/70 backdrop-blur-xl"
      }`}
    >
      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-indigo-500/5 to-transparent" />

      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />

        <nav className="hidden items-center gap-7 text-[13px] font-700 uppercase tracking-wider md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-slate-500 transition-colors hover:text-slate-900 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-gradient-to-r after:from-indigo-400 after:to-violet-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={brand.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex btn-aurora !px-6 !py-2.5 !text-sm"
        >
          Empezar
        </a>

        <button
          aria-label="Abrir menú"
          onClick={() => setOpen(true)}
          className="text-slate-900 md:hidden"
        >
          <Menu className="h-7 w-7" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-40 flex h-screen flex-col items-center justify-center gap-8 bg-white/96 backdrop-blur-2xl md:hidden"
          >
            <button
              aria-label="Cerrar menú"
              onClick={() => setOpen(false)}
              className="absolute right-6 top-5 text-slate-500"
            >
              <X className="h-8 w-8" />
            </button>
            {nav.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
                className="font-title text-3xl font-800 text-slate-900 transition-colors hover:text-fluent-violet"
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
