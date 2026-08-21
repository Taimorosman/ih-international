"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Clock, Users, BookOpen, CheckCircle, ArrowRight,
  Award, Globe2, Star, TrendingUp, ChevronDown, Phone,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { fadeUp } from "@/utils/animations";
import ThemeAccent from "@/components/ThemeAccent";

const whyCeltaIcons = [
  <Globe2 size={22} key="globe" />,
  <Award size={22} key="award" />,
  <TrendingUp size={22} key="trend" />,
  <Star size={22} key="star" />,
];

const contentData = {
  en: {
    whyCelta: [
      {
        title: "Globally Recognised",
        body: "The CELTA is accepted by language schools, universities and language institutes in over 100 countries — the undisputed gold standard for English language teaching.",
        cardImg: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=500&q=80",
        shadow: "shadow-ih-blue",
        color: "var(--color-ih-blue)",
        colorClass: "bg-ih-blue",
        hoverTextClass: "group-hover/card:text-ih-blue",
        bg: "linear-gradient(135deg, #ffffff 0%, color-mix(in srgb, var(--color-ih-blue) 8%, white) 100%)",
        hoverBg: "linear-gradient(135deg, var(--color-ih-blue) 0%, var(--color-primary-dark) 100%)",
        border: "rgba(59, 63, 168, 0.25)",
        borderHover: "rgba(59, 63, 168, 0.55)",
      },
      {
        title: "Cambridge Certified",
        body: "Awarded by Cambridge Assessment English — one of the world's most trusted names in language qualifications, guaranteeing unmatched credibility.",
        cardImg: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=500&q=80",
        shadow: "shadow-ih-blue",
        color: "var(--color-ih-green)",
        colorClass: "bg-ih-green",
        hoverTextClass: "group-hover/card:text-ih-green",
        bg: "linear-gradient(135deg, #ffffff 0%, color-mix(in srgb, var(--color-ih-green) 8%, white) 100%)",
        hoverBg: "linear-gradient(135deg, var(--color-ih-green) 0%, #126b41 100%)",
        border: "rgba(31, 169, 104, 0.25)",
        borderHover: "rgba(31, 169, 104, 0.55)",
      },
      {
        title: "Career Accelerator",
        body: "CELTA holders command higher salaries, secure jobs faster and access opportunities at prestigious schools worldwide — including within the IH global network.",
        cardImg: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=80",
        shadow: "shadow-ih-purple",
        color: "var(--color-ih-purple)",
        colorClass: "bg-ih-purple",
        hoverTextClass: "group-hover/card:text-ih-purple",
        bg: "linear-gradient(135deg, #ffffff 0%, color-mix(in srgb, var(--color-ih-purple) 8%, white) 100%)",
        hoverBg: "linear-gradient(135deg, var(--color-ih-purple) 0%, #611f51 100%)",
        border: "rgba(139, 50, 117, 0.25)",
        borderHover: "rgba(139, 50, 117, 0.55)",
      },
      {
        title: "Real Teaching Practice",
        body: "Unlike theory-only certificates, CELTA includes a minimum of 6 hours of supervised, assessed classroom teaching practice with real adult learners.",
        cardImg: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80",
        shadow: "shadow-ih-coral",
        color: "var(--color-accent)",
        colorClass: "bg-accent",
        hoverTextClass: "group-hover/card:text-accent",
        bg: "linear-gradient(135deg, #ffffff 0%, color-mix(in srgb, var(--color-accent) 8%, white) 100%)",
        hoverBg: "linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-dark) 100%)",
        border: "rgba(207, 20, 48, 0.25)",
        borderHover: "rgba(207, 20, 48, 0.55)",
      }
    ],
    requirements: [
      "Minimum age of 18 years",
      "Native or near-native proficiency in English (C1/C2 level)",
      "High school diploma or higher — degree preferred",
      "Completion of IH pre-course task and interview",
      "No prior teaching experience required"
    ],
    requirementsTitle: "Entry Requirements",
    faqsTitle: "CELTA FAQs",
    faqs: [
      {
        q: "Is CELTA accepted for teaching jobs in Saudi Arabia?",
        a: "Yes. The Saudi Ministry of Education and TVTC both recognise CELTA as the leading qualification for English language teachers in the Kingdom. IH Saudi Arabia actively recruits CELTA holders."
      },
      {
        q: "Can I take CELTA online?",
        a: "IH Saudi Arabia offers a blended delivery option combining online input sessions with in-person teaching practice. A fully online route with observed online teaching is also available."
      },
      {
        q: "What happens after I complete CELTA?",
        a: "Graduates receive a Cambridge CELTA certificate and may apply for teaching positions within IH Saudi Arabia and across the IH World network in 45+ countries."
      },
      {
        q: "Is CELTA the same as TEFL or TESOL?",
        a: "CELTA is significantly more rigorous than most TEFL/TESOL certificates. It includes assessed teaching practice and is the only qualification of its kind awarded directly by Cambridge Assessment English."
      },
      {
        q: "Are there any language tests during the course?",
        a: "Yes — trainees complete a Language Awareness test on Day 1 of the course. This is formative, not a pass/fail exam, but prepares you for the rigorous self-reflection expected throughout."
      }
    ],
    contactBtn: "Apply Now",
    callBtn: "Call Us",
    cambridgeCentre: "Cambridge Authorised Centre",
    provider: "IH Saudi Arabia — Authorised CELTA Provider",
    whyTitle: "Why CELTA is the Right Choice",
    whySubtitle: "Thousands of IH graduates have launched international teaching careers with CELTA. Here is why it remains the undisputed first choice.",
    tracksSubtitle: "Choose the delivery format that fits your schedule — same rigorous Cambridge standard across all tracks.",
    celtaJourney: "Ready to Start Your CELTA Journey?",
    journeySubtitle: "Contact our team to discuss upcoming course dates, fees and the application process.",
    celtaCta: "Register for CELTA",
  },
  ar: {
    whyCelta: [
      {
        title: "معترف به عالمياً",
        body: "تُقبل شهادة CELTA في مدارس اللغات والجامعات ومعاهد اللغات في أكثر من 100 دولة — وهي المعيار الذهبي بلا منازع لتعليم اللغة الإنجليزية.",
        cardImg: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=500&q=80",
        shadow: "shadow-ih-blue",
        color: "var(--color-ih-blue)",
        colorClass: "bg-ih-blue",
        hoverTextClass: "group-hover/card:text-ih-blue",
        bg: "linear-gradient(135deg, #ffffff 0%, color-mix(in srgb, var(--color-ih-blue) 8%, white) 100%)",
        hoverBg: "linear-gradient(135deg, var(--color-ih-blue) 0%, var(--color-primary-dark) 100%)",
        border: "rgba(59, 63, 168, 0.25)",
        borderHover: "rgba(59, 63, 168, 0.55)",
      },
      {
        title: "معتمد من كامبريدج",
        body: "تُمنح الشهادة من كامبريدج لتقييم اللغة الإنجليزية — أحد أكثر الأسماء موثوقية في العالم في مؤهلات اللغة، مما يضمن مصداقية لا مثيل لها.",
        cardImg: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=500&q=80",
        shadow: "shadow-ih-blue",
        color: "var(--color-ih-green)",
        colorClass: "bg-ih-green",
        hoverTextClass: "group-hover/card:text-ih-green",
        bg: "linear-gradient(135deg, #ffffff 0%, color-mix(in srgb, var(--color-ih-green) 8%, white) 100%)",
        hoverBg: "linear-gradient(135deg, var(--color-ih-green) 0%, #126b41 100%)",
        border: "rgba(31, 169, 104, 0.25)",
        borderHover: "rgba(31, 169, 104, 0.55)",
      },
      {
        title: "تسريع المسار المهني",
        body: "يحصل حاملو شهادة CELTA على رواتب أعلى، ويوظفون بشكل أسرع، وتتاح لهم فرص في المدارس المرموقة عالمياً — بما في ذلك شبكة IH العالمية.",
        cardImg: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=80",
        shadow: "shadow-ih-purple",
        color: "var(--color-ih-purple)",
        colorClass: "bg-ih-purple",
        hoverTextClass: "group-hover/card:text-ih-purple",
        bg: "linear-gradient(135deg, #ffffff 0%, color-mix(in srgb, var(--color-ih-purple) 8%, white) 100%)",
        hoverBg: "linear-gradient(135deg, var(--color-ih-purple) 0%, #611f51 100%)",
        border: "rgba(139, 50, 117, 0.25)",
        borderHover: "rgba(139, 50, 117, 0.55)",
      },
      {
        title: "ممارسة تدريسية حقيقية",
        body: "على عكس الشهادات النظرية فقط، تتضمن CELTA ما لا يقل عن 6 ساعات من الممارسة التدريسية الخاضعة للإشراف والتقييم مع طلاب بالغين حقيقيين.",
        cardImg: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80",
        shadow: "shadow-ih-coral",
        color: "var(--color-accent)",
        colorClass: "bg-accent",
        hoverTextClass: "group-hover/card:text-accent",
        bg: "linear-gradient(135deg, #ffffff 0%, color-mix(in srgb, var(--color-accent) 8%, white) 100%)",
        hoverBg: "linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-dark) 100%)",
        border: "rgba(207, 20, 48, 0.25)",
        borderHover: "rgba(207, 20, 48, 0.55)",
      }
    ],
    requirements: [
      "الحد الأدنى للسن 18 عاماً",
      "إتقان اللغة الإنجليزية بمستوى المتحدث الأصلي أو شبه الأصلي (مستوى C1/C2)",
      "شهادة الثانوية العامة أو أعلى — ويُفضّل المؤهل الجامعي",
      "إكمال مهمة ما قبل الدورة والمقابلة الشخصية مع الهاوس الدولي",
      "لا تشترط وجود خبرة سابقة في التدريس"
    ],
    requirementsTitle: "شروط الالتحاق بالدورة",
    faqsTitle: "الأسئلة الشائعة حول CELTA",
    faqs: [
      {
        q: "هل شهادة CELTA مقبولة لوظائف التدريس في المملكة العربية السعودية؟",
        a: "نعم. تعترف كل من وزارة التعليم والمؤسسة العامة للتدريب التقني والمهني (TVTC) بشهادة CELTA كأبرز مؤهل لمعلمي اللغة الإنجليزية في المملكة. وتقوم الهاوس الدولي السعودية بتوظيف حاملي الشهادة بنشاط."
      },
      {
        q: "هل يمكنني دراسة دورة CELTA عبر الإنترنت؟",
        a: "تقدم الهاوس الدولي السعودية خيار تدريس مدمج يجمع بين جلسات المناهج النظرية عبر الإنترنت وممارسة التدريس حضورياً. كما يتوفر مسار كامل عبر الإنترنت مع ممارسة تدريسية افتراضية خاضعة للملاحظة."
      },
      {
        q: "ماذا يحدث بعد إكمال دورة CELTA بنجاح؟",
        a: "يحصل الخريجون على شهادة Cambridge CELTA معتمدة ويمكنهم التقدم لوظائف التدريس داخل الهاوس الدولي السعودية وعبر شبكة الهاوس الدولي العالمية في أكثر من 45 دولة."
      },
      {
        q: "هل CELTA هي نفس شهادة TEFL أو TESOL؟",
        a: "تعتبر CELTA أكثر صرامة ومنهجية بكثير من معظم شهادات TEFL/TESOL الأخرى. وهي تتضمن ممارسة تدريسية خاضعة للتقييم، وهي المؤهل الوحيد من نوعه الممنوح مباشرة من كامبريدج لتقييم اللغة الإنجليزية."
      },
      {
        q: "هل هناك أي اختبارات لغوية أثناء الدورة؟",
        a: "نعم — يكمل المتدربون اختبار الوعي اللغوي في اليوم الأول من الدورة. هذا الاختبار تكويني وليس للنجاح أو الرسوب، ولكنه يجهزك للتقييم الذاتي الدقيق المتوقع طوال الدورة."
      }
    ],
    contactBtn: "سجل الآن",
    callBtn: "اتصل بنا",
    cambridgeCentre: "مركز معتمد من كامبريدج",
    provider: "الهاوس الدولي السعودية — مزود معتمد لـ CELTA",
    whyTitle: "لماذا تعتبر CELTA الخيار الأنسب؟",
    whySubtitle: "لقد أطلق الآلاف من خريجي الهاوس الدولي مسيرتهم المهنية الدولية في التدريس باستخدام CELTA. إليك سبب بقائها الخيار الأول بلا منازع.",
    tracksSubtitle: "اختر تنسيق تقديم الدورة الذي يناسب جدولك — نفس معايير كامبريدج الصارمة عبر جميع المسارات.",
    celtaJourney: "هل أنت مستعد لبدء رحلة CELTA الخاصة بك؟",
    journeySubtitle: "اتصل بفريقنا لمناقشة تواريخ الدورات القادمة والرسوم وعملية التقديم.",
    celtaCta: "سجل في دورة CELTA",
  }
};

