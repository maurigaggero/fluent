import { LineChart, TrendingUp, Users, Zap } from "lucide-react";
import Reveal from "./ui/Reveal";
import { benefits } from "../data/site";

const icons = { LineChart, Zap, Users, TrendingUp };

export default function Benefits() {
  return (
    <section
      id="beneficios"
      className="section-pad border-t border-white/5 bg-white/[0.01]"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-16 max-w-3xl">
          <span className="badge mb-6">{benefits.badge}</span>
          <h3 className="mt-6 font-title text-3xl font-800 leading-tight text-white md:text-5xl">
            {benefits.titleTop}{" "}
            <span className="text-aurora">{benefits.titleGradient}</span>
          </h3>
          <p className="mt-6 max-w-2xl font-500 text-slate-400">
            {benefits.subtitle}
          </p>
          <div className="mt-6 h-1.5 w-20 rounded-full bg-aurora-btn" />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {benefits.items.map((item, i) => {
            const Icon = icons[item.icon] ?? LineChart;
            return (
              <Reveal
                key={item.title}
                delay={i * 0.08}
                className="group flex gap-5 rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-fluent-cyan/40"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-fluent-indigo/20 to-fluent-cyan/20 ring-1 ring-white/10">
                  <Icon className="h-7 w-7 text-fluent-cyan" strokeWidth={1.6} />
                </div>
                <div>
                  <h4 className="mb-2 font-title text-xl font-700 text-white">
                    {item.title}
                  </h4>
                  <p className="text-[15px] font-500 leading-relaxed text-slate-400">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
