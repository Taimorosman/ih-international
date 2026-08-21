"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, CheckCircle, Map, AlertCircle, Loader2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { fadeUp } from "@/utils/animations";
import ThemeAccent from "@/components/ThemeAccent";

const branches = [
  {
    key: "dammam",
    phones: ["+966 58 178 1000", "+966 920 000 364"],
    email: "info@ih-saudiarabia.com",
    color: "var(--color-ih-blue)",
    colorClass: "bg-ih-blue",
    hoverTextClass: "group-hover/card:text-ih-blue",
    bg: "linear-gradient(135deg, #ffffff 0%, color-mix(in srgb, var(--color-ih-blue) 8%, white) 100%)",
    hoverBg: "linear-gradient(135deg, var(--color-ih-blue) 0%, var(--color-primary-dark) 100%)",
    border: "rgba(59, 63, 168, 0.25)",
    borderHover: "rgba(59, 63, 168, 0.55)",
    shadow: "shadow-ih-blue",
    cardImg: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=500&q=80",
    mapUrl: "https://maps.google.com/maps?q=Al%20Sughaiyer%20Tower%20Dammam%20Saudi%20Arabia&t=&z=16&ie=UTF8&iwloc=&output=embed",
    navigationUrl: "https://www.google.com/maps/search/?api=1&query=Al+Sughaiyer+Tower+Dammam+Saudi+Arabia"
  },
  {
    key: "jeddah",
    phones: ["+966 920 000 364"],
    email: "info@ih-saudiarabia.com",
    color: "var(--color-ih-green)",
    colorClass: "bg-ih-green",
    hoverTextClass: "group-hover/card:text-ih-green",
    bg: "linear-gradient(135deg, #ffffff 0%, color-mix(in srgb, var(--color-ih-green) 8%, white) 100%)",
    hoverBg: "linear-gradient(135deg, var(--color-ih-green) 0%, #126b41 100%)",
    border: "rgba(31, 169, 104, 0.25)",
    borderHover: "rgba(31, 169, 104, 0.55)",
    shadow: "shadow-ih-blue",
    cardImg: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=500&q=80",
    mapUrl: "https://maps.google.com/maps?q=Al%20Badriah%20Towers%20Jeddah%20Saudi%20Arabia&t=&z=16&ie=UTF8&iwloc=&output=embed",
    navigationUrl: "https://www.google.com/maps/search/?api=1&query=Al+Badriah+Towers+Jeddah+Saudi+Arabia"
  },
];

export default function ContactPage() {
  const { t, lang } = useLanguage();
  const isRtl = lang === "ar";
  const [submitted, setSubmitted] = useState(false);
  const [activeForm, setActiveForm] = useState<"contact" | "quotation">("contact");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
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
                  <motion.div
                    custom={i * 2}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className={`relative z-10 overflow-hidden asymmetric-card border transition-all duration-300 group/card cursor-pointer ${
                      branch.shadow
                    } w-full flex flex-col justify-between order-1 ${
                      i % 2 === 0 ? "lg:order-1 lg:col-span-5" : "lg:order-2 lg:col-span-5"
                    }`}
                    style={{
                      background: branch.bg,
                      borderColor: branch.border,
                    }}
                    whileHover={{
                      borderColor: branch.borderHover,
                      background: branch.hoverBg,
                    }}
                  >
                    {/* Visible background photo inside the card */}
                    <Image
                      src={branch.cardImg}
                      alt=""
                      fill
                      className="object-cover object-center opacity-[0.35] group-hover/card:opacity-[0.65] transition-opacity duration-300 pointer-events-none z-0"
                    />

                    {/* Soft darken overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/25 transition-colors duration-300 pointer-events-none z-0" />

                    <div className="h-2 relative z-10" style={{ background: branch.color }} />
                    <div className="p-8 relative z-10 flex flex-col h-full justify-between">
                      <div>
                        <h2 className="text-2xl font-extrabold mb-6 text-primary group-hover/card:text-white transition-colors duration-300">
                          {t(`contact.${branch.key}.title`)}
                        </h2>
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <MapPin size={18} className="shrink-0 mt-0.5 group-hover/card:text-white transition-colors" style={{ color: branch.color }} />
                            <p className="text-slate-700 text-sm leading-relaxed group-hover/card:text-white/90 transition-colors">
                              {t(`contact.${branch.key}.address`)}
                            </p>
                          </div>
                          <div className="flex items-start gap-3">
                            <Phone size={18} className="shrink-0 mt-0.5 group-hover/card:text-white transition-colors" style={{ color: branch.color }} />
                            <div className="flex flex-col gap-1">
                              {branch.phones.map((ph) => (
                                <a
                                  key={ph}
                                  href={`tel:${ph.replace(/\s/g, "")}`}
                                  className="text-sm font-medium hover:underline text-primary group-hover/card:text-white transition-colors"
                                >
                                  {ph}
                                </a>
                              ))}
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Mail size={18} className="shrink-0 group-hover/card:text-white transition-colors" style={{ color: branch.color }} />
                            <a
                              href={`mailto:${branch.email}`}
                              className="text-sm font-medium hover:underline text-primary group-hover/card:text-white transition-colors"
                            >
                              {branch.email}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Branch Map Iframe */}
                  <motion.div
                    custom={i * 2 + 1}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className={`relative overflow-hidden rounded-[32px] border transition-all duration-300 min-h-[350px] lg:min-h-full w-full order-2 flex flex-col ${
                      branch.shadow
                    } ${
                      i % 2 === 0 ? "lg:order-2 lg:col-span-7" : "lg:order-1 lg:col-span-7"
                    }`}
                    style={{
                      borderColor: branch.border,
                      background: "var(--color-light)",
                    }}
                    whileHover={{
                      borderColor: branch.borderHover,
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
                        className="flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold text-white bg-primary/80 backdrop-blur-md border border-white/20 shadow-lg hover:bg-primary hover:scale-105 transition-all duration-200"
                      >
                        <Map size={14} />
                        {t("contact.map.open")}
                      </a>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ThemeAccent height="h-1.5" pills />

      {/* ─── CONTACT FORM ─────────────────────────────────────── */}
      <section className="py-20" style={{ background: "var(--color-light)" }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
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
              <div className="bg-white asymmetric-card p-8 sm:p-10 shadow-ih-soft border border-gray-100">
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
                    {[
                      { key: "name", type: "text", label: t("contact.form.name") },
                      { key: "email", type: "email", label: t("contact.form.email") },
                      { key: "subject", type: "text", label: t("contact.form.subject") },
                    ].map(({ key, type, label }) => (
                      <div key={key}>
                        <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500">
                          {label}
                        </label>
                        <input
                          id={`contact-${key}`}
                          type={type}
                          required
                          value={form[key as keyof typeof form]}
                          onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                          style={{ color: "var(--color-charcoal)" }}
                        />
                      </div>
                    ))}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500">
                        {t("contact.form.message")}
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all resize-none"
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
                      {t("contact.form.submit")}
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
          </motion.div>
        </div>
      </section>
    </div>
  );
}
