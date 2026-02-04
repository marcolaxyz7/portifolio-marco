"use client";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { useEffect } from "react";

export default function MouseFollower() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // O "spring" faz o movimento ser suave (manteiga)
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{ x, y }}
      className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-50"
    >
      {/* O corpo do "bicho" com brilho neon */}
      <div className="w-full h-full rounded-full bg-cyan-500 blur-[2px] shadow-[0_0_15px_rgba(6,182,212,0.8)] opacity-70" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full" />
    </motion.div>
  );
}