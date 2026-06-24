import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-top"
          onClick={scrollUp}
          initial={{ opacity: 0, y: 16, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.8 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.92 }}
          aria-label="Volver arriba"
          className="fixed right-4 z-50 flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/50 bg-white/55 text-slate-500 shadow-[0_4px_24px_-8px_rgba(15,23,42,0.18)] backdrop-blur-2xl transition-all duration-300 hover:border-slate-200/70 hover:bg-white/70 hover:text-slate-600 sm:bottom-6 sm:left-6 sm:right-auto sm:h-11 sm:w-11 sm:rounded-2xl"
          style={{ bottom: "max(1.25rem, env(safe-area-inset-bottom))" }}
        >
          <ChevronUp className="h-5 w-5" strokeWidth={2} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
