import { Instagram, Linkedin, Mail } from "lucide-react";
import { brand, nav } from "../data/site";

export default function Footer() {
  return (
    <footer
      className="border-t border-slate-200/70 bg-white/70 backdrop-blur-xl"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8">
        <div className="flex flex-col items-center gap-5 sm:gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col items-center gap-0.5 md:items-start">
            <span className="font-title text-lg font-800 text-slate-900">
              {brand.name}
              <span className="text-aurora">.</span>
            </span>
            <a
              href={`mailto:${brand.email}`}
              className="text-xs font-500 text-slate-500 transition-colors hover:text-fluent-indigo sm:text-sm"
            >
              {brand.email}
            </a>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 sm:gap-x-5">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs font-600 text-slate-500 transition-colors hover:text-slate-900 sm:text-sm"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={brand.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition-colors hover:border-fluent-violet/40 hover:text-fluent-violet"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={brand.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition-colors hover:border-fluent-cyan/40 hover:text-fluent-cyan"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${brand.email}`}
              aria-label="Email"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition-colors hover:border-fluent-mint/40 hover:text-fluent-mint"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-5 border-t border-slate-200/70 pt-4 text-center sm:mt-6 sm:pt-5">
          <small className="text-[10px] font-500 uppercase tracking-wider text-slate-400 sm:text-[11px]">
            © {new Date().getFullYear()} {brand.name} · Hecho en Argentina
          </small>
        </div>
      </div>
    </footer>
  );
}
