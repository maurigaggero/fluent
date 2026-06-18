import Reveal from "./ui/Reveal";
import { clients } from "../data/site";

export default function Clients() {
  return (
    <section
      id="empresas"
      className="section-pad relative overflow-hidden border-y border-slate-200/70 bg-slate-50/60"
    >
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-12 text-center">
          <h3 className="font-title text-xs font-800 uppercase tracking-[0.5em] text-fluent-violet">
            Casos reales
          </h3>
          <p className="mx-auto mt-4 max-w-2xl font-500 text-slate-600">
            Empresas e instituciones que ordenaron procesos, conectaron equipos
            y mejoraron su atención con software a medida.
          </p>
        </Reveal>

        <div className="flex flex-wrap justify-center gap-4">
          {clients.map((name, i) => (
            <Reveal
              key={name}
              delay={i * 0.08}
              className="group relative flex min-h-[120px] w-[calc(50%-0.5rem)] items-center justify-center overflow-hidden rounded-2xl border border-white/60 bg-white/40 px-6 py-8 text-center shadow-[0_24px_60px_-32px_rgba(79,70,229,0.4)] ring-1 ring-inset ring-white/50 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1.5 hover:border-white/80 hover:shadow-[0_36px_80px_-30px_rgba(168,85,247,0.45)] sm:w-[calc(33.333%-0.667rem)] lg:w-[220px]"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-fluent-indigo to-fluent-cyan opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
              <span className="relative font-title text-lg font-700 tracking-tight text-slate-500 transition-colors duration-300 group-hover:text-slate-900 md:text-xl">
                {name}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
