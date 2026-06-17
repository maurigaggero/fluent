import { Instagram, Linkedin, Mail } from "lucide-react";
import { brand, footer } from "../data/site";

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/5 bg-fluent-deep/60 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="mb-6 font-title text-3xl font-800 tracking-tight text-white">
              {brand.name}
              <span className="text-aurora">.</span>
            </div>
            <p className="max-w-md text-sm font-500 leading-relaxed text-slate-400">
              {footer.tagline}
            </p>

            <div className="mt-8 flex items-center gap-3">
              <a
                href={brand.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all hover:-translate-y-0.5 hover:border-fluent-violet/40 hover:text-fluent-violet"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={brand.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all hover:-translate-y-0.5 hover:border-fluent-cyan/40 hover:text-fluent-cyan"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${brand.email}`}
                aria-label="Email"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all hover:-translate-y-0.5 hover:border-fluent-mint/40 hover:text-fluent-mint"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            {footer.columns.map((col) => (
              <div key={col.title}>
                <h5 className="mb-6 text-xs font-800 uppercase tracking-[0.2em] text-white">
                  {col.title}
                </h5>
                <ul className="space-y-4 text-sm font-500 text-slate-400">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="transition-colors hover:text-fluent-cyan"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h5 className="mb-6 text-xs font-800 uppercase tracking-[0.2em] text-white">
                Contacto
              </h5>
              <ul className="space-y-4 text-sm font-500 text-slate-400">
                <li>
                  <a
                    href={`mailto:${brand.email}`}
                    className="flex items-center gap-2 transition-colors hover:text-fluent-cyan"
                  >
                    <Mail className="h-4 w-4" />
                    {brand.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-fluent-mint animate-pulse-dot" />
                  <span>Soporte activo</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 border-t border-white/5 pt-8 text-[11px] font-500 uppercase tracking-wider text-slate-500 md:flex-row md:justify-between">
          <small>
            © {new Date().getFullYear()} {brand.name} Software. Todos los derechos
            reservados.
          </small>
          <small>Hecho en Argentina</small>
        </div>
      </div>
    </footer>
  );
}
