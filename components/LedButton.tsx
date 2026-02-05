"use client";
import { playClickSound } from "@/utils/audio"; // Importa o som

interface LedButtonProps {
  title: string;
  url: string;
  color: "red" | "cyan" | "green" | "purple";
}

export default function LedButton({ title, url, color }: LedButtonProps) {
  const colors = {
    red: "from-red-600 to-orange-600 shadow-red-600/50",
    cyan: "from-cyan-500 to-blue-500 shadow-cyan-500/50",
    green: "from-green-500 to-emerald-500 shadow-green-500/50",
    purple: "from-purple-600 to-pink-600 shadow-purple-600/50",
  };

  return (
    <a
      href={url}
      target="_blank"
      onClick={() => playClickSound()} // TOCA O SOM AQUI
      className={`
        relative px-8 py-4 rounded-full font-black italic tracking-widest text-white uppercase
        bg-gradient-to-r ${colors[color]}
        shadow-[0_0_30px_rgba(0,0,0,0.5)]
        hover:shadow-[0_0_50px_rgba(255,255,255,0.4)]
        hover:scale-105 active:scale-95
        transition-all duration-300
        cursor-pointer
        z-10
      `}
    >
      {title}
    </a>
  );
}