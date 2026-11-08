"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu, X, ChevronDown, Globe, Phone, Mail,
  BookOpen, Briefcase, Wrench, Award, Users, Laptop,
  ClipboardCheck, ArrowRight, Eye, Target, Heart, Rocket,
  Star, Shield, GraduationCap, TrendingUp, FileText,
  Layers, MapPin, Compass, Sparkles, Lightbulb
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
  groups?: SubGroup[];
  promo?: PromoBanner;
}

/* ═══════════════════════════════════════════════════════════════════════
   HEADER COMPONENT
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
     CONSOLIDATED NAVIGATION DATA
     ═══════════════════════════════════════════════════════════════════════ */

  const mainNavItems: NavItem[] = [
    {
      label: t("nav.who_we_are"),
      href: "/who-we-are",
      desc: t("nav.who_we_are.desc"),
      groups: [
        {
          heading: lang === "ar" ? "من نحن" : "Who We Are",
          items: [
            { label: t("nav.who_we_are.story"), href: "/who-we-are#our-story", icon: BookOpen, desc: lang === "ar" ? "تاريخنا وتأسيس المعهد" : "Our story & history" },
            { label: t("nav.who_we_are.network"), href: "/who-we-are#global-network", icon: Globe, desc: lang === "ar" ? "جزء من شبكة عالمية" : "Part of IH World organization" },
            { label: t("nav.who_we_are.vision"), href: "/who-we-are#our-vision", icon: Eye, desc: lang === "ar" ? "رؤية المملكة ٢٠٣٠" : "Aligned with Saudi Vision 2030" },
            { label: t("nav.who_we_are.mission"), href: "/who-we-are#our-mission", icon: Target, desc: lang === "ar" ? "مهمتنا وقيمنا الأساسية" : "Our core mission & promise" },
          ],
        },
        {
          heading: lang === "ar" ? "الميديا والوظائف" : "Insights & Join Us",
          items: [
            { label: t("nav.news"), href: "/news", icon: FileText, desc: lang === "ar" ? "آخر الأخبار والمقالات" : "Ideas, Innovation, Perspectives" },
            { label: t("nav.careers"), href: "/careers", icon: Briefcase, desc: lang === "ar" ? "انضم لفريقنا الأكاديمي" : "Join our team of expert trainers" },
            { label: t("nav.who_we_are.values"), href: "/who-we-are#our-values", icon: Heart, desc: lang === "ar" ? "القيم التي نؤمن بها" : "Our commitment to learners" },
          ],
        }
      ],
      promo: {
        badge: lang === "ar" ? "الذكرى السبعون" : "70 YEARS",
        title: lang === "ar" ? "عقد من التميز" : "Global Excellence",
        desc: lang === "ar" ? "نحتفل بـ ٧٠ عاماً من الابتكار والتعليم اللغوي حول العالم." : "Celebrating 70 years of world-class educational network.",
        btnText: lang === "ar" ? "اقرأ قصتنا" : "Learn More",
        href: "/who-we-are#our-story",
        bgGradient: "from-blue-900 via-indigo-950 to-slate-900"
      }
    },
    {
      label: t("nav.courses"),
      href: "/courses",
      desc: t("nav.courses.desc"),
      groups: [
        {
          heading: lang === "ar" ? "برامج اللغات" : "Language Programs:",
          items: [
            { label: t("nav.courses.general"), href: "/courses#general-english", icon: BookOpen, desc: lang === "ar" ? "للطلاب والمتعلمين العامين" : "For students & general learners" },
            { label: t("nav.courses.business"), href: "/courses#business-english", icon: Briefcase, desc: lang === "ar" ? "للتواصل المهني" : "For professional communication" },
            { label: t("nav.courses.technical"), href: "/courses#technical-professional", icon: Wrench, desc: lang === "ar" ? "الإنجليزية الفنية والتخصصية" : "Technical & Industry-specific" },
            { label: t("nav.courses.online_hybrid"), href: "/courses#online-hybrid", icon: Laptop, desc: lang === "ar" ? "بيئات افتراضية مدمجة وعبر الإنترنت" : "Online & hybrid virtual setups" },
            { label: t("nav.courses.young_learners_sub"), href: "/courses#young-learners", icon: Users, desc: lang === "ar" ? "فصول تفاعلية للأطفال واليافعين" : "Interactive kids & teens classes" },
          ],
        },
        {
          heading: lang === "ar" ? "اللغات العالمية" : "Global Languages",
          items: [
            { label: lang === "ar" ? "اللغة العربية والدراسات الثقافية" : "Arabic Language & Cultural Studies", href: "/languages-programs#arabic", icon: BookOpen, desc: lang === "ar" ? "تعلم العربية مع IH" : "Learn Arabic with IH" },
            { label: lang === "ar" ? "اللغات العالمية" : "Global Languages", href: "/languages-programs", icon: Globe, desc: lang === "ar" ? "الفرنسية، الإسبانية، الصينية، إلخ." : "French, Spanish, Chinese, etc." },
            { label: t("nav.study_abroad"), href: "/study-abroad", icon: Compass, desc: lang === "ar" ? "دراسة دولية مخصصة" : "Personalized international study" },
            { label: lang === "ar" ? "التعلم الثقافي والتجارب الدولية" : "Cultural Learning & International Experiences", href: "/languages-programs#cultural", icon: Sparkles, desc: lang === "ar" ? "تجارب ثقافية وسفر" : "Cultural experiences & travel" },
          ],
        },
        {
          heading: lang === "ar" ? "لغات عالمية إضافية" : "Additional World Languages",
          items: [
            { label: "German (Deutsch)", href: "/languages-programs#german", icon: Globe, desc: "Deutsch" },
            { label: "Italian (Italiano)", href: "/languages-programs#italian", icon: Globe, desc: "Italiano" },
            { label: "Japanese (日本語)", href: "/languages-programs#japanese", icon: Globe, desc: "日本語" },
            { label: "Korean (한국어)", href: "/languages-programs#korean", icon: Globe, desc: "한국어" },
            { label: "Turkish (Türkçe)", href: "/languages-programs#turkish", icon: Globe, desc: "Türkçe" },
          ],
        }
      ],
      promo: {
        badge: lang === "ar" ? "جميع الدورات" : "ALL COURSES",
        title: lang === "ar" ? "استكشف دوراتنا" : "Explore our courses",
        desc: lang === "ar" ? "اكتشف جميع خيارات التعلم ومسارات البرامج المتنوعة لدى IH السعودية." : "View our full catalog of English and world language programs.",
        btnText: lang === "ar" ? "استكشف دوراتنا" : "Explore our courses",
        href: "/courses",
        bgGradient: "from-[#002f6c] via-[#0a4a9f] to-[#cf1430]"
      }
    },
    {
      label: t("nav.corporate_training"),
      href: "/corporate-training",
      desc: t("nav.corporate.desc"),
      groups: [
        {
          heading: lang === "ar" ? "حلول تدريب الشركات" : "Corporate Solutions",
          items: [
            { label: t("nav.corporate.why"), href: "/corporate-training#why-ih", icon: Star, desc: lang === "ar" ? "لماذا يختارنا عملاء الشركات" : "Why companies trust IH SA" },
            { label: t("nav.corporate.solutions"), href: "/corporate-training#solutions", icon: Layers, desc: lang === "ar" ? "مسارات التدريب المتخصصة" : "Customized training frameworks" },
            { label: t("nav.corporate.assessment"), href: "/corporate-training#assessment", icon: ClipboardCheck, desc: lang === "ar" ? "تقييم مستوى الموظفين" : "Placement audit & testing" },
            { label: t("nav.corporate.workforce"), href: "/corporate-training#workforce", icon: Users, desc: lang === "ar" ? "دعم تميز القوى العاملة" : "Supporting local talent growth" },
          ],
        },
        {
          heading: lang === "ar" ? "تأهيل وتدريب المعلمين" : "Teacher Development",
          items: [
            { label: t("nav.teacher.celta"), href: "/teacher-training#celta-pathways", icon: Award, desc: lang === "ar" ? "شهادة سيلتا كامبريدج" : "Cambridge CELTA training" },
            { label: t("nav.teacher.professional"), href: "/teacher-training#professional-development", icon: TrendingUp, desc: lang === "ar" ? "التطوير المهني والتأهيل" : "Teacher workshops & support" },
            { label: t("nav.teacher.institutional"), href: "/teacher-training#institutional", icon: GraduationCap, desc: lang === "ar" ? "دعم المؤسسات التعليمية" : "Institutional academic growth" },
          ],
        }
      ],
      promo: {
        badge: lang === "ar" ? "مقترح مخصص" : "PROPOSAL",
        title: lang === "ar" ? "طلب تدريب الشركات" : "Corporate Request",
        desc: lang === "ar" ? "احصل على خطة تدريب لغوي متكاملة ومصممة لمؤسستك." : "Get a customized training proposal tailored for your workforce.",
        btnText: lang === "ar" ? "طلب عرض" : "Request Now",
        href: "/corporate-training#proposal",
        bgGradient: "from-[#002f6c] via-blue-950 to-[#001d4a]"
      }
    },
    {
      label: t("nav.examinations"),
      href: "/examinations",
      desc: t("nav.exams.desc"),
      groups: [
        {
          heading: lang === "ar" ? "الشهادات والاختبارات" : "Qualifications",
          items: [
            { label: t("nav.exams.english"), href: "/examinations#english-qualifications", icon: GraduationCap, desc: lang === "ar" ? "الشهادات والاختبارات المعتمدة" : "Cambridge English qualifications" },
            { label: t("nav.exams.teacher"), href: "/examinations#teacher-qualifications", icon: Award, desc: lang === "ar" ? "شهادات المعلمين الدولية" : "TKT & teacher certifications" },
            { label: t("nav.exams.corporate"), href: "/examinations#corporate-assessment", icon: Briefcase, desc: lang === "ar" ? "تقييمات اللغات للشركات" : "Corporate testing & audits" },
            { label: t("nav.exams.prep"), href: "/examinations#exam-preparation", icon: ClipboardCheck, desc: lang === "ar" ? "التحضير للاختبارات الدولية" : "IELTS & Cambridge prep courses" },
          ],
        },
        {
          heading: lang === "ar" ? "المساعدة والدعم" : "Help & Contact",
          items: [
            { label: t("nav.faqs"), href: "/faqs", icon: Users, desc: lang === "ar" ? "الأسئلة الشائعة والإجابات" : "Everything you need to know" },
            { label: t("nav.contact"), href: "/contact", icon: Mail, desc: lang === "ar" ? "اتصل بفروعنا بالمملكة" : "Riyadh, Jeddah, & Dammam offices" },
          ],
        }
      ],
      promo: {
        badge: lang === "ar" ? "مركز معتمد" : "ACCREDITED",
        title: lang === "ar" ? "شريك كامبريدج الرسمي" : "Official Exam Center",
        desc: lang === "ar" ? "شريك رسمي معتمد لتقديم اختبارات كامبريدج للغة الإنجليزية في المملكة." : "Authorized preparation and testing center for Cambridge qualifications.",
        btnText: lang === "ar" ? "استكشف الشهادات" : "Explore Exams",
        href: "/examinations",
        bgGradient: "from-teal-950 via-teal-900 to-emerald-950"
      }
    }
  ];

  const utilityItems = [
    { label: t("nav.news"), href: "/news" },
    { label: t("nav.careers"), href: "/careers" },
    { label: t("nav.faqs"), href: "/faqs" },
    { label: t("nav.contact"), href: "/contact" }
  ];

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
            ? "bg-white/90 backdrop-blur-xl shadow-lg border-b border-slate-100/50"
            : "bg-white border-b border-transparent"
        }`}
      >
        {/* ═══ TOP UTILITY BAR (Desktop Only) ═══ */}
        <div
          className={`hidden lg:block bg-gradient-to-r from-[#001a3f] to-[#002d6b] text-slate-300 text-xs transition-all duration-300 select-none ${
            scrolled ? "h-0 overflow-hidden opacity-0 py-0 border-b-0" : "h-9 opacity-100 py-1.5 border-b border-white/5"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
            {/* Left side info */}
            <div className="flex items-center gap-5">
              <a href="tel:+966920000364" className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Phone size={12} className="text-cyan-400 shrink-0" />
                <span className="font-semibold">+966 920 000 364</span>
              </a>
              <div className="w-px h-3 bg-white/20" />
              <a href="mailto:info@ih-saudiarabia.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Mail size={12} className="text-cyan-400 shrink-0" />
                <span>info@ih-saudiarabia.com</span>
              </a>
            </div>

            {/* Right side quick links */}
            <div className="flex items-center gap-4">
              {utilityItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`hover:text-white transition-colors text-[11px] font-semibold ${
                    isActive(item.href) ? "text-white" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ═══ MAIN NAVIGATION BAR ═══ */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            
            {/* Logo area */}
            <Link href="/" className="flex items-center gap-3 shrink-0 group">
              <img
                src="/logo.png"
                alt="International House Saudi Arabia"
                className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <div className="w-px h-6 bg-slate-200" />
              <img
                src="/ih_70years_v2.png"
                alt="70 Years"
                className="h-8 sm:h-10 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center h-full gap-1">
              {/* Home Direct Link */}
              <Link
                href="/"
                className={`relative py-1.5 px-3 rounded-lg text-xs xl:text-[13px] font-bold transition-all duration-200 ${
                  isActive("/") && pathname === "/"
                    ? "text-[#002f6c] bg-[#002f6c]/5"
                    : "text-slate-700 hover:text-[#002f6c] hover:bg-slate-50"
                }`}
              >
                {t("nav.home")}
              </Link>

              {/* Grouped Dropdown Items */}
              {mainNavItems.map((item) => (
                <div
                  key={item.label}
                  className="relative h-full flex items-center"
                  onMouseEnter={() => openMenu(item.label)}
                  onMouseLeave={closeMenu}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 py-1.5 px-2.5 rounded-lg text-xs xl:text-[13px] font-bold transition-all duration-200 whitespace-nowrap ${
                      activeMenu === item.label
                        ? "text-[#002f6c] bg-[#002f6c]/5"
                        : isActive(item.href)
                        ? "text-[#002f6c] bg-[#002f6c]/5"
                        : "text-slate-700 hover:text-[#002f6c] hover:bg-slate-50"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      size={12}
                      className={`shrink-0 transition-transform duration-200 ${
                        activeMenu === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </Link>

                  {/* Desktop Mega-Menu Floating Card Container */}
                  <AnimatePresence>
                    {activeMenu === item.label && item.groups && (() => {
                      const isExaminations = item.label === t("nav.examinations");
                      const isThreeGroups = item.groups.length === 3;
                      const menuWidth = isThreeGroups ? "w-[940px] xl:w-[980px]" : "w-[820px]";
                      const alignClass = isExaminations
                        ? (isRTL ? "left-0" : "right-0")
                        : (isRTL ? "right-1/2" : "left-1/2");
                      const motionX = isExaminations
                        ? "0%"
                        : (isRTL ? "45%" : "-55%");

                      return (
                        <motion.div
                          initial={{ opacity: 0, y: 15, x: motionX }}
                          animate={{ opacity: 1, y: 0, x: motionX }}
                          exit={{ opacity: 0, y: 10, x: motionX }}
                          transition={{ duration: 0.22, ease: "easeOut" }}
                          className={`absolute top-[64px] ${alignClass} ${menuWidth} bg-white/95 backdrop-blur-xl border border-slate-100 shadow-[0_24px_56px_rgba(0,0,0,0.15)] rounded-3xl p-6 z-50 grid grid-cols-12 gap-6`}
                          onMouseEnter={() => openMenu(item.label)}
                          onMouseLeave={closeMenu}
                        >
                          {isThreeGroups ? (
                            <>
                              {/* 3 Columns Subgroups Grid */}
                              <div className="col-span-12 grid grid-cols-3 gap-6 text-start">
                                {item.groups.map((group, gIdx) => (
                                  <div key={gIdx} className="space-y-3">
                                    <h4 className="text-[11px] font-black tracking-wider uppercase text-[#002f6c] border-b border-slate-100 pb-2">
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
                                            <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover/item:bg-[#002f6c] flex items-center justify-center text-slate-500 group-hover/item:text-white transition-colors shrink-0">
                                              <IconComponent size={14} strokeWidth={2} />
                                            </div>
                                            <div className="flex flex-col min-w-0">
                                              <span className="text-[13px] font-bold text-slate-700 group-hover/item:text-[#002f6c] transition-colors leading-tight">
                                                {sub.label}
                                              </span>
                                              {sub.desc && (
                                                <span className="text-[10px] font-normal text-slate-400 leading-normal mt-0.5 truncate">
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

                              {/* Bottom Explore Our Courses CTA Bar */}
                              <div className="col-span-12 pt-3 border-t border-slate-100 flex items-center justify-between bg-gradient-to-r from-slate-50 via-blue-50/50 to-slate-50 -mx-6 -mb-6 p-4 px-6 rounded-b-3xl">
                                <div className="flex items-center gap-2.5 text-start">
                                  <div className="w-8 h-8 rounded-lg bg-[#002f6c]/10 text-[#002f6c] flex items-center justify-center shrink-0">
                                    <Sparkles size={16} />
                                  </div>
                                  <div>
                                    <span className="text-xs font-extrabold text-[#002f6c] block leading-tight">
                                      {isRTL ? "استكشف جميع المسارات والدورات التعليمية" : "Explore All Courses & Learning Pathways"}
                                    </span>
                                    <span className="text-[10px] text-slate-500">
                                      {isRTL ? "انتقل إلى صفحة جميع الدورات للاطلاع على البرامج المتاحة" : "The link should take you to the All Courses page provided"}
                                    </span>
                                  </div>
                                </div>

                                <Link
                                  href="/courses"
                                  onClick={() => setActiveMenu(null)}
                                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black text-white bg-[#002F6C] hover:bg-[#cf1430] transition-all shadow-md hover:shadow-lg shrink-0"
                                >
                                  <span>{isRTL ? "استكشف دوراتنا" : "Explore our courses"}</span>
                                  <ArrowRight size={14} className={isRTL ? "rotate-180" : ""} />
                                </Link>
                              </div>
                            </>
                          ) : (
                            <>
                              {/* Left/Right content: Subgroups (8 columns) */}
                              <div className="col-span-8 grid grid-cols-2 gap-6 text-start">
                                {item.groups.map((group, gIdx) => (
                                  <div key={gIdx} className="space-y-3.5">
                                    <h4 className="text-[10px] font-black tracking-wider uppercase text-cyan-600/90 border-b border-slate-100 pb-1.5">
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
                                            className="group/item flex items-start gap-3.5 p-2 rounded-xl transition-all duration-200 hover:bg-slate-50"
                                          >
                                            <div className="w-9 h-9 rounded-xl bg-slate-50 group-hover/item:bg-white group-hover/item:shadow-sm flex items-center justify-center text-slate-400 group-hover/item:text-[#002f6c] transition-colors shrink-0">
                                              <IconComponent size={16} strokeWidth={2} />
                                            </div>
                                            <div className="flex flex-col">
                                              <span className="text-[13px] font-bold text-slate-700 group-hover/item:text-[#002f6c] transition-colors">
                                                {sub.label}
                                              </span>
                                              {sub.desc && (
                                                <span className="text-[10px] font-normal text-slate-400 leading-normal">
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

                              {/* Side Banner Column (4 columns) */}
                              {item.promo && (
                                <div className="col-span-4 rounded-2xl p-5 text-white flex flex-col justify-between overflow-hidden relative shadow-inner group/promo text-start">
                                  {/* Accent Background Gradient */}
                                  <div className={`absolute inset-0 bg-gradient-to-br ${item.promo.bgGradient} transition-transform duration-500 scale-100 group-hover/promo:scale-105`} />
                                  {/* Decorative glowing blob */}
                                  <div className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-white/10 blur-xl pointer-events-none" />

                                  <div className="relative z-10 space-y-2">
                                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-white/20 text-white">
                                      {item.promo.badge}
                                    </span>
                                    <h4 className="text-base font-extrabold font-['Montserrat',_sans-serif] leading-tight">
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
                            </>
                          )}
                        </motion.div>
                      );
                    })()}
                  </AnimatePresence>
                </div>
              ))}

              {/* Language Switch Button */}
              <button
                onClick={toggleLang}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-extrabold border border-slate-200 hover:border-blue-300 hover:bg-blue-50 text-slate-700 hover:text-blue-700 transition-all ms-2 select-none"
              >
                <Globe size={13} />
                {t("nav.language")}
              </button>
            </nav>

            {/* Mobile Nav Trigger & Lang Selector */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={toggleLang}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-extrabold border border-slate-200 text-slate-700 bg-slate-50 select-none"
              >
                <Globe size={13} />
                {t("nav.language")}
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

        {/* ═══ MOBILE SLIDE-OUT DRAWER ═══ */}
        <AnimatePresence>
          {mobileOpen && (
            <>
              {/* Drawer Blurred Backdrop Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm z-50 lg:hidden"
                onClick={() => setMobileOpen(false)}
              />

              {/* Mobile Drawer Menu Content */}
              <motion.div
                initial={{ x: isRTL ? "-100%" : "100%" }}
                animate={{ x: 0 }}
                exit={{ x: isRTL ? "-100%" : "100%" }}
                transition={{ type: "spring", stiffness: 320, damping: 28 }}
                className={`fixed top-0 bottom-0 ${isRTL ? "left-0" : "right-0"} w-[320px] max-w-[85vw] bg-white shadow-2xl z-50 flex flex-col lg:hidden`}
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

                {/* Drawer Content Body (Scrollable Accordions) */}
                <div className="flex-1 overflow-y-auto p-4 space-y-2 text-start">
                  
                  {/* Home Direct Link */}
                  <Link
                    href="/"
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-3.5 text-sm font-bold rounded-xl transition-all duration-200 ${
                      isActive("/") && pathname === "/"
                        ? "text-white bg-gradient-to-r from-[#002f6c] to-[#0050b3] shadow-md shadow-[#002f6c]/20"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {t("nav.home")}
                  </Link>

                  {/* Accordion categories */}
                  {mainNavItems.map((item) => {
                    const isExpanded = mobileExpanded === item.label;
                    return (
                      <div key={item.label} className="border border-slate-100 rounded-2xl overflow-hidden">
                        <button
                          onClick={() => setMobileExpanded(isExpanded ? null : item.label)}
                          className={`flex items-center justify-between w-full px-4 py-3.5 text-sm font-bold transition-all duration-200 ${
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
                              <div className="py-2.5 px-3 space-y-1.5 bg-slate-50/50 border-t border-slate-100">
                                {/* Section overview main link */}
                                <Link
                                  href={item.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="flex items-center gap-2 px-3 py-2 text-xs font-extrabold text-[#002f6c] bg-white rounded-xl shadow-sm border border-slate-100"
                                >
                                  <ArrowRight size={12} className={isRTL ? "rotate-180" : ""} />
                                  <span>{isRTL ? "نظرة عامة على القسم" : "Overview Page"}</span>
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
                                        className="flex items-center gap-3 px-3 py-2 text-xs font-semibold text-slate-600 rounded-xl hover:bg-white hover:shadow-sm transition-all"
                                      >
                                        <SubIcon size={14} className="text-slate-400 shrink-0" />
                                        <span>{sub.label}</span>
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
                </div>

                {/* Drawer Footer info */}
                <div className="p-4 border-t border-slate-100 bg-slate-50 space-y-4 text-start">
                  <div className="space-y-2">
                    <a href="tel:+966920000364" className="flex items-center gap-2.5 text-xs font-semibold text-slate-600">
                      <Phone size={13} className="text-[#002f6c]" />
                      <span>+966 920 000 364</span>
                    </a>
                    <a href="mailto:info@ih-saudiarabia.com" className="flex items-center gap-2.5 text-xs font-semibold text-slate-600">
                      <Mail size={13} className="text-[#002f6c]" />
                      <span>info@ih-saudiarabia.com</span>
                    </a>
                  </div>
                  
                  <Link
                    href="/courses#placement-testing"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-1.5 w-full py-2.5 bg-gradient-to-r from-[#002f6c] to-blue-800 text-white text-xs font-extrabold rounded-xl shadow-md"
                  >
                    <ClipboardCheck size={14} />
                    <span>{isRTL ? "اختبار تحديد المستوى" : "Placement Test"}</span>
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
