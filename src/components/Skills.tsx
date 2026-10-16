"use client";

import { motion } from "framer-motion";
import { marquee, skillGroups } from "@/data/site";
import { SectionTitle } from "@/components/Experience";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-28 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle kicker="Toolkit" title="A colorful stack, used in production." />
      </div>
      <div className="relative mt-10 overflow-hidden border-y border-white/10 py-4">
        <div className="marquee-track flex w-max gap-3">
          {[...marquee, ...marquee].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="rounded-full bg-gradient-to-r from-fuchsia-500/20 to-cyan-400/20 px-4 py-2 text-sm text-white"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-10 grid max-w-6xl gap-5 px-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-5"
          >
            <h3 className={`font-display text-xl font-bold ${group.color}`}>{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <motion.span
                  key={item}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="rounded-full bg-black/30 px-3 py-1.5 text-xs text-white/80"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
