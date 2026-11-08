"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import ThemeAccent from "@/components/ThemeAccent";
import { motion } from "framer-motion";
import { Briefcase, CheckCircle2, ShieldCheck, ClipboardCheck, ArrowRight, Laptop, Users, GraduationCap, Star, Layers, TrendingUp, Settings, Mail, Phone, MapPin, Send, AlertCircle, Loader2 } from "lucide-react";

const content = {
  en: {
    hero: {
      tag: "Vision 2030 Upskilling Partner",
      title: "Corporate Language Training Solutions",
      subtitle: "Customizable, TVTC-accredited language and communication programs designed to maximize your workforce potential."
    },
    sections: {
      whyIh: {
        title: "Why Corporate Clients Choose IH Saudi Arabia",
        subtitle: "A trusted educational partner delivering tangible training outcomes.",
        items: [
          {
            title: "TVTC Accreditation",
            desc: "Our courses are fully recognized and accredited by the Technical and Vocational Training Corporation (TVTC).",
            icon: ShieldCheck
          },
          {
            title: "Vision 2030 Alignment",
            desc: "Active support for Saudization and human capability development targets in KSA industries.",
            icon: GraduationCap
          },
          {
            title: "30+ Years KSA Excellence",
            desc: "Deep local experience catering to top companies in oil & gas, engineering, and banking.",
            icon: Star
          },
          {
            title: "Global Standards",
            desc: "We match the strict quality guidelines of the International House World Organization (IHWO).",
            icon: Users
          }
        ]
      },
      solutions: {
        title: "Our Corporate Training Solutions",
        subtitle: "Targeted programs designed to address specific business needs.",
        cards: [
          {
            title: "General & Business English",
            desc: "Build core communication confidence, email writing skills, and presentation delivery.",
            img: "/corp_business.png"
          },
          {
            title: "English for Specific Purposes (ESP)",
            desc: "Specialized terminology programs for Engineering, Healthcare, Oil & Gas, Aviation, and Finance.",
            img: "/corp_technical.png"
          },
          {
            title: "International Exam Prep",
            desc: "Comprehensive preparation courses for IELTS, TOEFL, OET, and Cambridge English exams.",
            img: "/english_corporate.png"
          },
          {
            title: "Teacher Training & Professional Certs",
            desc: "Support and preparation for Cambridge CELTA to upskill institutional English instructors.",
            img: "/corp_executive.png"
          }
        ]
      },
      assessment: {
        title: "Placement Testing & Language Assessment",
        subtitle: "Establish accurate benchmarks before training begins.",
        desc: "To ensure maximum ROI on your training investment, we conduct thorough placement assessments for all participating staff. Our validated testing methods accurately map proficiency levels and direct learners to appropriate courses.",
        features: [
          "Validated online testing platform with 24/7 client dashboard access.",
          "Comprehensive diagnostics reporting for HR and training departments.",
          "Aligned with the Common European Framework of Reference for Languages (CEFR).",
          "Speaking interviews conducted by certified oral examiners."
        ]
      },
      process: {
        title: "Our Corporate Training Process",
        subtitle: "Five structured stages to ensure seamless program execution.",
        steps: [
          { num: "01", name: "Needs Analysis", desc: "Consulting with HR to understand corporate objectives and sector requirements." },
          { num: "02", name: "Language Assessment", desc: "Testing staff to establish baseline proficiency and group learners logically." },
          { num: "03", name: "Program Design", desc: "Customizing curriculum content, schedule frameworks, and assessment metrics." },
          { num: "04", name: "Delivery & Execution", desc: "Interactive classes led by certified native-speaking trainers." },
          { num: "05", name: "Evaluation & Reporting", desc: "Comprehensive final testing, attendance reporting, and ROI analytics." }
        ]
      },
      delivery: {
        title: "Flexible Delivery Options",
        subtitle: "Training that fits around your operational schedule.",
        options: [
          { title: "Face-to-Face On-Site", desc: "Our certified trainers conduct classes directly at your office or facility.", icon: MapPin, img: "/beta_assets/corporate_training.png" },
          { title: "Live Virtual Classroom", desc: "Flexible, interactive online classes delivered via our custom platform.", icon: Laptop, img: "/beta_assets/online_class.png" },
          { title: "Blended Learning Paths", desc: "A hybrid framework combining online self-study with structured teacher-led sessions.", icon: Settings, img: "/beta_assets/pic1.png" }
        ]
      },
      workforce: {
        title: "Supporting Workforce Development",
        desc: "As Saudi Arabia moves rapidly toward a knowledge-based economy under Vision 2030, English language proficiency is a critical enabler for national talent. We partner with government entities, private enterprises, and vocational training funds to ensure local workforces meet global corporate standards.",
        btn: "Read Success Stories"
      },
      proposal: {
        title: "Request a Corporate Proposal",
        subtitle: "Submit your details and our corporate accounts manager will contact you within 24 hours.",
        form: {
          company: "Company Name",
          contactPerson: "Contact Person",
          email: "Business Email",
          phone: "Phone Number",
          learners: "Expected Number of Learners",
          message: "Training Requirements",
          submit: "Submit Request"
        },
        success: "Thank you! Your request has been received. Our team will contact you shortly."
      }
    }
  },
  ar: {
    hero: {
      tag: "شريك تطوير مهارات رؤية 2030",
      title: "حلول التدريب اللغوي للشركات",
      subtitle: "برامج تدريب لغوية وتواصلية مرنة ومعتمدة من المؤسسة العامة للتدريب التقني والمهني لتحقيق أقصى إمكانات موظفيك."
    },
    sections: {
      whyIh: {
        title: "لماذا يختار العملاء المؤسسيون IH السعودية",
        subtitle: "شريك تعليمي موثوق يقدم نتائج تدريبية ملموسة وقابلة للقياس.",
        items: [
          {
            title: "اعتماد المؤسسة العامة (TVTC)",
            desc: "جميع دوراتنا معترف بها ومعتمدة بالكامل من قبل المؤسسة العامة للتدريب التقني والمهني.",
            icon: ShieldCheck
          },
          {
            title: "التوافق مع رؤية 2030",
            desc: "دعم فعال لمستهدفات التوطين وتنمية القدرات البشرية في مختلف القطاعات الصناعية بالمملكة.",
            icon: GraduationCap
          },
          {
            title: "أكثر من 30 عاماً من التميز",
            desc: "خبرة محلية عميقة في تلبية احتياجات كبريات الشركات في مجالات النفط والغاز، الهندسة، والمصارف.",
            icon: Star
          },
          {
            title: "معايير جودة عالمية",
            desc: "نلتزم بمعايير الجودة الصارمة لمنظمة الهاوس الدولي العالمية (IHWO).",
            icon: Users
          }
        ]
      },
      solutions: {
        title: "حلول التدريب المؤسسي لدينا",
        subtitle: "برامج هادفة مصممة لتلبية احتياجات الأعمال المحددة.",
        cards: [
          {
            title: "اللغة الإنجليزية العامة والأعمال",
            desc: "بناء الثقة الأساسية في التواصل، مهارات كتابة البريد الإلكتروني، وتقديم العروض التقديمية.",
            img: "/corp_business.png"
          },
          {
            title: "الإنجليزية لأغراض خاصة (ESP)",
            desc: "برامج المصطلحات المتخصصة للهندسة، الرعاية الصحية، النفط والغاز، الطيران، والمالية.",
            img: "/corp_technical.png"
          },
          {
            title: "التحضير للاختبارات الدولية",
            desc: "دورات تحضيرية شاملة لاختبارات IELTS و TOEFL و OET وامتحانات كامبريدج.",
            img: "/english_corporate.png"
          },
          {
            title: "تدريب المعلمين والشهادات المهنية",
            desc: "دعم وتحضير لدورة كامبريدج CELTA للارتقاء بمهارات معلمي اللغة الإنجليزية في المؤسسات.",
            img: "/corp_executive.png"
          }
        ]
      },
      assessment: {
        title: "اختبار التصنيف وتقييم اللغة",
        subtitle: "تحديد مستويات دقيقة للموظفين قبل بدء التدريب.",
        desc: "لضمان تحقيق أقصى عائد على استثمارك في التدريب، نقوم بإجراء تقييمات تصنيفية شاملة لجميع الموظفين المشاركين. تحدد طرق الاختبار المعتمدة لدينا مستويات الكفاءة بدقة وتوزع المتعلمين على الدورات المناسبة.",
        features: [
          "منصة اختبار إلكترونية معتمدة مع إمكانية وصول الموارد البشرية للنتائج على مدار الساعة.",
          "تقارير تشخيصية شاملة لإدارات الموارد البشرية والتدريب.",
          "متوافق مع الإطار الأوروبي المشترك المرجعي للغات (CEFR).",
          "مقابلات محادثة يجريها مقيمون أكاديميون معتمدون."
        ]
      },
      process: {
        title: "عملية التدريب المؤسسي لدينا",
        subtitle: "خمس مراحل هيكلية تضمن تنفيذ البرنامج بسلاسة وفعالية.",
        steps: [
          { num: "01", name: "تحليل الاحتياجات", desc: "التشاور مع الموارد البشرية لفهم أهداف الشركة ومتطلبات القطاع." },
          { num: "02", name: "تقييم اللغة", desc: "اختبار الموظفين لتحديد كفاءتهم اللغوية الأساسية وتوزيعهم بشكل منطقي." },
          { num: "03", name: "تصميم البرنامج", desc: "تخصيص محتوى المنهج وهياكل الجداول الزمنية ومقاييس التقييم." },
          { num: "04", name: "التقديم والتنفيذ", desc: "فصول دراسية تفاعلية يقودها مدربون مؤهلون متحدثون بالإنجليزية كلغة أم." },
          { num: "05", name: "التقييم وإصدار التقارير", desc: "الاختبار النهائي الشامل، تقارير الحضور، وتحليلات عائد الاستثمار." }
        ]
      },
      delivery: {
        title: "خيارات التقديم المرنة",
        subtitle: "تدريب يتناسب مع جداول أعمالك التشغيلية دون انقطاع.",
        options: [
          { title: "وجهاً لوجه في الموقع", desc: "يقوم مدربونا المعتمدون بتقديم الفصول الدراسية مباشرة في مقرات شركتكم.", icon: MapPin, img: "/beta_assets/corporate_training.png" },
          { title: "فصول افتراضية مباشرة", desc: "فصول تفاعلية مرنة عبر الإنترنت تُقدَّم من خلال منصتنا المخصصة.", icon: Laptop, img: "/beta_assets/online_class.png" },
          { title: "مسارات التعلم المدمج", desc: "إطار هجين يجمع بين الدراسة الذاتية عبر الإنترنت والجلسات المباشرة مع المعلم.", icon: Settings, img: "/beta_assets/pic1.png" }
        ]
      },
      workforce: {
        title: "دعم تطوير القوى العاملة الوطنية",
        desc: "مع تحرك المملكة العربية السعودية السريع نحو اقتصاد قائم على المعرفة بموجب رؤية 2030، يعد إتقان اللغة الإنجليزية ممكناً حاسماً للمواهب الوطنية. نحن نشارك الكيانات الحكومية والمؤسسات الخاصة وصناديق التدريب المهني لضمان تلبية الكوادر المحلية لمعايير الأعمال العالمية.",
        btn: "اقرأ قصص النجاح"
      },
      proposal: {
        title: "طلب عرض أسعار وبرنامج تدريبي",
        subtitle: "أدخل تفاصيل مؤسستك وسيتواصل معك مدير حسابات الشركات لدينا في غضون 24 ساعة.",
        form: {
          company: "اسم الشركة",
          contactPerson: "الشخص المسؤول",
          email: "البريد الإلكتروني للعمل",
          phone: "رقم الهاتف",
          learners: "العدد المتوقع للمتدربين",
          message: "متطلبات التدريب والاهداف",
          submit: "إرسال الطلب"
        },
        success: "شكرًا لك! تم استلام طلبك بنجاح. سيتواصل معك فريقنا قريباً."
      }
    }
  }
};

