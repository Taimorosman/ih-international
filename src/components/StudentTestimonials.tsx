"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Quote,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Building2,
  Award,
  Sparkles,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

/* ═══════════════════════════════════════════════════════════════════════
   TESTIMONIALS DATA
   ═══════════════════════════════════════════════════════════════════════ */

interface Testimonial {
  id: string;
  category: "ielts" | "general" | "corporate" | "teacher";
  name: { en: string; ar: string };
  role: { en: string; ar: string };
  branch: { en: string; ar: string };
  scoreBadge?: { en: string; ar: string };
  rating: number;
  quote: { en: string; ar: string };
  avatarBg: string;
  avatarInitials: string;
  avatarImg?: string;
  accentColor: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    category: "ielts",
    name: { en: "Fahad Al-Otaibi", ar: "فهد العتيبي" },
    role: { en: "IELTS Preparation Graduate", ar: "خريج برنامج التحضير لاختبار آيلتس" },
    branch: { en: "Riyadh • Al Olaya", ar: "الرياض • حي العليا" },
    scoreBadge: { en: "Achieved IELTS Band 8.0", ar: "حقق درجة ٨٫٠ في الآيلتس" },
    rating: 5,
    quote: {
      en: "Studying at International House Riyadh was the turning point in my academic career. The mock exams, exam strategies, and intensive feedback from native-speaking instructors allowed me to jump from Band 6.0 to 8.0 in just 8 weeks! Accepted into my dream Master's program in the UK.",
      ar: "كانت دراستي في إنترناشونال هاوس الرياض نقطة تحول حقيقية في مسيرتي الأكاديمية. الاختبارات التجريبية والتغذية الراجعة المكثفة من الأساتذة مكنتني من القفز من درجة ٦٫٠ إلى ٨٫٠ خلال ٨ أسابيع فقط! تم قبولي ببرنامج الماجستير في بريطانيا.",
    },
    avatarBg: "from-[#002f6c] to-blue-700",
    avatarInitials: "FA",
    avatarImg: "/riyadh_student.png",
    accentColor: "#fccb56",
  },
  {
    id: "2",
    category: "corporate",
    name: { en: "Eng. Mohammed Al-Shehri", ar: "م. محمد الشهري" },
    role: { en: "Senior Project Engineer", ar: "مهندس مشاريع أول" },
    branch: { en: "Dammam • Al Sughaiyer Tower", ar: "الدمام • برج الصغير" },
    scoreBadge: { en: "Technical & Executive ESP", ar: "الإنجليزية التخصصية والتنفيذية" },
    rating: 5,
    quote: {
      en: "Our company enrolled 45 engineers in IH Saudi Arabia's Technical English program. The curriculum was customized directly around technical writing, bidding meetings, and global vendor negotiations. The confidence and presentation skills our team gained are remarkable.",
      ar: "قامت شركتنا بتسجيل ٤٥ مهندساً في برنامج الإنجليزية التقنية مع الهاوس الدولي السعودية. المنهج صُمم خصيصاً ليغطي المراسلات التقنية والمفاوضات الدولية. الثقة والاحترافية التي اكتسبها فريقنا كانت مبهرة جداً.",
    },
    avatarBg: "from-[#9d2b67] to-pink-700",
    avatarInitials: "MS",
    avatarImg: "/dammam_student.png",
    accentColor: "#ff8b3d",
  },
  {
    id: "3",
    category: "general",
    name: { en: "Sarah Al-Ghamdi", ar: "سارة الغامدي" },
    role: { en: "General English Student (C1)", ar: "طالبة برنامج اللغة الإنجليزية العامة (C1)" },
    branch: { en: "Jeddah • Al Badriah Towers", ar: "جدة • أبراج البدرية" },
    scoreBadge: { en: "Advanced Fluency Certificate", ar: "شهادة الطلاقة المتقدمة" },
    rating: 5,
    quote: {
      en: "Before joining IH Jeddah, I was hesitant to speak English in meetings and social settings. The interactive teaching approach, modern language labs, and supportive community helped me overcome the barrier within the first term. I now conduct all my international client calls smoothly!",
      ar: "قبل انضمامي لفرع جدة، كنت أتردد كثيراً في التحدث بالإنجليزية خلال الاجتماعات. أسلوب التدريس التفاعلي والمجتمع التعليمي المحفز كسر حاجز الخوف لدي من المستوى الأول. أصبحت الآن أدير كافة مكالماتي مع العملاء الدوليين بطلاقة!",
    },
    avatarBg: "from-[#28ae62] to-emerald-700",
    avatarInitials: "SG",
    avatarImg: "/jeddah_student.png",
    accentColor: "#28ae62",
  },
  {
    id: "4",
    category: "teacher",
    name: { en: "Dr. Youssef Al-Zahrani", ar: "د. يوسف الزهراني" },
    role: { en: "Cambridge CELTA Certified Instructor", ar: "حاصل على شهادة CELTA من كامبريدج" },
    branch: { en: "Riyadh • Teacher Training Hub", ar: "الرياض • مركز تأهيل المعلمين" },
    scoreBadge: { en: "Cambridge Assessment English", ar: "اعتماد كامبريدج الدولي" },
    rating: 5,
    quote: {
      en: "Completing the Cambridge CELTA at IH Saudi Arabia was intense, rigorous, and tremendously rewarding. The tutors are internationally accredited trainers with decades of global experience. It is the gold standard for anyone serious about teaching English professionally.",
      ar: "كانت تجربة الحصول على شهادة سيلتا من كامبريدج في معهد إي إتش تجربة ثرية وعالية الاحترافية. المدربون معتمدون دولياً ويمتلكون خبرات عالمية. إنه المعيار الذهبي لأي معلم يطمح للتدريس باحترافية.",
    },
    avatarBg: "from-[#3f3dbe] to-indigo-700",
    avatarInitials: "YZ",
    accentColor: "#fccb56",
  },
  {
    id: "5",
    category: "general",
    name: { en: "Noura Al-Harbi", ar: "نورة الحربي" },
    role: { en: "Young Learners Parent", ar: "ولي أمر - برامج الصغار والشباب" },
    branch: { en: "Riyadh • Virtual & On-Campus", ar: "الرياض • حضوري وافتراضي" },
    scoreBadge: { en: "Young Learners Excellence", ar: "تميز برامج الصغار" },
    rating: 5,
    quote: {
      en: "My children enrolled in the Young Learners summer program. I was amazed by how naturally they picked up British and international pronunciation through games, group presentations, and storytelling. They look forward to every single session!",
      ar: "سجلت أبنائي في برنامج الصغار الصيفي. أدهشني اكتسابهم السريع للنطق الصحيح والمفردات من خلال الأنشطة التفاعلية والقصص. أصبحوا ينتظرون موعد الدرس بكل شغف!",
    },
    avatarBg: "from-[#cf1430] to-rose-700",
    avatarInitials: "NH",
    accentColor: "#cf1430",
  },
  {
    id: "6",
    category: "corporate",
    name: { en: "Rakan Al-Dossary", ar: "راكان الدوسري" },
    role: { en: "HR & Talent Development Director", ar: "مدير تطوير المواهب والموارد البشرية" },
    branch: { en: "Kingdom-Wide Solutions", ar: "حلول مؤسسية على مستوى المملكة" },
    scoreBadge: { en: "Enterprise Partnership", ar: "شراكة مؤسسية معتمدة" },
    rating: 5,
    quote: {
      en: "IH Saudi Arabia demonstrated flexibility and deep understanding of the local market requirements aligned with Vision 2030. They provided both in-person workshops and interactive online coaching with detailed tracking and attendance metrics. Highly recommended partner.",
      ar: "أظهر معهد إنترناشونال هاوس مرونة وفهماً عميقاً لاحتياجات سوق العمل بما يتماشى مع رؤية ٢٠٣٠. قدموا ورش عمل حضورية وجلسات تفاعلية مع تقارير أداء دقيقة لكل موظف. شريك تعليمي مميز بكل المقاييس.",
    },
    avatarBg: "from-[#002f6c] to-slate-800",
    avatarInitials: "RD",
    accentColor: "#fccb56",
  },
];

