import { industries } from "../data/site";

export default function IndustryMarquee() {
  const items = [...industries, ...industries];

  return (
    <div className="relative -mx-4 mt-6 overflow-hidden mask-fade-x sm:-mx-6 sm:mt-8 lg:mx-0">
      <div className="flex w-max animate-marquee gap-2 sm:gap-3">
        {items.map((tag, i) => (
          <span
            key={`${tag}-${i}`}
            className="shrink-0 rounded-full border border-slate-200/80 bg-white/70 px-3 py-1 text-[11px] font-600 text-slate-600 backdrop-blur-sm sm:px-4 sm:py-1.5 sm:text-xs"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
