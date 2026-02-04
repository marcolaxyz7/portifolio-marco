"use client";
import { motion } from "framer-motion";
// Importando ícones oficiais da biblioteca
import { FaInstagram, FaLinkedin, FaGithub, FaDiscord, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; 

const socials = [
  { name: "Instagram", icon: <FaInstagram />, color: "hover:text-[#E1306C]" },
  { name: "LinkedIn", icon: <FaLinkedin />, color: "hover:text-[#0A66C2]" },
  { name: "X", icon: <FaXTwitter />, color: "hover:text-white" }, 
  { name: "Discord", icon: <FaDiscord />, color: "hover:text-[#5865F2]" },
  { name: "TikTok", icon: <FaTiktok />, color: "hover:text-[#00f2ea]" },
  { name: "GitHub", icon: <FaGithub />, color: "hover:text-white" },
];

export default function SocialH() {
  return (
    <div className="flex flex-wrap gap-8 items-center justify-center my-10">
      {socials.map((social, i) => (
        <motion.a
          key={social.name}
          href="#"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 + (i * 0.05) }}
          // Aumentei para text-4xl no mobile e text-5xl no PC
          className={`text-gray-400 text-4xl md:text-5xl transition-all duration-300 transform hover:scale-125 ${social.color}`}
          title={social.name}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
}