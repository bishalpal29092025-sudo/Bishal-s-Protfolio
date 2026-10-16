"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowDownRight, Mail, MapPin } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/BrandIcons";
import { useEffect, useState } from "react";
import { profile, rotatingRoles, stats } from "@/data/site";
import { MagneticButton } from "@/components/MagneticButton";
import { CountUp } from "@/components/CountUp";

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % rotatingRoles.length);
    }, 2400);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative mx-auto max-w-6xl px-5 pb-20 pt-32 md:pt-40">
      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.22em] text-cyan-200"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime-400" />
            Available for internships & full-time
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="font-display text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl"
          >
            {profile.name.split(" ")[0]}
            <br />
            <span className="text-gradient">{profile.name.split(" ")[1]}</span>
          </motion.h1>
          <div className="mt-5 h-10 overflow-hidden text-xl text-fuchsia-200 sm:text-2xl">
            <AnimatePresence mode="wait">
              <motion.p
                key={rotatingRoles[index]}
                initial={{ y: 28, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -28, opacity: 0 }}
                transition={{ duration: 0.35 }}
              >
                {rotatingRoles[index]}
              </motion.p>
            </AnimatePresence>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="mt-5 max-w-xl text-lg leading-8 text-white/70"
          >
            {profile.summary}
          </motion.p>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-white/60">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} /> {profile.location}
            </span>
            <a className="inline-flex items-center gap-1.5 hover:text-white" href={`mailto:${profile.email}`}>
              <Mail size={14} /> {profile.email}
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <MagneticButton href="#projects">See projects</MagneticButton>
            <a
              href={profile.resume}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white/80 transition hover:border-white/40 hover:text-white"
            >
              Download resume <ArrowDownRight size={16} />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-full border border-white/10 p-3 hover:bg-white/10">
              <GitHubIcon />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full border border-white/10 p-3 hover:bg-white/10">
              <LinkedInIcon />
            </a>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: -4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="spin-slow absolute -inset-6 rounded-[2.2rem] bg-[conic-gradient(from_120deg,#22d3ee,#a78bfa,#f472b6,#fbbf24,#22d3ee)] opacity-70 blur-[2px]" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#0b0818]/90 p-7">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-300">
              systems / web3 / ai
            </p>
            <p className="mt-4 font-display text-3xl font-bold leading-tight">
              Shipping products that feel fast, colorful, and on-chain ready.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-white/5 p-4">
                  <p className="font-display text-3xl font-bold text-amber-300">
                    <CountUp value={stat.value} />
                    {stat.suffix}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-white/55">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