export default function StudentTestimonials() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";

  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState<number>(0);

  const categories = [
    { id: "all", label: isAr ? "جميع الآراء" : "All Reviews" },
    { id: "ielts", label: isAr ? "آيلتس والاختبارات" : "IELTS & Exams" },
    { id: "general", label: isAr ? "اللغة الإنجليزية العامة" : "General English" },
    { id: "corporate", label: isAr ? "تدريب الشركات" : "Corporate Training" },
    { id: "teacher", label: isAr ? "تأهيل المعلمين (CELTA)" : "Teacher Training" },
  ];

  const filteredTestimonials =
    activeFilter === "all"
      ? testimonials
      : testimonials.filter((t) => t.category === activeFilter);

  // Pagination for grid display
  const itemsPerPage = 3;
  const totalPages = Math.ceil(filteredTestimonials.length / itemsPerPage);
  const displayedTestimonials = filteredTestimonials.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId);
    setCurrentPage(0);
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#f8f9fc] via-white to-slate-50 relative overflow-hidden font-['Inter',_sans-serif]">
      {/* ─── Decorative Brand Glow Background ─── */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#002f6c]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#fccb56]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* ─── Section Header ─── */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase text-white bg-[#002f6c] shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#fccb56]" />
            <span>{isAr ? "آراء وقصص نجاح طلابنا" : "STUDENT SUCCESS STORIES"}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#002F6C] font-['Montserrat',_sans-serif] tracking-tight leading-tight"
          >
            {isAr ? "ماذا يقول طلابنا وشركاؤنا؟" : "What Our Students & Partners Say"}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-slate-600 font-light text-base sm:text-lg leading-relaxed"
          >
            {isAr
              ? "تجارب حقيقية وقصص نجاح من طلاب ومهنيين حققوا أهدافهم اللغوية والأكاديمية مع إنترناشونال هاوس السعودية."
              : "Real reviews and inspiring journeys from learners, professionals, and corporate leaders who achieved their goals with IH Saudi Arabia."}
          </motion.p>
        </div>

        {/* ─── Highlights Stats Strip ─── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 mb-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x rtl:md:divide-x-reverse divide-slate-100"
        >
          <div className="space-y-1">
            <div className="flex items-center justify-center gap-1 text-2xl sm:text-3xl font-black text-[#002F6C]">
              <span>4.9</span>
              <div className="flex text-[#f59e0b]">
                <Star className="w-5 h-5 fill-current" />
              </div>
            </div>
            <p className="text-xs text-slate-500 font-medium">
              {isAr ? "متوسط تقييم الطلاب" : "Average Student Rating"}
            </p>
          </div>

          <div className="space-y-1 pt-4 md:pt-0">
            <div className="text-2xl sm:text-3xl font-black text-[#cf1430]">
              98%
            </div>
            <p className="text-xs text-slate-500 font-medium">
              {isAr ? "نسبة الرضا عن المناهج" : "Satisfaction Rate"}
            </p>
          </div>

          <div className="space-y-1 pt-4 md:pt-0">
            <div className="text-2xl sm:text-3xl font-black text-[#28ae62]">
              15,000+
            </div>
            <p className="text-xs text-slate-500 font-medium">
              {isAr ? "طالب ومتدرب في المملكة" : "Learners Supported in KSA"}
            </p>
          </div>

          <div className="space-y-1 pt-4 md:pt-0">
            <div className="text-2xl sm:text-3xl font-black text-[#3f3dbe]">
              94%
            </div>
            <p className="text-xs text-slate-500 font-medium">
              {isAr ? "نسبة اجتياز الاختبارات" : "Exam First-Pass Rate"}
            </p>
          </div>
        </motion.div>

        {/* ─── Category Filter Tabs ─── */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => {
            const isActive = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleFilterChange(cat.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#002F6C] text-white shadow-md shadow-blue-900/20 scale-[1.02]"
                    : "bg-white text-slate-600 hover:text-[#002F6C] hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* ─── Testimonials Cards Grid ─── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter + "-" + currentPage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {displayedTestimonials.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl p-7 flex flex-col justify-between relative group overflow-hidden"
              >
                {/* Top Colored Accent Stripe */}
                <div
                  className="absolute top-0 left-0 right-0 h-1.5 transition-all duration-300 group-hover:h-2"
                  style={{ backgroundColor: item.accentColor }}
                />

                {/* Card Top: Stars & Quote Icon */}
                <div>
                  <div className="flex items-center justify-between mb-5 pt-1">
                    <div className="flex items-center gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]"
                        />
                      ))}
                    </div>
                    <div className="w-9 h-9 rounded-2xl bg-blue-50/70 border border-blue-100/60 flex items-center justify-center text-[#002F6C]">
                      <Quote className="w-4 h-4 fill-current opacity-80" />
                    </div>
                  </div>

                  {/* Score / Highlight Badge if available */}
                  {item.scoreBadge && (
                    <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-[11px] font-bold text-[#002F6C] bg-blue-50 border border-blue-100/80">
                      <Award className="w-3.5 h-3.5 text-[#cf1430]" />
                      <span>{item.scoreBadge[lang]}</span>
                    </div>
                  )}

                  {/* Testimonial Quote Text */}
                  <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed mb-6 italic">
                    &ldquo;{item.quote[lang]}&rdquo;
                  </p>
                </div>

                {/* Card Bottom: Author Info */}
                <div className="pt-5 border-t border-slate-100 flex items-center gap-3.5">
                  {/* Avatar */}
                  <div className="relative w-12 h-12 rounded-2xl overflow-hidden shrink-0 shadow-inner border border-slate-200">
                    {item.avatarImg ? (
                      <Image
                        src={item.avatarImg}
                        alt={item.name[lang]}
                        fill
                        className="object-cover object-top"
                      />
                    ) : (
                      <div
                        className={`w-full h-full bg-gradient-to-br ${item.avatarBg} flex items-center justify-center text-white font-black text-sm tracking-wider`}
                      >
                        {item.avatarInitials}
                      </div>
                    )}
                  </div>

                  {/* Name and Meta */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-bold text-[#002F6C] text-sm truncate">
                        {item.name[lang]}
                      </h4>
                      <span title="Verified Learner">
                        <CheckCircle2
                          className="w-3.5 h-3.5 text-blue-600 shrink-0"
                        />
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 font-normal truncate">
                      {item.role[lang]}
                    </p>
                    <div className="flex items-center gap-1 text-[11px] text-slate-400 mt-0.5">
                      <MapPin className="w-3 h-3 text-[#cf1430]" />
                      <span className="truncate">{item.branch[lang]}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ─── Slider Controls & Pagination ─── */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={handlePrevPage}
              className="w-11 h-11 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center text-[#002F6C] hover:bg-[#002F6C] hover:text-white hover:border-[#002F6C] transition-all duration-200 cursor-pointer"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-5 h-5 rtl:rotate-180" />
            </button>

            <div className="flex items-center gap-2">
              {[...Array(totalPages)].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentPage === idx
                      ? "w-8 bg-[#002F6C]"
                      : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to page ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNextPage}
              className="w-11 h-11 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center text-[#002F6C] hover:bg-[#002F6C] hover:text-white hover:border-[#002F6C] transition-all duration-200 cursor-pointer"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-5 h-5 rtl:rotate-180" />
            </button>
          </div>
        )}

        {/* ─── Bottom CTA Box ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-[#001a3f] via-[#002f6c] to-[#001a3f] rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden border border-white/10"
        >
          {/* Subtle background pattern */}
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#fccb56]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="space-y-2 text-center md:text-start relative z-10">
            <h3 className="text-xl sm:text-2xl font-black font-['Montserrat',_sans-serif]">
              {isAr
                ? "هل أنت مستعد لبدء قصة نجاحك معنا؟"
                : "Ready to Start Your Own Success Story?"}
            </h3>
            <p className="text-white/80 text-xs sm:text-sm max-w-xl font-light">
              {isAr
                ? "احجز اختبار تحديد المستوى اليوم ودع مستشارينا الأكاديميين يرسمون لك المسار الأمثل."
                : "Book your placement test today and let our academic advisors design the right learning path for you."}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0 relative z-10">
            <Link
              href="/register?form=student"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold bg-[#fccb56] text-[#002f6c] hover:bg-[#ff8b3d] hover:text-white transition-all duration-300 shadow-md"
            >
              <span>{isAr ? "سجل الآن وابدأ" : "Enrol Today"}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Link>

            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md transition-all duration-300"
            >
              <span>{isAr ? "شاركنا رأيك" : "Share Feedback"}</span>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
