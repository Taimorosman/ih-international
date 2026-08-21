"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function FloatingHotline() {
  const { lang, isRTL } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`fixed bottom-6 z-50 ${
        isRTL ? "left-6" : "right-6"
      }`}
      animate={{
        y: [0, -6, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* CSS Animation for IH Pulse Glow */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes ih-pulse {
          0% { box-shadow: 0 0 0 0 rgba(59, 63, 168, 0.5); }
          70% { box-shadow: 0 0 0 12px rgba(59, 63, 168, 0); }
          100% { box-shadow: 0 0 0 0 rgba(59, 63, 168, 0); }
        }
        .ih-pulse-effect {
          animation: ih-pulse 2s infinite;
        }
      `}} />

      {/* Main Interactive Button Link */}
      <a
        href="https://wa.me/966920000364"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center p-[1.5px] rounded-full overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_8px_32px_rgba(0,0,0,0.4)] ih-pulse-effect"
      >
        {/* Glow Border Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#3b3fa8] via-[#002F6C] to-[#3b3fa8] rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Glow Spread effect behind the button */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#3b3fa8] via-[#002F6C] to-[#3b3fa8] rounded-full opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-300" />

        {/* Inner Glassmorphic Pill */}
        <div className="relative flex items-center p-2 rounded-full bg-slate-950/90 backdrop-blur-xl text-white transition-all duration-300 border border-white/5">
          
          {/* IH Logo Icon Container */}
          <div className="relative w-11 h-11 flex items-center justify-center shrink-0 rounded-full bg-gradient-to-tr from-[#3b3fa8] to-[#002F6C] shadow-[0_4px_12px_rgba(59,63,168,0.3)] group-hover:shadow-[0_4px_20px_rgba(59,63,168,0.5)] transition-all duration-300">
            <svg
              viewBox="0 0 100 100"
              className="w-[26px] h-[26px] fill-white text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]"
            >
              {/* "i" dot */}
              <circle cx="29" cy="26" r="6" />
              {/* "i" stem */}
              <rect x="23" y="36" width="12" height="38" rx="1.5" />
              {/* "h" stem and arch */}
              <path
                d="M41 20h12v16.5c2.5-3.5 6-5.5 10.5-5.5 8 0 13.5 5.5 13.5 14v29H65V48c0-5-2.5-7.5-6.5-7.5-4 0-7.5 3-7.5 8.5v25H41V20z"
              />
            </svg>

            {/* Online Green Indicator Dot */}
            <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#3b3fa8] shadow-[0_0_8px_rgba(59,63,168,0.6)] animate-pulse" />
          </div>

          {/* Expandable Text Banner */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{
              width: isHovered ? "auto" : 0,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden whitespace-nowrap flex flex-col items-start px-0 group-hover:px-3"
          >
            <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#f6c96a] leading-tight">
              {lang === "ar" ? "تواصل معنا" : "ONLINE ADVISOR"}
            </span>
            <span className="text-xs font-bold text-white/95 leading-snug">
              {lang === "ar" ? "محادثة مباشرة عبر واتساب" : "Chat on WhatsApp"}
            </span>
          </motion.div>
        </div>
      </a>
    </motion.div>
  );
}

