"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import ThemeAccent from "@/components/ThemeAccent";
import { motion } from "framer-motion";
import { Plane, Compass, Globe, Award, Users, BookOpen, Clock, Heart, CheckCircle2, ChevronRight, Phone, MessageSquare, Send, AlertCircle, Loader2 } from "lucide-react";

const content = {
  en: {
    hero: {
      badge: "STUDY ABROAD & INTERNATIONAL OPPORTUNITIES",
      title: "Explore the World Through Education",
      desc1: "International House Saudi Arabia (IHSA) connects students, professionals, and lifelong learners with international educational opportunities through trusted partnerships and the global International House network.",
      desc2: "Studying abroad is more than learning a language. It is an opportunity to experience new cultures, build international friendships, develop confidence, and gain valuable life experiences that support both personal and professional growth.",
      desc3: "Whether your goal is to improve your English, experience a new culture, prepare for university, or explore international career opportunities, IH Saudi Arabia can help you identify the right pathway."
    },
    whyStudy: {
      title: "Why Study Abroad?",
      subtitle: "International education offers unique opportunities that extend beyond the classroom.",
      desc: "Studying abroad provides an immersive environment that accelerates learning and broadens perspectives.",
      benefits: [
        "Improved language proficiency",
        "Greater confidence and independence",
        "International cultural awareness",
        "Enhanced academic and professional opportunities",
        "Global networking and friendships",
        "Personal growth and life experience"
      ]
    },
    network: {
      title: "International House Global Network",
      desc1: "As part of the International House World Organization (IHWO), IH Saudi Arabia is connected to a global network of language schools and educational institutions across multiple countries.",
      desc2: "This international network allows learners to access a wide range of educational experiences while benefiting from the quality standards and professional reputation associated with International House.",
      desc3: "Students can explore opportunities in some of the world's most exciting educational and cultural destinations."
    },
    opportunities: {
      title: "Study Abroad Opportunities",
      subtitle: "IH Saudi Arabia can support learners interested in a variety of international educational experiences.",
      header: "Opportunities May Include",
      list: [
        { name: "General English Programs", desc: "Standard language building for daily communication.", color: "border-[#002F6C]/20 hover:border-[#002F6C]/50 text-[#002F6C] bg-blue-50/50" },
        { name: "Intensive English Courses", desc: "Accelerated learning programs to boost fluency quickly.", color: "border-[#cf1430]/20 hover:border-[#cf1430]/50 text-[#cf1430] bg-red-50/50" },
        { name: "Summer Language Programs", desc: "Interactive summer study tours for teenagers and adults.", color: "border-[#00d084]/20 hover:border-[#00d084]/50 text-[#00d084] bg-emerald-50/50" },
        { name: "University Preparation Programs", desc: "Academic English and foundation study for university admission.", color: "border-[#fcb900]/20 hover:border-[#fcb900]/50 text-[#fcb900] bg-amber-50/50" },
        { name: "Exam Preparation Courses", desc: "Targeted training for IELTS, TOEFL, and Cambridge exams.", color: "border-[#9b51e0]/20 hover:border-[#9b51e0]/50 text-[#9b51e0] bg-purple-50/50" },
        { name: "Teacher Development Programs", desc: "Cambridge CELTA, TKT, and professional methodology training.", color: "border-blue-300 hover:border-blue-500 text-blue-800 bg-blue-100/50" },
        { name: "Cultural Exchange Experiences", desc: "Study programs focusing on local heritage and language immersion.", color: "border-rose-200 hover:border-rose-400 text-rose-800 bg-rose-50/50" },
        { name: "Short-Term Study Programs", desc: "Flexible 2 to 4-week study vacations in top global cities.", color: "border-teal-200 hover:border-teal-400 text-teal-800 bg-teal-50/50" }
      ]
    },
    destinations: {
      title: "Popular Destinations",
      subtitle: "Through our international partnerships and global network, learners may have access to opportunities in destinations including:",
      notice: "Available destinations and programs may change over time as new opportunities become available.",
      list: [
        { name: "United Kingdom", flag: "/flags/gb.svg", img: "/dest_london.png", desc: "Study in historic cities like London, Oxford, or Edinburgh." },
        { name: "United States", flag: "/flags/us.svg", img: "/dest_newyork.png", desc: "Immerse yourself in American academic and cultural life." },
        { name: "Canada", flag: "/flags/ca.svg", img: "/dest_toronto.png", desc: "Learn in multicultural cities like Toronto or Vancouver." },
        { name: "Australia", flag: "/flags/au.svg", img: "/dest_sydney.png", desc: "Combine world-class education with an outdoor lifestyle." },
        { name: "France", flag: "/flags/fr.svg", img: "/dest_paris.png", desc: "Immerse yourself in French culture, art, and culinary tradition." },
        { name: "Spain", flag: "/flags/es.svg", img: "/dest_madrid.png", desc: "Combine language studies with Mediterranean history." },
        { name: "Germany", flag: "/flags/de.svg", img: "/dest_berlin.png", desc: "Study in the economic and cultural heart of Europe." },
        { name: "Italy", flag: "/flags/it.svg", img: "/dest_rome.png", desc: "Immerse yourself in historic Roman charm." },
        { name: "South Africa", flag: "/flags/za.svg", img: "/dest_capetown.png", desc: "Study English at the scenic meeting point of two oceans." },
        { name: "United Arab Emirates", flag: "/flags/ae.svg", img: "/dest_dubai.png", desc: "Modern cosmopolitan English study in the Gulf." }
      ]
    },
    guidance: {
      title: "Personalized Guidance & Support",
      subtitle: "Choosing the right international program can be an important decision.",
      desc: "Our team provides guidance and support throughout the process, helping learners identify suitable programs based on their goals, interests, language level, budget, and preferred destination.",
      header: "Areas of support include:",
      list: [
        { name: "Program Selection", img: "/srv_flexible.png", desc: "Customizing your course length and intensity." },
        { name: "Educational Consultation", img: "/srv_certificates.png", desc: "Academic profiling to align with university goals." },
        { name: "Destination Guidance", img: "/srv_visa.png", desc: "Selecting the ideal city and country match." },
        { name: "Accommodation Advice", img: "/srv_accommodation.png", desc: "Choosing between student dorms or host families." },
        { name: "Pre-Departure Information", img: "/srv_transfers.png", desc: "Orientation sessions on flights, packing, and customs." },
        { name: "Travel and Logistics Support", img: "/srv_multicultural.png", desc: "Assisting with airport transfers and local campus support." }
      ]
    },
    moreThan: {
      title: "More Than a Language Program",
      subtitle: "International education is about building skills for the future.",
      desc1: "Study abroad experiences help learners develop communication skills, cultural awareness, adaptability, independence, and confidence—qualities that are increasingly valued in today's interconnected world.",
      desc2: "Through carefully selected educational opportunities, IH Saudi Arabia aims to help learners gain experiences that extend far beyond the classroom."
    },
    cta: {
      title: "Begin Your International Journey",
      subtitle: "Whether you are a student, a professional, a teacher, or simply someone interested in expanding your horizons, IH Saudi Arabia can help you explore international learning opportunities that match your goals.",
      header: "Study Abroad Services Include",
      list: [
        "Educational Consultation",
        "Program Selection Support",
        "Language School Placement",
        "Summer Programs",
        "Cultural Exchange Opportunities",
        "International Learning Pathways"
      ],
      notice: "Take the First Step: Contact our team to learn more about available destinations, programs, and international opportunities.",
      btn: "Enquire Now"
    }
  },
  ar: {
    hero: {
      badge: "الدراسة في الخارج والفرص الدولية",
      title: "استكشف العالم من خلال التعليم",
      desc1: "يربط معهد الهاوس الدولي السعودية (IHSA) الطلاب والمهنيين والمتعلمين مدى الحياة بفرص تعليمية دولية من خلال شراكات موثوقة وشبكة الهاوس الدولي العالمية.",
      desc2: "الدراسة في الخارج هي أكثر من مجرد تعلم لغة. إنها فرصة لتجربة ثقافات جديدة، وبناء صداقات دولية، وتطوير الثقة، واكتساب خبرات حياتية قيمة تدعم النمو الشخصي والمهني.",
      desc3: "سواء كان هدفك هو تحسين لغتك الإنجليزية، أو تجربة ثقافة جديدة، أو الاستعداد للجامعة، أو استكشاف فرص وظيفية دولية، فإن الهاوس الدولي السعودية يمكنه مساعدتك في تحديد المسار الصحيح."
    },
    whyStudy: {
      title: "لماذا الدراسة في الخارج؟",
      subtitle: "يقدم التعليم الدولي فرصاً فريدة تمتد إلى ما وراء قاعات الدراسة.",
      desc: "توفر الدراسة في الخارج بيئة غامرة تسرع التعلم وتوسع الآفاق الأكاديمية والشخصية.",
      benefits: [
        "تحسين الكفاءة والطلاقة اللغوية",
        "زيادة الثقة بالذات والاستقلالية",
        "الوعي الثقافي الدولي والتبادل المعرفي",
        "تعزيز الفرص الأكاديمية والمهنية المستقبلية",
        "بناء شبكة علاقات وصداقات عالمية",
        "النمو الشخصي واكتساب خبرات حياتية فريدة"
      ]
    },
    network: {
      title: "شبكة الهاوس الدولي العالمية",
      desc1: "كجزء من منظمة الهاوس الدولي العالمية (IHWO)، ترتبط الهاوس الدولي السعودية بشبكة عالمية من مدارس اللغات والمؤسسات التعليمية عبر دول متعددة.",
      desc2: "تسمح هذه الشبكة الدولية للمتعلمين بالوصول إلى مجموعة واسعة من التجارب التعليمية مع الاستفادة من معايير الجودة والسمعة المهنية المرتبطة بالهاوس الدولي.",
      desc3: "يمكن للطلاب استكشاف الفرص في بعض من أكثر الوجهات التعليمية والثقافية إثارة في العالم."
    },
    opportunities: {
      title: "فرص الدراسة في الخارج",
      subtitle: "يمكن للهاوس الدولي السعودية دعم المتعلمين المهتمين بمجموعة متنوعة من التجارب التعليمية الدولية.",
      header: "قد تشمل الفرص المتاحة:",
      list: [
        { name: "برامج اللغة الإنجليزية العامة", desc: "بناء أساس قوي للتواصل اليومي الفعال.", color: "border-[#002F6C]/20 hover:border-[#002F6C]/50 text-[#002F6C] bg-blue-50/50" },
        { name: "دورات اللغة الإنجليزية المكثفة", desc: "برامج دراسية سريعة لرفع مستوى الطلاقة واللغة.", color: "border-[#cf1430]/20 hover:border-[#cf1430]/50 text-[#cf1430] bg-red-50/50" },
        { name: "برامج اللغات الصيفية للشباب", desc: "رحلات دراسية تفاعلية صيفية للصغار والكبار.", color: "border-[#00d084]/20 hover:border-[#00d084]/50 text-[#00d084] bg-emerald-50/50" },
        { name: "برامج التحضير للقبول الجامعي", desc: "تأهيل أكاديمي متكامل للالتحاق بالجامعات العالمية.", color: "border-[#fcb900]/20 hover:border-[#fcb900]/50 text-[#fcb900] bg-amber-50/50" },
        { name: "دورات التحضير للامتحانات الدولية", desc: "تأهيل متخصص لاجتياز اختبارات آيلتس وتوفل بنجاح.", color: "border-[#9b51e0]/20 hover:border-[#9b51e0]/50 text-[#9b51e0] bg-purple-50/50" },
        { name: "برامج تطوير وتأهيل المعلمين", desc: "دورات كامبريدج CELTA وTKT لرفع الكفاءة التدريسية.", color: "border-blue-300 hover:border-blue-500 text-blue-800 bg-blue-100/50" },
        { name: "تجارب التبادل الثقافي الدولي", desc: "برامج دراسية تركز على الانغماس الثقافي واللغوي المحلي.", color: "border-rose-200 hover:border-rose-400 text-rose-800 bg-rose-50/50" },
        { name: "برامج الدراسة والتدريب قصيرة المدى", desc: "رحلات دراسية مرنة تمتد من أسبوعين إلى 4 أسابيع.", color: "border-teal-200 hover:border-teal-400 text-teal-800 bg-teal-50/50" }
      ]
    },
    destinations: {
      title: "الوجهات الشهيرة",
      subtitle: "من خلال شراكاتنا الدولية وشبكتنا العالمية، قد يتاح للمتعلمين فرصة الوصول إلى فرص في وجهات تشمل:",
      notice: "قد تتغير الوجهات والبرامج المتاحة بمرور الوقت مع توفر فرص جديدة ومميزة.",
      list: [
        { name: "المملكة المتحدة", flag: "/flags/gb.svg", img: "/dest_london.png", desc: "الدراسة في مدن تاريخية مثل لندن، أكسفورد، أو إدنبرة." },
        { name: "الولايات المتحدة", flag: "/flags/us.svg", img: "/dest_newyork.png", desc: "الانغماس الكامل في الحياة الأكاديمية والثقافية الأمريكية." },
        { name: "كندا", flag: "/flags/ca.svg", img: "/dest_toronto.png", desc: "التعلم في مدن آمنة ومتعددة الثقافات مثل تورونتو أو فانكوفر." },
        { name: "أستراليا", flag: "/flags/au.svg", img: "/dest_sydney.png", desc: "الجمع بين التعليم المتميز عالمياً ونمط الحياة الطبيعي الجذاب." },
        { name: "فرنسا", flag: "/flags/fr.svg", img: "/dest_paris.png", desc: "الانغماس في الثقافة والسينما والفنون والتقاليد الفرنسية العريقة." },
        { name: "إسبانيا", flag: "/flags/es.svg", img: "/dest_madrid.png", desc: "دمج دراسة اللغة الإسبانية مع استكشاف التاريخ العريق." },
        { name: "ألمانيا", flag: "/flags/de.svg", img: "/dest_berlin.png", desc: "الدراسة في القلب الاقتصادي والثقافي النابض لأوروبا." },
        { name: "إيطاليا", flag: "/flags/it.svg", img: "/dest_rome.png", desc: "الانغماس الكامل في سحر روما والتاريخ الإيطالي العريق." },
        { name: "جنوب أفريقيا", flag: "/flags/za.svg", img: "/dest_capetown.png", desc: "تعلم اللغة الإنجليزية في كيب تاون الرائعة بين جبل الطاولة والمحيط." },
        { name: "الإمارات العربية المتحدة", flag: "/flags/ae.svg", img: "/dest_dubai.png", desc: "دراسة إنجليزية متطورة وحياة عصرية متميزة في مدينة دبي." }
      ]
    },
    guidance: {
      title: "التوجيه والدعم الشخصي",
      subtitle: "يمكن أن يكون اختيار البرنامج الدولي المناسب قراراً هاماً ومصيرياً.",
      desc: "يقدم فريقنا التوجيه والدعم طوال العملية، مما يساعد المتعلمين على تحديد البرامج المناسبة بناءً على أهدافهم واهتماماتهم ومستواهم اللغوي وميزانيتهم ووجهتهم المفضلة.",
      header: "مجالات الدعم المتاحة تشمل:",
      list: [
        { name: "اختيار وتحديد البرنامج الأكاديمي", img: "/srv_flexible.png", desc: "تحديد مدة الدورة ووتيرة الدراسة المناسبة لك." },
        { name: "الاستشارات التعليمية المتخصصة", img: "/srv_certificates.png", desc: "تقييم أكاديمي للتوافق مع أهداف القبول الجامعي." },
        { name: "التوجيه لاختيار الوجهة والمدينة", img: "/srv_visa.png", desc: "مساعدتك في اختيار الدولة والمدينة الأكثر ملاءمة." },
        { name: "تقديم خيارات السكن والإقامة", img: "/srv_accommodation.png", desc: "الاختيار بين السكن الطلابي أو الإقامة مع عائلات مضيفة." },
        { name: "جلسات التوجيه قبل المغادرة", img: "/srv_transfers.png", desc: "إرشادات تفصيلية حول تذاكر الطيران والحقائب والجمارك." },
        { name: "دعم ترتيبات السفر والخدمات اللوجستية", img: "/srv_multicultural.png", desc: "تأمين الاستقبال من المطار ودعم السفر والتأشيرة." }
      ]
    },
    moreThan: {
      title: "أكثر من مجرد برنامج لغة",
      subtitle: "التعليم الدولي يدور حول بناء مهارات للمستقبل.",
      desc1: "تساعد تجارب الدراسة في الخارج المتعلمين على تطوير مهارات التواصل، والوعي الثقافي، والقدرة على التكيف، والاستقلالية، والثقة - وهي صفات تحظى بتقدير متزايد في عالمنا المترابط اليوم.",
      desc2: "من خلال فرص تعليمية مختارة بعناية، تهدف الهاوس الدولي السعودية إلى مساعدة المتعلمين على اكتساب خبرات تمتد إلى ما هو أبعد من فصول الدراسة التقليدية."
    },
    cta: {
      title: "ابدأ رحلتك الدولية",
      subtitle: "سواء كنت طالباً، أو مهنياً، أو معلماً، أو مجرد شخص مهتم بتوسيع آفاقه، يمكن للهاوس الدولي السعودية مساعدتك في استكشاف فرص التعلم الدولية التي تتوافق مع أهدافك.",
      header: "تشمل خدمات الدراسة في الخارج ما يلي:",
      list: [
        "الاستشارات التعليمية المتكاملة",
        "دعم اختيار وتحديد البرنامج المناسب",
        "القبول والتسجيل في مدارس اللغات العالمية",
        "البرامج الصيفية التعليمية",
        "فرص التبادل والتعايش الثقافي",
        "مسارات التعلم الأكاديمي الدولي"
      ],
      notice: "اتخذ الخطوة الأولى: اتصل بفريقنا لمعرفة المزيد عن الوجهات والبرامج والفرص الدولية المتاحة.",
      btn: "استفسر الآن"
    }
  }
};

