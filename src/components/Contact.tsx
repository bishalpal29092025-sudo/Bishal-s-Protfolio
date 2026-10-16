"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/BrandIcons";
import { profile } from "@/data/site";
import { MagneticButton } from "@/components/MagneticButton";
import { SectionTitle } from "@/components/Experience";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-28 px-5 py-24">
      <div className="overflow-hidden rounded-[2.2rem] border border-white/10 bg-gradient-to-br from-fuchsia-600/25 via-violet-700/20 to-cyan-500/20 p-8 md:p-14">
        <SectionTitle kicker="Contact" title="Let’s build something loud." />
        <p className="mt-5 max-w-xl text-lg text-white/70">
          Open to internships, full-time roles, and collaborations across full stack, backend, AI, and blockchain.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <MagneticButton href={`mailto:${profile.email}`}>Email me</MagneticButton>
          <a
            href={profile.resume}
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium"
          >
            Download PDF resume
          </a>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {[
            { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
            { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
            { icon: LinkedInIcon, label: "LinkedIn", href: profile.linkedin },
            { icon: GitHubIcon, label: "GitHub", href: profile.github },
          ].map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center gap-3 rounded-2xl bg-black/25 px-4 py-4 text-sm hover:bg-black/40"
            >
              <item.icon size={18} className="text-amber-300" />
              {item.label}
            </motion.a>
          ))}
        </div>
      </div>
      <footer className="mt-10 flex flex-col items-center justify-between gap-3 pb-8 text-xs text-white/40 sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}. Built with Next.js + Framer Motion.</p>
        <p>Kolkata, India</p>
      </footer>
    </section>
  );
}
