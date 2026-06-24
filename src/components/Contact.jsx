import { Gem, MessageCircle, ShieldCheck, Zap } from "lucide-react";
import Reveal from "./ui/Reveal";
import { brand, contact, trustPillars } from "../data/site";

const pillarIcons = { Zap, Gem, ShieldCheck };

export default function Contact() {
  return (
    <section id="contacto" className="section-pad-compact">
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/85 px-4 py-10 text-center shadow-[0_30px_80px_-40px_rgba(15,23,42,0.4)] backdrop-blur-2xl sm:rounded-[2.5rem] sm:px-6 sm:py-16 md:px-16 md:py-20">
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-fluent-indigo/15 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-fluent-cyan/15 blur-[120px]" />

          <div className="relative flex flex-col items-center">
            <Reveal>
              <span className="badge mb-4 sm:mb-6">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-fluent-mint animate-pulse-dot sm:h-2 sm:w-2" />
                {contact.badge}
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h3 className="font-title text-3xl font-800 leading-tight text-slate-900 sm:text-4xl md:text-6xl">
                {contact.titleTop}{" "}
                <span className="text-aurora">{contact.titleGradient}</span>
              </h3>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mx-auto mt-4 max-w-xl text-sm font-500 leading-relaxed text-slate-600 sm:mt-5 sm:text-base md:text-lg">
                {contact.subtitle}
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-6 flex w-full flex-col gap-2 sm:mt-8 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-3">
                {trustPillars.map((p) => {
                  const Icon = pillarIcons[p.icon] ?? Zap;
                  return (
                    <span
                      key={p.label}
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-xs font-600 text-slate-600"
                    >
                      <Icon className="h-3.5 w-3.5 shrink-0 text-fluent-indigo" strokeWidth={2} />
                      {p.label}
                    </span>
                  );
                })}
              </div>
            </Reveal>

            <Reveal delay={0.3} className="mt-8 w-full sm:mt-10">
              <a
                href={brand.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="btn-aurora transition-transform hover:scale-[1.02] sm:hover:scale-105"
              >
                <MessageCircle className="h-5 w-5 shrink-0" />
                <span>{contact.cta}</span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
