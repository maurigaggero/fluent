import { Quote } from "lucide-react";
import Reveal from "./ui/Reveal";
import { testimonials } from "../data/site";

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      className="section-pad border-t border-white/5"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-16 text-center">
          <span className="badge mb-6">{testimonials.badge}</span>
          <h3 className="mt-6 font-title text-3xl font-800 leading-tight text-white md:text-5xl">
            {testimonials.titleTop}{" "}
            <span className="text-aurora">{testimonials.titleGradient}</span>
          </h3>
          <p className="mx-auto mt-6 max-w-2xl font-500 text-slate-400">
            {testimonials.subtitle}
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.items.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 0.1}
              className="group relative flex flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-fluent-violet/40"
            >
              <Quote className="mb-5 h-9 w-9 text-fluent-violet/60" />
              <p className="flex-1 text-[15px] font-500 leading-relaxed text-slate-300">
                {t.quote}
              </p>
              <div className="mt-8 flex items-center gap-4 border-t border-white/5 pt-6">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${t.accent} font-title text-sm font-800 text-white ring-2 ring-white/10`}
                >
                  {t.initials}
                </div>
                <div>
                  <h4 className="font-title text-base font-700 text-white">
                    {t.name}
                  </h4>
                  <p className="text-xs font-600 uppercase tracking-wider text-fluent-cyan">
                    {t.role}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
