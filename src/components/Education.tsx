"use client";

import { motion } from "framer-motion";
import { GraduationCap, Trophy } from "lucide-react";
import { achievements, education } from "@/data/site";
import { SectionTitle } from "@/components/Experience";

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl scroll-mt-28 px-5 py-20">
      <SectionTitle kicker="Background" title="School, scores, and wins." />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {education.map((item, index) => (
          <motion.article
            key={item.degree}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/15 to-cyan-400/10 p-7"
          >
            <GraduationCap className="text-amber-300" />
            <h3 className="mt-4 font-display text-2xl font-bold">{item.degree}</h3>
            <p className="mt-2 text-white/70">{item.school}</p>
            <p className="mt-4 font-mono text-sm text-cyan-200">
              {item.period} · {item.score}
            </p>
          </motion.article>
        ))}
      </div>
      <div className="mt-8 space-y-4">
        {achievements.map((item, index) => (
          <motion.p
            key={item}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-7 text-white/75"
          >
            <Trophy className="mt-0.5 shrink-0 text-fuchsia-300" size={18} />
            {item}
          </motion.p>
        ))}
      </div>
    </section>
  );
}
