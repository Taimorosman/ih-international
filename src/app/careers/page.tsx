"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import ThemeAccent from "@/components/ThemeAccent";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, Award, Users, GraduationCap, Heart, CheckCircle2, ChevronRight, Mail, Send, Upload, AlertCircle, Loader2 } from "lucide-react";

const content = {
  en: {
    hero: {
      badge: "CAREERS",
      title: "Join Our Team",
      desc1: "At International House Saudi Arabia (IHSA), we believe that our people are our greatest asset. We are always interested in connecting with talented, motivated, and professional individuals who share our passion for education, learning, and personal development.",
      desc2: "Whether you are an experienced teacher, corporate trainer, academic leader, student advisor, or administrative professional, IH Saudi Arabia offers opportunities to contribute to a dynamic and growing educational organization."
    },
    whyWork: {
      title: "Why Work With IH Saudi Arabia?",
      subtitle: "As part of the International House World Organization (IHWO), we are connected to a global network of educational professionals committed to excellence in teaching, learning, and professional development.",
      header: "Working with IH Saudi Arabia provides opportunities to:",
      list: [
        "Contribute to educational excellence",
        "Support learners and organizations across Saudi Arabia",
        "Develop professionally through continuous learning",
        "Work within an international educational environment",
        "Participate in innovative educational initiatives",
        "Collaborate with local and international partners"
      ]
    },
    whoLooking: {
      title: "Who We Are Looking For",
      subtitle: "We welcome applications from qualified professionals including:",
      list: [
        { role: "English Language Teachers", desc: "Native-level speakers with recognized ELT certificates (CELTA, Trinity or equivalent).", img: "/career_english_teacher.png" },
        { role: "Corporate Trainers", desc: "Experienced instructors delivering specialized Business English and ESP courses.", img: "/career_corporate_trainer.png" },
        { role: "Teacher Trainers", desc: "Certified DELTA/MA holders to lead initial and in-service training programs.", img: "/career_teacher_trainer.png" },
        { role: "Academic Coordinators", desc: "Leaders managing scheduling, curriculum development, and teacher mentoring.", img: "/career_academic_coordinator.png" },
        { role: "Student Advisors", desc: "Consultants helping learners identify placement options and learning pathways.", img: "/career_student_advisor.png" },
        { role: "Marketing & Communications Professionals", desc: "Experts promoting brand presence and corporate client acquisitions.", img: "/career_marketing_pro.png" },
        { role: "Administrative & Support Staff", desc: "Professionals managing customer care, operations, and IT support.", img: "/career_admin_support.png" }
      ]
    },
    profDev: {
      title: "Professional Development",
      subtitle: "We believe in lifelong learning and continuous improvement.",
      desc: "Our team members are encouraged to participate in professional development opportunities that enhance their skills, knowledge, and career growth."
    },
    jobs: {
      title: "Current Opportunities",
      desc1: "Available positions will be posted here as opportunities arise.",
      desc2: "If no suitable vacancy is currently available, we encourage interested candidates to submit their CV for future consideration.",
      applyBtn: "Apply Now",
      listings: [
        {
          title: "English Language Instructor (Male/Female)",
          location: "Riyadh & Dammam Branches",
          type: "Full-Time",
          desc: "Deliver high-quality General and Business English lessons to corporate and private learners."
        },
        {
          title: "CELTA Teacher Trainer",
          location: "Dhahran Centre / Hybrid",
          type: "Full-Time / Contract",
          desc: "Conduct official Cambridge CELTA courses for Saudi nationals and international trainees."
        },
        {
          title: "Corporate ESP Trainer (Technical English)",
          location: "Jubail & Yanbu",
          type: "Full-Time",
          desc: "Teach specialized language programs for technical staff in the industrial oil & gas sector."
        },
        {
          title: "Student Advisor / Registrar",
          location: "Jeddah Branch",
          type: "Full-Time",
          desc: "Manage student intake consultations, coordinate placement testing, and support academic registrations."
        }
      ]
    },
    apply: {
      title: "Apply to Join Our Team",
      subtitle: "We are always interested in hearing from passionate and qualified professionals.",
      header: "Complete our Teacher Application Form or send your CV for future opportunities.",
      servicesHeader: "Career Opportunities Include:",
      list: [
        "Teacher Opportunities",
        "Corporate Training Roles",
        "Academic Positions",
        "Administrative Roles",
        "Future Opportunities"
      ],
      form: {
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        position: "Target Position",
        cv: "Upload CV (PDF/Word)",
        msg: "Introduce Yourself & Share Experience",
        submit: "Submit Application"
      },
      success: "Thank you! Your application has been successfully submitted. Our academic recruitment manager will review it shortly."
    }
  },
  ar: {
    hero: {
      badge: "الوظائف والمسار المهني",
      title: "انضم إلى فريقنا",
      desc1: "في الهاوس الدولي السعودية (IHSA)، نؤمن بأن موظفينا هم أعظم أصولنا. نحن مهتمون دائماً بالتواصل مع الأفراد الموهوبين والمهنيين والمحفزين الذين يشاركوننا شغفنا بالتعليم والتعلم والتطوير الشخصي.",
      desc2: "سواء كنت معلماً ذا خبرة، أو مدرباً للشركات، أو قائداً أكاديمياً، أو مستشاراً للطلاب، أو محترفاً إدارياً، فإن الهاوس الدولي السعودية يوفر لك الفرص للمساهمة في مؤسسة تعليمية ديناميكية وتنمو باستمرار."
    },
    whyWork: {
      title: "لماذا تعمل مع الهاوس الدولي السعودية؟",
      subtitle: "كجزء من منظمة الهاوس الدولي العالمية (IHWO)، نحن مرتبطون بشبكة عالمية من المهنيين التعليميين الملتزمين بالتميز في التدريس والتعلم والتطوير المهني.",
      header: "يوفر العمل مع الهاوس الدولي السعودية فرصاً لـ:",
      list: [
        "المساهمة في التميز والارتقاء الأكاديمي",
        "دعم المتعلمين والمؤسسات في جميع أنحاء المملكة العربية السعودية",
        "التطوير المهني من خلال برامج التعلم المستمر",
        "العمل ضمن بيئة تعليمية دولية متميزة ومتعددة الثقافات",
        "المشاركة في المبادرات والابتكارات التعليمية الرائدة",
        "التعاون مع نخبة من الشركاء المحليين والدوليين"
      ]
    },
    whoLooking: {
      title: "من نبحث عنه",
      subtitle: "نرحب بطلبات التوظيف من المهنيين المؤهلين بما في ذلك:",
      list: [
        { role: "معلمو اللغة الإنجليزية", desc: "متحدثون باللغة بمستوى المتحدث الأصلي وحاصلون على شهادات معتمدة (CELTA أو ما يعادلها).", img: "/career_english_teacher.png" },
        { role: "مدربو لغة الشركات", desc: "مدرسون ذوو خبرة في تقديم برامج الإنجليزية للأعمال والمصطلحات التخصصية ESP.", img: "/career_corporate_trainer.png" },
        { role: "مدربو المعلمين", desc: "مدربون حاصلون على شهادة DELTA أو الماجستير لقيادة دورات تأهيل وتطوير المعلمين.", img: "/career_teacher_trainer.png" },
        { role: "المنسقون الأكاديميون", desc: "إداريون لإدارة جداول الفصول والمناهج الدراسية وتوجيه فريق التدريس.", img: "/career_academic_coordinator.png" },
        { role: "مستشارو وتوجيه الطلاب", desc: "أخصائيون لمساعدة المتعلمين في اختيار البرامج والمسارات التعليمية المناسبة.", img: "/career_student_advisor.png" },
        { role: "أخصائيو التسويق والاتصال", desc: "خبراء لتعزيز الهوية المؤسسية واستقطاب الحسابات والعملاء الجدد.", img: "/career_marketing_pro.png" },
        { role: "كادر الدعم الإداري والتشغيلي", desc: "مهنيون لإدارة علاقات العملاء، التشغيل، والدعم الفني والتقني.", img: "/career_admin_support.png" }
      ]
    },
    profDev: {
      title: "التطوير المهني",
      subtitle: "نحن نؤمن بالتعلم مدى الحياة والتحسين المستمر للأداء.",
      desc: "يتم تشجيع أعضاء فريقنا على المشاركة في فرص التطوير المهني التي تعزز مهاراتهم ومعارفهم ونموهم الوظيفي المستدام."
    },
    jobs: {
      title: "الفرص الوظيفية الحالية",
      desc1: "سيتم نشر الوظائف والفرص المتاحة هنا فور الإعلان عنها وتوفرها.",
      desc2: "في حال عدم وجود وظيفة شاغرة تناسب خبراتك حالياً، فإننا نشجعك على إرسال سيرتك الذاتية للنظر فيها مستقبلاً.",
      applyBtn: "تقدم الآن",
      listings: [
        {
          title: "مدرس لغة إنجليزية (ذكور / إناث)",
          location: "فروع الرياض والدمام",
          type: "دوام كامل",
          desc: "تقديم دورات الإنجليزية العامة والإنجليزية للأعمال لمتعلمي الشركات والأفراد."
        },
        {
          title: "مدرب معلمين دورة CELTA",
          location: "مركز الظهران / مدمج",
          type: "دوام كامل / عقد",
          desc: "إدارة وتقديم دورات تأهيل المعلمين الرسمية CELTA المعتمدة من كامبريدج."
        },
        {
          title: "مدرب لغة إنجليزية تخصصي (ESP)",
          location: "الجبيل وينبع",
          type: "دوام كامل",
          desc: "تدريس برامج المصطلحات اللغوية التخصصية للموظفين الفنيين في قطاع النفط والغاز."
        },
        {
          title: "مستشار طلاب ومسؤول تسجيل",
          location: "فرع جدة",
          type: "دوام كامل",
          desc: "استقبال طلبات التسجيل، وتنسيق اختبارات تحديد المستوى، وإرشاد الطلاب نحو برامجهم المناسبة."
        }
      ]
    },
    apply: {
      title: "تقدم للانضمام إلى فريقنا",
      subtitle: "نحن مهتمون دائماً بالاستماع إلى الكفاءات التعليمية والإدارية المتميزة.",
      header: "يرجى إكمال نموذج طلب التوظيف أو إرسال سيرتك الذاتية للخيارات المستقبلية.",
      servicesHeader: "تشمل الفرص المهنية والمسارات المتاحة:",
      list: [
        "فرص للمعلمين والمدربين",
        "وظائف تدريب الشركات والمؤسسات",
        "وظائف الإشراف والإدارة الأكاديمية",
        "أدوار الدعم الإداري والتشغيلي",
        "فرص وخيارات وظيفية مستقبلية"
      ],
      form: {
        name: "الاسم الكامل",
        email: "البريد الإلكتروني للعمل",
        phone: "رقم الهاتف",
        position: "الوظيفة المطلوبة",
        cv: "تحميل السيرة الذاتية (PDF/Word)",
        msg: "نبذة عن خبراتك وأبرز مهاراتك",
        submit: "إرسال طلب التوظيف"
      },
      success: "شكراً لك! تم استلام طلبك بنجاح. سيقوم مدير التوظيف الأكاديمي لدينا بمراجعة سيرتك الذاتية والرد عليك قريباً."
    }
  }
};

