"use client";
import MouseFollower from "@/components/MouseFollower";
import LedButton from "@/components/LedButton";
import SocialHorizontal from "@/components/SocialH";
import SkillsHorizontal from "@/components/SkillsCube";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      <MouseFollower />
      
      {/* Background Grid Sutil */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#121212_1px,transparent_1px),linear-gradient(to_bottom,#121212_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 py-20 flex flex-col items-center">
        
        {/* HERO & NOME */}
        <section className="text-center mb-10">
          <motion.h1 
            initial={{ scale: 0.9, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }}
            className="text-7xl md:text-9xl font-[900] tracking-tighter uppercase leading-[0.85] italic bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-600"
            style={{ fontFamily: "'Arial Black', sans-serif" }}
          >
            MARCO<br/>GORZONI
          </motion.h1>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4">
             <span className="px-4 py-2 bg-white text-black text-lg font-black uppercase italic tracking-wider shadow-[0_0_20px_rgba(255,255,255,0.3)]">
               Fullstack Junior
             </span>
             <span className="px-4 py-2 border border-white/30 text-white text-lg font-black uppercase italic tracking-wider backdrop-blur-sm">
               Vibe Coding
             </span>
          </div>
        </section>

        {/* SOCIAIS */}
        <SocialHorizontal />

        {/* CARDS DE INFO */}
        <section className="w-full mt-12 space-y-8">
          
          {/* Formação */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-8 bg-zinc-900/60 border border-white/10 rounded-3xl backdrop-blur-xl hover:border-cyan-500/50 transition-all shadow-2xl"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h3 className="text-3xl font-black uppercase italic text-white mb-2">
                  Técnico em Informática
                </h3>
                <p className="text-xl text-cyan-400 font-bold uppercase tracking-wide">
                  Para Internet
                </p>
              </div>
              <div className="px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/50">
                <p className="text-cyan-300 font-bold uppercase tracking-wide text-xs">
                  TCC Destaque: CondoWay
                </p>
              </div>
            </div>
          </motion.div>

           {/* Expertise */}
           <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-8 bg-zinc-900/60 border border-white/10 rounded-3xl backdrop-blur-xl hover:border-purple-500/50 transition-all shadow-2xl"
          >
            <h3 className="text-3xl font-black uppercase italic text-white mb-6">
              Minha Expertise
            </h3>
            <p className="text-lg text-gray-300 font-mono leading-relaxed">
              Consolidei minha base com as tecnologias listadas abaixo, criando soluções reais e funcionais. 
              <br/><br/>
              <span className="text-white bg-white/10 px-2 py-1 rounded">Mindset Atual:</span> Expandindo horizontes para softwares de baixo nível com <strong className="text-purple-400">C++</strong> e explorando Game Development. Sempre aprendendo, sempre codando.
            </p>
            
            {/* Lista Horizontal de Skills */}
            <div className="mt-8 pt-8 border-t border-white/5">
                <SkillsHorizontal />
            </div>
          </motion.div>
        </section>

        {/* PRÓXYZ RED SECTION */}
        <section className="w-full py-24 flex flex-col items-center">
          <h2 className="text-6xl font-black uppercase mb-10 italic text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 drop-shadow-[0_0_10px_rgba(220,38,38,0.5)]">
            Próxyz
          </h2>
          {/* Botão com efeito LED Vermelho */}
          <LedButton title="🚀 ACESSAR SISTEMA" url="https://proxyz.com.br" color="red" />
        </section>

        {/* FOOTER DESTACADO */}
        <footer className="w-full pb-10 text-center border-t border-white/10 pt-10">
            <p className="text-xl md:text-2xl font-black uppercase tracking-widest text-gray-500 hover:text-white transition-colors cursor-default">
                Development by <br className="md:hidden"/>
                <span className="text-cyan-400">Marco Gorzoni</span> © 2026
            </p>
        </footer>

      </div>
    </main>
  );
}