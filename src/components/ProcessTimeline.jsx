import { Rocket } from "lucide-react";
import { process } from "../data/site";

export default function ProcessTimeline() {
  return (
    <div className="rounded-2xl border border-slate-200/70 bg-white/60 p-3 backdrop-blur-xl sm:p-4 md:p-5">
      <p className="mb-3 text-center text-[10px] font-700 uppercase tracking-[0.15em] text-slate-500 sm:mb-4 sm:text-[11px] sm:tracking-[0.2em]">
        {process.label}
      </p>

      {/* Mobile: scroll horizontal */}
      <ol className="scrollbar-hide -mx-1 flex gap-2.5 overflow-x-auto px-1 pb-1 snap-x snap-mandatory sm:gap-3 lg:mx-0 lg:grid lg:grid-cols-5 lg:gap-2 lg:overflow-visible lg:pb-0 lg:px-0">
        {process.steps.map((step) => (
          <li
            key={step.num}
            className={`relative flex shrink-0 snap-center flex-col items-center justify-center rounded-xl border bg-white/80 text-center ${
              step.highlight
                ? "min-w-[148px] gap-1.5 border-fluent-violet/30 bg-gradient-to-br from-fluent-indigo/5 to-fluent-violet/5 px-3 py-4 lg:min-w-0 lg:gap-1 lg:px-3 lg:py-3"
                : "min-w-[120px] gap-0.5 border-slate-200/60 px-3 py-3 lg:min-w-0"
            }`}
          >
            {step.highlight ? (
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-fluent-indigo/15 to-fluent-violet/15 ring-1 ring-fluent-violet/20 lg:h-8 lg:w-8">
                <Rocket className="h-5 w-5 text-fluent-violet lg:h-4 lg:w-4" strokeWidth={1.8} />
              </div>
            ) : (
              <span className="text-lg leading-none lg:text-xl">{step.emoji}</span>
            )}

            <span className="font-title text-base font-800 text-fluent-indigo/70 lg:text-lg">
              {step.num}
            </span>
            <p className="font-title text-xs font-700 leading-tight text-slate-900">
              {step.title}
            </p>
            <p className="text-[10px] font-500 leading-snug text-slate-500">
              {step.duration}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
