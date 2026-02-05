"use client";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaGithub, FaDiscord, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; 

const socials = [
  // COLOQUE SEUS LINKS AQUI ENTRE AS ASPAS "..."
  { 
    name: "Instagram", 
    icon: <FaInstagram />, 
    color: "hover:text-[#E1306C]", 
    url: "https://www.instagram.com/marcogorzoni_01/" 
  },
  { 
    name: "LinkedIn", 
    icon: <FaLinkedin />, 
    color: "hover:text-[#0A66C2]", 
    url: "https://www.linkedin.com/in/marco-antonio-gorzoni-32351332b/" 
  },
  { 
    name: "X", 
    icon: <FaXTwitter />, 
    color: "hover:text-white", 
    url: "https://x.com/MarcolaXyz" 
  }, 
  { 
    name: "Discord", 
    icon: <FaDiscord />, 
    color: "hover:text-[#5865F2]", 
    url: "https://discord.gg/AvBGjCdv" // Ou o link do seu servidor
  },
  { 
    name: "TikTok", 
    icon: <FaTiktok />, 
    color: "hover:text-[#00f2ea]", 
    url: "https://www.tiktok.com/@marcola.xyz" 
  },
  { 
    name: "GitHub", 
    icon: <FaGithub />, 
    color: "hover:text-white", 
    url: "https://github.com/marcolaxyz7" 
  },
];

export default function SocialH() {
  return (
    <div className="flex flex-wrap gap-8 items-center justify-center my-10">
      {socials.map((social, i) => (
        <motion.a
          key={social.name}
          href={social.url} // AQUI ELE PEGA O LINK QUE VOCÊ COLOCOU ACIMA
          target="_blank"   // Isso faz abrir em outra aba (importante!)
          rel="noopener noreferrer" // Segurança extra
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 + (i * 0.05) }}
          className={`text-gray-400 text-4xl md:text-5xl transition-all duration-300 transform hover:scale-125 ${social.color}`}
          title={social.name}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
}