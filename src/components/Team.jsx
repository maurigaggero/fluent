import Reveal from "./ui/Reveal";

export default function Team() {
  return (
    <section
      id="equipo"
      className="section-pad border-t border-slate-200/70 bg-slate-50/60"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h3 className="font-title text-4xl font-800 text-slate-900">
            Quiénes somos
          </h3>
          <p className="mx-auto mt-6 font-500 leading-relaxed text-slate-600">
            Somos un equipo cercano que entiende procesos, arma soluciones
            simples y acompaña cada proyecto desde la primera charla hasta la puesta
            en marcha.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
