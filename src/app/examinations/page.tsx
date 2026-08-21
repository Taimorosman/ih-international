"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock, Users, BookOpen, CheckCircle, ArrowRight,
  Award, Star, Sparkles, Phone, Mail, FileText,
  Bookmark, Shield, ChevronDown
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { fadeUp } from "@/utils/animations";
import ThemeAccent from "@/components/ThemeAccent";

const contentData = {
  en: {
    hero: {
      badge: "EXAMINATIONS & CERTIFICATION",
      title: "Achieve Internationally Recognized Qualifications",
      desc: "International House Saudi Arabia (IHSA) supports learners, professionals, teachers, and organizations in preparing for internationally recognized English language qualifications and professional certifications. Whether your goal is university admission, career advancement, professional development, immigration requirements, teacher qualification, or workforce certification, our examination preparation programs are designed to help you achieve success with confidence."
    },
    whyCert: {
      title: "Why International Certification Matters",
      subtitle: "In today's competitive academic and professional environment, internationally recognized qualifications provide independent evidence of language proficiency and professional competence.",
      orgText: "For organizations, certification provides an objective way to benchmark employee skills and workforce capabilities.",
      cards: [
        { title: "Higher Education", desc: "Access prestigious local and international university programs.", bg: "from-blue-50/50 via-white to-white", border: "border-blue-100", shadow: "hover:shadow-blue-200/50", text: "text-blue-700", png: "/srv_certificates.png" },
        { title: "Career Prospects", desc: "Open doors to promotions, better salary packages, and new job opportunities.", bg: "from-emerald-50/50 via-white to-white", border: "border-emerald-100", shadow: "hover:shadow-slate-200/50", text: "text-emerald-700", png: "/corp_executive.png" },
        { title: "Employer Requirements", desc: "Meet corporate and government regulatory mandates for language proficiency.", bg: "from-amber-50/50 via-white to-white", border: "border-amber-100", shadow: "hover:shadow-amber-200/50", text: "text-amber-700", png: "/str_corporate.png" },
        { title: "Professional Development", desc: "Continuously build credibility and benchmark your professional growth.", bg: "from-pink-50/50 via-white to-white", border: "border-pink-100", shadow: "hover:shadow-pink-200/50", text: "text-pink-700", png: "/str_quality.png" },
        { title: "Global Mobility", desc: "Qualify for visas, immigration, and work opportunities worldwide.", bg: "from-purple-50/50 via-white to-white", border: "border-purple-100", shadow: "hover:shadow-purple-200/50", text: "text-purple-700", png: "/str_network.png" },
        { title: "Build Confidence", desc: "Demonstrate and communicate your linguistic skills with complete assurance.", bg: "from-red-50/50 via-white to-white", border: "border-red-100", shadow: "hover:shadow-red-200/50", text: "text-red-700", png: "/str_trainers.png" }
      ]
    },
    qualifications: {
      title: "English Language Qualifications",
      list: [
        {
          title: "IELTS Preparation",
          desc: "IELTS remains one of the world's most widely recognized English qualifications for academic, professional, and migration purposes. IH Saudi Arabia offers structured preparation designed to build required techniques.",
          items: ["Listening skills", "Reading strategies", "Academic writing", "Speaking fluency", "Practice tests", "Strategies"],
          png: "/corp_testing.png",
          color: "border-red-100",
          borderBottom: "border-b-[#cf1430]",
          bg: "from-red-50/30 via-white to-white",
          tag: "Most Popular"
        },
        {
          title: "LanguageCert Qualifications",
          desc: "LanguageCert qualifications provide internationally recognized certification aligned with the CEFR framework. These offer flexible pathways for recognized proof of language proficiency.",
          items: ["Flexible exams", "Academic acceptance", "Fast results", "Speaking & Listening", "CEFR standards", "Reliable proof"],
          png: "/corp_business.png",
          color: "border-blue-100",
          borderBottom: "border-b-[#002F6C]",
          bg: "from-blue-50/30 via-white to-white",
          tag: "Flexible"
        },
        {
          title: "Cambridge English",
          desc: "Cambridge qualifications are respected worldwide and provide learners with recognized certifications across multiple proficiency levels, from Key to Proficiency.",
          items: ["A2 Key (KET)", "B1 Preliminary (PET)", "B2 First (FCE)", "C1 Advanced (CAE)", "C2 Proficiency (CPE)", "Official curriculum"],
          png: "/corporate_training.png",
          color: "border-emerald-100",
          borderBottom: "border-b-[#00d084]",
          bg: "from-emerald-50/30 via-white to-white",
          tag: "Gold Standard"
        },
        {
          title: "Pearson English",
          desc: "Pearson English qualifications support learners seeking internationally recognized English certification for study, work, and professional development.",
          items: ["Pearson PTE prep", "Academic validation", "Computer-based skills", "Test preparation", "Workplace success", "Global standards"],
          png: "/str_saudi.png",
          color: "border-amber-100",
          borderBottom: "border-b-[#fcb900]",
          bg: "from-amber-50/30 via-white to-white",
          tag: "Computer-Based"
        }
      ]
    },
    teacherPrep: {
      title: "Teacher Qualifications & Professional Certification",
      desc: "International House has a long-standing reputation for supporting teacher development and educational excellence. IH Saudi Arabia supports teachers and educational professionals through internationally informed training pathways and professional development opportunities that help educators advance their careers and enhance their teaching practice.",
      badge: "TEACHER DEVELOPMENT",
      img: "/exam_teacher.png"
    },
    corporateAssessment: {
      title: "Corporate Assessment & Certification Support",
      desc: "Organizations increasingly require objective methods to assess employee language skills and training outcomes. IH Saudi Arabia offers support services to align workforce development with international benchmarks.",
      items: [
        "Placement Testing & Leveling",
        "Language Benchmarking (CEFR)",
        "Workforce Competency Assessment",
        "Training Program Evaluation",
        "Certification Pathway Guidance"
      ],
      badge: "CORPORATE SOLUTIONS",
      img: "/str_corporate.png"
    },
    prepFeatures: {
      title: "Examination Preparation Features",
      desc: "Our preparation programs are designed to provide learners with the knowledge, confidence, and practical skills needed to succeed in their selected certifications.",
      list: [
        { name: "Diagnostic Assessment", desc: "Thorough screening of current proficiency and skill gaps." },
        { name: "Individual Learning Plans", desc: "Tailored lesson roadmaps matching target band scores." },
        { name: "Experienced Trainers", desc: "Qualified native-speaker trainers with international test experience." },
        { name: "Practice Examinations", desc: "Mock exams under real test-taking constraints." },
        { name: "Examination Strategies", desc: "Tactic guides, timing strategies, and score-maximizers." },
        { name: "Progress Monitoring", desc: "Continuous feedback and benchmark assessments." }
      ]
    },
    learningOptions: {
      title: "Flexible Learning Options",
      desc: "Flexible learning pathways allow participants to prepare effectively regardless of location or schedule.",
      list: [
        { name: "Classroom-Based Preparation", desc: "Interactive group classes at our modern centers." },
        { name: "Live Online Classes", desc: "Virtual classrooms with live instruction and support." },
        { name: "Hybrid Learning Solutions", desc: "Combining digital components with face-to-face classes." },
        { name: "Private Tuition", desc: "Personalized 1-on-1 sessions matching individual goals." },
        { name: "Small Group Programs", desc: "Focused peer learning for rapid language building." }
      ]
    },
    journey: {
      title: "Your Certification Journey",
      desc: "Our team works closely with learners throughout the process to help them achieve their certification goals.",
      steps: [
        { step: "Step 1", title: "Academic Consultation", desc: "Discussing academic or professional targets." },
        { step: "Step 2", title: "Placement Assessment", desc: "Diagnostic testing to find your starting benchmark." },
        { step: "Step 3", title: "Program Selection", desc: "Selecting the ideal preparation pathway." },
        { step: "Step 4", title: "Preparation & Training", desc: "Interactive training sessions and test coaching." },
        { step: "Step 5", title: "Examination", desc: "Taking the final certification exam with confidence." },
        { step: "Step 6", title: "Certification", desc: "Receiving your internationally aligned qualification." }
      ]
    },
    cta: {
      title: "Open Doors to New Opportunities",
      desc: "International qualifications can create opportunities for further education, professional growth, career advancement, and international mobility. Contact our team to discuss your certification goals.",
      btn: "Contact Our Team",
      brochureBtn: "Request Brochure"
    }
  },
  ar: {
    hero: {
      badge: "الامتحانات والشهادات الدولية",
      title: "احصل على مؤهلات معترف بها عالمياً",
      desc: "تدعم إنترناشونال هاوس المملكة العربية السعودية (IHSA) الطلاب والمهنيين والمعلمين والمؤسسات في الاستعداد للحصول على مؤهلات اللغة الإنجليزية والشهادات المهنية المعترف بها دولياً. سواء كان هدفك هو القبول بالجامعات، أو الترقية المهنية، أو الهجرة، أو تطوير المهارات التدريسية، فإن برامجنا مصممة لضمان وصولك إلى النجاح بثقة تامة."
    },
    whyCert: {
      title: "لماذا تهم الشهادات الدولية؟",
      subtitle: "في بيئة العمل والتعليم التنافسية اليوم، توفر الشهادات المعترف بها دولياً دليلاً مستقلاً وموثوقاً على الكفاءة اللغوية والتميز المهني.",
      orgText: "بالنسبة للمؤسسات والشركات، توفر الشهادات طريقة موضوعية لقياس قدرات الموظفين ورفع كفاءة رأس المال البشري.",
      cards: [
        { title: "التعليم العالي", desc: "القبول في أرقى البرامج الجامعية المحلية والدولية.", bg: "from-blue-50/50 via-white to-white", border: "border-blue-100", shadow: "hover:shadow-blue-200/50", text: "text-blue-700", png: "/srv_certificates.png" },
        { title: "التقدم المهني", desc: "فتح الأبواب للترقيات، وتحسين الرواتب، واقتناص فرص وظيفية جديدة.", bg: "from-emerald-50/50 via-white to-white", border: "border-emerald-100", shadow: "hover:shadow-slate-200/50", text: "text-emerald-700", png: "/corp_executive.png" },
        { title: "متطلبات التوظيف", desc: "تلبية شروط التوظيف في القطاعات الحكومية والشركات الكبرى.", bg: "from-amber-50/50 via-white to-white", border: "border-amber-100", shadow: "hover:shadow-amber-200/50", text: "text-amber-700", png: "/str_corporate.png" },
        { title: "التطوير الذاتي", desc: "مواصلة بناء المصداقية وقياس تقدم كفاءتك الشخصية.", bg: "from-pink-50/50 via-white to-white", border: "border-pink-100", shadow: "hover:shadow-pink-200/50", text: "text-pink-700", png: "/str_quality.png" },
        { title: "التنقل الدولي", desc: "استيفاء شروط التأشيرات، ومتطلبات الهجرة، والعمل بالخارج.", bg: "from-purple-50/50 via-white to-white", border: "border-purple-100", shadow: "hover:shadow-purple-200/50", text: "text-purple-700", png: "/str_network.png" },
        { title: "بناء الثقة", desc: "التواصل وإثبات قدراتك اللغوية بكل جرأة وأمان.", bg: "from-red-50/50 via-white to-white", border: "border-red-100", shadow: "hover:shadow-red-200/50", text: "text-red-700", png: "/str_trainers.png" }
      ]
    },
    qualifications: {
      title: "مؤهلات اللغة الإنجليزية الدولية",
      list: [
        {
          title: "التحضير لاختبار آيلتس (IELTS)",
          desc: "يظل اختبار آيلتس أحد أكثر مؤهلات اللغة الإنجليزية شهرة في العالم للأغراض الأكاديمية والمهنية والهجرة. تقدم إنترناشونال هاوس السعودية برامج تحضيرية منظمة لمساعدتك على تحقيق درجاتك المستهدفة.",
          items: ["مهارات الاستماع", "استراتيجيات القراءة", "الكتابة الأكاديمية", "المحادثة بطلاقة", "اختبارات تجريبية", "تكتيكات الاختبار"],
          png: "/corp_testing.png",
          color: "border-red-100",
          borderBottom: "border-b-[#cf1430]",
          bg: "from-red-50/30 via-white to-white",
          tag: "الأكثر طلباً"
        },
        {
          title: "شهادات لانجوج سيرت",
          desc: "توفر شهادات لانجوج سيرت اعتماداً معترفاً به دولياً ومتوافقاً مع الإطار الأوروبي (CEFR). وتتميز بمرونتها الفائقة وسرعة صدور نتائجها لإثبات كفاءة اللغة الإنجليزية للجامعات والشركات.",
          items: ["امتحانات مرنة", "قبول أكاديمي واسع", "نتائج سريعة جداً", "امتحان المحادثة والاستماع", "معايير CEFR", "إثبات موثوق"],
          png: "/corp_business.png",
          color: "border-blue-100",
          borderBottom: "border-b-[#002F6C]",
          bg: "from-blue-50/30 via-white to-white",
          tag: "مرن"
        },
        {
          title: "شهادات كامبريدج للغة الإنجليزية",
          desc: "تحظى امتحانات كامبريدج باحترام عالمي وتمنح الدارسين شهادات لمدى الحياة عبر جميع مستويات الكفاءة والطلاقة اللغوية.",
          items: ["شهادة A2 Key (KET)", "شهادة B1 Preliminary (PET)", "شهادة B2 First (FCE)", "شهادة C1 Advanced (CAE)", "شهادة C2 Proficiency (CPE)", "مناهج كامبريدج الرسمية"],
          png: "/corporate_training.png",
          color: "border-emerald-100",
          borderBottom: "border-b-[#00d084]",
          bg: "from-emerald-50/30 via-white to-white",
          tag: "العيار الذهبي"
        },
        {
          title: "امتحانات بيرسون للغة الإنجليزية",
          desc: "تدعم مؤهلات بيرسون الدارسين الذين يطلبون شهادات معترف بها للأغراض الأكاديمية والمهنية وتطوير المهارات الوظيفية بالاعتماد على التقييمات الحديثة.",
          items: ["التحضير لبيرسون PTE", "اعتماد أكاديمي", "مهارات حاسوبية", "اختبارات تجريبية مكثفة", "النجاح الوظيفي", "معايير دولية"],
          png: "/str_saudi.png",
          color: "border-amber-100",
          borderBottom: "border-b-[#fcb900]",
          bg: "from-amber-50/30 via-white to-white",
          tag: "تقييم رقمي"
        }
      ]
    },
    teacherPrep: {
      title: "تأهيل المعلمين والشهادات المهنية",
      desc: "تتمتع إنترناشونال هاوس بسمعة عريقة في إعداد المعلمين وقيادة التميز التعليمي. تدعم إنترناشونال هاوس السعودية الدارسين والأخصائيين عبر مسارات تدريب مهني معتمدة عالمياً (مثل كامبريدج CELTA) لمساعدتهم في التقدم المهني داخل وخارج المملكة.",
      badge: "تطوير المعلمين والتعليم",
      img: "/exam_teacher.png"
    },
    corporateAssessment: {
      title: "التقييم المؤسسي واعتمادات الشركات",
      desc: "تتطلب الجهات الحكومية والشركات اليوم وسائل دقيقة وموثوقة لتقييم المهارات اللغوية للموظفين وقياس فعالية الميزانيات التدريبية. يقدم المعهد خدمات قياس متكاملة متوافقة مع أرقى المعايير الدولية.",
      items: [
        "اختبارات تحديد المستوى والفرز السريع",
        "قياس الكفاءة اللغوية للمعايير الأوروبية (CEFR)",
        "تقييم مهارات وجاهزية القوى العاملة",
        "تقييم برامج التدريب وقياس العائد",
        "توجيه مسارات الشهادات والاعتمادات الرسمية"
      ],
      badge: "حلول قطاع الأعمال والشركات",
      img: "/str_corporate.png"
    },
    prepFeatures: {
      title: "ميزات برامج الاستعداد للامتحانات",
      desc: "تم تصميم برامجنا التحضيرية بعناية لتزويد الدارسين بالمعرفة، الثقة، والتقنيات العملية التي تضمن تفوقهم في الامتحانات الرسمية.",
      list: [
        { name: "التقييم التشخيصي", desc: "فحص لغوي شامل وتحديد دقيق لنقاط القوة وجوانب التحسين." },
        { name: "خطط تعليمية فردية", desc: "رسم مسارات دراسية مخصصة تستهدف تحقيق الدرجات المطلوبة." },
        { name: "مدربون خبراء", desc: "أساتذة لغة مؤهلون دولياً يتمتعون بخبرة واسعة في إدارة الامتحانات." },
        { name: "امتحانات تجريبية", desc: "محاكاة كاملة للامتحانات الرسمية تحت قيود وقت حقيقية." },
        { name: "استراتيجيات الامتحان", desc: "شرح استراتيجيات الحل السريع، وتوفير الوقت، وتجنب الأخطاء الشائعة." },
        { name: "متابعة التقدم والتقييم", desc: "تقييمات مرحلية وتوجيهات مستمرة لضمان التطور وتعديل خطة الدراسة." }
      ]
    },
    learningOptions: {
      title: "خيارات تعلم مرنة",
      desc: "توفر خياراتنا المتنوعة للدارسين إمكانية التحضير بفعالية وكفاءة بغض النظر عن القيود الجغرافية أو العملية.",
      list: [
        { name: "التحضير داخل الفصول", desc: "حصص تفاعلية جماعية في فروعنا الحديثة المجهزة." },
        { name: "حصص تفاعلية عبر الإنترنت", desc: "فصول افتراضية حية مع توجيه مباشر من المدرب." },
        { name: "حلول التعليم المدمج", desc: "دمج اللقاءات الحضورية مع منصات الدراسة الذاتية الرقمية." },
        { name: "الدروس الخصوصية (1-to-1)", desc: "برامج فردية مكثفة مصممة بالكامل وفق سرعة تعلمك الشخصية." },
        { name: "مجموعات صغيرة مخصصة", desc: "تعلم تعاوني مع عدد محدود لزيادة التفاعل والمشاركة." }
      ]
    },
    journey: {
      title: "رحلة الحصول على الشهادة",
      desc: "يسير فريقنا الأكاديمي معك جنباً إلى جنب طوال رحلتك التدريبية لضمان تحقيق غايتك وحصولك على الشهادة المستهدفة.",
      steps: [
        { step: "الخطوة ١", title: "الاستشارة الأكاديمية", desc: "تحديد الأهداف المهنية أو التعليمية والدرجات المطلوبة." },
        { step: "الخطوة ٢", title: "تقييم تحديد المستوى", desc: "اختبار تشخيصي دقيق لمعرفة مستواك اللغوي الحالي." },
        { step: "الخطوة ٣", title: "اختيار البرنامج", desc: "تحديد المسار والجدول الزمني الأنسب لالتزاماتك." },
        { step: "الخطوة ٤", title: "التحضير والتدريب", desc: "الانخراط في البرنامج التحضيري المكثف وتطوير المهارات." },
        { step: "الخطوة ٥", title: "أداء الامتحان", desc: "التقديم للامتحان الرسمي وتأديته بكل ثقة وثبات." },
        { step: "الخطوة ٦", title: "الشهادة والارتقاء", desc: "الحصول على شهادتك المعتمدة دولياً وفتح آفاق مستقبلك." }
      ]
    },
    cta: {
      title: "افتح الأبواب لفرص جديدة",
      desc: "يمكن للمؤهلات والشهادات الدولية أن تمنحك مزايا استثنائية للدراسة الجامعية، والنمو الوظيفي، والتنقل العالمي. تواصل مع فريقنا الأكاديمي اليوم لمناقشة أهدافك.",
      btn: "تواصل مع فريقنا الأكاديمي",
      brochureBtn: "طلب بروشور"
    }
  }
};