export default function StudyAbroadPage() {
  const { lang, isRTL } = useLanguage();
  const c = content[lang] || content.en;

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    programType: "",
    duration: "",
    startDate: "",
    accommodation: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};
    const commonReq = lang === "ar" ? "هذا الحقل مطلوب" : "This field is required";
    if (!form.name.trim()) errors.name = commonReq;
    if (!form.email.trim()) errors.email = commonReq;
    if (!form.phone.trim()) errors.phone = commonReq;
    if (!form.destination) errors.destination = commonReq;
    if (!form.programType) errors.programType = commonReq;
    if (!form.duration) errors.duration = commonReq;
    if (!form.startDate) errors.startDate = commonReq;
    if (!form.accommodation) errors.accommodation = commonReq;

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        destination: "",
        programType: "",
        duration: "",
        startDate: "",
        accommodation: "",
        message: "",
      });
      setValidationErrors({});
    }, 1200);
  };

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <ThemeAccent />

      {/* 1. Hero Banner - Clean Light Design */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-100 via-white to-slate-50 border-b border-slate-200 py-20 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,47,108,0.03)_0%,transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-red-50 border border-red-100 text-red-600 mb-6"
          >
            {c.hero.badge}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-[#002f6c]"
          >
            {c.hero.title}
          </motion.h1>
          <div className="max-w-3xl mx-auto space-y-4 text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed font-light">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {c.hero.desc1}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {c.hero.desc2}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-[#cf1430] font-normal"
            >
              {c.hero.desc3}
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2. Why Study Abroad? */}
      <section id="why-study-abroad" className="py-20 lg:py-24 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002f6c] mb-4">{c.whyStudy.title}</h2>
            <p className="text-gray-500 text-sm md:text-base">{c.whyStudy.subtitle}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {c.whyStudy.desc}
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {c.whyStudy.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex gap-3 bg-white p-4 rounded-xl border border-slate-150 shadow-3xs items-start">
                    <CheckCircle2 size={18} className="text-green-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 flex items-center justify-center border border-slate-200"
            >
              <Image src="/beta_assets/study_abroad-1.png" alt="International House Study Abroad Experience" fill className="object-cover pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. International House Global Network */}
      <section id="global-network" className="py-20 lg:py-24 bg-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:order-2 relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 flex items-center justify-center border border-slate-200"
            >
              <Image src="/learn_hybrid.png" alt="Global Network Interaction" fill className="object-cover pointer-events-none" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:order-1 space-y-6 text-start"
            >
              <h2 className="text-3xl font-bold text-[#002f6c]">{c.network.title}</h2>
              <div className="w-12 h-1 bg-red-600 rounded-full" />
              <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed font-light">
                <p>{c.network.desc1}</p>
                <p>{c.network.desc2}</p>
                <p className="font-semibold text-gray-700">{c.network.desc3}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Study Abroad Opportunities */}
      <section id="opportunities" className="py-20 lg:py-24 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002f6c] mb-4">{c.opportunities.title}</h2>
            <p className="text-gray-500 text-sm md:text-base">{c.opportunities.subtitle}</p>
          </div>

          <div className="bg-white p-8 lg:p-12 rounded-3xl border border-slate-150 shadow-sm">
            <h3 className="text-lg font-bold text-gray-800 mb-6 text-center border-b border-gray-100 pb-4">
              {c.opportunities.header}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {c.opportunities.list.map((item, idx) => (
                <div key={idx} className={`border rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition-all duration-350 cursor-pointer ${item.color}`}>
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-4 shadow-3xs">
                    <BookOpen size={20} />
                  </div>
                  <div>
                    <span className="text-sm font-extrabold block mb-1">{item.name}</span>
                    <span className="text-[10px] opacity-75 font-medium leading-tight block">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Popular Destinations */}
      <section id="destinations" className="py-20 lg:py-24 bg-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002f6c] mb-4">{c.destinations.title}</h2>
            <p className="text-gray-500 text-sm md:text-base">{c.destinations.subtitle}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {c.destinations.list.map((dest, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-2xl border border-slate-150 overflow-hidden shadow-3xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden shrink-0">
                  <Image src={dest.img} alt={dest.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-3 left-3 z-10 w-6 h-6 rounded-full overflow-hidden border border-white/85 shadow-3xs">
                    <Image src={dest.flag} alt="" fill className="object-cover" />
                  </div>
                </div>
                <div className="p-4 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs font-extrabold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">{dest.name}</h3>
                    <p className="text-[10px] text-gray-500 leading-normal line-clamp-2">{dest.desc}</p>
                  </div>
                  <div className="flex items-center gap-1 text-[9px] font-bold text-[#002f6c] pt-3 mt-auto">
                    <span>{lang === "ar" ? "تفاصيل الوجهة" : "Explore Destination"}</span>
                    <ChevronRight size={10} className="rtl:rotate-180 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 text-xs max-w-xl mx-auto">
              ℹ️ {c.destinations.notice}
            </p>
          </div>
        </div>
      </section>

      {/* 6. Personalized Guidance & Support */}
      <section id="support" className="py-20 lg:py-24 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002f6c] mb-4">{c.guidance.title}</h2>
            <p className="text-gray-500 text-sm md:text-base">{c.guidance.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {c.guidance.list.map((srv, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-3xl border border-slate-150 overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
              >
                <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden shrink-0">
                  <Image src={srv.img} alt={srv.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-sm font-extrabold text-gray-800 mb-2">{srv.name}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{srv.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. More Than a Language Program */}
      <section id="more-than-language" className="py-20 lg:py-24 bg-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative shadow-sm border border-slate-200">
              <Image src="/learn_face_to_face.png" alt="Communication Skills" fill className="object-cover pointer-events-none" />
            </div>

            <motion.div
              initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-[#002f6c]">{c.moreThan.title}</h2>
              <div className="w-12 h-1 bg-[#cf1430] rounded-full" />
              <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed font-light">
                <p>{c.moreThan.desc1}</p>
                <p>{c.moreThan.desc2}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. Call to Action - Clean Light Design */}
      <section id="cta" className="py-20 bg-white border-y border-slate-200/60 text-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-start">
              <h2 className="text-3xl font-bold mb-4 text-[#002f6c]">{c.cta.title}</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {c.cta.subtitle}
              </p>
              <div className="border-t border-slate-100 pt-6">
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#cf1430] mb-4">{c.cta.header}</h4>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {c.cta.list.map((srv, idx) => (
                    <li key={idx} className="flex gap-2 text-xs text-gray-600">
                      <CheckCircle2 size={14} className="text-green-600 shrink-0 mt-0.5" />
                      <span>{srv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-150 p-8 rounded-3xl text-center space-y-6">
              <h3 className="text-xl font-bold text-gray-800">{lang === "ar" ? "تواصل معنا اليوم" : "Get In Touch Today"}</h3>
              <p className="text-gray-500 text-xs md:text-sm">
                {c.cta.notice}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#abroad-enquiry-section"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-2xl text-sm transition-all"
                >
                  <MessageSquare size={16} />
                  {c.cta.btn}
                </a>
                <a
                  href="tel:+966920000364"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-slate-200 hover:bg-slate-100 text-gray-800 font-bold rounded-2xl text-sm transition-all"
                >
                  <Phone size={16} />
                  +966 920 000 364
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 9: INLINE STUDY ABROAD ENQUIRY FORM ─── */}
      <section id="abroad-enquiry-section" className="py-24 bg-slate-50 border-t border-slate-200 scroll-mt-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#002f6c] mb-3">
              {lang === "ar" ? "استفسر عن الدراسة في الخارج" : "Enquire About Studying Abroad"}
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              {lang === "ar"
                ? "املأ استمارة الاستفسار هذه وسيتواصل معك مستشار البعثات والدراسة الدولية في أقرب وقت."
                : "Fill out this form to connect with our Study Abroad consultant and plan your global learning journey."}
            </p>
          </div>

          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="h-1.5 absolute top-0 left-0 right-0 bg-[#002f6c]" />

            {formSubmitted ? (
              <div className="text-center py-10">
                <CheckCircle2 size={48} className="text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-[#002f6c] mb-2">
                  {lang === "ar" ? "تم إرسال استفسارك بنجاح!" : "Enquiry Submitted Successfully!"}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-md mx-auto">
                  {lang === "ar"
                    ? "شكراً لتواصلك معنا بخصوص الدراسة في الخارج مع الهاوس الدولي. سيقوم مستشار الدراسة الدولية لدينا بالتواصل معك خلال ٢٤ ساعة لمناقشة خيارات القبول والسفر والإقامة."
                    : "Thank you for contacting us about studying abroad. Our international study consultant will contact you within 24 hours to discuss admission pathways, visas, and destinations."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                {/* Full Name & Email */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                      {lang === "ar" ? "الاسم الكامل" : "Full Name"} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => {
                        setForm({ ...form, name: e.target.value });
                        if (validationErrors.name) setValidationErrors({ ...validationErrors, name: "" });
                      }}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 transition-all ${
                        validationErrors.name ? "border-red-500" : "border-slate-200"
                      }`}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                      {lang === "ar" ? "البريد الإلكتروني" : "Email Address"} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => {
                        setForm({ ...form, email: e.target.value });
                        if (validationErrors.email) setValidationErrors({ ...validationErrors, email: "" });
                      }}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 transition-all ${
                        validationErrors.email ? "border-red-500" : "border-slate-200"
                      }`}
                    />
                  </div>
                </div>

                {/* Phone & Destination */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                      {lang === "ar" ? "رقم الجوال" : "Phone Number"} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => {
                        setForm({ ...form, phone: e.target.value });
                        if (validationErrors.phone) setValidationErrors({ ...validationErrors, phone: "" });
                      }}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 transition-all ${
                        validationErrors.phone ? "border-red-500" : "border-slate-200"
                      }`}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                      {lang === "ar" ? "الوجهة المفضلة" : "Preferred Destination"} <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      value={form.destination}
                      onChange={(e) => setForm({ ...form, destination: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
                    >
                      <option value="">{lang === "ar" ? "اختر الوجهة" : "Select Destination"}</option>
                      <option value="UK">{lang === "ar" ? "المملكة المتحدة" : "United Kingdom"}</option>
                      <option value="US">{lang === "ar" ? "الولايات المتحدة الأمريكية" : "United States"}</option>
                      <option value="Canada">{lang === "ar" ? "كندا" : "Canada"}</option>
                      <option value="Australia">{lang === "ar" ? "أستراليا" : "Australia"}</option>
                      <option value="France">{lang === "ar" ? "فرنسا" : "France"}</option>
                      <option value="Spain">{lang === "ar" ? "إسبانيا" : "Spain"}</option>
                      <option value="Germany">{lang === "ar" ? "ألمانيا" : "Germany"}</option>
                      <option value="Italy">{lang === "ar" ? "إيطاليا" : "Italy"}</option>
                      <option value="South Africa">{lang === "ar" ? "جنوب أفريقيا" : "South Africa"}</option>
                      <option value="UAE">{lang === "ar" ? "الإمارات العربية المتحدة" : "United Arab Emirates"}</option>
                    </select>
                  </div>
                </div>

                {/* Program Type & Intended Duration */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                      {lang === "ar" ? "نوع البرنامج الدراسي" : "Program Type"} <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      value={form.programType}
                      onChange={(e) => setForm({ ...form, programType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
                    >
                      <option value="">{lang === "ar" ? "اختر نوع البرنامج" : "Select Program Type"}</option>
                      <option value="general">{lang === "ar" ? "برامج اللغة العامة" : "General English Programs"}</option>
                      <option value="intensive">{lang === "ar" ? "دورات لغة مكثفة" : "Intensive Language Courses"}</option>
                      <option value="summer">{lang === "ar" ? "مخيم صيفي للشباب" : "Summer Youth Programs"}</option>
                      <option value="university">{lang === "ar" ? "تأهيل وقبول جامعي" : "University Foundation Prep"}</option>
                      <option value="exams">{lang === "ar" ? "تحضير للاختبارات الدولية" : "International Exam Prep"}</option>
                      <option value="teacher_training">{lang === "ar" ? "تطوير المعلمين (CELTA)" : "Teacher Development (CELTA)"}</option>
                      <option value="exchange">{lang === "ar" ? "تبادل ثقافي" : "Cultural Exchange"}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                      {lang === "ar" ? "المدة المقترحة" : "Intended Duration"} <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      value={form.duration}
                      onChange={(e) => setForm({ ...form, duration: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
                    >
                      <option value="">{lang === "ar" ? "اختر مدة الدراسة" : "Select Duration"}</option>
                      <option value="2_4_weeks">{lang === "ar" ? "من ٢ إلى ٤ أسابيع" : "2 to 4 Weeks"}</option>
                      <option value="1_3_months">{lang === "ar" ? "من شهر إلى ٣ أشهر" : "1 to 3 Months"}</option>
                      <option value="3_6_months">{lang === "ar" ? "من ٣ إلى ٦ أشهر" : "3 to 6 Months"}</option>
                      <option value="6_months_plus">{lang === "ar" ? "٦ أشهر فأكثر" : "6+ Months"}</option>
                    </select>
                  </div>
                </div>

                {/* Start Date & Accommodation */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                      {lang === "ar" ? "تاريخ البدء المتوقع" : "Target Start Date"} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      required
                      value={form.startDate}
                      onChange={(e) => setForm({ ...form, startDate: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                      {lang === "ar" ? "خيار السكن المفضل" : "Accommodation Preference"} <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      value={form.accommodation}
                      onChange={(e) => setForm({ ...form, accommodation: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
                    >
                      <option value="">{lang === "ar" ? "اختر خيار السكن" : "Select Accommodation"}</option>
                      <option value="homestay">{lang === "ar" ? "سكن مع عائلة مضيفة" : "Homestay (Living with family)"}</option>
                      <option value="residence">{lang === "ar" ? "سكن طلابي / مهجع جماعي" : "Student Residence / Dorms"}</option>
                      <option value="apartment">{lang === "ar" ? "شقة سكنية خاصة" : "Private Apartment"}</option>
                      <option value="none">{lang === "ar" ? "غير مطلوب" : "Not Required (Self-arranged)"}</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                    {lang === "ar" ? "الرسالة / متطلبات خاصة" : "Message / Requirements"}
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-sm text-white bg-[#cf1430] hover:bg-red-700 shadow-md hover:shadow-lg disabled:opacity-50 select-none cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={16} />
                      <span>{lang === "ar" ? "جاري الإرسال..." : "Sending..."}</span>
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      <span>{lang === "ar" ? "إرسال الاستفسار" : "Submit Enquiry"}</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
