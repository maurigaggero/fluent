import { ArrowUpRight } from "lucide-react";
import { brand, hero, stats } from "../data/site";
import Counter from "./Counter";
import IndustryMarquee from "./IndustryMarquee";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative z-[1] min-h-[88vh] overflow-hidden sm:min-h-[90vh] lg:min-h-screen"
    >
      <img
        src={hero.image}
        alt={hero.imageAlt}
        className="absolute inset-0 h-full w-full scale-105 object-cover object-[70%_center] sm:object-[85%_center]"
        loading="eager"
        decoding="async"
      />

      {/* Tint aurora sobre la foto */}
      <div
        className="pointer-events-none absolute inset-0 bg-aurora-hero-tint"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white from-30% via-white/88 via-52% to-indigo-500/25 to-100% sm:via-48%"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent to-40%"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-2/5 bg-gradient-to-l from-violet-600/20 via-cyan-500/10 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex h-full min-h-[inherit] w-full max-w-7xl flex-col justify-end px-4 pb-10 pt-[calc(4.5rem+env(safe-area-inset-top,0px))] sm:justify-center sm:px-6 sm:pb-16 sm:pt-[calc(5.5rem+env(safe-area-inset-top,0px))] lg:pb-20 lg:pt-28">
        <div className="max-w-2xl lg:max-w-3xl">
          <h1 className="font-title text-[1.875rem] font-800 leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl xl:text-[4.25rem] xl:leading-[1.02]">
            {hero.title.map((part, i) =>
              typeof part === "string" ? (
                <span key={i}>{part}</span>
              ) : (
                <span key={i} className="text-aurora">
                  {part.highlight}
                </span>
              )
            )}
          </h1>

          <p className="mt-4 max-w-xl text-[15px] font-500 leading-relaxed text-slate-600 sm:mt-6 sm:text-lg md:text-xl">
            {hero.subtitle}
          </p>

          <dl className="mt-7 flex flex-wrap gap-x-7 gap-y-3 sm:mt-9 sm:gap-x-10">
            {stats.map((s) => (
              <div key={s.label} className="flex items-baseline gap-2">
                <span className="text-lg sm:text-xl" aria-hidden="true">
                  {s.emoji}
                </span>
                <div>
                  <dt className="font-title text-2xl font-800 leading-none text-slate-900 sm:text-3xl">
                    <Counter to={s.value} suffix={s.suffix} />
                  </dt>
                  <dd className="mt-1 text-xs font-600 uppercase tracking-wider text-slate-500 sm:text-sm">
                    {s.label}
                  </dd>
                </div>
              </div>
            ))}
          </dl>

          <a
            href={brand.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="btn-aurora group mt-7 sm:mt-9 sm:!w-auto"
          >
            {hero.primaryCta}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:h-5 sm:w-5" />
          </a>

          <IndustryMarquee />
        </div>
      </div>
    </section>
  );
}