export default function CorporatePage() {
  const { lang, isRTL } = useLanguage();
  const c = content[lang] || content.en;
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [form, setForm] = useState({
    company: "",
    contactName: "",
    email: "",
    phone: "",
    industry: "",
    learnersCount: "",
    focus: "",
    deliveryFormat: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};
    const commonReq = lang === "ar" ? "هذا الحقل مطلوب" : "This field is required";
    if (!form.company.trim()) errors.company = commonReq;
    if (!form.contactName.trim()) errors.contactName = commonReq;
    if (!form.email.trim()) errors.email = commonReq;
    if (!form.phone.trim()) errors.phone = commonReq;
    if (!form.industry) errors.industry = commonReq;
    if (!form.learnersCount) errors.learnersCount = commonReq;
    if (!form.focus) errors.focus = commonReq;
    if (!form.deliveryFormat) errors.deliveryFormat = commonReq;

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setForm({
        company: "",
        contactName: "",
        email: "",
        phone: "",
        industry: "",
        learnersCount: "",
        focus: "",
        deliveryFormat: "",
        message: "",
      });
      setValidationErrors({});
    }, 1200);
  };

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <ThemeAccent />

      {/* Hero Section - Clean Light Design */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-100 via-white to-slate-50 border-b border-slate-200 py-20 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,47,108,0.03)_0%,transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-red-50 border border-red-100 text-red-600 mb-6"
          >
            {c.hero.tag}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-[#002f6c]"
          >
            {c.hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light"
          >
            {c.hero.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Why Corporate Clients Choose Us */}
      <section id="why-ih" className="py-20 lg:py-24 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002f6c] mb-4">{c.sections.whyIh.title}</h2>
            <p className="text-gray-500 text-sm md:text-base">{c.sections.whyIh.subtitle}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {c.sections.whyIh.items.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-6 rounded-2xl border border-slate-150 shadow-sm text-center flex flex-col items-center hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-base font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Corporate Solutions */}
      <section id="solutions" className="py-20 lg:py-24 bg-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002f6c] mb-4">{c.sections.solutions.title}</h2>
            <p className="text-gray-500 text-sm md:text-base">{c.sections.solutions.subtitle}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.sections.solutions.cards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 rounded-2xl border border-slate-150 overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow group cursor-pointer"
              >
                <div className="relative aspect-[16/10] bg-slate-200 overflow-hidden shrink-0">
                  <Image src={card.img} alt={card.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-extrabold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">{card.title}</h3>
                    <p className="text-gray-500 text-[11px] leading-relaxed">{card.desc}</p>
                  </div>
                  <div className="w-6 h-6 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 self-end mt-4">
                    <CheckCircle2 size={12} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Testing & Language Assessment */}
      <section id="assessment" className="py-20 lg:py-24 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-white p-8 lg:p-12 rounded-3xl border border-slate-150 shadow-sm grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest block mb-3">
                {c.sections.assessment.subtitle}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#002f6c] mb-6">
                {c.sections.assessment.title}
              </h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8">
                {c.sections.assessment.desc}
              </p>
              <ul className="space-y-3.5">
                {c.sections.assessment.features.map((feat, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-gray-600">
                    <CheckCircle2 size={18} className="text-red-500 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative shadow-sm border border-slate-200">
              <Image src="/beta_assets/placement_test.png" alt="Corporate language assessment" fill className="object-cover pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Process */}
      <section id="process" className="py-20 lg:py-24 bg-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002f6c] mb-4">{c.sections.process.title}</h2>
            <p className="text-gray-500 text-sm md:text-base">{c.sections.process.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {c.sections.process.steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-150 flex flex-col justify-between relative group"
              >
                <div>
                  <span className="text-2xl font-black text-gray-200 block mb-4 group-hover:text-red-500 transition-colors">
                    {step.num}
                  </span>
                  <h3 className="text-sm font-bold text-gray-800 mb-2">{step.name}</h3>
                  <p className="text-gray-500 text-[11px] leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flexible Delivery */}
      <section id="delivery" className="py-20 lg:py-24 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002f6c] mb-4">{c.sections.delivery.title}</h2>
            <p className="text-gray-500 text-sm md:text-base">{c.sections.delivery.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {c.sections.delivery.options.map((opt, idx) => {
              const Icon = opt.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-3xl border border-slate-150 overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
                >
                  <div className="relative aspect-[16/10] bg-slate-200 overflow-hidden shrink-0">
                    <Image src={opt.img} alt={opt.title} fill className="object-cover" />
                  </div>
                  <div className="p-8 text-center flex flex-col items-center">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-base font-bold text-gray-800 mb-2">{opt.title}</h3>
                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{opt.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workforce Development - Clean Light Design */}
      <section id="workforce" className="py-20 lg:py-24 bg-white text-gray-800 border-y border-slate-200/60 scroll-mt-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center max-w-4xl mx-auto relative z-10">
          <GraduationCap size={48} className="text-red-500 mx-auto mb-6" />
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-[#002f6c]">{c.sections.workforce.title}</h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            {c.sections.workforce.desc}
          </p>
        </div>
      </section>

      {/* Proposal Request */}
      <section id="proposal" className="py-20 lg:py-24 scroll-mt-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#002f6c] mb-3">{c.sections.proposal.title}</h2>
            <p className="text-gray-500 text-xs md:text-sm">{c.sections.proposal.subtitle}</p>
          </div>

          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden text-start">
            <div className="h-1.5 absolute top-0 left-0 right-0 bg-[#002f6c]" />

            {formSubmitted ? (
              <div className="text-center py-10">
                <CheckCircle2 size={48} className="text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-[#002f6c] mb-2">
                  {lang === "ar" ? "تم إرسال طلبك بنجاح!" : "Request Submitted Successfully!"}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-md mx-auto">
                  {lang === "ar"
                    ? "شكرًا لاهتمامك بالتدريب المؤسسي مع الهاوس الدولي السعودية. سيقوم مستشار الحلول المؤسسية لدينا بالتواصل معك خلال ٢٤ ساعة لترتيب استشارة مجانية وتقديم مقترح تدريبي مخصص لمؤسستك."
                    : "Thank you for your interest in corporate training. Our solutions consultant will contact you within 24 hours to organize a consultation call and draft a customized training proposal."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                {/* Company Name & Industry */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                      {lang === "ar" ? "اسم الشركة / المؤسسة" : "Company Name"} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={form.company}
                      onChange={(e) => {
                        setForm({ ...form, company: e.target.value });
                        if (validationErrors.company) setValidationErrors({ ...validationErrors, company: "" });
                      }}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 transition-all ${
                        validationErrors.company ? "border-red-500 bg-red-50/10" : "border-slate-200"
                      }`}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                      {lang === "ar" ? "قطاع العمل" : "Industry"} <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      value={form.industry}
                      onChange={(e) => setForm({ ...form, industry: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
                    >
                      <option value="">{lang === "ar" ? "اختر القطاع" : "Select Industry"}</option>
                      <option value="government">{lang === "ar" ? "قطاع حكومي" : "Government / Public Sector"}</option>
                      <option value="corporation">{lang === "ar" ? "شركات ومؤسسات خاصة" : "Private Corporate"}</option>
                      <option value="education">{lang === "ar" ? "تعليم وأكاديمي" : "Education & Academy"}</option>
                      <option value="healthcare">{lang === "ar" ? "الرعاية الصحية" : "Healthcare / Medical"}</option>
                      <option value="oil_gas">{lang === "ar" ? "النفط والغاز والطاقة" : "Oil & Gas / Energy"}</option>
                      <option value="hospitality">{lang === "ar" ? "السياحة والضيافة" : "Hospitality & Tourism"}</option>
                      <option value="retail">{lang === "ar" ? "التجزئة والخدمات" : "Retail & Services"}</option>
                      <option value="other_custom">{lang === "ar" ? "أخرى / مخصص" : "Other/Custom"}</option>
                    </select>
                  </div>
                </div>

                {/* Contact Person Name & Business Email */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                      {lang === "ar" ? "اسم مسؤول التواصل" : "Contact Person"} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={form.contactName}
                      onChange={(e) => {
                        setForm({ ...form, contactName: e.target.value });
                        if (validationErrors.contactName) setValidationErrors({ ...validationErrors, contactName: "" });
                      }}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 transition-all ${
                        validationErrors.contactName ? "border-red-500 bg-red-50/10" : "border-slate-200"
                      }`}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                      {lang === "ar" ? "البريد الإلكتروني للعمل" : "Business Email"} <span className="text-red-500">*</span>
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
                        validationErrors.email ? "border-red-500 bg-red-50/10" : "border-slate-200"
                      }`}
                    />
                  </div>
                </div>

                {/* Phone & Learners Count */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                      {lang === "ar" ? "رقم الهاتف للاتصال" : "Phone Number"} <span className="text-red-500">*</span>
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
                        validationErrors.phone ? "border-red-500 bg-red-50/10" : "border-slate-200"
                      }`}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                      {lang === "ar" ? "عدد المتدربين المتوقع" : "Expected Number of Learners"} <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      value={form.learnersCount}
                      onChange={(e) => setForm({ ...form, learnersCount: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
                    >
                      <option value="">{lang === "ar" ? "اختر النطاق" : "Select Learners Range"}</option>
                      <option value="1_10">1 - 10</option>
                      <option value="11_50">11 - 50</option>
                      <option value="51_100">51 - 100</option>
                      <option value="100_plus">100+</option>
                    </select>
                  </div>
                </div>

                {/* Training Focus & Delivery format */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                      {lang === "ar" ? "تركيز التدريب المطلوب" : "Training Focus"} <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      value={form.focus}
                      onChange={(e) => setForm({ ...form, focus: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
                    >
                      <option value="">{lang === "ar" ? "اختر نطاق التركيز" : "Select Focus Area"}</option>
                      <option value="general">{lang === "ar" ? "اللغة الإنجليزية العامة للعمل" : "General Business English"}</option>
                      <option value="esp">{lang === "ar" ? "إنجليزية فنية متخصصة (ESP)" : "Technical/ESP English"}</option>
                      <option value="ielts">{lang === "ar" ? "التحضير للاختبارات الدولية" : "International Exam Prep"}</option>
                      <option value="upskilling">{lang === "ar" ? "مهارات تواصل وخطابة" : "Communication/Soft Skills"}</option>
                      <option value="other">{lang === "ar" ? "أخرى / مخصص" : "Other / Custom"}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                      {lang === "ar" ? "نظام التعليم المفضل" : "Delivery Format"} <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      value={form.deliveryFormat}
                      onChange={(e) => setForm({ ...form, deliveryFormat: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
                    >
                      <option value="">{lang === "ar" ? "اختر نظام التدريب" : "Select Delivery Format"}</option>
                      <option value="in_house">{lang === "ar" ? "حضوري بمقر الشركة" : "On-site (At your company)"}</option>
                      <option value="at_ih">{lang === "ar" ? "حضوري بمعهد IH" : "At IH Branches"}</option>
                      <option value="online">{lang === "ar" ? "افتراضي أونلاين بالكامل" : "Virtual / Online Live Classes"}</option>
                      <option value="hybrid">{lang === "ar" ? "تعليم هجين" : "Hybrid Learning"}</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                    {lang === "ar" ? "رسالة تفصيلية للمشروع" : "Additional Project Details"}
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
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#002f6c] to-blue-800 hover:to-blue-700 shadow-md hover:shadow-lg disabled:opacity-50 select-none cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={16} />
                      <span>{lang === "ar" ? "جاري الإرسال..." : "Sending..."}</span>
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      <span>{lang === "ar" ? "تقديم طلب المقترح" : "Request Proposal"}</span>
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
