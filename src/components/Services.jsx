import Reveal from "./ui/Reveal";
import ServiceCard from "./ServiceCard";
import { services } from "../data/site";

export default function Services() {
  return (
    <section id="servicios" className="section-pad">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-16 max-w-3xl">
          <span className="badge mb-6">Lo que hacemos</span>
          <h3 className="mt-6 font-title text-3xl font-800 leading-tight text-white md:text-5xl">
            El motor que <span className="text-aurora">potencia</span> tu negocio
          </h3>
          <div className="mt-6 h-1.5 w-20 rounded-full bg-aurora-btn" />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