export default function CareersPage() {
  const { lang, isRTL } = useLanguage();
  const c = content[lang] || content.en;
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    nationality: "",
    location: "",
    qualification: "",
    experience: "",
    position: "",
    cvFile: null as File | null,
    cvFileName: "",
    cover: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};
    const commonReq = lang === "ar" ? "هذا الحقل مطلوب" : "This field is required";
    if (!form.name.trim()) errors.name = commonReq;
    if (!form.email.trim()) errors.email = commonReq;
    if (!form.phone.trim()) errors.phone = commonReq;
    if (!form.nationality.trim()) errors.nationality = commonReq;
    if (!form.location) errors.location = commonReq;
    if (!form.qualification) errors.qualification = commonReq;
    if (!form.experience) errors.experience = commonReq;
    if (!form.position) errors.position = commonReq;
    if (!form.cvFile) errors.cvFile = commonReq;

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
        nationality: "",
        location: "",
        qualification: "",
        experience: "",
        position: "",
        cvFile: null,
        cvFileName: "",
        cover: "",
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
              className="text-[#cf1430] font-normal"
            >
              {c.hero.desc2}
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2. Why Work With IH Saudi Arabia? */}
      <section id="why-work" className="py-20 lg:py-24 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002f6c] mb-4">{c.whyWork.title}</h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">{c.whyWork.subtitle}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-lg font-bold text-gray-800 border-l-2 border-red-600 pl-4 rtl:border-l-0 rtl:border-r-2 rtl:pr-4">
                {c.whyWork.header}
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {c.whyWork.list.map((benefit, idx) => (
                  <div key={idx} className="flex gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-3xs items-start">
                    <CheckCircle2 size={18} className="text-green-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-gray-700">{benefit}</span>
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
              <Image src="/beta_assets/careers.png" alt="International House Academic & Operations Team" fill className="object-cover object-center pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Who We Are Looking For - Styled With Real Images */}
      <section id="who-looking-for" className="py-20 lg:py-24 bg-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002f6c] mb-4">{c.whoLooking.title}</h2>
            <p className="text-gray-500 text-sm md:text-base">{c.whoLooking.subtitle}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.whoLooking.list.map((profile, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-2xl border border-slate-150 overflow-hidden shadow-3xs hover:shadow-md transition-shadow group flex flex-col justify-between cursor-pointer"
              >
                <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden shrink-0">
                  <Image src={profile.img} alt={profile.role} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors" />
                </div>
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs font-extrabold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">{profile.role}</h3>
                    <p className="text-[10px] text-gray-500 leading-relaxed">{profile.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Professional Development - Clean Light Design */}
      <section id="professional-development" className="py-20 lg:py-24 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-white p-8 lg:p-12 rounded-3xl border border-slate-200/60 shadow-sm grid lg:grid-cols-2 gap-12 items-center relative overflow-hidden">
            <div>
              <span className="text-xs font-semibold text-red-600 uppercase tracking-widest block mb-3">
                {c.profDev.subtitle}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#002f6c] mb-6">
                {c.profDev.title}
              </h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                {c.profDev.desc}
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl max-w-sm text-center">
                <GraduationCap size={48} className="text-red-500 mx-auto mb-4" />
                <h4 className="text-sm font-bold text-gray-800 mb-2">Cambridge English Courses</h4>
                <p className="text-[11px] text-gray-500 leading-relaxed">
                  Opportunities for fully supported CELTA pathways, academic modules, and constant support networks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Current Opportunities */}
      <section id="current-opportunities" className="py-20 lg:py-24 bg-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002f6c] mb-4">{c.jobs.title}</h2>
            <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              {c.jobs.desc1} <span className="font-semibold text-gray-700 block mt-2">{c.jobs.desc2}</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {c.jobs.listings.map((job, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-2 flex-wrap items-center mb-4">
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 rounded-md">
                      <MapPin size={10} />
                      {job.location}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-slate-200 bg-slate-200/50 px-2 rounded-md">
                      <Clock size={10} />
                      {job.type}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-2">{job.title}</h3>
                  <p className="text-gray-500 text-[11px] leading-relaxed mb-6">
                    {job.desc}
                  </p>
                </div>
                <Link
                  href="/register?form=teacher"
                  className="w-full text-center px-4 py-2.5 bg-[#002f6c] hover:bg-[#0050b3] text-white font-semibold rounded-xl text-xs transition-colors"
                >
                  {c.jobs.applyBtn}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Apply to Join Our Team */}
      <section id="apply" className="py-20 lg:py-24 scroll-mt-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Info Side */}
            <div className="lg:col-span-5 text-start">
              <h2 className="text-3xl font-bold text-[#002f6c] mb-4">{c.apply.title}</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                {c.apply.subtitle}
              </p>
              <div className="border-t border-gray-200 pt-6">
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#cf1430] mb-4">
                  {c.apply.servicesHeader}
                </h4>
                <ul className="space-y-3">
                  {c.apply.list.map((srv, idx) => (
                    <li key={idx} className="flex gap-2 text-xs md:text-sm text-gray-600 font-semibold items-center">
                      <CheckCircle2 size={16} className="text-green-600 shrink-0" />
                      <span>{srv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form Card */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-150 shadow-sm relative">
              <h3 className="text-sm font-bold text-gray-800 mb-6 border-b border-gray-100 pb-4">
                {c.apply.header}
              </h3>
              
              {formSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle2 size={48} className="text-green-600 mx-auto mb-4" />
                  <p className="text-sm font-bold text-gray-800 leading-relaxed">
                    {lang === "ar"
                      ? "تم تقديم طلبك بنجاح! شكراً لاهتمامك بالانضمام إلى معاهد الهاوس الدولي السعودية. سيقوم الفريق الأكاديمي بمراجعة ملفك والتواصل معك قريباً."
                      : "Your application has been submitted successfully! Thank you for your interest in IH Saudi Arabia. Our academic team will review your profile and contact you soon."}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1.5">{c.apply.form.name} *</label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => {
                        setForm({ ...form, name: e.target.value });
                        if (validationErrors.name) setValidationErrors({ ...validationErrors, name: "" });
                      }}
                      className={`w-full px-4 py-2.5 rounded-xl border text-xs text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 ${
                        validationErrors.name ? "border-red-500" : "border-gray-200"
                      }`}
                    />
                  </div>
                  
                  {/* Email & Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1.5">{c.apply.form.email} *</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => {
                          setForm({ ...form, email: e.target.value });
                          if (validationErrors.email) setValidationErrors({ ...validationErrors, email: "" });
                        }}
                        className={`w-full px-4 py-2.5 rounded-xl border text-xs text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 ${
                          validationErrors.email ? "border-red-500" : "border-gray-200"
                        }`}
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1.5">{c.apply.form.phone} *</label>
                      <input
                        required
                        type="tel"
                        value={form.phone}
                        onChange={(e) => {
                          setForm({ ...form, phone: e.target.value });
                          if (validationErrors.phone) setValidationErrors({ ...validationErrors, phone: "" });
                        }}
                        className={`w-full px-4 py-2.5 rounded-xl border text-xs text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 ${
                          validationErrors.phone ? "border-red-500" : "border-gray-200"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Nationality & Current Location */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1.5">{lang === "ar" ? "الجنسية" : "Nationality"} *</label>
                      <input
                        required
                        type="text"
                        value={form.nationality}
                        onChange={(e) => {
                          setForm({ ...form, nationality: e.target.value });
                          if (validationErrors.nationality) setValidationErrors({ ...validationErrors, nationality: "" });
                        }}
                        className={`w-full px-4 py-2.5 rounded-xl border text-xs text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 ${
                          validationErrors.nationality ? "border-red-500" : "border-gray-200"
                        }`}
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1.5">{lang === "ar" ? "مكان الإقامة الحالي" : "Current Location"} *</label>
                      <select
                        required
                        value={form.location}
                        onChange={(e) => setForm({ ...form, location: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500 text-xs text-gray-800 bg-slate-50/50 appearance-none cursor-pointer"
                      >
                        <option value="">{lang === "ar" ? "اختر الموقع" : "Select Location"}</option>
                        <option value="ksa">{lang === "ar" ? "داخل المملكة العربية السعودية" : "Inside Saudi Arabia (KSA)"}</option>
                        <option value="abroad">{lang === "ar" ? "خارج المملكة العربية السعودية" : "Outside Saudi Arabia"}</option>
                      </select>
                    </div>
                  </div>

                  {/* Highest Qualification & Teaching Experience */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1.5">{lang === "ar" ? "أعلى مؤهل علمي" : "Highest Qualification"} *</label>
                      <select
                        required
                        value={form.qualification}
                        onChange={(e) => setForm({ ...form, qualification: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500 text-xs text-gray-800 bg-slate-50/50 appearance-none cursor-pointer"
                      >
                        <option value="">{lang === "ar" ? "اختر المؤهل" : "Select Qualification"}</option>
                        <option value="celta">CELTA</option>
                        <option value="delta">DELTA</option>
                        <option value="ma_tesol">MA TESOL / Linguistics</option>
                        <option value="ba_english">BA English / Education</option>
                        <option value="tefl_120">TEFL Certificate (120+ hours)</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1.5">{lang === "ar" ? "سنوات الخبرة" : "Years of Experience"} *</label>
                      <select
                        required
                        value={form.experience}
                        onChange={(e) => setForm({ ...form, experience: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500 text-xs text-gray-800 bg-slate-50/50 appearance-none cursor-pointer"
                      >
                        <option value="">{lang === "ar" ? "اختر سنوات الخبرة" : "Select Experience"}</option>
                        <option value="less_than_1">{lang === "ar" ? "أقل من سنة" : "Less than 1 year"}</option>
                        <option value="1_to_3">{lang === "ar" ? "سنة إلى ٣ سنوات" : "1 to 3 years"}</option>
                        <option value="3_to_5">{lang === "ar" ? "٣ إلى ٥ سنوات" : "3 to 5 years"}</option>
                        <option value="5_plus">{lang === "ar" ? "أكثر من ٥ سنوات" : "5+ years"}</option>
                      </select>
                    </div>
                  </div>

                  {/* Target Position */}
                  <div>
                    <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1.5">{c.apply.form.position} *</label>
                    <select
                      required
                      value={form.position}
                      onChange={(e) => setForm({ ...form, position: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500 text-xs text-gray-800 bg-slate-50/50 appearance-none cursor-pointer"
                    >
                      <option value="">{lang === "ar" ? "اختر المسمى الوظيفي" : "Select Target Position"}</option>
                      <option value="English Teacher">{lang === "ar" ? "معلم لغة إنجليزية" : "English Language Instructor"}</option>
                      <option value="Corporate ESP Trainer">{lang === "ar" ? "مدرب لغة إنجليزية للشركات" : "Corporate ESP Trainer"}</option>
                      <option value="CELTA Trainer">{lang === "ar" ? "مدرب دورات سيلتا معتمد" : "CELTA Teacher Trainer"}</option>
                      <option value="Academic Leader">{lang === "ar" ? "منسق / موجه أكاديمي" : "Academic Coordinator"}</option>
                      <option value="Advisor">{lang === "ar" ? "مستشار طلابي / تسجيل" : "Student Advisor / Registrar"}</option>
                    </select>
                  </div>

                  {/* CV File Selector */}
                  <div>
                    <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1.5">{c.apply.form.cv} *</label>
                    <div className="relative border border-dashed border-gray-200 rounded-xl p-4 text-center cursor-pointer hover:bg-slate-50 transition-colors flex flex-col items-center justify-center gap-1 bg-slate-50/20 group">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        required={!form.cvFile}
                        onChange={(e) => {
                          if (e.target.files && e.target.files.length > 0) {
                            const file = e.target.files[0];
                            setForm({ ...form, cvFile: file, cvFileName: file.name });
                            if (validationErrors.cvFile) setValidationErrors({ ...validationErrors, cvFile: "" });
                          }
                        }}
                        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full z-10"
                      />
                      <Upload size={18} className="text-gray-400 group-hover:text-[#002f6c]" />
                      <span className="text-[10px] text-gray-500 font-semibold">
                        {form.cvFileName ? (
                          <span className="text-green-600 flex items-center gap-1">
                            <CheckCircle2 size={12} />
                            {form.cvFileName}
                          </span>
                        ) : (
                          lang === "ar" ? "اضغط لرفع الملف (PDF, Word)" : "Click to upload CV (PDF, Word)"
                        )}
                      </span>
                    </div>
                    {validationErrors.cvFile && (
                      <p className="text-red-500 text-[9px] mt-1 flex items-center gap-1">
                        <AlertCircle size={10} /> {validationErrors.cvFile}
                      </p>
                    )}
                  </div>

                  {/* Message Cover Letter */}
                  <div>
                    <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1.5">{c.apply.form.msg}</label>
                    <textarea
                      rows={3}
                      value={form.cover}
                      onChange={(e) => setForm({ ...form, cover: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500 text-xs text-gray-800 bg-slate-50/50 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-[#002f6c] hover:bg-[#0050b3] text-white font-bold rounded-xl text-xs hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin" size={12} />
                        <span>{lang === "ar" ? "جاري الإرسال..." : "Sending..."}</span>
                      </>
                    ) : (
                      <>
                        <Send size={12} />
                        <span>{c.apply.form.submit}</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
