"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import ThemeAccent from "@/components/ThemeAccent";
import {
  Award,
  Globe,
  BookOpen,
  ShieldCheck,
  Heart,
  Users,
  Sparkles,
  Target,
  Compass,
  ArrowRight,
  GraduationCap
} from "lucide-react";

// Bilingual content definitions
const content = {
  en: {
    hero: {
      tag: "Global Network · Local Heritage",
      title: "Who We Are",
      subtitle: "Building International Learning Experiences Across Saudi Arabia",
      desc1: "International House Saudi Arabia (IHSA) is part of the globally respected International House World Organization (IHWO), a worldwide network of language schools and teacher training centers known for educational excellence, innovation, and professional development.",
      desc2: "For more than three decades, IH Saudi Arabia has supported learners, professionals, educators, companies, and institutions across the Kingdom through language education, workforce development, teacher training, international qualifications, and global learning opportunities.",
      desc3: "Today, IH Saudi Arabia continues to evolve as a modern educational organization committed to empowering individuals and organizations through learning, communication, and international engagement."
    },
    story: {
      title: "Our Story",
      steps: [
        { year: "1995", title: "The Vision Begins", desc: "Our journey began in 1995 with a vision to provide internationally benchmarked language education and professional training in Saudi Arabia." },
        { year: "2001", title: "Global Affiliation", desc: "IH Saudi Arabia became an official member of the International House World Organization (IHWO), joining one of the world's most respected educational networks." },
        { year: "Growth", title: "Empowering Thousands", desc: "Since then, we have supported thousands of learners and numerous organizations through high-quality training programs, educational services, and professional development initiatives." },
        { year: "Today", title: "KSA-Wide Operations", desc: "With major branches in Riyadh, Jeddah, and the Eastern Province, we continue to build on our heritage while embracing innovation, technology, and future-focused learning solutions." }
      ]
    },
    global: {
      title: "Part of a Global Educational Network",
      desc1: "International House was founded in 1953 and has grown into one of the world's leading educational organizations.",
      desc2: "As part of this international community, IH Saudi Arabia benefits from global expertise, educational innovation, international collaboration, and a shared commitment to quality.",
      desc3: "This global connection allows us to bring international best practices to Saudi Arabia while remaining responsive to local needs and priorities.",
      numTitle: "International House By The Numbers",
      stats: [
        { num: "150+", label: "Schools Worldwide" },
        { num: "50+", label: "Countries" },
        { num: "1953", label: "Founded Globally" },
        { num: "70+", label: "Years of Excellence" },
        { num: "1000s", label: "Learners Supported" }
      ]
    },
    visMis: {
      visionTitle: "Our Vision",
      visionDesc: "To become one of the leading providers of language education, professional training, teacher development, and international learning opportunities in Saudi Arabia and the region.",
      missionTitle: "Our Mission",
      missionDesc: "To empower learners, professionals, educators, and organizations through practical, internationally aligned education and training solutions that support personal growth, workforce development, and global communication."
    },
    values: {
      title: "Our Core Values",
      items: [
        { title: "Excellence", desc: "We strive for the highest standards in teaching, learning, and professional service." },
        { title: "Professionalism", desc: "We operate with integrity, accountability, and respect." },
        { title: "Innovation", desc: "We embrace new ideas, technologies, and approaches that enhance learning outcomes." },
        { title: "Collaboration", desc: "We believe meaningful learning is built through partnership and shared success." },
        { title: "Learner-Centered", desc: "We place learners at the heart of everything we do." },
        { title: "Continuous Development", desc: "We promote lifelong learning and continuous improvement." },
        { title: "Global & Local", desc: "We combine international expertise with a deep appreciation of Saudi culture and community needs." }
      ]
    },
    future: {
      title: "Looking to the Future",
      desc1: "As Saudi Arabia continues its transformation under Vision 2030, IH Saudi Arabia remains committed to supporting human capital development through education, innovation, international collaboration, and workforce development.",
      desc2: "Our ambition is to become a leading educational hub for language learning, teacher development, international qualifications, study abroad opportunities, and cultural exchange initiatives that connect Saudi Arabia with the wider world.",
      desc3: "By combining decades of local experience with global expertise, we continue to create opportunities that prepare individuals and organizations for future success."
    }
  },
  ar: {
    hero: {
      tag: "شبكة عالمية · إرث محلي",
      title: "من نحن",
      subtitle: "بناء خبرات تعليمية دولية في جميع أنحاء المملكة العربية السعودية",
      desc1: "تعتبر معاهد الهاوس الدولي السعودية (IHSA) جزءاً من منظمة الهاوس الدولي العالمية (IHWO) المرموقة، وهي شبكة عالمية من مدارس اللغات ومراكز تدريب المعلمين المعروفة بالتميز التعليمي والابتكار والتطوير المهني.",
      desc2: "لأكثر من ثلاثة عقود، دأبت معاهد الهاوس الدولي السعودية على دعم المتعلمين والمهنيين والمعلمين والشركات والمؤسسات في جميع أنحاء المملكة من خلال تعليم اللغات وتطوير القوى العاملة وتدريب المعلمين والمؤهلات الدولية وفرص التعلم العالمية.",
      desc3: "والوقت الحالي، تواصل معاهد الهاوس الدولي السعودية تطورها كمؤسسة تعليمية حديثة ملتزمة بتمكين الأفراد والمؤسسات من خلال التعلم والتواصل والمشاركة الدولية."
    },
    story: {
      title: "قصتنا",
      steps: [
        { year: "١٩٩٥", title: "بداية الرؤية", desc: "بدأت رحلتنا في عام 1995 برؤية لتقديم تعليم لغات وتدريب مهني بمعايير دولية في المملكة العربية السعودية." },
        { year: "٢٠٠١", title: "الانتساب العالمي", desc: "أصبحت معاهد الهاوس الدولي السعودية عضواً رسمياً في منظمة الهاوس الدولي العالمية (IHWO)، لتنضم إلى واحدة من أكثر الشبكات التعليمية احتراماً في العالم." },
        { year: "النمو", title: "تمكين الآلاف", desc: "ومنذ ذلك الحين، قدمنا الدعم لآلاف المتعلمين والعديد من المؤسسات من خلال برامج تدريبية عالية الجودة وخدمات تعليمية ومبادرات تطوير مهني." },
        { year: "اليوم", title: "عمليات تغطي المملكة", desc: "مع فروعنا الرئيسية في الرياض وجدة والمنطقة الشرقية، نواصل البناء على إرثنا مع تبني الابتكار والتكنولوجيا وحلول التعلم التي تركز على المستقبل." }
      ]
    },
    global: {
      title: "جزء من شبكة تعليمية عالمية",
      desc1: "تأسست معاهد الهاوس الدولي في عام 1953 ونمت لتصبح واحدة من المؤسسات التعليمية الرائدة في العالم.",
      desc2: "كجزء من هذا المجتمع الدولي، تستفيد معاهد الهاوس الدولي السعودية من الخبرات العالمية والابتكار التعليمي والتعاون الدولي والالتزام المشترك بالجودة.",
      desc3: "يتيح لنا هذا الارتباط العالمي جلب أفضل الممارسات الدولية إلى المملكة العربية السعودية مع الاستمرار في الاستجابة للاحتياجات والأولويات المحلية.",
      numTitle: "الهاوس الدولي بالأرقام",
      stats: [
        { num: "+١٥٠", label: "مدرسة حول العالم" },
        { num: "+٥٠", label: "دولة" },
        { num: "١٩٥٣", label: "سنة التأسيس عالمياً" },
        { num: "+٧٠", label: "عاماً من التميز" },
        { num: "آلاف", label: "المتعلمين المدعومين" }
      ]
    },
    visMis: {
      visionTitle: "رؤيتنا",
      visionDesc: "أن نكون من الجهات الرائدة في تقديم تعليم اللغات، والتدريب المهني، وتطوير المعلمين، وفرص التعلم الدولية في المملكة العربية السعودية والمنطقة.",
      missionTitle: "رسالتنا",
      missionDesc: "تمكين المتعلمين والمهنيين والمعلمين والمؤسسات من خلال حلول تعليمية وتدريبية عملية ومتوافقة دولياً تدعم النمو الشخصي وتطوير القوى العاملة والتواصل العالمي."
    },
    values: {
      title: "قيمنا الأساسية",
      items: [
        { title: "التميز", desc: "نسعى لتحقيق أعلى المعايير في التدريس والتعلم والخدمة المهنية." },
        { title: "المهنية", desc: "نعمل بنزاهة ومسؤولية واحترام." },
        { title: "الابتكار", desc: "نتبنى الأفكار والتقنيات والأساليب الجديدة التي تعزز نتائج التعلم." },
        { title: "التعاون", desc: "نؤمن بأن التعلم الهادف يبنى من خلال الشراكة والنجاح المشترك." },
        { title: "التركيز على المتعلم", desc: "نضع المتعلمين في قلب كل ما نقوم به." },
        { title: "التطوير المستمر", desc: "نشجع التعلم مدى الحياة والتحسين المستمر." },
        { title: "منظور عالمي وفهم محلي", desc: "نجمع بين الخبرة الدولية والتقدير العميق للثقافة السعودية واحتياجات المجتمع." }
      ]
    },
    future: {
      title: "التطلع إلى المستقبل",
      desc1: "مع استمرار التحول في المملكة العربية السعودية في ظل رؤية 2030، تظل معاهد الهاوس الدولي السعودية ملتزمة بدعم تطوير رأس المال البشري من خلال التعليم والابتكار والتعاون الدولي وتطوير القوى العاملة.",
      desc2: "طموحنا هو أن نصبح مركزاً تعليمياً رائداً لتعلم اللغات، وتطوير المعلمين، والمؤهلات الدولية، وفرص الدراسة في الخارج، ومبادرات التبادل الثقافي التي تربط المملكة بالعالم الخارجي.",
      desc3: "من خلال الجمع بين عقود من الخبرة المحلية والخبرة العالمية، نواصل خلق الفرص التي تؤهل الأفراد والمؤسسات للنجاح في المستقبل."
    }
  }
};

