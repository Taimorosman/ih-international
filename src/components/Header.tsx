"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu, X, ChevronDown, Globe, Phone, Mail,
  BookOpen, Briefcase, Wrench, Award, Users, Laptop,
  ClipboardCheck, ArrowRight, Eye, Target, Heart, Rocket,
  Star, Shield, GraduationCap, TrendingUp, FileText,
  Layers, MapPin, Compass, Sparkles, Lightbulb, HelpCircle
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import type { LucideIcon } from "lucide-react";

/* ═══════════════════════════════════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════════════════════════════════ */

interface SubItem {
  label: string;
  href: string;
  icon: LucideIcon;
  desc?: string;
  badge?: string;
}

interface SubGroup {
  heading: string;
  items: SubItem[];
}

interface PromoBanner {
  badge: string;
  title: string;
  desc: string;
  btnText: string;
  href: string;
  bgGradient: string;
}

interface NavItem {
  label: string;
  href: string;
  desc?: string;
  align?: "left" | "center" | "right";
  groups?: SubGroup[];
  promo?: PromoBanner;
  bottomBar?: {
    title: string;
    desc: string;
    btnText: string;
    href: string;
  };
}

/* ═══════════════════════════════════════════════════════════════════════
   HEADER COMPONENT (Full-Width Responsive Architecture)
   ═══════════════════════════════════════════════════════════════════════ */

