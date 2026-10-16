"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/site";

export function Experience() {
  return (
    <section id="work" className="mx-auto max-w-6xl scroll-mt-28 px-5 py-20">
      <SectionTitle kicker="Experience" title="Where I have shipped." />
      <div className="relative mt-12 space-y-8 before:absolute before:left-[11px] before:top-3 before:h-[calc(100%-24px)] before:w-px before:bg-gradient-to-b before:from-fuchsia-400 before:via-cyan-400 before:to-amber-300 md:before:left-[19px]">
        {experience.map((job, index) => (
          <motion.article
            key={job.company}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            className="relative pl-10 md:pl-16"
          >
            <span className={`absolute left-0 top-2 h-6 w-6 rounded-full bg-gradient-to-br ${job.accent} md:h-10 md:w-10`} />
            <div className="glow-ring overflow-hidden rounded-3xl bg-white/5 p-6 md:p-8">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <h3 className="font-display text-2xl font-bold">{job.role}</h3>
                  <p className="mt-1 text-fuchsia-200">{job.company}</p>
                </div>
                <p className="font-mono text-xs text-cyan-200">
                  {job.period} · {job.location}
                </p>
              </div>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-white/70">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-mono text-xs uppercase tracking-[0.32em] text-fuchsia-300"
      >
        {kicker}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-2 font-display text-4xl font-extrabold tracking-tight sm:text-5xl"
      >
        {title}
      </motion.h2>
    </div>
  );
}
