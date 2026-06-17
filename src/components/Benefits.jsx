import { LineChart, TrendingUp, Users, Zap } from "lucide-react";
import Reveal from "./ui/Reveal";
import { benefits } from "../data/site";

const icons = { LineChart, Zap, Users, TrendingUp };

export default function Benefits() {
  return (
    <section
      id="beneficios"
      className="section-pad border-t border-slate-200/70 bg-slate-50/60"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-16 max-w-3xl">
          <span className="badge mb-6">{benefits.badge}</span>
          <h3 className="mt-6 font-title text-3xl font-800 leading-tight text-slate-900 md:text-5xl">
            {benefits.titleTop}{" "}
            <span className="text-aurora">{benefits.titleGradient}</span>
          </h3>
          <p className="mt-6 max-w-2xl font-500 text-slate-600">
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
                className="group flex gap-5 rounded-3xl border border-slate-200/80 bg-white/80 p-7 shadow-[0_18px_50px_-32px_rgba(15,23,42,0.35)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-fluent-cyan/40"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-fluent-indigo/15 to-fluent-cyan/15 ring-1 ring-slate-200">
                  <Icon className="h-7 w-7 text-fluent-indigo" strokeWidth={1.6} />
                </div>
                <div>
                  <h4 className="mb-2 font-title text-xl font-700 text-slate-900">
                    {item.title}
                  </h4>
                  <p className="text-[15px] font-500 leading-relaxed text-slate-600">
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
