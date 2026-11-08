"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  HelpCircle,
  Building2,
  Briefcase,
  ClipboardCheck,
  Plane,
  Mail,
  CheckCircle2,
  Upload,
  AlertCircle,
  Send,
  Loader2,
  ArrowRight
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import ThemeAccent from "@/components/ThemeAccent";

/* ═══════════════════════════════════════════════════════════════════════
   TYPES & TABS CONFIGURATION (MATCHING BETA.IHSAUDIARABIA.COM FORMS)
   ═══════════════════════════════════════════════════════════════════════ */

export type FormType =
  | "student"
  | "enquiry"
  | "corporate"
  | "teacher"
  | "placement"
  | "study-abroad"
  | "contact";

interface FormStates {
  student: {
    fullName: string;
    email: string;
    phone: string;
    age: string;
    course: string;
    schedule: string;
    message: string;
  };
  enquiry: {
    fullName: string;
    mobile: string;
    email: string;
    city: string;
    ageGroup: string;
    course: string;
    schedule: string;
    branch: string;
    mode: string;
    notes: string;
  };
  corporate: {
    companyName: string;
    contactPerson: string;
    position: string;
    mobile: string;
    email: string;
    employeesCount: string;
    trainingType: string;
    deliveryMethod: string;
    startDate: string;
    notes: string;
  };
  teacher: {
    fullName: string;
    nationality: string;
    countryResidence: string;
    mobile: string;
    email: string;
    city: string;
    position: string;
    qualification: string;
    experience: string;
    startDate: string;
    reason: string;
    comments: string;
    cvFile: File | null;
    cvFileName: string;
  };
  placement: {
    fullName: string;
    mobile: string;
    email: string;
    englishLevel: string;
    branch: string;
    preferredTime: string;
    mode: string;
  };
  "study-abroad": {
    fullName: string;
    age: string;
    mobile: string;
    email: string;
    country: string;
    program: string;
    budget: string;
    startDate: string;
    notes: string;
  };
  contact: {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
  };
}

const initialFormStates: FormStates = {
  student: {
    fullName: "",
    email: "",
    phone: "",
    age: "",
    course: "",
    schedule: "",
    message: "",
  },
  enquiry: {
    fullName: "",
    mobile: "",
    email: "",
    city: "",
    ageGroup: "",
    course: "",
    schedule: "",
    branch: "",
    mode: "",
    notes: "",
  },
  corporate: {
    companyName: "",
    contactPerson: "",
    position: "",
    mobile: "",
    email: "",
    employeesCount: "",
    trainingType: "",
    deliveryMethod: "",
    startDate: "",
    notes: "",
  },
  teacher: {
    fullName: "",
    nationality: "",
    countryResidence: "",
    mobile: "",
    email: "",
    city: "",
    position: "",
    qualification: "",
    experience: "",
    startDate: "",
    reason: "",
    comments: "",
    cvFile: null,
    cvFileName: "",
  },
  placement: {
    fullName: "",
    mobile: "",
    email: "",
    englishLevel: "",
    branch: "",
    preferredTime: "",
    mode: "",
  },
  "study-abroad": {
    fullName: "",
    age: "",
    mobile: "",
    email: "",
    country: "",
    program: "",
    budget: "",
    startDate: "",
    notes: "",
  },
  contact: {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  },
};

/* ═══════════════════════════════════════════════════════════════════════
   MAIN COMPONENT WITH SUSPENSE
   ═══════════════════════════════════════════════════════════════════════ */

export default function RegisterPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-slate-50 pt-24">
          <Loader2 className="animate-spin text-[#002f6c]" size={40} />
        </div>
      }
    >
      <FormsPortalContent />
    </Suspense>
  );
}

