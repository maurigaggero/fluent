import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { brand } from "../data/site";

function Logo() {
  return (
    <a href="#top" className="font-title text-xl font-800 tracking-tight text-slate-900 sm:text-2xl">
      {brand.name}
      <span className="text-aurora">.</span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />

      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
        <Logo />

        <a
          href={brand.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="btn-aurora shrink-0 !w-auto !px-4 !py-2 !text-xs sm:!px-6 sm:!py-2.5 sm:!text-sm"
        >
          <span className="sm:hidden">Agendar</span>
          <span className="hidden sm:inline">Agendar reunión</span>
        </a>
      </div>
    </motion.header>
  );
}
