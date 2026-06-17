import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Cloud,
  LayoutDashboard,
  LineChart,
  Plug,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const icons = {
  LayoutDashboard,
  Workflow,
  Plug,
  Cloud,
  ShieldCheck,
  LineChart,
};

export default function ServiceCard({ service, index }) {
  const Icon = icons[service.icon] ?? LayoutDashboard;
  const ref = useRef(null);
  const [glow, setGlow] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setGlow({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
      opacity: 1,
    });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setGlow((g) => ({ ...g, opacity: 0 }))}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 0.9, 0.2, 1] }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-colors duration-300 hover:border-fluent-violet/40"
    >
      {/* Spotlight glow que sigue al cursor */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: glow.opacity,
          background: `radial-gradient(360px circle at ${glow.x}% ${glow.y}%, rgba(168,85,247,0.18), transparent 70%)`,
        }}
      />

      <div className="relative">
        <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-fluent-indigo/20 to-fluent-cyan/20 p-3 ring-1 ring-white/10">
          <Icon className="h-7 w-7 text-fluent-cyan" strokeWidth={1.6} />
        </div>
        <h4 className="mb-3 font-title text-2xl font-700 text-white">
          {service.title}
        </h4>
        <p className="text-[15px] font-500 leading-relaxed text-slate-400">
          {service.desc}
        </p>
      </div>
    </motion.div>
  );
}
