import { Quote } from "lucide-react";
import Reveal from "./ui/Reveal";
import { clients, featuredCase, testimonials } from "../data/site";

export default function Clients() {
  return (
    <section
      id="clientes"
      className="section-pad-compact relative overflow-hidden border-y border-slate-200/70 bg-slate-50/60"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-6 text-center sm:mb-8">
          <span className="badge mb-3 sm:mb-4">Casos reales 💬</span>
          <h3 className="font-title text-xl font-800 text-slate-900 sm:text-2xl md:text-3xl">
            Proyectos que hablan por nosotros
          </h3>
        </Reveal>

        <Reveal className="mb-6 sm:mb-8">
          <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-4 backdrop-blur-xl sm:p-6 md:mx-auto md:max-w-3xl md:p-8">
            <div className="mb-3 flex flex-col gap-2 sm:mb-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
              <span className="font-title text-lg font-800 text-slate-900 sm:text-xl">
                {featuredCase.client}
              </span>
              <span className="w-fit rounded-full bg-fluent-indigo/10 px-2.5 py-0.5 text-[10px] font-700 uppercase tracking-wider text-fluent-indigo sm:px-3 sm:text-[11px]">
                {featuredCase.industry}
              </span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="mb-1 text-[10px] font-700 uppercase tracking-wider text-slate-400 sm:text-[11px]">
                  Desafío
                </p>
                <p className="text-sm font-500 leading-relaxed text-slate-600">
                  {featuredCase.challenge}
                </p>
              </div>
              <div>
                <p className="mb-1 text-[10px] font-700 uppercase tracking-wider text-fluent-violet sm:text-[11px]">
                  Resultado ✨
                </p>
                <p className="text-sm font-500 leading-relaxed text-slate-600">
                  {featuredCase.result}
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mb-6 grid gap-3 sm:mb-8 sm:gap-4 md:grid-cols-2">
          {testimonials.slice(0, 2).map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 0.08}
              className="flex flex-col rounded-2xl border border-slate-200/80 bg-white/80 p-4 backdrop-blur-xl sm:p-6"
            >
              <Quote className="mb-2 h-6 w-6 text-fluent-violet/60 sm:mb-3 sm:h-7 sm:w-7" />
              <p className="flex-1 text-sm font-500 leading-relaxed text-slate-600">
                {t.quote}
              </p>
              <div className="mt-4 flex items-center gap-3 border-t border-slate-200/70 pt-3 sm:mt-5 sm:pt-4">
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${t.accent} font-title text-[10px] font-800 text-white sm:h-10 sm:w-10 sm:text-xs`}
                >
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <h4 className="truncate font-title text-sm font-700 text-slate-900">{t.name}</h4>
                  <p className="truncate text-[10px] font-600 uppercase tracking-wider text-fluent-cyan">
                    {t.role}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap sm:justify-center sm:gap-3">
          {clients.map((name, i) => (
            <Reveal
              key={name}
              delay={i * 0.06}
              className="group flex min-h-[56px] items-center justify-center rounded-xl border border-white/60 bg-white/40 px-3 py-2.5 text-center shadow-[0_16px_40px_-24px_rgba(79,70,229,0.35)] ring-1 ring-inset ring-white/50 backdrop-blur-2xl transition-all duration-300 sm:min-h-[64px] sm:w-[calc(33.333%-0.5rem)] sm:px-4 sm:py-3 lg:w-[180px]"
            >
              <span className="font-title text-xs font-700 leading-tight tracking-tight text-slate-500 transition-colors group-hover:text-slate-900 sm:text-sm md:text-base">
                {name}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
