export default function LedButton({ title, url, color = "cyan" }: { title: string; url: string; color?: "cyan" | "red" }) {
  // Define as cores do gradiente baseado na prop
  const gradientClass = color === "red" 
    ? "bg-[conic-gradient(from_90deg_at_50%_50%,#dc2626_0%,#ef4444_50%,#dc2626_100%)]" // Vermelho
    : "bg-[conic-gradient(from_90deg_at_50%_50%,#06b6d4_0%,#3b82f6_50%,#06b6d4_100%)]"; // Ciano padrão

  const shadowClass = color === "red"
    ? "shadow-[0_0_20px_rgba(220,38,38,0.5)] hover:shadow-[0_0_40px_rgba(220,38,38,0.8)]"
    : "shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:shadow-[0_0_40px_rgba(6,182,212,0.8)]";

  return (
    <a 
      href={url} 
      target="_blank" 
      className={`relative inline-flex h-16 overflow-hidden rounded-xl p-[2px] focus:outline-none w-full max-w-sm transition-shadow duration-300 ${shadowClass}`}
    >
      {/* A linha de LED que corre */}
      <span className={`absolute inset-[-1000%] animate-[spin_3s_linear_infinite] ${gradientClass}`} />
      
      {/* O miolo do botão */}
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-8 text-lg font-black uppercase text-white backdrop-blur-3xl hover:bg-slate-900 transition-all italic tracking-wide">
        {title}
      </span>
    </a>
  );
}