const valueIcons = [
  <Award key="ex" className="w-6 h-6" />,
  <ShieldCheck key="pr" className="w-6 h-6" />,
  <Sparkles key="in" className="w-6 h-6" />,
  <Users key="co" className="w-6 h-6" />,
  <Heart key="lc" className="w-6 h-6" />,
  <BookOpen key="cd" className="w-6 h-6" />,
  <Globe key="gl" className="w-6 h-6" />,
];

const valueColors = [
  { bg: "bg-[#cf1430]/10", border: "border-[#cf1430]/30", icon: "text-[#cf1430]", cardBg: "hover:bg-[#cf1430]/5", hoverBorder: "hover:border-[#cf1430]/50 shadow-[#cf1430]/5" }, // Red
  { bg: "bg-blue-500/10", border: "border-blue-500/30", icon: "text-blue-600", cardBg: "hover:bg-blue-500/5", hoverBorder: "hover:border-blue-500/50 shadow-blue-500/5" }, // Blue
  { bg: "bg-amber-500/10", border: "border-amber-500/30", icon: "text-amber-600", cardBg: "hover:bg-amber-500/5", hoverBorder: "hover:border-amber-500/50 shadow-amber-500/5" }, // Yellow
  { bg: "bg-teal-500/10", border: "border-teal-500/30", icon: "text-teal-600", cardBg: "hover:bg-teal-500/5", hoverBorder: "hover:border-teal-500/50 shadow-slate-900/5" }, // Green
  { bg: "bg-rose-500/10", border: "border-rose-500/30", icon: "text-rose-600", cardBg: "hover:bg-rose-500/5", hoverBorder: "hover:border-rose-500/50 shadow-rose-500/5" }, // Rose Red
  { bg: "bg-indigo-500/10", border: "border-indigo-500/30", icon: "text-indigo-600", cardBg: "hover:bg-indigo-500/5", hoverBorder: "hover:border-indigo-500/50 shadow-indigo-500/5" }, // Indigo
  { bg: "bg-purple-500/10", border: "border-purple-500/30", icon: "text-purple-600", cardBg: "hover:bg-purple-500/5", hoverBorder: "hover:border-purple-500/50 shadow-purple-500/5" }, // Purple
];

