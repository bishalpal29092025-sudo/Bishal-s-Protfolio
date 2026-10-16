"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function Background() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 50, damping: 20 });
  const sy = useSpring(y, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-fade" />
      <div className="blob absolute -left-24 top-10 h-80 w-80 rounded-full bg-fuchsia-500/35" />
      <div className="blob blob-delay absolute right-[-80px] top-40 h-96 w-96 rounded-full bg-cyan-400/25" />
      <div className="blob-slow absolute bottom-[-80px] left-1/3 h-[28rem] w-[28rem] rounded-full bg-violet-500/25" />
      <motion.div
        className="absolute h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          left: sx,
          top: sy,
          background:
            "radial-gradient(circle, rgba(251,191,36,0.16) 0%, transparent 62%)",
        }}
      />
      <div className="noise absolute inset-0" />
    </div>
  );
}
