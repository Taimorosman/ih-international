"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Award, Globe2, BookOpen, Building2, ArrowRight, MapPin,
  CheckCircle2, Users, ArrowUpRight, GraduationCap, Compass,
  Briefcase, Calendar, ShieldCheck, FileDown, Mail, Phone,
  Star, Sparkles, ChevronRight, Play,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { fadeUp } from "@/utils/animations";
import ThemeAccent from "@/components/ThemeAccent";
import HeroSlider from "@/components/HeroSlider";

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
      iconColor: "#fccb56",
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
      iconColor: "#ffffff",
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
      iconColor: "#8c1f58",
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
      iconColor: "#3f3dbe",
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

  const strengths = [
    {
      en: "International House World Organization Member",
      ar: "عضو في منظمة إنترناشونال هاوس العالمية",
      icon: <Globe2 className="w-6 h-6" />,
      image: "/str_network.png",
      headerColor: "#002F6C",
      headerLabel: { en: "Global Network", ar: "شبكة عالمية" },
    },
    {
      en: "Over 30 Years of Experience in Saudi Arabia",
      ar: "أكثر من ٣٠ عاماً من الخبرة في المملكة العربية السعودية",
      icon: <Star className="w-6 h-6" />,
      image: "/str_saudi.png",
      headerColor: "#f59e0b",
      headerLabel: { en: "30+ Years", ar: "أكثر من ٣٠ عاماً" },
    },
    {
      en: "Internationally Aligned Methodologies",
      ar: "مناهج تعليمية متوافقة مع المعايير الدولية",
      icon: <BookOpen className="w-6 h-6" />,
      image: "/str_method.png",
      headerColor: "#16a34a",
      headerLabel: { en: "Proven Methods", ar: "مناهج مُعتمدة" },
    },
    {
      en: "Experienced Trainers and Educators",
      ar: "مدربون ومربون ذوو خبرة وكفاءة عالية",
      icon: <Users className="w-6 h-6" />,
      image: "/str_trainers.png",
      headerColor: "#ea580c",
      headerLabel: { en: "Expert Trainers", ar: "مدربون متخصصون" },
    },
    {
      en: "Corporate and Workforce Development Expertise",
      ar: "خبرة واسعة في تدريب وتطوير القوى العاملة للشركات",
      icon: <Briefcase className="w-6 h-6" />,
      image: "/str_corporate.png",
      headerColor: "#cf1430",
      headerLabel: { en: "Corporate Training", ar: "تدريب الشركات" },
    },
    {
      en: "Face-to-Face, Online, and Hybrid Learning Solutions",
      ar: "حلول تعليمية حضورية، وعبر الإنترنت، ومدمجة",
      icon: <Compass className="w-6 h-6" />,
      image: "/str_hybrid.png",
      headerColor: "#6d28d9",
      headerLabel: { en: "Flexible Learning", ar: "تعليم مرن" },
    },
    {
      en: "Commitment to Quality, Innovation, and Excellence",
      ar: "التزام راسخ بالجودة والابتكار والتميز",
      icon: <Award className="w-6 h-6" />,
      image: "/str_quality.png",
      headerColor: "#0f766e",
      headerLabel: { en: "Quality & Excellence", ar: "الجودة والتميز" },
    },
  ];

  // Services with card images - real original assets from beta.ihsaudiarabia.com
  const services = [
    {
      title: { en: "English Language Courses", ar: "دورات اللغة الإنجليزية" },
      desc: { en: "Practical English programs for learners, professionals, and organizations.", ar: "برامج عملية في اللغة الإنجليزية للمتعلمين والمهنيين والمؤسسات." },
      icon: <BookOpen className="w-6 h-6" />,
      image: "/beta_assets/p1.jpeg",
      color: "#002F6C",
      accentClass: "border-t-4 border-t-[#002F6C]",
      link: "/courses#general-english",
    },
    {
      title: { en: "Languages & Cultural Programs", ar: "برامج اللغات والثقافة" },
      desc: { en: "Arabic, French, Spanish, Chinese, and other world languages with cultural learning.", ar: "العربية، الفرنسية، الإسبانية، الصينية وغيرها من اللغات العالمية." },
      icon: <Globe2 className="w-6 h-6" />,
      image: "/beta_assets/pic1.png",
      color: "#cf1430",
      accentClass: "border-t-4 border-t-[#cf1430]",
      link: "/courses/learn-arabic",
    },
    {
      title: { en: "Corporate Training Solutions", ar: "حلول تدريب الشركات" },
      desc: { en: "Customized workforce development and communication training programs.", ar: "برامج تدريبية مخصصة لتطوير مهارات التواصل وتنمية القوى العاملة." },
      icon: <Briefcase className="w-6 h-6" />,
      image: "/beta_assets/corporate_training.png",
      color: "#002F6C",
      accentClass: "border-t-4 border-t-[#002F6C]",
      link: "/corporate-training",
    },
    {
      title: { en: "Teacher Training & Professional Dev.", ar: "تدريب المعلمين والتطوير المهني" },
      desc: { en: "Supporting educators through internationally informed development pathways.", ar: "دعم المعلمين من خلال مسارات التطوير المهني المعتمدة دولياً." },
      icon: <GraduationCap className="w-6 h-6" />,
      image: "/beta_assets/teacher_training.png",
      color: "#cf1430",
      accentClass: "border-t-4 border-t-[#cf1430]",
      link: "/teacher-training",
    },
    {
      title: { en: "Examinations & Certification", ar: "الاختبارات والشهادات الدولية" },
      desc: { en: "Preparation pathways for internationally recognized qualifications and certifications.", ar: "مسارات تأهيلية لاجتياز الاختبارات والحصول على الشهادات المعتمدة عالمياً." },
      icon: <ShieldCheck className="w-6 h-6" />,
      image: "/beta_assets/p3.jpeg",
      color: "#002F6C",
      accentClass: "border-t-4 border-t-[#002F6C]",
      link: "/examinations",
    },
    {
      title: { en: "Study Abroad & International Ops", ar: "الدراسة في الخارج والفرص الدولية" },
      desc: { en: "Access global learning experiences through trusted IH educational partnerships.", ar: "فرص للتعلم الدولي المتميز من خلال شراكات تعليمية موثوقة وشبكة معاهد IH العالمية." },
      icon: <Compass className="w-6 h-6" />,
      image: "/beta_assets/study_abroad-1.png",
      color: "#cf1430",
      accentClass: "border-t-4 border-t-[#cf1430]",
      link: "/study-abroad",
    },
  ];

  const corporateServices = [
    { en: "Business English", ar: "الإنجليزية للأعمال" },
    { en: "Technical English", ar: "الإنجليزية الفنية والتقنية" },
    { en: "Executive Coaching", ar: "التدريب والتوجيه التنفيذي" },
    { en: "Workplace Communication", ar: "التواصل في بيئة العمل" },
    { en: "Placement Testing", ar: "اختبارات تحديد المستوى" },
    { en: "Customized Training Solutions", ar: "حلول تدريبية مخصصة بالكامل" },
  ];

  const learningOptions = [
    {
      en: "Face-to-Face Learning",
      ar: "التعليم الحضوري المباشر",
      descEn: "Immersive in-person learning with native speakers at our modern centers.",
      descAr: "تعليم حضوري تفاعلي داخل مراكزنا الحديثة مع معلمين مؤهلين دولياً.",
      image: "/learn_face_to_face.png",
      color: "#002F6C",
      icon: "Users"
    },
    {
      en: "Live Online Classes",
      ar: "الفصول المباشرة عبر الإنترنت",
      descEn: "Interactive digital classroom experience with real-time feedback and flexibility.",
      descAr: "فصول رقمية تفاعلية مباشرة تتيح لك التواصل ومتابعة دروسك بمرونة عالية.",
      image: "/learn_online_classes.png",
      color: "#cf1430",
      icon: "Globe2"
    },
    {
      en: "Hybrid Learning",
      ar: "التعليم المدمج (حضوري وعن بعد)",
      descEn: "Perfect blend of face-to-face classroom interaction and online convenience.",
      descAr: "مزيج مثالي يجمع بين التعليم الحضوري التفاعلي ومرونة التعلم الرقمي.",
      image: "/learn_hybrid.png",
      color: "#f59e0b",
      icon: "Compass"
    },
    {
      en: "Private Tuition (1-on-1)",
      ar: "الدروس الخصوصية الفردية (1-on-1)",
      descEn: "Personalized individual tutoring tailored to your exact pace and targets.",
      descAr: "حصص فردية مخصصة بالكامل تركز على أهدافك وسرعة تعلمك الخاصة.",
      image: "/about_classroom.png",
      color: "#16a34a",
      icon: "GraduationCap"
    },
    {
      en: "Group Programs",
      ar: "البرامج والصفوف الجماعية",
      descEn: "Collaborative and dynamic cohorts focusing on active conversational English.",
      descAr: "مجموعات تعليمية حيوية تركز على التواصل الفعال والمحادثة الجماعية النشطة.",
      image: "/str_trainers.png",
      color: "#6d28d9",
      icon: "Sparkles"
    },
    {
      en: "Corporate Language Training",
      ar: "التدريب المخصص للشركات والجهات",
      descEn: "Tailored business language solutions to empower and elevate your workforce.",
      descAr: "حلول لغوية وتدريبية مخصصة للأعمال لتمكين وتطوير كوادر الشركات.",
      image: "/learn_corporate.png",
      color: "#ea580c",
      icon: "Briefcase"
    }
  ];

  const examOptions = [
    {
      en: "IELTS Academic & General",
      ar: "التحضير لاختبار آيلتس (IELTS)",
      descEn: "Master the skills and strategies needed to achieve your target band score.",
      descAr: "اكتسب المهارات والاستراتيجيات اللازمة لتحقيق الدرجة المطلوبة في الآيلتس.",
      image: "/exam_exams.png",
      color: "#cf1430",
      icon: "Award"
    },
    {
      en: "LanguageCert International Exams",
      ar: "اختبارات لانجوج سيرت (LanguageCert)",
      descEn: "Fast, flexible, and internationally recognized English language examinations.",
      descAr: "اختبارات لغة إنجليزية مرنة، سريعة وموثقة دولياً لتلبية احتياجاتك.",
      image: "/card_languages.png",
      color: "#002F6C",
      icon: "ShieldCheck"
    },
    {
      en: "Cambridge English Qualifications",
      ar: "مؤهلات كامبريدج للغة الإنجليزية",
      descEn: "Prestigious qualifications that open doors to global academic & career success.",
      descAr: "مؤهلات مرموقة تفتح لك آفاقاً واسعة للدراسة والعمل على مستوى العالم.",
      image: "/card_english.png",
      color: "#16a34a",
      icon: "GraduationCap"
    },
    {
      en: "Pearson PTE Qualifications",
      ar: "مؤهلات بيرسون الدولية (PTE)",
      descEn: "Highly trusted, computer-based assessments for global migration and admission.",
      descAr: "اختبارات مؤتمتة موثوقة عالمياً لأغراض الهجرة والقبول الجامعي الدولي.",
      image: "/card_abroad.png",
      color: "#f59e0b",
      icon: "Globe2"
    },
    {
      en: "Teacher Development (CELTA)",
      ar: "مسارات تدريب وتطوير المعلمين (CELTA)",
      descEn: "Advance your international teaching career with Cambridge CELTA training.",
      descAr: "ارتقِ بمسيرتك التعليمية الدولية مع شهادة السيلتا وبرامج التطوير المهني.",
      image: "/exam_teacher.png",
      color: "#6d28d9",
      icon: "BookOpen"
    }
  ];


  const learningJourney = [
    {
      step: "01",
      title: { en: "Placement Test", ar: "اختبار تحديد المستوى" },
      bgClass: "bg-[#cf1430] text-white border-transparent",
      numColor: "text-white/30 group-hover:text-white/90",
      barColor: "#ffffff"
    },
    {
      step: "02",
      title: { en: "Academic Consultation", ar: "الاستشارة الأكاديمية" },
      bgClass: "bg-[#16a34a] text-white border-transparent",
      numColor: "text-white/30 group-hover:text-white/90",
      barColor: "#ffffff"
    },
    {
      step: "03",
      title: { en: "Program Recommendation", ar: "توصية البرنامج المناسب" },
      bgClass: "bg-[#f59e0b] text-[#002F6C] border-transparent",
      numColor: "text-[#002F6C]/30 group-hover:text-[#002F6C]/90",
      barColor: "#002F6C"
    },
    {
      step: "04",
      title: { en: "Learning & Development", ar: "التعليم والتطوير المستمر" },
      bgClass: "bg-white text-slate-800 border-slate-200",
      numColor: "text-slate-800/30 group-hover:text-slate-800/90",
      barColor: "#002F6C"
    },
    {
      step: "05",
      title: { en: "Assessment & Progress Tracking", ar: "التقييم ومتابعة مستوى التقدم" },
      bgClass: "bg-[#cf1430] text-white border-transparent",
      numColor: "text-white/30 group-hover:text-white/90",
      barColor: "#ffffff"
    },
    {
      step: "06",
      title: { en: "Certification & Next-Level Progression", ar: "الشهادات والترقي للمستوى الأعلى" },
      bgClass: "bg-[#16a34a] text-white border-transparent",
      numColor: "text-white/30 group-hover:text-white/90",
      barColor: "#ffffff"
    }
  ];

  const getIcon = (iconName: string, className: string = "w-5 h-5") => {
    switch (iconName) {
      case "Users": return <Users className={className} />;
      case "Globe2": return <Globe2 className={className} />;
      case "Compass": return <Compass className={className} />;
      case "GraduationCap": return <GraduationCap className={className} />;
      case "Sparkles": return <Sparkles className={className} />;
      case "Briefcase": return <Briefcase className={className} />;
      case "Award": return <Award className={className} />;
      case "ShieldCheck": return <ShieldCheck className={className} />;
      case "BookOpen": return <BookOpen className={className} />;
      default: return <BookOpen className={className} />;
    }
  };

  return (
    <div className="pt-[72px] overflow-hidden bg-white font-['Inter',_sans-serif]">

      {/* ── HERO SLIDER (contains official IH World rainbow border pinned at its bottom border) ── */}
      <HeroSlider />

      {/* ─── NEW: CORE PILLARS SECTION ─── */}
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
                ? "نسعى لتقديم تجربة تعليمية فريدة تدمج بين المعايير الدولية والخبرة المحلية لدعم نموك." 
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
                {/* Icon wrapper at the top */}
                <div className="flex items-start justify-between w-full">
                  <div className="relative">
                    {pillar.icon}
                  </div>
                </div>

                {/* Text content at the bottom */}
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

      {/* ─────────────────────────────────────────────────────────────────
          1. ABOUT & EMPOWERMENT + 70 YEARS BADGE
      ───────────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Subtle background grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#002F6C 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Left Side: Content */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="lg:col-span-7 space-y-6 text-start"
            >
              <Link
                href="/who-we-are"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#002F6C] hover:bg-[#cf1430] transition-colors cursor-pointer shadow-sm hover:scale-105"
              >
                {isRtl ? "من نحن" : "WHO WE ARE"}
              </Link>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-[#002F6C] font-['Montserrat',_sans-serif]">
                {isRtl ? "تمكين المتعلمين والمؤسسات في جميع أنحاء المملكة" : "Empowering Learners and Organizations Across Saudi Arabia"}
              </h2>
              <p className="text-[#cf1430] font-bold text-lg sm:text-xl leading-relaxed border-l-4 border-[#cf1430] pl-4 rtl:border-l-0 rtl:border-r-4 rtl:pl-0 rtl:pr-4">
                {isRtl ? "معايير عالمية. فهم محلي. نتائج حقيقية." : "International Standards. Local Understanding. Real Results."}
              </p>
              <div className="text-slate-600 space-y-4 font-light text-base leading-relaxed">
                <p>
                  {isRtl
                    ? "إنترناشونال هاوس المملكة العربية السعودية (IHSA) هي جزء من منظمة إنترناشونال هاوس العالمية (IHWO) المرموقة دولياً."
                    : "International House Saudi Arabia (IHSA) is part of the globally respected International House World Organization (IHWO), one of the world's leading networks of language schools and teacher training centers."}
                </p>
                <p>
                  {isRtl
                    ? "لأكثر من ٣٠ عاماً، ساندت إنترناشونال هاوس السعودية الدارسين، والمهنيين، والشركات، والمؤسسات الحكومية في جميع أنحاء المملكة عبر تقديم برامج تعليم لغات عالية الجودة."
                    : "For over 30 years, IH Saudi Arabia has supported learners, professionals, companies, and institutions across the Kingdom through high-quality language education, corporate training solutions, teacher development programs, international qualifications, and global learning opportunities."}
                </p>
                <p>
                  {isRtl
                    ? "من خلال الجمع بين الخبرة الأكاديمية العالمية والفهم العميق للاحتياجات المحلية، نساعد الأفراد والمنظمات على تطوير المهارات التواصلية، والمعرفة، والثقة."
                    : "Combining international expertise with deep local understanding, we help individuals and organizations develop the communication skills, knowledge, and confidence needed to succeed in an increasingly connected world."}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="pt-6 space-y-4">
                <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wider">
                  {isRtl ? "ابدأ رحلتك التعليمية معنا" : "Start Your Journey With Us"}
                </h4>
                <div className="flex flex-wrap gap-3">
                  <Link href="/courses/placement-test"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-[#cf1430] text-white hover:bg-[#a50f26] shadow-lg shadow-[#cf1430]/25 hover:scale-[1.02] transition-all duration-300">
                    {isRtl ? "احجز اختبار تحديد المستوى" : "Book a Placement Test"}
                  </Link>
                  <Link href="/courses"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-[#002F6C] text-white hover:bg-[#001a3f] shadow-lg shadow-[#002F6C]/20 hover:scale-[1.02] transition-all duration-300">
                    {isRtl ? "استكشف دوراتنا" : "Explore Our Courses"}
                  </Link>
                  <Link href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm border-2 border-[#002F6C]/20 text-[#002F6C] hover:bg-slate-50 hover:scale-[1.02] transition-all duration-300">
                    {isRtl ? "طلب مقترح تدريب الشركات" : "Request a Corporate Proposal"}
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Image + Badges */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
              className="lg:col-span-5 relative"
            >
              {/* Main classroom image */}
              <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-100">
                <Image
                  src="/beta_assets/ihsa.png"
                  alt="IH Saudi Arabia Headquarters & Education Center"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#cf1430] flex items-center justify-center text-white font-bold text-lg">✓</div>
                  <span className="text-white font-extrabold text-sm sm:text-base tracking-wide uppercase drop-shadow-md">
                    {isRtl ? "متوافق مع رؤية المملكة ٢٠٣٠" : "VISION 2030 ALIGNED"}
                  </span>
                </div>
              </div>

              {/* 70 Years Badge - floating */}
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
              <div className="mt-10 grid grid-cols-2 gap-3">
                {partners.map((p, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-100 rounded-2xl hover:border-[#002F6C]/30 hover:bg-white hover:shadow-md transition-all duration-300">
                    <div className="text-[#002F6C] bg-white w-9 h-9 rounded-xl flex items-center justify-center shadow-sm">{p.icon}</div>
                    <span className="text-[11px] font-bold text-slate-700 leading-tight">{p.name[lang]}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          1B. OFFICIAL VIDEO SHOWCASE — GROW WITH IH SAUDI ARABIA
      ───────────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-y border-slate-200/80 relative overflow-hidden">
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

      {/* ─────────────────────────────────────────────────────────────────
          2. BY THE NUMBERS (STATS) — IH World Navy Blue style
      ───────────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#002F6C] text-white relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute -left-32 top-0 w-96 h-96 bg-[#cf1430]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -right-32 bottom-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] pointer-events-none" />

        {/* 70 years banner watermark */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-[0.07] pointer-events-none hidden lg:block">
          <Image src="/ih_70years_v2.png" alt="" width={220} height={220} className="object-contain" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Stats grid */}
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

            {/* Description Card */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
              className="lg:col-span-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#cf1430]/10 rounded-bl-full pointer-events-none" />
              <p className="text-sm sm:text-base font-light text-white/90 leading-relaxed relative z-10">
                {isRtl
                  ? "كجزء من منظمة إنترناشونال هاوس العالمية، تتيح إي إتش السعودية للمتعلمين والمؤسسات الوصول إلى الخبرات الأكاديمية العالمية."
                  : "As part of the International House World Organization, IH Saudi Arabia provides learners and organizations with access to global expertise, international partnerships, and world-class educational practices."}
              </p>

            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          3. WHY CHOOSE US — IH World LDA style checklist
      ───────────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side text */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideLeft}
              className="space-y-6 text-start"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#cf1430]">
                {isRtl ? "مواطن قوتنا ورسالتنا" : "OUR VALUES & MISSION"}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#002F6C] font-['Montserrat',_sans-serif] leading-tight">
                {isRtl ? "لماذا تختار إنترناشونال هاوس السعودية؟" : "Why Choose IH Saudi Arabia?"}
              </h2>
              <div className="text-slate-600 space-y-4 font-light text-base leading-relaxed">
                <p>
                  {isRtl
                    ? "في إنترناشونال هاوس السعودية، نؤمن بأن التعليم يجب أن يكون عملياً، وملهماً، ومتوافقاً مع الاحتياجات المتغيرة للعالم الحقيقي."
                    : "At IH Saudi Arabia, we believe education should be practical, inspiring, and aligned with real-world needs."}
                </p>
                <p>
                  {isRtl
                    ? "صُممت برامجنا المتخصصة لبناء الثقة، وتطوير مهارات الاتصال الفعالة، ودعم تميز القوى العاملة."
                    : "Our programs are designed to build confidence, develop communication skills, support workforce development, and create meaningful opportunities for personal and professional growth."}
                </p>
              </div>

              {/* Real IH classroom visual */}
              <div className="relative h-48 w-full rounded-2xl overflow-hidden shadow-inner hidden sm:block">
                <Image src="/beta_assets/pic1.png" alt="Students learning at International House" fill className="object-cover object-center brightness-90" />
                <div className="absolute inset-0 bg-[#002F6C]/30" />
                <div className="absolute inset-0 flex items-center justify-center p-6 text-center text-white">
                  <p className="font-extrabold text-sm tracking-widest uppercase">
                    {isRtl ? "خبرة تفوق ٣٠ عاماً في خدمة المملكة" : "OVER 30 YEARS OF EDUCATIONAL EXCELLENCE"}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right side Strengths — image cards grid */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
              {strengths.map((str, i) => (
                <motion.div
                  key={i}
                  variants={fadeInScale}
                  className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-default"
                >
                  {/* Background Image */}
                  <div className="relative h-36 overflow-hidden">
                    <Image
                      src={str.image}
                      alt={str.en}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                    {/* Icon floating on image */}
                    <div
                      className="absolute top-3 right-3 rtl:right-auto rtl:left-3 w-9 h-9 rounded-xl flex items-center justify-center text-white shadow-lg backdrop-blur-sm"
                      style={{ backgroundColor: `${str.headerColor}cc` }}
                    >
                      {str.icon}
                    </div>
                  </div>

                  {/* Colored header label bar */}
                  <div
                    className="px-4 py-2 flex items-center gap-2"
                    style={{ backgroundColor: str.headerColor }}
                  >
                    <span className="text-white text-[11px] font-black uppercase tracking-widest">
                      {str.headerLabel[lang]}
                    </span>
                  </div>

                  {/* Card text body */}
                  <div className="bg-white px-4 py-3">
                    <p className="font-bold text-slate-800 text-sm leading-snug">
                      {str[lang]}
                    </p>
                  </div>

                  {/* Bottom color accent line */}
                  <div className="h-1 w-full" style={{ backgroundColor: str.headerColor }} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Pinned at the bottom border of the section, rising upwards */}
        <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
          <ThemeAccent />
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          4. OUR SERVICES — IH Mexico / LDA Image Cards Style
      ───────────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#f8f9fc] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="max-w-3xl mx-auto space-y-4 mb-16"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#002F6C]">
              {isRtl ? "خدماتنا الأكاديمية والمهنية" : "OUR CORE SERVICES"}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#002F6C] font-['Montserrat',_sans-serif] tracking-tight">
              {isRtl ? "استكشف خدماتنا الشاملة" : "Our Educational Services"}
            </h2>
            <p className="text-slate-500 font-light text-base sm:text-lg">
              {isRtl
                ? "برامج تعليمية شاملة ومسارات مهنية مصممة لضمان التفوق الأكاديمي والنجاح المؤسسي."
                : "Comprehensive educational programs and pathways designed for corporate success and academic advancement."}
            </p>
          </motion.div>

          {/* Services Grid with card images — IH Mexico / LDA Team Lingue style */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-start"
          >
            {services.map((srv, i) => {
              const cardType = i % 4;
              let bgClass = "";
              let titleClass = "";
              let descClass = "";
              let linkClass = "";
              let arrowBg = "";
              let arrowColor = "";
              let iconBg = "";

              if (cardType === 0) {
                // White
                bgClass = "bg-white border border-slate-200 text-slate-800 hover:border-blue-500/30";
                titleClass = "text-slate-800 group-hover:text-[#002F6C]";
                descClass = "text-slate-500";
                linkClass = "text-[#002f6c] hover:text-[#cf1430]";
                arrowBg = "bg-[#002f6c]/10";
                arrowColor = "text-[#002f6c]";
                iconBg = "#002F6C"; // Navy
              } else if (cardType === 1) {
                // Green
                bgClass = "bg-[#00d084] text-white border-transparent";
                titleClass = "text-white group-hover:text-white/90";
                descClass = "text-white/90";
                linkClass = "text-white hover:text-white/80";
                arrowBg = "bg-white/20";
                arrowColor = "text-white";
                iconBg = "#00d084";
              } else if (cardType === 2) {
                // Yellow
                bgClass = "bg-[#fcb900] text-white border-transparent";
                titleClass = "text-white group-hover:text-white/90";
                descClass = "text-white/90";
                linkClass = "text-white hover:text-white/80";
                arrowBg = "bg-white/20";
                arrowColor = "text-white";
                iconBg = "#fcb900";
              } else {
                // Red
                bgClass = "bg-[#cf1430] text-white border-transparent";
                titleClass = "text-white group-hover:text-white/90";
                descClass = "text-white/90";
                linkClass = "text-white hover:text-white/80";
                arrowBg = "bg-white/20";
                arrowColor = "text-white";
                iconBg = "#cf1430";
              }

              return (
                <motion.div
                  key={i}
                  variants={fadeInScale}
                  className={`group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer ${bgClass}`}
                >
                  {/* Card image header */}
                  <Link href={srv.link}>
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={srv.image}
                        alt={srv.title.en}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                      {/* Icon badge on image */}
                      <div
                        className="absolute bottom-4 left-4 w-11 h-11 rounded-2xl flex items-center justify-center text-white shadow-lg z-10"
                        style={{ backgroundColor: iconBg }}
                      >
                        {srv.icon}
                      </div>
                    </div>

                    {/* Card text body */}
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className={`font-extrabold text-lg sm:text-xl transition-colors duration-300 tracking-tight leading-snug flex-1 pr-3 ${titleClass}`}>
                          {srv.title[lang]}
                        </h3>
                        <div
                          className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"
                          style={{ backgroundColor: arrowBg, color: arrowColor }}
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                      <p className={`text-sm font-light leading-relaxed mb-5 ${descClass}`}>{srv.desc[lang]}</p>
                      <span className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${linkClass}`}>
                        {isRtl ? "المزيد من التفاصيل ←" : "Explore Program →"}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          5. MISSION STATEMENT BANNER
      ───────────────────────────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden bg-[#002F6C] text-center text-white">
        <Image src="/values_mission.png" alt="Learning growth" fill className="object-cover object-center opacity-15" />
        <div className="absolute inset-0 bg-[#002F6C]/85 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#cf1430] text-white mb-4">
              ★ {isRtl ? "دعم النمو والتقدم من خلال التعليم" : "SUPPORTING GROWTH THROUGH EDUCATION"}
            </span>
            <p className="text-2xl sm:text-4xl font-extrabold font-['Montserrat',_sans-serif] leading-tight text-white mb-6">
              {isRtl
                ? "التعليم هو أحد أقوى الاستثمارات التي يمكن للأفراد والمؤسسات القيام بها لتأمين المستقبل."
                : "Education is one of the most powerful investments individuals and organizations can make."}
            </p>
            <p className="text-base sm:text-xl font-light text-slate-300 leading-relaxed">
              {isRtl
                ? "تتمثل مهمتنا في دعم المتعلمين، والمعلمين، والمهنيين، والمؤسسات عبر تقديم تجارب تعليمية عملية تصنع الثقة، وتخلق الفرص، وتدعم النمو والتعلم مدى الحياة."
                : "Our mission is to support learners, educators, professionals, and organizations through practical learning experiences that create confidence, opportunity, and lifelong growth."}
            </p>


          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          6. CORPORATE EXCELLENCE — Vivid animated redesign
      ───────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-slate-50 border-t border-b border-slate-200">
        {/* Animated gradient background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#cf1430]/5 blur-[120px] animate-pulse" />
          <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#002F6C]/10 blur-[120px] animate-pulse" style={{ animationDelay: "1.5s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#f59e0b]/5 blur-[100px] animate-pulse" style={{ animationDelay: "0.8s" }} />
        </div>

        {/* Real corporate training backdrop */}
        <Image
          src="/beta_assets/corporate_training.png"
          alt="Corporate training"
          fill
          className="object-cover object-center opacity-[0.06] mix-blend-multiply pointer-events-none"
        />

        {/* Top accent bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#cf1430] via-[#f59e0b] to-[#002F6C]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-24">

          {/* Section header — full width animated */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] border border-[#cf1430]/60 text-[#cf1430] bg-[#cf1430]/10 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#cf1430] animate-ping" />
              {isRtl ? "تميز تدريب الشركات" : "CORPORATE EXCELLENCE"}
            </motion.span>

            {/* Big animated title */}
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none tracking-tight font-['Montserrat',_sans-serif]"
              >
                <span className="text-slate-800">
                  {isRtl ? "حلول تدريب " : "Corporate "}
                </span>
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#cf1430] via-[#f59e0b] to-[#cf1430] bg-[length:200%] animate-[gradientShift_3s_ease_infinite]">
                    {isRtl ? "مخصصة" : "Training"}
                  </span>
                </span>
                <br />
                <span className="text-slate-700">
                  {isRtl ? "للشركات والمؤسسات" : "Excellence"}
                </span>
              </motion.h2>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="mt-6 text-slate-600 text-lg sm:text-xl font-light max-w-3xl mx-auto leading-relaxed"
            >
              {isRtl
                ? "حلول تدريب مخصصة بالكامل تهدف لدعم تطوير مهارات القوى العاملة وتحقيق التميز المؤسسي"
                : "Customized workforce training solutions from needs analysis to program delivery — helping organizations achieve measurable, lasting results"}
            </motion.p>
          </motion.div>

          {/* Corporate Services — Vivid colorful cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {[
              { label: { en: "Business English", ar: "الإنجليزية للأعمال" }, color: "#cf1430", glow: "rgba(207,20,48,0.12)", icon: <Briefcase className="w-7 h-7" />, bg: "from-[#cf1430]/10 to-[#cf1430]/5" },
              { label: { en: "Technical English", ar: "الإنجليزية الفنية والتقنية" }, color: "#f59e0b", glow: "rgba(245,158,11,0.12)", icon: <ShieldCheck className="w-7 h-7" />, bg: "from-[#f59e0b]/10 to-[#f59e0b]/5" },
              { label: { en: "Executive Coaching", ar: "التدريب والتوجيه التنفيذي" }, color: "#16a34a", glow: "rgba(22,163,74,0.12)", icon: <Star className="w-7 h-7" />, bg: "from-[#16a34a]/10 to-[#16a34a]/5" },
              { label: { en: "Workplace Communication", ar: "التواصل في بيئة العمل" }, color: "#cf1430", glow: "rgba(207,20,48,0.12)", icon: <Users className="w-7 h-7" />, bg: "from-[#cf1430]/10 to-[#cf1430]/5" },
              { label: { en: "Placement Testing", ar: "اختبارات تحديد المستوى" }, color: "#f59e0b", glow: "rgba(245,158,11,0.12)", icon: <GraduationCap className="w-7 h-7" />, bg: "from-[#f59e0b]/10 to-[#f59e0b]/5" },
              { label: { en: "Customized Training Solutions", ar: "حلول تدريبية مخصصة" }, color: "#16a34a", glow: "rgba(22,163,74,0.12)", icon: <Sparkles className="w-7 h-7" />, bg: "from-[#16a34a]/10 to-[#16a34a]/5" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.95 },
                  visible: {
                    opacity: 1, y: 0, scale: 1,
                    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }
                  }
                }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative rounded-2xl p-6 border text-start cursor-default overflow-hidden transition-all duration-300"
                style={{
                  borderColor: `${item.color}35`,
                  background: "#ffffff",
                  boxShadow: "0 4px 20px rgba(15, 23, 42, 0.04)",
                }}
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{ boxShadow: `inset 0 0 40px ${item.glow}` }}
                />
                {/* Top glow line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl" style={{ backgroundColor: item.color }} />

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 text-white"
                  style={{ backgroundColor: `${item.color}15`, border: `1px solid ${item.color}25` }}
                >
                  <span style={{ color: item.color }}>{item.icon}</span>
                </div>

                {/* Label */}
                <h3 className="font-extrabold text-slate-800 text-lg leading-snug tracking-tight">
                  {item.label[lang]}
                </h3>

                {/* Bottom arrow */}
                <div
                  className="mt-4 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: item.color }}
                >
                  {isRtl ? "معرفة المزيد ←" : "Learn More →"}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4 border-t border-slate-200"
          >
            <p className="text-slate-500 text-sm font-semibold text-center sm:text-start">
              {isRtl
                ? "هل تبحث عن حل تدريبي مخصص لمؤسستك؟"
                : "Looking for a custom training solution for your organization?"}
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-black text-sm text-white transition-all duration-300 hover:scale-[1.05] hover:shadow-2xl shrink-0"
              style={{
                background: "linear-gradient(135deg, #cf1430, #a50f26)",
                boxShadow: "0 8px 32px rgba(207,20,48,0.25)"
              }}
            >
              {isRtl ? "طلب استشارة للشركات" : "Request a Corporate Consult"}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>

        {/* Bottom accent bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#002F6C] via-[#cf1430] to-[#f59e0b]" />
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          7. FLEXIBLE LEARNING OPTIONS (Full Width, 3-Column Grid)
      ───────────────────────────────────────────────────────────────── */}
      <section className="pt-14 pb-32 bg-white relative overflow-hidden">
        {/* Decorative background blurs */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#002F6C]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#cf1430]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="space-y-3"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#002F6C]">
                {isRtl ? "خيارات تعليمية مرنة" : "FLEXIBLE FORMATS"}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#002F6C] font-['Montserrat',_sans-serif] tracking-tight">
                {isRtl ? "اختر خيار التعلم المناسب لك" : "Flexible Learning Options"}
              </h2>
              <p className="text-slate-500 font-light text-base max-w-2xl mx-auto leading-relaxed">
                {isRtl
                  ? "اختر التجربة التعليمية التي تتناسب تماماً مع جدولك، وأهدافك، وطريقتك المفضلة للدراسة:"
                  : "Choose the learning experience that best fits your goals, schedule, and preferences:"}
              </p>
            </motion.div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {learningOptions.map((lo, i) => {
              const cardType = i % 3;
              let bgClass = "";
              let titleClass = "";
              let descClass = "";
              let linkClass = "";
              let iconBadgeClass = "";

              if (cardType === 0) {
                // White
                bgClass = "bg-white border border-slate-200 text-slate-800 hover:border-blue-500/30";
                titleClass = "text-[#002F6C] group-hover:text-[#cf1430]";
                descClass = "text-slate-500";
                linkClass = "text-[#002f6c] hover:text-[#cf1430]";
                iconBadgeClass = "bg-white/95 text-slate-800 border-slate-200";
              } else if (cardType === 1) {
                // Green
                bgClass = "bg-[#00d084] text-white border-transparent";
                titleClass = "text-white group-hover:text-white/90";
                descClass = "text-white/90";
                linkClass = "text-white hover:text-white/80";
                iconBadgeClass = "bg-white/25 text-white border-white/10";
              } else {
                // Yellow
                bgClass = "bg-[#fcb900] text-white border-transparent";
                titleClass = "text-white group-hover:text-white/90";
                descClass = "text-white/90";
                linkClass = "text-white hover:text-white/80";
                iconBadgeClass = "bg-white/25 text-white border-white/10";
              }

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className={`group flex flex-col h-full rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 ${bgClass}`}
                >
                  {/* Image Section */}
                  <div className="relative h-56 w-full overflow-hidden shrink-0">
                    <Image
                      src={lo.image}
                      alt={lo[lang]}
                      fill
                      sizes="(max-w-768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Glassmorphic Icon Badge */}
                    <div className={`absolute top-4 right-4 rtl:left-4 rtl:right-auto w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md shadow-sm border ${iconBadgeClass}`}>
                      {getIcon(lo.icon, "w-5 h-5")}
                    </div>
                    {/* Dynamic Color Strip for White Card, otherwise transparent */}
                    {cardType === 0 && (
                      <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: lo.color }} />
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex flex-col flex-grow text-start">
                    <h3 className={`text-lg sm:text-xl font-extrabold font-['Montserrat',_sans-serif] mb-2 transition-colors duration-300 ${titleClass}`}>
                      {lo[lang]}
                    </h3>
                    <p className={`font-light text-sm leading-relaxed mb-6 flex-grow ${descClass}`}>
                      {lang === "ar" ? lo.descAr : lo.descEn}
                    </p>
                    
                    {/* Action Link */}
                    <div className={`flex items-center gap-2 text-sm font-bold mt-auto ${linkClass}`}>
                      <span>{isRtl ? "اكتشف البرنامج" : "Explore Program"}</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          8. GLOBAL ACCREDITATIONS & EXAMS (Full Width, 3-Column Grid)
      ───────────────────────────────────────────────────────────────── */}
      <section className="pt-14 pb-32 bg-slate-50/70 border-y border-slate-100 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#f59e0b]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-[#6d28d9]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="space-y-3"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#cf1430]">
                {isRtl ? "الاختبارات والشهادات الدولية" : "GLOBAL ACCREDITATIONS"}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#002F6C] font-['Montserrat',_sans-serif] tracking-tight">
                {isRtl ? "الاختبارات والشهادات الدولية" : "International Examinations & Certification"}
              </h2>
              <p className="text-slate-500 font-light text-base max-w-2xl mx-auto leading-relaxed">
                {isRtl
                  ? "استعد لاجتياز المؤهلات المعتمدة عالمياً التي تدعم قبولك الأكاديمي، وتطورك المهني، وهجرتك الدولية:"
                  : "Prepare for internationally recognized qualifications that support academic advancement, career development, and global migration:"}
              </p>
            </motion.div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {examOptions.map((eo, i) => {
              const cardType = i % 3;
              let bgClass = "";
              let titleClass = "";
              let descClass = "";
              let linkClass = "";
              let iconBadgeClass = "";

              if (cardType === 0) {
                // White
                bgClass = "bg-white border border-slate-200 text-slate-800 hover:border-blue-500/30";
                titleClass = "text-[#002F6C] group-hover:text-[#cf1430]";
                descClass = "text-slate-500";
                linkClass = "text-[#002f6c] hover:text-[#cf1430]";
                iconBadgeClass = "bg-white/95 text-slate-800 border-slate-200";
              } else if (cardType === 1) {
                // Green
                bgClass = "bg-[#00d084] text-white border-transparent";
                titleClass = "text-white group-hover:text-white/90";
                descClass = "text-white/90";
                linkClass = "text-white hover:text-white/80";
                iconBadgeClass = "bg-white/25 text-white border-white/10";
              } else {
                // Yellow
                bgClass = "bg-[#fcb900] text-white border-transparent";
                titleClass = "text-white group-hover:text-white/90";
                descClass = "text-white/90";
                linkClass = "text-white hover:text-white/80";
                iconBadgeClass = "bg-white/25 text-white border-white/10";
              }

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className={`group flex flex-col h-full rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 ${bgClass}`}
                >
                  {/* Image Section */}
                  <div className="relative h-56 w-full overflow-hidden shrink-0">
                    <Image
                      src={eo.image}
                      alt={eo[lang]}
                      fill
                      sizes="(max-w-768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Glassmorphic Icon Badge */}
                    <div className={`absolute top-4 right-4 rtl:left-4 rtl:right-auto w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md shadow-sm border ${iconBadgeClass}`}>
                      {getIcon(eo.icon, "w-5 h-5")}
                    </div>
                    {/* Dynamic Color Strip for White Card */}
                    {cardType === 0 && (
                      <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: eo.color }} />
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex flex-col flex-grow text-start">
                    <h3 className={`text-lg sm:text-xl font-extrabold font-['Montserrat',_sans-serif] mb-2 transition-colors duration-300 ${titleClass}`}>
                      {eo[lang]}
                    </h3>
                    <p className={`font-light text-sm leading-relaxed mb-6 flex-grow ${descClass}`}>
                      {lang === "ar" ? eo.descAr : eo.descEn}
                    </p>
                    
                    {/* Action Link */}
                    <div className={`flex items-center gap-2 text-sm font-bold mt-auto ${linkClass}`}>
                      <span>{isRtl ? "تفاصيل الاختبار" : "Exam Details"}</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          8. YOUR LEARNING JOURNEY (TIMELINE)
      ───────────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#f8f9fc] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="max-w-3xl mx-auto space-y-4 mb-16"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#002F6C]">
              {isRtl ? "مسار التقدم والأداء" : "METHODOLOGY & PROGRESSION"}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#002F6C] font-['Montserrat',_sans-serif] tracking-tight">
              {isRtl ? "رحلتك التعليمية مع إي إتش السعودية" : "Your Learning Journey"}
            </h2>
            <p className="text-slate-500 font-light text-base">
              {isRtl
                ? "خطوات منظمة ومنهجية تضمن قياس التطور وتحقيق الأهداف المنشودة:"
                : "Structured educational path to ensure development monitoring and objective attainment:"}
            </p>
          </motion.div>

          {/* Timeline Grid */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative"
          >
            {learningJourney.map((step, i) => (
              <motion.div
                key={i}
                variants={fadeInScale}
                className={`border p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 group text-start relative overflow-hidden ${step.bgClass}`}
              >
                {/* Sliding Accent Border (Changes side from top to bottom on hover) */}
                <div
                  className="absolute left-0 w-full h-[4px] transition-all duration-300 ease-in-out top-0 group-hover:top-full group-hover:-translate-y-full"
                  style={{ backgroundColor: step.barColor }}
                />

                <div
                  className={`text-3xl font-black mb-4 font-['Montserrat',_sans-serif] transition-all duration-300 group-hover:scale-110 origin-left rtl:origin-right ${step.numColor}`}
                >
                  {step.step}
                </div>
                <h4 className="font-extrabold text-sm sm:text-base tracking-tight leading-snug relative z-10">
                  {step.title[lang]}
                </h4>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Pinned at the bottom border of the section, rising upwards */}
        <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
          <ThemeAccent />
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          9. LOCATIONS SECTION
      ───────────────────────────────────────────────────────────────── */}
      <section className="pt-14 pb-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="max-w-3xl mx-auto space-y-4 mb-10"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#002F6C]">
              {isRtl ? "فروعنا ومقراتنا" : "OUR PRESENCE"}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#002F6C] font-['Montserrat',_sans-serif] tracking-tight">
              {isRtl ? "فروعنا ومواقع الخدمة" : "Our Locations"}
            </h2>
            <p className="text-slate-500 font-light text-base sm:text-lg">
              {isRtl
                ? "نقدم خدماتنا للدارسين، والمهنيين، والشركات، والمؤسسات الأكاديمية والتعليمية في مختلف مناطق المملكة:"
                : "Serving learners, professionals, organizations, and educational institutions across Saudi Arabia:"}
            </p>
          </motion.div>

          {/* Locations Grid */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { name: { en: "Riyadh", ar: "الرياض" }, desc: { en: "Central Province & Capital Office", ar: "مقر المنطقة الوسطى والعاصمة" }, bg: "/riyadh_bg.png", path: "/contact", color: "#002F6C" },
              { name: { en: "Jeddah", ar: "جدة" }, desc: { en: "Western Province Office", ar: "مكتب المنطقة الغربية" }, bg: "/jeddah_bg.png", path: "/contact", color: "#cf1430" },
              { name: { en: "Dammam / Dhahran", ar: "الدمام / الظهران" }, desc: { en: "Eastern Province Office", ar: "مكتب المنطقة الشرقية" }, bg: "/dammam_bg.png", path: "/contact", color: "#002F6C" },
            ].map((loc, i) => {
              const cardType = i % 3;
              let borderClass = "";
              let footerBg = "";
              let textClass = "";
              let btnClass = "";
              let iconBgClass = "";
              let iconColorClass = "";

              if (cardType === 0) {
                borderClass = "border-slate-100 hover:border-primary/30";
                footerBg = "bg-white";
                textClass = "text-slate-500";
                btnClass = "bg-[#002f6c] text-white hover:bg-[#cf1430]";
                iconBgClass = "bg-[#002f6c]/10";
                iconColorClass = "text-[#002f6c]";
              } else if (cardType === 1) {
                borderClass = "border-transparent";
                footerBg = "bg-[#00d084]";
                textClass = "text-white/90";
                btnClass = "bg-white text-[#00d084] hover:bg-white/90";
                iconBgClass = "bg-white/20";
                iconColorClass = "text-white";
              } else {
                borderClass = "border-transparent";
                footerBg = "bg-[#fcb900]";
                textClass = "text-white/90";
                btnClass = "bg-white text-[#fcb900] hover:bg-white/90";
                iconBgClass = "bg-white/20";
                iconColorClass = "text-white";
              }

              return (
                <motion.div
                  key={i}
                  variants={fadeInScale}
                  className={`group relative rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border ${borderClass}`}
                >
                  {/* City background */}
                  <div className="relative h-60 overflow-hidden">
                    <Image src={loc.bg} alt={loc.name.en} fill className="object-cover group-hover:scale-110 transition-transform duration-700 brightness-75" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-extrabold text-2xl text-white font-['Montserrat',_sans-serif] drop-shadow-md">{loc.name[lang]}</h3>
                      <p className="text-white/80 text-sm font-light">{loc.desc[lang]}</p>
                    </div>
                    {/* Color accent top border for white card */}
                    {cardType === 0 && (
                      <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: loc.color }} />
                    )}
                  </div>

                  <div className={`p-6 flex justify-between items-center transition-colors duration-300 ${footerBg}`}>
                    <div className="flex items-center gap-2">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${iconBgClass} ${iconColorClass}`}>
                        <MapPin className="w-4 h-4" />
                      </div>
                      <span className={`text-xs font-bold uppercase tracking-wider ${textClass}`}>{isRtl ? "تواصل معنا" : "Contact Branch"}</span>
                    </div>
                    <Link href={loc.path}
                      className={`inline-flex items-center gap-1 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 hover:scale-[1.05] ${btnClass}`}
                    >
                      {isRtl ? "تواصل" : "Visit"} <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Pinned at the bottom border of the section, rising upwards */}
        <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
          <ThemeAccent />
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          10. 70 YEARS CELEBRATION BAND (Redesigned with Authentic Stamp & Badge)
      ───────────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-r from-[#001a3f] via-[#002F6C] to-[#001a3f] relative overflow-hidden border-y-2 border-[#f59e0b]/30">
        {/* Subtle light effect */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#cf1430]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col lg:flex-row items-center justify-between gap-10"
          >
            {/* Badge + text */}
            <motion.div variants={slideLeft} className="flex flex-col sm:flex-row items-center gap-8 text-center sm:text-start">
              {/* Logo Seals Wrapper */}
              <div className="flex items-center bg-white p-4 rounded-2xl shadow-2xl shrink-0 border border-slate-100/10">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24">
                  <Image src="/ih_70years_v2.png" alt="Celebrating 70 Years of IH World" fill className="object-contain" />
                </div>
              </div>

              <div className="space-y-2">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white bg-[#cf1430] shadow-sm">
                  {isRtl ? "تأسست عام ١٩٥٣" : "ESTABLISHED IN 1953"}
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-['Montserrat',_sans-serif] leading-tight">
                  {isRtl ? "٧٠ عاماً من التميز التعليمي العالمي" : "70 Years of Global Educational Excellence"}
                </h3>
                <p className="text-blue-100 font-light text-sm sm:text-base max-w-xl">
                  {isRtl 
                    ? "شراكة دولية ممتدة تقدم أرقى مستويات جودة تدريس اللغة الإنجليزية في المملكة والعالم." 
                    : "A historic partnership delivering the highest standards of English language training across the Kingdom and worldwide."}
                </p>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeInScale} className="shrink-0">
              <Link href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-sm bg-[#cf1430] text-white hover:bg-[#a50f26] hover:scale-[1.03] active:scale-95 transition-all duration-300 shadow-lg shadow-[#cf1430]/30 group">
                <span>{isRtl ? "تواصل معنا اليوم" : "Contact Us Today"}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          11. BOTTOM GET STARTED CTA BANNER
      ───────────────────────────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden bg-[#001a3f] text-white">
        <Image src="/riyadh_bg.png" alt="Get started banner" fill className="object-cover object-center opacity-10" />
        <div className="absolute inset-0 bg-[#001a3f]/90 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#cf1430] bg-[#cf1430]/10 mb-4">
              {isRtl ? "ابدأ رحلتك اليوم" : "START TODAY"}
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-['Montserrat',_sans-serif] leading-tight mb-6">
              {isRtl ? "ابدأ رحلتك التعليمية اليوم" : "Start Your Learning Journey Today"}
            </h2>
            <p className="text-base sm:text-lg font-light text-slate-300 leading-relaxed max-w-3xl mx-auto">
              {isRtl
                ? "سواء كنت تسعى لتحسين لغتك الإنجليزية، أو تعلم لغة جديدة، أو تطوير القوى العاملة لمؤسستك، فإن إنترناشونال هاوس السعودية مستعدة لمساندتك."
                : "Whether you are looking to improve your English, learn a new language, develop your workforce, prepare for international qualifications, or explore global learning opportunities, IH Saudi Arabia is ready to support your success."}
            </p>
          </motion.div>

          {/* Quick Actions */}
          <div className="pt-6">
            <h4 className="font-extrabold text-[#cf1430] text-xs uppercase tracking-wider mb-6">
              {isRtl ? "روابط وإجراءات سريعة" : "Quick Actions"}
            </h4>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/courses/placement-test" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs bg-[#cf1430] text-white hover:bg-[#a50f26] hover:scale-[1.02] transition-all duration-300">
                {isRtl ? "احجز اختبار تحديد المستوى" : "Book a Placement Test"}
              </Link>
              <Link href="/courses" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:scale-[1.02] transition-all duration-300">
                {isRtl ? "استكشف الدورات" : "Explore Courses"}
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:scale-[1.02] transition-all duration-300">
                {isRtl ? "طلب مقترح للشركات" : "Request a Corporate Proposal"}
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:scale-[1.02] transition-all duration-300">
                <FileDown className="w-3.5 h-3.5" />
                {isRtl ? "طلب بروشور" : "Request Brochure"}
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:scale-[1.02] transition-all duration-300">
                <Mail className="w-3.5 h-3.5" />
                {isRtl ? "تواصل معنا" : "Contact Us"}
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
