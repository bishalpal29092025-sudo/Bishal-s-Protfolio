"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/data/site";
import { SectionTitle } from "@/components/Experience";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-28 px-5 py-20">
      <SectionTitle kicker="Selected work" title="Projects with a pulse." />
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10, rotateX: 4, rotateY: -4 }}
      style={{ transformStyle: "preserve-3d" }}
      className="group relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#0d0a1c] p-6"
    >
      <div
        className={`absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br ${project.gradient} opacity-40 blur-2xl transition duration-500 group-hover:opacity-80`}
      />
      <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/50">
        {project.kind}
      </p>
      <h3 className="mt-3 font-display text-2xl font-bold">{project.name}</h3>
      <ul className="mt-5 space-y-3 text-sm leading-6 text-white/65">
        {project.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-cyan-100"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
