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
          <h3 className="font-title text-xs font-800 uppercase tracking-[0.5em] text-fluent-cyan">
            Confían en nuestro trabajo
          </h3>
          <p className="mx-auto mt-4 max-w-2xl font-500 text-slate-600">
            Empresas e instituciones que ya transformaron su operación con
            nuestro software.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {clients.map((name, i) => (
            <Reveal
              key={name}
              delay={i * 0.08}
              className="group flex min-h-[120px] items-center justify-center rounded-2xl border border-slate-200/80 bg-white/70 px-6 py-8 text-center shadow-[0_14px_40px_-30px_rgba(15,23,42,0.35)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-fluent-cyan/40 hover:bg-white"
            >
              <span className="font-title text-lg font-700 tracking-tight text-slate-400 transition-colors duration-300 group-hover:text-slate-900 md:text-xl">
                {name}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