export default function Header() {
  const { t, toggleLang, lang, isRTL } = useLanguage();
  const pathname = usePathname();

  /* ─── State ─── */
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* ─── Scroll handler ─── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 25);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ─── Close on navigation ─── */
  useEffect(() => {
    setMobileOpen(false);
    setActiveMenu(null);
    setMobileExpanded(null);
  }, [pathname]);

  /* ─── Lock body scroll when mobile menu open ─── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  /* ─── Mega-menu hover handlers with delay ─── */
  const openMenu = useCallback((label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(label);
  }, []);

  const closeMenu = useCallback(() => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 150);
  }, []);

  /* ─── Active page check ─── */
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  /* ═══════════════════════════════════════════════════════════════════════
     ALL 12 MAIN SECTIONS & SUBSTRUCTURES
     ═══════════════════════════════════════════════════════════════════════ */

  const mainNavItems: NavItem[] = [
    // 1. WHO WE ARE
    {
      label: t("nav.who_we_are"),
      href: "/who-we-are",
      desc: t("nav.who_we_are.desc"),
      align: "left",
      groups: [
        {
          heading: lang === "ar" ? "رؤيتنا وتاريخنا" : "Our Heritage & Network",
          items: [
            { label: t("nav.who_we_are.learning_exp"), href: "/who-we-are#learning-experiences", icon: Sparkles, desc: lang === "ar" ? "التميز في التعليم بالمملكة" : "Excellence across the Kingdom" },
            { label: t("nav.who_we_are.story"), href: "/who-we-are#our-story", icon: BookOpen, desc: lang === "ar" ? "تاريخنا وتأسيس المعهد" : "Our story & milestones since 1995" },
            { label: t("nav.who_we_are.network"), href: "/who-we-are#global-network", icon: Globe, desc: lang === "ar" ? "شبكة IH العالمية في 50+ دولة" : "Part of IH World in 50+ countries" },
            { label: t("nav.who_we_are.future"), href: "/who-we-are#looking-ahead", icon: Rocket, desc: lang === "ar" ? "رؤية المستقبل والتطوير" : "Future-focused learning solutions" },
          ],
        },
        {
          heading: lang === "ar" ? "القيم والرسالة" : "Mission & Values",
          items: [
            { label: t("nav.who_we_are.vision"), href: "/who-we-are#our-vision", icon: Eye, desc: lang === "ar" ? "متوافق مع رؤية السعودية 2030" : "Aligned with Saudi Vision 2030" },
            { label: t("nav.who_we_are.mission"), href: "/who-we-are#our-mission", icon: Target, desc: lang === "ar" ? "تمكين الطلاب والمؤسسات" : "Empowering learners & organizations" },
            { label: t("nav.who_we_are.values"), href: "/who-we-are#our-values", icon: Heart, desc: lang === "ar" ? "الجودة، النزاهة، والابتكار" : "Quality, integrity & innovation" },
          ],
        }
      ],
      promo: {
        badge: lang === "ar" ? "الذكرى السبعون" : "70 YEARS",
        title: lang === "ar" ? "شبكة تعليمية عالمية" : "Global Network",
        desc: lang === "ar" ? "نحتفل بـ ٧٠ عاماً من الريادة التعليمية واللغوية عبر العالم." : "Celebrating 70 years of world-class educational leadership.",
        btnText: lang === "ar" ? "اقرأ قصتنا" : "Learn More",
        href: "/who-we-are#our-story",
        bgGradient: "from-blue-900 via-indigo-950 to-slate-900"
      }
    },

    // 2. COURSES
    {
      label: t("nav.courses"),
      href: "/courses",
      desc: t("nav.courses.desc"),
      align: "left",
      groups: [
        {
          heading: lang === "ar" ? "برامج اللغة الإنجليزية" : "Core English Programs",
          items: [
            { label: t("nav.courses.general"), href: "/courses#general-english", icon: BookOpen, desc: lang === "ar" ? "تأسيس الطلاقة والدقة اللغوية" : "Fluency, vocabulary & speaking" },
            { label: t("nav.courses.business"), href: "/courses#business-english", icon: Briefcase, desc: lang === "ar" ? "للتواصل المؤسسي والمهني" : "Meetings, negotiations & reports" },
            { label: t("nav.courses.technical"), href: "/courses#technical-professional", icon: Wrench, desc: lang === "ar" ? "للصناعات والمجالات المتخصصة" : "Engineering, aviation, healthcare" },
            { label: t("nav.courses.exam_prep"), href: "/courses#exam-preparation", icon: Award, desc: lang === "ar" ? "تحضير مكثف لـ IELTS وكامبريدج" : "IELTS & Cambridge exam prep" },
            { label: t("nav.courses.young_learners_sub"), href: "/courses#young-learners", icon: Users, desc: lang === "ar" ? "برامج الصغار واليافعين" : "Interactive kids & teens tracks" },
          ],
        },
        {
          heading: lang === "ar" ? "بيئات التعلم والتوجيه" : "Flexible Learning & Testing",
          items: [
            { label: t("nav.courses.online_hybrid"), href: "/courses#online-hybrid", icon: Laptop, desc: lang === "ar" ? "فصول افتراضية مرنة ومدمجة" : "Interactive virtual classrooms" },
            { label: t("nav.courses.private_tuition"), href: "/courses#private-tuition", icon: Star, desc: lang === "ar" ? "تدريب فردي وتنفيذي مخصص" : "1-on-1 personalized coaching" },
            { label: t("nav.courses.placement_testing"), href: "/courses#placement-testing", icon: ClipboardCheck, desc: lang === "ar" ? "تحديد المستوى بدقة وإرشاد أكاديمي" : "Free CEFR placement assessment" },
            { label: t("nav.courses.start_learning"), href: "/registration-form", icon: Rocket, desc: lang === "ar" ? "سجل الآن وانضم إلى IH السعودية" : "Register today & start learning", badge: "REGISTER" },
          ],
        }
      ],
      bottomBar: {
        title: lang === "ar" ? "استكشف جميع المسارات والدورات التعليمية" : "Explore All Courses & Learning Pathways",
        desc: lang === "ar" ? "انتقل إلى كتالوج الدورات الشامل للاطلاع على كافة البرامج والمسارات" : "View the full catalog of English language programs and cohort schedules",
        btnText: lang === "ar" ? "استكشف دوراتنا" : "Explore our courses",
        href: "/courses"
      }
    },

    // 3. LANGUAGES & CULTURAL PROGRAMS
    {
      label: t("nav.languages_programs"),
      href: "/languages-programs",
      desc: t("nav.languages.desc"),
      align: "left",
      groups: [
        {
          heading: lang === "ar" ? "الدراسات العربية واللغات العالمية" : "World Languages",
          items: [
            { label: t("nav.languages.arabic"), href: "/languages-programs#arabic", icon: BookOpen, desc: lang === "ar" ? "العربية لغير الناطقين بها وثقافتها" : "Arabic for non-native speakers" },
            { label: t("nav.languages.french"), href: "/languages-programs#french", icon: Globe, desc: lang === "ar" ? "برامج اللغة الفرنسية الشاملة" : "Complete French language tracks" },
            { label: t("nav.languages.spanish"), href: "/languages-programs#spanish", icon: Globe, desc: lang === "ar" ? "الإسبانية للمبتدئين والمتقدمين" : "Spanish from A1 to professional" },
          ],
        },
        {
          heading: lang === "ar" ? "اللغات العالمية والتجارب الثقافية" : "Cultural Learning & Global Languages",
          items: [
            { label: t("nav.languages.chinese"), href: "/languages-programs#chinese", icon: Globe, desc: lang === "ar" ? "برامج المندرين الصينية للأعمال" : "Mandarin Chinese for commerce" },
            { label: t("nav.languages.additional"), href: "/languages-programs#additional", icon: Layers, desc: lang === "ar" ? "الألمانية، الإيطالية، اليابانية، التركية" : "German, Italian, Japanese, Turkish" },
            { label: t("nav.languages.cultural"), href: "/languages-programs#cultural", icon: Sparkles, desc: lang === "ar" ? "تجارب السفر والتبادل الثقافي" : "Immersive cultural learning" },
          ],
        }
      ],
      promo: {
        badge: lang === "ar" ? "لغات العالم" : "WORLD LANGUAGES",
        title: lang === "ar" ? "تواصل بلا حدود" : "Global Fluency",
        desc: lang === "ar" ? "اكتشف برامج اللغات العالمية الحية مع مدربين معتمدين ناطقين باللغة الأصلية." : "Learn foreign languages with certified native-speaking instructors.",
        btnText: lang === "ar" ? "استكشف اللغات" : "Explore Languages",
        href: "/languages-programs",
        bgGradient: "from-amber-900 via-orange-950 to-slate-900"
      }
    },

    // 4. CORPORATE TRAINING
    {
      label: t("nav.corporate_training"),
      href: "/corporate-training",
      desc: t("nav.corporate.desc"),
      align: "center",
      groups: [
        {
          heading: lang === "ar" ? "حلول وتدريب الشركات" : "Solutions & Assessment",
          items: [
            { label: t("nav.corporate.why"), href: "/corporate-training#why-ih", icon: Star, desc: lang === "ar" ? "معايير عالمية وخبرة عريقة" : "Trusted by leading Saudi enterprises" },
            { label: t("nav.corporate.solutions"), href: "/corporate-training#solutions", icon: Layers, desc: lang === "ar" ? "برامج مخصصة لقطاعك التجاري" : "Tailored business curriculum" },
            { label: t("nav.corporate.assessment"), href: "/corporate-training#assessment", icon: ClipboardCheck, desc: lang === "ar" ? "تدقيق وتحديد مستوى منسوبيكم" : "Pre-training TNA & CEFR audit" },
            { label: t("nav.corporate.process"), href: "/corporate-training#process", icon: TrendingUp, desc: lang === "ar" ? "منهجية العمل خطوة بخطوة" : "Our structured delivery workflow" },
          ],
        },
        {
          heading: lang === "ar" ? "التنفيذ وتطوير القوى العاملة" : "Delivery & Talent Development",
          items: [
            { label: t("nav.corporate.delivery"), href: "/corporate-training#delivery", icon: Laptop, desc: lang === "ar" ? "في مقرات الشركات أو مراكزنا" : "On-site, IH centers or virtual" },
            { label: t("nav.corporate.workforce"), href: "/corporate-training#workforce", icon: Users, desc: lang === "ar" ? "تمكين الكوادر الوطنية والتوطين" : "Empowering local Saudi talent" },
            { label: t("nav.corporate.proposal"), href: "/corporate-training#proposal", icon: FileText, desc: lang === "ar" ? "احصل على دراسة ومقترح مالي مخصص" : "Get a customized corporate proposal", badge: "PROPOSAL" },
          ],
        }
      ],
      promo: {
        badge: lang === "ar" ? "عرض مخصص" : "B2B SOLUTIONS",
        title: lang === "ar" ? "طلب تدريب الشركات" : "Corporate Proposal",
        desc: lang === "ar" ? "صمم برنامجاً لغوياً مخصصاً يلائم أهداف مؤسستك مع تقارير أداء دورية." : "Customized workforce language development aligned with your company goals.",
        btnText: lang === "ar" ? "طلب مقترح للشركات" : "Request Proposal",
        href: "/corporate-training#proposal",
        bgGradient: "from-[#002f6c] via-blue-950 to-[#001d4a]"
      }
    },

    // 5. EXAMINATIONS & CERTIFICATION
    {
      label: t("nav.examinations"),
      href: "/examinations",
      desc: t("nav.exams.desc"),
      align: "center",
      groups: [
        {
          heading: lang === "ar" ? "الشهادات والاعتمادات" : "Qualifications & Accreditations",
          items: [
            { label: t("nav.exams.why"), href: "/examinations#why-certification", icon: Shield, desc: lang === "ar" ? "اعتراف دولي ومحلي واسع" : "Globally recognized standards" },
            { label: t("nav.exams.english"), href: "/examinations#english-qualifications", icon: GraduationCap, desc: lang === "ar" ? "مؤهلات كامبريدج للغة الإنجليزية" : "Cambridge English A1 to C2" },
            { label: t("nav.exams.teacher"), href: "/examinations#teacher-qualifications", icon: Award, desc: lang === "ar" ? "شهادات المعلمين TKT وسيلتا" : "TKT & Cambridge teaching awards" },
          ],
        },
        {
          heading: lang === "ar" ? "التقييم المؤسسي والتحضير" : "Assessment & Preparation",
          items: [
            { label: t("nav.exams.corporate"), href: "/examinations#corporate-assessment", icon: Briefcase, desc: lang === "ar" ? "اختبارات التوظيف والترقية" : "Recruitment benchmarking audits" },
            { label: t("nav.exams.prep"), href: "/examinations#exam-preparation", icon: ClipboardCheck, desc: lang === "ar" ? "دورات إعداد لاختبارات IELTS" : "High-impact IELTS preparation" },
          ],
        }
      ],
      promo: {
        badge: lang === "ar" ? "مركز معتمد" : "CAMBRIDGE AUTHORIZED",
        title: lang === "ar" ? "شريك كامبريدج الرسمي" : "Official Exam Center",
        desc: lang === "ar" ? "مركز رسمي معتمد لإجراء وتحضير اختبارات كامبريدج في المملكة العربية السعودية." : "Authorized exam preparation and delivery center for Cambridge English.",
        btnText: lang === "ar" ? "استكشف الشهادات" : "Explore Exams",
        href: "/examinations",
        bgGradient: "from-teal-950 via-teal-900 to-emerald-950"
      }
    },

    // 6. TEACHER TRAINING
    {
      label: t("nav.teacher_training"),
      href: "/teacher-training",
      desc: t("nav.teacher.desc"),
      align: "center",
      groups: [
        {
          heading: lang === "ar" ? "تطوير المعلمين ومسارات CELTA" : "Teacher Pathways & CELTA",
          items: [
            { label: t("nav.teacher.why"), href: "/teacher-training#why-development", icon: Lightbulb, desc: lang === "ar" ? "أهمية الاستثمار في المعلم" : "Why teacher growth transforms learning" },
            { label: t("nav.teacher.professional"), href: "/teacher-training#professional-development", icon: TrendingUp, desc: lang === "ar" ? "ورش العمل والتأهيل المستمر" : "Practical pedagogical workshops" },
            { label: t("nav.teacher.celta"), href: "/teacher-training#celta-pathways", icon: Award, desc: lang === "ar" ? "شهادة CELTA كامبريدج مع استمارات التقديم" : "CELTA tracks with downloadable application forms", badge: "FORMS" },
          ],
        },
        {
          heading: lang === "ar" ? "المؤسسات والالتزام بالتميز" : "Institutional & Excellence",
          items: [
            { label: t("nav.teacher.institutional"), href: "/teacher-training#institutional", icon: GraduationCap, desc: lang === "ar" ? "تأهيل معلمي المدارس والجامعات" : "Custom institutional faculty training" },
            { label: t("nav.teacher.commitment"), href: "/teacher-training#commitment", icon: Star, desc: lang === "ar" ? "التزامنا الراسخ بالتميز الأكاديمي" : "Our pledge to educational quality" },
          ],
        }
      ],
      promo: {
        badge: lang === "ar" ? "سيلتا كامبريدج" : "CAMBRIDGE CELTA",
        title: lang === "ar" ? "انطلق في مسيرة التدريس الدولية" : "CELTA Teacher Qualification",
        desc: lang === "ar" ? "المؤهل الذهبي عالمياً لتدريس الإنجليزية. حمل استمارة التقديم وسجل في أقرب دفعة." : "The global gold standard in ELT. Download application forms and enroll.",
        btnText: lang === "ar" ? "استكشف CELTA" : "View CELTA Pathways",
        href: "/teacher-training#celta-pathways",
        bgGradient: "from-emerald-950 via-teal-900 to-slate-900"
      }
    },

    // 7. STUDY ABROAD
    {
      label: t("nav.study_abroad"),
      href: "/study-abroad",
      desc: t("nav.abroad.desc"),
      align: "right",
      groups: [
        {
          heading: lang === "ar" ? "برامج وشبكة الدراسة بالخارج" : "Global Network & Study Options",
          items: [
            { label: t("nav.abroad.why"), href: "/study-abroad#why-study-abroad", icon: Compass, desc: lang === "ar" ? "الانغماس الكامل وتسريع الطلاقة" : "Accelerated immersion & cultural fluency" },
            { label: t("nav.abroad.network"), href: "/study-abroad#global-network", icon: Globe, desc: lang === "ar" ? "140+ مدرسة في 45 دولة" : "140+ language schools across 45 countries" },
            { label: t("nav.abroad.opportunities"), href: "/study-abroad#opportunities", icon: Sparkles, desc: lang === "ar" ? "دورات عامة، أكاديمية، وتدريب صيفي" : "General, university prep & summer camps" },
          ],
        },
        {
          heading: lang === "ar" ? "الوجهات والدعم الشخصي" : "Destinations & Guidance",
          items: [
            { label: t("nav.abroad.destinations"), href: "/study-abroad#destinations", icon: MapPin, desc: lang === "ar" ? "بريطانيا، أمريكا، كندا، مالطا، أيرلندا" : "UK, USA, Canada, Ireland, Malta" },
            { label: t("nav.abroad.support"), href: "/study-abroad#support", icon: Users, desc: lang === "ar" ? "مساعدة في التأشيرات والسكن والقبول" : "Visa support, housing & enrollment" },
            { label: t("nav.abroad.more_than"), href: "/study-abroad#more-than-language", icon: Heart, desc: lang === "ar" ? "تجارب حياتية وبناء علاقات دولية" : "Life-changing international experiences" },
          ],
        }
      ],
      promo: {
        badge: lang === "ar" ? "دراسة دولية" : "STUDY ABROAD",
        title: lang === "ar" ? "سافر وتعلم مع IH" : "Explore the World",
        desc: lang === "ar" ? "ادرس الإنجليزية في عواصم العالم المرموقة مع شبكة الهاوس الدولي الموثوقة." : "Learn English abroad with IH schools worldwide. Tailored advisory from Saudi Arabia.",
        btnText: lang === "ar" ? "استكشف الوجهات" : "Explore Destinations",
        href: "/study-abroad",
        bgGradient: "from-sky-950 via-blue-900 to-indigo-950"
      }
    },

    // 8. CAREERS
    {
      label: t("nav.careers"),
      href: "/careers",
      desc: t("nav.careers.desc"),
      align: "right",
      groups: [
        {
          heading: lang === "ar" ? "العمل معنا والتطوير" : "Why Join & Growth",
          items: [
            { label: t("nav.careers.why"), href: "/careers#why-work", icon: Star, desc: lang === "ar" ? "بيئة عمل محفزة وشبكة عالمية" : "Supportive international culture" },
            { label: t("nav.careers.looking_for"), href: "/careers#who-looking-for", icon: Users, desc: lang === "ar" ? "معلمون وموظفون أكاديميون شغوفون" : "Native EFL tutors & professionals" },
          ],
        },
        {
          heading: lang === "ar" ? "المسار المهني والوظائف الحالية" : "Opportunities & Careers",
          items: [
            { label: t("nav.careers.development"), href: "/careers#professional-development", icon: TrendingUp, desc: lang === "ar" ? "تأهيل مستمر وحضور مؤتمرات" : "Ongoing mentorship & diplomas" },
            { label: t("nav.careers.opportunities"), href: "/careers#current-opportunities", icon: Briefcase, desc: lang === "ar" ? "وظائف الرياض، جدة، والدمام" : "Open vacancies across Saudi branches", badge: "HIRING" },
          ],
        }
      ],
      promo: {
        badge: lang === "ar" ? "انضم إلينا" : "WE ARE HIRING",
        title: lang === "ar" ? "مسيرتك المهنية تبدأ هنا" : "Join Our Faculty",
        desc: lang === "ar" ? "انضم إلى نخبة المعلمين والأكاديميين في فروعنا الثلاثة بالمملكة العربية السعودية." : "Teaching and corporate opportunities in Riyadh, Jeddah, and Eastern Province.",
        btnText: lang === "ar" ? "الوظائف المتاحة" : "View Vacancies",
        href: "/careers#current-opportunities",
        bgGradient: "from-purple-950 via-slate-900 to-indigo-950"
      }
    }
  ];

  /* ─── Helper for dropdown horizontal positioning ─── */
  const getDropdownPlacement = (align: "left" | "center" | "right" = "center") => {
    if (align === "left") {
      return {
        className: isRTL ? "right-0" : "left-0",
      };
    }
    if (align === "right") {
      return {
        className: isRTL ? "left-0" : "right-0",
      };
    }
    return {
      className: isRTL ? "right-1/2 translate-x-1/2" : "left-1/2 -translate-x-1/2",
    };
  };

  return (
    <>
      {/* ── Desktop background overlay when mega-menu open ── */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 bg-slate-950/20 backdrop-blur-[2px] z-40 hidden lg:block"
            onClick={() => setActiveMenu(null)}
          />
        )}
      </AnimatePresence>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-slate-100/50"
            : "bg-white border-b border-slate-100"
        }`}
      >
        {/* ═══ TOP UTILITY BAR (Desktop Full-Width) ═══ */}
        <div
          className={`hidden lg:block bg-gradient-to-r from-[#001a3f] to-[#002d6b] text-slate-300 text-xs transition-all duration-300 select-none ${
            scrolled ? "h-0 overflow-hidden opacity-0 py-0 border-b-0" : "h-9 opacity-100 py-1.5 border-b border-white/10"
          }`}
        >
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 h-full flex items-center justify-between">
            {/* Left side info: Hotline & Official Email */}
            <div className="flex items-center gap-6">
              <a href="tel:+966920000364" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={12} className="text-yellow-400 shrink-0" />
                <span className="font-bold text-white tracking-wide text-xs" dir="ltr">+966 920 000 364</span>
              </a>
              <div className="w-px h-3.5 bg-white/20" />
              <a href="mailto:info@ih-saudiarabia.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={12} className="text-cyan-400 shrink-0" />
                <span className="text-xs">info@ih-saudiarabia.com</span>
              </a>
            </div>

            {/* Right side quick message & fast links */}
            <div className="flex items-center gap-5 text-[11px]">
              <span className="text-slate-400 hidden xl:inline">
                {isRTL ? "الريادة العالمية في تعليم الإنجليزية منذ 2001" : "World-Class Language Education Across Saudi Arabia"}
              </span>
              <div className="w-px h-3.5 bg-white/20 hidden xl:inline" />
              <Link href="/news" className="hover:text-white transition-colors">
                {t("nav.news")}
              </Link>
              <Link href="/faqs" className="hover:text-white transition-colors">
                {t("nav.faqs")}
              </Link>
              <Link href="/contact" className="hover:text-white transition-colors font-bold text-yellow-300">
                {t("nav.contact")}
              </Link>
            </div>
          </div>
        </div>

        {/* ═══ MAIN NAVIGATION BAR (FULL WIDTH UTILIZED) ═══ */}
        <div className="w-full px-3 sm:px-5 lg:px-6 xl:px-8 2xl:px-10">
          <div className="flex items-center justify-between h-16 lg:h-[72px] gap-2 xl:gap-4">
            
            {/* Logo area (Anchored cleanly to the Left edge) */}
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3.5 shrink-0 group">
              <img
                src="/logo.png"
                alt="International House Saudi Arabia"
                className="h-8 sm:h-10 xl:h-11 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <div className="w-px h-6 bg-slate-200" />
              <img
                src="/ih_70years_v2.png"
                alt="Celebrating 70 Years"
                className="h-7 sm:h-8 xl:h-9 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation Links (Spans across the entire header width) */}
            <nav className="hidden lg:flex items-center h-full gap-1 xl:gap-1.5 2xl:gap-2 flex-1 justify-end">
              
              {/* 1. Home Direct Link */}
              <Link
                href="/"
                className={`py-1.5 px-2 xl:px-2.5 2xl:px-3 rounded-xl text-xs xl:text-[13px] font-bold transition-all duration-200 whitespace-nowrap ${
                  isActive("/") && pathname === "/"
                    ? "text-[#002f6c] bg-[#002f6c]/10 font-black"
                    : "text-slate-700 hover:text-[#002f6c] hover:bg-slate-50"
                }`}
              >
                {t("nav.home")}
              </Link>

              {/* 2 to 9. The 8 Mega-Menu Dropdown Items */}
              {mainNavItems.map((item) => {
                const placement = getDropdownPlacement(item.align);

                return (
                  <div
                    key={item.label}
                    className="relative h-full flex items-center"
                    onMouseEnter={() => openMenu(item.label)}
                    onMouseLeave={closeMenu}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1 py-1.5 px-1.5 xl:px-2 2xl:px-2.5 rounded-xl text-[11.5px] xl:text-[12.5px] 2xl:text-[13.5px] font-bold transition-all duration-200 whitespace-nowrap ${
                        activeMenu === item.label
                          ? "text-[#002f6c] bg-[#002f6c]/10 font-black"
                          : isActive(item.href)
                          ? "text-[#002f6c] bg-[#002f6c]/10 font-black"
                          : "text-slate-700 hover:text-[#002f6c] hover:bg-slate-50"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        size={11}
                        className={`shrink-0 transition-transform duration-200 ${
                          activeMenu === item.label ? "rotate-180 text-[#002f6c]" : "text-slate-400"
                        }`}
                      />
                    </Link>

                    {/* Desktop Floating Mega-Menu Card */}
                    <AnimatePresence>
                      {activeMenu === item.label && item.groups && (
                        <motion.div
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.18, ease: "easeOut" }}
                          className={`absolute top-[64px] ${placement.className} w-[780px] xl:w-[850px] bg-white/98 backdrop-blur-xl border border-slate-100 shadow-[0_24px_56px_rgba(0,0,0,0.16)] rounded-3xl p-6 z-50 grid grid-cols-12 gap-6`}
                          onMouseEnter={() => openMenu(item.label)}
                          onMouseLeave={closeMenu}
                        >
                          {/* Subgroups Columns */}
                          <div className={`${item.promo ? "col-span-8" : "col-span-12"} grid grid-cols-2 gap-5 text-start`}>
                            {item.groups.map((group, gIdx) => (
                              <div key={gIdx} className="space-y-3">
                                <h4 className="text-[10.5px] font-black tracking-wider uppercase text-[#002f6c] border-b border-slate-100 pb-1.5">
                                  {group.heading}
                                </h4>
                                <div className="space-y-1">
                                  {group.items.map((sub, sIdx) => {
                                    const IconComponent = sub.icon;
                                    return (
                                      <Link
                                        key={sIdx}
                                        href={sub.href}
                                        onClick={() => setActiveMenu(null)}
                                        className="group/item flex items-start gap-3 p-2 rounded-xl transition-all duration-200 hover:bg-slate-50"
                                      >
                                        <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover/item:bg-[#002f6c] flex items-center justify-center text-slate-500 group-hover/item:text-white transition-colors shrink-0 mt-0.5">
                                          <IconComponent size={14} strokeWidth={2} />
                                        </div>
                                        <div className="flex flex-col min-w-0">
                                          <div className="flex items-center gap-1.5">
                                            <span className="text-[12.5px] font-bold text-slate-700 group-hover/item:text-[#002f6c] transition-colors leading-tight">
                                              {sub.label}
                                            </span>
                                            {sub.badge && (
                                              <span className="px-1.5 py-0.2 rounded text-[9px] font-black bg-[#cf1430]/10 text-[#cf1430] uppercase">
                                                {sub.badge}
                                              </span>
                                            )}
                                          </div>
                                          {sub.desc && (
                                            <span className="text-[10px] font-normal text-slate-400 leading-tight mt-0.5 truncate">
                                              {sub.desc}
                                            </span>
                                          )}
                                        </div>
                                      </Link>
                                    );
                                  })}
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Side Promo Card */}
                          {item.promo && (
                            <div className="col-span-4 rounded-2xl p-5 text-white flex flex-col justify-between overflow-hidden relative shadow-inner group/promo text-start">
                              <div className={`absolute inset-0 bg-gradient-to-br ${item.promo.bgGradient} transition-transform duration-500 scale-100 group-hover/promo:scale-105`} />
                              <div className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-white/10 blur-xl pointer-events-none" />

                              <div className="relative z-10 space-y-2">
                                <span className="inline-block px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-white/20 text-white">
                                  {item.promo.badge}
                                </span>
                                <h4 className="text-sm font-extrabold font-['Montserrat',_sans-serif] leading-tight">
                                  {item.promo.title}
                                </h4>
                                <p className="text-[11px] font-light text-slate-200/90 leading-relaxed">
                                  {item.promo.desc}
                                </p>
                              </div>

                              <Link
                                href={item.promo.href}
                                onClick={() => setActiveMenu(null)}
                                className="relative z-10 mt-5 inline-flex items-center justify-center gap-1.5 w-full py-2 bg-white text-slate-900 text-xs font-extrabold rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                              >
                                <span>{item.promo.btnText}</span>
                                <ArrowRight size={12} className={isRTL ? "rotate-180" : ""} />
                              </Link>
                            </div>
                          )}

                          {/* Bottom Bar for Courses */}
                          {item.bottomBar && (
                            <div className="col-span-12 pt-3 border-t border-slate-100 flex items-center justify-between bg-gradient-to-r from-slate-50 via-blue-50/50 to-slate-50 -mx-6 -mb-6 p-4 px-6 rounded-b-3xl">
                              <div className="flex items-center gap-2.5 text-start">
                                <div className="w-8 h-8 rounded-lg bg-[#002f6c]/10 text-[#002f6c] flex items-center justify-center shrink-0">
                                  <Sparkles size={16} />
                                </div>
                                <div>
                                  <span className="text-xs font-extrabold text-[#002f6c] block leading-tight">
                                    {item.bottomBar.title}
                                  </span>
                                  <span className="text-[10px] text-slate-500">
                                    {item.bottomBar.desc}
                                  </span>
                                </div>
                              </div>

                              <Link
                                href={item.bottomBar.href}
                                onClick={() => setActiveMenu(null)}
                                className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-black text-white bg-[#002F6C] hover:bg-[#cf1430] transition-all shadow-md hover:shadow-lg shrink-0"
                              >
                                <span>{item.bottomBar.btnText}</span>
                                <ArrowRight size={14} className={isRTL ? "rotate-180" : ""} />
                              </Link>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              {/* 10. News & Insights DIRECT IN MAIN NAVBAR */}
              <Link
                href="/news"
                className={`py-1.5 px-2 xl:px-2.5 2xl:px-3 rounded-xl text-[11.5px] xl:text-[12.5px] 2xl:text-[13.5px] font-bold transition-all duration-200 whitespace-nowrap ${
                  isActive("/news")
                    ? "text-[#002f6c] bg-[#002f6c]/10 font-black"
                    : "text-slate-700 hover:text-[#002f6c] hover:bg-slate-50"
                }`}
              >
                {t("nav.news")}
              </Link>

              {/* Language Switch Button */}
              <button
                onClick={toggleLang}
                className="flex items-center gap-1.5 px-2.5 xl:px-3 py-1.5 rounded-xl text-xs font-black border border-slate-200 hover:border-blue-400 hover:bg-blue-50 text-slate-700 hover:text-blue-700 transition-all ms-1 select-none shrink-0"
              >
                <Globe size={13} />
                <span>{t("nav.language")}</span>
              </button>

              {/* Subtle End Divider */}
              <div className="w-px h-5 bg-slate-200 shrink-0 mx-1 hidden xl:block" />

              {/* 11. FAQs (AT THE END) */}
              <Link
                href="/faqs"
                className={`flex items-center gap-1 py-1.5 px-2 xl:px-2.5 rounded-xl text-[11.5px] xl:text-[12.5px] 2xl:text-[13.5px] font-bold transition-all duration-200 whitespace-nowrap ${
                  isActive("/faqs")
                    ? "text-[#002f6c] bg-[#002f6c]/10 font-black"
                    : "text-slate-700 hover:text-[#002f6c] hover:bg-slate-50"
                }`}
              >
                <HelpCircle size={13} className="text-slate-400" />
                <span>{t("nav.faqs")}</span>
              </Link>

              {/* 12. Contact Us (AT THE VERY END AS PRIMARY RED CTA) */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-3.5 xl:px-4 py-2 rounded-xl text-xs xl:text-[13px] font-black bg-[#cf1430] hover:bg-[#a50f26] text-white shadow-md hover:shadow-lg transition-all hover:scale-105 shrink-0 whitespace-nowrap"
              >
                <Mail size={13} className="shrink-0" />
                <span>{t("nav.contact")}</span>
              </Link>
            </nav>

            {/* Mobile Nav Trigger & Lang Selector */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={toggleLang}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-extrabold border border-slate-200 text-slate-700 bg-slate-50 select-none"
              >
                <Globe size={13} />
                <span>{t("nav.language")}</span>
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 rounded-xl text-slate-700 hover:bg-slate-50 transition-colors"
                aria-label="Toggle Menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>

          </div>
        </div>

        {/* ═══ MOBILE SLIDE-OUT DRAWER (Full Structure with Accordions) ═══ */}
        <AnimatePresence>
          {mobileOpen && (
            <>
              {/* Drawer Backdrop Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm z-50 lg:hidden"
                onClick={() => setMobileOpen(false)}
              />

              {/* Mobile Drawer Content */}
              <motion.div
                initial={{ x: isRTL ? "-100%" : "100%" }}
                animate={{ x: 0 }}
                exit={{ x: isRTL ? "-100%" : "100%" }}
                transition={{ type: "spring", stiffness: 320, damping: 28 }}
                className={`fixed top-0 bottom-0 ${isRTL ? "left-0" : "right-0"} w-[330px] max-w-[88vw] bg-white shadow-2xl z-50 flex flex-col lg:hidden`}
              >
                {/* Drawer Header */}
                <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                  <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
                    <img src="/logo.png" alt="International House" className="h-8 w-auto object-contain" />
                  </Link>
                  <button onClick={() => setMobileOpen(false)} className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 transition-colors">
                    <X size={20} />
                  </button>
                </div>

                {/* Drawer Content Body (All 12 Sections) */}
                <div className="flex-1 overflow-y-auto p-4 space-y-2 text-start">
                  
                  {/* 1. Home Direct Link */}
                  <Link
                    href="/"
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-3 text-sm font-bold rounded-xl transition-all duration-200 ${
                      isActive("/") && pathname === "/"
                        ? "text-white bg-gradient-to-r from-[#002f6c] to-[#0050b3] shadow-md shadow-[#002f6c]/20"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {t("nav.home")}
                  </Link>

                  {/* 2 to 9. The 8 Main Pillars as Accordions */}
                  {mainNavItems.map((item) => {
                    const isExpanded = mobileExpanded === item.label;
                    return (
                      <div key={item.label} className="border border-slate-100 rounded-2xl overflow-hidden">
                        <button
                          onClick={() => setMobileExpanded(isExpanded ? null : item.label)}
                          className={`flex items-center justify-between w-full px-4 py-3 text-xs sm:text-sm font-bold transition-all duration-200 ${
                            isExpanded ? "bg-slate-50 text-[#002f6c]" : "text-slate-700"
                          }`}
                        >
                          <span>{item.label}</span>
                          <ChevronDown
                            size={16}
                            className={`text-slate-400 transition-transform duration-200 ${
                              isExpanded ? "rotate-180 text-[#002f6c]" : ""
                            }`}
                          />
                        </button>

                        {/* Accordion Sub-links list */}
                        <AnimatePresence initial={false}>
                          {isExpanded && item.groups && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="py-2.5 px-3 space-y-1 bg-slate-50/50 border-t border-slate-100">
                                {/* Section overview main link */}
                                <Link
                                  href={item.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="flex items-center gap-2 px-3 py-2 text-xs font-extrabold text-[#002f6c] bg-white rounded-xl shadow-sm border border-slate-100 mb-2"
                                >
                                  <ArrowRight size={12} className={isRTL ? "rotate-180" : ""} />
                                  <span>{isRTL ? "الصفحة الرئيسية للقسم" : "Main Section Overview"}</span>
                                </Link>

                                {/* List of nested subgroups items */}
                                {item.groups.map((group) =>
                                  group.items.map((sub, subIdx) => {
                                    const SubIcon = sub.icon;
                                    return (
                                      <Link
                                        key={subIdx}
                                        href={sub.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-600 rounded-xl hover:bg-white hover:shadow-sm transition-all"
                                      >
                                        <SubIcon size={14} className="text-slate-400 shrink-0" />
                                        <span className="leading-tight">{sub.label}</span>
                                        {sub.badge && (
                                          <span className="ms-auto text-[8.5px] px-1.5 py-0.2 rounded bg-[#cf1430]/10 text-[#cf1430] font-black">
                                            {sub.badge}
                                          </span>
                                        )}
                                      </Link>
                                    );
                                  })
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}

                  {/* 10. News & Insights Direct Link in Mobile Drawer */}
                  <Link
                    href="/news"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between px-4 py-3 text-xs sm:text-sm font-bold text-slate-700 hover:bg-slate-50 rounded-2xl border border-slate-100"
                  >
                    <span>{t("nav.news")}</span>
                    <FileText size={15} className="text-slate-400" />
                  </Link>

                  {/* 11. FAQs Direct Link in Mobile Drawer */}
                  <Link
                    href="/faqs"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between px-4 py-3 text-xs sm:text-sm font-bold text-slate-700 hover:bg-slate-50 rounded-2xl border border-slate-100"
                  >
                    <span>{t("nav.faqs")}</span>
                    <HelpCircle size={15} className="text-slate-400" />
                  </Link>

                  {/* 12. Contact Us Direct Link in Mobile Drawer */}
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between px-4 py-3 text-xs sm:text-sm font-bold text-white bg-[#cf1430] hover:bg-[#a50f26] rounded-2xl shadow-sm"
                  >
                    <span>{t("nav.contact")}</span>
                    <Mail size={15} />
                  </Link>

                </div>

                {/* Drawer Footer info */}
                <div className="p-4 border-t border-slate-100 bg-slate-50 space-y-3 text-start">
                  <div className="space-y-1.5">
                    <a href="tel:+966920000364" className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                      <Phone size={13} className="text-yellow-600" />
                      <span dir="ltr" className="font-bold">+966 920 000 364</span>
                    </a>
                    <a href="mailto:info@ih-saudiarabia.com" className="flex items-center gap-2.5 text-xs font-semibold text-slate-600">
                      <Mail size={13} className="text-[#002f6c]" />
                      <span>info@ih-saudiarabia.com</span>
                    </a>
                  </div>
                  
                  <Link
                    href="/registration-form"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-1.5 w-full py-2.5 bg-gradient-to-r from-[#002f6c] to-blue-800 text-white text-xs font-extrabold rounded-xl shadow-md"
                  >
                    <Rocket size={14} />
                    <span>{isRTL ? "سجل الآن في دوراتنا" : "Register Now"}</span>
                  </Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
