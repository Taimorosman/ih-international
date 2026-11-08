"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight, CheckCircle, Users, Clock, BookOpen, Globe,
  Star, Award, TrendingUp, MessageSquare, Monitor, FileCheck,
  ChevronRight, Phone, Mail,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { fadeUp } from "@/utils/animations";
import ThemeAccent from "@/components/ThemeAccent";
import {
  EnglishForCompaniesView,
  EspCoursesView,
  LearnArabicView,
  YoungLearnersView,
  OnlineClassesView,
  PlacementTestView
} from "./BespokeCourseViews";

/* ─── Per-course static config ──────────────────────────── */
interface CourseConfig {
  color: string;
  secondaryColor: string;
  icon: React.ReactNode;
  enTitle: string;
  arTitle: string;
  enTagline: string;
  arTagline: string;
  enBody: string;
  arBody: string;
  highlights: { en: string; ar: string }[];
  outcomes: { en: string; ar: string }[];
  levels: { name: string; desc: string }[];
  faqs: { q: string; a: string }[];
  audience: { icon: React.ReactNode; label: string }[];
}

const configs: Record<string, CourseConfig> = {
  "english-for-companies": {
    color: "#002F6C",
    secondaryColor: "#0a4a9f",
    icon: <TrendingUp size={28} />,
    enTitle: "English for Companies",
    arTitle: "الإنجليزية للشركات",
    enTagline: "Elevate your workforce. Power your business forward.",
    arTagline: "رفّع كفاءة موظفيك. قدّم أعمالك للأمام.",
    enBody: `IH Saudi Arabia's Corporate English programmes are designed to meet the real communication demands of business environments across the Kingdom. Whether you need your team to present to international clients, write professional reports, negotiate contracts in English, or conduct meetings with global partners — we build a bespoke programme around your exact business goals.\n\nOur experienced corporate trainers work on-site at your premises or at IH centres, delivering flexible schedules that respect your operational hours. Every programme begins with a thorough Training Needs Analysis (TNA), ensuring that every lesson hour delivers measurable return on investment.`,
    arBody: `برامج الإنجليزية للشركات من الهاوس الدولي السعودية مصممة لتلبية متطلبات التواصل الحقيقية في بيئات الأعمال عبر المملكة. سواء كنت تحتاج لفريقك للتقديم أمام عملاء دوليين، أو كتابة تقارير مهنية، أو التفاوض على العقود بالإنجليزية — نبني برنامجاً مخصصاً حول أهدافك التجارية الدقيقة.\n\nيعمل مدربونا الشركاتيون في مقر شركتكم أو في مراكز IH، بجداول مرنة تحترم ساعات العمل. كل برنامج يبدأ بتحليل شامل لاحتياجات التدريب (TNA) للتأكد من أن كل ساعة دراسية تحقق عائداً قابلاً للقياس.`,
    highlights: [
      { en: "Needs Analysis & customised syllabus design", ar: "تحليل الاحتياجات وتصميم منهج مخصص" },
      { en: "Native-speaking trainers from UK, USA, Canada, Ireland & South Africa", ar: "مدربون متحدثون أصليون من بريطانيا وأمريكا وكندا وأيرلندا وجنوب أفريقيا" },
      { en: "On-site delivery or IH centre training", ar: "تدريب في موقع الشركة أو في مراكز IH" },
      { en: "Progress tracking & detailed reporting for HR", ar: "تتبع التقدم وتقارير مفصلة لإدارة الموارد البشرية" },
      { en: "TVTC & Ministry of Education recognised", ar: "معتمد لدى هيئة التدريب التقني المهني ووزارة التعليم" },
      { en: "Corporate pricing packages with group discounts", ar: "حزم تسعير مؤسسية مع خصومات جماعية" },
    ],
    outcomes: [
      { en: "Confidently lead and participate in business meetings", ar: "قيادة اجتماعات العمل والمشاركة فيها بثقة" },
      { en: "Write clear professional emails, reports & proposals", ar: "كتابة رسائل بريد إلكتروني ومقترحات مهنية واضحة" },
      { en: "Deliver compelling presentations to international audiences", ar: "تقديم عروض مقنعة للجمهور الدولي" },
      { en: "Negotiate effectively in English", ar: "التفاوض بفاعلية بالإنجليزية" },
      { en: "Build stronger global professional relationships", ar: "بناء علاقات مهنية عالمية أقوى" },
    ],
    levels: [
      { name: "Foundation", desc: "For staff with limited English exposure — builds essential workplace vocabulary" },
      { name: "Intermediate", desc: "For employees who can communicate but need greater fluency and accuracy" },
      { name: "Advanced", desc: "For executives and managers needing high-level presentation and negotiation skills" },
    ],
    faqs: [
      { q: "Can training happen at our office?", a: "Yes — our trainers can come to your premises across Riyadh, Jeddah, Dammam, Jubail, Yanbu, Khafji and Abha." },
      { q: "How many employees can join?", a: "We accommodate groups from 5 to 30+ per cohort, with multiple parallel groups for large organisations." },
      { q: "How long are the programmes?", a: "Typically 3–6 months (60–120 hours), though shorter intensive or longer ongoing programmes are available." },
    ],
    audience: [
      { icon: <Users size={18} />, label: "Corporate Teams" },
      { icon: <Award size={18} />, label: "Management & Executives" },
      { icon: <Globe size={18} />, label: "Client-Facing Staff" },
    ],
  },

  "esp-courses": {
    color: "#8b3275",
    secondaryColor: "#6d2461",
    icon: <BookOpen size={28} />,
    enTitle: "ESP Courses",
    arTitle: "دورات الإنجليزية لأغراض خاصة",
    enTagline: "Master the language of your industry.",
    arTagline: "أتقن لغة صناعتك.",
    enBody: `English for Specific Purposes (ESP) goes far beyond general English — it targets the precise vocabulary, discourse structures, and communication norms that define success within a particular professional sector. IH Saudi Arabia delivers ESP programmes aligned directly with Saudi Vision 2030 workforce development priorities.\n\nFrom the drilling floors of the Eastern Province to the operating theatres of Riyadh's hospitals, from engineering project sites in Jubail to financial districts in Jeddah — our ESP courses are built on real industry language, real workplace tasks, and real outcomes.`,
    arBody: `الإنجليزية لأغراض خاصة (ESP) تتجاوز الإنجليزية العامة بكثير — تستهدف المفردات الدقيقة وهياكل الخطاب ومعايير التواصل التي تحدد النجاح في قطاع مهني معين. تقدم IH السعودية برامج ESP متوافقة مباشرة مع أولويات تطوير القوى العاملة في رؤية 2030.\n\nمن حقول الحفر في المنطقة الشرقية إلى غرف العمليات في مستشفيات الرياض، ومن مواقع مشاريع الهندسة في الجبيل إلى المناطق المالية في جدة — دوراتنا مبنية على لغة صناعية حقيقية ومهام حقيقية ونتائج حقيقية.`,
    highlights: [
      { en: "Oil, Gas & Petrochemicals English", ar: "إنجليزية النفط والغاز والبتروكيماويات" },
      { en: "Medical & Healthcare Communication", ar: "التواصل الطبي والرعاية الصحية" },
      { en: "Engineering & Technical English", ar: "الإنجليزية الهندسية والتقنية" },
      { en: "Legal, Finance & Banking English", ar: "إنجليزية القانون والمالية والمصرفية" },
      { en: "Aviation & Hospitality English", ar: "إنجليزية الطيران والضيافة" },
      { en: "Military & Government English", ar: "إنجليزية الجيش والحكومة" },
    ],
    outcomes: [
      { en: "Use sector-specific vocabulary with precision", ar: "استخدام المفردات الخاصة بالقطاع بدقة" },
      { en: "Read and write technical documents confidently", ar: "قراءة وكتابة الوثائق التقنية بثقة" },
      { en: "Communicate effectively in professional contexts", ar: "التواصل بفاعلية في السياقات المهنية" },
      { en: "Pass internationally recognised professional exams", ar: "اجتياز الامتحانات المهنية المعترف بها دولياً" },
    ],
    levels: [
      { name: "Core ESP", desc: "Foundational sector vocabulary and common workplace tasks" },
      { name: "Applied ESP", desc: "Extended reading, writing and interaction tasks for your industry" },
      { name: "Advanced ESP", desc: "Complex reports, presentations and negotiations at a professional level" },
    ],
    faqs: [
      { q: "Is ESP suitable for non-English speakers?", a: "A minimum B1 general English level is recommended for most ESP programmes. We can advise during initial assessment." },
      { q: "Do you offer IELTS or OET preparation within ESP?", a: "Yes — we can integrate exam preparation components into tailored ESP pathways." },
    ],
    audience: [
      { icon: <TrendingUp size={18} />, label: "Industry Professionals" },
      { icon: <BookOpen size={18} />, label: "Technical Staff" },
      { icon: <Award size={18} />, label: "Government Employees" },
    ],
  },

  "learn-arabic": {
    color: "#1fa968",
    secondaryColor: "#178a55",
    icon: <MessageSquare size={28} />,
    enTitle: "Learn Arabic with IH Saudi Arabia",
    arTitle: "تعلم العربية مع IH السعودية",
    enTagline: "Connect with the Kingdom on a deeper level.",
    arTagline: "تواصل مع المملكة على مستوى أعمق.",
    enBody: `Living and working in Saudi Arabia is a uniquely rich experience — and learning Arabic unlocks a deeper connection with the culture, the people and the professional community around you. IH Saudi Arabia offers Modern Standard Arabic (MSA) and Saudi dialect programmes specifically designed for expatriates and international professionals.\n\nOur Arabic instructors are experienced at teaching non-native speakers, using communicative methods that prioritise real-life interaction from day one. Whether you need MSA for formal business contexts or conversational Saudi dialect for daily life in the Kingdom — we have a programme for you.`,
    arBody: `العيش والعمل في المملكة العربية السعودية تجربة غنية بامتياز — وتعلم العربية يفتح لك اتصالاً أعمق بالثقافة والناس والمجتمع المهني من حولك. تقدم IH السعودية برامج العربية الفصحى الحديثة واللهجة السعودية مصممة خصيصاً للمغتربين والمتخصصين الدوليين.\n\nمعلمونا العرب متخصصون في تعليم غير الناطقين بالعربية، باستخدام أساليب تواصلية تجعل التفاعل الحقيقي أولوية منذ اليوم الأول.`,
    highlights: [
      { en: "Modern Standard Arabic (MSA) for formal and business use", ar: "العربية الفصحى الحديثة للاستخدام الرسمي والتجاري" },
      { en: "Saudi dialect for day-to-day conversation", ar: "اللهجة السعودية للمحادثة اليومية" },
      { en: "Arabic script reading and writing", ar: "قراءة وكتابة الخط العربي" },
      { en: "Cultural awareness and etiquette modules", ar: "وحدات الوعي الثقافي وآداب السلوك" },
      { en: "Flexible scheduling for busy professionals", ar: "جدول مرن للمتخصصين المشغولين" },
      { en: "All levels: Beginner to Advanced", ar: "جميع المستويات: من المبتدئ إلى المتقدم" },
    ],
    outcomes: [
      { en: "Hold basic to advanced conversations in Arabic", ar: "إجراء محادثات من الأساسية إلى المتقدمة بالعربية" },
      { en: "Read and write Arabic script with confidence", ar: "قراءة وكتابة الخط العربي بثقة" },
      { en: "Navigate daily life in Saudi Arabia with ease", ar: "التعامل مع الحياة اليومية في السعودية بيسر" },
      { en: "Build stronger professional relationships locally", ar: "بناء علاقات مهنية أقوى محلياً" },
    ],
    levels: [
      { name: "Beginner", desc: "Alphabet, greetings, numbers, basic daily phrases" },
      { name: "Elementary / Pre-Intermediate", desc: "Common conversation, shopping, workplace basics" },
      { name: "Intermediate – Advanced", desc: "Business Arabic, formal writing, media comprehension" },
    ],
    faqs: [
      { q: "Do I need to learn the Arabic script?", a: "We recommend it for the best learning experience, but we offer transliteration support in early stages for those focusing on spoken Arabic." },
      { q: "Can I learn online?", a: "Yes — our Arabic courses are available as live online sessions with the same qualified instructors." },
    ],
    audience: [
      { icon: <Globe size={18} />, label: "Expatriates in KSA" },
      { icon: <Users size={18} />, label: "International Professionals" },
      { icon: <TrendingUp size={18} />, label: "Business Travellers" },
    ],
  },

  "young-learners": {
    color: "#e85d4a",
    secondaryColor: "#c94535",
    icon: <Star size={28} />,
    enTitle: "Young Learners",
    arTitle: "المتعلمون الصغار",
    enTagline: "Give your child the gift of language for life.",
    arTagline: "امنح طفلك هدية اللغة مدى الحياة.",
    enBody: `Children who learn English early gain a decisive advantage — academically, socially, and professionally. IH Saudi Arabia's Young Learners programme is structured around internationally recognised methodologies designed specifically for children and teenagers, making language learning an exciting, confidence-building adventure.\n\nOur certified Young Learner teachers hold specialist qualifications and bring energy, creativity and patience to every class. Small class sizes ensure every child receives individual attention. We offer programmes for all ages from 5 to 17, across three structured levels with end-of-level certificates recognised by schools and universities.`,
    arBody: `الأطفال الذين يتعلمون الإنجليزية مبكراً يكتسبون ميزة حاسمة — أكاديمياً واجتماعياً ومهنياً. برنامج المتعلمين الصغار من IH السعودية مبني على منهجيات معترف بها دولياً مصممة خصيصاً للأطفال والمراهقين، مما يجعل تعلم اللغة مغامرة ممتعة وبانية للثقة.\n\nمعلمونا المعتمدون في تعليم الصغار يمتلكون مؤهلات متخصصة ويجلبون الطاقة والإبداع والصبر لكل حصة. أعداد الطلاب الصغيرة تضمن اهتماماً فردياً لكل طفل.`,
    highlights: [
      { en: "Ages 5–17 with age-grouped classes", ar: "أعمار 5–17 مع فصول مجمّعة حسب العمر" },
      { en: "Cambridge Young Learner Exam preparation (Starters, Movers, Flyers)", ar: "التحضير لامتحانات كامبريدج للصغار (Starters, Movers, Flyers)" },
      { en: "Game-based, interactive & immersive methodology", ar: "منهجية قائمة على الألعاب والتفاعل والانغماس" },
      { en: "End-of-level certificates internationally recognised", ar: "شهادات نهاية المستوى معترف بها دولياً" },
      { en: "Maximum 12 students per class", ar: "حد أقصى 12 طالباً في الفصل" },
      { en: "Summer Intensive and Weekend programmes available", ar: "برامج صيفية مكثفة وبرامج نهاية الأسبوع متاحة" },
    ],
    outcomes: [
      { en: "Build genuine communicative confidence in English", ar: "بناء ثقة تواصلية حقيقية بالإنجليزية" },
      { en: "Achieve internationally recognised Young Learner certificates", ar: "الحصول على شهادات المتعلمين الصغار المعترف بها دولياً" },
      { en: "Develop strong reading and creative writing foundations", ar: "تطوير أسس قراءة وكتابة إبداعية قوية" },
      { en: "Prepare for secondary and university English requirements", ar: "التحضير لمتطلبات الإنجليزية في المرحلة الثانوية والجامعة" },
    ],
    levels: [
      { name: "Starters (Ages 5–8)", desc: "Songs, games, stories and basic English — making learning a joy" },
      { name: "Movers (Ages 9–12)", desc: "Grammar, vocabulary expansion, reading and simple writing" },
      { name: "Flyers & Teens (Ages 13–17)", desc: "Advanced communication, Cambridge exam prep, digital literacy" },
    ],
    faqs: [
      { q: "Are classes separated by gender?", a: "Yes — we provide separate sessions for boys and girls upon request, with dedicated ladies-only environments also available." },
      { q: "Do you offer transport or after-school programmes?", a: "Contact our nearest branch to discuss scheduling that works around school hours in your area." },
    ],
    audience: [
      { icon: <Star size={18} />, label: "Children Ages 5–12" },
      { icon: <Users size={18} />, label: "Teenagers 13–17" },
      { icon: <Award size={18} />, label: "Exam Candidates" },
    ],
  },

  "online-classes": {
    color: "#f09550",
    secondaryColor: "#d07830",
    icon: <Monitor size={28} />,
    enTitle: "Online / Virtual Classes",
    arTitle: "الدراسة عبر الإنترنت",
    enTagline: "World-class instruction. Anywhere. Anytime.",
    arTagline: "تعليم عالمي المستوى. في أي مكان. في أي وقت.",
    enBody: `IH Saudi Arabia's Online English platform delivers the same rigorous, communicative teaching methodology as our face-to-face centres — with the added flexibility of joining from home, office or anywhere with an internet connection. Every class is delivered live by a qualified, native-speaking IH teacher, never pre-recorded.\n\nStudents benefit from interactive digital whiteboards, breakout rooms for pair and group work, integrated homework platforms, and detailed progress tracking accessible to both learners and parents. Our online programmes are fully aligned with the CEFR framework and are available for all levels from A1 to C2.`,
    arBody: `منصة الإنجليزية الإلكترونية من IH السعودية تقدم نفس منهجية التدريس التواصلية الصارمة التي تتميز بها مراكزنا — مع مرونة إضافية بالانضمام من المنزل أو المكتب أو أي مكان به اتصال بالإنترنت. كل حصة تقدَّم مباشرة من معلم IH مؤهل ومتحدث أصلي، ولا تُسجَّل مسبقاً أبداً.\n\nيستفيد الطلاب من السبورات البيضاء الرقمية التفاعلية وغرف المجموعات الصغيرة ومنصات الواجبات المتكاملة وتتبع التقدم المفصّل للمتعلمين وأولياء الأمور.`,
    highlights: [
      { en: "100% live instruction — no pre-recorded content", ar: "100% تعليم مباشر — لا محتوى مسجل مسبقاً" },
      { en: "Native-speaking IH certified teachers", ar: "معلمو IH المعتمدون المتحدثون أصلياً" },
      { en: "Interactive digital tools and collaborative platforms", ar: "أدوات رقمية تفاعلية ومنصات تعاون" },
      { en: "Flexible morning, afternoon & evening slots", ar: "فترات صباحية وبعد الظهر ومسائية مرنة" },
      { en: "CEFR-aligned curriculum (A1 to C2)", ar: "منهج متوافق مع CEFR (A1 إلى C2)" },
      { en: "Perfect for learners outside major cities", ar: "مثالي للمتعلمين خارج المدن الكبرى" },
    ],
    outcomes: [
      { en: "Progress through all CEFR levels from home", ar: "التقدم عبر جميع مستويات CEFR من المنزل" },
      { en: "Develop all four skills: reading, writing, speaking, listening", ar: "تطوير المهارات الأربع: القراءة والكتابة والتحدث والاستماع" },
      { en: "Receive the same IH certification as face-to-face students", ar: "الحصول على نفس شهادة IH للطلاب وجهاً لوجه" },
      { en: "Track progress with detailed monthly reports", ar: "تتبع التقدم بتقارير شهرية مفصلة" },
    ],
    levels: [
      { name: "Beginner (A1–A2)", desc: "Complete beginners building their first English foundation" },
      { name: "Intermediate (B1–B2)", desc: "Fluency development, accuracy and exam preparation" },
      { name: "Advanced (C1–C2)", desc: "Near-native proficiency and professional communication mastery" },
    ],
    faqs: [
      { q: "What technology do I need?", a: "A computer, tablet or smartphone with a stable internet connection, a webcam and a microphone." },
      { q: "Are online classes cheaper?", a: "Our online rates are highly competitive — contact us for current pricing." },
    ],
    audience: [
      { icon: <Monitor size={18} />, label: "Remote Learners" },
      { icon: <Users size={18} />, label: "Busy Professionals" },
      { icon: <Globe size={18} />, label: "Outside Major Cities" },
    ],
  },

  "placement-test": {
    color: "#cf1430",
    secondaryColor: "#a50f26",
    icon: <FileCheck size={28} />,
    enTitle: "Corporate Placement Test",
    arTitle: "اختبار التحديد للشركات",
    enTagline: "Know exactly where your team stands — and where to go next.",
    arTagline: "اعرف بالضبط أين يقف فريقك — وإلى أين يتجه.",
    enBody: `Making smart training investment decisions starts with accurate data. IH Saudi Arabia's Corporate Placement Test provides a validated, CEFR-aligned assessment of your workforce's English proficiency — giving HR departments, L&D managers and organisational leaders the precise information they need to design effective training pathways.\n\nOur test covers all four language skills (reading, writing, listening and speaking), delivering a comprehensive profile of each employee's strengths and development areas. Results are available within 24 hours and are accompanied by a full written analysis and training recommendations tailored to your organisation's needs.`,
    arBody: `اتخاذ قرارات استثمار تدريبية ذكية يبدأ ببيانات دقيقة. يوفر اختبار التحديد المؤسسي من IH السعودية تقييماً معتمداً ومتوافقاً مع CEFR لكفاءة الإنجليزية لدى موظفيك — مما يمنح إدارات الموارد البشرية ومديري التطوير والمؤسسات المعلومات الدقيقة اللازمة لتصميم مسارات تدريبية فعّالة.\n\nيغطي الاختبار المهارات الأربع (القراءة والكتابة والاستماع والتحدث)، ويقدم ملفاً شاملاً لنقاط قوة كل موظف ومجالات تطويره.`,
    highlights: [
      { en: "CEFR-aligned (A1 to C2) validated assessment", ar: "تقييم معتمد متوافق مع CEFR (A1 إلى C2)" },
      { en: "Covers all 4 language skills comprehensively", ar: "يغطي المهارات الأربع بشكل شامل" },
      { en: "Results within 24 hours of completion", ar: "نتائج خلال 24 ساعة من الإتمام" },
      { en: "Full written analysis and training recommendations", ar: "تحليل مكتوب كامل وتوصيات تدريبية" },
      { en: "Scalable — from 5 to 5,000+ employees", ar: "قابل للتوسع — من 5 إلى أكثر من 5000 موظف" },
      { en: "Available online or at IH centres", ar: "متاح إلكترونياً أو في مراكز IH" },
    ],
    outcomes: [
      { en: "Accurate CEFR level for every employee tested", ar: "مستوى CEFR دقيق لكل موظف خضع للاختبار" },
      { en: "Clear training pathway recommendations", ar: "توصيات واضحة لمسارات التدريب" },
      { en: "Benchmarking data for HR workforce planning", ar: "بيانات مرجعية لتخطيط القوى العاملة في الموارد البشرية" },
      { en: "Compliance evidence for TVTC and Ministry requirements", ar: "أدلة امتثال لمتطلبات TVTC والوزارة" },
    ],
    levels: [
      { name: "Individual Assessment", desc: "For private learners — free online test, results in minutes" },
      { name: "Team Assessment (5–50)", desc: "Coordinated testing with individual and group reporting" },
      { name: "Enterprise Assessment (50+)", desc: "Full organisational rollout with dedicated IH account management" },
    ],
    faqs: [
      { q: "Is the individual test really free?", a: "Yes — the online individual placement test is completely free of charge for all learners." },
      { q: "How are corporate tests administered?", a: "We can administer tests online via our platform, at your offices, or at any IH centre nationwide." },
    ],
    audience: [
      { icon: <FileCheck size={18} />, label: "HR Departments" },
      { icon: <TrendingUp size={18} />, label: "L&D Managers" },
      { icon: <Users size={18} />, label: "Individual Learners" },
    ],
  },
};

