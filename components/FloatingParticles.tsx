"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  top: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
}

export default function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Gera 50 pontinhos aleatórios apenas no lado do cliente (browser)
    const newParticles = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      top: Math.random() * 100, // Posição vertical aleatória %
      left: Math.random() * 100, // Posição horizontal aleatória %
      size: Math.random() * 3 + 1, // Tamanho entre 1px e 4px
      duration: Math.random() * 20 + 10, // Duração da animação (lenta)
      delay: Math.random() * 5, // Atraso inicial
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white"
          style={{
            top: `${particle.top}%`,
            left: `${particle.left}%`,
            width: particle.size,
            height: particle.size,
            opacity: Math.random() * 0.5 + 0.2, // Opacidade variável
            boxShadow: `0 0 ${particle.size * 2}px rgba(255, 255, 255, 0.8)`, // Brilho suave
          }}
          animate={{
            y: [0, -100, 0], // Flutua para cima e volta
            x: [0, Math.random() * 50 - 25, 0], // Flutua um pouco para os lados
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
}