const statThemes = [
  { border: "border-[#cf1430]/20 hover:border-[#cf1430]/50", numColor: "text-[#cf1430]", glow: "group-hover:bg-[#cf1430]/20", hoverShadow: "hover:shadow-[0_0_20px_rgba(207,20,48,0.15)]" }, // Red
  { border: "border-[#10b981]/20 hover:border-[#10b981]/50", numColor: "text-[#10b981]", glow: "group-hover:bg-[#10b981]/20", hoverShadow: "hover:shadow-[0_0_20px_rgba(15,23,42,0.15)]" }, // Green
  { border: "border-[#f59e0b]/20 hover:border-[#f59e0b]/50", numColor: "text-[#f59e0b]", glow: "group-hover:bg-[#f59e0b]/20", hoverShadow: "hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]" }, // Yellow
  { border: "border-[#cf1430]/20 hover:border-[#cf1430]/50", numColor: "text-[#cf1430]", glow: "group-hover:bg-[#cf1430]/20", hoverShadow: "hover:shadow-[0_0_20px_rgba(207,20,48,0.15)]" }, // Red
  { border: "border-[#10b981]/20 hover:border-[#10b981]/50", numColor: "text-[#10b981]", glow: "group-hover:bg-[#10b981]/20", hoverShadow: "hover:shadow-[0_0_20px_rgba(15,23,42,0.15)]" }, // Green
];

