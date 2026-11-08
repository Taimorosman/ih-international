"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, CheckCircle, Map, AlertCircle, Loader2, Clock, Camera, Maximize2, X, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { fadeUp } from "@/utils/animations";
import ThemeAccent from "@/components/ThemeAccent";
import StudentTestimonials from "@/components/StudentTestimonials";

const branches = [
  {
    key: "riyadh",
    phones: ["+966 58 178 1000", "+966 920 000 364"],
    email: "info@ih-saudiarabia.com",
    hoursKey: "contact.riyadh.hours",
    color: "var(--color-ih-coral)",
    colorClass: "bg-ih-coral",
    hoverTextClass: "group-hover/card:text-ih-coral",
    bg: "linear-gradient(135deg, #ffffff 0%, color-mix(in srgb, var(--color-ih-coral) 8%, white) 100%)",
    hoverBg: "linear-gradient(135deg, #cf1430 0%, #8a0c20 100%)",
    border: "rgba(207, 20, 48, 0.25)",
    borderHover: "rgba(207, 20, 48, 0.55)",
    shadow: "shadow-ih-coral",
    cardImg: "/branches/riyadh/riyadh_branch_1.jpg",
    mapUrl: "https://maps.google.com/maps?q=Al-Mousa%20Commercial%20Center%20Tower%20No.3%20Olaya%20Riyadh&t=&z=16&ie=UTF8&iwloc=&output=embed",
    navigationUrl: "https://maps.google.com/?cid=5495258829300967609"
  },
  {
    key: "dammam",
    phones: ["+966 58 178 1000", "+966 920 000 364"],
    email: "info@ih-saudiarabia.com",
    hoursKey: "contact.dammam.hours",
    color: "var(--color-ih-blue)",
    colorClass: "bg-ih-blue",
    hoverTextClass: "group-hover/card:text-ih-blue",
    bg: "linear-gradient(135deg, #ffffff 0%, color-mix(in srgb, var(--color-ih-blue) 8%, white) 100%)",
    hoverBg: "linear-gradient(135deg, var(--color-ih-blue) 0%, var(--color-primary-dark) 100%)",
    border: "rgba(59, 63, 168, 0.25)",
    borderHover: "rgba(59, 63, 168, 0.55)",
    shadow: "shadow-ih-blue",
    cardImg: "/dammam_hero.png",
    mapUrl: "https://maps.google.com/maps?q=Al%20Sughaiyer%20Tower%20Dammam%20Saudi%20Arabia&t=&z=16&ie=UTF8&iwloc=&output=embed",
    navigationUrl: "https://www.google.com/maps/search/?api=1&query=Al+Sughaiyer+Tower+Dammam+Saudi+Arabia"
  },
  {
    key: "jeddah",
    phones: ["+966 920 000 364"],
    email: "info@ih-saudiarabia.com",
    hoursKey: "contact.jeddah.hours",
    color: "var(--color-ih-green)",
    colorClass: "bg-ih-green",
    hoverTextClass: "group-hover/card:text-ih-green",
    bg: "linear-gradient(135deg, #ffffff 0%, color-mix(in srgb, var(--color-ih-green) 8%, white) 100%)",
    hoverBg: "linear-gradient(135deg, var(--color-ih-green) 0%, #126b41 100%)",
    border: "rgba(31, 169, 104, 0.25)",
    borderHover: "rgba(31, 169, 104, 0.55)",
    shadow: "shadow-ih-blue",
    cardImg: "/jeddah_hero.png",
    mapUrl: "https://maps.google.com/maps?q=Al%20Badriah%20Towers%20Jeddah%20Saudi%20Arabia&t=&z=16&ie=UTF8&iwloc=&output=embed",
    navigationUrl: "https://www.google.com/maps/search/?api=1&query=Al+Badriah+Towers+Jeddah+Saudi+Arabia"
  },
];

