import Reveal from "./ui/Reveal";
import TeamCard from "./TeamCard";
import { team } from "../data/site";

export default function Team() {
  return (
    <section
      id="equipo"
      className="section-pad border-t border-slate-200/70 bg-slate-50/60"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-16 text-center">
          <h3 className="font-title text-4xl font-800 text-slate-900">
            El equipo detrás de <span className="text-aurora">Fluent</span>
          </h3>
          <p className="mx-auto mt-4 max-w-2xl font-500 text-slate-600">
            Especialistas en traducir procesos complejos en soluciones simples,
            para que clientes, equipos y software hablen el mismo idioma.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
