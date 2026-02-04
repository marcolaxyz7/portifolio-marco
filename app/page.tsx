"use client";
import MouseFollower from "@/components/MouseFollower";
import LedButton from "@/components/LedButton";
import SocialH from "@/components/SocialH"; 
import SkillsHorizontal from "@/components/SkillsCube";
import FloatingParticles from "@/components/FloatingParticles"; 
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      <MouseFollower />
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#121212_1px,transparent_1px),linear-gradient(to_bottom,#121212_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
      <FloatingParticles />

      <div className="relative z-10 max-w-3xl mx-auto px-6 py-20 flex flex-col items-center">
        
        {/* HERO & NOME 3D PRATEADO */}
        <section className="text-center mb-10 w-full">
          <motion.h1 
            initial={{ scale: 0.9, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }}
            // 1. Gradiente Metálico (Prata/Cromo)
            className="text-6xl md:text-9xl font-[900] tracking-tighter uppercase leading-none italic text-transparent bg-clip-text bg-gradient-to-br from-gray-100 via-white to-gray-400 py-6 pr-6"
            style={{ 
              fontFamily: "'Arial Black', sans-serif",
              // 2. EFEITO 3D METÁLICO (Bordas brilhantes e corpo de metal)
              textShadow: `
                1px 1px 0px #ffffff, /* Borda de luz */
                2px 2px 0px #c0c0c0,
                3px 3px 0px #a0a0a0,
                4px 4px 0px #808080,
                5px 5px 10px rgba(0,0,0,0.5) /* Sombra no chão */
              `
            }}
          >
            MARCO<br/>ANTONIO
          </motion.h1>
          
          <div className="mt-6 flex flex-wrap justify-center gap-4">
             <span className="px-4 py-2 bg-white text-black text-lg font-black uppercase italic tracking-wider shadow-[0_0_20px_rgba(255,255,255,0.3)]">
               Fullstack Junior
             </span>
             <span className="px-4 py-2 border border-white/30 text-white text-lg font-black uppercase italic tracking-wider backdrop-blur-sm">
               Vibe Coding
             </span>
          </div>
        </section>

        {/* REDES SOCIAIS */}
        <SocialH />

        {/* CARDS DE INFO */}
        <section className="w-full mt-12 space-y-8">
          
          {/* Card: Formação */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-8 bg-zinc-900/60 border border-white/10 rounded-3xl backdrop-blur-xl hover:border-cyan-500/50 transition-all shadow-2xl"
          >
            <div className="flex flex-col gap-6">
              <div className="border-b border-white/10 pb-4">
                <h3 className="text-3xl md:text-5xl font-black uppercase italic text-white mb-2 leading-none">
                  Técnico em Informática
                </h3>
                <p className="text-2xl text-cyan-400 font-bold uppercase tracking-wide">
                  Para Internet
                </p>
              </div>
              
              <p className="text-gray-300 font-mono text-sm leading-relaxed">
                Formação técnica completa pela <strong className="text-white text-lg">ETEC</strong>, com foco em desenvolvimento web, lógica de programação e banco de dados.
              </p>

              <div className="mt-2 p-6 rounded-2xl bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-500/30 flex flex-col items-start gap-2 group cursor-default">
                <span className="text-cyan-400 font-bold uppercase tracking-widest text-[10px] group-hover:text-cyan-300 transition-colors">
                  Projeto de Conclusão (TCC)
                </span>
                <h4 className="text-5xl font-black uppercase italic text-white drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                  CondoWay
                </h4>
                <p className="text-xs text-gray-400 font-mono">
                  Plataforma completa para gestão de condomínios.
                </p>
              </div>
            </div>
          </motion.div>

           {/* Card: Expertise */}
           <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-8 bg-zinc-900/60 border border-white/10 rounded-3xl backdrop-blur-xl hover:border-purple-500/50 transition-all shadow-2xl"
          >
            <h3 className="text-3xl md:text-4xl font-black uppercase italic text-white mb-6">
              Minha Expertise
            </h3>
            <p className="text-lg text-gray-300 font-mono leading-relaxed">
              Minha base técnica cobre as tecnologias abaixo, mas não me limito a elas. O foco é resolver problemas reais.
              <br/><br/>
              <span className="text-white bg-white/10 px-3 py-1 rounded border border-white/20 uppercase text-xs font-bold tracking-widest">
                Learning Path:
              </span> 
              <br/>
              Estou mergulhando nos fundamentos de <strong className="text-purple-400 text-xl">C++</strong> e Game Dev. Sei que é uma jornada longa e estou apenas no começo (ainda não sei nada, mas aprendo rápido 🚀).
            </p>
          </motion.div>

          {/* CARD: SKILLS */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-8 bg-zinc-900/60 border border-white/10 rounded-3xl backdrop-blur-xl hover:border-yellow-500/50 transition-all shadow-2xl flex flex-col items-center"
          >
            <h3 className="text-2xl md:text-3xl font-black uppercase italic text-white mb-6 self-start w-full border-b border-white/10 pb-4">
              Skills & Stack
            </h3>
            <div className="w-full pt-4">
                <SkillsHorizontal />
            </div>
          </motion.div>

        </section>

        {/* CARD PROJETOS PESSOAIS (PRÓXYZ) */}
        <section className="w-full py-20 flex flex-col items-center">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="w-full p-10 bg-zinc-900/60 border border-white/10 rounded-3xl backdrop-blur-xl hover:border-red-600/50 transition-all shadow-[0_0_30px_rgba(220,38,38,0.1)] flex flex-col items-center text-center group"
          >
            <h2 className="text-sm font-black text-gray-500 tracking-[0.5em] uppercase mb-6 group-hover:text-red-400 transition-colors">
              Projetos Pessoais
            </h2>
            <h3 className="text-6xl font-black uppercase mb-8 italic text-transparent bg-clip-text bg-gradient-to-br from-red-500 via-red-600 to-orange-600 drop-shadow-[0_0_15px_rgba(220,38,38,0.5)] py-4 leading-tight">
              Próxyz
            </h3>
            <LedButton title="🚀 ACESSAR SISTEMA" url="https://proxyz.com.br" color="red" />
          </motion.div>
        </section>

        {/* FOOTER */}
        <footer className="w-full pb-10 text-center pt-10">
            <p className="text-xl md:text-2xl font-black uppercase tracking-widest text-zinc-600 hover:text-white transition-colors duration-500 cursor-default">
                Development by <br className="md:hidden"/>
                <span className="text-cyan-400">Marco Antonio</span> © 2026
            </p>
        </footer>

      </div>
    </main>
  );
}