export default function TeacherTrainingPage() {
  const { lang, t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const d = contentData[lang as "en" | "ar"] || contentData.en;

  const tracks = [
    {
      name: t("celta.track1.name"),
      duration: t("celta.track1.duration"),
      hours: t("celta.track1.hours"),
      weekly: t("celta.track1.weekly"),
      class: t("celta.track1.class"),
      color: "var(--color-ih-blue)",
      colorClass: "bg-ih-blue",
      hoverTextClass: "group-hover/card:text-ih-blue",
      bg: "linear-gradient(135deg, #ffffff 0%, color-mix(in srgb, var(--color-ih-blue) 8%, white) 100%)",
      hoverBg: "linear-gradient(135deg, var(--color-ih-blue) 0%, var(--color-primary-dark) 100%)",
      border: "rgba(59, 63, 168, 0.25)",
      borderHover: "rgba(59, 63, 168, 0.55)",
      shadow: "shadow-ih-blue",
      cardImg: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80",
      badge: lang === "ar" ? "الأكثر شعبية" : "Most Popular",
    },
    {
      name: t("celta.track2.name"),
      duration: t("celta.track2.duration"),
      hours: t("celta.track2.hours"),
      weekly: t("celta.track2.weekly"),
      class: t("celta.track2.class"),
      color: "var(--color-ih-green)",
      colorClass: "bg-ih-green",
      hoverTextClass: "group-hover/card:text-ih-green",
      bg: "linear-gradient(135deg, #ffffff 0%, color-mix(in srgb, var(--color-ih-green) 8%, white) 100%)",
      hoverBg: "linear-gradient(135deg, var(--color-ih-green) 0%, #126b41 100%)",
      border: "rgba(31, 169, 104, 0.25)",
      borderHover: "rgba(31, 169, 104, 0.55)",
      shadow: "shadow-ih-blue",
      cardImg: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=500&q=80",
      badge: lang === "ar" ? "موصى به" : "Recommended",
    },
    {
      name: t("celta.track3.name"),
      duration: t("celta.track3.duration"),
      hours: t("celta.track3.hours"),
      weekly: t("celta.track3.weekly"),
      class: t("celta.track3.class"),
      color: "var(--color-ih-purple)",
      colorClass: "bg-ih-purple",
      hoverTextClass: "group-hover/card:text-ih-purple",
      bg: "linear-gradient(135deg, #ffffff 0%, color-mix(in srgb, var(--color-ih-purple) 8%, white) 100%)",
      hoverBg: "linear-gradient(135deg, var(--color-ih-purple) 0%, #611f51 100%)",
      border: "rgba(139, 50, 117, 0.25)",
      borderHover: "rgba(139, 50, 117, 0.55)",
      shadow: "shadow-ih-purple",
      cardImg: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=500&q=80",
      badge: lang === "ar" ? "مرن" : "Flexible",
    },
  ];

  return (
    <div className="pt-[72px]">

      {/* ─── HERO ─────────────────────────────────────── */}
      <section 
        className="relative min-h-[65vh] flex items-center overflow-hidden group"
        style={{ backgroundColor: "var(--color-primary-dark)" }}
      >
        <Image
          src="/arab_education_bg.png"
          alt="Arab education at IH Saudi Arabia"
          fill
          className="object-cover object-center opacity-30 group-hover:opacity-60 transition-opacity duration-500 ease-in-out pointer-events-none"
          priority
        />
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ background: "linear-gradient(105deg, rgba(0,26,63,0.95) 0%, rgba(0,47,108,0.80) 55%, rgba(0,47,108,0.35) 100%)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-24 w-full">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-2xl">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 text-white"
              style={{ background: "var(--color-accent)" }}
            >
              {t("celta.hero.tag")}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight">
              {t("celta.hero.title")}
            </h1>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">{t("celta.hero.subtitle")}</p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-sm text-white shadow-xl hover:scale-105 transition-all"
                style={{ background: "var(--color-accent)" }}
              >
                {d.contactBtn} <ArrowRight size={16} className="rtl:rotate-180" />
              </Link>
              <a
                href="tel:+966920000364"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-sm bg-white/15 backdrop-blur-sm border border-white/30 text-white hover:bg-white/25 transition-all"
              >
                <Phone size={14} /> {d.callBtn}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <ThemeAccent height="h-2.5" />

      {/* ─── STATS BAR ────────────────────────────────── */}
      <div style={{ background: "var(--color-primary)" }} className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { val: "1953", label: lang === "ar" ? "تأسيس IH" : "IH Founded" },
              { val: "45+", label: lang === "ar" ? "بلداً" : "Countries" },
              { val: "130+", label: lang === "ar" ? "مدرسة IH" : "IH Schools" },
              { val: "100%", label: lang === "ar" ? "معتمد من كامبريدج" : "Cambridge Certified" },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-2xl font-extrabold text-white">{s.val}</div>
                <div className="text-xs text-blue-300">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── OVERVIEW ─────────────────────────────────── */}
      <section id="why-development" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
                style={{ background: "var(--color-light)", color: "var(--color-primary)" }}
              >
                {lang === "ar" ? "شهادة تدريس الإنجليزية الرائدة عالمياً" : "The World's Leading EFL Certificate"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 leading-tight" style={{ color: "var(--color-primary)" }}>
                {t("celta.overview.title")}
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-5">{t("celta.overview.body")}</p>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                {lang === "ar" 
                  ? "الهاوس الدولي السعودية هي مركز معتمد لتقديم دورات كامبريدج CELTA — وهي واحدة من عدد قليل من المراكز المصرح لها في المملكة بمنح هذا المؤهل المرموق دولياً. يقدم مدربو CELTA لدينا في الهاوس الدولي توجيهاً عملياً مستمراً طوال رحلتك التدريبية."
                  : "IH Saudi Arabia is an authorised Cambridge CELTA delivery centre — one of only a handful of centres in the Kingdom permitted to award this internationally prestigious qualification. Our CELTA tutors are experienced EFL professionals who provide hands-on mentorship throughout your training journey."}
              </p>
              <p className="text-gray-600 text-base leading-relaxed">
                {lang === "ar"
                  ? "عند إكمال الدورة بنجاح، ستحصل على شهادة كامبريدج CELTA المعترف بها على الفور من قبل أصحاب العمل في جميع أنحاء المملكة العربية السعودية وفي أكثر من 100 دولة حول العالم — مما يفتح لك الأبواب لمسيرة مهنية عالمية في تدريس اللغة الإنجليزية."
                  : "On successful completion, you will hold a Cambridge CELTA certificate that is immediately recognised by employers across Saudi Arabia and in 100+ countries worldwide — opening doors to a globally mobile career in English language teaching."}
              </p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                <Image src="/celta_training.png" alt="CELTA training session" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 bg-white/15 backdrop-blur-sm rounded-2xl p-4 border border-white/25">
                    <Award size={24} className="text-yellow-300 shrink-0" />
                    <div>
                      <p className="text-white font-bold text-sm">{d.cambridgeCentre}</p>
                      <p className="text-blue-200 text-xs">{d.provider}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── WHY CELTA ────────────────────────────────── */}
      <section id="professional-development" className="py-24" style={{ background: "var(--color-light)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: "var(--color-primary)" }}>
              {d.whyTitle}
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-base">
              {d.whySubtitle}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {d.whyCelta.map((w, i) => {
              return (
                <motion.div
                  key={i} custom={i}
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className={`relative z-10 overflow-hidden asymmetric-card p-8 border transition-all duration-300 group/card cursor-pointer ${w.shadow}`}
                  style={{
                    background: w.bg,
                    borderColor: w.border
                  }}
                  whileHover={{
                    borderColor: w.borderHover,
                    background: w.hoverBg
                  }}
                >
                  {/* Visible background photo inside the card */}
                  <Image
                    src={w.cardImg}
                    alt=""
                    fill
                    className="object-cover object-center opacity-[0.35] group-hover/card:opacity-[0.65] transition-opacity duration-300 pointer-events-none z-0"
                  />
                  
                  {/* Soft darken overlay on hover to blend the photo and text */}
                  <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/25 transition-colors duration-300 pointer-events-none z-0" />

                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-5 group-hover/card:scale-110 group-hover/card:bg-white ${w.colorClass} ${w.hoverTextClass} transition-all duration-300 relative z-10`}
                  >
                    {whyCeltaIcons[i]}
                  </div>
                  <h3 className="font-extrabold text-lg mb-3 text-primary group-hover/card:text-white transition-colors duration-300 relative z-10 tracking-tight">{w.title}</h3>
                  <p className="text-slate-700 text-sm leading-relaxed font-medium group-hover/card:text-white/90 transition-colors duration-300 relative z-10">{w.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <ThemeAccent height="h-1.5" pills />

      {/* ─── TRACKS ───────────────────────────────────── */}
      <section id="celta-pathways" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: "var(--color-primary)" }}>
              {t("celta.tracks.title")}
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-base">
              {d.tracksSubtitle}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tracks.map((track, i) => {
              return (
                <motion.div
                  key={i} custom={i}
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className={`relative z-10 overflow-hidden asymmetric-card border transition-all duration-300 group/card cursor-pointer ${track.shadow}`}
                  style={{
                    background: track.bg,
                    borderColor: track.border
                  }}
                  whileHover={{
                    borderColor: track.borderHover,
                    background: track.hoverBg
                  }}
                >
                  {/* Visible background photo inside the card */}
                  <Image
                    src={track.cardImg}
                    alt=""
                    fill
                    className="object-cover object-center opacity-[0.35] group-hover/card:opacity-[0.65] transition-opacity duration-300 pointer-events-none z-0"
                  />
                  
                  {/* Soft darken overlay on hover to blend the photo and text */}
                  <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/25 transition-colors duration-300 pointer-events-none z-0" />

                  <div className="h-2 relative z-10" style={{ background: track.color }} />
                  {track.badge && (
                    <div
                      className="absolute top-5 right-5 px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-wide z-20"
                      style={{ background: track.color }}
                    >
                      {track.badge}
                    </div>
                  )}
                  <div className="p-8 relative z-10">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-6 group-hover/card:scale-110 group-hover/card:bg-white ${track.colorClass} ${track.hoverTextClass} transition-all duration-300`}
                    >
                      <BookOpen size={22} />
                    </div>
                    <h3 className="text-xl font-extrabold mb-6 text-primary group-hover/card:text-white transition-colors duration-300 relative z-10 tracking-tight">
                      {track.name}
                    </h3>
                    <div className="space-y-3">
                      {[
                        { icon: <Clock size={15} />, label: track.duration },
                        { icon: <BookOpen size={15} />, label: track.hours },
                        { icon: <Users size={15} />, label: track.weekly },
                        { icon: <Users size={15} />, label: track.class },
                      ].map((item, j) => (
                        <div key={j} className="flex items-center gap-2.5 text-sm text-slate-700 group-hover/card:text-white/90 transition-colors duration-300">
                          <span className="text-primary group-hover/card:text-white transition-colors duration-300">{item.icon}</span>
                          {item.label}
                        </div>
                      ))}
                    </div>
                    <Link
                      href="/contact"
                      className={`mt-7 flex items-center justify-center gap-2 w-full py-3 rounded-2xl font-bold text-sm text-white ${track.colorClass} ${track.hoverTextClass} group-hover/card:bg-white transition-all duration-300`}
                    >
                      {lang === "ar" ? "استفسر الآن" : "Enquire"} <ArrowRight size={14} className="rtl:rotate-180" />
                    </Link>
                  </div>
              </motion.div>
            )})}
          </div>
        </div>
      </section>

      {/* ─── ENTRY REQUIREMENTS ───────────────────────── */}
      <section id="institutional" className="py-24" style={{ background: "var(--color-light)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-extrabold mb-4" style={{ color: "var(--color-primary)" }}>
              {d.requirementsTitle}
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {d.requirements.map((req, i) => (
              <motion.div
                key={i} custom={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="flex items-start gap-3 bg-white p-5 rounded-2xl shadow-sm border border-gray-100"
              >
                <CheckCircle size={18} className="shrink-0 mt-0.5" style={{ color: "var(--color-ih-green)" }} />
                <p className="text-gray-700 text-sm leading-relaxed">{req}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NOTES ────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="rounded-3xl p-10 border-2"
            style={{ borderColor: "var(--color-primary)", background: "#f0f5ff" }}
          >
            <h3 className="text-2xl font-extrabold mb-7" style={{ color: "var(--color-primary)" }}>
              {t("celta.notes.title")}
            </h3>
            <div className="space-y-4">
              {[t("celta.notes.1"), t("celta.notes.2"), t("celta.notes.3")].map((note, i) => (
                <div key={i} className="flex items-start gap-3 text-gray-700 text-sm leading-relaxed">
                  <CheckCircle size={18} className="shrink-0 mt-0.5" style={{ color: "var(--color-ih-green)" }} />
                  {note}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FAQs ─────────────────────────────────────── */}
      <section className="py-20" style={{ background: "var(--color-light)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-3xl font-extrabold text-center mb-10"
            style={{ color: "var(--color-primary)" }}
          >
            {d.faqsTitle}
          </motion.h2>
          <div className="space-y-4">
            {d.faqs.map((faq, i) => (
              <motion.div
                key={i} custom={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="rounded-2xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className={`w-full flex items-center justify-between px-6 py-5 ${lang === "ar" ? "text-right" : "text-left"}`}
                  style={{ background: openFaq === i ? "var(--color-primary)" : "white" }}
                >
                  <span className="text-sm font-semibold pr-4" style={{ color: openFaq === i ? "white" : "var(--color-primary)" }}>
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                    style={{ color: openFaq === i ? "white" : "var(--color-accent)" }}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 py-5 bg-blue-50 text-sm text-gray-600 leading-relaxed border-t border-blue-100">
                    {faq.a}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ThemeAccent height="h-1.5" />

      {/* ─── CTA ──────────────────────────────────────── */}
      <section
        id="commitment"
        className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, var(--color-primary) 0%, #0a4a9f 100%)" }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl font-extrabold text-white mb-4">{d.celtaJourney}</h2>
            <p className="text-blue-200 mb-10 text-lg leading-relaxed">
              {d.journeySubtitle}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white font-bold text-base shadow-2xl hover:scale-105 transition-all animate-none"
                style={{ color: "var(--color-primary)" }}
              >
                {d.celtaCta} <ArrowRight size={18} className="rtl:rotate-180" />
              </Link>
              <a
                href="tel:+966920000364"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/15 border border-white/30 font-bold text-base text-white hover:bg-white/25 transition-all"
              >
                <Phone size={16} /> +966 920 000 364
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