const riyadhCampusPhotos = [
  {
    src: "/branches/riyadh/riyadh_branch_1.jpg",
    titleEn: "Executive Reception Lobby",
    titleAr: "صالة الاستقبال الفاخرة",
    descEn: "Welcoming reception with digital displays and executive waiting lounge.",
    descAr: "صالة استقبال راقية مجهزة بشاشات عرض رقمية ومنطقة انتظار مريحة للدارسين والزوار.",
    badgeEn: "Lobby & Reception",
    badgeAr: "الاستقبال والبهو",
  },
  {
    src: "/branches/riyadh/riyadh_branch_2.jpg",
    titleEn: "Main Campus Entrance",
    titleAr: "المدخل الرئيسي للمقر",
    descEn: "Tower 3, Gate 9 entrance featuring official IH Riyadh branding.",
    descAr: "مدخل برج 3 بوابة 9 يحمل العلامة الرسمية لانترناشونال هاوس الرياض ورسالة المعهد.",
    badgeEn: "Gate 9 Entrance",
    badgeAr: "مدخل بوابة 9",
  },
  {
    src: "/branches/riyadh/riyadh_branch_3.jpg",
    titleEn: "Smart Digital Classroom",
    titleAr: "قاعة تدريب رقمية ذكية",
    descEn: "State-of-the-art interactive smart boards and comfortable student seating.",
    descAr: "شاشات تفاعلية ذكية حديثة ومقاعد دراسية مريحة مصممة لأعلى مستويات التركيز.",
    badgeEn: "Smart Classroom",
    badgeAr: "فصل ذكي",
  },
  {
    src: "/branches/riyadh/riyadh_branch_4.jpg",
    titleEn: "Modern Learning Center & Phonetics Lab",
    titleAr: "مركز التعليم وقاعة الصوتيات",
    descEn: "Designed for language fluency, phonetics, and interactive group sessions.",
    descAr: "مجهزة لتدريب الصوتيات والنطق وتعليم مهارات التواصل والحوار باللغة الإنجليزية.",
    badgeEn: "Phonetics & Lab",
    badgeAr: "معمل الصوتيات",
  },
];

