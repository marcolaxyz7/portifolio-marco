"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { SiHtml5, SiCss3, SiJavascript, SiNextdotjs, SiReact, SiNodedotjs, SiMysql, SiCplusplus, SiAdobe } from "react-icons/si";

export default function SkillsCube() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  function handleMouse(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct * 200);
    y.set(yPct * 200);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  const techs = [
    { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
    { name: "CSS3", icon: <SiCss3 className="text-[#1572B6]" /> },
    { name: "JS", icon: <SiJavascript className="text-[#F7DF1E]" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
    { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
    { name: "C++", icon: <SiCplusplus className="text-[#00599C]" /> },
    { name: "Premiere", icon: <SiAdobe premierepro className="text-[#9999FF]" /> },
  ];

  return (
    <motion.div
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="grid grid-cols-3 gap-4 p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm cursor-grab active:cursor-grabbing hover:shadow-[0_0_40px_rgba(6,182,212,0.2)] transition-shadow w-fit mx-auto perspective-1000"
    >
      {techs.map((tech) => (
        <div key={tech.name} className="w-24 h-24 bg-black/40 border border-white/5 rounded-2xl flex flex-col items-center justify-center hover:bg-white/10 transition-all group shadow-inner">
          <div className="text-5xl group-hover:scale-110 transition-transform filter drop-shadow-lg">
            {tech.icon}
          </div>
        </div>
      ))}
    </motion.div>
  );
}