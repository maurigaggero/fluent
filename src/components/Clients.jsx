import Reveal from "./ui/Reveal";
import { clients } from "../data/site";

export default function Clients() {
  return (
    <section
      id="empresas"
      className="section-pad relative overflow-hidden border-y border-white/5 bg-white/[0.01]"
    >
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-12 text-center">
          <h3 className="font-title text-xs font-800 uppercase tracking-[0.5em] text-fluent-cyan">
            Confían en nuestro trabajo
          </h3>
          <p className="mx-auto mt-4 max-w-2xl font-500 text-slate-400">
            Empresas e instituciones que ya transformaron su operación con
            nuestro software.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {clients.map((name, i) => (
            <Reveal
              key={name}
              delay={i * 0.08}
              className="group flex min-h-[120px] items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-8 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-fluent-cyan/40 hover:bg-white/[0.07]"
            >
              <span className="font-title text-lg font-700 tracking-tight text-white/40 transition-colors duration-300 group-hover:text-white md:text-xl">
                {name}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
