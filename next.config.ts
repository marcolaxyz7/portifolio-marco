import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // <--- ISSO É O SEGREDO (Cria a pasta 'out')
  images: {
    unoptimized: true, // <--- Importante para as imagens funcionarem na Hostinger
  },
  // Se tiver outras configs, mantenha aqui
};

export default nextConfig;