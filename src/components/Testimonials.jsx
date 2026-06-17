import { Quote } from "lucide-react";
import Reveal from "./ui/Reveal";
import { testimonials } from "../data/site";

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      className="section-pad border-t border-slate-200/70"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-16 text-center">
          <span className="badge mb-6">{testimonials.badge}</span>
          <h3 className="mt-6 font-title text-3xl font-800 leading-tight text-slate-900 md:text-5xl">
            {testimonials.titleTop}{" "}
            <span className="text-aurora">{testimonials.titleGradient}</span>
          </h3>
          <p className="mx-auto mt-6 max-w-2xl font-500 text-slate-600">
            {testimonials.subtitle}
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.items.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 0.1}
              className="group relative flex flex-col rounded-3xl border border-slate-200/80 bg-white/80 p-8 shadow-[0_18px_50px_-32px_rgba(15,23,42,0.35)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-fluent-violet/40"
            >
              <Quote className="mb-5 h-9 w-9 text-fluent-violet/60" />
              <p className="flex-1 text-[15px] font-500 leading-relaxed text-slate-600">
                {t.quote}
              </p>
              <div className="mt-8 flex items-center gap-4 border-t border-slate-200/70 pt-6">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${t.accent} font-title text-sm font-800 text-white ring-2 ring-white`}
                >
                  {t.initials}
                </div>
                <div>
                  <h4 className="font-title text-base font-700 text-slate-900">
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
