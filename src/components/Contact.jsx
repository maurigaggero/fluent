import { MessageCircle } from "lucide-react";
import Reveal from "./ui/Reveal";
import { brand, contact } from "../data/site";

export default function Contact() {
  return (
    <section id="contacto" className="section-pad">
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200/80 bg-white/85 px-6 py-20 text-center shadow-[0_30px_80px_-40px_rgba(15,23,42,0.4)] backdrop-blur-2xl md:px-16">
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-fluent-indigo/15 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-fluent-cyan/15 blur-[120px]" />

          <div className="relative flex flex-col items-center">
            <Reveal>
              <span className="badge mb-6">
                <span className="h-2 w-2 rounded-full bg-fluent-mint animate-pulse-dot" />
                {contact.badge}
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h3 className="font-title text-5xl font-800 leading-tight text-slate-900 md:text-7xl">
                {contact.titleTop} <br className="hidden md:block" /> tu{" "}
                <span className="text-aurora">{contact.titleGradient}</span>
              </h3>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mx-auto mt-6 max-w-xl text-lg font-500 text-slate-600 md:text-xl">
                {contact.subtitle}
              </p>
            </Reveal>

            <Reveal delay={0.3} className="w-full">
              <a
                href={brand.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="btn-aurora mt-12 flex w-full !rounded-2xl !px-6 !py-4 !text-base transition-transform hover:scale-105 sm:inline-flex sm:w-auto sm:!px-10 sm:!py-5 sm:!text-lg"
              >
                <MessageCircle className="h-5 w-5 shrink-0 sm:h-6 sm:w-6" />
                <span className="whitespace-nowrap">{contact.cta}</span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