export default function WhoWeArePage() {
  const { lang } = useLanguage();
  const isRtl = lang === "ar";
  const t = content[lang];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  // Thematic colors and images for the timeline cards
  const stepThemes = [
    {
      image: "/riyadh_hero.png",
      themeColor: "#cf1430",
      accentBg: "bg-[#cf1430]/10",
      accentText: "text-[#cf1430]",
      borderAccent: "border-s-[#cf1430]",
      borderAccentBottom: "border-b-[#cf1430]",
      shadowHover: "hover:shadow-[#cf1430]/10",
      gradientText: "from-[#cf1430] to-[#cf1430]/40",
      btnGradient: "from-[#cf1430] to-[#e03a4f] shadow-[#cf1430]/20",
      icon: <Compass className="w-6 h-6" />,
      badgeLabel: { en: "FOUNDED", ar: "التأسيس" }
    },
    {
      image: "/values_mission.png",
      themeColor: "#10b981",
      accentBg: "bg-[#10b981]/10",
      accentText: "text-[#10b981]",
      borderAccent: "border-s-[#10b981]",
      borderAccentBottom: "border-b-[#10b981]",
      shadowHover: "hover:shadow-slate-900/10",
      gradientText: "from-[#10b981] to-[#10b981]/40",
      btnGradient: "from-[#10b981] to-[#059669] shadow-slate-900/20",
      icon: <Globe className="w-6 h-6" />,
      badgeLabel: { en: "AFFILIATION", ar: "الانتساب" }
    },
    {
      image: "/learn_face_to_face.png",
      themeColor: "#f59e0b",
      accentBg: "bg-[#f59e0b]/10",
      accentText: "text-[#f59e0b]",
      borderAccent: "border-s-[#f59e0b]",
      borderAccentBottom: "border-b-[#f59e0b]",
      shadowHover: "hover:shadow-[#f59e0b]/10",
      gradientText: "from-[#f59e0b] to-[#f59e0b]/40",
      btnGradient: "from-[#f59e0b] to-[#d97706] shadow-[#f59e0b]/20",
      icon: <Users className="w-6 h-6" />,
      badgeLabel: { en: "EXPANSION", ar: "التوسع" }
    },
    {
      image: "/dammam_hero.png",
      themeColor: "#002f6c",
      accentBg: "bg-[#002f6c]/10",
      accentText: "text-[#002f6c]",
      borderAccent: "border-s-[#002f6c]",
      borderAccentBottom: "border-b-[#002f6c]",
      shadowHover: "hover:shadow-[#002f6c]/10",
      gradientText: "from-[#002f6c] to-[#002f6c]/40",
      btnGradient: "from-[#002f6c] to-[#001a3f] shadow-[#002f6c]/20",
      icon: <Sparkles className="w-6 h-6" />,
      badgeLabel: { en: "CURRENT", ar: "الحاضر" }
    }
  ];

  return (
    <div className={`pt-24 lg:pt-32 overflow-hidden bg-white font-['Inter',_sans-serif] ${isRtl ? "text-right" : "text-left"}`}>
      <section className="relative pb-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Text Info */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="lg:col-span-7 space-y-6"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#002F6C]/10 text-[#002F6C]">
                <GraduationCap size={13} />
                {t.hero.tag}
              </span>
              <h1 className="text-4xl sm:text-5xl font-black text-[#002F6C] font-['Montserrat',_sans-serif] leading-tight">
                {t.hero.title}
              </h1>
              <p className="text-xl font-bold text-[#cf1430] leading-relaxed">
                {t.hero.subtitle}
              </p>
              <div className="space-y-4 text-slate-600 font-light text-base sm:text-lg leading-relaxed">
                <p>{t.hero.desc1}</p>
                <p>{t.hero.desc2}</p>
                <p>{t.hero.desc3}</p>
              </div>
            </motion.div>

            {/* Right Column: Premium Interactive Classroom Graphic */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="lg:col-span-5 relative"
            >
              <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-50 group">
                <Image
                  src="/about_classroom.png"
                  alt="IH Classroom"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3">
                  <div className="bg-[#cf1430] p-2.5 rounded-2xl text-white shadow-lg shrink-0">
                    <Award size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-white/75 font-semibold uppercase tracking-wider">IHWO Certified</p>
                    <p className="text-sm font-bold text-white">Quality Assured Classrooms</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative Glow */}
              <div className="absolute -z-10 -bottom-8 -right-8 w-64 h-64 bg-[#002F6C]/5 rounded-full blur-3xl pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: OUR STORY TIMELINE ─── */}
      <section id="our-story" className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Subtle background glows */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#cf1430]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#002f6c]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-black text-[#002F6C] font-['Montserrat',_sans-serif] mb-4">
              {t.story.title}
            </h2>
            <div className="w-12 h-1 bg-[#cf1430] mx-auto rounded-full" />
          </div>

          {/* Overlapping Card Journey Stack */}
          <div className="space-y-16 md:space-y-24">
            {t.story.steps.map((step, i) => {
              const isEven = i % 2 === 0;
              const theme = stepThemes[i % stepThemes.length];
              return (
                <motion.div
                  key={step.year}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeInUp}
                  className={`relative flex flex-col md:items-center ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } max-w-5xl mx-auto group`}
                >
                  
                  {/* Overlapping Image Card */}
                  <div 
                    className={`relative w-full md:w-[350px] h-[240px] md:h-[350px] rounded-[2rem] overflow-hidden shadow-2xl z-20 shrink-0 transition-transform duration-500 hover:scale-102 ${
                      isEven ? "md:-me-16" : "md:-ms-16"
                    }`}
                  >
                    <Image
                      src={theme.image}
                      alt={step.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
                  </div>

                  {/* Main content card (Overlapped) */}
                  <div 
                    className={`bg-white rounded-[2rem] p-6 sm:p-10 pt-12 md:pt-8 flex-1 shadow-xl border border-slate-100/50 z-10 text-start min-h-[300px] flex flex-col justify-center -mt-10 md:mt-0 relative ${
                      isEven ? "md:ps-24 md:pe-16" : "md:pe-24 md:ps-16"
                    }`}
                  >
                    {/* Date / Milestone status row */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs font-semibold ${theme.accentText} tracking-wider font-['Montserrat',_sans-serif]`}>
                        {step.year} — {theme.badgeLabel[lang]}
                      </span>
                    </div>

                    {/* Milestone title */}
                    <h3 className="text-2xl sm:text-3xl font-black text-[#002f6c] font-['Montserrat',_sans-serif] mb-4 leading-tight transition-colors duration-300 group-hover:text-[#cf1430]">
                      {step.title}
                    </h3>

                    {/* Milestone Description */}
                    <p className="text-slate-500 font-light text-sm sm:text-base leading-relaxed mb-8">
                      {step.desc}
                    </p>

                    {/* Styled Gradient Pill Button */}
                    <div className="flex">
                      <button className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r ${theme.btnGradient} transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-lg`}>
                        {lang === "ar" ? "اقرأ المزيد" : "Learn More"}
                        <ArrowRight size={13} className="rtl:rotate-180" />
                      </button>
                    </div>

                    {/* Vertical Progress Indicators (Matches mockup design) */}
                    <div className={`absolute ${isEven ? "end-6" : "start-6"} top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-2`}>
                      {t.story.steps.map((_, idx) => {
                        const isActive = idx === i;
                        return (
                          <div 
                            key={idx}
                            className="transition-all duration-300 rounded-full"
                            style={{ 
                              width: "6px", 
                              height: isActive ? "24px" : "6px", 
                              backgroundColor: isActive ? theme.themeColor : "#cbd5e1" 
                            }}
                          />
                        );
                      })}
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: GLOBAL NETWORK & STATS ─── */}
      <section id="global-network" className="py-24 bg-gradient-to-br from-[#001a3f] to-[#002f6c] text-white relative overflow-hidden">
        {/* Abstract World Map Graphic overlay */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "24px 24px"
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Stats Left */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="lg:col-span-5 space-y-6 text-start"
            >
              <h2 className="text-3xl sm:text-4xl font-black font-['Montserrat',_sans-serif] leading-tight">
                {t.global.title}
              </h2>
              <div className="w-12 h-1 bg-[#cf1430] rounded-full" />
              <div className="space-y-4 text-slate-300 font-light text-base leading-relaxed">
                <p>{t.global.desc1}</p>
                <p>{t.global.desc2}</p>
                <p>{t.global.desc3}</p>
              </div>
            </motion.div>

            {/* Stats Grid Right */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="lg:col-span-7"
            >
              <h3 className="text-lg font-extrabold uppercase tracking-widest text-[#cf1430] mb-8 text-start font-['Montserrat',_sans-serif]">
                {t.global.numTitle}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {t.global.stats.map((stat, i) => {
                  const theme = statThemes[i % statThemes.length];
                  return (
                    <motion.div
                      key={stat.label}
                      variants={fadeInUp}
                      whileHover={{ y: -8, scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 350, damping: 20 }}
                      className={`bg-white/5 backdrop-blur-md border rounded-2xl p-6 text-start relative group transition-all duration-300 ${theme.border} ${theme.hoverShadow}`}
                    >
                      <div className={`text-3xl sm:text-4xl font-black tracking-tight ${theme.numColor}`}>
                        {stat.num}
                      </div>
                      <div className="text-xs sm:text-sm font-light text-slate-300 leading-snug mt-2">
                        {stat.label}
                      </div>
                      {/* Glowing highlight */}
                      <div className={`absolute top-0 right-0 w-8 h-8 bg-white/5 rounded-bl-full pointer-events-none transition-all ${theme.glow}`} />
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: VISION & MISSION ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Vision */}
            <motion.div
              id="our-vision"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 350, damping: 22 }}
              className="bg-amber-50/60 border border-amber-500/20 border-l-4 border-l-amber-500 rounded-3xl p-8 lg:p-12 relative overflow-hidden group shadow-sm hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 text-start"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" />
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 flex items-center justify-center text-amber-700 mb-6 group-hover:scale-110 transition-transform">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-amber-700 font-['Montserrat',_sans-serif] mb-4">
                {t.visMis.visionTitle}
              </h3>
              <p className="text-slate-700 font-light text-base sm:text-lg leading-relaxed">
                {t.visMis.visionDesc}
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              id="our-mission"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 350, damping: 22 }}
              className="bg-red-50/60 border border-[#cf1430]/20 border-l-4 border-l-[#cf1430] rounded-3xl p-8 lg:p-12 relative overflow-hidden group shadow-sm hover:shadow-xl hover:shadow-[#cf1430]/10 transition-all duration-300 text-start"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#cf1430]/10 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" />
              <div className="w-12 h-12 rounded-2xl bg-[#cf1430]/20 flex items-center justify-center text-[#cf1430] mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-[#cf1430] font-['Montserrat',_sans-serif] mb-4">
                {t.visMis.missionTitle}
              </h3>
              <p className="text-slate-700 font-light text-base sm:text-lg leading-relaxed">
                {t.visMis.missionDesc}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: OUR VALUES ─── */}
      <section id="our-values" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-[#002F6C] font-['Montserrat',_sans-serif] mb-4">
              {t.values.title}
            </h2>
            <div className="w-12 h-1 bg-[#cf1430] mx-auto rounded-full" />
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {t.values.items.map((val, i) => {
              const iconIdx = i % valueIcons.length;
              const cardType = i % 4;
              let bgClass = "";
              let titleClass = "";
              let descClass = "";
              let iconClass = "";

              if (cardType === 0) {
                // White
                bgClass = "bg-white border border-slate-200 text-slate-800 hover:border-blue-500/30";
                titleClass = "text-[#002F6C]";
                descClass = "text-slate-500";
                iconClass = "bg-blue-50 border border-blue-100 text-[#002f6c] group-hover:bg-[#002f6c] group-hover:text-white";
              } else if (cardType === 1) {
                // Green
                bgClass = "bg-[#00d084] text-white border-transparent";
                titleClass = "text-white";
                descClass = "text-white/90";
                iconClass = "bg-white/20 border border-white/20 text-white group-hover:bg-white group-hover:text-[#00d084]";
              } else if (cardType === 2) {
                // Yellow
                bgClass = "bg-[#fcb900] text-white border-transparent";
                titleClass = "text-white";
                descClass = "text-white/90";
                iconClass = "bg-white/20 border border-white/20 text-white group-hover:bg-white group-hover:text-[#fcb900]";
              } else {
                // Red
                bgClass = "bg-[#cf1430] text-white border-transparent";
                titleClass = "text-white";
                descClass = "text-white/90";
                iconClass = "bg-white/20 border border-white/20 text-white group-hover:bg-white group-hover:text-[#cf1430]";
              }

              return (
                <motion.div
                  key={val.title}
                  variants={fadeInUp}
                  whileHover={{ y: -8, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 350, damping: 22 }}
                  className={`rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 text-start flex flex-col justify-between group ${bgClass}`}
                >
                  <div>
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-5 transition-all ${iconClass}`}>
                      {valueIcons[iconIdx]}
                    </div>
                    <h3 className={`text-lg font-bold mb-2 font-['Montserrat',_sans-serif] ${titleClass}`}>
                      {val.title}
                    </h3>
                    <p className={`text-sm font-light leading-relaxed ${descClass}`}>
                      {val.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 6: FUTURE-LOOKING ACCENT BLOCK ─── */}
      <section id="looking-ahead" className="py-24 bg-[#001a3f] relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-[-50%] left-[-20%] w-[60%] h-[120%] bg-blue-500/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-[-50%] right-[-20%] w-[60%] h-[120%] bg-[#cf1430]/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px] lg:h-[600px] w-full"
            >
              <Image
                src="/riyadh_bg.png"
                alt="Looking to the Future"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Gradient overlay for blending */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#001a3f]/80 to-transparent" />
            </motion.div>

            {/* Text Column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 mb-2">
                <ThemeAccent height="h-2" pills />
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Montserrat',_sans-serif]">
                {t.future.title}
              </h2>
              
              <div className="space-y-6 text-slate-300 font-light text-base sm:text-lg leading-relaxed border-l-2 border-[#cf1430]/50 pl-6">
                <p>{t.future.desc1}</p>
                <p>{t.future.desc2}</p>
                <p>{t.future.desc3}</p>
              </div>

              <div className="pt-4">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-[#cf1430] hover:bg-[#a61026] text-white rounded-full px-8 py-4 text-sm font-semibold select-none shadow-lg shadow-[#cf1430]/20 transition-colors"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse shrink-0" />
                  <span>Supporting Saudi Vision 2030</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
