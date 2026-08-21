"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight, CheckCircle, Users, Clock, BookOpen, Globe,
  Star, Award, TrendingUp, MessageSquare, Monitor, FileCheck,
  ChevronRight, Phone, Mail, Sparkles, AlertCircle
} from "lucide-react";
import { fadeUp } from "@/utils/animations";
import ThemeAccent from "@/components/ThemeAccent";

/* ─── 1. ENGLISH FOR COMPANIES VIEW ──────────────────────────────── */
export const companiesData = {
  en: {
    hero: {
      title: "Corporate Training",
      tagline: "Professional Language Training Solutions for Organizations",
      badge: "Corporate Solutions",
    },
    intro: {
      title: "Customized Language Training & Workforce Development",
      subtitle: "Professional Language Training Solutions for Organizations",
      text1: "International House Saudi Arabia (IHSA) provides customized language training and workforce development solutions for companies, government entities, educational institutions, and organizations across the Kingdom.",
      text2: "With over 30 years of experience supporting Saudi industry, IH Saudi Arabia understands the importance of effective communication, workforce readiness, and continuous professional development.",
      text3: "Our training solutions are designed to improve employee performance, enhance workplace communication, and support organizational objectives through practical, measurable, and results-driven learning programs."
    },
    whyChooseUs: {
      title: "Why Choose Us",
      subtitle: "Why Corporate Clients Choose IH Saudi Arabia",
      text1: "Organizations require more than language training. They need training solutions that deliver measurable outcomes and support business objectives.",
      text2: "IH Saudi Arabia combines international educational standards with local industry knowledge to create programs that are relevant, practical, and aligned with workplace needs."
    },
    strengths: {
      title: "Our Strengths",
      list: [
        { title: "30+ Years Experience", desc: "Over 30 years of experience in Saudi Arabia supporting key industries.", img: "/str_saudi.png" },
        { title: "Corporate Expertise", desc: "Extensive corporate training expertise tailored to workforce readiness.", img: "/str_corporate.png" },
        { title: "Global IH Network", desc: "International House global network support and quality assurance.", img: "/str_network.png" },
        { title: "Customized Solutions", desc: "Customized learning solutions designed around organizational objectives.", img: "/str_method.png" },
        { title: "Professional Reporting", desc: "Detailed, regular reporting and evaluation of participant progress.", img: "/str_quality.png" },
        { title: "Flexible Delivery", desc: "Flexible delivery methods including on-site, online, and hybrid options.", img: "/str_hybrid.png" },
        { title: "Expert Trainers", desc: "Experienced, fully certified trainers and professional assessors.", img: "/str_trainers.png" },
        { title: "Measurable Outcomes", desc: "A strong focus on measurable performance improvement and ROI.", img: "/str_quality.png" }
      ]
    },
    solutions: {
      title: "Our Corporate Training Solutions",
      items: [
        {
          key: "business",
          title: "Business English",
          desc: "Develop the communication skills required for today's professional workplace.",
          subtitle: "Programs focus on:",
          items: [
            "Business communication",
            "Meetings and discussions",
            "Presentations",
            "Professional writing",
            "Email communication",
            "Negotiation skills",
            "Workplace interaction"
          ],
          note: "Customized to align with your organization's business objectives.",
          img: "/corp_business.png",
          color: "#002F6C",
          shadow: "shadow-ih-blue"
        },
        {
          key: "technical",
          title: "Technical & Industry-Specific English",
          desc: "Specialized programs designed to support employees working in technical and operational environments.",
          subtitle: "Examples include:",
          items: [
            "Technical English",
            "English for Engineers",
            "English for Oil & Gas",
            "English for Logistics",
            "English for Manufacturing",
            "English for Healthcare",
            "English for Hospitality & Tourism",
            "English for Customer Service"
          ],
          note: "Programs may be customized to meet the specific requirements of each organization.",
          img: "/corp_technical.png",
          color: "#1fa968",
          shadow: "shadow-ih-blue"
        },
        {
          key: "executive",
          title: "Executive Coaching",
          desc: "Individual and small-group training programs designed for managers, executives, and professionals who require highly focused language and communication development.",
          subtitle: "Areas may include:",
          items: [
            "Executive communication",
            "Presentation skills",
            "Business meetings",
            "Public speaking",
            "Leadership communication",
            "Professional writing"
          ],
          note: "Confidential and highly focused, tailored to executive schedules.",
          img: "/corp_executive.png",
          color: "#fcb900",
          shadow: "shadow-ih-yellow"
        },
        {
          key: "testing",
          title: "Placement Testing & Language Assessment",
          desc: "Accurate placement is critical to training success. IH Saudi Arabia provides reliable English language assessment and placement testing services designed to support recruitment, workforce development, and training programs.",
          subtitle: "Our assessment solutions help organizations:",
          items: [
            "Identify current language levels",
            "Benchmark employees against international standards",
            "Design effective training pathways",
            "Measure progress and development"
          ],
          note: "Assessment services may be delivered online or on-site depending on client requirements.",
          img: "/corp_testing.png",
          color: "#cf1430",
          shadow: "shadow-ih-red"
        }
      ]
    },
    process: {
      title: "Our Corporate Training Process",
      subtitle: "A structured methodology ensuring measurable results",
      list: [
        { step: "Step 1", title: "Consultation & Needs Analysis", desc: "We work closely with clients to understand organizational goals, workforce requirements, and training objectives.", img: "/str_corporate.png" },
        { step: "Step 2", title: "Placement Testing & Assessment", desc: "Participants are assessed to determine current language proficiency and training needs.", img: "/corp_testing.png" },
        { step: "Step 3", title: "Program Design", desc: "Customized learning pathways are developed based on organizational and participant requirements.", img: "/str_method.png" },
        { step: "Step 4", title: "Training Delivery", desc: "Programs are delivered by experienced trainers through face-to-face, online, or hybrid learning solutions.", img: "/about_classroom.png" },
        { step: "Step 5", title: "Monitoring & Reporting", desc: "Progress is monitored throughout the program with regular reporting and communication.", img: "/str_quality.png" },
        { step: "Step 6", title: "Evaluation & Recommendations", desc: "Program outcomes are evaluated and recommendations are provided for future development.", img: "/corp_executive.png" }
      ]
    },
    delivery: {
      title: "Flexible Delivery Options",
      desc: "IH Saudi Arabia offers training solutions designed to fit organizational schedules and operational requirements.",
      subtitle: "Delivery Methods",
      items: [
        "On-Site Training",
        "Training at IH Saudi Arabia Centers",
        "Live Online Training",
        "Hybrid Learning Solutions",
        "Executive One-to-One Coaching",
        "Small Group Programs"
      ],
      note: "Our flexible approach allows organizations to select the most effective learning environment for their employees."
    },
    support: {
      title: "Supporting Workforce Development",
      desc: "IH Saudi Arabia is committed to supporting organizations in developing the communication skills, language proficiency, and professional capabilities required in today's competitive workplace.",
      text: "Through practical training, professional support, and internationally aligned standards, we help organizations invest in their people and achieve sustainable workforce development outcomes."
    },
    cta: {
      title: "Request a Corporate Proposal",
      desc: "Our team will be pleased to discuss your training requirements and recommend the most suitable solution for your organization.",
      subtitle: "Corporate Services Include",
      items: [
        "Training Needs Analysis",
        "Placement Testing",
        "Business English",
        "Technical English",
        "Executive Coaching",
        "Customized Programs",
        "Online & Hybrid Training",
        "Progress Reporting"
      ]
    }
  },
  ar: {
    hero: {
      title: "التدريب المؤسسي",
      tagline: "حلول تدريب لغوي احترافية للشركات والمؤسسات",
      badge: "حلول الشركات والمؤسسات",
    },
    intro: {
      title: "التدريب اللغوي المخصص وتطوير رأس المال البشري",
      subtitle: "حلول تدريب لغوي احترافية للشركات والمؤسسات",
      text1: "يقدم معهد الهاوس الدولي السعودية (IHSA) حلولاً مخصصة للتدريب اللغوي وتطوير القوى العاملة للشركات والجهات الحكومية والمؤسسات التعليمية والمنظمات في جميع أنحاء المملكة.",
      text2: "انطلاقاً من خبرتنا الممتدة لأكثر من 30 عاماً في دعم الصناعة السعودية، يتفهم معهد الهاوس الدولي السعودية أهمية التواصل الفعال وجاهزية الموظفين والتطوير المهني المستمر.",
      text3: "تم تصميم حلولنا التدريبية لتحسين أداء الموظفين وتعزيز التواصل في بيئة العمل ودعم الأهداف المؤسسية من خلال برامج تعليمية عملية وقابلة للقياس وموجهة نحو النتائج."
    },
    whyChooseUs: {
      title: "لماذا نحن",
      subtitle: "لماذا يختار عملاء قطاع الأعمال معهد الهاوس الدولي السعودية؟",
      text1: "تتطلب الشركات ما هو أكثر من مجرد تدريب لغوي عابر؛ إنها بحاجة إلى حلول تدريبية تحقق نتائج ملموسة وتدعم الأهداف التجارية والتشغيلية.",
      text2: "يجمع معهد الهاوس الدولي السعودية بين معايير التعليم العالمية والمعرفة بالصناعة المحلية لتصميم برامج ذات صلة وعملية ومتوافقة مع احتياجات بيئة العمل."
    },
    strengths: {
      title: "نقاط قوتنا",
      list: [
        { title: "أكثر من 30 عاماً من الخبرة", desc: "أكثر من 30 عاماً من الخبرة في المملكة العربية السعودية لدعم الصناعات الحيوية.", img: "/str_saudi.png" },
        { title: "خبرة تدريبية واسعة", desc: "خبرة تدريبية واسعة للشركات مصممة لتأهيل الكوادر وتطوير الأداء.", img: "/str_corporate.png" },
        { title: "شبكة IH العالمية", desc: "دعم كامل وضمان جودة من الشبكة العالمية لمعاهد الهاوس الدولي.", img: "/str_network.png" },
        { title: "حلول تدريب مخصصة", desc: "حلول تدريبية مخصصة ومصممة بالكامل حول متطلبات جهة العمل.", img: "/str_method.png" },
        { title: "تقارير مهنية دورية", desc: "تقارير وتقييمات دورية مهنية وتفصيلية لمتابعة تقدم الموظفين.", img: "/str_quality.png" },
        { title: "طرق تقديم مرنة", desc: "طرق تقديم مرنة تشمل التدريب الحضوري، وعبر الإنترنت، والمدمج.", img: "/str_hybrid.png" },
        { title: "مدربون خبراء ومقيمون", desc: "مدربون ذوو خبرة وكفاءة عالية ومقيمون معتمدون دولياً.", img: "/str_trainers.png" },
        { title: "نتائج قابلة للقياس", desc: "تركيز كبير على تحقيق نتائج أداء ملموسة وعائد حقيقي على الاستثمار.", img: "/str_quality.png" }
      ]
    },
    solutions: {
      title: "حلولنا التدريبية للشركات",
      items: [
        {
          key: "business",
          title: "اللغة الإنجليزية للأعمال",
          desc: "تطوير مهارات التواصل المطلوبة في بيئة العمل الاحترافية الحديثة.",
          subtitle: "تركز البرامج على:",
          items: [
            "التواصل في مجال الأعمال",
            "الاجتماعات والمناقشات",
            "العروض التقديمية",
            "الكتابة المهنية",
            "المراسلات الإلكترونية",
            "مهارات التفاوض",
            "التفاعل في بيئة العمل"
          ],
          note: "مصممة لتتوافق مع أهداف أعمال شركتكم.",
          img: "/corp_business.png",
          color: "#002F6C",
          shadow: "shadow-ih-blue"
        },
        {
          key: "technical",
          title: "الإنجليزية التقنية والتخصصية",
          desc: "برامج متخصصة مصممة لدعم الموظفين العاملين في البيئات الفنية والتشغيلية.",
          subtitle: "وتشمل الأمثلة:",
          items: [
            "الإنجليزية التقنية",
            "الإنجليزية للمهندسين",
            "الإنجليزية للنفط والغاز",
            "الإنجليزية للخدمات اللوجستية",
            "الإنجليزية للتصنيع",
            "الإنجليزية للرعاية الصحية",
            "الإنجليزية للضيافة والسياحة",
            "الإنجليزية لخدمة العملاء"
          ],
          note: "يمكن تخصيص البرامج لتلبية المتطلبات المحددة لكل مؤسسة.",
          img: "/corp_technical.png",
          color: "#1fa968",
          shadow: "shadow-ih-blue"
        },
        {
          key: "executive",
          title: "تدريب التنفيذيين والقيادات",
          desc: "برامج تدريبية فردية أو لمجموعات صغيرة مصممة للمدراء والتنفيذيين الذين يتطلب عملهم تطويراً لغوياً وتواصلياً عالي التركيز.",
          subtitle: "وتشمل مجالات التدريب:",
          items: [
            "التواصل القيادي والتنفيذي",
            "مهارات العروض التقديمية",
            "اجتماعات الأعمال الدولية",
            "التحدث أمام الجمهور",
            "التواصل القيادي المؤثر",
            "الكتابة المهنية المتقدمة"
          ],
          note: "تدريب فردي سري ومكثف، مصمم ليناسب جداول التنفيذيين المزدحمة.",
          img: "/corp_executive.png",
          color: "#fcb900",
          shadow: "shadow-ih-yellow"
        },
        {
          key: "testing",
          title: "اختبارات التحديد والتقييم اللغوي",
          desc: "التحديد الدقيق للمستوى هو أساس نجاح التدريب. يقدم معهد الهاوس الدولي السعودية خدمات موثوقة للتقييم واختبارات تحديد المستوى لدعم التوظيف وتطوير القوى العاملة.",
          subtitle: "تساعد حلول التقييم لدينا المؤسسات على:",
          items: [
            "تحديد المستويات اللغوية الحالية بدقة",
            "مقارنة مهارات الموظفين بالمعايير الدولية",
            "رسم مسارات تدريبية فعالة واقتصادية",
            "قياس التطور والتقدم الفردي والمجمّع"
          ],
          note: "يمكن تقديم خدمات التقييم عبر الإنترنت أو حضورياً في موقع العميل.",
          img: "/corp_testing.png",
          color: "#cf1430",
          shadow: "shadow-ih-red"
        }
      ]
    },
    process: {
      title: "منهجية التدريب والعمل",
      subtitle: "عملية منظمة تضمن تحقيق نتائج ملموسة وقابلة للقياس",
      list: [
        { step: "الخطوة 1", title: "الاستشارة وتحليل الاحتياجات", desc: "نعمل عن كثب مع عملائنا لفهم الأهداف المؤسسية ومتطلبات القوى العاملة.", img: "/str_corporate.png" },
        { step: "الخطوة 2", title: "اختبار تحديد المستوى والتقييم", desc: "يتم تقييم المشاركين لتحديد كفاءتهم الحالية واحتياجاتهم التدريبية الدقيقة.", img: "/corp_testing.png" },
        { step: "الخطوة 3", title: "تصميم البرنامج", desc: "تطوير مسارات تعليمية مخصصة بناءً على متطلبات الشركة والمشاركين.", img: "/str_method.png" },
        { step: "الخطوة 4", title: "تقديم التدريب", desc: "تقديم البرامج بواسطة مدربين خبراء حضورياً، عبر الإنترنت، أو عبر التعليم المدمج.", img: "/about_classroom.png" },
        { step: "الخطوة 5", title: "المتابعة وإرسال التقارير", desc: "مراقبة التقدم والالتزام طوال البرنامج مع تقديم تقارير دورية لإدارتكم.", img: "/str_quality.png" },
        { step: "الخطوة 6", title: "التقييم والتوصيات", desc: "تقييم مخرجات البرنامج بالكامل وتقديم توصيات مفصلة للتطوير المستقبلي.", img: "/corp_executive.png" }
      ]
    },
    delivery: {
      title: "خيارات تقديم مرنة",
      desc: "يقدم معهد الهاوس الدولي السعودية حلولاً تدريبية مصممة لتناسب جداول أعمالكم ومتطلباتكم التشغيلية.",
      subtitle: "طرق التدريب تشمل",
      items: [
        "التدريب في مقر العميل (On-Site)",
        "التدريب في فروع الهاوس الدولي السعودية",
        "التدريب المباشر عبر الإنترنت",
        "حلول التعليم المدمج (Hybrid)",
        "تدريب التنفيذيين الفردي (1-to-1)",
        "برامج المجموعات الصغيرة المخصصة"
      ],
      note: "يسمح نهجنا المرن للمؤسسات باختيار أفضل بيئة تعليمية لموظفيها لضمان الاستمرارية."
    },
    support: {
      title: "دعم تطوير القوى العاملة",
      desc: "يلتزم معهد الهاوس الدولي السعودية بدعم المؤسسات في تطوير مهارات التواصل، الكفاءة اللغوية، والقدرات المهنية المطلوبة في سوق العمل التنافسي اليوم.",
      text: "من خلال التدريب العملي، الدعم المهني، والمعايير المتوافقة دولياً، نساعد الشركات على الاستثمار في كوادرها البشرية وتحقيق نتائج مستدامة لتطوير قواها العاملة بما يتماشى مع رؤية المملكة 2030."
    },
    cta: {
      title: "طلب عرض تدريب للشركات",
      desc: "يسعد فريقنا بمناقشة متطلبات التدريب الخاصة بمؤسستكم والتوصية بالحل الأنسب لأهدافكم وميزانيتكم.",
      subtitle: "خدمات الشركات تشمل",
      items: [
        "تحليل الاحتياجات التدريبية",
        "اختبارات تحديد المستوى",
        "اللغة الإنجليزية للأعمال",
        "الإنجليزية التقنية",
        "تدريب التنفيذيين",
        "البرامج المخصصة",
        "التدريب المدمج وعبر الإنترنت",
        "تقارير التقدم الفردية"
      ]
    }
  }
};


