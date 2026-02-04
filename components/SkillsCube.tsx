"use client";
import { motion } from "framer-motion";
// Removi o SiCapcut da importação pois ele não existe na versão padrão
import { SiHtml5, SiCss3, SiJavascript, SiNextdotjs, SiReact, SiNodedotjs, SiMysql } from "react-icons/si";

// Ícone Oficial do CapCut (SVG Manual Corrigido)
const CapCutIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor"
    width="1em" height="1em" // Garante que ele use o tamanho da fonte
    className={className} 
    xmlns="http://www.w3.org/2000/svg"
  >
     {/* Path oficial do logo */}
    <path d="M4.667 4.14L10.5 10.654 4.667 17.143h4.72l5.834-6.489-5.834-6.514H4.667zm14.666 0h-4.72L8.78 10.654l5.833 6.489h4.72l-5.833-6.489 5.833-6.514z" />
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
  { name: "CapCut", icon: <CapCutIcon className="text-white" /> }, // Usa o ícone corrigido
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
          {/* O tamanho do ícone é definido aqui (4xl mobile, 5xl desk) */}
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