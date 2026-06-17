import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { brand, hero, stats } from "../data/site";
import Counter from "./Counter";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 0.9, 0.2, 1] } },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-32"
    >
      <div className="mx-auto w-full max-w-7xl px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          <motion.div variants={item}>
            <span className="badge">
              <span className="h-2 w-2 rounded-full bg-fluent-mint animate-pulse-dot" />
              {hero.badge}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-8 font-title text-5xl font-800 leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-8xl"
          >
            {hero.titleTop} <br />
            <span className="text-aurora">{hero.titleGradient}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 max-w-2xl text-lg font-500 leading-relaxed text-slate-400 md:text-2xl"
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-12 flex flex-col gap-4 sm:flex-row sm:gap-5"
          >
            <a href={brand.whatsapp} target="_blank" rel="noreferrer" className="btn-aurora group">
              {hero.primaryCta}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#servicios" className="btn-ghost">
              {hero.secondaryCta}
            </a>
          </motion.div>

          <motion.dl
            variants={item}
            className="mt-16 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3"
          >
            {stats.map((s) => (
              <div key={s.label} className="glass rounded-2xl px-5 py-4">
                <dt className="font-title text-3xl font-800 text-white">
                  <Counter to={s.value} suffix={s.suffix} />
                </dt>
                <dd className="mt-1 text-xs font-500 uppercase tracking-wider text-slate-400">
                  {s.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>
      </div>
    </section>
  );
}
