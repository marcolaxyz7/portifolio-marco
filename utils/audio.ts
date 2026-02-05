// utils/audio.ts

// Cria o contexto de áudio (singleton para não pesar)
const getAudioContext = () => {
  if (typeof window === "undefined") return null;
  const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
  return new AudioContext();
};

const playTone = (freq: number, type: OscillatorType, duration: number, delay = 0) => {
  const ctx = getAudioContext();
  if (!ctx) return;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = type;
  osc.frequency.setValueAtTime(freq, ctx.currentTime + delay);
  
  // Volume envelope (Fade out rápido para não estalar)
  gain.gain.setValueAtTime(0.1, ctx.currentTime + delay);
  gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + delay + duration);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(ctx.currentTime + delay);
  osc.stop(ctx.currentTime + delay + duration);
};

export const playClickSound = () => {
  // Som curto e agudo (Blip)
  playTone(800, "square", 0.05);
};

export const playEatSound = () => {
  // Som de moeda (duas notas rápidas)
  playTone(600, "square", 0.1);
  playTone(900, "square", 0.1, 0.05); // Segunda nota levemente atrasada
};

export const playGameOverSound = () => {
  // Som de derrota (descendo tom)
  playTone(200, "sawtooth", 0.3);
  playTone(150, "sawtooth", 0.3, 0.1);
  playTone(100, "sawtooth", 0.4, 0.2);
};