const contactSocials = [
  {
    name: "Facebook",
    handle: "@ihsaudiarabia",
    url: "https://www.facebook.com/ihsaudiarabia",
    color: "#1877F2",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    name: "X (Twitter)",
    handle: "@ihsaudiarabia",
    url: "https://x.com/ihsaudiarabia",
    color: "#000000",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    handle: "@ih.saudiarabia",
    url: "https://www.instagram.com/ih.saudiarabia/",
    color: "#E1306C",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    handle: "IH Saudi Arabia",
    url: "https://www.linkedin.com/company/international-house-saudi-arabia/",
    color: "#0A66C2",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    handle: "@ih.saudiarabia",
    url: "https://www.tiktok.com/@ih.saudiarabia",
    color: "#010101",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.53V6.77a4.85 4.85 0 01-1.02-.08z" />
      </svg>
    ),
  },
  {
    name: "Snapchat",
    handle: "ihsaudiarabia",
    url: "https://snapchat.com/t/LOkn6TqI",
    color: "#f59e0b",
    icon: (
      <svg viewBox="0 0 24 24" fill="#ffffff" className="w-5 h-5">
        <path d="M12.002 2c-3.58 0-6.02 2.77-6.02 6.03 0 1.25.4 2.47 1.05 3.32.18.23.16.48.01.69-.32.44-.94.75-1.52.92-.37.11-.63.41-.65.79-.03.48.33.86.79.94.73.13 1.44.37 1.94.88.22.22.25.54.12.81-.35.73-1.42 1.44-2.45 1.57-.45.06-.78.43-.77.88.01.44.33.81.77.85 1.63.15 3.51-.12 4.96-.92.35-.19.78-.18 1.13.03.74.45 1.76.71 2.82.71 1.06 0 2.08-.26 2.82-.71.35-.21.78-.22 1.13-.03 1.45.8 3.33 1.07 4.96.92.44-.04.76-.41.77-.85.01-.45-.32-.82-.77-.88-1.03-.13-2.1-.84-2.45-1.57-.13-.27-.1-.59.12-.81.5-.51 1.21-.75 1.94-.88.46-.08.82-.46.79-.94-.02-.38-.28-.68-.65-.79-.58-.17-1.2-.48-1.52-.92-.15-.21-.17-.46.01-.69.65-.85 1.05-2.07 1.05-3.32C18.022 4.77 15.582 2 12.002 2z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    handle: "+966 58 178 1000",
    url: "https://wa.me/966581781000",
    color: "#25D366",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  const { t, lang } = useLanguage();
  const isRtl = lang === "ar";
  const [submitted, setSubmitted] = useState(false);
  const [activeForm, setActiveForm] = useState<"contact" | "quotation">("contact");
  const [activePhoto, setActivePhoto] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [quoteForm, setQuoteForm] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    program: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};
    const commonReq = isRtl ? "هذا الحقل مطلوب" : "This field is required";
    if (!quoteForm.name.trim()) errors.name = commonReq;
    if (!quoteForm.email.trim()) errors.email = commonReq;
    if (!quoteForm.phone.trim()) errors.phone = commonReq;
    if (!quoteForm.category) errors.category = commonReq;

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setQuoteForm({
        name: "",
        email: "",
        phone: "",
        category: "",
        program: "",
        message: "",
      });
      setValidationErrors({});
    }, 1200);
  };

  return (
    <div className="pt-[72px]">
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section
        className="py-24 relative overflow-hidden group"
        style={{ background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%)" }}
      >
        <Image
          src="/arab_education_bg.png"
          alt="Arab education background"
          fill
          className="object-cover object-center opacity-30 group-hover:opacity-60 transition-opacity duration-400 ease-in-out mix-blend-overlay"
          priority
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">{t("contact.hero.title")}</h1>
            <p className="text-lg text-blue-200">{t("contact.hero.subtitle")}</p>
          </motion.div>
        </div>
      </section>

      <ThemeAccent height="h-2" />

      {/* ─── BRANCHES ─────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col gap-16">
            {branches.map((branch, i) => {
              return (
                <div
                  key={branch.key}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
                >
                  {/* Branch Details Card */}
                  <div
                    className={`relative z-10 overflow-hidden rounded-3xl border ${
                      branch.shadow
                    } w-full flex flex-col justify-between order-1 ${
                      i % 2 === 0 ? "lg:order-1 lg:col-span-5" : "lg:order-2 lg:col-span-5"
                    } bg-white`}
                    style={{
                      borderColor: branch.border,
                      background: branch.bg,
                    }}
                  >
                    <div className="h-2 relative z-10" style={{ background: branch.color }} />
                    <div className="p-8 relative z-10 flex flex-col h-full justify-between">
                      <div>
                        <h2 className="text-2xl font-extrabold mb-6 text-primary">
                          {t(`contact.${branch.key}.title`)}
                        </h2>
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <MapPin size={18} className="shrink-0 mt-0.5" style={{ color: branch.color }} />
                            <p className="text-slate-700 text-sm leading-relaxed">
                              {t(`contact.${branch.key}.address`)}
                            </p>
                          </div>
                          <div className="flex items-start gap-3">
                            <Phone size={18} className="shrink-0 mt-0.5" style={{ color: branch.color }} />
                            <div className="flex flex-col gap-1">
                              {branch.phones.map((ph) => (
                                <a
                                  key={ph}
                                  href={`tel:${ph.replace(/\s/g, "")}`}
                                  className="text-sm font-medium hover:underline text-primary"
                                >
                                  {ph}
                                </a>
                              ))}
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Mail size={18} className="shrink-0" style={{ color: branch.color }} />
                            <a
                              href={`mailto:${branch.email}`}
                              className="text-sm font-medium hover:underline text-primary"
                            >
                              {branch.email}
                            </a>
                          </div>
                          {branch.hoursKey && (
                            <div className="flex items-start gap-3">
                              <Clock size={18} className="shrink-0 mt-0.5" style={{ color: branch.color }} />
                              <div className="flex flex-col">
                                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                                  {t("contact.hours")}
                                </span>
                                <span className="text-slate-700 text-sm font-medium leading-relaxed">
                                  {t(branch.hoursKey)}
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Branch Map Iframe */}
                  <div
                    className={`relative overflow-hidden rounded-[32px] border min-h-[350px] lg:min-h-full w-full order-2 flex flex-col ${
                      branch.shadow
                    } ${
                      i % 2 === 0 ? "lg:order-2 lg:col-span-7" : "lg:order-1 lg:col-span-7"
                    }`}
                    style={{
                      borderColor: branch.border,
                      background: "var(--color-light)",
                    }}
                  >
                    <iframe
                      src={branch.mapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full min-h-[350px] absolute inset-0 z-0"
                    />

                    {/* Floating Glassmorphic "Open in Google Maps" Button */}
                    <div className="absolute bottom-4 right-4 z-10 left-auto rtl:right-auto rtl:left-4">
                      <a
                        href={branch.navigationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold text-white bg-primary shadow-md hover:bg-[#cf1430] transition-colors"
                      >
                        <Map size={14} />
                        {t("contact.map.open")}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ThemeAccent height="h-1.5" pills />

      {/* ─── RIYADH CAMPUS FACILITIES & GALLERY ───────────────── */}
      <section className="py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl space-y-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#cf1430] shadow-sm">
                <Camera size={13} />
                {isRtl ? "جولة في مقر الرياض الرئيسي" : "RIYADH MAIN CAMPUS TOUR"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#002F6C] font-['Montserrat',_sans-serif]">
                {isRtl ? "مرافق وفصول انترناشونال هاوس الرياض" : "International House Riyadh Facilities"}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {isRtl
                  ? "صور حصرية ومباشرة من مقرنا في مركز الموسى التجاري والسكني (برج رقم 3، بوابة 9، حي العليا)، مجهز بأحدث شاشات التدريب التفاعلية وقاعات استقبال فاخرة."
                  : "Live photographs from our state-of-the-art branch at Al-Mousa Commercial & Residential Center (Tower No. 3, Gate 9, Al Olaya), featuring executive reception lounges and digital smart classrooms."}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://maps.google.com/?cid=5495258829300967609"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-xs font-bold text-white bg-[#002F6C] hover:bg-[#cf1430] shadow-md hover:shadow-lg transition-all duration-300"
              >
                <Map size={14} />
                {isRtl ? "عرض الموقع على خرائط جوجل" : "View Verified Place on Maps"}
              </a>
            </div>
          </div>

          {/* 4 Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {riyadhCampusPhotos.map((photo, index) => (
              <div
                key={photo.src}
                onClick={() => setActivePhoto(index)}
                className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-md cursor-pointer flex flex-col"
              >
                {/* Photo container */}
                <div className="relative h-64 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={photo.src}
                    alt={isRtl ? photo.titleAr : photo.titleEn}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-3.5 left-3.5 rtl:left-auto rtl:right-3.5 z-10">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wide text-white bg-[#002F6C]/85 backdrop-blur-md border border-white/20 shadow-sm">
                      {isRtl ? photo.badgeAr : photo.badgeEn}
                    </span>
                  </div>

                  {/* Expand icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 pointer-events-none">
                    <div className="w-11 h-11 rounded-2xl bg-white/95 text-[#002F6C] flex items-center justify-center shadow-lg">
                      <Maximize2 size={18} />
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-extrabold text-base text-[#002F6C] mb-1.5 font-['Montserrat',_sans-serif]">
                      {isRtl ? photo.titleAr : photo.titleEn}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      {isRtl ? photo.descAr : photo.descEn}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-[#cf1430] font-bold">
                    <span>{isRtl ? "اضغط للتكبير" : "Click to Enlarge"}</span>
                    <Maximize2 size={13} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activePhoto !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] bg-slate-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 rtl:right-auto rtl:left-4 z-20 w-11 h-11 rounded-2xl bg-black/60 hover:bg-[#cf1430] text-white flex items-center justify-center transition-colors"
            >
              <X size={20} />
            </button>

            {/* Enlarged Image */}
            <div className="relative w-full h-[65vh] bg-black">
              <Image
                src={riyadhCampusPhotos[activePhoto].src}
                alt={isRtl ? riyadhCampusPhotos[activePhoto].titleAr : riyadhCampusPhotos[activePhoto].titleEn}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Caption & Controls */}
            <div className="p-6 bg-slate-950/90 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10">
              <div>
                <span className="text-xs font-bold text-[#fccb56] uppercase tracking-wider block mb-1">
                  {isRtl ? riyadhCampusPhotos[activePhoto].badgeAr : riyadhCampusPhotos[activePhoto].badgeEn}
                </span>
                <h4 className="text-lg font-extrabold font-['Montserrat',_sans-serif]">
                  {isRtl ? riyadhCampusPhotos[activePhoto].titleAr : riyadhCampusPhotos[activePhoto].titleEn}
                </h4>
                <p className="text-slate-400 text-xs mt-1">
                  {isRtl ? riyadhCampusPhotos[activePhoto].descAr : riyadhCampusPhotos[activePhoto].descEn}
                </p>
              </div>

              <div className="flex items-center gap-2">
                {riyadhCampusPhotos.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePhoto(idx)}
                    className={`h-3 rounded-full transition-all ${
                      activePhoto === idx ? "w-8 bg-[#cf1430]" : "w-3 bg-white/40 hover:bg-white"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <ThemeAccent height="h-1.5" pills />

      {/* ─── OFFICIAL SOCIAL CHANNELS ─────────────────────────── */}
      <section className="py-16 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#002F6C]">
              {isRtl ? "تابعنا وتواصل معنا" : "OFFICIAL CHANNELS"}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#002F6C] font-['Montserrat',_sans-serif]">
              {isRtl ? "قنوات التواصل الاجتماعي الرسمية" : "Connect With Us on Social Media"}
            </h3>
            <p className="text-slate-500 text-sm font-light">
              {isRtl
                ? "تابع آخر أخبارنا وفعالياتنا وعروض الدورات عبر حساباتنا الرسمية:"
                : "Follow our official channels for the latest course announcements, learning tips, and news:"}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 max-w-5xl mx-auto">
            {contactSocials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-2.5 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm group text-center"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-white shadow-sm"
                  style={{ backgroundColor: s.color }}
                >
                  {s.icon}
                </div>
                <div className="min-w-0">
                  <span className="block text-xs font-bold text-slate-700 group-hover:text-[#002f6c] transition-colors truncate">
                    {s.name}
                  </span>
                  <span className="block text-[10px] text-slate-400 font-medium truncate mt-0.5" dir="ltr">
                    {s.handle}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT FORM ─────────────────────────────────────── */}
      <section className="py-20" style={{ background: "var(--color-light)" }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div>
            <h2
              className="text-3xl font-extrabold mb-10 text-center"
              style={{ color: "var(--color-primary)" }}
            >
              {t("contact.form.title")}
            </h2>

            {submitted ? (
              <div className="bg-white rounded-3xl p-12 text-center shadow-ih-soft border border-gray-100">
                <CheckCircle size={52} className="mx-auto mb-4 text-[#00d084]" />
                <h3 className="text-xl font-bold mb-2 text-[#002f6c]">
                  {isRtl ? "تم إرسال الرسالة بنجاح!" : "Submitted Successfully!"}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-sm mx-auto">
                  {activeForm === "quotation"
                    ? (isRtl 
                        ? "شكرًا لطلب عرض السعر. سيقوم مسؤول علاقات العملاء والقبول لدينا بدراسة طلبك وموافاتك بالتسعيرة الرسمية خلال ٢٤ ساعة."
                        : "Thank you for requesting a quote. Our admissions team will review your requirements and provide an official quotation within 24 hours.")
                    : (isRtl
                        ? "شكرًا لتواصلك معنا. سنقوم بالرد على استفسارك ومكالمتك في أقرب وقت ممكن خلال ٢٤ ساعة."
                        : "Thank you for getting in touch. We will review your enquiry and get back to you shortly.")}
                </p>
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-ih-soft border border-gray-100">
                {/* Form Selection Tabs */}
                <div className="flex border-b border-gray-100 mb-8">
                  <button
                    type="button"
                    onClick={() => setActiveForm("contact")}
                    className={`flex-1 pb-4 text-sm font-bold border-b-2 text-center transition-all ${
                      activeForm === "contact"
                        ? "border-[#002f6c] text-[#002f6c]"
                        : "border-transparent text-gray-400 hover:text-gray-600"
                    }`}
                  >
                    {isRtl ? "تواصل معنا" : "Contact Us"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveForm("quotation")}
                    className={`flex-1 pb-4 text-sm font-bold border-b-2 text-center transition-all ${
                      activeForm === "quotation"
                        ? "border-[#002f6c] text-[#002f6c]"
                        : "border-transparent text-gray-400 hover:text-gray-600"
                    }`}
                  >
                    {isRtl ? "طلب عرض سعر" : "Request Quote"}
                  </button>
                </div>

                {activeForm === "contact" ? (
                  <form onSubmit={handleSubmit} className="space-y-5 text-start">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500">
                        {isRtl ? "الاسم الكامل" : "Full Name"} <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="Your full name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                        style={{ color: "var(--color-charcoal)" }}
                      />
                    </div>

                    {/* Email & Phone */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500">
                          {isRtl ? "البريد الإلكتروني" : "Email Address"} <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          placeholder="your@email.com"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                          style={{ color: "var(--color-charcoal)" }}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500">
                          {isRtl ? "رقم الهاتف" : "Phone Number"}
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          placeholder="+966 XX XXX XXXX"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                          style={{ color: "var(--color-charcoal)" }}
                        />
                      </div>
                    </div>

                    {/* Subject Select */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500">
                        {isRtl ? "الموضوع" : "Subject"} <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="contact-subject"
                        required
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all appearance-none cursor-pointer bg-white"
                        style={{ color: "var(--color-charcoal)" }}
                      >
                        <option value="">{isRtl ? "اختر الموضوع" : "Select a subject"}</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="English Courses">English Courses</option>
                        <option value="Corporate Training">Corporate Training</option>
                        <option value="Teacher Training">Teacher Training</option>
                        <option value="Study Abroad">Study Abroad</option>
                        <option value="Examinations & Certification">Examinations & Certification</option>
                        <option value="Careers">Careers</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500">
                        {isRtl ? "الرسالة" : "Message"} <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        rows={5}
                        placeholder="How can we help you?"
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all resize-none min-h-[120px]"
                        style={{ color: "var(--color-charcoal)" }}
                      />
                    </div>
                    <button
                      type="submit"
                      id="contact-submit"
                      className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-base text-white shadow-[0_10px_25px_rgba(0,47,108,0.2)] hover:scale-[1.02] transition-all cursor-pointer"
                      style={{ background: "var(--color-primary)" }}
                    >
                      <Send size={16} />
                      {isRtl ? "إرسال الرسالة" : "Send Message"}
                    </button>
                  </form>
                ) : (
                  <form onSubmit={handleQuoteSubmit} className="space-y-5 text-start">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500">
                        {isRtl ? "الاسم الكامل" : "Full Name"} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={quoteForm.name}
                        onChange={(e) => {
                          setQuoteForm({ ...quoteForm, name: e.target.value });
                          if (validationErrors.name) setValidationErrors({ ...validationErrors, name: "" });
                        }}
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 transition-all ${
                          validationErrors.name ? "border-red-500 bg-red-50/10" : "border-slate-200"
                        }`}
                      />
                    </div>

                    {/* Email & Phone */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500">
                          {isRtl ? "البريد الإلكتروني" : "Email Address"} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={quoteForm.email}
                          onChange={(e) => {
                            setQuoteForm({ ...quoteForm, email: e.target.value });
                            if (validationErrors.email) setValidationErrors({ ...validationErrors, email: "" });
                          }}
                          className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 transition-all ${
                            validationErrors.email ? "border-red-500 bg-red-50/10" : "border-slate-200"
                          }`}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500">
                          {isRtl ? "رقم الهاتف / الجوال" : "Phone Number"} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={quoteForm.phone}
                          onChange={(e) => {
                            setQuoteForm({ ...quoteForm, phone: e.target.value });
                            if (validationErrors.phone) setValidationErrors({ ...validationErrors, phone: "" });
                          }}
                          className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 transition-all ${
                            validationErrors.phone ? "border-red-500 bg-red-50/10" : "border-slate-200"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Inquiry Category & Specific Program */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500">
                          {isRtl ? "تصنيف الاستفسار" : "Category"} <span className="text-red-500">*</span>
                        </label>
                        <select
                          required
                          value={quoteForm.category}
                          onChange={(e) => setQuoteForm({ ...quoteForm, category: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
                        >
                          <option value="">{isRtl ? "اختر التصنيف" : "Select Category"}</option>
                          <option value="general_course">{isRtl ? "دورات لغة إنجليزية عامة" : "General English Courses"}</option>
                          <option value="corporate">{isRtl ? "برامج تدريب الشركات" : "Corporate Training"}</option>
                          <option value="exams">{isRtl ? "الاختبارات الدولية (IELTS, etc)" : "International Examinations"}</option>
                          <option value="teacher_celta">{isRtl ? "تطوير المعلمين (CELTA)" : "Teacher Training / CELTA"}</option>
                          <option value="study_abroad">{isRtl ? "الدراسة والابتعاث في الخارج" : "Study Abroad & Travel"}</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500">
                          {isRtl ? "اسم البرنامج / المنهج المحدد" : "Specific Program / Course Name"}
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. IELTS Evening, CELTA July"
                          value={quoteForm.program}
                          onChange={(e) => setQuoteForm({ ...quoteForm, program: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500">
                        {isRtl ? "تفاصيل إضافية / متطلبات خاصة" : "Additional Specifications"}
                      </label>
                      <textarea
                        rows={4}
                        value={quoteForm.message}
                        onChange={(e) => setQuoteForm({ ...quoteForm, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-sm text-white bg-[#002f6c] hover:bg-blue-800 disabled:opacity-50 select-none cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="animate-spin" size={16} />
                          <span>{isRtl ? "جاري الإرسال..." : "Sending..."}</span>
                        </>
                      ) : (
                        <>
                          <Send size={14} />
                          <span>{isRtl ? "إرسال طلب التسعيرة" : "Request Quotation"}</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      <ThemeAccent height="h-1.5" />
      <StudentTestimonials />
    </div>
  );
}
