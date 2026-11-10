"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Award, Globe2, BookOpen, Building2, ArrowRight, MapPin,
  CheckCircle2, Users, GraduationCap, Compass,
  Briefcase, ShieldCheck, FileDown, Mail, Phone,
  Star, Sparkles, ChevronRight, Play, ArrowUpRight, Check
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { fadeUp } from "@/utils/animations";
import ThemeAccent from "@/components/ThemeAccent";
import HeroSlider from "@/components/HeroSlider";
import StudentTestimonials from "@/components/StudentTestimonials";

// ─── STAGGER CHILDREN VARIANT ────────────────────────────────
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.93, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function HomePage() {
  const { lang } = useLanguage();
  const isRtl = lang === "ar";
  const [activeVideo, setActiveVideo] = useState("B4RYr-xnYj8");

  const spotlightVideos = [
    {
      id: "B4RYr-xnYj8",
      title: { en: "English Language Learning for Every Stage of Your Journey", ar: "تعليم اللغة الإنجليزية لكل مرحلة من رحلتك" },
      tag: { en: "Language Learning", ar: "تعليم اللغات" }
    },
    {
      id: "cWnokEcuVZA",
      title: { en: "Grow with IH Saudi Arabia", ar: "تطور وتألق مع الهاوس الدولي السعودية" },
      tag: { en: "Academic Growth", ar: "التطور الأكاديمي" }
    },
    {
      id: "ZVSCZiXFO7I",
      title: { en: "A Global Network. A Local Commitment.", ar: "شبكة عالمية والتزام محلي راسخ" },
      tag: { en: "Global Network", ar: "الشبكة العالمية" }
    }
  ];

  // ─── DATA STRUCTURES ───────────────────────────────────────
  const partners = [
    { name: { en: "IH World Organization", ar: "منظمة إي إتش العالمية" }, icon: <Globe2 className="w-5 h-5" /> },
    { name: { en: "Ministry of Education", ar: "وزارة التعليم" }, icon: <BookOpen className="w-5 h-5" /> },
    { name: { en: "TVTC", ar: "المؤسسة العامة للتدريب التقني" }, icon: <Building2 className="w-5 h-5" /> },
    { name: { en: "Cambridge CELTA", ar: "جامعة كامبريدج سيلتا" }, icon: <Award className="w-5 h-5" /> },
  ];

  const stats = [
    { num: "150+", label: { en: "Schools Worldwide", ar: "مدرسة حول العالم" } },
    { num: "50+", label: { en: "Countries", ar: "دولة" } },
    { num: "1953", label: { en: "Founded", ar: "تأسست عام" } },
    { num: "70+", label: { en: "Years of Excellence", ar: "عاماً من التميز التعليمي" } },
    { num: "30+", label: { en: "Years in Saudi Arabia", ar: "عاماً في خدمة المملكة" } },
    { num: "1000s", label: { en: "Learners Supported", ar: "الطلاب المستفيدين" } },
  ];

  const pillars = [
    {
      title: { en: "International Standards", ar: "معايير دولية" },
      bgColor: "#3f3dbe",
      textColor: "#fccb56",
      icon: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
          <path
            d="M 50 15 C 50 35, 65 50, 85 50 C 65 50, 50 65, 50 85 C 50 65, 35 50, 15 50 C 35 50, 50 35, 50 15 Z"
            fill="#fccb56"
          />
        </svg>
      ),
    },
    {
      title: { en: "Saudi Market Understanding", ar: "فهم السوق السعودي" },
      bgColor: "#9d2b67",
      textColor: "#ffffff",
      icon: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 transition-transform duration-700 ease-out group-hover:rotate-90">
          <path
            d="M 50 50 L 50 20 A 15 15 0 0 1 65 35 L 50 50 Z M 50 50 L 80 50 A 15 15 0 0 1 65 65 L 50 50 Z M 50 50 L 50 80 A 15 15 0 0 1 35 65 L 50 50 Z M 50 50 L 20 50 A 15 15 0 0 1 35 35 L 50 50 Z"
            fill="#ffffff"
          />
        </svg>
      ),
    },
    {
      title: { en: "Practical Learning", ar: "التعليم العملي" },
      bgColor: "#ff8b3d",
      textColor: "#8c1f58",
      icon: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
          <path
            d="M30 30 h40 a12 12 0 0 1 12 12 v26 a12 12 0 0 1 -12 12 h-34 l-10 8 c-1 1 -2 0 -2 -1.5 v-6.5 a12 12 0 0 1 -6 -12 v-26 a12 12 0 0 1 12 -12 z"
            fill="#8c1f58"
          />
        </svg>
      ),
    },
    {
      title: { en: "Growth & Development", ar: "النمو والتطوير" },
      bgColor: "#fed891",
      textColor: "#3f3dbe",
      icon: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
          <g transform="rotate(45 50 50)">
            <path
              d="M50 20 L25 45 A4 4 0 0 0 31 51 L44 38 V76 A4 4 0 0 0 48 80 H52 A4 4 0 0 0 56 76 V38 L69 51 A4 4 0 0 0 75 45 Z"
              fill="#3f3dbe"
            />
          </g>
        </svg>
      ),
    },
  ];

  // The 6 Core Educational Gateways
  const educationalGateways = [
    {
      title: { en: "English Language Courses", ar: "دورات اللغة الإنجليزية" },
      subtitle: { en: "General, Business, Technical & Young Learners", ar: "العامة، الأعمال، التقنية، وبرامج الصغار" },
      desc: { en: "Interactive courses from beginner to mastery, delivered by certified native trainers with CEFR certification.", ar: "برامج تفاعلية من المبتدئ إلى الاحتراف مع مدربين ناطقين باللغة الأصلية وشهادات CEFR معتمدة." },
      icon: <BookOpen className="w-6 h-6" />,
      image: "/beta_assets/p1.jpeg",
      color: "#002F6C",
      link: "/courses",
      badge: { en: "Core Programs", ar: "البرامج الأساسية" }
    },
    {
      title: { en: "Languages & Cultural Programs", ar: "برامج اللغات والثقافة العالمية" },
      subtitle: { en: "Arabic, French, Spanish, Chinese & World Languages", ar: "العربية، الفرنسية، الإسبانية، الصينية ولغات العالم" },
      desc: { en: "Immersive language studies and cultural experiences with native-speaking experts and modern multimedia labs.", ar: "دراسات لغوية وتجارب ثقافية ثرية بإشراف خبراء متخصصين ومختبرات وسائط متعددة حديثة." },
      icon: <Globe2 className="w-6 h-6" />,
      image: "/beta_assets/pic1.png",
      color: "#cf1430",
      link: "/languages-programs",
      badge: { en: "World Languages", ar: "لغات العالم" }
    },
    {
      title: { en: "Corporate Training & B2B Solutions", ar: "حلول تدريب الشركات والمؤسسات" },
      subtitle: { en: "Workforce Upskilling & CEFR Audits", ar: "تمكين القوى العاملة والتدقيق اللغوي" },
      desc: { en: "Customized corporate language training tailored to your industry goals, featuring TNA audits and performance reports.", ar: "حلول تدريب مؤسسية مصممة خصيصاً لأهداف قطاعك التجاري مع اختبارات تحديد المستوى وتقارير دورية." },
      icon: <Briefcase className="w-6 h-6" />,
      image: "/beta_assets/corporate_training.png",
      color: "#002F6C",
      link: "/corporate-training",
      badge: { en: "Enterprise", ar: "حلول الشركات" }
    },
    {
      title: { en: "Examinations & Certification", ar: "الاختبارات والشهادات الدولية" },
      subtitle: { en: "Cambridge English & IELTS Exam Prep", ar: "مؤهلات كامبريدج والتحضير لـ IELTS" },
      desc: { en: "Official preparation pathways for internationally accredited Cambridge qualifications and high-impact IELTS scores.", ar: "مسارات تأهيلية معتمدة لاجتياز اختبارات كامبريدج وتحقيق أعلى درجات الأيلتس العالمية." },
      icon: <ShieldCheck className="w-6 h-6" />,
      image: "/beta_assets/p3.jpeg",
      color: "#002F6C",
      link: "/examinations",
      badge: { en: "Accredited", ar: "شهادات دولية" }
    },
    {
      title: { en: "Teacher Training (CELTA)", ar: "تدريب وتطوير المعلمين" },
      subtitle: { en: "Cambridge CELTA & Professional Pathways", ar: "شهادة كامبريدج CELTA ومسارات التطوير" },
      desc: { en: "Develop your international teaching career with prestigious Cambridge CELTA certification and downloadable application forms.", ar: "طور مسيرتك المهنية في التدريس الدولي مع شهادة سيلتا كامبريدج ونماذج التقديم الإلكترونية." },
      icon: <GraduationCap className="w-6 h-6" />,
      image: "/beta_assets/teacher_training.png",
      color: "#cf1430",
      link: "/teacher-training",
      badge: { en: "Cambridge CELTA", ar: "سيلتا كامبريدج" }
    },
    {
      title: { en: "Study Abroad Programs", ar: "برامج الدراسة في الخارج" },
      subtitle: { en: "UK, USA, Canada & 45+ Countries", ar: "بريطانيا، أمريكا، كندا و٥٠+ دولة" },
      desc: { en: "Access global language immersion programs through our affiliated network of 150+ International House schools worldwide.", ar: "انطلق في تجربة تعليمية عالمية فريدة عبر شبكة معاهد إنترناشونال هاوس المنتشرة في أكثر من ٤٥ دولة." },
      icon: <Compass className="w-6 h-6" />,
      image: "/beta_assets/study_abroad-1.png",
      color: "#cf1430",
      link: "/study-abroad",
      badge: { en: "Global Network", ar: "شبكة عالمية" }
    },
  ];

  return (
    <div className="pt-16 lg:pt-[108px] overflow-hidden bg-white font-['Inter',_sans-serif]">

      {/* ── 1. HERO SLIDER (contains official IH World rainbow border pinned at its bottom) ── */}
      <HeroSlider />

      {/* ── 2. CORE PILLARS OVERVIEW (IH World Official Brand Aesthetics) ── */}
      <section className="py-20 bg-slate-50 relative overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#002F6C 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#cf1430] mb-4 font-['Montserrat',_sans-serif]">
              ★ {isRtl ? "ركائزنا الأساسية" : "OUR CORE PILLARS"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#002F6C] font-['Montserrat',_sans-serif] tracking-tight">
              {isRtl ? "ركائز التميز التعليمي" : "Pillars of Educational Excellence"}
            </h2>
            <p className="mt-3 text-slate-500 font-light text-base sm:text-lg max-w-2xl mx-auto">
              {isRtl 
                ? "نسعى لتقديم تجربة تعليمية فريدة تدمج بين المعايير الدولية والخبرة المحلية لدعم نموك وتألقك." 
                : "Empowering learners through world-class standards, practical experiences, and dedicated local support."}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                variants={fadeInScale}
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative rounded-[2rem] p-8 sm:p-10 flex flex-col justify-between aspect-[3/2] cursor-default shadow-md hover:shadow-2xl transition-all duration-300"
                style={{ backgroundColor: pillar.bgColor }}
              >
                <div className="flex items-start justify-between w-full">
                  <div className="relative">
                    {pillar.icon}
                  </div>
                </div>

                <div className="mt-8">
                  <h3 
                    className="text-xl sm:text-2xl font-black font-['Montserrat',_sans-serif] leading-tight"
                    style={{ color: pillar.textColor }}
                  >
                    {pillar.title[lang]}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 3. WHO WE ARE & STRATEGIC EMPOWERMENT (Executive Gateway Teaser) ── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#002F6C 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Left Side: Teaser Content */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="lg:col-span-7 space-y-6 text-start"
            >
              <Link
                href="/who-we-are"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#002F6C] hover:bg-[#cf1430] transition-colors cursor-pointer shadow-sm hover:scale-105"
              >
                {isRtl ? "من نحن • نبذة تعريفية" : "WHO WE ARE • EXECUTIVE OVERVIEW"}
              </Link>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-[#002F6C] font-['Montserrat',_sans-serif]">
                {isRtl ? "تمكين المتعلمين والمؤسسات في جميع أنحاء المملكة" : "Empowering Learners and Organizations Across Saudi Arabia"}
              </h2>
              
              <p className="text-[#cf1430] font-bold text-lg sm:text-xl leading-relaxed border-l-4 border-[#cf1430] pl-4 rtl:border-l-0 rtl:border-r-4 rtl:pl-0 rtl:pr-4">
                {isRtl ? "معايير عالمية. فهم محلي. نتائج حقيقية منذ عام 2001." : "International Standards. Local Understanding. Real Results Since 2001."}
              </p>
              
              <div className="text-slate-600 space-y-4 font-light text-base leading-relaxed">
                <p>
                  {isRtl
                    ? "إنترناشونال هاوس المملكة العربية السعودية هي جزء من شبكة إنترناشونال هاوس العالمية (IHWO) العريقة، التي تأسست عام ١٩٥٣ وتضم أكثر من ١٥٠ مدرسة لغات في ٥٠ دولة حول العالم."
                    : "International House Saudi Arabia (IHSA) is part of the prestigious International House World Organization (IHWO), founded in 1953 with a global network spanning over 150 schools across 50+ countries."}
                </p>
                <p>
                  {isRtl
                    ? "من خلال الجمع بين الخبرة الأكاديمية العالمية والفهم العميق لاحتياجات سوق العمل السعودي، نقدم تجارب تعليمية شاملة معتمدة تدعم أهداف رؤية المملكة ٢٠٣٠."
                    : "Combining international academic rigor with a deep understanding of Saudi workforce requirements, we deliver accredited learning solutions fully aligned with Saudi Vision 2030."}
                </p>
              </div>

              {/* Direct Gateway Links */}
              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <Link
                  href="/who-we-are"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-[#002F6C] text-white hover:bg-[#001a3f] shadow-lg shadow-[#002F6C]/20 hover:scale-[1.02] transition-all duration-300"
                >
                  <span>{isRtl ? "اكتشف قصتنا ورؤيتنا كاملة" : "Read Our Full Story & Vision"}</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </Link>

                <Link
                  href="/placement-test-booking"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-[#cf1430] text-white hover:bg-[#a50f26] shadow-lg shadow-[#cf1430]/25 hover:scale-[1.02] transition-all duration-300"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{isRtl ? "اختبار تحديد المستوى المجاني" : "Free Placement Test"}</span>
                </Link>
              </div>
            </motion.div>

            {/* Right Side: Visual & 70 Years Seal */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
              className="lg:col-span-5 relative"
            >
              <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-100">
                <Image
                  src="/beta_assets/ihsa.png"
                  alt="IH Saudi Arabia Headquarters & Education Center"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#cf1430] flex items-center justify-center text-white font-bold text-lg">✓</div>
                  <span className="text-white font-extrabold text-sm sm:text-base tracking-wide uppercase drop-shadow-md">
                    {isRtl ? "متوافق مع رؤية المملكة ٢٠٣٠" : "VISION 2030 ALIGNED"}
                  </span>
                </div>
              </div>

              {/* 70 Years Seal Floating */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6, type: "spring", stiffness: 200 }}
                className="absolute -top-8 -right-8 rtl:-right-auto rtl:-left-8 w-28 h-28 drop-shadow-2xl"
              >
                <Image src="/ih_70years_v2.png" alt="Celebrating 70 Years of IH World" fill className="object-contain" />
              </motion.div>

              {/* Accreditations mini grid */}
              <div className="mt-8 grid grid-cols-2 gap-3">
                {partners.map((p, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-100 rounded-2xl hover:border-[#002F6C]/30 hover:bg-white hover:shadow-md transition-all duration-300">
                    <div className="text-[#002F6C] bg-white w-9 h-9 rounded-xl flex items-center justify-center shadow-sm shrink-0">{p.icon}</div>
                    <span className="text-[11px] font-bold text-slate-700 leading-tight">{p.name[lang]}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── 4. THE 6 CORE EDUCATIONAL GATEWAYS (Streamlined & Clean) ── */}
      <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-y border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#002F6C] mb-4">
              <BookOpen className="w-3.5 h-3.5 text-yellow-400" />
              {isRtl ? "المسارات التعليمية والمهنية" : "EXPLORE OUR PATHWAYS"}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#002F6C] font-['Montserrat',_sans-serif] tracking-tight">
              {isRtl ? "برامجنا وحلولنا التعليمية المعتمدة" : "Educational Solutions & Global Pathways"}
            </h2>
            <p className="mt-3 text-slate-600 text-base sm:text-lg font-light leading-relaxed">
              {isRtl
                ? "اختر المسار المناسب لأهدافك من بين برامجنا المعتمدة للأفراد والمؤسسات والكوادر الوطنية:"
                : "Select the specialized pathway designed for your academic, career, or corporate growth:"}
            </p>
          </div>

          {/* 6 Gateway Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {educationalGateways.map((card, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInScale}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={card.image}
                      alt={card.title[lang]}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4">
                      <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider text-white bg-[#002F6C]/90 backdrop-blur-md shadow-sm border border-white/20">
                        {card.badge[lang]}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-lg sm:text-xl font-bold leading-tight font-['Montserrat',_sans-serif]">
                        {card.title[lang]}
                      </h3>
                      <p className="text-xs text-slate-200 mt-1 font-light">
                        {card.subtitle[lang]}
                      </p>
                    </div>
                  </div>

                  {/* Card Description */}
                  <div className="p-6">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {card.desc[lang]}
                    </p>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="p-6 pt-0 border-t border-slate-100 mt-auto">
                  <Link
                    href={card.link}
                    className="flex items-center justify-between text-xs sm:text-sm font-bold text-[#002F6C] group-hover:text-[#cf1430] transition-colors pt-4"
                  >
                    <span>{isRtl ? "استكشف التفاصيل والمسارات" : "Explore Program Details"}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 5. OFFICIAL VIDEO SHOWCASE — GROW WITH IH SAUDI ARABIA ── */}
      <section className="py-20 bg-white border-b border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#002F6C] bg-blue-50 border border-blue-200/60 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#cf1430]" />
              {isRtl ? "شاهد برامجنا بالفيديو" : "OFFICIAL VIDEO SHOWCASE"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#002F6C] font-['Montserrat',_sans-serif] mb-4">
              {isRtl ? "تطور مع الهاوس الدولي السعودية" : "Grow with IH Saudi Arabia"}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed">
              {isRtl
                ? "شاهد الفيديوهات الرسمية لبرامجنا وتعرف على معايير التدريب العالمية المعتمدة في كافة فروعنا بالمملكة."
                : "Watch our official videos and explore our interactive learning ecosystem delivering world-class language education across the Kingdom."}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Main Video Player */}
            <div className="lg:col-span-8">
              <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-950">
                <iframe
                  key={activeVideo}
                  src={`https://www.youtube-nocookie.com/embed/${activeVideo}?rel=0&playsinline=1`}
                  title="International House Saudi Arabia Official Video"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Video Selector List */}
            <div className="lg:col-span-4 space-y-3.5 text-start">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 px-1">
                {isRtl ? "اختر الفيديو للمشاهدة" : "Select Video to Watch"}
              </p>
              {spotlightVideos.map((vid) => {
                const isActive = vid.id === activeVideo;
                return (
                  <button
                    key={vid.id}
                    onClick={() => setActiveVideo(vid.id)}
                    className={`w-full text-start p-4 rounded-2xl transition-all duration-300 flex items-start gap-4 border ${
                      isActive
                        ? "bg-white border-[#002F6C] shadow-lg ring-2 ring-[#002F6C]/10 translate-x-1 rtl:-translate-x-1"
                        : "bg-white/80 hover:bg-white border-slate-200/80 hover:border-slate-300 shadow-sm"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isActive ? "bg-[#002F6C] text-white" : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      <Play size={16} fill={isActive ? "currentColor" : "none"} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#cf1430] block mb-1">
                        {vid.tag[lang]}
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-800 leading-snug line-clamp-2">
                        {vid.title[lang]}
                      </h4>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. BY THE NUMBERS (GLOBAL CREDENTIALS) ── */}
      <section className="py-20 bg-[#002F6C] text-white relative overflow-hidden">
        <div className="absolute -left-32 top-0 w-96 h-96 bg-[#cf1430]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -right-32 bottom-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8 space-y-10">
              <div className="text-start">
                <span className="text-xs font-bold tracking-widest text-[#cf1430] uppercase block mb-2">
                  {isRtl ? "شبكة عالمية. التزام محلي." : "A Global Network. A Local Commitment."}
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold font-['Montserrat',_sans-serif]">
                  {isRtl ? "إحصائيات تترجم ريادتنا التعليمية" : "IH Saudi Arabia By The Numbers"}
                </h3>
              </div>

              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={staggerContainer}
                className="grid grid-cols-2 sm:grid-cols-3 gap-8"
              >
                {stats.map((s, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInScale}
                    className="text-start border-l border-white/10 pl-6 rtl:border-l-0 rtl:border-r rtl:pl-0 rtl:pr-6"
                  >
                    <div className="text-4xl sm:text-5xl font-black text-[#cf1430] tracking-tight mb-2">{s.num}</div>
                    <div className="text-xs sm:text-sm font-light text-slate-300 leading-snug">{s.label[lang]}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
              className="lg:col-span-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#cf1430]/10 rounded-bl-full pointer-events-none" />
              <p className="text-sm sm:text-base font-light text-white/90 leading-relaxed relative z-10">
                {isRtl
                  ? "كجزء من منظمة إنترناشونال هاوس العالمية، تتيح إي إتش السعودية للمتعلمين والمؤسسات الوصول إلى أرقى الخبرات الأكاديمية العالمية والمعايير المعتمدة دولياً."
                  : "As part of the International House World Organization, IH Saudi Arabia provides learners and organizations with access to global expertise, international partnerships, and world-class educational practices."}
              </p>
              <div className="mt-6 pt-6 border-t border-white/10">
                <Link
                  href="/who-we-are#global-network"
                  className="inline-flex items-center gap-2 text-xs font-bold text-yellow-400 hover:text-white transition-colors"
                >
                  <span>{isRtl ? "تعرف على شبكتنا الدولية" : "Explore Our Global Network"}</span>
                  <ArrowRight size={13} className="rtl:rotate-180" />
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── 7. VERIFIED STUDENT TESTIMONIALS (Social Proof) ── */}
      <StudentTestimonials />

      {/* ── 8. SAUDI PRESENCE & CAMPUS LOCATIONS ── */}
      <section className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center max-w-3xl mx-auto mb-14 space-y-3"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#002F6C]">
              <MapPin className="w-3.5 h-3.5 text-yellow-400" />
              {isRtl ? "مواقع مراكزنا بالمملكة" : "CAMPUS NETWORK IN SAUDI ARABIA"}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#002F6C] font-['Montserrat',_sans-serif] tracking-tight">
              {isRtl ? "فروع ومراكز إنترناشونال هاوس" : "Our Campuses & Learning Centers"}
            </h2>
            <p className="text-slate-500 font-light text-base sm:text-lg">
              {isRtl
                ? "نقدم خدماتنا للدارسين، والمهنيين، والشركات في مراكزنا الحديثة المجهزة بأحدث التقنيات:"
                : "Serving learners, professionals, and corporate organizations in our modern facilities equipped with smart classrooms:"}
            </p>
          </motion.div>

          {/* Locations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: { en: "Riyadh Center", ar: "مركز الرياض" },
                desc: { en: "Al Olaya District • Central Province Flagship Center", ar: "حي العليا • المركز الرئيسي للمنطقة الوسطى" },
                bg: "/riyadh_bg.png",
                path: "/contact",
                color: "#002F6C"
              },
              {
                name: { en: "Dammam & Dhahran", ar: "مركز الدمام والظهران" },
                desc: { en: "Eastern Province Hub • Corporate & Individual Campus", ar: "المنطقة الشرقية • مركز الأفراد والشركات" },
                bg: "/dammam_bg.png",
                path: "/contact",
                color: "#cf1430"
              },
              {
                name: { en: "Western Province (Jeddah)", ar: "المنطقة الغربية (جدة)" },
                desc: { en: "Regional Training & Placement Test Operations", ar: "خدمات التدريب الإقليمية واختبارات التحديد" },
                bg: "/jeddah_bg.png",
                path: "/contact",
                color: "#002F6C"
              },
            ].map((loc, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInScale}
                className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={loc.bg}
                    alt={loc.name[lang]}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white text-start">
                    <h3 className="text-xl font-bold font-['Montserrat',_sans-serif]">
                      {loc.name[lang]}
                    </h3>
                    <p className="text-xs text-slate-200 mt-1 font-light">
                      {loc.desc[lang]}
                    </p>
                  </div>
                </div>

                <div className="p-6 flex items-center justify-between border-t border-slate-100 bg-white">
                  <div className="flex items-center gap-2 text-slate-500">
                    <MapPin className="w-4 h-4 text-[#cf1430]" />
                    <span className="text-xs font-bold">{isRtl ? "الموقع ومعلومات التواصل" : "Location & Contact"}</span>
                  </div>
                  <Link
                    href={loc.path}
                    className="inline-flex items-center gap-1 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#002F6C] hover:bg-[#cf1430] transition-colors"
                  >
                    <span>{isRtl ? "زيارة الفرع" : "Visit Campus"}</span>
                    <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 9. 70 YEARS CELEBRATION STRATEGIC BAND ── */}
      <section className="py-16 bg-gradient-to-r from-[#001a3f] via-[#002F6C] to-[#001a3f] relative overflow-hidden border-y-2 border-[#f59e0b]/30">
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col lg:flex-row items-center justify-between gap-10"
          >
            <motion.div variants={slideLeft} className="flex flex-col sm:flex-row items-center gap-8 text-center sm:text-start">
              <div className="flex items-center bg-white p-4 rounded-2xl shadow-2xl shrink-0 border border-slate-100/10">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24">
                  <Image src="/ih_70years_v2.png" alt="Celebrating 70 Years of IH World" fill className="object-contain" />
                </div>
              </div>

              <div className="space-y-2 text-start">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white bg-[#cf1430] shadow-sm">
                  {isRtl ? "تأسست عام ١٩٥٣" : "ESTABLISHED IN 1953"}
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-['Montserrat',_sans-serif] leading-tight">
                  {isRtl ? "٧٠ عاماً من التميز التعليمي العالمي" : "70 Years of Global Educational Excellence"}
                </h3>
                <p className="text-blue-100 font-light text-sm sm:text-base max-w-xl">
                  {isRtl 
                    ? "شراكة دولية ممتدة تقدم أرقى مستويات جودة تدريس اللغة الإنجليزية في المملكة والعالم." 
                    : "A historic global partnership delivering the highest standards of English language training across the Kingdom and worldwide."}
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInScale} className="shrink-0">
              <Link href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-sm bg-[#cf1430] text-white hover:bg-[#a50f26] hover:scale-[1.03] active:scale-95 transition-all duration-300 shadow-lg shadow-[#cf1430]/30 group">
                <span>{isRtl ? "تواصل معنا اليوم" : "Contact Us Today"}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform duration-300 rtl:rotate-180" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 10. FINAL GET STARTED & CONVERSION BANNER ── */}
      <section className="py-24 relative overflow-hidden bg-[#001a3f] text-white">
        <Image src="/riyadh_bg.png" alt="Get started banner" fill className="object-cover object-center opacity-10" />
        <div className="absolute inset-0 bg-[#001a3f]/90 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#cf1430] bg-[#cf1430]/10 mb-4">
              {isRtl ? "ابدأ رحلتك اليوم" : "START YOUR JOURNEY TODAY"}
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-['Montserrat',_sans-serif] leading-tight mb-6">
              {isRtl ? "ارتقِ بطلاقتك اللغوية مع إنترناشونال هاوس" : "Elevate Your Language Fluency with IH Saudi Arabia"}
            </h2>
            <p className="text-base sm:text-lg font-light text-slate-300 leading-relaxed max-w-3xl mx-auto">
              {isRtl
                ? "سواء كنت ترغب في تحسين لغتك الإنجليزية، أو الحصول على شهادة دولية، أو تدريب موظفي شركتك، فإن خبرائنا مستعدون لمساعدتك في كل خطوة."
                : "Whether you want to master English, gain an international Cambridge qualification, train your corporate team, or study abroad, our certified academic team is here to support you."}
            </p>
          </motion.div>

          {/* Quick Actions */}
          <div className="pt-6">
            <h4 className="font-extrabold text-[#cf1430] text-xs uppercase tracking-wider mb-6">
              {isRtl ? "روابط سريعة ومباشرة" : "Quick Action Gateways"}
            </h4>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/placement-test-booking" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-[#cf1430] text-white hover:bg-[#a50f26] hover:scale-[1.02] shadow-lg shadow-[#cf1430]/25 transition-all duration-300">
                <Sparkles className="w-4 h-4" />
                <span>{isRtl ? "احجز اختبار تحديد المستوى" : "Book a Placement Test"}</span>
              </Link>
              <Link href="/courses" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:scale-[1.02] transition-all duration-300">
                <BookOpen className="w-4 h-4" />
                <span>{isRtl ? "استكشف كتالوج الدورات" : "Explore Courses"}</span>
              </Link>
              <Link href="/corporate-training-request-form" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:scale-[1.02] transition-all duration-300">
                <Briefcase className="w-4 h-4" />
                <span>{isRtl ? "طلب مقترح للشركات" : "Request Corporate Proposal"}</span>
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:scale-[1.02] transition-all duration-300">
                <Mail className="w-3.5 h-3.5" />
                <span>{isRtl ? "تواصل معنا" : "Contact Us"}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
