"use client";

/* -------------------------------------------------------------------------- */
/* IMPORTAÇÕES                                */
/* -------------------------------------------------------------------------- */
import { useState } from "react"; // Importar useState
import { motion } from "framer-motion";
import MouseFollower from "@/components/MouseFollower";
import LedButton from "@/components/LedButton";
import SocialH from "@/components/SocialH";
import SkillsHorizontal from "@/components/SkillsCube";
import FloatingParticles from "@/components/FloatingParticles";
import SnakeGame from "@/components/SnakeGame"; // Importar o Jogo
import { playClickSound } from "@/utils/audio";

/* -------------------------------------------------------------------------- */
/* COMPONENTE HOME                               */
/* -------------------------------------------------------------------------- */
export default function Home() {
  const [isGameOpen, setIsGameOpen] = useState(false); // Estado do jogo

  return (
    <main className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-cyan-500 selection:text-black">

      {/* --- EFEITOS DE FUNDO --- */}
      <MouseFollower />
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#121212_1px,transparent_1px),linear-gradient(to_bottom,#121212_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
      <FloatingParticles />

      {/* --- MINIGAME MODAL --- */}
      {isGameOpen && <SnakeGame onClose={() => setIsGameOpen(false)} />}

      {/* --- CONTAINER PRINCIPAL --- */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 py-20 flex flex-col items-center">

        {/* SEÇÃO HERO */}
        <section className="text-center mb-10 w-full">
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-6xl md:text-9xl font-[900] tracking-tighter uppercase leading-none italic text-transparent bg-clip-text bg-gradient-to-b from-gray-300 via-white to-gray-400 py-6 pr-6"
            style={{
              fontFamily: "'Arial Black', sans-serif",
              textShadow: `1px 1px 0px #eee, 2px 2px 0px #ddd, 3px 3px 0px #ccc, 4px 4px 0px #bbb, 5px 5px 0px #aaa, 6px 6px 15px rgba(0,0,0,0.8)`,
              WebkitTextStroke: "1px rgba(255,255,255,0.2)"
            }}
          >
            MARCO<br />Gorzoni
          </motion.h1>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-white text-black text-lg font-black uppercase italic tracking-wider shadow-[0_0_20px_rgba(255,255,255,0.4)]">
              Fullstack Junior
            </span>
            <span className="px-4 py-2 border border-white/30 text-white text-lg font-black uppercase italic tracking-wider backdrop-blur-sm">
              Vibe Coding
            </span>
          </div>
        </section>

        <SocialH />

        {/* CARDS DE INFORMAÇÃO */}
        <section className="w-full mt-12 space-y-8">
          {/* Card: Formação */}
          <motion.div whileHover={{ scale: 1.02 }} className="p-8 bg-zinc-900/60 border border-white/10 rounded-3xl backdrop-blur-xl hover:border-cyan-500/50 transition-all shadow-2xl">
            <div className="flex flex-col gap-6">
              <div className="border-b border-white/10 pb-4">
                <h3 className="text-3xl md:text-5xl font-black uppercase italic text-white mb-2 leading-none">Técnico em Informática</h3>
                <p className="text-2xl text-cyan-400 font-bold uppercase tracking-wide">Para Internet</p>
              </div>
              <p className="text-gray-300 font-mono text-sm leading-relaxed">
                Formação técnica completa pela <strong className="text-white text-lg">ETEC Tupã Prof. Massuyuki Kawano</strong>, com foco em desenvolvimento web, lógica de programação e banco de dados.
              </p>
              <div className="mt-2 p-6 rounded-2xl bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-500/30 flex flex-col items-start gap-2 group cursor-default">
                <span className="text-cyan-400 font-bold uppercase tracking-widest text-[10px] group-hover:text-cyan-300 transition-colors">Projeto de Conclusão (TCC)</span>
                <h4 className="text-4xl font-black uppercase italic text-white drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">CondoWay</h4>
                <p className="text-xs text-gray-400 font-mono">Plataforma completa para gestão de condomínios.</p>
              </div>
            </div>
          </motion.div>

          {/* Card: Expertise */}
          <motion.div whileHover={{ scale: 1.02 }} className="p-8 bg-zinc-900/60 border border-white/10 rounded-3xl backdrop-blur-xl hover:border-purple-500/50 transition-all shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-black uppercase italic text-white mb-6">Minha Expertise</h3>
            <p className="text-lg text-gray-300 font-mono leading-relaxed">
              Minha base técnica cobre as tecnologias abaixo, mas não me limito a elas. O foco é resolver problemas reais.
              <br /><br />
              <span className="text-white bg-white/10 px-3 py-1 rounded border border-white/20 uppercase text-xs font-bold tracking-widest">Learning Path:</span>
              <br />
              Estou mergulhando nos fundamentos de <strong className="text-purple-400 text-xl">C++</strong>. Sei que é uma jornada longa e estou apenas no começo (ainda não sei tudo, mas estou no caminho 🚀).
            </p>
          </motion.div>

          {/* Card: Skills */}
          <motion.div whileHover={{ scale: 1.02 }} className="p-8 bg-zinc-900/60 border border-white/10 rounded-3xl backdrop-blur-xl hover:border-yellow-500/50 transition-all shadow-2xl flex flex-col items-center">
            <h3 className="text-2xl md:text-3xl font-black uppercase italic text-white mb-6 self-start w-full border-b border-white/10 pb-4">Skills & Stack</h3>
            <div className="w-full pt-4"><SkillsHorizontal /></div>
          </motion.div>
        </section>

        {/* =====================================================================
            SEÇÃO: PROJETOS PESSOAIS & ARCADE
           ===================================================================== */}
        <section className="w-full py-20 flex flex-col gap-10 items-center">

          {/* PRÓXYZ CARD */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="w-full p-10 bg-zinc-900/60 border border-white/10 rounded-3xl backdrop-blur-xl hover:border-red-600/50 transition-all shadow-[0_0_30px_rgba(220,38,38,0.1)] flex flex-col items-center text-center group"
          >
            <h2 className="text-sm font-black text-gray-500 tracking-[0.5em] uppercase mb-6 group-hover:text-red-400 transition-colors">Projetos Pessoais</h2>
            <h3
              className="text-6xl md:text-7xl font-black uppercase mb-8 italic text-transparent bg-clip-text bg-gradient-to-b from-red-500 via-red-400 to-red-600 py-4 pr-12 leading-tight"
              style={{ fontFamily: "'Arial Black', sans-serif", textShadow: `1px 1px 0px #ef4444, 2px 2px 0px #dc2626, 3px 3px 0px #b91c1c, 4px 4px 0px #991b1b, 5px 5px 0px #7f1d1d, 6px 6px 15px rgba(0,0,0,0.6)` }}
            >
              Próxyz
            </h3>
            <LedButton title="🚀 ACESSAR SISTEMA" url="https://xn--prxyz-1ta.com/" color="red" />
          </motion.div>

          {/* NOVO: ARCADE ZONE (MINIGAME) */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="w-full p-8 bg-zinc-900/60 border border-white/10 rounded-3xl backdrop-blur-xl hover:border-green-500/50 transition-all shadow-[0_0_30px_rgba(34,197,94,0.1)] flex flex-col items-center text-center group"
          >

            <div className="mb-6">
              <h3 className="text-4xl font-black uppercase italic text-white leading-none">
                Arcade <span className="text-green-500">Zone</span>
              </h3>
              <p className="text-xs text-gray-400 font-mono mt-2">
                Teste suas skills no clássico Snake.
              </p>
            </div>

            <button
              onClick={() => {
                playClickSound(); // ADICIONAR ESSA LINHA
                setIsGameOpen(true);
              }}
              className="px-10 py-4 bg-green-600 hover:bg-green-500 text-black font-black uppercase italic rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_40px_rgba(34,197,94,0.6)] transition-all transform active:scale-95 text-xl tracking-wider"
            >
              🎮 JOGAR AGORA
            </button>
          </motion.div>

        </section>

        {/* FOOTER */}
        <footer className="w-full pb-10 text-center pt-10">
          <p className="text-xl md:text-2xl font-black uppercase tracking-widest text-zinc-600 hover:text-white transition-colors duration-500 cursor-default">
            Development by <br className="md:hidden" />
            <span className="text-cyan-400">Marco A. Gorzoni</span> © 2026
          </p>
        </footer>

      </div>
    </main>
  );
}