export default function ExaminationsPage() {
  const { lang } = useLanguage();
  const d = contentData[lang] || contentData.en;
  const isRtl = lang === "ar";
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="bg-brand-light min-h-screen pb-24 overflow-x-hidden font-sans">
      <ThemeAccent />

      {/* 1. HERO SECTION */}
      <section className="py-24 sm:py-32 relative overflow-hidden group bg-gradient-to-br from-[#002F6C] via-[#083e87] to-[#0c4ea6] text-white">
        <Image
          src="/card_exams.png"
          alt="Examinations background"
          fill
          className="object-cover object-center opacity-15 group-hover:opacity-25 transition-opacity duration-500 ease-in-out mix-blend-overlay pointer-events-none"
          priority
        />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 -translate-y-32 translate-x-32 bg-white" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 translate-y-16 -translate-x-16 bg-white" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-block text-xs font-bold uppercase tracking-wider mb-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white border border-white/30">
              {d.hero.badge}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight max-w-3xl font-heading">
              {d.hero.title}
            </h1>
            <p className="text-white/85 text-base sm:text-lg leading-relaxed max-w-3xl font-light">
              {d.hero.desc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. WHY CERTIFICATION MATTERS */}
      <section id="why-certification" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002F6C] mb-4 font-heading">
            {d.whyCert.title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {d.whyCert.subtitle}
          </p>
        </div>

        {/* Why Certification cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {d.whyCert.cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={idx}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`relative overflow-hidden p-6 rounded-3xl bg-gradient-to-b ${card.bg} ${card.border} border shadow-lg hover:shadow-xl ${card.shadow} transition-all duration-300 flex flex-col items-center justify-center text-center group`}
            >
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden mb-4 border border-slate-100 shadow-md group-hover:scale-110 transition-transform duration-300">
                <Image src={card.png} alt={card.title} fill className="object-cover" />
              </div>
              <h3 className={`text-base font-extrabold ${card.text} mb-2 font-heading`}>
                {card.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-light">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/60 max-w-4xl mx-auto text-center shadow-inner">
          <p className="text-sm font-semibold text-slate-700 leading-relaxed">
            💡 {d.whyCert.orgText}
          </p>
        </div>
      </section>

      {/* 3. CORE QUALIFICATIONS DIRECTORY */}
      <section id="english-qualifications" className="py-20 bg-white border-y border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <span className="inline-block text-xs font-bold uppercase tracking-wider mb-3 px-3 py-1 rounded-full bg-[#002F6C]/10 text-[#002F6C]">
              {isRtl ? "امتحانات عالمية" : "GLOBAL PATHWAYS"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002F6C] font-heading">
              {d.qualifications.title}
            </h2>
          </div>

          {/* Grid of Qualifications */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {d.qualifications.list.map((qual, idx) => (
              <motion.div
                key={idx}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={idx}
                whileHover={{ y: -6 }}
                className={`relative overflow-hidden p-8 rounded-3xl bg-gradient-to-br ${qual.bg} ${qual.color} border shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between group border-b-4 ${qual.borderBottom}`}
              >
                <div className="space-y-6">
                  {/* Badge & PNG Logo Header */}
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[10px] bg-slate-900/10 text-slate-800 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                      {qual.tag}
                    </span>
                    <div className="relative w-14 h-14 rounded-xl overflow-hidden border border-slate-100 shadow-sm group-hover:scale-105 transition-transform duration-300">
                      <Image src={qual.png} alt={qual.title} fill className="object-cover" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-slate-800 font-heading">
                    {qual.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                    {qual.desc}
                  </p>

                  <div className="pt-2 border-t border-slate-100 space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {isRtl ? "يشمل التدريب:" : "Key Areas & Pathways:"}
                    </h4>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-slate-500 font-semibold leading-relaxed">
                      {qual.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#002F6C]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8">
                  <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs bg-[#002F6C] text-white hover:bg-[#001a3f] transition-all">
                    {isRtl ? "سجل الآن" : "Enroll Now"} <ArrowRight size={14} className="rtl:rotate-180" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SPLIT SECTIONS (TEACHERS & CORPORATE SOLUTIONS) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 space-y-24">
        {/* Section 1: Teacher Qualifications */}
        <div id="teacher-qualifications" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="lg:col-span-7 space-y-6"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-ih-gold bg-ih-gold/10">
              {d.teacherPrep.badge}
            </span>
            <h2 className="text-3xl font-extrabold text-[#002F6C] leading-snug font-heading">
              {d.teacherPrep.title}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
              {d.teacherPrep.desc}
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Link href="/teacher-training" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-[#cf1430] text-white hover:bg-[#a50f26] shadow-lg shadow-[#cf1430]/25 transition-all">
                {isRtl ? "استكشف برامج المعلمين" : "Explore CELTA Programs"} <ArrowRight size={16} className="rtl:rotate-180" />
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-100">
              <Image src={d.teacherPrep.img} alt={d.teacherPrep.title} fill className="object-cover" />
            </div>
          </motion.div>
        </div>

        {/* Section 2: Corporate Support */}
        <div id="corporate-assessment" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
            className="lg:col-span-5 relative order-last lg:order-first"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-100">
              <Image src={d.corporateAssessment.img} alt={d.corporateAssessment.title} fill className="object-cover" />
            </div>
          </motion.div>
          
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="lg:col-span-7 space-y-6"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#00d084] bg-[#00d084]/10">
              {d.corporateAssessment.badge}
            </span>
            <h2 className="text-3xl font-extrabold text-[#002F6C] leading-snug font-heading">
              {d.corporateAssessment.title}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
              {d.corporateAssessment.desc}
            </p>
            <div className="pt-2 space-y-3">
              {d.corporateAssessment.items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-slate-700 font-semibold">
                  <CheckCircle size={16} className="text-[#00d084]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="pt-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm border-2 border-[#002F6C]/20 text-[#002F6C] hover:bg-slate-50 transition-all">
                {isRtl ? "طلب استشارة مؤسسية" : "Request Corporate Proposal"}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. PREPARATION FEATURES & OPTIONS */}
      <section id="exam-preparation" className="py-20 bg-slate-50 border-y border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* Left: Preparation Features */}
            <div className="lg:col-span-6 space-y-8 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002F6C] font-heading">
                  {d.prepFeatures.title}
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mt-2 font-light">
                  {d.prepFeatures.desc}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-7 space-y-4">
                  {d.prepFeatures.list.map((feat, idx) => (
                    <div key={idx} className="bg-white border border-slate-200/40 p-4 rounded-2xl flex gap-3 shadow-xs hover:shadow-md transition-shadow duration-205">
                      <span className="p-2 rounded-xl bg-red-50 text-[#cf1430] self-start shrink-0">
                        <Bookmark size={16} />
                      </span>
                      <div>
                        <h4 className="font-extrabold text-slate-800 text-sm font-heading">{feat.name}</h4>
                        <p className="text-xs text-slate-500 mt-0.5 leading-relaxed font-light">{feat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="md:col-span-5 relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200/60 hidden md:block">
                  <Image
                    src="/exam_exams.png"
                    alt="Exam Preparation Features"
                    fill
                    sizes="(max-width: 768px) 100vw, 350px"
                    className="object-cover transition-transform duration-300 hover:scale-103"
                  />
                </div>
              </div>
            </div>

            {/* Right: Learning Options */}
            <div className="lg:col-span-6 space-y-8 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002F6C] font-heading">
                  {d.learningOptions.title}
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mt-2 font-light">
                  {d.learningOptions.desc}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-7 space-y-4">
                  {d.learningOptions.list.map((option, idx) => (
                    <div key={idx} className="bg-white border border-slate-200/40 p-4 rounded-2xl flex gap-3 shadow-xs hover:shadow-md transition-shadow duration-205">
                      <span className="p-2 rounded-xl bg-blue-50 text-[#002F6C] self-start shrink-0">
                        <Shield size={16} />
                      </span>
                      <div>
                        <h4 className="font-extrabold text-slate-800 text-sm font-heading">{option.name}</h4>
                        <p className="text-xs text-slate-500 mt-0.5 leading-relaxed font-light">{option.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="md:col-span-5 relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200/60 hidden md:block">
                  <Image
                    src="/learn_hybrid.png"
                    alt="Flexible Learning Options"
                    fill
                    sizes="(max-width: 768px) 100vw, 350px"
                    className="object-cover transition-transform duration-300 hover:scale-103"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. YOUR JOURNEY TIMELINE */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-[#002F6C] font-heading">
            {d.journey.title}
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mt-2 font-light">
            {d.journey.desc}
          </p>
        </div>

        {/* Timeline Grid (Steps 1-6) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {d.journey.steps.map((step, idx) => {
            const colors = [
              "border-b-[#cf1430] bg-red-50/50 text-[#cf1430]",
              "border-b-[#00d084] bg-emerald-50/50 text-[#00d084]",
              "border-b-[#002F6C] bg-blue-50/50 text-[#002F6C]",
              "border-b-[#fcb900] bg-amber-50/50 text-[#fcb900]",
              "border-b-pink-500 bg-pink-50/50 text-pink-500",
              "border-b-purple-500 bg-purple-50/50 text-purple-500"
            ];
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -5, scale: 1.01 }}
                className={`relative overflow-hidden p-6 rounded-3xl bg-white border border-slate-200/50 shadow-md transition-all duration-300 flex flex-col justify-between border-b-4 ${colors[idx].split(" ")[0]}`}
              >
                <div>
                  <span className={`inline-block text-[10px] font-black uppercase tracking-wider mb-4 px-2 py-0.5 rounded-md ${colors[idx]}`}>
                    {step.step}
                  </span>
                  <h3 className="text-base font-extrabold text-slate-800 mb-2 font-heading">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 7. BOTTOM GET STARTED CTA */}
      <section className="py-20 bg-gradient-to-br from-[#002F6C] via-[#0b3c7b] to-[#124d9c] relative overflow-hidden text-white mx-4 sm:mx-6 rounded-3xl shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5 -translate-y-32 translate-x-32 bg-white" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-5 translate-y-16 -translate-x-16 bg-white" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
              {d.cta.title}
            </h2>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-light mt-3">
              {d.cta.desc}
            </p>
          </motion.div>

          <div className="pt-6 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-[#00d084] font-bold text-sm text-white shadow-xl hover:bg-[#00b070] transition-all hover:scale-105">
              {d.cta.btn} <ArrowRight size={16} className="rtl:rotate-180" />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-white/15 border border-white/30 backdrop-blur-sm font-bold text-sm text-white hover:bg-white/25 transition-all hover:scale-105">
              {d.cta.brochureBtn}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