export function EnglishForCompaniesView({ lang }: { lang: string }) {
  const d = companiesData[lang as "en" | "ar"] || companiesData.en;

  const getStrengthCardTheme = (idx: number) => {
    const cycleIndex = idx % 4;
    if (cycleIndex === 0) {
      return {
        bg: "bg-white text-slate-800 border-x border-b border-slate-200",
        accent: "border-t-4 border-t-[#002F6C]",
        title: "text-[#002F6C]",
        desc: "text-slate-500",
        icon: "text-white bg-[#002F6C]",
      };
    } else if (cycleIndex === 1) {
      return {
        bg: "bg-white text-slate-800 border-x border-b border-slate-200",
        accent: "border-t-4 border-t-[#00d084]",
        title: "text-[#00d084]",
        desc: "text-slate-500",
        icon: "text-white bg-[#00d084]",
      };
    } else if (cycleIndex === 2) {
      return {
        bg: "bg-white text-slate-800 border-x border-b border-slate-200",
        accent: "border-t-4 border-t-[#fcb900]",
        title: "text-[#fcb900]",
        desc: "text-slate-500",
        icon: "text-white bg-[#fcb900]",
      };
    } else {
      return {
        bg: "bg-white text-slate-800 border-x border-b border-slate-200",
        accent: "border-t-4 border-t-[#cf1430]",
        title: "text-[#cf1430]",
        desc: "text-slate-500",
        icon: "text-white bg-[#cf1430]",
      };
    }
  };

  const getSolutionCardTheme = (idx: number) => {
    const cycleIndex = idx % 4;
    if (cycleIndex === 0) {
      return {
        bg: "bg-white text-slate-800 border-x border-b border-slate-200",
        accent: "border-t-8 border-t-[#002F6C]",
        title: "text-[#002F6C]",
        desc: "text-slate-600",
        bulletIcon: "text-[#00d084]",
        note: "text-slate-500 border-slate-100",
        badge: "text-[#002F6C] bg-blue-50"
      };
    } else if (cycleIndex === 1) {
      return {
        bg: "bg-[#00d084] text-white",
        accent: "border-t-8 border-t-white/10",
        title: "text-white",
        desc: "text-white/90",
        bulletIcon: "text-white",
        note: "text-white/80 border-white/20",
        badge: "text-[#00d084] bg-white"
      };
    } else if (cycleIndex === 2) {
      return {
        bg: "bg-[#fcb900] text-white",
        accent: "border-t-8 border-t-white/10",
        title: "text-white",
        desc: "text-white/95",
        bulletIcon: "text-white",
        note: "text-white/80 border-white/20",
        badge: "text-[#fcb900] bg-white"
      };
    } else {
      return {
        bg: "bg-[#cf1430] text-white",
        accent: "border-t-8 border-t-white/10",
        title: "text-white",
        desc: "text-white/90",
        bulletIcon: "text-white",
        note: "text-white/80 border-white/20",
        badge: "text-[#cf1430] bg-white"
      };
    }
  };

  const getStepTheme = (idx: number) => {
    const cycleIndex = idx % 4;
    if (cycleIndex === 0) {
      return {
        border: "border-t-4 border-t-[#002F6C]",
        iconBg: "bg-blue-50 text-[#002F6C]",
        stepText: "text-[#002F6C]",
        num: "0" + (idx + 1)
      };
    } else if (cycleIndex === 1) {
      return {
        border: "border-t-4 border-t-[#00d084]",
        iconBg: "bg-emerald-50 text-[#00d084]",
        stepText: "text-[#00d084]",
        num: "0" + (idx + 1)
      };
    } else if (cycleIndex === 2) {
      return {
        border: "border-t-4 border-t-[#fcb900]",
        iconBg: "bg-amber-50 text-[#fcb900]",
        stepText: "text-[#fcb900]",
        num: "0" + (idx + 1)
      };
    } else {
      return {
        border: "border-t-4 border-t-[#cf1430]",
        iconBg: "bg-rose-50 text-[#cf1430]",
        stepText: "text-[#cf1430]",
        num: "0" + (idx + 1)
      };
    }
  };

  const getStepIcon = (idx: number) => {
    switch (idx) {
      case 0: return <MessageSquare className="w-5 h-5" />;
      case 1: return <FileCheck className="w-5 h-5" />;
      case 2: return <Sparkles className="w-5 h-5" />;
      case 3: return <BookOpen className="w-5 h-5" />;
      case 4: return <TrendingUp className="w-5 h-5" />;
      case 5: return <Award className="w-5 h-5" />;
      default: return <CheckCircle className="w-5 h-5" />;
    }
  };

  const getCtaCardTheme = (idx: number) => {
    // 8 cards mapped to specific colors, borders, bg gradients, shadows, and PNG images from the public folder
    const themes = [
      {
        color: "#cf1430",
        border: "border-red-100/80",
        bg: "bg-gradient-to-b from-red-50/50 via-white to-white",
        shadow: "hover:shadow-red-200/50",
        text: "text-slate-800",
        png: "/str_method.png",
        borderBottom: "border-b-[#cf1430]",
        iconBg: "bg-red-50 text-[#cf1430]"
      },
      {
        color: "#00d084",
        border: "border-emerald-100/80",
        bg: "bg-gradient-to-b from-emerald-50/50 via-white to-white",
        shadow: "hover:shadow-slate-200/50",
        text: "text-slate-800",
        png: "/corp_testing.png",
        borderBottom: "border-b-[#00d084]",
        iconBg: "bg-emerald-50 text-[#00d084]"
      },
      {
        color: "#002F6C",
        border: "border-blue-100/80",
        bg: "bg-gradient-to-b from-blue-50/50 via-white to-white",
        shadow: "hover:shadow-blue-200/50",
        text: "text-slate-800",
        png: "/corp_business.png",
        borderBottom: "border-b-[#002F6C]",
        iconBg: "bg-blue-50 text-[#002F6C]"
      },
      {
        color: "#fcb900",
        border: "border-amber-100/80",
        bg: "bg-gradient-to-b from-amber-50/50 via-white to-white",
        shadow: "hover:shadow-amber-200/50",
        text: "text-slate-800",
        png: "/corp_technical.png",
        borderBottom: "border-b-[#fcb900]",
        iconBg: "bg-amber-50 text-[#fcb900]"
      },
      {
        color: "#ec4899",
        border: "border-pink-100/80",
        bg: "bg-gradient-to-b from-pink-50/50 via-white to-white",
        shadow: "hover:shadow-pink-200/50",
        text: "text-slate-800",
        png: "/corp_executive.png",
        borderBottom: "border-b-pink-500",
        iconBg: "bg-pink-50 text-pink-500"
      },
      {
        color: "#cf1430",
        border: "border-red-100/80",
        bg: "bg-gradient-to-b from-red-50/50 via-white to-white",
        shadow: "hover:shadow-red-200/50",
        text: "text-slate-800",
        png: "/str_corporate.png",
        borderBottom: "border-b-[#cf1430]",
        iconBg: "bg-red-50 text-[#cf1430]"
      },
      {
        color: "#00d084",
        border: "border-emerald-100/80",
        bg: "bg-gradient-to-b from-emerald-50/50 via-white to-white",
        shadow: "hover:shadow-slate-200/50",
        text: "text-slate-800",
        png: "/str_hybrid.png",
        borderBottom: "border-b-[#00d084]",
        iconBg: "bg-emerald-50 text-[#00d084]"
      },
      {
        color: "#002F6C",
        border: "border-blue-100/80",
        bg: "bg-gradient-to-b from-blue-50/50 via-white to-white",
        shadow: "hover:shadow-blue-200/50",
        text: "text-slate-800",
        png: "/str_quality.png",
        borderBottom: "border-b-[#002F6C]",
        iconBg: "bg-blue-50 text-[#002F6C]"
      }
    ];
    return themes[idx] || themes[0];
  };

  return (
    <div className="pt-[72px]">
      {/* 1. HERO SECTION */}
      <section className="py-24 sm:py-32 relative overflow-hidden group bg-gradient-to-br from-[#002F6C] via-[#083e87] to-[#0c4ea6]">
        <Image
          src="/corporate_training.png"
          alt="Corporate training background"
          fill
          className="object-cover object-center opacity-10 group-hover:opacity-20 transition-opacity duration-500 ease-in-out mix-blend-overlay pointer-events-none"
          priority
        />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 -translate-y-32 translate-x-32 bg-white" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 translate-y-16 -translate-x-16 bg-white" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-block text-xs font-bold uppercase tracking-wider mb-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white border border-white/30">
              {d.hero.badge}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight max-w-3xl">
              {d.hero.title}
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed">
              {d.hero.tagline}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white font-bold text-sm text-[#002F6C] shadow-lg hover:scale-105 transition-all duration-300"
              >
                {lang === "ar" ? "احصل على مقترح للشركات" : "Request Corporate Proposal"} <ArrowRight size={16} className="rtl:rotate-180" />
              </Link>
              <a
                href="tel:+966920000364"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/15 border border-white/30 backdrop-blur-sm font-bold text-sm text-white hover:bg-white/25 hover:scale-105 transition-all duration-300"
              >
                <Phone size={16} /> +966 920 000 364
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <ThemeAccent height="h-2" />

      {/* 2. INTRODUCTION SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <span className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-[#f0f4ff] text-[#002F6C]">
                  {lang === "ar" ? "التدريب اللغوي للشركات" : "Corporate Language Training"}
                </span>
                <h2 className="text-3xl font-extrabold mb-6 text-[#002F6C]">
                  {d.intro.title}
                </h2>
                <p className="text-slate-700 text-lg leading-relaxed font-semibold mb-6">
                  {d.intro.text1}
                </p>
                <p className="text-slate-600 text-base leading-relaxed mb-6">
                  {d.intro.text2}
                </p>
                <p className="text-slate-600 text-base leading-relaxed mb-6">
                  {d.intro.text3}
                </p>
              </motion.div>
            </div>
            
            <div className="lg:col-span-6 relative flex justify-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="relative w-full max-w-[500px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-100"
              >
                <Image
                  src="/about_classroom.png"
                  alt="Corporate Training Classroom"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <ThemeAccent height="h-1.5" pills />

      {/* 3. WHY CHOOSE US & STRENGTHS GRID */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-[#f0f4ff] text-[#002F6C]">
              {d.whyChooseUs.title}
            </motion.span>
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="text-3xl sm:text-4xl font-extrabold text-[#002F6C] mb-4">
              {d.whyChooseUs.subtitle}
            </motion.h2>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2} className="text-slate-600 text-base leading-relaxed mb-6">
              {d.whyChooseUs.text1}
            </motion.p>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={3} className="text-slate-600 text-base leading-relaxed">
              {d.whyChooseUs.text2}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {d.strengths.list.map((str, idx) => {
              const theme = getStrengthCardTheme(idx);
              return (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={idx}
                  className={`relative overflow-hidden rounded-3xl ${theme.bg} ${theme.accent} shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group/strength`}
                >
                  {/* Top Image Section */}
                  <div className="relative h-36 w-full overflow-hidden shrink-0 bg-slate-100">
                    <Image
                      src={str.img}
                      alt={str.title}
                      fill
                      className="object-cover object-center group-hover/strength:scale-105 transition-transform duration-500 opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <div className={`absolute top-3 left-3 w-8 h-8 rounded-lg ${theme.icon} flex items-center justify-center font-bold text-xs shadow-md`}>
                      {idx + 1}
                    </div>
                  </div>

                  {/* Text Section */}
                  <div className="p-5 flex-grow flex flex-col justify-between">
                    <div>
                      <h4 className={`font-extrabold text-sm mb-1.5 ${theme.title}`}>{str.title}</h4>
                      <p className={`text-2xs leading-relaxed ${theme.desc}`}>{str.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <ThemeAccent height="h-1.5" />

      {/* 4. CORPORATE SOLUTIONS GRID (VIBRANT CARD CYCLING & IMAGES) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-[#f0f4ff] text-[#002F6C]">
              {lang === "ar" ? "خدماتنا التدريبية" : "OUR PROGRAMS"}
            </motion.span>
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="text-3xl sm:text-4xl font-extrabold text-[#002F6C]">
              {d.solutions.title}
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {d.solutions.items.map((sol, idx) => {
              const theme = getSolutionCardTheme(idx);
              return (
                <motion.div
                  key={sol.key}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={idx}
                  className={`relative overflow-hidden rounded-3xl ${theme.bg} ${theme.accent} shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between group/card`}
                >
                  {/* Top Image Section */}
                  <div className="relative h-56 w-full overflow-hidden shrink-0">
                    <Image
                      src={sol.img}
                      alt={sol.title}
                      fill
                      className="object-cover object-center group-hover/card:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
                    
                    {/* Solution Badge */}
                    <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-md text-2xs font-extrabold border border-white/30 uppercase tracking-wide group-hover/card:scale-105 transition-transform duration-300">
                      <span className={theme.title}>{lang === "ar" ? "برنامج تدريبي" : "Corporate"}</span>
                    </div>
                  </div>

                  {/* Bottom Text Section */}
                  <div className="p-8 flex-grow flex flex-col justify-between relative z-10">
                    <div>
                      <span className={`inline-block text-2xs font-extrabold uppercase tracking-widest mb-3 px-2 py-0.5 rounded ${theme.badge}`}>
                        {lang === "ar" ? "معتمد دولياً" : "Accredited Program"}
                      </span>
                      <h3 className={`text-2xl font-extrabold mb-3 ${theme.title}`}>
                        {sol.title}
                      </h3>
                      <p className={`text-sm leading-relaxed mb-6 ${theme.desc}`}>
                        {sol.desc}
                      </p>
                      <span className={`block font-bold text-xs uppercase tracking-wider mb-3 ${theme.title}`}>
                        {sol.subtitle}
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5 mb-6">
                        {sol.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2 text-xs font-semibold leading-snug">
                            <CheckCircle className={`${theme.bulletIcon} shrink-0 mt-0.5`} size={14} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {sol.note && (
                      <div className={`pt-4 border-t text-xs font-semibold leading-relaxed ${theme.note}`}>
                        {sol.note}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <ThemeAccent height="h-1.5" pills />

      {/* 5. TRAINING PROCESS TIMELINE (PREMIUM GRID CARDS DESIGN WITH IMAGES) */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-[#f0f4ff] text-[#002F6C]">
              {lang === "ar" ? "منهجيتنا للنجاح" : "Our Methodology"}
            </motion.span>
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="text-3xl sm:text-4xl font-extrabold text-[#002F6C] mb-4">
              {d.process.title}
            </motion.h2>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2} className="text-slate-500 text-sm">
              {d.process.subtitle}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {d.process.list.map((step, idx) => {
              const theme = getStepTheme(idx);
              return (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={idx}
                  className={`relative overflow-hidden rounded-3xl border border-slate-200 bg-white ${theme.border} shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group/step`}
                >
                  {/* Top Image Section */}
                  <div className="relative h-36 w-full overflow-hidden shrink-0 bg-slate-50">
                    <Image
                      src={step.img}
                      alt={step.title}
                      fill
                      className="object-cover object-center group-hover/step:scale-105 transition-transform duration-500 opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent z-10" />
                    
                    {/* Floating Icon Badge */}
                    <div className={`absolute top-3 left-3 z-20 w-8 h-8 rounded-lg ${theme.iconBg} flex items-center justify-center shadow-md transition-transform duration-300 group-hover/step:scale-110`}>
                      {getStepIcon(idx)}
                    </div>

                    {/* Stylized Step Number watermark on top of image */}
                    <div className="absolute right-4 bottom-2 z-20 text-4xl font-black text-white/40 select-none pointer-events-none group-hover/step:text-white/60 transition-colors duration-300">
                      {theme.num}
                    </div>
                  </div>

                  {/* Text Section */}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      {/* Step Subtitle */}
                      <span className={`text-[10px] font-extrabold uppercase tracking-widest block mb-1.5 ${theme.stepText}`}>
                        {step.step}
                      </span>

                      {/* Step Title */}
                      <h4 className="font-extrabold text-slate-800 text-base mb-2.5 leading-snug group-hover/step:text-[#002F6C] transition-colors duration-300">
                        {step.title}
                      </h4>

                      {/* Step Description */}
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-semibold">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <ThemeAccent height="h-1.5" />

      {/* 6. FLEXIBLE DELIVERY & SUPPORT SPLIT SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Delivery Methods column */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="relative overflow-hidden p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow duration-300 group/delivery"
            >
              <div className="relative z-10 w-full">
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#cf1430] flex items-center justify-center mb-6">
                  <Clock size={24} />
                </div>
                <h3 className="text-2xl font-extrabold text-[#002F6C] mb-4">
                  {d.delivery.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {d.delivery.desc}
                </p>
                <span className="block font-bold text-xs uppercase tracking-wider mb-4 text-[#002F6C]">
                  {d.delivery.subtitle}
                </span>

                {/* Visual grid with small cards and images */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {d.delivery.items.map((item, idx) => {
                    let img = "/learn_face_to_face.png";
                    if (idx === 2) img = "/learn_online_classes.png";
                    else if (idx === 3) img = "/learn_hybrid.png";
                    else if (idx === 4) img = "/corp_executive.png";
                    else if (idx === 5) img = "/corp_business.png";

                    return (
                      <div key={idx} className="relative overflow-hidden rounded-2xl border border-slate-150 bg-white p-3 shadow-2xs flex items-center gap-3 hover:shadow-md transition-all duration-300 group/item">
                        <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 bg-slate-50">
                          <Image
                            src={img}
                            alt={item}
                            fill
                            className="object-cover group-hover/item:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <span className="text-xs font-bold text-slate-700 leading-tight">
                          {item}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <p className="text-slate-400 text-xs italic leading-relaxed pt-4 border-t border-slate-200">
                  {d.delivery.note}
                </p>
              </div>
            </motion.div>

            {/* Support column */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
              className="relative overflow-hidden p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#002F6C] to-[#0c4ea6] text-white flex flex-col justify-between hover:shadow-lg transition-all duration-300 group/support"
            >
              <Image
                src="/values_mission.png"
                alt="Workforce development background"
                fill
                className="object-cover opacity-10 group-hover/support:opacity-20 transition-opacity duration-500 mix-blend-overlay pointer-events-none"
              />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/10 text-white flex items-center justify-center mb-6">
                  <Globe size={24} />
                </div>
                <h3 className="text-2xl font-extrabold mb-4">
                  {d.support.title}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed mb-6">
                  {d.support.desc}
                </p>
                <p className="text-white/85 text-sm leading-relaxed">
                  {d.support.text}
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 7. FINAL CTA BANNER (PROPOSAL REQUEST WITH PREMIUM CARDS GRID) */}
      <section className="py-20 bg-gradient-to-br from-[#002F6C] via-[#0b3c7b] to-[#124d9c] relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5 -translate-y-32 translate-x-32 bg-white" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-5 translate-y-16 -translate-x-16 bg-white" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="inline-block text-xs font-bold uppercase tracking-wider mb-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white border border-white/30">
              {lang === "ar" ? "تواصل معنا" : "GET STARTED"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 leading-tight">
              {d.cta.title}
            </h2>
            <p className="text-white/80 mb-10 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              {d.cta.desc}
            </p>
            
            {/* Services cards grid with cycled border/badge colors (Red, Green, Red, Yellow, Pink) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto">
              {d.cta.items.map((item, idx) => {
                const theme = getCtaCardTheme(idx);
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className={`relative overflow-hidden p-6 rounded-3xl ${theme.bg} ${theme.border} border shadow-lg hover:shadow-xl ${theme.shadow} transition-all duration-300 flex flex-col items-center justify-center text-center group border-b-4 ${theme.borderBottom}`}
                  >
                    {/* Floating Step Number */}
                    <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-slate-900/10 text-slate-800 text-[11px] font-extrabold flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
                      {idx + 1}
                    </div>
                    
                    {/* Premium PNG Icon container */}
                    <div className="relative w-20 h-20 rounded-2xl overflow-hidden mb-5 border border-slate-100 shadow-md group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={theme.png}
                        alt={item}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    <span className={`text-sm font-black leading-snug tracking-wide transition-colors duration-300 ${theme.text} group-hover:text-slate-900`}>
                      {item}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-4 justify-center mt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-[#00d084] font-bold text-sm text-white shadow-xl hover:bg-[#00b070] hover:scale-105 transition-all duration-300"
              >
                {lang === "ar" ? "طلب العرض الآن" : "Request Proposal"} <ArrowRight size={16} className="rtl:rotate-180" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/15 border border-white/30 backdrop-blur-sm font-bold text-sm text-white hover:bg-white/25 hover:scale-105 transition-all duration-300"
              >
                {lang === "ar" ? "عرض المزيد" : "View More"} <ArrowRight size={16} className="rtl:rotate-180" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


/* ─── 2. ESP COURSES VIEW ────────────────────────────────────────── */
export const espData = {
  en: {
    hero: {
      title: "ESP Courses",
      tagline: "Master the language of your industry.",
      badge: "English for Specific Purposes",
    },
    business: {
      title: "Business English (BE: Levels 1-6)",
      desc: "For employees in business related fields from A1 to C1 in a variety of administrative, financial, and management related professions. Options include intensive business English and non-intensive. The courses focus on emailing, technical reports writing, presentation skills, telephoning, negotiating, and business communication."
    },
    technical: {
      title: "Technical English (TE: Levels 1-6)",
      desc: "For operators, electricians, plant workers, and those working in manufacturing. The IH Saudi Arabia Technical English courses are broad technical programs that focus on building wider language awareness for industry within applied contexts. These programs are often customized to the demands of a particular industry, especially in areas like vocabulary and language functions, while remaining suitable for employees from different departments and job backgrounds."
    },
    portfolio: {
      title: "Specialised ESP Modules",
      subtitle: "Targeted language certifications matching specific industrial roles",
      items: [
        { title: "English for Security Guards", level: "A1 – B1", shadow: "shadow-ih-blue", color: "#002F6C", img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=500&q=80" },
        { title: "English for the Oil & Gas Industry", level: "B1+", shadow: "shadow-ih-blue", color: "#1fa968", img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=500&q=80" },
        { title: "English for Offshore Workers", level: "B2+", shadow: "shadow-ih-purple", color: "#8b3275", img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=500&q=80" },
        { title: "English for Logistics", level: "B1+", shadow: "shadow-ih-coral", color: "#e85d4a", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=500&q=80" },
        { title: "English for Nurses", level: "A2+", shadow: "shadow-ih-peach", color: "#f09550", img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=500&q=80" },
        { title: "English for Doctors", level: "B2+", shadow: "shadow-ih-yellow", color: "#f6c96a", img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=500&q=80" },
        { title: "English for Airport Ground Services", level: "B1+", shadow: "shadow-ih-blue", color: "#002F6C", img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=500&q=80" },
        { title: "Legal English", level: "B2+", shadow: "shadow-ih-purple", color: "#8b3275", img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=500&q=80" },
        { title: "Business Writing", level: "B1+", shadow: "shadow-ih-coral", color: "#e85d4a", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=500&q=80" },
        { title: "English for Engineers", level: "B2+", shadow: "shadow-ih-blue", color: "#1fa968", img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=500&q=80" },
        { title: "English for Hospitality & Tourism", level: "A2+", shadow: "shadow-ih-yellow", color: "#f6c96a", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=500&q=80" }
      ]
    },
    testing: {
      title: "Placement Testing",
      desc: "IH Saudi Arabia offers a highly reliable corporate placement testing service to ensure that all employees receive the English language training they need. There are computer and paper based versions of this test with confidential results collated and available within a turnaround time of one business day."
    },
    executive: {
      title: "Executive Training",
      desc: "IH Saudi Arabia’s executive programs include classes with small groups and 1-1 training. Choose to study at work, at IH Jubail, or online. Classes include daytime, weekend, and evening class options. Courses are designed around your needs and include tailored programs from Legal to Medical English. You can also simply improve your conversational skills, or focus on Business Communication. Both intensive and non-intensive options are available."
    }
  },
  ar: {
    hero: {
      title: "دورات الإنجليزية لأغراض خاصة",
      tagline: "أتقن لغة صناعتك وسيطر على مستقبلك المهني.",
      badge: "الإنجليزية لأغراض خاصة (ESP)",
    },
    business: {
      title: "الإنجليزية للأعمال (BE: المستويات 1-6)",
      desc: "للموظفين في المجالات ذات الصلة بالأعمال من المستوى A1 إلى C1 في مجموعة متنوعة من المهن الإدارية والمالية والتنفيذية. تشمل الخيارات دورات إنجليزية للأعمال مكثفة وغير مكثفة. تركز الدورات على المراسلات الإلكترونية، كتابة التقارير الفنية، مهارات العروض التقديمية، الاتصالات الهاتفية، التفاوض، وتواصل الأعمال."
    },
    technical: {
      title: "الإنجليزية التقنية (TE: المستويات 1-6)",
      desc: "للمشغلين، الفنيين الكهربائيين، عمال المصانع، والمنخرطين في قطاع التصنيع. دورات الإنجليزية التقنية من الهاوس الدولي السعودية هي برامج تقنية واسعة تركز على بناء وعي لغوي أشمل للصناعة ضمن سياقات تطبيقية. غالباً ما يتم تخصيص هذه البرامج وفقاً لمتطلبات صناعة معينة، لا سيما في مجالات المفردات والوظائف اللغوية، مع بقائها مناسبة للموظفين من مختلف الأقسام والخلفيات الوظيفية."
    },
    portfolio: {
      title: "برامج ESP التخصصية",
      subtitle: "شهادات لغوية موجهة لتناسب الأدوار المهنية المختلفة",
      items: [
        { title: "الإنجليزية لحراس الأمن", level: "A1 – B1", shadow: "shadow-ih-blue", color: "#002F6C", img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=500&q=80" },
        { title: "الإنجليزية لصناعة النفط والغاز", level: "B1+", shadow: "shadow-ih-blue", color: "#1fa968", img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=500&q=80" },
        { title: "الإنجليزية لعمال المنصات البحرية", level: "B2+", shadow: "shadow-ih-purple", color: "#8b3275", img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=500&q=80" },
        { title: "الإنجليزية للخدمات اللوجستية", level: "B1+", shadow: "shadow-ih-coral", color: "#e85d4a", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=500&q=80" },
        { title: "الإنجليزية للتمريض والرعاية الصحية", level: "A2+", shadow: "shadow-ih-peach", color: "#f09550", img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=500&q=80" },
        { title: "الإنجليزية للأطباء والكوادر الطبية", level: "B2+", shadow: "shadow-ih-yellow", color: "#f6c96a", img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=500&q=80" },
        { title: "الإنجليزية للخدمات الأرضية للمطارات", level: "B1+", shadow: "shadow-ih-blue", color: "#002F6C", img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=500&q=80" },
        { title: "الإنجليزية القانونية", level: "B2+", shadow: "shadow-ih-purple", color: "#8b3275", img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=500&q=80" },
        { title: "الكتابة وصياغة الأعمال", level: "B1+", shadow: "shadow-ih-coral", color: "#e85d4a", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=500&q=80" },
        { title: "الإنجليزية للمهندسين والفنيين", level: "B2+", shadow: "shadow-ih-blue", color: "#1fa968", img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=500&q=80" },
        { title: "الإنجليزية للضيافة والسياحة", level: "A2+", shadow: "shadow-ih-yellow", color: "#f6c96a", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=500&q=80" }
      ]
    },
    testing: {
      title: "اختبارات تحديد المستوى للشركات",
      desc: "تقدم الهاوس الدولي السعودية خدمة اختبارات تحديد المستوى المؤسسية الموثوقة للغاية لضمان حصول جميع الموظفين على التدريب اللغوي الذي يحتاجونه. تتوفر نسخ ورقية وإلكترونية من هذا الاختبار مع تجميع نتائج سرية كاملة وإتاحتها في غضون يوم عمل واحد فقط."
    },
    executive: {
      title: "تدريب التنفيذيين والقيادات",
      desc: "تشمل البرامج التنفيذية من الهاوس الدولي السعودية فصولاً لمجموعات صغيرة وتدريباً فردياً (1-1). اختر الدراسة في مقر العمل، أو في فرع الهاوس الدولي بالجبيل، أو عبر الإنترنت. تشمل الفصول خيارات دراسية نهارية، وعطلة نهاية الأسبوع، ومسائية. تم تصميم الدورات التدريبية حول احتياجاتك المحددة وتشمل برامج مخصصة من الإنجليزية القانونية إلى الطبية. يمكنك أيضاً ببساطة تحسين مهارات المحادثة لديك أو التركيز على تواصل الأعمال. تتوفر خيارات مكثفة وغير مكثفة."
    }
  }
};

export function EspCoursesView({ lang }: { lang: string }) {
  const d = espData[lang as "en" | "ar"] || espData.en;

  return (
    <div className="pt-[72px]">
      {/* HERO SECTION */}
      <section className="py-24 sm:py-32 relative overflow-hidden group bg-gradient-to-br from-[#8b3275] via-[#752661] to-[#601a4e]">
        <Image
          src="/arab_education_bg.png"
          alt="ESP Courses"
          fill
          className="object-cover object-center opacity-25 group-hover:opacity-40 transition-opacity duration-500 ease-in-out mix-blend-overlay pointer-events-none"
          priority
        />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 -translate-y-32 translate-x-32 bg-white" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 translate-y-16 -translate-x-16 bg-white" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-block text-xs font-bold uppercase tracking-wider mb-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white border border-white/30">
              {d.hero.badge}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              {d.hero.title}
            </h1>
            <p className="text-lg sm:text-xl text-white/85 mb-8 max-w-2xl leading-relaxed">
              {d.hero.tagline}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white font-bold text-sm text-[#8b3275] shadow-lg hover:scale-105 transition-all duration-300"
              >
                {lang === "ar" ? "احصل على استشارة" : "Enquire Now"} <ArrowRight size={16} className="rtl:rotate-180" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <ThemeAccent height="h-2" />

      {/* BUSINESS & TECHNICAL ENGLISH COMPARISON */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="p-8 rounded-3xl border border-slate-100 bg-slate-50/50 shadow-sm"
            >
              <h3 className="text-2xl font-extrabold text-[#8b3275] mb-4">{d.business.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">{d.business.desc}</p>
              <div className="flex flex-wrap gap-2 text-xs font-bold text-[#8b3275]">
                {["Emailing", "Technical Reports", "Presentations", "Negotiating"].map((tag, i) => (
                  <span key={i} className="px-3 py-1 rounded-md bg-[#8b3275]/10">{tag}</span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
              className="p-8 rounded-3xl border border-slate-100 bg-slate-50/50 shadow-sm"
            >
              <h3 className="text-2xl font-extrabold text-[#002F6C] mb-4">{d.technical.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">{d.technical.desc}</p>
              <div className="flex flex-wrap gap-2 text-xs font-bold text-[#002F6C]">
                {["Operators", "Electricians", "Manufacturing", "Safety Context"].map((tag, i) => (
                  <span key={i} className="px-3 py-1 rounded-md bg-[#002F6C]/10">{tag}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ThemeAccent height="h-1.5" pills />

      {/* SPECIALISED ESP PLACEMENT LIST */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-[#f0f4ff] text-[#8b3275]">
              {lang === "ar" ? "برامج خاصة مهنية" : "Industry Specific Tracks"}
            </motion.span>
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="text-3xl sm:text-4xl font-extrabold text-[#8b3275] mb-4">
              {d.portfolio.title}
            </motion.h2>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2} className="text-slate-500 text-sm">
              {d.portfolio.subtitle}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {d.portfolio.items.map((item, idx) => {
              const cardBorder = `color-mix(in srgb, ${item.color} 20%, transparent)`;
              const cardHoverBorder = `color-mix(in srgb, ${item.color} 50%, transparent)`;
              return (
                <motion.div
                  key={idx}
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={idx}
                  className={`relative overflow-hidden p-6 rounded-3xl border bg-white transition-all duration-500 hover:-translate-y-1.5 group/card cursor-pointer ${item.shadow}`}
                  style={{ borderColor: cardBorder }}
                  whileHover={{
                    borderColor: cardHoverBorder,
                    background: `linear-gradient(135deg, ${item.color} 0%, color-mix(in srgb, ${item.color} 75%, #000000) 100%)`
                  }}
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover object-center opacity-[0.30] group-hover/card:opacity-[0.60] transition-opacity duration-500 pointer-events-none z-0 mix-blend-overlay"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/30 transition-colors duration-500 pointer-events-none z-0" />

                  <div className="relative z-10 flex flex-col justify-between h-full min-h-[160px]">
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold text-white mb-3 tracking-wide" style={{ backgroundColor: item.color }}>
                        {item.level}
                      </span>
                      <h4 className="font-extrabold text-base text-slate-800 transition-colors duration-500 group-hover/card:text-white leading-snug">
                        {item.title}
                      </h4>
                    </div>
                    
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 transition-colors duration-500 group-hover/card:text-white pt-4">
                      <span>{lang === "ar" ? "تواصل للتسجيل" : "Enquire Track"}</span>
                      <ChevronRight size={12} className="transition-transform duration-300 group-hover/card:translate-x-1 rtl:rotate-180 rtl:group-hover/card:-translate-x-1" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <ThemeAccent height="h-1.5" />

      {/* PLACEMENT TESTING & EXECUTIVE SOLUTIONS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Testing */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="p-8 rounded-3xl border border-slate-100 bg-[#f8f9fc] shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#8b3275] flex items-center justify-center font-bold mb-4 shadow-sm">
                  <FileCheck size={20} />
                </div>
                <h4 className="font-extrabold text-slate-800 text-lg mb-3">{d.testing.title}</h4>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6">{d.testing.desc}</p>
              </div>
              <Link href="/courses/placement-test" className="text-xs font-bold text-[#8b3275] flex items-center gap-1 hover:underline">
                {lang === "ar" ? "اعرف المزيد عن اختبار التحديد" : "Placement Test Details"} <ArrowRight size={14} className="rtl:rotate-180" />
              </Link>
            </motion.div>

            {/* Executive */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
              className="p-8 rounded-3xl border border-slate-100 bg-[#f8f9fc] shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#002F6C]/10 text-[#002F6C] flex items-center justify-center font-bold mb-4 shadow-sm">
                  <Users size={20} />
                </div>
                <h4 className="font-extrabold text-slate-800 text-lg mb-3">{d.executive.title}</h4>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6">{d.executive.desc}</p>
              </div>
              <Link href="/contact" className="text-xs font-bold text-[#002F6C] flex items-center gap-1 hover:underline">
                {lang === "ar" ? "اتصل بمستشاري تدريب التنفيذيين" : "Contact Executive Advisory"} <ArrowRight size={14} className="rtl:rotate-180" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-br from-[#8b3275] via-[#752661] to-[#601a4e]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl font-extrabold text-white mb-4">
              {lang === "ar" ? "جاهز لتصميم تدريب مخصص لشركتك؟" : "Ready to Start Specialized Training?"}
            </h2>
            <p className="text-white/80 mb-10 text-base sm:text-lg">
              {lang === "ar" 
                ? "تواصل مع خبرائنا في الجبيل أو الظهران لتصميم الحل اللغوي الأنسب لاحتياجات فريقك." 
                : "Connect with our coordinators in Jubail or Dhahran to design a targeted syllabus for your industrial track."}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white font-bold text-sm text-[#8b3275] shadow-xl hover:scale-105 transition-all duration-300"
              >
                {lang === "ar" ? "اتصل بنا الآن" : "Apply for ESP Tracks"} <ArrowRight size={16} className="rtl:rotate-180" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

/* ─── 3. LEARN ARABIC VIEW ───────────────────────────────────────── */
export const arabicData = {
  en: {
    hero: {
      title: "Languages & Cultural Programs",
      tagline: "Connecting People, Languages, and Cultures",
      badge: "Language & Culture Portfolio",
    },
    intro: {
      title: "Understanding People, Languages, and Cultures",
      text1: "At International House Saudi Arabia, we believe that language learning is about more than communication—it is about understanding people, cultures, and the world around us.",
      text2: "Building on the global expertise of the International House network, IH Saudi Arabia offers language learning opportunities designed to support personal growth, academic development, professional success, and intercultural understanding.",
      text3: "Whether you wish to learn Arabic, French, Spanish, Chinese, or other world languages, our programs provide practical communication skills and meaningful cultural engagement."
    },
    arabic: {
      title: "Arabic Language & Cultural Studies",
      subtitle: "Discover the Language and Culture of the Arab World",
      desc: "As the historical home of the Arabic language and the heart of the Islamic world, Saudi Arabia provides a unique environment for learning Arabic and experiencing Arab culture. IH Saudi Arabia aims to become a leading center for Arabic language education, cultural immersion, and international exchange programs.",
      items: [
        "Modern Standard Arabic",
        "Conversational Arabic",
        "Gulf Arabic",
        "Arabic for Professionals",
        "Arabic & Islamic Studies",
        "Cultural Immersion Programs"
      ],
      note: "Available face-to-face and online.",
      flag: "/flags/sa.svg",
      image: "/lang_arabic.png"
    },
    french: {
      title: "French Language Programs",
      desc: "Develop practical communication skills in one of the world's most influential international languages.",
      subtitle: "Programs may support:",
      items: [
        "Travel & Tourism",
        "Study Abroad Programs",
        "Business Communication",
        "Academic Preparation",
        "Cultural Enrichment"
      ],
      note: "Available through IH Saudi Arabia and selected international partners.",
      flag: "/flags/fr.svg",
      image: "/lang_french.png"
    },
    spanish: {
      title: "Spanish Language Programs",
      desc: "Spanish is one of the most widely spoken languages in the world and opens doors to opportunities across Europe, Latin America, and beyond.",
      subtitle: "Programs focus on:",
      items: [
        "Communication Skills",
        "Travel & Culture",
        "Academic Preparation",
        "Professional Development"
      ],
      note: "Learners may access study abroad opportunities and immersion experiences through IH Spain.",
      flag: "/flags/es.svg",
      image: "/lang_spanish.png"
    },
    chinese: {
      title: "Chinese Language Programs",
      desc: "As China's role in global business and international trade continues to expand, Chinese language skills are becoming increasingly valuable.",
      subtitle: "Mandarin Chinese learning for students and professionals seeking to engage with global economies.",
      items: [
        "Beginner Chinese",
        "Business Chinese",
        "Chinese for Professionals",
        "Cultural Awareness Programs"
      ],
      note: "Practical Chinese communication skills tailored for career and corporate opportunities.",
      flag: "/flags/cn.svg",
      image: "/lang_chinese.png"
    },
    german: {
      title: "German Language Programs",
      desc: "Master German to access Europe's largest industrial economy, engineering careers, and academic excellence.",
      subtitle: "Programs focus on business, technology, and study in Germany.",
      items: [
        "Conversational German",
        "German for Engineering",
        "Academic Prep (TestDaF)",
        "German Business Culture"
      ],
      note: "Unlock academic and industrial opportunities in Germany and Central Europe.",
      flag: "/flags/de.svg",
      image: "/lang_german.png"
    },
    italian: {
      title: "Italian Language Programs",
      desc: "Immerse yourself in the language of design, art, culinary excellence, and rich European heritage.",
      subtitle: "Programs explore language through culture, travel, and style.",
      items: [
        "Conversational Italian",
        "Italian for Art & Design",
        "Travel & Tourism Italian",
        "Cultural Awareness"
      ],
      note: "Ideal for culinary, design, art students, and travelers.",
      flag: "/flags/it.svg",
      image: "/lang_italian.png"
    },
    turkish: {
      title: "Turkish Language Programs",
      desc: "Learn Turkish to explore tourism, trade, and cultural connection across the Mediterranean and regional hubs.",
      subtitle: "Practical communication skills for tourism and business.",
      items: [
        "Beginner Turkish",
        "Conversational Turkish",
        "Business Turkish",
        "Turkish Cultural Studies"
      ],
      note: "Connect with regional trade hubs and tourist destinations.",
      flag: "/flags/tr.svg",
      image: "/lang_turkish.png"
    },
    japanese: {
      title: "Japanese Language Programs",
      desc: "Discover Japanese language and culture, unlocking paths in technology, gaming, and creative industries.",
      subtitle: "Language programs matching technology and rich culture.",
      items: [
        "Conversational Japanese",
        "Business Japanese",
        "Japanese Culture & Etiquette",
        "JLPT Exam Preparation"
      ],
      note: "Essential for technology, automotive, and creative media careers.",
      flag: "/flags/jp.svg",
      image: "/lang_japanese.png"
    },
    korean: {
      title: "Korean Language Programs",
      desc: "Engage with the dynamic Korean language, fueled by global trends in technology, media, and commerce.",
      subtitle: "Modern Korean language training for professionals and enthusiasts.",
      items: [
        "Conversational Korean",
        "Korean for Business",
        "Media & Pop Culture Korean",
        "TOPIK Exam Preparation"
      ],
      note: "Join the wave of global technology, commerce, and media trends.",
      flag: "/flags/kr.svg",
      image: "/lang_korean.png"
    },
    cultural: {
      title: "Cultural Learning & International Experiences",
      desc: "Language learning becomes more meaningful when combined with cultural understanding. IH Saudi Arabia aims to promote intercultural dialogue through:",
      items: [
        "Cultural Workshops",
        "International Exchange Opportunities",
        "Study Abroad Programs",
        "Language Immersion Experiences",
        "Educational Events",
        "International Partnerships"
      ]
    },
    flexible: {
      title: "Flexible Learning Options",
      desc: "Programs may be available through:",
      items: [
        "Face-to-Face Classes",
        "Live Online Classes",
        "Hybrid Learning Solutions",
        "Private Tuition",
        "Small Group Courses",
        "Corporate Programs"
      ]
    },
    cta: {
      title: "Begin Your Language Learning Journey",
      desc: "Whether you wish to learn Arabic, Spanish, French, Chinese, or another world language, IH Saudi Arabia can help you connect with new cultures, broaden your horizons, and develop valuable international communication skills.",
      subtitle: "Languages May Include:",
      items: [
        "Arabic", "French", "Spanish", "Chinese", "German", "Italian", "Turkish", "Japanese", "Korean"
      ],
      action: "Speak with our team to explore available language programs and cultural learning opportunities.",
      btn: "Contact Us"
    }
  },
  ar: {
    hero: {
      title: "برامج اللغات والثقافة",
      tagline: "ربط الشعوب واللغات والثقافات",
      badge: "حقيبة اللغات والثقافة",
    },
    intro: {
      title: "فهم الشعوب واللغات والثقافات",
      text1: "في معهد الهاوس الدولي السعودية، نؤمن بأن تعلم اللغة يتجاوز مجرد التواصل؛ بل هو وسيلة لفهم الشعوب والثقافات والعالم من حولنا.",
      text2: "انطلاقاً من الخبرة العالمية لشبكة معاهد الهاوس الدولي، يقدم معهد الهاوس الدولي السعودية فرصاً لتعلم اللغات مصممة لدعم النمو الشخصي، والتطور الأكاديمي، والنجاح المهني، والتفاهم بين الثقافات.",
      text3: "سواء كنت ترغب في تعلم اللغة العربية، أو الفرنسية، أو الإسبانية، أو الصينية، أو لغات عالمية أخرى، فإن برامجنا تمنحك مهارات تواصل عملية وتفاعلاً ثقافياً قيماً."
    },
    arabic: {
      title: "الدراسات الثقافية واللغة العربية",
      subtitle: "اكتشف لغة وثقافة العالم العربي",
      desc: "بصفتها الموطن التاريخي للغة العربية وقلب العالم الإسلامي، توفر المملكة العربية السعودية بيئة فريدة لتعلم العربية وتجربة الثقافة العربية الأصيلة. يهدف معهد الهاوس الدولي السعودية إلى أن يصبح مركزاً رائداً لتعليم اللغة العربية، والاندماج الثقافي، وبرامج التبادل الدولي.",
      items: [
        "العربية الفصحى الحديثة",
        "العربية للمحادثة",
        "اللهجة الخليجية",
        "العربية للمهنيين",
        "الدراسات العربية والإسلامية",
        "برامج الاندماج الثقافي"
      ],
      note: "متاحة حضورياً وعبر الإنترنت.",
      flag: "/flags/sa.svg",
      image: "/lang_arabic.png"
    },
    french: {
      title: "برامج اللغة الفرنسية",
      desc: "طوّر مهارات تواصل عملية في واحدة من أكثر اللغات الدولية تأثيراً في العالم.",
      subtitle: "قد تدعم البرامج:",
      items: [
        "السفر والسياحة",
        "برامج الدراسة في الخارج",
        "التواصل في مجال الأعمال",
        "الإعداد الأكاديمي",
        "الإثراء الثقافي"
      ],
      note: "متاحة من خلال معهد الهاوس الدولي السعودية وشركاء دوليين محددين.",
      flag: "/flags/fr.svg",
      image: "/lang_french.png"
    },
    spanish: {
      title: "برامج اللغة الإسبانية",
      desc: "تعد اللغة الإسبانية من أكثر اللغات انتشاراً وتحدثاً في العالم، وتفتح لك الأبواب لفرص واعدة عبر أوروبا وأمريكا اللاتينية وما وراءها.",
      subtitle: "تركز البرامج على:",
      items: [
        "مهارات التواصل",
        "السفر والثقافة",
        "الإعداد الأكاديمي",
        "التطوير المهني"
      ],
      note: "يمكن للمتعلمين أيضاً الوصول إلى فرص الدراسة في الخارج وتجارب المعايشة من خلال شركائنا في إسبانيا.",
      flag: "/flags/es.svg",
      image: "/lang_spanish.png"
    },
    chinese: {
      title: "برامج اللغة الصينية",
      desc: "مع استمرار توسع دور الصين في قطاع الأعمال العالمي والتجارة الدولية، تزداد قيمة مهارات اللغة الصينية يوماً بعد يوم.",
      subtitle: "تعليم لغة صينية (ماندرين) للطلاب والمهنيين الذين يتطلعون للتفاعل مع الاقتصادات العالمية.",
      items: [
        "الصينية للمبتدئين",
        "الصينية للأعمال",
        "الصينية للمهنيين",
        "برامج الوعي الثقافي"
      ],
      note: "مهارات تواصل صينية عملية مصممة لفرص العمل والشركات.",
      flag: "/flags/cn.svg",
      image: "/lang_chinese.png"
    },
    german: {
      title: "برامج اللغة الألمانية",
      desc: "أتقن الألمانية للوصول إلى أكبر اقتصاد صناعي في أوروبا، والوظائف الهندسية، والتميز الأكاديمي.",
      subtitle: "برامج تركز على الأعمال والتكنولوجيا والدراسة في ألمانيا.",
      items: [
        "الألمانية للمحادثة",
        "الألمانية للهندسة",
        "الإعداد الأكاديمي (TestDaF)",
        "ثقافة الأعمال الألمانية"
      ],
      note: "افتح فرصاً أكاديمية وصناعية في ألمانيا ووسط أوروبا.",
      flag: "/flags/de.svg",
      image: "/lang_german.png"
    },
    italian: {
      title: "برامج اللغة الإيطالية",
      desc: "انغمس في لغة التصميم والفن والطهي الإيطالي العريق والتراث الأوروبي الغني.",
      subtitle: "تستكشف البرامج اللغة من خلال الثقافة والسفر والأناقة.",
      items: [
        "الإيطالية للمحادثة",
        "الإيطالية للفن والتصميم",
        "الإيطالية للسياحة والسفر",
        "الوعي الثقافي"
      ],
      note: "مثالية لطلاب الفنون والتصميم والطهي والمسافرين.",
      flag: "/flags/it.svg",
      image: "/lang_italian.png"
    },
    turkish: {
      title: "برامج اللغة التركية",
      desc: "تعلم التركية لاستكشاف فرص السياحة والتجارة والروابط الثقافية عبر البحر الأبيض المتوسط والمنطقة.",
      subtitle: "مهارات تواصل عملية للسياحة والأعمال.",
      items: [
        "التركية للمبتدئين",
        "التركية للمحادثة",
        "التركية للأعمال",
        "دراسات الثقافة التركية"
      ],
      note: "تواصل مع مراكز التجارة الإقليمية والوجهات السياحية.",
      flag: "/flags/tr.svg",
      image: "/lang_turkish.png"
    },
    japanese: {
      title: "برامج اللغة اليابانية",
      desc: "اكتشف اللغة والثقافة اليابانية، وافتح مسارات جديدة في التكنولوجيا والألعاب والصناعات الإبداعية.",
      subtitle: "برامج لغوية تتوافق مع التكنولوجيا والثقافة الغنية.",
      items: [
        "اليابانية للمحادثة",
        "اليابانية للأعمال",
        "الثقافة والآداب اليابانية",
        "التحضير لاختبار JLPT"
      ],
      note: "أساسية للوظائف في مجالات التكنولوجيا والسيارات والإعلام الإبداعي.",
      flag: "/flags/jp.svg",
      image: "/lang_japanese.png"
    },
    korean: {
      title: "برامج اللغة الكورية",
      desc: "تفاعل مع اللغة الكورية الحيوية، المدفوعة بالتوجهات العالمية في التكنولوجيا والإعلام والتجارة.",
      subtitle: "تدريب حديث في اللغة الكورية للمهنيين والهواة.",
      items: [
        "الكورية للمحادثة",
        "الكورية للأعمال",
        "الكورية للإعلام والثقافة الشعبية",
        "التحضير لاختبار TOPIK"
      ],
      note: "انضم إلى موجة التكنولوجيا العالمية والتجارة والتوجهات الإعلامية.",
      flag: "/flags/kr.svg",
      image: "/lang_korean.png"
    },
    cultural: {
      title: "التعلم الثقافي والتجارب الدولية",
      desc: "يصبح تعلم اللغة أكثر قيمة وتأثيراً عندما يقترن بالفهم العميق للثقافة. يهدف معهد الهاوس الدولي السعودية إلى تعزيز الحوار بين الثقافات من خلال:",
      items: [
        "ورش العمل الثقافية",
        "فرص التبادل الدولي",
        "برامج الدراسة في الخارج",
        "تجارب المعايشة والانغماس اللغوي",
        "الفعاليات التعليمية",
        "الشراكات الدولية"
      ]
    },
    flexible: {
      title: "خيارات تعليمية مرنة",
      desc: "يمكن تقديم البرامج من خلال:",
      items: [
        "حصص حضورية (وجهاً لوجه)",
        "حصص تفاعلية مباشرة عبر الإنترنت",
        "حلول التعليم الهجين",
        "الدروس الخصوصية (فردية)",
        "دورات المجموعات الصغيرة",
        "برامج مخصصة للشركات"
      ]
    },
    cta: {
      title: "ابدأ رحلة تعلم اللغة اليوم",
      desc: "سواء كنت ترغب في تعلم اللغة العربية، أو الإسبانية، أو الفرنسية، أو الصينية، أو أي لغة عالمية أخرى، فإن معهد الهاوس الدولي السعودية يساعدك على التواصل مع ثقافات جديدة وتوسيع آفاقك وتطوير مهارات تواصل دولية قيمة.",
      subtitle: "قد تشمل اللغات:",
      items: [
        "العربية", "الفرنسية", "الإسبانية", "الصينية", "الألمانية", "الإيطالية", "التركية", "اليابانية", "الكورية"
      ],
      action: "تحدث مع فريقنا اليوم لاستكشاف برامج اللغات المتاحة وفرص التعلم الثقافي.",
      btn: "تواصل معنا"
    }
  }
};
export function LearnArabicView({ lang }: { lang: string }) {
  const d = arabicData[lang as "en" | "ar"] || arabicData.en;

  const flagMapping = [
    "/flags/sa.svg",
    "/flags/fr.svg",
    "/flags/es.svg",
    "/flags/cn.svg",
    "/flags/de.svg",
    "/flags/it.svg",
    "/flags/tr.svg",
    "/flags/jp.svg",
    "/flags/kr.svg"
  ];

  const languagesList = [
    { key: "arabic", langKey: "arabic" },
    { key: "french", langKey: "french" },
    { key: "spanish", langKey: "spanish" },
    { key: "chinese", langKey: "chinese" },
    { key: "german", langKey: "german" },
    { key: "italian", langKey: "italian" },
    { key: "turkish", langKey: "turkish" },
    { key: "japanese", langKey: "japanese" },
    { key: "korean", langKey: "korean" }
  ];

  const getCardTheme = (idx: number) => {
    const cycleIndex = idx % 4;
    if (cycleIndex === 0) {
      const isArabic = idx === 0;
      return {
        bg: "bg-white text-slate-800 border-x border-b border-slate-200",
        accent: isArabic ? "border-t-8 border-t-[#cf1430]" : "border-t-8 border-t-[#002F6C]",
        badge: isArabic ? "text-[#cf1430] bg-red-50" : "text-[#002F6C] bg-blue-50",
        title: "text-[#002F6C]",
        desc: "text-slate-600",
        bulletIcon: "text-[#00d084]",
        note: "text-slate-500 border-slate-100",
        flagBg: "bg-white border-slate-100 text-slate-800"
      };
    } else if (cycleIndex === 1) {
      return {
        bg: "bg-[#00d084] text-white",
        accent: "border-t-8 border-t-white/10",
        badge: "text-[#00d084] bg-white",
        title: "text-white",
        desc: "text-white/90",
        bulletIcon: "text-white",
        note: "text-white/80 border-white/20",
        flagBg: "bg-white/20 border-white/30 text-white"
      };
    } else if (cycleIndex === 2) {
      return {
        bg: "bg-[#fcb900] text-white",
        accent: "border-t-8 border-t-white/10",
        badge: "text-[#fcb900] bg-white",
        title: "text-white",
        desc: "text-white/95",
        bulletIcon: "text-white",
        note: "text-white/80 border-white/20",
        flagBg: "bg-white/20 border-white/30 text-white"
      };
    } else {
      return {
        bg: "bg-[#cf1430] text-white",
        accent: "border-t-8 border-t-white/10",
        badge: "text-[#cf1430] bg-white",
        title: "text-white",
        desc: "text-white/90",
        bulletIcon: "text-white",
        note: "text-white/80 border-white/20",
        flagBg: "bg-white/20 border-white/30 text-white"
      };
    }
  };

  return (
    <div className="pt-[72px]">
      {/* HERO SECTION */}
      <section className="py-24 sm:py-32 relative overflow-hidden group bg-gradient-to-br from-[#002F6C] via-[#0b3c7b] to-[#124d9c]">
        <Image
          src="/arab_education_bg.png"
          alt="Arabic background"
          fill
          className="object-cover object-center opacity-25 group-hover:opacity-40 transition-opacity duration-500 ease-in-out mix-blend-overlay pointer-events-none"
          priority
        />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 -translate-y-32 translate-x-32 bg-white" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 translate-y-16 -translate-x-16 bg-white" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div initial="hidden" animate="visible" variants={fadeUp}>
                <span className="inline-block text-xs font-bold uppercase tracking-wider mb-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white border border-white/30">
                  {d.hero.badge}
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                  {d.hero.title}
                </h1>
                <p className="text-lg sm:text-xl text-white/85 mb-8 max-w-2xl leading-relaxed">
                  {d.hero.tagline}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white font-bold text-sm text-[#002F6C] shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    {lang === "ar" ? "سجل الآن" : "Apply for Courses"} <ArrowRight size={16} className="rtl:rotate-180" />
                  </Link>
                  <a
                    href="tel:+966920000364"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/15 border border-white/30 backdrop-blur-sm font-bold text-sm text-white hover:bg-white/25 hover:scale-105 transition-all duration-300"
                  >
                    <Phone size={16} /> +966 920 000 364
                  </a>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-5 relative flex justify-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="relative w-full max-w-[400px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group-hover:scale-[1.02] transition-transform duration-500"
              >
                <Image
                  src="/card_languages.png"
                  alt="Languages and Cultures"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="text-yellow-400" size={18} />
                    <span className="text-xs font-bold uppercase tracking-wider">{lang === "ar" ? "برامج عالمية" : "World Programs"}</span>
                  </div>
                  <p className="text-sm font-semibold leading-snug">
                    {lang === "ar" ? "تعلم وتواصل وانغمس في ثقافات العالم" : "Learn, connect, and immerse in global cultures."}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <ThemeAccent height="h-2" />

      {/* INTRO TEXT SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <span className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-[#f0f4ff] text-[#002F6C]">
                  {lang === "ar" ? "من نحن" : "WHO WE ARE"}
                </span>
                <h2 className="text-3xl font-extrabold mb-6 text-[#002F6C]">
                  {d.intro.title}
                </h2>
                <p className="text-slate-700 text-lg leading-relaxed font-semibold">
                  {d.intro.text1}
                </p>
              </motion.div>
            </div>
            
            <div className="lg:col-span-7 space-y-6">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-slate-600 space-y-4">
                <p className="text-base leading-relaxed">
                  {d.intro.text2}
                </p>
                <p className="text-base leading-relaxed">
                  {d.intro.text3}
                </p>
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 mt-6">
                  <div className="w-12 h-12 rounded-xl bg-[#002F6C]/10 flex items-center justify-center text-[#002F6C] shrink-0">
                    <Globe size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#002F6C] mb-1">
                      {lang === "ar" ? "رؤية 2030 والتفاهم بين الثقافات" : "Vision 2030 & Intercultural Exchange"}
                    </p>
                    <p className="text-slate-500 text-xs">
                      {lang === "ar" 
                        ? "نحن ندعم التبادل الثقافي وتطوير رأس المال البشري للمملكة عبر اللغات."
                        : "Supporting KSA's global integration and human capital development through languages."}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <ThemeAccent height="h-1.5" pills />

      {/* WORLD LANGUAGES GRID */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-[#f0f4ff] text-[#002F6C]">
              {lang === "ar" ? "برامج اللغات المتاحة" : "Available Language Programs"}
            </motion.span>
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="text-3xl sm:text-4xl font-extrabold text-[#002F6C]">
              {lang === "ar" ? "استكشف لغات العالم" : "Explore World Languages"}
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {languagesList.map((langItem, idx) => {
              const langData = d[langItem.langKey as keyof typeof d] as any;
              if (!langData) return null;
              
              const theme = getCardTheme(idx);
              
              return (
                <motion.div
                  key={langItem.key}
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={idx}
                  className={`relative overflow-hidden rounded-3xl ${theme.bg} ${theme.accent} shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between group/card`}
                >
                  {/* Top Image Section */}
                  <div className="relative h-48 w-full overflow-hidden shrink-0">
                    <Image
                      src={langData.image}
                      alt={langData.title}
                      fill
                      className="object-cover object-center group-hover/card:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
                    
                    {/* Floating Flag Badge */}
                    <div className="absolute top-4 right-4 z-20 w-11 h-11 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-lg border border-white/30 group-hover/card:scale-110 transition-transform duration-300 overflow-hidden">
                      {langData.flag && langData.flag.includes('/') ? (
                        <div className="relative w-full h-full">
                          <Image
                            src={langData.flag}
                            alt="Flag"
                            fill
                            className="object-cover rounded-full"
                          />
                        </div>
                      ) : (
                        <span className="text-2xl">{langData.flag}</span>
                      )}
                    </div>
                  </div>

                  {/* Bottom Text Section */}
                  <div className="p-8 flex-grow flex flex-col justify-between relative z-10">
                    <div>
                      <span className={`inline-block text-2xs font-extrabold uppercase tracking-widest mb-3 px-2 py-0.5 rounded ${theme.badge}`}>
                        {lang === "ar" ? "برنامج معتمد" : "Accredited Program"}
                      </span>
                      <h3 className={`text-2xl font-extrabold mb-1.5 ${theme.title}`}>
                        {langData.title}
                      </h3>
                      {langData.subtitle && (
                        <p className="text-xs italic mb-4 font-medium opacity-90">
                          {langData.subtitle}
                        </p>
                      )}
                      <p className={`text-sm leading-relaxed mb-6 ${theme.desc}`}>
                        {langData.desc}
                      </p>
                      <ul className="space-y-2.5 mb-6">
                        {langData.items.map((item: string, itemIdx: number) => (
                          <li key={itemIdx} className="flex items-start gap-2 text-sm leading-snug">
                            <CheckCircle className={`${theme.bulletIcon} shrink-0 mt-0.5`} size={16} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {langData.note && (
                      <div className={`pt-4 border-t text-xs font-semibold leading-relaxed ${theme.note}`}>
                        {langData.note}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <ThemeAccent height="h-1.5" />

      {/* CULTURAL EXPERIENCES & FLEXIBLE OPTIONS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Cultural Learning column */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="relative overflow-hidden p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow duration-300 group/cultural"
            >
              <Image
                src="/about_classroom.png"
                alt="Cultural experiences"
                fill
                className="object-cover object-center opacity-[0.04] group-hover/cultural:opacity-[0.09] transition-opacity duration-500 pointer-events-none z-0"
              />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#cf1430] flex items-center justify-center mb-6">
                  <Sparkles size={24} />
                </div>
                <h3 className="text-2xl font-extrabold text-[#002F6C] mb-4">
                  {d.cultural.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {d.cultural.desc}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {d.cultural.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <CheckCircle className="text-[#cf1430] shrink-0 mt-0.5" size={16} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Flexible Learning Options column */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
              className="relative overflow-hidden p-8 sm:p-10 rounded-3xl bg-[#002F6C] text-white flex flex-col justify-between hover:shadow-lg transition-all duration-300 group/flexible"
            >
              <Image
                src="/learn_hybrid.png"
                alt="Flexible options"
                fill
                className="object-cover object-center opacity-20 group-hover/flexible:opacity-35 transition-opacity duration-500 pointer-events-none z-0 mix-blend-overlay"
              />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/10 text-white flex items-center justify-center mb-6">
                  <Clock size={24} />
                </div>
                <h3 className="text-2xl font-extrabold mb-4">
                  {d.flexible.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed mb-6">
                  {d.flexible.desc}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {d.flexible.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-white/90">
                      <CheckCircle className="text-[#00d084] shrink-0 mt-0.5" size={16} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-br from-[#002F6C] via-[#0b3c7b] to-[#124d9c] relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5 -translate-y-32 translate-x-32 bg-white" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-5 translate-y-16 -translate-x-16 bg-white" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="inline-block text-xs font-bold uppercase tracking-wider mb-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white border border-white/30">
              {d.cta.subtitle}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 leading-tight">
              {d.cta.title}
            </h2>
            <p className="text-white/80 mb-8 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              {d.cta.desc}
            </p>
            
            {/* Language Badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-10 max-w-3xl mx-auto">
              {d.cta.items.map((item, idx) => {
                const flagSrc = flagMapping[idx];
                return (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-sm text-white text-sm font-semibold border border-white/20 hover:bg-white/15 transition-all duration-300 shadow-sm animate-fade-in"
                  >
                    {flagSrc && (
                      <div className="relative w-5 h-5 rounded-full overflow-hidden shrink-0 border border-white/25">
                        <Image
                          src={flagSrc}
                          alt=""
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <span>{item}</span>
                  </span>
                );
              })}
            </div>

            <p className="text-white/90 text-sm font-bold mb-6">
              {d.cta.action}
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white font-bold text-sm text-[#002F6C] shadow-xl hover:scale-105 transition-all duration-300"
              >
                {d.cta.btn} <ArrowRight size={16} className="rtl:rotate-180" />
              </Link>
              <a
                href="tel:+966920000364"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/15 border border-white/30 backdrop-blur-sm font-bold text-sm text-white hover:bg-white/25 hover:scale-105 transition-all duration-300"
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
export const youngData = {
  en: {
    hero: {
      title: "Young Learners",
      tagline: "extended assistance with Saudi Arabia’s official national curriculum.",
      badge: "School Curriculum Support",
    },
    intro: {
      title: "Online English support for Grades 5-12",
      text1: "International House Saudi Arabia offers parents the opportunity to register their children for online English classes that offer extended assistance with Saudi Arabia’s official national curriculum of English language.",
      text2: "Online classes for Young Learners from Grades 5-12 are taught by expert certified teachers and native speakers at flexible times from 3pm to 7pm.",
      text3: "Flexible programs allow students to study for as long as they need, from 3 to 8 hours per week, using the same course materials as those taught in the Saudi school system."
    },
    objectives: {
      title: "Program Objectives",
      subtitle: "Empowering children to excel in their academic English goals:",
      items: [
        "Review and consolidate the Saudi school system’s English language curriculum to guarantee exam success.",
        "Develop practical English skills through further practice.",
        "Review and practice in context the Saudi national curriculum’s vocabulary base.",
        "Practice the Saudi national curriculum’s grammar syllabus through conversation, games, activities, and language tasks.",
        "Use English collaboratively in online English classes in a friendly and supportive atmosphere.",
        "Provide individual attention for your child."
      ]
    },
    facts: {
      title: "Did You Know?",
      items: [
        "Most professional jobs in Saudi Arabia require sophisticated English language skills.",
        "As the Saudi economy diversifies under Vision 2030, English language skills are going to be even more important for those young people entering the job market.",
        "The earlier a school student learns English, the higher are his/her chances of long-term success as a language user.",
        "Now, wherever you are in Saudi Arabia, and from the comfort of your own home, you can put your child on the path to language learning success with IH Saudi Arabia – a proud member of one of the most prestigious language teaching organizations in the world.",
        "Saudi Arabia’s educational system is excellent and continues to make great progress under Vision 2030."
      ]
    },
    comparison: {
      title: "Why Choose IH Online Over Traditional Tutors?",
      tutors: {
        title: "Traditional Unregulated Tutors",
        items: [
          "Very expensive with private teachers demanding as much as SR150 per hour.",
          "Complete lack of quality control.",
          "Parents have very little choice as they rely on a very limited number of locally available English teachers.",
          "Students study alone with little opportunity to learn in a group.",
          "There is no academic organization or supervision."
        ]
      },
      ih: {
        title: "The IH Online Learning Solution",
        items: [
          "Complete online English language learning system with virtual classes for Grades 5-12.",
          "Higher quality training at much lower cost as compared to private classes taught in Saudi homes.",
          "Dozens of qualified male & female teachers at extremely affordable prices, giving parents wider choice.",
          "Teachers registered from Egypt, Jordan, Tunisia, India, Pakistan, and the Philippines holding international qualifications.",
          "Option to register for US, UK, Canadian, or Australian native speakers to empower your children to meet school goals."
        ]
      }
    },
    benefits: {
      title: "Benefits of the Program",
      items: [
        { title: "Communicative Learning", desc: "Young Learners study communicatively so that they learn naturally." },
        { title: "Practical Skills Focus", desc: "There is less focus on rote grammar and more focus on practical skills." },
        { title: "Curriculum Alignment", desc: "The training content is the same as that offered in Saudi schools." },
        { title: "Exam Preparation", desc: "There is a strong focus on how to pass exams successfully." },
        { title: "Small Group Sizes", desc: "Groups are small with just 8 students in an online virtual group." },
        { title: "Continuous Support", desc: "The course supports learning in schools at every single step." }
      ]
    },
    steps: {
      title: "Steps to Register Your Child",
      list: [
        { step: "Step 1", desc: "Contact International House Saudi Arabia for further details." },
        { step: "Step 2", desc: "Your child will take the IH online English language placement test." },
        { step: "Step 3", desc: "As a parent, log on to the IH online learning platform to select a teacher that you would like." },
        { step: "Step 4", desc: "IH will enroll your child with the teacher that you have chosen in an online group." },
        { step: "Step 5", desc: "Confirm the number of hours required, course duration, and payment." },
        { step: "Step 6", desc: "Begin online classes." }
      ]
    }
  },
  ar: {
    hero: {
      title: "المتعلمون الصغار",
      tagline: "دعم تعليمي مكثف ومساعد للمنهج الدراسي الوطني الرسمي لمدارس المملكة.",
      badge: "دعم المنهج الوطني للمدارس",
    },
    intro: {
      title: "دعم اللغة الإنجليزية عبر الإنترنت من الصف 5-12",
      text1: "تقدم الهاوس الدولي السعودية لأولياء الأمور الفرصة لتسجيل أطفالهم في فصول اللغة الإنجليزية عبر الإنترنت والتي تقدم دعماً إضافياً ومكثفاً للمناهج الوطنية الرسمية لوزارة التعليم.",
      text2: "يتم تدريس الفصول الدراسية عبر الإنترنت للمتعلمين الصغار من الصف الخامس إلى الثاني عشر بواسطة معلمين خبراء معتمدين ومتحدثين أصليين في أوقات مرنة من 3 مساءً إلى 7 مساءً.",
      text3: "تتيح البرامج المرنة للطلاب الدراسة للفترة التي يحتاجونها، من 3 إلى 8 ساعات أسبوعياً، باستخدام المواد والكتب الدراسية نفسها المعتمدة في المدارس السعودية."
    },
    objectives: {
      title: "أهداف البرنامج",
      subtitle: "تمكين الطلاب الصغار من التفوق الأكاديمي واجتياز اختباراتهم المدرسية بنجاح:",
      items: [
        "مراجعة وتثبيت منهج اللغة الإنجليزية المعتمد في المدارس لضمان النجاح الباهر في الامتحانات.",
        "تطوير المهارات اللغوية العملية للمتحدث من خلال التطبيق العملي المستمر.",
        "مراجعة وتطبيق المفردات والكلمات الأساسية للمنهج السعودي الوطني في سياقاتها الصحيحة.",
        "التدريب على قواعد المنهج الدراسي الوطني من خلال المحادثات، والألعاب، والأنشطة اللغوية الممتعة.",
        "استخدام الإنجليزية بشكل تعاوني في فصول افتراضية تفاعلية ودية وداعمة.",
        "تقديم رعاية واهتمام فردي مخصص لطفلك."
      ]
    },
    facts: {
      title: "هل تعلم؟",
      items: [
        "تتطلب معظم الوظائف المهنية والمستقبلية في المملكة مهارات إنجليزية متطورة وقوية.",
        "مع تنوع الاقتصاد السعودي تحت مظلة رؤية 2030، ستصبح مهارات الإنجليزية أكثر أهمية للشباب الداخلين لسوق العمل.",
        "كلما بدأ الطالب في تعلم اللغة الإنجليزية مبكراً، زادت فرصه في التفوق الدراسي واستخدام اللغة بطلاقة مستقبلاً.",
        "الآن، أينما كنت في المملكة ومن راحة منزلك، يمكنك وضع طفلك على طريق النجاح لتعلم اللغة مع الهاوس الدولي السعودية.",
        "يتميز النظام التعليمي في المملكة العربية السعودية بالتميز ويستمر في تحقيق تقدم كبير في ظل رؤية 2030."
      ]
    },
    comparison: {
      title: "لماذا تختار منصة الهاوس الدولي بدلاً من الدروس الخصوصية المنزلية؟",
      tutors: {
        title: "المعلمون الخصوصيون غير الخاضعين للرقابة",
        items: [
          "مكلفون للغاية مع مطالبة بعض المعلمين بمبالغ تصل إلى 150 ريالاً في الساعة.",
          "غياب تام للرقابة على جودة التدريس والمنهج.",
          "خيارات أولياء الأمور محدودة لارتكازهم على عدد قليل من المعلمين المتاحين محلياً.",
          "يدرس الطالب بمفرده تماماً دون فرصة للتفاعل والمشاركة مع مجموعة من أقرانه.",
          "عدم وجود إشراف أكاديمي أو متابعة من مؤسسة تعليمية."
        ]
      },
      ih: {
        title: "حل التعلم الإلكتروني من الهاوس الدولي",
        items: [
          "نظام تعليمي متكامل ومبسط عبر الإنترنت مع فصول افتراضية من الصف 5 إلى 12.",
          "جودة تدريب أعلى بكثير وبتكلفة منخفضة وميسرة مقارنة بالدروس الخصوصية المنزلية.",
          "عشرات المعلمين والمعلمات المؤهلين بأسعار مناسبة تتيح لأولياء الأمور خيارات أوسع.",
          "معلمون مسجلون وموثقون من مصر، الأردن، تونس، الهند، باكستان، والفلبين يحملون مؤهلات دولية.",
          "إمكانية اختيار معلمين متحدثين أصليين (أمريكان، بريطانيين، كنديين، أستراليين) لضمان تفوق طفلك."
        ]
      }
    },
    benefits: {
      title: "مزايا البرنامج الأكاديمية",
      items: [
        { title: "التعلم التواصل التفاعلي", desc: "يتعلم الصغار بأسلوب تواصل نشط يتيح لهم اكتساب اللغة بشكل طبيعي وسلس." },
        { title: "التركيز العملي المباشر", desc: "تركيز أقل على القواعد النظرية الجافة وأكبر على المهارات العملية للتحدث والكتابة." },
        { title: "التوافق مع المنهج المدرسي", desc: "محتوى التدريب متطابق بالكامل مع ما يتم تدريسه في المدارس السعودية." },
        { title: "التدريب على الامتحانات", desc: "تركيز مكثف على تدريب الطلاب وتجهيزهم لاجتياز الاختبارات المدرسية بنجاح وتفوق." },
        { title: "مجموعات صغيرة تفاعلية", desc: "الفصول الافتراضية صغيرة ومحدودة بحد أقصى 8 طلاب فقط لضمان التركيز." },
        { title: "دعم مدرسي متكامل", desc: "تدعم دوراتنا التحصيل المدرسي للطالب في كل خطوة ومرحلة دراسية." }
      ]
    },
    steps: {
      title: "خطوات تسجيل طفلك معنا",
      list: [
        { step: "الخطوة 1", desc: "تواصل مع الهاوس الدولي السعودية للحصول على مزيد من التفاصيل والخيارات المتاحة." },
        { step: "الخطوة 2", desc: "يخضع طفلك لاختبار تحديد مستوى اللغة الإنجليزية عبر الإنترنت المخصص للصغار." },
        { step: "الخطوة 3", desc: "كولي أمر، سجل الدخول إلى المنصة لاختيار وتحديد المعلم أو المعلمة الأنسب لطفلك." },
        { step: "الخطوة 4", desc: "تدرج الهاوس الدولي طفلك مع المعلم المختار في مجموعة افتراضية نشطة." },
        { step: "الخطوة 5", desc: "تأكيد عدد الساعات المطلوبة، مدة البرنامج، وإتمام عملية الدفع والموافقة." },
        { step: "الخطوة 6", desc: "بدء فصول طفلك التفاعلية مباشرة عبر الإنترنت ومتابعة تقدمه." }
      ]
    }
  }
};

export function YoungLearnersView({ lang }: { lang: string }) {
  const d = youngData[lang as "en" | "ar"] || youngData.en;

  return (
    <div className="pt-[72px]">
      {/* HERO SECTION */}
      <section className="py-24 sm:py-32 relative overflow-hidden group bg-gradient-to-br from-[#e85d4a] via-[#db4b38] to-[#c93b28]">
        <Image
          src="/arab_education_bg.png"
          alt="Young learners"
          fill
          className="object-cover object-center opacity-25 group-hover:opacity-40 transition-opacity duration-500 ease-in-out mix-blend-overlay pointer-events-none"
          priority
        />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 -translate-y-32 translate-x-32 bg-white" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 translate-y-16 -translate-x-16 bg-white" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-block text-xs font-bold uppercase tracking-wider mb-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white border border-white/30">
              {d.hero.badge}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              {d.hero.title}
            </h1>
            <p className="text-lg sm:text-xl text-white/85 mb-8 max-w-2xl leading-relaxed">
              {d.hero.tagline}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white font-bold text-sm text-[#e85d4a] shadow-lg hover:scale-105 transition-all duration-300"
              >
                {lang === "ar" ? "احصل على تفاصيل التسجيل" : "Enquire for Child"} <ArrowRight size={16} className="rtl:rotate-180" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <ThemeAccent height="h-2" />

      {/* INTRO AND OBJECTIVES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <span className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-rose-50 text-[#e85d4a]">
                  {lang === "ar" ? "دعم وتأسيس" : "Assistance & Support"}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#e85d4a] leading-tight mb-4">
                  {d.intro.title}
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{d.intro.text1}</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-4 font-semibold">{d.intro.text2}</p>
                <p className="text-slate-500 text-xs leading-relaxed italic">{d.intro.text3}</p>
              </motion.div>
            </div>

            <div className="lg:col-span-7">
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm"
              >
                <h3 className="font-extrabold text-lg text-slate-800 mb-2">{d.objectives.title}</h3>
                <p className="text-slate-500 text-xs sm:text-sm mb-6">{d.objectives.subtitle}</p>
                <div className="space-y-4">
                  {d.objectives.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-slate-700 text-xs sm:text-sm">
                      <CheckCircle size={18} className="text-[#e85d4a] shrink-0 mt-0.5" />
                      <p className="leading-relaxed font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <ThemeAccent height="h-1.5" pills />

      {/* TUTORS VS IH SYSTEM COMPARISON */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-[#e85d4a]">{d.comparison.title}</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Tutors */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="p-8 rounded-3xl bg-white border border-rose-100/50 shadow-sm shadow-ih-coral/10"
            >
              <h3 className="text-xl font-extrabold text-slate-800 mb-6 flex items-center gap-2">
                <AlertCircle size={22} className="text-[#e85d4a]" />
                {d.comparison.tutors.title}
              </h3>
              <div className="space-y-4">
                {d.comparison.tutors.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-slate-600 text-xs sm:text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e85d4a] mt-2 shrink-0" />
                    <p className="leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* IH */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
              className="p-8 rounded-3xl bg-white border border-emerald-100/50 shadow-md shadow-ih-blue/10"
            >
              <h3 className="text-xl font-extrabold text-[#1fa968] mb-6 flex items-center gap-2">
                <CheckCircle size={22} className="text-[#1fa968]" />
                {d.comparison.ih.title}
              </h3>
              <div className="space-y-4">
                {d.comparison.ih.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-slate-700 text-xs sm:text-sm font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1fa968] mt-2 shrink-0" />
                    <p className="leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DID YOU KNOW FACTS PANEL */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm"
          >
            <h3 className="font-extrabold text-xl text-[#e85d4a] mb-6 flex items-center gap-2">
              <Sparkles size={20} className="text-[#e85d4a]" /> {d.facts.title}
            </h3>
            <div className="space-y-4">
              {d.facts.items.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-slate-700 text-xs sm:text-sm">
                  <span className="w-5 h-5 rounded-full bg-rose-100 text-[#e85d4a] flex items-center justify-center font-bold shrink-0 text-2xs mt-0.5">{idx + 1}</span>
                  <p className="leading-relaxed font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <ThemeAccent height="h-1.5" />

      {/* PROGRAM BENEFITS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-[#e85d4a]">{d.benefits.title}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {d.benefits.items.map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={idx}
                className="p-8 rounded-3xl border border-slate-100 bg-white shadow-sm hover:shadow-ih-coral transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#e85d4a] flex items-center justify-center font-bold mb-5">
                  <Award size={20} />
                </div>
                <h4 className="font-extrabold text-slate-800 text-base mb-3 leading-snug">{item.title}</h4>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE STEPS */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-[#e85d4a]">{d.steps.title}</h2>
          </div>

          <div className="space-y-4">
            {d.steps.list.map((step, idx) => (
              <motion.div
                key={idx}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={idx}
                className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 shadow-ih-soft hover:shadow-ih-coral transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#e85d4a] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  {idx + 1}
                </div>
                <div>
                  <span className="text-xs font-bold text-[#e85d4a] uppercase tracking-wide block mb-0.5">{step.step}</span>
                  <p className="text-slate-700 text-xs sm:text-sm font-semibold">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-br from-[#e85d4a] via-[#db4b38] to-[#c93b28]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl font-extrabold text-white mb-4">
              {lang === "ar" ? "امنح طفلك التميز الدراسي والدعم اللغوي" : "Equip Your Child for Language Success"}
            </h2>
            <p className="text-white/80 mb-10 text-base sm:text-lg">
              {lang === "ar"
                ? "تواصل مع مستشاري التعليم لتحديد المستوى واختيار المعلم الأنسب لبدء الفصول الافتراضية."
                : "Contact our coordinators to arrange placement testing, browse accredited teachers, and confirm schedules."}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white font-bold text-sm text-[#e85d4a] shadow-xl hover:scale-105 transition-all duration-300"
              >
                {lang === "ar" ? "تواصل مع المنسقين" : "Contact Program Advisors"} <ArrowRight size={16} className="rtl:rotate-180" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

/* ─── 5. ONLINE CLASSES VIEW ─────────────────────────────────────── */
export const onlineClassesData = {
  en: {
    hero: {
      title: "Online / Virtual Classes",
      tagline: "World-class instruction. Anywhere. Anytime.",
      badge: "Virtual School & Blended Learning",
    },
    intro: {
      title: "Convenient Learning with IH Virtual School",
      text1: "Learning English has never been more convenient than with IH’s virtual school. The IH virtual school is open to both companies and the general public.",
      text2: "As training budgets tighten, IH allows our corporate clients to enroll employees on English programs that will not disrupt shift patterns. Quite simply, the benefits are enormous.",
      text3: "There is now no need to arrange gate passes for teachers, organize shift cover, or leave sections undermanned as employees attend English courses in order to qualify for promotion. Why? Because IH Saudi Arabia offers companies the opportunity to learn English with a native speaker instructor at the click of a mouse.",
      text4: "IH’s live group classes bring the immersive experience of collaborative learning with an instructor and fellow students right to you at any time from 7.30am to 9pm – six days a week.",
      text5: "Whether it’s staff located at remote locations, or offshore workers on oil platforms, IH’s virtual school means that distance is no longer a barrier.",
      text6: "Our expert instructors motivate, guide, and empower learners from the moment the class goes live to create real world situations and a genuine need to communicate."
    },
    specs: {
      title: "What Do You Need?",
      items: [
        "A desktop computer, laptop, tablet device, or smartphone.",
        "A stable internet connection.",
        "Webcam and microphone for live interactive participation."
      ],
      tagline: "Saudi Arabia’s educational system is excellent and continues to make great progress under Vision 2030."
    },
    blended: {
      title: "How IH Blended Learning Works for Companies",
      subtitle: "A 360-degree training system designed for modern industry in the Kingdom",
      consultation: "IH offers a FREE consultation. Contact us to learn exactly what online English learning can mean for your company right now on +966 (0)13 814 58 36 ext 32.",
      items: [
        { title: "30 Years in Saudi Industry", desc: "International House is your training partner that has been on the ground, in Saudi Arabia, and embedded in Saudi industry for over 30 years.", shadow: "shadow-ih-blue", color: "#002F6C", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=80" },
        { title: "360 Degree Service Setup", desc: "IH offers a 360 degree service from needs analysis, placement testing, consultation with your HR/TDD specialists, to designing the most efficient online training plan.", shadow: "shadow-ih-blue", color: "#1fa968", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=500&q=80" },
        { title: "Hybrid Orientation Session", desc: "Direct contact orientation session where instructors meet employees to explain goals in person and help learners adjust to live online classes.", shadow: "shadow-ih-purple", color: "#8b3275", img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=500&q=80" },
        { title: "Transition Support Setup", desc: "Full support when issues with technical aptitude, age, or motivation are identified so candidates can adapt, with face-to-face classes remaining a primary option.", shadow: "shadow-ih-coral", color: "#e85d4a", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=500&q=80" },
        { title: "Dhahran & Local Centers Support", desc: "Local instructors on hand in Jubail & Yanbu branches, with all programs subject to ongoing quality control from our business office in Dhahran.", shadow: "shadow-ih-peach", color: "#f09550", img: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=500&q=80" },
        { title: "Custom HR Reporting System", desc: "Attendance and progress reports are key parts of our online LMS, fully customized to the requirements of each corporate client.", shadow: "shadow-ih-yellow", color: "#f6c96a", img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=500&q=80" }
      ]
    },
    offerings: {
      title: "Online Programs & Short Courses Offered",
      list: [
        "Technical English (specific for refineries, utilities, energy, hospitals, government)",
        "Business English and General English programs",
        "Specialist ESP programs",
        "Short courses: Technical Report Writing",
        "Short courses: Meetings and Negotiating",
        "Short courses: Professional Emailing"
      ]
    },
    teachers: {
      title: "IH Online Teachers",
      desc1: "No matter how good the technology — the teachers have to be even better. All IH teachers are highly trained, experienced, and fully familiar with the Saudi learning environment.",
      desc2: "Delivered by instructors who normally work in Saudi industry delivering face-to-face programs, ensuring motivate employees and optimized training time.",
      ladyTitle: "International Lady Instructors Database",
      ladyDesc: "For Young Learners (Ages 7-11) and female students, IH provides a database of international lady instructors. Parents can select based on hourly rates or nationality. Database also includes hundreds of male/female native speakers in the U.S., Canada, and the U.K. ideal for private tuition, exam prep (TOEFL, IELTS), conversation, and General English."
    }
  },
  ar: {
    hero: {
      title: "الفصول الافتراضية وعبر الإنترنت",
      tagline: "تعليم عالمي المستوى. في أي مكان. في أي وقت.",
      badge: "المدرسة الافتراضية والتعلم المدمج",
    },
    intro: {
      title: "تعلم ميسر عبر مدرسة الهاوس الدولي الافتراضية",
      text1: "لم يكن تعلم اللغة الإنجليزية أكثر ملاءمة ومرونة من أي وقت مضى كما هو الحال مع المدرسة الافتراضية للهاوس الدولي، المتاحة للشركات والجمهور العام.",
      text2: "مع تشديد ميزانيات التدريب، تسمح الهاوس الدولي لعملائنا من الشركات بتسجيل الموظفين في برامج إنجليزية لن تؤثر على نوبات العمل بالشركة.",
      text3: "الآن، لا داعي لتنظيم تصاريح الدخول للمعلمين، أو ترتيب تغطية نوبات العمل، أو ترك الأقسام بإنتاجية منخفضة أثناء حضور الموظفين للدورات للترقية. لماذا؟ لأن الهاوس الدولي السعودية تتيح للشركات فرصة تعلم الإنجليزية مع مدرب متحدث أصلي بنقرة زر واحدة.",
      text4: "تجمع فصولنا الجماعية المباشرة تجربة تفاعلية غنية ومثمرة مع مدرب ومجموعة من الزملاء من الساعة 7:30 صباحاً وحتى 9 مساءً - ستة أيام في الأسبوع.",
      text5: "سواء كان الموظفون متواجدين في مواقع نائية بعيدة، أو عمال منصات بحرية على حقول النفط، فإن مدرسة الهاوس الدولي الافتراضية تعني أن البعد والمسافات لم تعد عائقاً.",
      text6: "معلمونا الخبراء يحفزون ويوجهون ويمكنون المتعلمين منذ لحظة بدء الفصل المباشر لخلق بيئات محاكاة حقيقية وتوليد دافع حقيقي للتواصل باللغة."
    },
    specs: {
      title: "ماذا تحتاج للبدء؟",
      items: [
        "جهاز كمبيوتر مكتبي، لابتوب، جهاز تابلت، أو هاتف ذكي.",
        "اتصال إنترنت مستقر وموثوق.",
        "كاميرا ويب وميكروفون للمشاركة التفاعلية في المحاضرة المباشرة."
      ],
      tagline: "النظام التعليمي في المملكة العربية السعودية ممتاز ويستمر في إحراز تقدم رائع تحت مظلة رؤية 2030."
    },
    blended: {
      title: "كيف يعمل التعلم المدمج (Blended) للشركات؟",
      subtitle: "نظام تدريب متكامل 360 درجة مدمج ومصمم لمواكبة متطلبات الصناعة الحديثة",
      consultation: "تقدم الهاوس الدولي استشارة مجانية بالكامل. اتصل بنا لمعرفة ما يمكن أن يقدمه التعلم الإلكتروني لشركتك الآن على +966 (0)13 814 58 36 تحويلة 32.",
      items: [
        { title: "30 عاماً في قلب الصناعة السعودية", desc: "الهاوس الدولي هي شريك التدريب المعتمد المتواجد في الميدان والمندمج في قلب الصناعة والشركات السعودية لأكثر من 30 عاماً.", shadow: "shadow-ih-blue", color: "#002F6C", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=80" },
        { title: "إعداد خدمة 360 درجة شاملة", desc: "نقدم دورة متكاملة تبدأ من تحليل الاحتياجات واختبار تحديد المستوى، والاستشارة الفنية مع مسؤولي الموارد البشرية والتطوير لتصميم الخطة التدريبية المخصصة.", shadow: "shadow-ih-blue", color: "#1fa968", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=500&q=80" },
        { title: "جلسة توجيه حضورية مدمجة", desc: "جلسة حضورية أولية مباشرة يلتقي فيها المدربون بالموظفين لشرح الأهداف اللغوية شخصياً ومساعدة المتعلمين على التأقلم السريع مع الفصول الرقمية.", shadow: "shadow-ih-purple", color: "#8b3275", img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=500&q=80" },
        { title: "دعم التكيف الفني والذهني", desc: "دعم فني ونفسي كامل للمرشحين الذين يواجهون صعوبات تتعلق بالتقنية، السن، أو الحافز لمساعدتهم على التأقلم مع إبقاء التدريب الحضوري خياراً أساسياً.", shadow: "shadow-ih-coral", color: "#e85d4a", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=500&q=80" },
        { title: "دعم فروع الجبيل وينبع ومكتب الظهران", desc: "مدربون محليون متواجدون للدعم الإضافي في فروع الجبيل وينبع، مع خضوع البرامج لرقابة دورية على الجودة من مكتب أعمالنا الرئيسي في الظهران.", shadow: "shadow-ih-peach", color: "#f09550", img: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=500&q=80" },
        { title: "تقارير ونظام إدارة تعلم LMS مخصص", desc: "تعد تقارير الحضور الأكاديمي وتقارير التقدم الفردية جزءاً أساسياً من نظام إدارة التعلم لدينا، والمصمم ليلبي احتياجات كل شركة.", shadow: "shadow-ih-yellow", color: "#f6c96a", img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=500&q=80" }
      ]
    },
    offerings: {
      title: "الدورات والبرامج الإلكترونية القصيرة المتاحة",
      list: [
        "الإنجليزية التقنية (المتخصصة للمصافي، المرافق، الطاقة، القطاع الصحي والحكومي)",
        "الإنجليزية للأعمال وبرامج اللغة الإنجليزية العامة عبر الإنترنت",
        "برامج الإنجليزية لأغراض خاصة (ESP) المتنوعة",
        "دورات قصيرة: كتابة التقارير الفنية بالإنجليزية",
        "دورات قصيرة: إدارة الاجتماعات والتفاوض بالأعمال",
        "دورات قصيرة: كتابة رسائل البريد الإلكتروني المهنية"
      ]
    },
    teachers: {
      title: "معلمو الهاوس الدولي أونلاين",
      desc1: "مهما كانت التقنية متطورة - يجب أن يكون المعلمون أفضل. جميع معلمي الهاوس الدولي مدربون تدريباً عالياً ولديهم خبرة ومعرفة تامة ببيئة التعليم والتدريب في المملكة.",
      desc2: "يتم تقديم البرامج من قبل مدربين يقدمون البرامج الحضورية عادة لقطاعات الصناعة السعودية، لضمان إدارة التعلم وتحفيز الموظفين بكفاءة.",
      ladyTitle: "قاعدة بيانات المعلمات الدوليات المعتمدات",
      ladyDesc: "لتعليم الصغار (أعمار 7-11) والطالبات، توفر الهاوس الدولي قاعدة بيانات معلمات دوليات متميزات مع إمكانية التصفية حسب الأجر أو الجنسية. كما تضم قاعدة البيانات مئات المعلمين والمعلمات المتحدثين الأصليين في أمريكا وكندا وبريطانيا لإعطاء الدروس الخصوصية والتحضير لـ IELTS وتوفل والمحادثة."
    }
  }
};

export function OnlineClassesView({ lang }: { lang: string }) {
  const d = onlineClassesData[lang as "en" | "ar"] || onlineClassesData.en;

  return (
    <div className="pt-[72px]">
      {/* HERO SECTION */}
      <section className="py-24 sm:py-32 relative overflow-hidden group bg-gradient-to-br from-[#f09550] via-[#df8540] to-[#ce7530]">
        <Image
          src="/arab_education_bg.png"
          alt="Online classes"
          fill
          className="object-cover object-center opacity-25 group-hover:opacity-40 transition-opacity duration-500 ease-in-out mix-blend-overlay pointer-events-none"
          priority
        />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 -translate-y-32 translate-x-32 bg-white" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 translate-y-16 -translate-x-16 bg-white" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-block text-xs font-bold uppercase tracking-wider mb-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white border border-white/30">
              {d.hero.badge}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              {d.hero.title}
            </h1>
            <p className="text-lg sm:text-xl text-white/85 mb-8 max-w-2xl leading-relaxed">
              {d.hero.tagline}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white font-bold text-sm text-[#f09550] shadow-lg hover:scale-105 transition-all duration-300"
              >
                {lang === "ar" ? "اطلب استشارة مجانية" : "Free Consultation"} <ArrowRight size={16} className="rtl:rotate-180" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <ThemeAccent height="h-2" />

      {/* VIRTUAL SCHOOL INTRO */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-6 text-slate-700">
            <h2 className="text-3xl font-extrabold text-[#f09550] mb-6">{d.intro.title}</h2>
            <p className="text-base sm:text-lg leading-relaxed font-semibold">{d.intro.text1}</p>
            <p className="text-sm leading-relaxed">{d.intro.text2}</p>
            <p className="text-sm leading-relaxed">{d.intro.text3}</p>
            <div className="p-6 rounded-3xl bg-[#fef5ee] border border-[#f09550]/20 my-8">
              <p className="text-[#ce7530] text-sm leading-relaxed font-medium">{d.intro.text4}</p>
            </div>
            <p className="text-sm leading-relaxed">{d.intro.text5}</p>
            <p className="text-sm leading-relaxed">{d.intro.text6}</p>
          </motion.div>
        </div>
      </section>

      <ThemeAccent height="h-1.5" pills />

      {/* BLENDED LEARNING GRID */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-[#f09550] mb-4">{d.blended.title}</h2>
            <p className="text-slate-500 text-sm mb-6">{d.blended.subtitle}</p>
            <div className="p-4 rounded-2xl bg-orange-50 border border-orange-100 text-xs sm:text-sm font-semibold text-[#ce7530] max-w-2xl mx-auto">
              {d.blended.consultation}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
            {d.blended.items.map((item, idx) => {
              const cardBorder = `color-mix(in srgb, ${item.color} 20%, transparent)`;
              const cardHoverBorder = `color-mix(in srgb, ${item.color} 50%, transparent)`;
              return (
                <motion.div
                  key={idx}
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={idx}
                  className={`relative overflow-hidden p-8 rounded-3xl border bg-white transition-all duration-500 hover:-translate-y-1.5 group/card cursor-pointer ${item.shadow}`}
                  style={{ borderColor: cardBorder }}
                  whileHover={{
                    borderColor: cardHoverBorder,
                    background: `linear-gradient(135deg, ${item.color} 0%, color-mix(in srgb, ${item.color} 75%, #000000) 100%)`
                  }}
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover object-center opacity-[0.35] group-hover/card:opacity-[0.65] transition-opacity duration-500 pointer-events-none z-0 mix-blend-overlay"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/30 transition-colors duration-500 pointer-events-none z-0" />

                  <div className="relative z-10 flex flex-col justify-between h-full min-h-[220px]">
                    <div>
                      <h4 className="font-extrabold text-base text-slate-800 transition-colors duration-500 group-hover/card:text-white leading-snug mb-3">
                        {item.title}
                      </h4>
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed transition-colors duration-500 group-hover/card:text-white/95">
                        {item.desc}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 transition-colors duration-500 group-hover/card:text-white pt-4">
                      <span>{lang === "ar" ? "تفاصيل الخدمة" : "Service Details"}</span>
                      <ChevronRight size={12} className="transition-transform duration-300 group-hover/card:translate-x-1 rtl:rotate-180 rtl:group-hover/card:-translate-x-1" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SPECS AND offerings */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* specs */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm"
            >
              <h3 className="font-extrabold text-xl text-slate-800 mb-6 flex items-center gap-2">
                <Monitor className="text-[#f09550]" /> {d.specs.title}
              </h3>
              <div className="space-y-4 mb-6">
                {d.specs.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-slate-700 text-xs sm:text-sm">
                    <CheckCircle size={18} className="text-[#f09550] shrink-0 mt-0.5" />
                    <p className="leading-relaxed font-semibold">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-slate-400 text-2xs italic leading-relaxed pt-4 border-t border-slate-200">{d.specs.tagline}</p>
            </motion.div>

            {/* offerings */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm"
            >
              <h3 className="font-extrabold text-xl text-[#002F6C] mb-6 flex items-center gap-2">
                <BookOpen className="text-[#002F6C]" /> {d.offerings.title}
              </h3>
              <div className="space-y-3">
                {d.offerings.list.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-slate-600 text-xs sm:text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#002F6C] mt-2 shrink-0" />
                    <p className="leading-relaxed font-semibold">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ThemeAccent height="h-1.5" />

      {/* TEACHERS DATABASE & LADY INSTRUCTORS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <span className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-orange-50 text-[#ce7530]">
                  {lang === "ar" ? "قاعدة بيانات الكوادر التعليمية" : "World-Class Educators"}
                </span>
                <h2 className="text-3xl font-extrabold mb-6 text-[#002F6C]">{d.teachers.title}</h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{d.teachers.desc1}</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-semibold">{d.teachers.desc2}</p>
              </motion.div>
            </div>

            <div className="lg:col-span-5">
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
                className="p-8 rounded-3xl bg-white border border-slate-100 shadow-md shadow-ih-peach/10"
              >
                <h4 className="font-extrabold text-slate-800 text-base mb-3 flex items-center gap-2">
                  <Star size={18} className="text-[#f09550]" />
                  {d.teachers.ladyTitle}
                </h4>
                <p className="text-slate-500 text-xs leading-relaxed">{d.teachers.ladyDesc}</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-br from-[#f09550] via-[#df8540] to-[#ce7530]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl font-extrabold text-white mb-4">
              {lang === "ar" ? "ابدأ الدراسة أونلاين اليوم" : "Empower Your Training Online"}
            </h2>
            <p className="text-white/80 mb-10 text-base sm:text-lg">
              {lang === "ar"
                ? "تواصل معنا اليوم لبدء استشارتك المجانية وتخطيط تدريب فريقك أونلاين."
                : "Get in touch today to schedule your academic needs analysis and select your instructors."}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white font-bold text-sm text-[#f09550] shadow-xl hover:scale-105 transition-all duration-300"
              >
                {lang === "ar" ? "سجل استشارتك الآن" : "Apply for Online Classes"} <ArrowRight size={16} className="rtl:rotate-180" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

/* ─── 6. PLACEMENT TEST VIEW ─────────────────────────────────────── */
export const placementData = {
  en: {
    hero: {
      title: "Placement Test",
      tagline: "Know exactly where your team stands — and where to go next.",
      badge: "Validated Assessment Solutions",
    },
    intro: {
      title: "30+ Years of Corporate Placement Testing",
      text1: "For over 30 years, IH Saudi Arabia has offered comprehensive English language placement testing services for our corporate clients in the Kingdom.",
      text2: "IH Saudi Arabia specializes in providing highly accurate placement test results for major clients such as SABIC, CHEMANOL, SASREF, ARAMCO, TASNEE, SATORP, SEC, SIPCHEM, and hundreds of other companies all over the Kingdom. IH has also processed thousands of tests for HRDF, the Colleges of Excellence Program, and diverse sectors including hospitals, banks, and hotels.",
      text3: "The data generated from these IH English language placement tests is then benchmarked to globalized language learning standards so that recruitment specialists can select the best candidates for current job vacancies, identify qualified new hires for initial training programs, or identify any language competency gaps that current employees may need to close before they are fully eligible for promotion.",
      text4: "This ensures training efficiency as learners are allocated the precise English level that they need to progress."
    },
    formats: {
      title: "Flexible Testing Options",
      subtitle: "Choose the administration format that fits your operations",
      consultation: "For an entirely free consultation, all corporate clients are invited to contact IH Saudi Arabia for further details and to select the option that works best.",
      items: [
        {
          title: "Distance Placement Testing",
          desc: "Avoid the cost incurred of flying hundreds of job applicants to your company’s site where they then need to be issued gate passes. Highly recommended for shift workers and offshore oil platforms.",
          details: "Includes a unique online test, an individual writing test, and an oral interview via Skype/Zoom/Teams with an assessor. High security with rigorous ID checks. Candidates need a PC/laptop, webcam, and stable internet.",
          shadow: "shadow-ih-blue",
          color: "#002F6C",
          img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80"
        },
        {
          title: "Testing at Selected Venues",
          desc: "IH instructors visit any location in the Kingdom to administer paper-based placement tests, including grammar, writing, listening, and oral tests. Ideal for massive candidate numbers.",
          details: "Additionally, all IH projects include an inbuilt placement testing service. Visiting instructors are fully trained to manage testing requirements under their normal scope of work.",
          shadow: "shadow-ih-blue",
          color: "#1fa968",
          img: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=500&q=80"
        }
      ]
    },
    validation: {
      title: "Global Benchmarking & Standards",
      desc1: "All IH placement test results are benchmarked to the Common European Framework (CEFR) from A1 to C2.",
      desc2: "Testing instruments have been designed by our world-class academic partners and internationally validated for use in global industry."
    }
  },
  ar: {
    hero: {
      title: "اختبار تحديد المستوى للشركات",
      tagline: "اعرف بالضبط أين يقف فريقك — وإلى أين يتجه.",
      badge: "حلول تقييم معتمدة",
    },
    intro: {
      title: "أكثر من 30 عاماً في اختبارات التحديد للشركات",
      text1: "لأكثر من 30 عاماً، تقدم الهاوس الدولي السعودية خدمات اختبارات تحديد مستوى اللغة الإنجليزية الشاملة لعملائنا من الشركات في المملكة.",
      text2: "تتخص الهاوس الدولي السعودية في تقديم نتائج اختبارات تحديد المستوى بدقة عالية لعملاء بارزين مثل سابك، كيمانول، ساسرف، أرامكو، التصنيع، ساتورب، الشركة السعودية للكهرباء، سبكيم، ومئات الشركات الأخرى في جميع أنحاء المملكة. كما قامت الهاوس الدولي بمعالجة آلاف الاختبارات لصندوق تنمية الموارد البشرية (هدف)، وبرنامج كليات التميز، وقطاعات متنوعة تشمل المستشفيات والبنوك والفنادق.",
      text3: "يتم بعد ذلك قياس البيانات الناتجة عن هذه الاختبارات وفقاً لمعايير تعلم اللغة العالمية (CEFR) بحيث يمكن لمتخصصي التوظيف اختيار أفضل المرشحين للوظائف الشاغرة الحالية، وتحديد الموظفين الجدد المؤهلين لبرامج التدريب الأولية، أو تحديد أي فجوات في الكفاءة اللغوية يحتاج الموظفون الحاليون إلى سدها قبل ترقيتهم.",
      text4: "يضمن هذا كفاءة التدريب حيث يتم تخصيص المستوى الدقيق الذي يحتاجه المتعلمون للتقدم."
    },
    formats: {
      title: "خيارات اختبارات مرنة وميسرة",
      subtitle: "اختر صيغة التقييم التي تناسب سير العمليات في منشأتك",
      consultation: "للحصول على استشارة مجانية بالكامل، ندعو جميع الشركات للتواصل مع الهاوس الدولي السعودية لتحديد الخيار الأنسب لبيئة عملهم.",
      items: [
        {
          title: "اختبار التحديد عن بعد",
          desc: "تجنب التكاليف المترتبة على نقل مئات المتقدمين للوظائف إلى مقر شركتك واستخراج تصاريح الدخول. خيار مثالي لعمال الورديات ومنصات النفط البحرية.",
          details: "يتضمن اختباراً عبر الإنترنت، واختبار كتابة فردي، ومقابلة شفهية عبر زووم أو تيمز بإشراف مقيم لغوي معتمد من الهاوس الدولي. يتميز بالأمان العالي مع التحقق من الهوية. يتطلب جهاز كمبيوتر/لابتوب مع كاميرا ويب وإنترنت مستقر.",
          shadow: "shadow-ih-blue",
          color: "#002F6C",
          img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80"
        },
        {
          title: "الاختبار في مواقع محددة بالزيارة",
          desc: "يمكن لمدربي الهاوس الدولي زيارة أي موقع في المملكة لإجراء الاختبارات الورقية الشاملة، بما في ذلك القواعد والكتابة والاستماع والمقابلة الشفهية. ممتاز للأعداد الكبيرة.",
          details: "تتضمن مشاريع الهاوس الدولي خدمة اختبار تحديد مستوى مدمجة. المدربون في موقعك مدربون بالكامل لإدارة وإجراء اختبارات التحديد ضمن نطاق عملهم المعتاد.",
          shadow: "shadow-ih-blue",
          color: "#1fa968",
          img: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=500&q=80"
        }
      ]
    },
    validation: {
      title: "المعايرة والاعتمادات العالمية",
      desc1: "جميع نتائج اختبارات تحديد المستوى من الهاوس الدولي مواءمة ومبنية على مستويات الإطار الأوروبي المشترك (CEFR) من A1 إلى C2.",
      desc2: "تم تصميم أدوات التقييم من قبل شركائنا الأكاديميين المرموقين عالمياً وتم التحقق من صحتها دولياً للاستخدام في قطاعات الصناعة العالمية."
    }
  }
};

export function PlacementTestView({ lang }: { lang: string }) {
  const d = placementData[lang as "en" | "ar"] || placementData.en;

  return (
    <div className="pt-[72px]">
      {/* HERO SECTION */}
      <section className="py-24 sm:py-32 relative overflow-hidden group bg-gradient-to-br from-[#002F6C] via-[#083e87] to-[#0c4ea6]">
        <Image
          src="/arab_education_bg.png"
          alt="Placement test"
          fill
          className="object-cover object-center opacity-25 group-hover:opacity-40 transition-opacity duration-500 ease-in-out mix-blend-overlay pointer-events-none"
          priority
        />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 -translate-y-32 translate-x-32 bg-white" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 translate-y-16 -translate-x-16 bg-white" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-block text-xs font-bold uppercase tracking-wider mb-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white border border-white/30">
              {d.hero.badge}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              {d.hero.title}
            </h1>
            <p className="text-lg sm:text-xl text-white/85 mb-8 max-w-2xl leading-relaxed">
              {d.hero.tagline}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white font-bold text-sm text-[#002F6C] shadow-lg hover:scale-105 transition-all duration-300"
              >
                {lang === "ar" ? "اطلب استشارة مجانية" : "Free Consultation"} <ArrowRight size={16} className="rtl:rotate-180" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <ThemeAccent height="h-2" />

      {/* INTRO CONTEXT */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-6 text-slate-700">
            <h2 className="text-3xl font-extrabold text-[#002F6C] mb-6">{d.intro.title}</h2>
            <p className="text-base sm:text-lg leading-relaxed font-semibold">{d.intro.text1}</p>
            <p className="text-sm leading-relaxed">{d.intro.text2}</p>
            <p className="text-sm leading-relaxed">{d.intro.text3}</p>
            <div className="p-5 rounded-2xl bg-[#f0f4ff] border border-blue-100 my-6">
              <p className="text-[#002F6C] text-sm leading-relaxed font-bold">{d.intro.text4}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <ThemeAccent height="h-1.5" pills />

      {/* TESTING FORMATS COMPARISON GRID */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-[#002F6C] mb-4">{d.formats.title}</h2>
            <p className="text-slate-500 text-sm mb-6">{d.formats.subtitle}</p>
            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100 text-xs sm:text-sm font-semibold text-[#002F6C] max-w-2xl mx-auto">
              {d.formats.consultation}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto pt-8">
            {d.formats.items.map((item, idx) => {
              const cardBorder = `color-mix(in srgb, ${item.color} 20%, transparent)`;
              const cardHoverBorder = `color-mix(in srgb, ${item.color} 50%, transparent)`;
              return (
                <motion.div
                  key={idx}
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={idx}
                  className={`relative overflow-hidden p-8 rounded-3xl border bg-white transition-all duration-500 hover:-translate-y-1.5 group/card cursor-pointer ${item.shadow}`}
                  style={{ borderColor: cardBorder }}
                  whileHover={{
                    borderColor: cardHoverBorder,
                    background: `linear-gradient(135deg, ${item.color} 0%, color-mix(in srgb, ${item.color} 75%, #000000) 100%)`
                  }}
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover object-center opacity-[0.35] group-hover/card:opacity-[0.65] transition-opacity duration-500 pointer-events-none z-0 mix-blend-overlay"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/30 transition-colors duration-500 pointer-events-none z-0" />

                  <div className="relative z-10 flex flex-col justify-between h-full min-h-[260px]">
                    <div>
                      <h4 className="font-extrabold text-lg text-slate-800 transition-colors duration-500 group-hover/card:text-white leading-snug mb-3">
                        {item.title}
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed transition-colors duration-500 group-hover/card:text-white/95 mb-4">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 group-hover/card:border-white/20">
                      <p className="text-slate-500 text-2xs sm:text-xs leading-relaxed transition-colors duration-500 group-hover/card:text-white/80 font-medium">
                        {item.details}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VALIDATION BLOCK */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm text-center"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#002F6C] flex items-center justify-center font-bold mb-6 mx-auto shadow-sm">
              <Award size={24} />
            </div>
            <h3 className="font-extrabold text-xl text-[#002F6C] mb-4">{d.validation.title}</h3>
            <p className="text-slate-700 text-sm leading-relaxed mb-4 font-semibold">{d.validation.desc1}</p>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{d.validation.desc2}</p>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-br from-[#002F6C] via-[#083e87] to-[#0c4ea6]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl font-extrabold text-white mb-4">
              {lang === "ar" ? "جاهز لتقييم كفاءة موظفيك؟" : "Assess Your Workforce Capabilities"}
            </h2>
            <p className="text-white/80 mb-10 text-base sm:text-lg">
              {lang === "ar"
                ? "تواصل معنا اليوم لبدء استشارتك المجانية واختيار خيار اختبار التحديد المناسب."
                : "Schedule a free consultation with our academic specialists to select Distance or On-site testing."}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white font-bold text-sm text-[#002F6C] shadow-xl hover:scale-105 transition-all duration-300"
              >
                {lang === "ar" ? "تواصل مع مستشاري التقييم" : "Enquire for Assessment"} <ArrowRight size={16} className="rtl:rotate-180" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
