"use client";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";

export default function MouseFollower() {
  // Começa fora da tela para não piscar no canto
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Configuração da mola (Spring) para o movimento ser suave
  // Diminuí um pouco a rigidez (stiffness) para o afastamento ser mais "preguiçoso" e fluido
  const springConfig = { damping: 20, stiffness: 100 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  // Refs para controlar o tempo e a última posição
  const timer = useRef<NodeJS.Timeout | null>(null);
  const lastPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Centraliza o círculo no ponteiro (o círculo tem 32px, então -16px centraliza)
      const posX = e.clientX - 16;
      const posY = e.clientY - 16;
      
      // Guarda a posição real atual
      lastPos.current = { x: posX, y: posY };
      
      // 1. Enquanto mexe, segue o mouse fielmente
      mouseX.set(posX);
      mouseY.set(posY);

      // 2. Limpa o timer anterior (o usuário ainda está mexendo)
      if (timer.current) clearTimeout(timer.current);

      // 3. Inicia contagem: Se ficar 0.6s sem mexer...
      timer.current = setTimeout(() => {
        // ...Move o círculo 60px para baixo e direita
        // Assim libera a visão do que está embaixo do cursor
        mouseX.set(lastPos.current.x + 60);
        mouseY.set(lastPos.current.y + 60);
      }, 600);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (timer.current) clearTimeout(timer.current);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{ x, y }}
      className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-50 mix-blend-screen"
    >
      {/* O corpo do "bicho" */}
      <div className="w-full h-full rounded-full bg-cyan-500 blur-[2px] shadow-[0_0_15px_rgba(6,182,212,0.8)] opacity-70 transition-opacity duration-500" />
      
      {/* O pontinho central branco (mira) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full" />
    </motion.div>
  );
}