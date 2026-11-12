"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import ThemeAccent from "./ThemeAccent";

const MotionLink = motion(Link);

interface SlideData {
  key: string;
  city: { en: string; ar: string };
  headline: { en: string; ar: string };
  tagline: { en: string; ar: string };
  description: { en: string; ar: string };
  bgImage: string;
  studentImage: string;
  badgeText: { en: string; ar: string };
  badgeVal: { en: string; ar: string };
  studentScale?: string;
  badge1Pos?: string;
  badge2Pos?: string;
}

const slides: SlideData[] = [
  {
    key: "riyadh",
    city: { en: "Riyadh", ar: "الرياض" },
    headline: {
      en: "Empowering Learners & Organizations Across Riyadh",
      ar: "تمكين المتعلمين والمؤسسات في جميع أنحاء الرياض"
    },
    tagline: {
      en: "International Standards. Local Understanding. Real Results.",
      ar: "معايير عالمية. فهم محلي. نتائج حقيقية."
    },
    description: {
      en: "Located in the heart of the capital at Al Olaya, driving educational transformation aligned with Vision 2030 through world-class language and corporate training ecosystems.",
      ar: "نقع في قلب العاصمة في حي العليا، حيث نقود التحول التعليمي تماشياً مع رؤية 2030 من خلال بيئات التدريب اللغوي والمؤسسي العالمية."
    },
    bgImage: "/riyadh_bg.png",
    studentImage: "/riyadh_student.png",
    badgeText: { en: "Vision 2030 Partner", ar: "شريك رؤية 2030" },
    badgeVal: { en: "Cambridge English", ar: "الإنجليزية من كامبريدج" },
    studentScale: "scale-[1.48] translate-y-[-16px] origin-bottom",
    badge1Pos: "top-[20%] left-[-40px]",
    badge2Pos: "bottom-[25%] right-[-40px]"
  },
  {
    key: "jeddah",
    city: { en: "Jeddah", ar: "جدة" },
    headline: {
      en: "Gateway to Global Communication in Jeddah",
      ar: "بوابتك للتواصل العالمي في جدة"
    },
    tagline: {
      en: "Bridging Cultures. Accelerating Professional Progress.",
      ar: "جسر بين الثقافات. تسريع التقدم المهني."
    },
    description: {
      en: "Empowering the commercial capital's workforce with elite communicative capabilities, dynamic global certifications, and executive training solutions.",
      ar: "تمكين القوى العاملة في العاصمة التجارية بقدرات تواصل متميزة، وشهادات عالمية ديناميكية، وحلول التدريب التنفيذي."
    },
    bgImage: "/jeddah_bg.png",
    studentImage: "/jeddah_student.png",
    badgeText: { en: "Executive Training", ar: "التدريب التنفيذي" },
    badgeVal: { en: "98% Student Success", ar: "٪٩٨ نجاح الطلاب" },
    studentScale: "scale-[1.68] translate-y-[-65px] xl:translate-y-[-80px] origin-bottom",
    badge1Pos: "top-[54%] left-[-45px] xl:left-[-55px]",
    badge2Pos: "bottom-[22%] right-[-40px]"
  },
  {
    key: "dammam",
    city: { en: "Dammam / Dhahran", ar: "الدمام / الظهران" },
    headline: {
      en: "Fueling Workforce Excellence in Eastern Province",
      ar: "دعم تميز القوى العاملة في المنطقة الشرقية"
    },
    tagline: {
      en: "Precision Training for Industrial & Corporate Leaders.",
      ar: "تدريب دقيق للقادة الصناعيين والمؤسسيين."
    },
    description: {
      en: "Connecting the industrial powerhouse of Dammam and Dhahran to global educational frameworks, specialized technical English, and elite corporate services.",
      ar: "ربط القوة الصناعية في الدمام والظهران بالأطر التعليمية العالمية، واللغة الإنجليزية التقنية المتخصصة، والخدمات المؤسسية النخبوية."
    },
    bgImage: "/dammam_bg.png",
    studentImage: "/dammam_student.png",
    badgeText: { en: "Technical ESP Courses", ar: "دورات إنجليزية تقنية متخصصة" },
    badgeVal: { en: "Authorized Center", ar: "مركز اختبارات معتمد" },
    studentScale: "scale-[1.54] translate-y-[-20px] xl:translate-y-[-26px] origin-bottom",
    badge1Pos: "top-[26%] left-[-40px]",
    badge2Pos: "bottom-[25%] right-[-40px]"
  }
];

