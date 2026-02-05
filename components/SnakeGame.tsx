"use client";
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { FaArrowUp, FaArrowDown, FaArrowLeft, FaArrowRight, FaUndo } from "react-icons/fa";
// IMPORTANDO OS SONS
import { playClickSound, playEatSound, playGameOverSound } from "@/utils/audio";

const GRID_SIZE = 15;
const SPEED = 110;

export default function SnakeGame({ onClose }: { onClose: () => void }) {
  const [snake, setSnake] = useState([{ x: 7, y: 7 }]);
  const [food, setFood] = useState({ x: 10, y: 10 });
  const [direction, setDirection] = useState("RIGHT");
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const generateFood = useCallback(() => {
    let newFood;
    do {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };
    } while (snake.some(segment => segment.x === newFood.x && segment.y === newFood.y));
    return newFood;
  }, [snake]);

  useEffect(() => {
    if (gameOver) return;

    const moveSnake = setInterval(() => {
      setSnake((prev) => {
        const newHead = { ...prev[0] };

        if (direction === "RIGHT") newHead.x += 1;
        if (direction === "LEFT") newHead.x -= 1;
        if (direction === "UP") newHead.y -= 1;
        if (direction === "DOWN") newHead.y += 1;

        // Colisão Parede
        if (newHead.x < 0 || newHead.x >= GRID_SIZE || newHead.y < 0 || newHead.y >= GRID_SIZE) {
          if (!gameOver) playGameOverSound(); // SOM DE MORTE
          setGameOver(true);
          return prev;
        }

        // Colisão Corpo
        if (prev.some((segment) => segment.x === newHead.x && segment.y === newHead.y)) {
           if (!gameOver) playGameOverSound(); // SOM DE MORTE
          setGameOver(true);
          return prev;
        }

        const newSnake = [newHead, ...prev];

        // Comer
        if (newHead.x === food.x && newHead.y === food.y) {
          setScore((s) => s + 10);
          playEatSound(); // SOM DE COMER
          setFood(generateFood());
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    }, SPEED);

    return () => clearInterval(moveSnake);
  }, [direction, gameOver, food, generateFood]);

  // Controles Teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Adicionei som de click nas setas também (opcional)
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
         // playClickSound(); // Descomente se quiser barulho a cada movimento (pode ser irritante)
      }
      if (e.key === "ArrowUp" && direction !== "DOWN") setDirection("UP");
      if (e.key === "ArrowDown" && direction !== "UP") setDirection("DOWN");
      if (e.key === "ArrowLeft" && direction !== "RIGHT") setDirection("LEFT");
      if (e.key === "ArrowRight" && direction !== "LEFT") setDirection("RIGHT");
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [direction]);

  const resetGame = () => {
    playClickSound(); // SOM AO REINICIAR
    setSnake([{ x: 7, y: 7 }]);
    setScore(0);
    setGameOver(false);
    setDirection("RIGHT");
    setFood(generateFood());
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 touch-none">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-zinc-900 border border-green-500/50 p-6 rounded-3xl shadow-[0_0_50px_rgba(34,197,94,0.3)] max-w-md w-full flex flex-col items-center"
      >
        <div className="flex justify-between w-full mb-4 items-center">
          <h2 className="text-2xl font-black text-green-500 italic uppercase tracking-widest">Snake Zone</h2>
          <button onClick={() => { playClickSound(); onClose(); }} className="text-gray-400 hover:text-white font-bold text-xl px-2">✕</button>
        </div>

        <div className="text-white font-mono mb-4 text-sm bg-black/50 px-4 py-1 rounded-full border border-white/10">
          SCORE: <span className="text-green-400 text-xl font-bold">{score}</span>
        </div>

        <div 
          className="relative bg-black border border-white/10 rounded-lg overflow-hidden shadow-inner"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
            gridTemplateRows: `repeat(${GRID_SIZE}, 1fr)`,
            width: "min(80vw, 300px)",
            height: "min(80vw, 300px)",
          }}
        >
          {gameOver && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 z-20 backdrop-blur-sm">
              <p className="text-red-500 font-black text-3xl mb-4 drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]">GAME OVER</p>
              <button onClick={resetGame} className="flex items-center gap-2 px-6 py-2 bg-green-600 text-black font-black uppercase rounded-full hover:bg-green-500 transition-all shadow-[0_0_20px_rgba(34,197,94,0.5)]">
                <FaUndo /> Reiniciar
              </button>
            </div>
          )}

          {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => {
            const x = i % GRID_SIZE;
            const y = Math.floor(i / GRID_SIZE);
            const isSnakeHead = snake[0].x === x && snake[0].y === y;
            const isSnakeBody = snake.slice(1).some((s) => s.x === x && s.y === y);
            const isFood = food.x === x && food.y === y;

            return (
              <div key={i} className="relative w-full h-full">
                {isFood && <div className="absolute inset-1 bg-red-500 rounded-full shadow-[0_0_10px_#ef4444] animate-pulse scale-75" />}
                {(isSnakeHead || isSnakeBody) && (
                   <div className={`w-full h-full bg-green-500 shadow-[0_0_10px_#22c55e] ${isSnakeHead ? 'rounded-sm z-10' : 'rounded-sm opacity-80'} transition-all duration-100 ease-linear`} />
                )}
              </div>
            );
          })}
        </div>

        {/* CONTROLES MOBILE COM SOM */}
        <div className="mt-8 grid grid-cols-3 gap-3 w-full max-w-[200px] md:hidden">
          <div />
          <button onClick={() => { playClickSound(); if(direction !== "DOWN") setDirection("UP"); }} className="h-14 bg-white/10 rounded-xl flex items-center justify-center text-white text-xl active:bg-green-500 active:text-black transition-colors shadow-lg border border-white/5"><FaArrowUp /></button>
          <div />
          <button onClick={() => { playClickSound(); if(direction !== "RIGHT") setDirection("LEFT"); }} className="h-14 bg-white/10 rounded-xl flex items-center justify-center text-white text-xl active:bg-green-500 active:text-black transition-colors shadow-lg border border-white/5"><FaArrowLeft /></button>
          <button onClick={() => { playClickSound(); if(direction !== "UP") setDirection("DOWN"); }} className="h-14 bg-white/10 rounded-xl flex items-center justify-center text-white text-xl active:bg-green-500 active:text-black transition-colors shadow-lg border border-white/5"><FaArrowDown /></button>
          <button onClick={() => { playClickSound(); if(direction !== "LEFT") setDirection("RIGHT"); }} className="h-14 bg-white/10 rounded-xl flex items-center justify-center text-white text-xl active:bg-green-500 active:text-black transition-colors shadow-lg border border-white/5"><FaArrowRight /></button>
        </div>

        <p className="mt-6 text-[10px] text-gray-500 font-mono uppercase hidden md:block">
          Use as setas do teclado para jogar
        </p>
      </motion.div>
    </div>
  );
}