export default function CoursePageClient({ courseId }: { courseId: string }) {
  const { lang } = useLanguage();

  if (courseId === "english-for-companies") return <EnglishForCompaniesView lang={lang} />;
  if (courseId === "esp-courses") return <EspCoursesView lang={lang} />;
  if (courseId === "learn-arabic") return <LearnArabicView lang={lang} />;
  if (courseId === "young-learners") return <YoungLearnersView lang={lang} />;
  if (courseId === "online-classes") return <OnlineClassesView lang={lang} />;
  if (courseId === "placement-test") return <PlacementTestView lang={lang} />;

  const cfg = configs[courseId];
  if (!cfg) return null;

  const title = lang === "ar" ? cfg.arTitle : cfg.enTitle;
  const tagline = lang === "ar" ? cfg.arTagline : cfg.enTagline;
  const body = lang === "ar" ? cfg.arBody : cfg.enBody;

  return (
    <div className="pt-[72px]">
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section
        className="py-32 relative overflow-hidden group"
        style={{ background: `linear-gradient(135deg, ${cfg.color} 0%, ${cfg.secondaryColor} 100%)` }}
      >
        <Image
          src="/arab_education_bg.png"
          alt="Arab education background"
          fill
          className="object-cover object-center opacity-30 group-hover:opacity-60 transition-opacity duration-400 ease-in-out mix-blend-overlay"
          priority
        />
        {/* Background decoration */}
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 -translate-y-32 translate-x-32"
          style={{ background: "white" }}
        />
        <div
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 translate-y-16 -translate-x-16"
          style={{ background: "white" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white border border-white/30">
                {cfg.icon}
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight max-w-3xl">
              {title}
            </h1>
            <p className="text-xl text-white/80 mb-10 max-w-2xl leading-relaxed">{tagline}</p>
            {/* Audience tags */}
            <div className="flex flex-wrap gap-3">
              {cfg.audience.map((a, i) => (
                <span
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm text-white text-sm font-medium border border-white/25"
                >
                  {a.icon} {a.label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <ThemeAccent height="h-2" />

      {/* ─── OVERVIEW + HIGHLIGHTS ────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Body copy */}
            <div className="lg:col-span-2">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <span
                  className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
                  style={{ background: "#f0f4ff", color: cfg.color }}
                >
                  Course Overview
                </span>
                <h2
                  className="text-3xl font-extrabold mb-6"
                  style={{ color: cfg.color }}
                >
                  About This Programme
                </h2>
                {body.split("\n\n").map((para, i) => (
                  <p key={i} className="text-gray-600 text-base leading-relaxed mb-4">
                    {para}
                  </p>
                ))}
              </motion.div>
            </div>

            {/* Highlights sidebar */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
            >
              <div
                className="rounded-3xl p-7 border-2 h-fit"
                style={{ borderColor: cfg.color + "30", background: cfg.color + "08" }}
              >
                <h3 className="font-extrabold text-base mb-5" style={{ color: cfg.color }}>
                  Programme Highlights
                </h3>
                <div className="space-y-3">
                  {cfg.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <CheckCircle size={16} className="shrink-0 mt-0.5" style={{ color: cfg.color }} />
                      {lang === "ar" ? h.ar : h.en}
                    </div>
                  ))}
                </div>
                <div className="mt-8 space-y-3">
                  <Link
                    href={courseId === "technical-professional" || courseId === "corporate-training" ? "/corporate-training#proposal" : "/registration-form"}
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-bold text-sm text-white shadow-[0_8px_20px_rgba(0,47,108,0.15)] hover:scale-[1.02] transition-all"
                    style={{ background: cfg.color }}
                  >
                    {courseId === "technical-professional" || courseId === "corporate-training"
                      ? (lang === "ar" ? "طلب مقترح للشركات" : "Request a Corporate Proposal")
                      : (lang === "ar" ? "استفسر الآن" : "Enquire Now")} <ArrowRight size={15} />
                  </Link>
                  <Link
                    href="/courses/placement-test"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl font-semibold text-sm border-2 hover:scale-[1.02] transition-all"
                    style={{ borderColor: cfg.color, color: cfg.color }}
                  >
                    Take Placement Test
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── LEARNING OUTCOMES ────────────────────────────── */}
      <section className="py-20" style={{ background: "#f8f9fc" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-3xl font-extrabold text-center mb-12"
            style={{ color: cfg.color }}
          >
            What You Will Achieve
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {cfg.outcomes.map((o, i) => {
              const outcomeImages = [
                "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=400&q=80"
              ];
              const cardImg = outcomeImages[i % 4];
              const border = `color-mix(in srgb, ${cfg.color} 25%, transparent)`;
              const borderHover = `color-mix(in srgb, ${cfg.color} 55%, transparent)`;
              const bg = `linear-gradient(135deg, #ffffff 0%, color-mix(in srgb, ${cfg.color} 8%, white) 100%)`;
              const hoverBg = `linear-gradient(135deg, ${cfg.color} 0%, ${cfg.secondaryColor || 'var(--color-primary-dark)'} 100%)`;
              return (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="relative z-10 overflow-hidden flex items-start gap-4 p-5 rounded-2xl border group/card cursor-pointer"
                  style={{
                    background: bg,
                    borderColor: border,
                    boxShadow: "0 8px 30px -5px color-mix(in srgb, " + cfg.color + " 15%, transparent)"
                  }}
                >
                  {/* Visible background photo inside the card */}
                  <Image
                    src={cardImg}
                    alt=""
                    fill
                    className="object-cover object-center opacity-[0.35] group-hover/card:opacity-[0.65] transition-opacity duration-300 pointer-events-none z-0"
                  />
                  
                  {/* Soft darken overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/25 transition-colors duration-300 pointer-events-none z-0" />

                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 relative z-10 bg-white/40 group-hover/card:bg-white transition-colors duration-300"
                  >
                    <ChevronRight size={16} style={{ color: cfg.color }} />
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed font-semibold group-hover/card:text-white transition-colors duration-300 relative z-10">
                    {lang === "ar" ? o.ar : o.en}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <ThemeAccent height="h-1.5" pills />

      {/* ─── LEVELS ───────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-3xl font-extrabold text-center mb-12"
            style={{ color: cfg.color }}
          >
            Programme Levels
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {cfg.levels.map((lv, i) => {
              const levelImages = [
                "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80"
              ];
              const cardImg = levelImages[i % 3];
              const border = `color-mix(in srgb, ${cfg.color} 25%, transparent)`;
              const borderHover = `color-mix(in srgb, ${cfg.color} 55%, transparent)`;
              const bg = `linear-gradient(135deg, #ffffff 0%, color-mix(in srgb, ${cfg.color} 8%, white) 100%)`;
              const hoverBg = `linear-gradient(135deg, ${cfg.color} 0%, ${cfg.secondaryColor || 'var(--color-primary-dark)'} 100%)`;
              return (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="rounded-3xl overflow-hidden border group/card cursor-pointer"
                  style={{
                    background: bg,
                    borderColor: border,
                    boxShadow: "0 8px 30px -5px color-mix(in srgb, " + cfg.color + " 15%, transparent)"
                  }}
                >
                  <div className="h-2 relative z-20" style={{ background: cfg.color }} />
                  <div className="p-7 relative z-10">
                    {/* Visible background photo inside the card */}
                    <Image
                      src={cardImg}
                      alt=""
                      fill
                      className="object-cover object-center opacity-[0.35] group-hover/card:opacity-[0.65] transition-opacity duration-300 pointer-events-none z-0"
                    />
                    
                    {/* Soft darken overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/25 transition-colors duration-300 pointer-events-none z-0" />

                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-white text-sm mb-4 relative z-10 transition-colors duration-300 group-hover/card:bg-white group-hover/card:!text-primary"
                      style={{ background: cfg.color }}
                    >
                      {i + 1}
                    </div>
                    <h3 className="font-extrabold text-lg mb-2 relative z-10 text-primary group-hover/card:text-white transition-colors duration-300">
                      {lv.name}
                    </h3>
                    <p className="text-slate-700 text-sm leading-relaxed relative z-10 group-hover/card:text-white/90 transition-colors duration-300 font-medium">
                      {lv.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <ThemeAccent height="h-1.5" />

      {/* ─── FAQs ─────────────────────────────────────────── */}
      <section className="py-20" style={{ background: "#f8f9fc" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-3xl font-extrabold text-center mb-10"
            style={{ color: cfg.color }}
          >
            Common Questions
          </motion.h2>
          <div className="space-y-4">
            {cfg.faqs.map((faq, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <h4 className="font-bold text-sm mb-2" style={{ color: cfg.color }}>
                  {faq.q}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ───────────────────────────────────── */}
      <section
        className="py-20"
        style={{ background: `linear-gradient(135deg, ${cfg.color} 0%, ${cfg.secondaryColor} 100%)` }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl font-extrabold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-white/80 mb-10 text-lg">
              Contact our team to discuss your goals and find the perfect programme for you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white font-bold text-sm shadow-xl hover:scale-105 transition-all"
                style={{ color: cfg.color }}
              >
                Contact Us <ArrowRight size={16} />
              </Link>
              <a
                href="tel:+966920000364"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/15 border border-white/30 backdrop-blur-sm font-bold text-sm text-white hover:bg-white/25 hover:scale-105 transition-all"
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
