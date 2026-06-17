import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

export default function TeamCard({ member, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 0.9, 0.2, 1] }}
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-colors duration-300 hover:border-fluent-violet/40"
    >
      <div className="mb-4 flex items-center gap-4">
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${member.accent} font-title text-lg font-800 text-white ring-2 ring-white/10`}
        >
          {member.initials}
        </div>
        <div>
          <h4 className="font-title text-base font-700 text-white">{member.name}</h4>
          <p className="text-xs font-600 uppercase tracking-wider text-fluent-cyan">
            {member.role}
          </p>
        </div>
      </div>
      <p className="mb-6 text-sm leading-relaxed text-slate-400">{member.bio}</p>
      <a
        href={member.link}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 text-[10px] font-800 uppercase tracking-widest text-white/60 transition-colors hover:text-fluent-cyan"
      >
        <Linkedin className="h-4 w-4" />
        LinkedIn
      </a>
    </motion.div>
  );
}