function FormsPortalContent() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";
  const searchParams = useSearchParams();
  const router = useRouter();

  // Active form tab state
  const [activeTab, setActiveTab] = useState<FormType>("student");

  // Form states & submission status
  const [formStates, setFormStates] = useState<FormStates>(initialFormStates);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  // Sync tab with URL search parameter (?form=...) or direct slug alias
  useEffect(() => {
    const formParam = searchParams.get("form");
    if (!formParam) return;

    const mapping: Record<string, FormType> = {
      student: "student",
      registration: "student",
      "registration-form": "student",
      enquiry: "enquiry",
      "course-enquiry": "enquiry",
      "general-course-enquiry-form": "enquiry",
      corporate: "corporate",
      "corporate-training": "corporate",
      "corporate-training-request-form": "corporate",
      teacher: "teacher",
      "teacher-application": "teacher",
      placement: "placement",
      "placement-test": "placement",
      "placement-test-booking": "placement",
      "study-abroad": "study-abroad",
      "study-abroad-interest": "study-abroad",
      contact: "contact",
      "contact-us": "contact",
    };

    if (mapping[formParam]) {
      setActiveTab(mapping[formParam]);
    }
  }, [searchParams]);

  const handleTabSwitch = (tab: FormType) => {
    setActiveTab(tab);
    setValidationErrors({});
    setIsSuccess(false);
    const params = new URLSearchParams(window.location.search);
    params.set("form", tab);
    router.push(`${window.location.pathname}?${params.toString()}`, { scroll: false });
  };

  const handleInputChange = (field: string, value: any) => {
    setFormStates((prev) => ({
      ...prev,
      [activeTab]: {
        ...prev[activeTab],
        [field]: value,
      },
    }));

    if (validationErrors[field]) {
      setValidationErrors((prev) => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      handleInputChange("cvFile", file);
      handleInputChange("cvFileName", file.name);
    }
  };

  const validateFields = (): boolean => {
    const errors: Record<string, string> = {};
    const reqText = isAr ? "هذا الحقل مطلوب" : "This field is required";

    if (activeTab === "student") {
      const f = formStates.student;
      if (!f.fullName.trim()) errors.fullName = reqText;
      if (!f.email.trim()) errors.email = reqText;
      if (!f.phone.trim()) errors.phone = reqText;
      if (!f.course) errors.course = reqText;
      if (!f.schedule) errors.schedule = reqText;
    } else if (activeTab === "enquiry") {
      const f = formStates.enquiry;
      if (!f.fullName.trim()) errors.fullName = reqText;
      if (!f.mobile.trim()) errors.mobile = reqText;
      if (!f.email.trim()) errors.email = reqText;
      if (!f.course) errors.course = reqText;
    } else if (activeTab === "corporate") {
      const f = formStates.corporate;
      if (!f.companyName.trim()) errors.companyName = reqText;
      if (!f.contactPerson.trim()) errors.contactPerson = reqText;
      if (!f.mobile.trim()) errors.mobile = reqText;
      if (!f.email.trim()) errors.email = reqText;
      if (!f.trainingType) errors.trainingType = reqText;
    } else if (activeTab === "teacher") {
      const f = formStates.teacher;
      if (!f.fullName.trim()) errors.fullName = reqText;
      if (!f.mobile.trim()) errors.mobile = reqText;
      if (!f.email.trim()) errors.email = reqText;
    } else if (activeTab === "placement") {
      const f = formStates.placement;
      if (!f.fullName.trim()) errors.fullName = reqText;
      if (!f.mobile.trim()) errors.mobile = reqText;
      if (!f.email.trim()) errors.email = reqText;
    } else if (activeTab === "study-abroad") {
      const f = formStates["study-abroad"];
      if (!f.fullName.trim()) errors.fullName = reqText;
      if (!f.mobile.trim()) errors.mobile = reqText;
      if (!f.email.trim()) errors.email = reqText;
    } else if (activeTab === "contact") {
      const f = formStates.contact;
      if (!f.name.trim()) errors.name = reqText;
      if (!f.email.trim()) errors.email = reqText;
      if (!f.subject) errors.subject = reqText;
      if (!f.message.trim()) errors.message = reqText;
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateFields()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormStates(initialFormStates);
    }, 1200);
  };

  /* ─── 7 FORMS TABS CONFIGURATION ─── */
  const tabs = [
    {
      id: "student" as FormType,
      num: "1️⃣",
      label: isAr ? "تسجيل الطلاب" : "Student Registration",
      icon: GraduationCap,
      slug: "registration-form",
    },
    {
      id: "enquiry" as FormType,
      num: "2️⃣",
      label: isAr ? "استفسار الدورات" : "Course Enquiry",
      icon: HelpCircle,
      slug: "general-course-enquiry-form",
    },
    {
      id: "corporate" as FormType,
      num: "3️⃣",
      label: isAr ? "التدريب المؤسسي" : "Corporate Training",
      icon: Building2,
      slug: "corporate-training-request-form",
    },
    {
      id: "teacher" as FormType,
      num: "4️⃣",
      label: isAr ? "طلب توظيف معلمين" : "Teacher Application",
      icon: Briefcase,
      slug: "teacher-application",
    },
    {
      id: "placement" as FormType,
      num: "5️⃣",
      label: isAr ? "حجز اختبار المستوى" : "Placement Test Booking",
      icon: ClipboardCheck,
      slug: "placement-test-booking",
    },
    {
      id: "study-abroad" as FormType,
      num: "6️⃣",
      label: isAr ? "الدراسة في الخارج" : "Study Abroad Interest",
      icon: Plane,
      slug: "study-abroad-interest",
    },
    {
      id: "contact" as FormType,
      num: "7️⃣",
      label: isAr ? "اتصل بنا" : "Contact Us",
      icon: Mail,
      slug: "contact-us",
    },
  ];

  return (
    <div className="pt-24 min-h-screen bg-slate-50/60 pb-20 font-['Inter',_sans-serif]">
      <ThemeAccent />

      {/* ─── Header ─── */}
      <section className="relative bg-gradient-to-br from-slate-100 via-white to-slate-50 border-b border-slate-200 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase text-blue-900 bg-blue-50 border border-blue-200 mb-3">
            {isAr ? "البوابة الموحدة" : "Unified Forms Portal"}
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-[#002f6c] mb-3">
            {isAr ? "نماذج التسجيل والاستفسارات" : "Registration & Request Forms"}
          </h1>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm md:text-base text-gray-500 font-light leading-relaxed">
            {isAr
              ? "اختر النموذج المناسب من القائمة الجانبية للتسجيل، حجز الاختبار، أو تقديم طلبك بكل سهولة."
              : "Select a form from the menu to register for courses, book placement tests, request corporate training, or join our academic team."}
          </p>
        </div>
      </section>

      {/* ─── Main Portal Area ─── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Tab Selectors */}
        <div className="lg:col-span-4 space-y-3">
          <div className="bg-white rounded-3xl border border-slate-200/80 p-4 shadow-sm space-y-1.5 sticky top-28">
            <h3 className="text-xs font-black tracking-widest text-[#002f6c] uppercase px-3 pb-2 border-b border-slate-100">
              {isAr ? "النماذج المتاحة" : "Available Forms"}
            </h3>
            <div className="flex flex-col gap-1.5 pt-2">
              {tabs.map((tab) => {
                const TabIcon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabSwitch(tab.id)}
                    className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all relative overflow-hidden group select-none text-start cursor-pointer ${
                      isActive
                        ? "text-white bg-[#002f6c] shadow-sm font-bold"
                        : "text-slate-600 hover:text-[#002f6c] hover:bg-slate-50 border border-transparent hover:border-slate-100"
                    }`}
                  >
                    <span className="text-xs opacity-75">{tab.num}</span>
                    <TabIcon
                      size={17}
                      className={`shrink-0 transition-colors ${
                        isActive ? "text-white" : "text-slate-400 group-hover:text-[#002f6c]"
                      }`}
                    />
                    <span className="flex-1 truncate">{tab.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeTabGlow"
                        className="absolute right-0 top-0 bottom-0 w-1 bg-red-500 rtl:right-auto rtl:left-0"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Active Form Container */}
        <div className="lg:col-span-8">
          <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-10 shadow-sm relative overflow-hidden">
            <div className="h-1.5 absolute top-0 left-0 right-0 bg-[#002f6c]" />

            {isSuccess ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 size={56} className="text-green-500 mx-auto" />
                <h3 className="text-2xl font-black text-[#002f6c]">
                  {isAr ? "تم إرسال طلبك بنجاح!" : "Submission Successful!"}
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                  {isAr
                    ? "شكرًا لتواصلك مع معاهد الهاوس الدولي السعودية. سيقوم فريقنا بمراجعة طلبك والتواصل معك خلال ٢٤ ساعة."
                    : "Thank you for contacting IH Saudi Arabia. Our admissions team will review your information and get back to you within 24 hours."}
                </p>
                <div className="pt-4 flex justify-center gap-3">
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-2.5 rounded-xl text-xs font-bold bg-[#002f6c] text-white hover:bg-blue-900 transition-all cursor-pointer"
                  >
                    {isAr ? "إرسال طلب آخر" : "Submit Another Request"}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <AnimatePresence mode="wait">
                  {/* ────────────────────────────────────────────────────────
                      FORM 1: STUDENT REGISTRATION
                      https://beta.ihsaudiarabia.com/registration-form
                     ──────────────────────────────────────────────────────── */}
                  {activeTab === "student" && (
                    <motion.div
                      key="form-student"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-5"
                    >
                      <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
                        <h2 className="text-xl font-bold text-[#002f6c] flex items-center gap-2">
                          <GraduationCap className="text-red-500" />
                          {isAr ? "تسجيل الطلاب" : "Student Registration"}
                        </h2>
                        <span className="text-[11px] text-slate-400 font-medium">
                          https://beta.ihsaudiarabia.com/registration-form
                        </span>
                      </div>

                      {/* Full Name */}
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                          {isAr ? "الاسم الكامل" : "Full Name"} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your full name"
                          value={formStates.student.fullName}
                          onChange={(e) => handleInputChange("fullName", e.target.value)}
                          className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 transition-all ${
                            validationErrors.fullName ? "border-red-500 bg-red-50/10" : "border-slate-200"
                          }`}
                        />
                        {validationErrors.fullName && (
                          <p className="text-red-500 text-[10px] mt-1 flex items-center gap-1">
                            <AlertCircle size={10} /> {validationErrors.fullName}
                          </p>
                        )}
                      </div>

                      {/* Email Address & Phone Number */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                            {isAr ? "البريد الإلكتروني" : "Email Address"} <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="your@email.com"
                            value={formStates.student.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 transition-all ${
                              validationErrors.email ? "border-red-500 bg-red-50/10" : "border-slate-200"
                            }`}
                          />
                          {validationErrors.email && (
                            <p className="text-red-500 text-[10px] mt-1 flex items-center gap-1">
                              <AlertCircle size={10} /> {validationErrors.email}
                            </p>
                          )}
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                            {isAr ? "رقم الهاتف" : "Phone Number"} <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="+966 XX XXX XXXX"
                            value={formStates.student.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 transition-all ${
                              validationErrors.phone ? "border-red-500 bg-red-50/10" : "border-slate-200"
                            }`}
                          />
                          {validationErrors.phone && (
                            <p className="text-red-500 text-[10px] mt-1 flex items-center gap-1">
                              <AlertCircle size={10} /> {validationErrors.phone}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Age Group */}
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                          {isAr ? "الفئة العمرية" : "Age Group"}
                        </label>
                        <select
                          value={formStates.student.age}
                          onChange={(e) => handleInputChange("age", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
                        >
                          <option value="">{isAr ? "اختر الفئة العمرية" : "Select age group"}</option>
                          <option value="Under 12">Under 12</option>
                          <option value="12–17">12–17</option>
                          <option value="18–24">18–24</option>
                          <option value="25–40">25–40</option>
                          <option value="41+">41+</option>
                        </select>
                      </div>

                      {/* Course of Interest */}
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                          {isAr ? "الدورة المطلوبة" : "Course of Interest"} <span className="text-red-500">*</span>
                        </label>
                        <select
                          required
                          value={formStates.student.course}
                          onChange={(e) => handleInputChange("course", e.target.value)}
                          className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 appearance-none cursor-pointer ${
                            validationErrors.course ? "border-red-500" : "border-slate-200"
                          }`}
                        >
                          <option value="">{isAr ? "اختر الدورة" : "Select a course"}</option>
                          <option value="General English">General English</option>
                          <option value="Business English">Business English</option>
                          <option value="IELTS Preparation">IELTS Preparation</option>
                          <option value="Technical & Professional English">Technical & Professional English</option>
                          <option value="Young Learners Program">Young Learners Program</option>
                          <option value="Spoken English">Spoken English</option>
                          <option value="Online English Classes">Online English Classes</option>
                          <option value="Private Tuition">Private Tuition</option>
                          <option value="Executive Coaching">Executive Coaching</option>
                          <option value="Other">Other</option>
                        </select>
                        {validationErrors.course && (
                          <p className="text-red-500 text-[10px] mt-1 flex items-center gap-1">
                            <AlertCircle size={10} /> {validationErrors.course}
                          </p>
                        )}
                      </div>

                      {/* Preferred Schedule */}
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                          {isAr ? "الفترة المفضلة" : "Preferred Schedule"} <span className="text-red-500">*</span>
                        </label>
                        <select
                          required
                          value={formStates.student.schedule}
                          onChange={(e) => handleInputChange("schedule", e.target.value)}
                          className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 appearance-none cursor-pointer ${
                            validationErrors.schedule ? "border-red-500" : "border-slate-200"
                          }`}
                        >
                          <option value="">{isAr ? "اختر الفترة المفضلة" : "Select preferred schedule"}</option>
                          <option value="Morning">{isAr ? "الصباح" : "Morning"}</option>
                          <option value="Afternoon">{isAr ? "بعد الظهر" : "Afternoon"}</option>
                          <option value="Evening">{isAr ? "المساء" : "Evening"}</option>
                          <option value="Weekend">Weekend</option>
                          <option value="Flexible / Online">Flexible / Online</option>
                        </select>
                        {validationErrors.schedule && (
                          <p className="text-red-500 text-[10px] mt-1 flex items-center gap-1">
                            <AlertCircle size={10} /> {validationErrors.schedule}
                          </p>
                        )}
                      </div>

                      {/* Additional Notes */}
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                          {isAr ? "ملاحظات إضافية" : "Additional Notes"}
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Any special requirements, questions, or additional information..."
                          value={formStates.student.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 resize-none"
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* ────────────────────────────────────────────────────────
                      FORM 2: COURSE ENQUIRY
                      https://beta.ihsaudiarabia.com/general-course-enquiry-form
                     ──────────────────────────────────────────────────────── */}
                  {activeTab === "enquiry" && (
                    <motion.div
                      key="form-enquiry"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-5"
                    >
                      <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
                        <h2 className="text-xl font-bold text-[#002f6c] flex items-center gap-2">
                          <HelpCircle className="text-red-500" />
                          {isAr ? "استفسار الدورات" : "General Course Enquiry"}
                        </h2>
                        <span className="text-[11px] text-slate-400 font-medium">
                          https://beta.ihsaudiarabia.com/general-course-enquiry-form
                        </span>
                      </div>

                      {/* Full Name & Mobile */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                            {isAr ? "الاسم الكامل" : "Full Name"} <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Your full name"
                            value={formStates.enquiry.fullName}
                            onChange={(e) => handleInputChange("fullName", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                            {isAr ? "رقم الجوال" : "Mobile Number"} <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="+966 XX XXX XXXX"
                            value={formStates.enquiry.mobile}
                            onChange={(e) => handleInputChange("mobile", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500"
                          />
                        </div>
                      </div>

                      {/* Email & City */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                            {isAr ? "البريد الإلكتروني" : "Email"} <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="your@email.com"
                            value={formStates.enquiry.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                            {isAr ? "المدينة" : "City"}
                          </label>
                          <input
                            type="text"
                            placeholder="Your city"
                            value={formStates.enquiry.city}
                            onChange={(e) => handleInputChange("city", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500"
                          />
                        </div>
                      </div>

                      {/* Age Group & Course Interested In */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                            {isAr ? "الفئة العمرية" : "Age Group"}
                          </label>
                          <select
                            value={formStates.enquiry.ageGroup}
                            onChange={(e) => handleInputChange("ageGroup", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
                          >
                            <option value="">{isAr ? "اختر" : "Select"}</option>
                            <option value="Under 12">Under 12</option>
                            <option value="12–17">12–17</option>
                            <option value="18–24">18–24</option>
                            <option value="25–40">25–40</option>
                            <option value="41+">41+</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                            {isAr ? "الدورة المطلوبة" : "Course Interested In"} <span className="text-red-500">*</span>
                          </label>
                          <select
                            required
                            value={formStates.enquiry.course}
                            onChange={(e) => handleInputChange("course", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
                          >
                            <option value="">{isAr ? "اختر الدورة" : "Select a course"}</option>
                            <option value="General English">General English</option>
                            <option value="Business English">Business English</option>
                            <option value="IELTS Preparation">IELTS Preparation</option>
                            <option value="Technical English">Technical English</option>
                            <option value="Young Learners">Young Learners</option>
                            <option value="Spoken English">Spoken English</option>
                            <option value="Online Classes">Online Classes</option>
                            <option value="Private Tuition">Private Tuition</option>
                            <option value="Executive Coaching">Executive Coaching</option>
                            <option value="Corporate Training">Corporate Training</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>

                      {/* Schedule, Branch & Mode */}
                      <div className="grid sm:grid-cols-3 gap-5">
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                            {isAr ? "الفترة المفضلة" : "Preferred Schedule"}
                          </label>
                          <select
                            value={formStates.enquiry.schedule}
                            onChange={(e) => handleInputChange("schedule", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
                          >
                            <option value="">{isAr ? "اختر" : "Select"}</option>
                            <option value="Morning">Morning</option>
                            <option value="Afternoon">Afternoon</option>
                            <option value="Evening">Evening</option>
                            <option value="Weekend">Weekend</option>
                            <option value="Flexible">Flexible</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                            {isAr ? "الفرع المفضل" : "Preferred Branch"}
                          </label>
                          <select
                            value={formStates.enquiry.branch}
                            onChange={(e) => handleInputChange("branch", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
                          >
                            <option value="">{isAr ? "اختر" : "Select"}</option>
                            <option value="Riyadh">Riyadh</option>
                            <option value="Jeddah">Jeddah</option>
                            <option value="Dammam / Dhahran">Dammam / Dhahran</option>
                            <option value="Online">Online</option>
                            <option value="Any">Any</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                            {isAr ? "نوع الحضور" : "Online or In-Person"}
                          </label>
                          <select
                            value={formStates.enquiry.mode}
                            onChange={(e) => handleInputChange("mode", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
                          >
                            <option value="">{isAr ? "اختر" : "Select"}</option>
                            <option value="Online">Online</option>
                            <option value="In-Person">In-Person</option>
                            <option value="Hybrid">Hybrid</option>
                          </select>
                        </div>
                      </div>

                      {/* Notes */}
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                          {isAr ? "ملاحظات إضافية" : "Additional Notes"}
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Any special requirements..."
                          value={formStates.enquiry.notes}
                          onChange={(e) => handleInputChange("notes", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 resize-none"
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* ────────────────────────────────────────────────────────
                      FORM 3: CORPORATE TRAINING
                      https://beta.ihsaudiarabia.com/corporate-training-request-form
                     ──────────────────────────────────────────────────────── */}
                  {activeTab === "corporate" && (
                    <motion.div
                      key="form-corporate"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-5"
                    >
                      <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
                        <h2 className="text-xl font-bold text-[#002f6c] flex items-center gap-2">
                          <Building2 className="text-red-500" />
                          {isAr ? "طلب تدريب الشركات" : "Corporate Training Request"}
                        </h2>
                        <span className="text-[11px] text-slate-400 font-medium">
                          https://beta.ihsaudiarabia.com/corporate-training-request-form
                        </span>
                      </div>

                      {/* Company Name & Contact Person */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                            {isAr ? "اسم الشركة" : "Company Name"} <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Company name"
                            value={formStates.corporate.companyName}
                            onChange={(e) => handleInputChange("companyName", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                            {isAr ? "الشخص المسؤول" : "Contact Person"} <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Full name"
                            value={formStates.corporate.contactPerson}
                            onChange={(e) => handleInputChange("contactPerson", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500"
                          />
                        </div>
                      </div>

                      {/* Position & Mobile */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                            {isAr ? "المسمى الوظيفي" : "Position"}
                          </label>
                          <input
                            type="text"
                            placeholder="Job title"
                            value={formStates.corporate.position}
                            onChange={(e) => handleInputChange("position", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                            {isAr ? "رقم الجوال" : "Mobile"} <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="+966 XX XXX XXXX"
                            value={formStates.corporate.mobile}
                            onChange={(e) => handleInputChange("mobile", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500"
                          />
                        </div>
                      </div>

                      {/* Email & Number of Employees */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                            {isAr ? "البريد الإلكتروني" : "Email"} <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="your@email.com"
                            value={formStates.corporate.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                            {isAr ? "عدد الموظفين المتوقع" : "Number of Employees"}
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. 10–20"
                            value={formStates.corporate.employeesCount}
                            onChange={(e) => handleInputChange("employeesCount", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500"
                          />
                        </div>
                      </div>

                      {/* Type of Training & Delivery Method */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                            {isAr ? "نوع التدريب المطلوب" : "Type of Training Needed"} <span className="text-red-500">*</span>
                          </label>
                          <select
                            required
                            value={formStates.corporate.trainingType}
                            onChange={(e) => handleInputChange("trainingType", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
                          >
                            <option value="">{isAr ? "اختر" : "Select"}</option>
                            <option value="General English">General English</option>
                            <option value="Business English">Business English</option>
                            <option value="Technical English">Technical English</option>
                            <option value="Executive Coaching">Executive Coaching</option>
                            <option value="Communication Skills">Communication Skills</option>
                            <option value="Presentation Skills">Presentation Skills</option>
                            <option value="English for Specific Purposes">English for Specific Purposes</option>
                            <option value="Teacher Training">Teacher Training</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                            {isAr ? "طريقة تقديم التدريب" : "Preferred Delivery Method"}
                          </label>
                          <select
                            value={formStates.corporate.deliveryMethod}
                            onChange={(e) => handleInputChange("deliveryMethod", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
                          >
                            <option value="">{isAr ? "اختر" : "Select"}</option>
                            <option value="Face-to-Face">Face-to-Face</option>
                            <option value="Live Online">Live Online</option>
                            <option value="Hybrid">Hybrid</option>
                            <option value="At Our Centre">At Our Centre</option>
                            <option value="At Your Location">At Your Location</option>
                          </select>
                        </div>
                      </div>

                      {/* Expected Start Date */}
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                          {isAr ? "تاريخ البدء المتوقع" : "Expected Start Date"}
                        </label>
                        <input
                          type="date"
                          value={formStates.corporate.startDate}
                          onChange={(e) => handleInputChange("startDate", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500"
                        />
                      </div>

                      {/* Notes */}
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                          {isAr ? "ملاحظات إضافية" : "Notes"}
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Additional requirements..."
                          value={formStates.corporate.notes}
                          onChange={(e) => handleInputChange("notes", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 resize-none"
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* ────────────────────────────────────────────────────────
                      FORM 4: TEACHER APPLICATION
                      https://beta.ihsaudiarabia.com/teacher-application
                     ──────────────────────────────────────────────────────── */}
                  {activeTab === "teacher" && (
                    <motion.div
                      key="form-teacher"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-5"
                    >
                      <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
                        <h2 className="text-xl font-bold text-[#002f6c] flex items-center gap-2">
                          <Briefcase className="text-red-500" />
                          {isAr ? "طلب توظيف المعلمين" : "Teacher Application"}
                        </h2>
                        <span className="text-[11px] text-slate-400 font-medium">
                          https://beta.ihsaudiarabia.com/teacher-application
                        </span>
                      </div>

                      {/* Full Name & Nationality */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                            {isAr ? "الاسم الكامل" : "Full Name"} <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={formStates.teacher.fullName}
                            onChange={(e) => handleInputChange("fullName", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                            {isAr ? "الجنسية" : "Nationality"}
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Saudi, British..."
                            value={formStates.teacher.nationality}
                            onChange={(e) => handleInputChange("nationality", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500"
                          />
                        </div>
                      </div>

                      {/* Current Country of Residence & Current City */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                            {isAr ? "دولة الإقامة الحالية" : "Current Country of Residence"}
                          </label>
                          <input
                            type="text"
                            placeholder="Current country"
                            value={formStates.teacher.countryResidence}
                            onChange={(e) => handleInputChange("countryResidence", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                            {isAr ? "المدينة الحالية" : "Current City"}
                          </label>
                          <input
                            type="text"
                            placeholder="Current city"
                            value={formStates.teacher.city}
                            onChange={(e) => handleInputChange("city", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500"
                          />
                        </div>
                      </div>

                      {/* Mobile & Email */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                            {isAr ? "رقم الجوال" : "Mobile Number"} <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="+966 XX XXX XXXX"
                            value={formStates.teacher.mobile}
                            onChange={(e) => handleInputChange("mobile", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                            {isAr ? "البريد الإلكتروني" : "Email Address"} <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="your@email.com"
                            value={formStates.teacher.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500"
                          />
                        </div>
                      </div>

                      {/* Position & Highest Qualification */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                            {isAr ? "الوظيفة المتقدم لها" : "Position Applying For"}
                          </label>
                          <select
                            value={formStates.teacher.position}
                            onChange={(e) => handleInputChange("position", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
                          >
                            <option value="">{isAr ? "اختر" : "Select"}</option>
                            <option value="English Language Teacher">English Language Teacher</option>
                            <option value="Corporate English Trainer">Corporate English Trainer</option>
                            <option value="Young Learners Teacher">Young Learners Teacher</option>
                            <option value="IELTS Instructor">IELTS Instructor</option>
                            <option value="Online English Teacher">Online English Teacher</option>
                            <option value="CELTA/DELTA Trainer">CELTA/DELTA Trainer</option>
                            <option value="Academic Coordinator">Academic Coordinator</option>
                            <option value="Teacher Trainer">Teacher Trainer</option>
                            <option value="Part-Time Teacher">Part-Time Teacher</option>
                            <option value="Full-Time Teacher">Full-Time Teacher</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                            {isAr ? "أعلى مؤهل علمي" : "Highest Qualification"}
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. CELTA, DELTA, MA TESOL..."
                            value={formStates.teacher.qualification}
                            onChange={(e) => handleInputChange("qualification", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500"
                          />
                        </div>
                      </div>

                      {/* Experience & Available Start Date */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                            {isAr ? "سنوات الخبرة في التدريس" : "Years of Teaching Experience"}
                          </label>
                          <select
                            value={formStates.teacher.experience}
                            onChange={(e) => handleInputChange("experience", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
                          >
                            <option value="">{isAr ? "اختر" : "Select"}</option>
                            <option value="Less than 1 year">Less than 1 year</option>
                            <option value="1–3 years">1–3 years</option>
                            <option value="3–5 years">3–5 years</option>
                            <option value="5–10 years">5–10 years</option>
                            <option value="More than 10 years">More than 10 years</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                            {isAr ? "تاريخ التفرغ للبدء" : "Available Start Date"}
                          </label>
                          <input
                            type="date"
                            value={formStates.teacher.startDate}
                            onChange={(e) => handleInputChange("startDate", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500"
                          />
                        </div>
                      </div>

                      {/* Why join & Comments */}
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                          {isAr ? "لماذا ترغب في الانضمام إلى IH السعودية؟" : "Why would you like to join IH Saudi Arabia?"}
                        </label>
                        <textarea
                          rows={3}
                          value={formStates.teacher.reason}
                          onChange={(e) => handleInputChange("reason", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 resize-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                          {isAr ? "ملاحظات أو مؤهلات إضافية" : "Additional Comments"}
                        </label>
                        <textarea
                          rows={2}
                          value={formStates.teacher.comments}
                          onChange={(e) => handleInputChange("comments", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 resize-none"
                        />
                      </div>

                      {/* CV Upload */}
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                          {isAr ? "السيرة الذاتية (CV / Resume)" : "CV / Resume Upload"}
                        </label>
                        <div className="relative border-2 border-dashed border-slate-200 rounded-2xl p-6 text-center bg-slate-50/30 hover:bg-slate-50 transition-colors flex flex-col items-center justify-center cursor-pointer group">
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileUpload}
                            className="absolute inset-0 opacity-0 cursor-pointer w-full h-full z-10"
                          />
                          <Upload size={22} className="text-slate-400 group-hover:text-[#002f6c] mb-2 transition-colors" />
                          <p className="text-xs font-bold text-slate-700 mb-1">
                            {formStates.teacher.cvFileName ? (
                              <span className="text-green-600 flex items-center gap-1.5 justify-center">
                                <CheckCircle2 size={14} />
                                {formStates.teacher.cvFileName}
                              </span>
                            ) : (
                              isAr ? "اضغط لرفع ملف السيرة الذاتية" : "Click or drag to upload your CV"
                            )}
                          </p>
                          <p className="text-[10px] text-gray-400">PDF, DOC, DOCX (Max 5MB)</p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* ────────────────────────────────────────────────────────
                      FORM 5: PLACEMENT TEST BOOKING
                      https://beta.ihsaudiarabia.com/placement-test-booking
                     ──────────────────────────────────────────────────────── */}
                  {activeTab === "placement" && (
                    <motion.div
                      key="form-placement"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-5"
                    >
                      <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
                        <h2 className="text-xl font-bold text-[#002f6c] flex items-center gap-2">
                          <ClipboardCheck className="text-red-500" />
                          {isAr ? "حجز اختبار تحديد المستوى" : "Placement Test Booking"}
                        </h2>
                        <span className="text-[11px] text-slate-400 font-medium">
                          https://beta.ihsaudiarabia.com/placement-test-booking
                        </span>
                      </div>

                      {/* Full Name */}
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                          {isAr ? "الاسم الكامل" : "Full Name"} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your full name"
                          value={formStates.placement.fullName}
                          onChange={(e) => handleInputChange("fullName", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500"
                        />
                      </div>

                      {/* Mobile & Email */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                            {isAr ? "رقم الجوال" : "Mobile"} <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="+966 XX XXX XXXX"
                            value={formStates.placement.mobile}
                            onChange={(e) => handleInputChange("mobile", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                            {isAr ? "البريد الإلكتروني" : "Email"} <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="your@email.com"
                            value={formStates.placement.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500"
                          />
                        </div>
                      </div>

                      {/* Current English Level */}
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                          {isAr ? "المستوى اللغوي الحالي (تقريبي)" : "Current English Level"}
                        </label>
                        <select
                          value={formStates.placement.englishLevel}
                          onChange={(e) => handleInputChange("englishLevel", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
                        >
                          <option value="">{isAr ? "اختر (اختياري)" : "Select (optional)"}</option>
                          <option value="Beginner">Beginner</option>
                          <option value="Elementary">Elementary</option>
                          <option value="Pre-Intermediate">Pre-Intermediate</option>
                          <option value="Intermediate">Intermediate</option>
                          <option value="Upper-Intermediate">Upper-Intermediate</option>
                          <option value="Advanced">Advanced</option>
                          <option value="Not Sure">Not Sure</option>
                        </select>
                      </div>

                      {/* Preferred Branch, Preferred Time & Mode */}
                      <div className="grid sm:grid-cols-3 gap-5">
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                            {isAr ? "الفرع المفضل" : "Preferred Branch"}
                          </label>
                          <select
                            value={formStates.placement.branch}
                            onChange={(e) => handleInputChange("branch", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
                          >
                            <option value="">{isAr ? "اختر" : "Select"}</option>
                            <option value="Riyadh">Riyadh</option>
                            <option value="Jeddah">Jeddah</option>
                            <option value="Dammam / Dhahran">Dammam / Dhahran</option>
                            <option value="Online">Online</option>
                            <option value="Any">Any</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                            {isAr ? "الوقت المفضل" : "Preferred Time"}
                          </label>
                          <select
                            value={formStates.placement.preferredTime}
                            onChange={(e) => handleInputChange("preferredTime", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
                          >
                            <option value="">{isAr ? "اختر" : "Select"}</option>
                            <option value="Morning">{isAr ? "الصباح" : "Morning"}</option>
                            <option value="Afternoon">{isAr ? "بعد الظهر" : "Afternoon"}</option>
                            <option value="Evening">{isAr ? "المساء" : "Evening"}</option>
                            <option value="Flexible">Flexible</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                            {isAr ? "طريقة الاختبار" : "Online or In-Person"}
                          </label>
                          <select
                            value={formStates.placement.mode}
                            onChange={(e) => handleInputChange("mode", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
                          >
                            <option value="">{isAr ? "اختر" : "Select"}</option>
                            <option value="Online Test">Online Test</option>
                            <option value="In-Person Test">In-Person Test</option>
                          </select>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* ────────────────────────────────────────────────────────
                      FORM 6: STUDY ABROAD INTEREST
                      https://beta.ihsaudiarabia.com/study-abroad-interest
                     ──────────────────────────────────────────────────────── */}
                  {activeTab === "study-abroad" && (
                    <motion.div
                      key="form-study-abroad"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-5"
                    >
                      <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
                        <h2 className="text-xl font-bold text-[#002f6c] flex items-center gap-2">
                          <Plane className="text-red-500" />
                          {isAr ? "الدراسة في الخارج" : "Study Abroad Interest"}
                        </h2>
                        <span className="text-[11px] text-slate-400 font-medium">
                          https://beta.ihsaudiarabia.com/study-abroad-interest
                        </span>
                      </div>

                      {/* Full Name & Age */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                            {isAr ? "الاسم الكامل" : "Full Name"} <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Your full name"
                            value={formStates["study-abroad"].fullName}
                            onChange={(e) => handleInputChange("fullName", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                            {isAr ? "العمر" : "Age"}
                          </label>
                          <input
                            type="number"
                            placeholder="Your age"
                            value={formStates["study-abroad"].age}
                            onChange={(e) => handleInputChange("age", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500"
                          />
                        </div>
                      </div>

                      {/* Mobile & Email */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                            {isAr ? "رقم الجوال" : "Mobile"} <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="+966 XX XXX XXXX"
                            value={formStates["study-abroad"].mobile}
                            onChange={(e) => handleInputChange("mobile", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                            {isAr ? "البريد الإلكتروني" : "Email"} <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="your@email.com"
                            value={formStates["study-abroad"].email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500"
                          />
                        </div>
                      </div>

                      {/* Preferred Country & Preferred Program */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                            {isAr ? "الوجهة المفضلة" : "Preferred Country"}
                          </label>
                          <select
                            value={formStates["study-abroad"].country}
                            onChange={(e) => handleInputChange("country", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
                          >
                            <option value="">{isAr ? "اختر" : "Select"}</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="United States">United States</option>
                            <option value="Canada">Canada</option>
                            <option value="Australia">Australia</option>
                            <option value="New Zealand">New Zealand</option>
                            <option value="Ireland">Ireland</option>
                            <option value="Spain">Spain</option>
                            <option value="France">France</option>
                            <option value="Germany">Germany</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                            {isAr ? "البرنامج المفضل" : "Preferred Program"}
                          </label>
                          <select
                            value={formStates["study-abroad"].program}
                            onChange={(e) => handleInputChange("program", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
                          >
                            <option value="">{isAr ? "اختر" : "Select"}</option>
                            <option value="General English">General English</option>
                            <option value="Academic English">Academic English</option>
                            <option value="Exam Preparation">Exam Preparation</option>
                            <option value="University Pathway">University Pathway</option>
                            <option value="Business English">Business English</option>
                            <option value="Summer Program">Summer Program</option>
                            <option value="Cultural Exchange">Cultural Exchange</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>

                      {/* Budget Range & Expected Start Date */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                            {isAr ? "الميزانية المتوقعة" : "Budget Range"}
                          </label>
                          <select
                            value={formStates["study-abroad"].budget}
                            onChange={(e) => handleInputChange("budget", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
                          >
                            <option value="">{isAr ? "اختر" : "Select"}</option>
                            <option value="Under SAR 10,000">Under SAR 10,000</option>
                            <option value="SAR 10,000–20,000">SAR 10,000–20,000</option>
                            <option value="SAR 20,000–50,000">SAR 20,000–50,000</option>
                            <option value="SAR 50,000–100,000">SAR 50,000–100,000</option>
                            <option value="Above SAR 100,000">Above SAR 100,000</option>
                            <option value="Not Sure">Not Sure</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                            {isAr ? "تاريخ السفر المتوقع" : "Expected Start Date"}
                          </label>
                          <input
                            type="date"
                            value={formStates["study-abroad"].startDate}
                            onChange={(e) => handleInputChange("startDate", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500"
                          />
                        </div>
                      </div>

                      {/* Additional Notes */}
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                          {isAr ? "ملاحظات إضافية" : "Additional Notes"}
                        </label>
                        <textarea
                          rows={3}
                          placeholder="Any special requirements..."
                          value={formStates["study-abroad"].notes}
                          onChange={(e) => handleInputChange("notes", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 resize-none"
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* ────────────────────────────────────────────────────────
                      FORM 7: CONTACT US
                      https://beta.ihsaudiarabia.com/contact-us
                     ──────────────────────────────────────────────────────── */}
                  {activeTab === "contact" && (
                    <motion.div
                      key="form-contact"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-5"
                    >
                      <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
                        <h2 className="text-xl font-bold text-[#002f6c] flex items-center gap-2">
                          <Mail className="text-red-500" />
                          {isAr ? "تواصل معنا" : "Contact Us"}
                        </h2>
                        <span className="text-[11px] text-slate-400 font-medium">
                          https://beta.ihsaudiarabia.com/contact-us
                        </span>
                      </div>

                      {/* Full Name */}
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                          {isAr ? "الاسم الكامل" : "Full Name"} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your full name"
                          value={formStates.contact.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500"
                        />
                      </div>

                      {/* Email Address & Phone Number */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                            {isAr ? "البريد الإلكتروني" : "Email Address"} <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="your@email.com"
                            value={formStates.contact.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                            {isAr ? "رقم الهاتف" : "Phone Number"}
                          </label>
                          <input
                            type="tel"
                            placeholder="+966 XX XXX XXXX"
                            value={formStates.contact.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500"
                          />
                        </div>
                      </div>

                      {/* Subject */}
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                          {isAr ? "الموضوع" : "Subject"} <span className="text-red-500">*</span>
                        </label>
                        <select
                          required
                          value={formStates.contact.subject}
                          onChange={(e) => handleInputChange("subject", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
                        >
                          <option value="">{isAr ? "اختر الموضوع" : "Select a subject"}</option>
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
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                          {isAr ? "الرسالة" : "Message"} <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          rows={5}
                          required
                          placeholder="How can we help you?"
                          value={formStates.contact.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 resize-none min-h-[120px]"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit Button */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-[11px] text-slate-400">
                    <span className="text-red-500">*</span> {isAr ? "حقول إلزامية" : "Required fields"}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#002f6c] to-blue-800 hover:to-blue-700 shadow-md hover:shadow-lg disabled:opacity-50 select-none cursor-pointer transition-all"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin" size={16} />
                        <span>{isAr ? "جاري الإرسال..." : "Sending..."}</span>
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        <span>
                          {activeTab === "student" && (isAr ? "إرسال طلب التسجيل" : "Submit Registration")}
                          {activeTab === "enquiry" && (isAr ? "إرسال الاستفسار" : "Submit Enquiry")}
                          {activeTab === "corporate" && (isAr ? "إرسال طلب التدريب" : "Submit Request")}
                          {activeTab === "teacher" && (isAr ? "تقديم طلب التوظيف" : "Submit Application")}
                          {activeTab === "placement" && (isAr ? "حجز اختبار المستوى" : "Book Placement Test")}
                          {activeTab === "study-abroad" && (isAr ? "إرسال الاهتمام" : "Submit Interest")}
                          {activeTab === "contact" && (isAr ? "إرسال الرسالة" : "Send Message")}
                        </span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