export default function HeroSlider() {
  const { lang, t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const isRtl = lang === "ar";

  // Auto rotation logic (8 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 8000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlide = slides[currentIndex];

  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, x: isRtl ? 40 : -40 },
    visible: { opacity: 1, x: 0 }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, x: isRtl ? -60 : 60 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" as const, delay: 0.2 }
    }
  };

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center overflow-hidden bg-primary font-['Inter',_sans-serif]">
      {/* ── BACKGROUND IMAGE WITH CINEMATIC PARALLAX ── */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={currentSlide.bgImage}
              alt={currentSlide.city[lang]}
              fill
              className="object-cover object-center brightness-90"
              priority
            />
            {/* Custom dark gradient overlay for optimal text contrast */}
            <div
              className="absolute inset-0 z-10"
              style={{
                background: isRtl
                  ? "linear-gradient(270deg, rgba(0,47,108,0.95) 0%, rgba(0,47,108,0.85) 45%, rgba(0,47,108,0.40) 80%, rgba(0,47,108,0.15) 100%)"
                  : "linear-gradient(90deg, rgba(0,47,108,0.95) 0%, rgba(0,47,108,0.85) 45%, rgba(0,47,108,0.40) 80%, rgba(0,47,108,0.15) 100%)"
              }}
            />
            <div className="absolute inset-0 bg-black/25 z-0" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── DECORATIVE LIGHT SHIMMERS ── */}
      <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden opacity-[0.06]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px"
          }}
        />
      </div>

      {/* ── SLIDE CONTENT ORCHESTRATION ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-16 pb-24 lg:pt-20 lg:pb-44">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ staggerChildren: 0.15 }}
              >
                {/* Top Badge */}
                <motion.div
                  variants={textVariants}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="mb-6 inline-flex"
                >
                  <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-[10px] sm:text-xs font-bold tracking-[0.15em] uppercase text-white bg-white/10 backdrop-blur-md border border-white/20">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                    </span>
                    {lang === "ar" ? "إنترناشونال هاوس المملكة العربية السعودية" : "INTERNATIONAL HOUSE SAUDI ARABIA"}
                  </span>
                </motion.div>

                {/* Tagline */}
                <motion.p
                  variants={textVariants}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="text-xs sm:text-sm font-semibold tracking-wider text-accent uppercase mb-3"
                >
                  {currentSlide.tagline[lang]}
                </motion.p>

                {/* Headline */}
                <motion.h1
                  variants={textVariants}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.15] font-['Montserrat',_sans-serif]"
                >
                  {currentSlide.headline[lang]}
                </motion.h1>

                {/* Description */}
                <motion.p
                  variants={textVariants}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-sm sm:text-lg text-white/80 font-light mb-10 leading-relaxed max-w-2xl"
                >
                  {currentSlide.description[lang]}
                </motion.p>

                {/* Action Buttons */}
                <motion.div
                  variants={textVariants}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  className="flex flex-wrap gap-4"
                >
                  <MotionLink
                    href="/placement-test-booking"
                    whileHover={{ y: -4, boxShadow: "0 10px 25px rgba(245, 166, 35, 0.45)" }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm bg-accent text-white hover:bg-accent-dark transition-all duration-300"
                  >
                    {lang === "ar" ? "احجز اختبار تحديد المستوى ←" : "Book a Placement Test →"}
                  </MotionLink>
                  <MotionLink
                    href="/courses"
                    whileHover={{ y: -4, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm text-white bg-white/5 backdrop-blur-md border border-white/25 hover:border-white/40 transition-all duration-300"
                  >
                    {lang === "ar" ? "استكشف دوراتنا" : "Explore Our Courses"}
                  </MotionLink>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* Right Side: Absolute Cutout Student */}
      <div className="hidden lg:block absolute bottom-0 right-[4%] xl:right-[8%] w-[480px] xl:w-[560px] h-[88vh] z-10 pointer-events-none rtl:left-[4%] rtl:xl:left-[8%] rtl:right-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="relative w-full h-full flex items-end justify-center"
          >
            {/* Glowing Background Glow */}
            <div className="absolute inset-0 bg-accent/10 rounded-full blur-[100px] -z-10 animate-pulse" />

            {/* Main Cutout Container */}
            <div className="relative w-full h-full flex items-end justify-center overflow-visible">
              <Image
                src={currentSlide.studentImage}
                alt={currentSlide.city[lang]}
                fill
                style={{
                  WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 65%, rgba(0,0,0,0.7) 78%, rgba(0,0,0,0.2) 90%, rgba(0,0,0,0) 98%)",
                  maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 65%, rgba(0,0,0,0.7) 78%, rgba(0,0,0,0.2) 90%, rgba(0,0,0,0) 98%)",
                }}
                className={`object-contain object-bottom select-none pointer-events-none z-0 transition-all duration-700 ${currentSlide.studentScale || ""}`}
                priority
                unoptimized
              />
              
              {/* Soft radial atmospheric fog/glow behind & over cutout bottom */}
              <div
                className="absolute bottom-[-10px] inset-x-[-35%] h-72 pointer-events-none z-10 blur-2xl"
                style={{
                  background: "radial-gradient(ellipse at bottom, rgba(0,26,63,1) 0%, rgba(0,26,63,0.95) 35%, rgba(0,47,108,0.7) 65%, rgba(0,47,108,0.2) 85%, transparent 100%)"
                }}
              />

              {/* Seamless upward dark blue fog covering the lower edge */}
              <div 
                className="absolute bottom-0 inset-x-[-25%] h-44 pointer-events-none z-10"
                style={{
                  background: "linear-gradient(to top, rgba(0,26,63,1) 0%, rgba(0,26,63,0.92) 28%, rgba(0,26,63,0.5) 65%, transparent 100%)"
                }}
              />
            </div>

            {/* Floating Badge 1 (Top Left) */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className={`absolute ${currentSlide.badge1Pos || "top-[20%] left-[-40px]"} bg-primary/90 backdrop-blur-md border border-white/20 px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2.5 z-20 pointer-events-auto`}
            >
              <div className="w-7 h-7 rounded-full bg-accent flex items-center justify-center font-bold text-primary text-xs shadow-inner">
                ✓
              </div>
              <div>
                <p className="text-[8px] text-white/50 uppercase font-bold tracking-wider">Accredited</p>
                <p className="text-xs font-bold text-white leading-none mt-0.5">{currentSlide.badgeText[lang]}</p>
              </div>
            </motion.div>

            {/* Floating Badge 2 (Bottom Right) */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className={`absolute ${currentSlide.badge2Pos || "bottom-[25%] right-[-40px]"} bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2.5 z-20 pointer-events-auto`}
            >
              <div className="w-7 h-7 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-accent text-xs shadow-sm">
                ★
              </div>
              <div>
                <p className="text-[8px] text-accent uppercase font-bold tracking-wider">Quality</p>
                <p className="text-xs font-bold text-white leading-none mt-0.5">{currentSlide.badgeVal[lang]}</p>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── ARROWS FOR MANUAL CONTROL (ACCESSIBILITY) ── */}
      <div className="hidden md:block absolute right-8 top-1/2 -translate-y-1/2 z-20 space-y-4 rtl:left-8 rtl:right-auto">
        <button
          onClick={handlePrev}
          className="flex items-center justify-center w-12 h-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white hover:text-primary transition-all duration-300"
          aria-label="Previous Slide"
        >
          {isRtl ? <ArrowRight size={18} /> : <ArrowLeft size={18} />}
        </button>
        <button
          onClick={handleNext}
          className="flex items-center justify-center w-12 h-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white hover:text-primary transition-all duration-300"
          aria-label="Next Slide"
        >
          {isRtl ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
        </button>
      </div>

      {/* ── SEAMLESS BOTTOM FOG / DHUND ACROSS FULL HERO WIDTH ── */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none z-10"
        style={{
          background: "linear-gradient(to top, rgba(0,26,63,1) 0%, rgba(0,26,63,0.85) 35%, rgba(0,26,63,0.4) 70%, transparent 100%)"
        }}
      />

      {/* ── OFFICIAL IH WORLD RAINBOW BORDER PINNED AT BOTTOM EDGE OF HERO ── */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
        <ThemeAccent />
      </div>
    </section>
  );
}
