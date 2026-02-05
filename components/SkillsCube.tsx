"use client";
import { motion } from "framer-motion";
// Removendo imports que podem dar erro
import { SiHtml5, SiCss3, SiJavascript, SiNextdotjs, SiReact, SiNodedotjs, SiMysql } from "react-icons/si";

// Ícone CapCut Desenhado Manualmente (Estilo ><)
const CapCutIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor"
    width="1em" height="1em"
    className={className} 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Forma da Esquerda (> apontando pra direita) */}
    <path d="M2 5 L9 12 L2 19 L5 19 L12 12 L5 5 Z" />
    {/* Forma da Direita (< apontando pra esquerda) */}
    <path d="M22 5 L15 12 L22 19 L19 19 L12 12 L19 5 Z" />
  </svg>
);

const techs = [
  { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
  { name: "CSS3", icon: <SiCss3 className="text-[#1572B6]" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
  { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
  { name: "CapCut", icon: <CapCutIcon className="text-white" /> }, // Agora com o logo certo
];

export default function SkillsHorizontal() {
  return (
    <div className="grid grid-cols-4 gap-8 md:gap-12 my-8 justify-items-center">
      {techs.map((tech, i) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ scale: 1.2, rotate: 5 }}
          className="flex flex-col items-center gap-2 group cursor-pointer"
        >
          <div className="text-4xl md:text-5xl filter drop-shadow-lg group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all">
            {tech.icon}
          </div>
          <span className="text-[10px] uppercase font-bold opacity-0 group-hover:opacity-100 transition-opacity text-gray-400">
            {tech.name}
          </span>
        </motion.div>
      ))}
    </div>
  );
}