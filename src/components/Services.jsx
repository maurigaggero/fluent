import Reveal from "./ui/Reveal";
import ServiceCard from "./ServiceCard";
import ProcessTimeline from "./ProcessTimeline";
import { services } from "../data/site";

export default function Services() {
  return (
    <section id="servicios" className="section-pad">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-8 max-w-3xl sm:mb-10">
          <span className="badge mb-4 sm:mb-6">Qué hacemos 🛠️</span>
          <h3 className="mt-4 font-title text-2xl font-800 leading-tight text-slate-900 sm:mt-6 sm:text-3xl md:text-5xl">
            Software a medida que{" "}
            <span className="text-aurora">fluye con tu negocio</span>
          </h3>
          <p className="mt-3 text-sm font-500 leading-relaxed text-slate-600 sm:mt-4 sm:text-base">
            Equipo cercano para PyMEs y startups: entendemos tu operación, diseñamos
            la solución y la lanzamos con demos semanales.
          </p>
          <div className="mt-4 h-1 w-16 rounded-full bg-aurora-btn sm:mt-6 sm:h-1.5 sm:w-20" />
        </Reveal>

        <ProcessTimeline />

        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
