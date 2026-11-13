"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import ThemeAccent from "@/components/ThemeAccent";
import {
  BookOpen,
  Briefcase,
  Wrench,
  GraduationCap,
  Sparkles,
  Laptop,
  UserCheck,
  ClipboardCheck,
  Check,
  ArrowRight,
  ChevronRight,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Globe,
  Compass,
  Languages
} from "lucide-react";

// Bilingual content definitions
const content = {
  en: {
    hero: {
      tag: "English Language Learning for Every Stage",
      title: "Our English Courses",
      subtitle: "At International House Saudi Arabia, we offer a comprehensive range of English language programs designed to support learners of different ages, abilities, and goals.",
      desc: "Whether you are learning English for education, career advancement, professional development, international examinations, or personal growth, our programs provide practical communication skills, structured progression, and internationally aligned learning outcomes.",
      placementNotice: "All learners begin with a placement assessment to ensure they are enrolled in the most suitable program for their level and objectives."
    },
    sections: {
      general: {
        id: "general-english",
        title: "General English",
        subtitle: "Build Confidence in Everyday Communication",
        desc: "Our General English programs are designed to develop the four essential language skills: speaking, listening, reading, and writing. Through interactive lessons and practical communication activities, learners gain the confidence and fluency needed for real-life situations, academic study, and professional environments.",
        suitableTitle: "Suitable For",
        suitableItems: ["Adults", "University students", "Professionals", "Individual learners"],
        levelsTitle: "Available Levels",
        levelsItems: ["Beginner (A1)", "Elementary (A2)", "Pre-Intermediate (B1)", "Intermediate (B1-B2)", "Upper Intermediate (B2)", "Advanced (C1)"],
        cta: "Enquire Now"
      },
      business: {
        id: "business-english",
        title: "Business English",
        subtitle: "Communicate Effectively in the Workplace",
        desc: "Business English programs focus on the language skills required for professional success in today's global workplace. Learners develop practical communication skills for meetings, presentations, negotiations, emails, reports, and workplace interactions.",
        focusTitle: "Areas of Focus",
        focusItems: ["Business Communication", "Email Writing", "Presentations", "Meetings", "Negotiations", "Professional Writing"],
        cta: "Enquire Now"
      },
      technical: {
        id: "technical-english",
        title: "Technical & Professional English",
        subtitle: "Language Solutions for Industry and Specialized Sectors",
        desc: "IH Saudi Arabia offers industry-focused English programs designed to support employees working in technical and professional environments. Programs may be customized to suit specific sectors and workplace requirements.",
        focusTitle: "Specialized Training Areas",
        focusItems: [
          "Technical English",
          "English for Engineers",
          "English for Oil & Gas",
          "English for Logistics",
          "English for Hospitality & Tourism",
          "English for Healthcare Professionals",
          "English for Customer Service"
        ],
        cta: "Request a Corporate Proposal"
      },
      exams: {
        id: "exam-prep",
        title: "International Examination Preparation",
        subtitle: "Prepare for Globally Recognized Qualifications",
        desc: "Our examination preparation programs help learners achieve the language proficiency required for academic, professional, and international opportunities. Our experienced instructors provide structured preparation, practice assessments, and examination strategies to help learners perform confidently.",
        focusTitle: "Preparation Courses Include",
        focusItems: ["IELTS Academic & General", "LanguageCert Qualifications", "Cambridge English Qualifications", "Pearson English Qualifications (PTE)"],
        cta: "Book Prep Course"
      },
      young: {
        id: "young-learners",
        title: "Young Learners Programs",
        subtitle: "Building Strong Foundations for Future Success",
        desc: "Our Young Learners programs are designed to help children and teenagers develop confidence, communication skills, and a positive attitude toward learning English. Programs combine engaging activities, practical communication, and structured language development within a supportive learning environment.",
        suitableTitle: "Suitable For",
        suitableItems: ["School Students", "Teenagers", "Academic Support Programs"],
        levelsTitle: "Focus Areas",
        levelsItems: ["Early Literacy", "Confidence Building", "Interactive Speaking", "School Curriculum Support"],
        cta: "Enquire for Kids"
      },
      online: {
        id: "online-hybrid",
        title: "Online & Hybrid Learning",
        subtitle: "Flexible Learning Without Boundaries",
        desc: "IH Saudi Arabia offers flexible learning solutions that allow learners to access quality education wherever they are. Our online and hybrid programs provide the same commitment to quality, support, and learning outcomes as our classroom-based courses.",
        focusTitle: "Flexible Options",
        focusItems: ["Face-to-Face Classes", "Live Online Classes", "Hybrid Learning Programs", "Private Tuition", "Group Courses"],
        cta: "Learn More Online"
      },
      private: {
        id: "private-tuition",
        title: "Private Tuition & Executive Coaching",
        subtitle: "Personalized Learning for Individual Goals",
        desc: "For learners seeking customized support, IH Saudi Arabia offers one-to-one and small-group training designed around individual needs and objectives. These programs provide maximum flexibility and personalized attention for faster progress.",
        focusTitle: "Available Focus Areas",
        focusItems: ["General English Custom", "Business English Custom", "Targeted Exam Preparation", "Executive Coaching", "Professional Communication Skills"],
        cta: "Book Executive Consultation"
      },
      guidance: {
        id: "guidance",
        title: "Placement Testing & Academic Guidance",
        subtitle: "Every successful learning journey begins with the right placement.",
        desc: "Our academic team provides placement testing and professional guidance to help learners select the most appropriate course and learning pathway based on their current level and future goals. We evaluate speaking, listening, reading, and grammar to build a tailored plan for you."
      },
      arabic: {
        id: "arabic-language",
        title: "Arabic Language & Cultural Studies",
        subtitle: "Learn Arabic with IH Saudi Arabia",
        desc: "Designed for expatriates, corporate teams, and diplomatic personnel, our Arabic programs offer a comprehensive gateway to communicating effectively and understanding local customs in Saudi Arabia. We combine language instruction with cultural immersion experiences to ensure practical fluency.",
        focusTitle: "Available Modules",
        focusItems: [
          "Modern Standard Arabic (MSA)",
          "Saudi Spoken Dialect (Hejazi & Najdi)",
          "Business Arabic for Corporate Meetings",
          "Diplomatic & Executive Arabic"
        ],
        suitableTitle: "Target Audience",
        suitableItems: ["Expatriates", "Corporate Teams", "Diplomats", "International Residents"],
        levelsTitle: "Course Formats",
        levelsItems: ["Group Classes", "1-to-1 Private Coaching", "In-Company Corporate", "Online Live Classes"],
        cta: "Enquire for Arabic"
      },
      globalLanguages: {
        id: "global-languages",
        title: "Global Languages (French, Spanish, Chinese, etc.)",
        subtitle: "Multilingual Programs with Certified Native-Level Instructors",
        desc: "Broaden your professional horizons with accredited global language courses. Whether preparing for academic study, international business expansion, or global travel, our CEFR-aligned courses build conversational confidence and cultural fluency.",
        focusTitle: "Languages & Certifications",
        focusItems: [
          "French Language (DELF / DALF & Business French)",
          "Spanish Language (DELE Preparation & Conversational)",
          "Mandarin Chinese (HSK Exam Prep & Business Mandarin)",
          "CEFR Standard Curriculum (A1 to C2)"
        ],
        cta: "Enquire for Global Languages"
      },
      studyAbroad: {
        id: "study-abroad",
        title: "Study Abroad",
        subtitle: "Personalized International Study & Cultural Experiences",
        desc: "Connect with the worldwide International House network across 50+ countries. We provide end-to-end guidance for students and professionals seeking immersive study abroad experiences, language immersion, summer camps, and university pathways in the UK, USA, Canada, Europe, and beyond.",
        focusTitle: "Program Highlights",
        focusItems: [
          "50+ Countries across IH Global Network",
          "Summer & Winter Language Immersions",
          "University Foundation & Preparation",
          "Full Visa & Accommodation Support"
        ],
        cta: "Explore Study Abroad"
      },
      culturalLearning: {
        id: "cultural-learning",
        title: "Cultural Learning & International Experiences",
        subtitle: "Bridging Traditions and Global Communities",
        desc: "Effective communication goes beyond language vocabulary. Our cultural workshops prepare international professionals to operate smoothly in the Kingdom and help Saudi students navigate cultural nuances during their international journeys.",
        focusTitle: "Workshops & Experiences",
        focusItems: [
          "Saudi Cultural Onboarding for Expats",
          "Cross-Cultural Corporate Workflows",
          "Pre-Departure International Briefings",
          "Bilingual Exchange & Cultural Events"
        ],
        cta: "Enquire About Cultural Learning"
      },
      additionalLanguages: {
        id: "additional-world-languages",
        title: "Additional World Languages",
        subtitle: "German, Italian, Japanese, Korean, Turkish",
        desc: "Broaden your linguistic portfolio with in-demand world languages delivered by certified instructors. Master grammar, conversational speaking, pronunciation, and cultural etiquette aligned with international CEFR standards.",
        languages: [
          {
            id: "german",
            name: "German (Deutsch)",
            img: "/lang_german.png",
            desc: "For higher education, engineering careers, and Goethe-Zertifikat preparation in Germany, Austria, and Switzerland.",
            levels: "A1 to C1 • Interactive & Business"
          },
          {
            id: "italian",
            name: "Italian (Italiano)",
            img: "/lang_italian.png",
            desc: "For art, design, culinary arts, fashion industries, and CILS / CELI qualification preparation.",
            levels: "A1 to B2 • Conversational & Culture"
          },
          {
            id: "japanese",
            name: "Japanese (日本語)",
            img: "/lang_japanese.png",
            desc: "JLPT preparation, business culture, travel Japanese, and multimedia language immersion.",
            levels: "N5 to N2 • Scripts & Speaking"
          },
          {
            id: "korean",
            name: "Korean (한국어)",
            img: "/lang_korean.png",
            desc: "Hangul literacy, TOPIK exam preparation, pop culture fluency, and corporate communication.",
            levels: "Levels 1 to 4 • Modern & Practical"
          },
          {
            id: "turkish",
            name: "Turkish (Türkçe)",
            img: "/lang_turkish.png",
            desc: "TÖMER preparation, travel, commerce, and academic exchange with Turkish universities.",
            levels: "A1 to C1 • Fluency & Grammar"
          }
        ],
        cta: "Register for World Languages"
      }
    },
    cta: {
      title: "Start Learning with IH Saudi Arabia",
      subtitle: "Whether you are taking your first steps in English, preparing for an international examination, developing workplace communication skills, or supporting your child's educational success, IH Saudi Arabia offers a learning pathway designed for you.",
      placement: "Book a Placement Test",
      explore: "Explore Learning Options",
      contact: "Contact an Academic Advisor",
      register: "Register for a Course"
    }
  },
  ar: {
    hero: {
      tag: "تعليم اللغة الإنجليزية لكل مرحلة من مراحل رحلتك",
      title: "دوراتنا التعليمية",
      subtitle: "نقدم في الهاوس الدولي السعودية مجموعة شاملة من برامج اللغة الإنجليزية المصممة لدعم المتعلمين من مختلف الأعمار والقدرات والأهداف.",
      desc: "سواء كنت تتعلم اللغة الإنجليزية لأغراض التعليم، أو التقدم المهني، أو التطوير الوظيفي، أو الامتحانات الدولية، أو النمو الشخصي، فإن برامجنا توفر مهارات اتصال عملية، وتقدماً منظماً، ونتائج تعليمية متوافقة دولياً.",
      placementNotice: "يبدأ جميع المتعلمين بتقييم تحديد المستوى لضمان تسجيلهم في البرنامج الأكثر ملاءمة لمستواهم وأهدافهم."
    },
    sections: {
      general: {
        id: "general-english",
        title: "اللغة الإنجليزية العامة",
        subtitle: "بناء الثقة في التواصل اليومي",
        desc: "تم تصميم برامج اللغة الإنجليزية العامة لدينا لتطوير المهارات اللغوية الأربعة الأساسية: التحدث والاستماع والقراءة والكتابة. من خلال الدروس التفاعلية وأنشطة التواصل العملية، يكتسب المتعلمون الثقة والطلاقة اللازمة للمواقف الحياتية اليومية والدراسة الأكاديمية والبيئات المهنية.",
        suitableTitle: "مناسب لـ",
        suitableItems: ["البالغين", "طلاب الجامعات", "المهنيين والموظفين", "المتعلمين المستقلين"],
        levelsTitle: "المستويات المتاحة",
        levelsItems: ["مبتدئ (A1)", "ابتدائي (A2)", "دون المتوسط (B1)", "متوسط (B1-B2)", "فوق المتوسط (B2)", "متقدم (C1)"],
        cta: "استفسر الآن"
      },
      business: {
        id: "business-english",
        title: "اللغة الإنجليزية للأعمال",
        subtitle: "التواصل بفعالية في مكان العمل",
        desc: "تركز برامج اللغة الإنجليزية للأعمال على المهارات اللغوية المطلوبة للنجاح المهني في بيئة العمل العالمية اليوم. يطور المتعلمون مهارات اتصال عملية للاجتماعات والعروض التقديمية والمفاوضات ورسائل البريد الإلكتروني والتقارير والتفاعلات المهنية.",
        focusTitle: "مجالات التركيز",
        focusItems: ["الاتصال المهني والأعمال", "كتابة البريد الإلكتروني", "العروض التقديمية", "الاجتماعات", "المفاوضات", "الكتابة المهنية والتقارير"],
        cta: "استفسر الآن"
      },
      technical: {
        id: "technical-english",
        title: "اللغة الإنجليزية الفنية والمهنية",
        subtitle: "حلول لغوية للقطاعات الصناعية والمتخصصة",
        desc: "تقدم معاهد الهاوس الدولي السعودية برامج لغة إنجليزية مخصصة للقطاعات المهنية لدعم الموظفين العاملين في البيئات الفنية والتخصصية. يمكن تصميم هذه البرامج لتناسب قطاعات محددة ومتطلبات مكان العمل.",
        focusTitle: "المجالات الفنية المتخصصة",
        focusItems: [
          "الإنجليزية الفنية والتقنية",
          "الإنجليزية للمهندسين",
          "الإنجليزية لقطاع النفط والغاز",
          "الإنجليزية للخدمات اللوجستية والنقل",
          "الإنجليزية للضيافة والسياحة",
          "الإنجليزية لممارسي الرعاية الصحية",
          "الإنجليزية لخدمة العملاء"
        ],
        cta: "طلب مقترح تدريب الشركات"
      },
      exams: {
        id: "exam-prep",
        title: "التحضير للاختبارات الدولية",
        subtitle: "الاستعداد للمؤهلات المعترف بها عالمياً",
        desc: "تساعد برامج التحضير للامتحانات لدينا المتعلمين على تحقيق الكفاءة اللغوية المطلوبة للفرص الأكاديمية والمهنية والدولية. يقدم مدربونا ذوو الخبرة إعداداً منظماً وتقييمات تجريبية واستراتيجيات اختبار لمساعدة المتعلمين على أداء الامتحانات بكل ثقة.",
        focusTitle: "تشمل دورات التحضير",
        focusItems: ["الآيلتس الأكاديمي والعام (IELTS)", "اختبارات لاينجوج سيرت (LanguageCert)", "مؤهلات كامبريدج للغة الإنجليزية", "مؤهلات بيرسون للغة الإنجليزية (PTE)"],
        cta: "احجز دورة تحضيرية"
      },
      young: {
        id: "young-learners",
        title: "برامج المتعلمين الصغار",
        subtitle: "بناء أسس قوية للنجاح في المستقبل",
        desc: "تم تصميم برامج المتعلمين الصغار لدينا لمساعدة الأطفال والمراهقين على تطوير الثقة ومهارات التواصل والاتجاه الإيجابي نحو تعلم اللغة الإنجليزية. تجمع البرامج بين الأنشطة التفاعلية الجذابة والتواصل العملي وتطوير اللغة المنظم في بيئة تعليمية داعمة.",
        suitableTitle: "مناسب لـ",
        suitableItems: ["طلاب المدارس", "المراهقين والشباب", "برامج الدعم الأكاديمي"],
        levelsTitle: "مجالات التركيز",
        levelsItems: ["القراءة والكتابة المبكرة", "بناء الثقة في التحدث", "الأنشطة التفاعلية", "دعم المناهج المدرسية"],
        cta: "استفسر للأطفال"
      },
      online: {
        id: "online-hybrid",
        title: "التعلم عبر الإنترنت والتعليم الهجين",
        subtitle: "تعلم مرن بلا حدود",
        desc: "تقدم معاهد الهاوس الدولي السعودية حلول تعليمية مرنة تتيح للمتعلمين الوصول إلى تعليم عالي الجودة أينما كانوا. توفر برامجنا عبر الإنترنت والبرامج الهجينة نفس الالتزام بالجودة والدعم ونتائج التعلم كالدورات الحضورية.",
        focusTitle: "خيارات مرنة",
        focusItems: ["الدروس الحضورية وجهاً لوجه", "الدروس الحية عبر الإنترنت", "برامج التعلم الهجين", "الدروس الخصوصية (فردي)", "الدورات الجماعية"],
        cta: "اقرأ المزيد عن التعلم أونلاين"
      },
      private: {
        id: "private-tuition",
        title: "الدروس الخصوصية والتدريب التنفيذي",
        subtitle: "تعليم مخصص لتحقيق أهدافك الفردية",
        desc: "للمتعلمين الذين يبحثون عن دعم مخصص، نقدم تدريباً فردياً أو لمجموعات صغيرة مصمماً حول احتياجاتهم وأهدافهم الخاصة. توفر هذه البرامج أقصى قدر من المرونة والاهتمام الشخصي لتحقيق تقدم أسرع.",
        focusTitle: "مجالات التركيز المتاحة",
        focusItems: ["اللغة الإنجليزية العامة المخصصة", "اللغة الإنجليزية للأعمال المخصصة", "إعداد امتحانات مخصص ومكثف", "التدريب التنفيذي والقيادي", "مهارات التواصل المهني المتقدمة"],
        cta: "احجز استشارة إدارية"
      },
      guidance: {
        id: "guidance",
        title: "تحديد المستوى والتوجيه الأكاديمي",
        subtitle: "كل رحلة تعليمية ناجحة تبدأ بالتحديد الصحيح للمستوى",
        desc: "يقدم فريقنا الأكاديمي اختبارات تحديد المستوى والتوجيه المهني لمساعدة المتعلمين على اختيار الدورة التدريبية ومسار التعلم الأكثر ملاءمة بناءً على مستواهم الحالي وأهدافهم المستقبلية. نقوم بتقييم التحدث والاستماع والقراءة والقواعد لبناء مسار مخصص لك."
      },
      arabic: {
        id: "arabic-language",
        title: "اللغة العربية والدراسات الثقافية",
        subtitle: "تعلم العربية مع الهاوس الدولي السعودية",
        desc: "تم تصميم برامج اللغة العربية للمغتربين وفرق الشركات وأعضاء السلك الدبلوماسي والمقيمين، لتوفر مدخلاً شاملاً للتواصل الفعال وفهم العادات والتقاليد المحلية في المملكة. نجمع بين التعليم اللغوي وخبرات الانغماس الثقافي لضمان الطلاقة العملية.",
        focusTitle: "المسارات المتاحة",
        focusItems: [
          "العربية الفصحى الحديثة (MSA)",
          "اللهجة السعودية الحجازية والنجدية للتواصل اليومي",
          "العربية للأعمال للشركات والمفاوضات",
          "العربية التنفيذية والدبلوماسية"
        ],
        suitableTitle: "الفئات المستهدفة",
        suitableItems: ["المغتربون", "فرق الشركات", "الدبلوماسيون", "المقيمون الدوليون"],
        levelsTitle: "طرق التدريب",
        levelsItems: ["دورات جماعية", "تدريب فردي خاص (1-to-1)", "تدريب الشركات الداخلي", "حصص حية أونلاين"],
        cta: "استفسر عن دورات العربية"
      },
      globalLanguages: {
        id: "global-languages",
        title: "اللغات العالمية (الفرنسية، الإسبانية، الصينية، إلخ)",
        subtitle: "برامج متعددة اللغات مع مدربين معتمدين",
        desc: "نقدم في الهاوس الدولي برامج لغات عالمية معتمدة يدرسها نخبة من المتحدثين الأصليين المتخصصين. سواء كنت تستعد للدراسة الأكاديمية أو التوسع التجاري الدولي أو السفر، تمنحك دوراتنا المتوافقة مع معايير CEFR طلاقة حقيقية.",
        focusTitle: "اللغات والشهادات المعتمدة",
        focusItems: [
          "اللغة الفرنسية (التحضير لـ DELF / DALF والفرنسية للأعمال)",
          "اللغة الإسبانية (التحضير لـ DELE والمحادثة العامة)",
          "اللغة الصينية الماندرين (التحضير لـ HSK والصينية للأعمال)",
          "مناهج معيارية دولية من المستوى A1 إلى C2"
        ],
        cta: "استفسر عن اللغات العالمية"
      },
      studyAbroad: {
        id: "study-abroad",
        title: "الدراسة والابتعاث بالخارج",
        subtitle: "دراسة دولية مخصصة وتجارب انغماس ثقافي",
        desc: "تواصل مع شبكة الهاوس الدولي المنتشرة في أكثر من 50 دولة حول العالم. نقدم إرشاداً شاملاً ومتكاملاً للطلاب والمهنيين الباحثين عن برامج دراسية صيفية ودورات مكثفة والتحضير للجامعات في بريطانيا وأمريكا وكندا وأوروبا.",
        focusTitle: "مميزات البرنامج",
        focusItems: [
          "أكثر من 50 دولة عبر شبكة IH العالمية",
          "برامج انغماس لغوي صيفية وشتوية",
          "إعداد السنة التحضيرية والقبولات الجامعية",
          "دعم كامل للتأشيرات والسكن والإقامة"
        ],
        cta: "استكشف برامج الابتعاث"
      },
      culturalLearning: {
        id: "cultural-learning",
        title: "التعلم الثقافي والتجارب الدولية",
        subtitle: "جسر يربط التقاليد والمجتمعات العالمية",
        desc: "يتجاوز التواصل الفعال مجرد مفردات اللغة وقواعدها. تجهز ورش العمل الثقافية لدينا المهنيين الدوليين للعمل والعيش بسلاسة في المملكة، كما تساعد الطلاب المبتعثين على استيعاب الاختلافات الثقافية أثناء رحلاتهم.",
        focusTitle: "ورش العمل والتجارب",
        focusItems: [
          "التهيئة الثقافية السعودية للمغتربين",
          "التواصل بين الثقافات في بيئات العمل للشركات",
          "جلسات إرشادية للمبتعثين قبل المغادرة",
          "فعاليات التبادل اللغوي والأنشطة المجتمعية"
        ],
        cta: "استفسر عن التعلم الثقافي"
      },
      additionalLanguages: {
        id: "additional-world-languages",
        title: "لغات عالمية إضافية",
        subtitle: "الألمانية، الإيطالية، اليابانية، الكورية، التركية",
        desc: "وسّع آفاقك الشخصية والمهنية عبر تعلم 5 من أكثر لغات العالم طلباً مع مدربين معتمدين. دورات متخصصة تشمل القواعد والمحادثة والنطق والعمق الثقافي متوافقة مع أرقى المعايير الدولية.",
        languages: [
          {
            id: "german",
            name: "الألمانية (Deutsch)",
            img: "/lang_german.png",
            desc: "للتعليم العالي وفرص الهندسة والتحضير لاختبارات معهد جوته في ألمانيا والنمسا وسويسرا.",
            levels: "A1 إلى C1 • تفاعلي وللأعمال"
          },
          {
            id: "italian",
            name: "الإيطالية (Italiano)",
            img: "/lang_italian.png",
            desc: "لقطاعات الفنون والتصميم والطهي والأزياء والتحضير لمؤهلات CILS و CELI.",
            levels: "A1 إلى B2 • محادثة وثقافة"
          },
          {
            id: "japanese",
            name: "اليابانية (日本語)",
            img: "/lang_japanese.png",
            desc: "التحضير لاختبار JLPT وثقافة الأعمال وسياحة اليابان وتعلم الكتابة والنطق.",
            levels: "N5 إلى N2 • كتابة ومحادثة"
          },
          {
            id: "korean",
            name: "الكورية (한국어)",
            img: "/lang_korean.png",
            desc: "تعلم الحروف الكورية (هانغل) والتحضير لاختبار TOPIK والتواصل المهني والثقافي.",
            levels: "المستويات 1 إلى 4 • حديث وعملي"
          },
          {
            id: "turkish",
            name: "التركية (Türkçe)",
            img: "/lang_turkish.png",
            desc: "التحضير لاختبار TÖMER وفرص التجارة والسياحة والتبادل الأكاديمي مع الجامعات التركية.",
            levels: "A1 إلى C1 • طلاقة وقواعد"
          }
        ],
        cta: "سجل في اللغات العالمية"
      }
    },
    cta: {
      title: "ابدأ التعلم مع الهاوس الدولي السعودية",
      subtitle: "سواء كنت تخطو خطواتك الأولى في اللغة الإنجليزية، أو تستعد لامتحان دولي، أو تطور مهارات التواصل في مكان العمل، أو تدعم النجاح التعليمي لطفلك، فإن الهاوس الدولي السعودية يقدم مساراً تعليمياً مصمماً خصيصاً لك.",
      placement: "احجز اختبار تحديد المستوى",
      explore: "استكشف خيارات التعلم",
      contact: "تواصل مع مستشار أكاديمي",
      register: "سجل في دورة تدريبية"
    }
  }
};

// Configurable themes using premium colors from IH Colombia
const sectionThemes = {
  general: {
    bg: "bg-[#046bd2]/5",
    border: "border-[#046bd2]/20",
    borderLeft: "border-l-[#046bd2]",
    hoverShadow: "hover:shadow-[#046bd2]/10",
    cornerBg: "bg-[#046bd2]/10",
    iconBg: "bg-[#046bd2]/15",
    iconText: "text-[#046bd2]",
    titleText: "text-[#034e9a]",
    bullet: "text-[#046bd2]",
    badgeBg: "bg-[#046bd2]/10",
    badgeText: "text-[#034e9a]",
    label: { en: "General English", ar: "إنجليزي عام" }
  },
  business: {
    bg: "bg-[#cf2e2e]/5",
    border: "border-[#cf2e2e]/20",
    borderLeft: "border-l-[#cf2e2e]",
    hoverShadow: "hover:shadow-[#cf2e2e]/10",
    cornerBg: "bg-[#cf2e2e]/10",
    iconBg: "bg-[#cf2e2e]/15",
    iconText: "text-[#cf2e2e]",
    titleText: "text-[#a81a1a]",
    bullet: "text-[#cf2e2e]",
    badgeBg: "bg-[#cf2e2e]/10",
    badgeText: "text-[#a81a1a]",
    label: { en: "Business English", ar: "إنجليزي أعمال" }
  },
  technical: {
    bg: "bg-[#fcb900]/5",
    border: "border-[#fcb900]/20",
    borderLeft: "border-l-[#fcb900]",
    hoverShadow: "hover:shadow-[#fcb900]/10",
    cornerBg: "bg-[#fcb900]/10",
    iconBg: "bg-[#fcb900]/15",
    iconText: "text-[#d99e00]",
    titleText: "text-[#b27d00]",
    bullet: "text-[#d99e00]",
    badgeBg: "bg-[#fcb900]/10",
    badgeText: "text-[#b27d00]",
    label: { en: "Technical", ar: "تخصصي" }
  },
  exams: {
    bg: "bg-[#00d084]/5",
    border: "border-[#00d084]/20",
    borderLeft: "border-l-[#00d084]",
    hoverShadow: "hover:shadow-[#00d084]/10",
    cornerBg: "bg-[#00d084]/10",
    iconBg: "bg-[#00d084]/15",
    iconText: "text-[#00ab6c]",
    titleText: "text-[#008a55]",
    bullet: "text-[#00ab6c]",
    badgeBg: "bg-[#00d084]/10",
    badgeText: "text-[#008a55]",
    label: { en: "Examinations", ar: "امتحانات دولية" }
  },
  young: {
    bg: "bg-[#9b51e0]/5",
    border: "border-[#9b51e0]/20",
    borderLeft: "border-l-[#9b51e0]",
    hoverShadow: "hover:shadow-[#9b51e0]/10",
    cornerBg: "bg-[#9b51e0]/10",
    iconBg: "bg-[#9b51e0]/15",
    iconText: "text-[#8038c3]",
    titleText: "text-[#65259e]",
    bullet: "text-[#8038c3]",
    badgeBg: "bg-[#9b51e0]/10",
    badgeText: "text-[#65259e]",
    label: { en: "Young Learners", ar: "صغار السن" }
  },
  online: {
    bg: "bg-[#fcb900]/5",
    border: "border-[#fcb900]/20",
    borderLeft: "border-l-[#fcb900]",
    hoverShadow: "hover:shadow-[#fcb900]/10",
    cornerBg: "bg-[#fcb900]/10",
    iconBg: "bg-[#fcb900]/15",
    iconText: "text-[#d99e00]",
    titleText: "text-[#b27d00]",
    bullet: "text-[#d99e00]",
    badgeBg: "bg-[#fcb900]/10",
    badgeText: "text-[#b27d00]",
    label: { en: "Virtual Classes", ar: "مرن أونلاين" }
  },
  private: {
    bg: "bg-[#00d084]/5",
    border: "border-[#00d084]/20",
    borderLeft: "border-l-[#00d084]",
    hoverShadow: "hover:shadow-[#00d084]/10",
    cornerBg: "bg-[#00d084]/10",
    iconBg: "bg-[#00d084]/15",
    iconText: "text-[#00ab6c]",
    titleText: "text-[#008a55]",
    bullet: "text-[#00ab6c]",
    badgeBg: "bg-[#00d084]/10",
    badgeText: "text-[#008a55]",
    label: { en: "Custom/Executive", ar: "تدريب مخصص" }
  }
};

// Section Metadata mapping real original assets from beta.ihsaudiarabia.com
const sectionMeta = [
  { key: "general", image: "/beta_assets/p1.jpeg", icon: <BookOpen className="w-5 h-5" />, theme: sectionThemes.general },
  { key: "business", image: "/beta_assets/p2.jpeg", icon: <Briefcase className="w-5 h-5" />, theme: sectionThemes.business },
  { key: "technical", image: "/beta_assets/corporate_training.png", icon: <Wrench className="w-5 h-5" />, theme: sectionThemes.technical },
  { key: "exams", image: "/beta_assets/p3.jpeg", icon: <GraduationCap className="w-5 h-5" />, theme: sectionThemes.exams },
  { key: "young", image: "/beta_assets/young_learners.png", icon: <Sparkles className="w-5 h-5" />, theme: sectionThemes.young },
  { key: "online", image: "/beta_assets/online_class.png", icon: <Laptop className="w-5 h-5" />, theme: sectionThemes.online },
  { key: "private", image: "/beta_assets/placement_test.png", icon: <UserCheck className="w-5 h-5" />, theme: sectionThemes.private },
];

export default function CoursesPage() {
  const { lang } = useLanguage();
  const isRtl = lang === "ar";
  const t = content[lang];
  const [activeTab, setActiveTab] = useState("general-english");

  // Inline Registration Form States
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    ageGroup: "",
    branch: "",
    course: "",
    studyTime: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};
    if (!form.name.trim()) errors.name = isRtl ? "هذا الحقل مطلوب" : "This field is required";
    if (!form.email.trim()) errors.email = isRtl ? "هذا الحقل مطلوب" : "This field is required";
    if (!form.phone.trim()) errors.phone = isRtl ? "هذا الحقل مطلوب" : "This field is required";
    if (!form.ageGroup) errors.ageGroup = isRtl ? "الرجاء اختيار أحد الخيارات" : "Please select an option";

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
        ageGroup: "",
        branch: "",
        course: "",
        studyTime: "",
        message: "",
      });
      setValidationErrors({});
    }, 1200);
  };

  // Handle intersection observer to highlight side navigation tabs as user scrolls
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px",
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sections = [
      "general-english",
      "business-english",
      "technical-professional",
      "technical-english",
      "exam-preparation",
      "young-learners",
      "online-hybrid",
      "private-tuition",
      "placement-testing",
      "arabic-language",
      "global-languages",
      "study-abroad-section",
      "cultural-learning",
      "additional-world-languages",
      "german",
      "italian",
      "japanese",
      "korean",
      "turkish"
    ];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 100;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveTab(id);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  const menuGroups = [
    {
      title: isRtl ? "برامج اللغات (الإنجليزية)" : "Language Programs",
      items: [
        { id: "general-english", label: t.sections.general.title, icon: <BookOpen className="w-4 h-4" /> },
        { id: "business-english", label: t.sections.business.title, icon: <Briefcase className="w-4 h-4" /> },
        { id: "technical-professional", label: t.sections.technical.title, icon: <Wrench className="w-4 h-4" /> },
        { id: "online-hybrid", label: t.sections.online.title, icon: <Laptop className="w-4 h-4" /> },
        { id: "young-learners", label: t.sections.young.title, icon: <Sparkles className="w-4 h-4" /> },
        { id: "exam-preparation", label: t.sections.exams.title, icon: <GraduationCap className="w-4 h-4" /> },
        { id: "private-tuition", label: t.sections.private.title, icon: <UserCheck className="w-4 h-4" /> },
      ]
    },
    {
      title: isRtl ? "اللغات العالمية" : "Global Languages",
      items: [
        { id: "arabic-language", label: t.sections.arabic.title, icon: <BookOpen className="w-4 h-4" /> },
        { id: "global-languages", label: t.sections.globalLanguages.title, icon: <Languages className="w-4 h-4" /> },
        { id: "study-abroad-section", label: t.sections.studyAbroad.title, icon: <Compass className="w-4 h-4" /> },
        { id: "cultural-learning", label: t.sections.culturalLearning.title, icon: <Globe className="w-4 h-4" /> },
      ]
    },
    {
      title: isRtl ? "لغات عالمية إضافية" : "Additional World Languages",
      items: [
        { id: "german", label: isRtl ? "الألمانية (Deutsch)" : "German (Deutsch)", icon: <Globe className="w-4 h-4" /> },
        { id: "italian", label: isRtl ? "الإيطالية (Italiano)" : "Italian (Italiano)", icon: <Globe className="w-4 h-4" /> },
        { id: "japanese", label: isRtl ? "اليابانية (日本語)" : "Japanese (日本語)", icon: <Globe className="w-4 h-4" /> },
        { id: "korean", label: isRtl ? "الكورية (한국어)" : "Korean (한국어)", icon: <Globe className="w-4 h-4" /> },
        { id: "turkish", label: isRtl ? "التركية (Türkçe)" : "Turkish (Türkçe)", icon: <Globe className="w-4 h-4" /> },
      ]
    }
  ];

  const flatMenuItems = menuGroups.flatMap((g) => g.items);

  return (
    <div className="bg-slate-50 min-h-screen pt-20 lg:pt-28">
      <ThemeAccent />

      {/* ─── SECTION 1: HERO BANNER ─── */}
      <section className="relative bg-gradient-to-br from-[#001a3f] via-[#002f6c] to-[#00112b] text-white overflow-hidden py-24 lg:py-36">
        {/* Animated background particles */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#cf1430]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 text-start">
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-blue-300 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6"
              >
                <Sparkles className="w-3.5 h-3.5" />
                {t.hero.tag}
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black font-['Montserrat',_sans-serif] tracking-tight leading-none mb-6"
              >
                {t.hero.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl font-light text-slate-200 leading-relaxed mb-8 max-w-3xl"
              >
                {t.hero.subtitle}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-base font-light text-slate-300 leading-relaxed max-w-3xl border-s-2 border-blue-500/50 ps-4 mb-8"
              >
                {t.hero.desc}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white/5 border border-white/15 backdrop-blur-md rounded-2xl p-4 sm:p-5 flex items-start gap-4 max-w-2xl text-slate-200"
              >
                <ClipboardCheck className="w-6 h-6 text-blue-400 shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base font-light leading-relaxed">
                  {t.hero.placementNotice}
                </p>
              </motion.div>
            </div>

            {/* Right Column: Wonderful Interactive Image Frame (IH Colombia Hero Image) */}
            <div className="hidden lg:block lg:col-span-5 relative">
              {/* Back Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: 1 }}
                animate={{ opacity: 1, scale: 1, rotate: -2 }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.3 }}
                whileHover={{ scale: 1.03, rotate: 0 }}
                className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900 group"
              >
                <Image
                  src="/colombia_hero.webp"
                  alt="IH Saudi Arabia Classroom"
                  fill
                  sizes="400px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/20" />
                {/* Floating quality assurance stamp */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md border border-slate-200 rounded-2xl p-3 shadow-xl flex items-center gap-3"
                >
                  <img src="/ih_70years_v2.png" alt="Celebrating 70 Years" className="h-10 w-auto" />
                  <div className="text-start">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">IH Quality</div>
                    <div className="text-xs font-bold text-[#002f6c]">Since 1953</div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── NAVIGATION TAB BAR & MAIN BODY ─── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8 relative">
          
          {/* Sticky Sidebar Navigation (Desktop) */}
          <aside className="hidden lg:block w-72 shrink-0">
            <div className="sticky top-28 bg-white border border-slate-200 rounded-3xl p-5 shadow-sm max-h-[calc(100vh-140px)] overflow-y-auto">
              <h3 className="text-sm font-bold text-[#002f6c] font-['Montserrat',_sans-serif] uppercase tracking-wider mb-4 px-2">
                {isRtl ? "فهرس الدورات والبرامج" : "Courses Directory"}
              </h3>
              
              <div className="space-y-4">
                {menuGroups.map((group, gIdx) => (
                  <div key={gIdx} className={gIdx > 0 ? "pt-3 border-t border-slate-100" : ""}>
                    <div className="text-[11px] font-black uppercase tracking-wider text-[#002f6c]/70 px-2 pb-1.5 flex items-center justify-between">
                      <span>{group.title}</span>
                      <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-slate-100 text-slate-500">
                        {group.items.length}
                      </span>
                    </div>
                    <nav className="flex flex-col gap-0.5">
                      {group.items.map((item) => {
                        const isActive = activeTab === item.id;
                        return (
                          <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`flex items-center gap-2.5 w-full px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-200 text-start group ${
                              isActive
                                ? "bg-[#002f6c] text-white shadow-sm"
                                : "text-slate-600 hover:text-[#002f6c] hover:bg-slate-50"
                            }`}
                          >
                            <span className={`shrink-0 transition-colors ${isActive ? "text-white" : "text-slate-400 group-hover:text-[#002f6c]"}`}>
                              {item.icon}
                            </span>
                            <span className="truncate">{item.label}</span>
                            {isActive && (
                              <motion.span
                                layoutId="sidebarActiveIndicator"
                                className={`ms-auto shrink-0 ${isRtl ? "rotate-180" : ""}`}
                              >
                                <ChevronRight className="w-3.5 h-3.5 text-white/80" />
                              </motion.span>
                            )}
                          </button>
                        );
                      })}
                    </nav>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Sticky Tab Bar (Mobile & Tablet) */}
          <div className="lg:hidden sticky top-16 z-30 bg-slate-50/95 backdrop-blur-md py-3 -mx-4 px-4 overflow-x-auto border-b border-slate-200 flex gap-2 select-none scrollbar-none">
            {flatMenuItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all shrink-0 ${
                    isActive
                      ? "bg-[#002f6c] text-white shadow-md shadow-[#002f6c]/15"
                      : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  {item.icon}
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* ─── COURSE CONTENT BLOCKS ─── */}
          <div className="flex-1 space-y-16">
            
            {/* 1. General English */}
            <motion.div
              id="general-english"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className={`${sectionMeta[0].theme.bg} border ${sectionMeta[0].theme.border} border-l-4 ${sectionMeta[0].theme.borderLeft} rounded-3xl overflow-hidden shadow-sm hover:shadow-xl ${sectionMeta[0].theme.hoverShadow} transition-all duration-300 p-6 sm:p-8 lg:p-10`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                  <Image
                    src={sectionMeta[0].image}
                    alt={t.sections.general.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="lg:col-span-7 text-start flex flex-col justify-between h-full">
                  <div>
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${sectionMeta[0].theme.badgeBg} ${sectionMeta[0].theme.badgeText} text-xs font-bold uppercase mb-4`}>
                      {sectionMeta[0].icon}
                      {isRtl ? sectionMeta[0].theme.label.ar : sectionMeta[0].theme.label.en}
                    </span>
                    <h2 className={`text-3xl font-black ${sectionMeta[0].theme.titleText} font-['Montserrat',_sans-serif] leading-tight mb-2`}>
                      {t.sections.general.title}
                    </h2>
                    <h4 className="text-lg font-bold text-slate-500 mb-4">
                      {t.sections.general.subtitle}
                    </h4>
                    <p className="text-slate-600 font-light leading-relaxed mb-6">
                      {t.sections.general.desc}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 border-t border-slate-200/50 pt-6">
                      <div>
                        <h5 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-3">
                          {t.sections.general.suitableTitle}
                        </h5>
                        <ul className="space-y-1.5">
                          {t.sections.general.suitableItems.map((item) => (
                            <li key={item} className="flex items-center gap-2 text-sm text-slate-600 font-light">
                              <Check className={`w-4 h-4 ${sectionMeta[0].theme.bullet} shrink-0`} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-3">
                          {t.sections.general.levelsTitle}
                        </h5>
                        <div className="flex flex-wrap gap-1.5">
                          {t.sections.general.levelsItems.map((lvl) => (
                            <span key={lvl} className="px-2.5 py-1 bg-white hover:bg-slate-100 transition-colors text-slate-700 text-xs font-semibold rounded-lg border border-slate-250">
                              {lvl}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    href="#register-section"
                    onClick={(e) => {
                      e.preventDefault();
                      setForm((prev) => ({ ...prev, course: "general" }));
                      scrollToSection("register-section");
                    }}
                    className="inline-flex items-center justify-center gap-2 self-start px-6 py-3 bg-[#002f6c] hover:bg-[#cf1430] text-white text-sm font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
                  >
                    {t.sections.general.cta}
                    <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRtl ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* 2. Business English */}
            <motion.div
              id="business-english"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className={`${sectionMeta[1].theme.bg} border ${sectionMeta[1].theme.border} border-l-4 ${sectionMeta[1].theme.borderLeft} rounded-3xl overflow-hidden shadow-sm hover:shadow-xl ${sectionMeta[1].theme.hoverShadow} transition-all duration-300 p-6 sm:p-8 lg:p-10`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 text-start flex flex-col justify-between h-full order-2 lg:order-1">
                  <div>
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${sectionMeta[1].theme.badgeBg} ${sectionMeta[1].theme.badgeText} text-xs font-bold uppercase mb-4`}>
                      {sectionMeta[1].icon}
                      {isRtl ? sectionMeta[1].theme.label.ar : sectionMeta[1].theme.label.en}
                    </span>
                    <h2 className={`text-3xl font-black ${sectionMeta[1].theme.titleText} font-['Montserrat',_sans-serif] leading-tight mb-2`}>
                      {t.sections.business.title}
                    </h2>
                    <h4 className="text-lg font-bold text-slate-500 mb-4">
                      {t.sections.business.subtitle}
                    </h4>
                    <p className="text-slate-600 font-light leading-relaxed mb-6">
                      {t.sections.business.desc}
                    </p>
                    
                    <div className="mb-8 border-t border-slate-200/50 pt-6">
                      <h5 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-3">
                        {t.sections.business.focusTitle}
                      </h5>
                      <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                        {t.sections.business.focusItems.map((item) => (
                          <div key={item} className="flex items-center gap-2 text-sm text-slate-600 font-light">
                            <Check className={`w-4 h-4 ${sectionMeta[1].theme.bullet} shrink-0`} />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <a
                    href="#register-section"
                    onClick={(e) => {
                      e.preventDefault();
                      setForm((prev) => ({ ...prev, course: "business" }));
                      scrollToSection("register-section");
                    }}
                    className="inline-flex items-center justify-center gap-2 self-start px-6 py-3 bg-[#002f6c] hover:bg-[#cf1430] text-white text-sm font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
                  >
                    {t.sections.business.cta}
                    <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRtl ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
                  </a>
                </div>
                <div className="lg:col-span-5 relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-sm order-1 lg:order-2 border border-slate-200">
                  <Image
                    src={sectionMeta[1].image}
                    alt={t.sections.business.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            </motion.div>

            {/* 3. Technical & Professional English */}
            <div id="technical-english" className="scroll-mt-28" />
            <motion.div
              id="technical-professional"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className={`${sectionMeta[2].theme.bg} border ${sectionMeta[2].theme.border} border-l-4 ${sectionMeta[2].theme.borderLeft} rounded-3xl overflow-hidden shadow-sm hover:shadow-xl ${sectionMeta[2].theme.hoverShadow} transition-all duration-300 p-6 sm:p-8 lg:p-10`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                  <Image
                    src={sectionMeta[2].image}
                    alt={t.sections.technical.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="lg:col-span-7 text-start flex flex-col justify-between h-full">
                  <div>
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${sectionMeta[2].theme.badgeBg} ${sectionMeta[2].theme.badgeText} text-xs font-bold uppercase mb-4`}>
                      {sectionMeta[2].icon}
                      {isRtl ? sectionMeta[2].theme.label.ar : sectionMeta[2].theme.label.en}
                    </span>
                    <h2 className={`text-3xl font-black ${sectionMeta[2].theme.titleText} font-['Montserrat',_sans-serif] leading-tight mb-2`}>
                      {t.sections.technical.title}
                    </h2>
                    <h4 className="text-lg font-bold text-slate-500 mb-4">
                      {t.sections.technical.subtitle}
                    </h4>
                    <p className="text-slate-600 font-light leading-relaxed mb-6">
                      {t.sections.technical.desc}
                    </p>
                    
                    <div className="mb-8 border-t border-slate-200/50 pt-6">
                      <h5 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-3">
                        {t.sections.technical.focusTitle}
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {t.sections.technical.focusItems.map((item) => (
                          <span key={item} className="px-3 py-1.5 bg-white border border-slate-200 text-slate-700 text-sm font-semibold rounded-xl hover:border-amber-500/40 hover:bg-amber-50/20 transition-all">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <Link
                    href="/corporate-training#proposal"
                    className="inline-flex items-center justify-center gap-2 self-start px-6 py-3 bg-[#002f6c] hover:bg-[#cf1430] text-white text-sm font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
                  >
                    {t.sections.technical.cta}
                    <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRtl ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* 4. International Examination Preparation */}
            <motion.div
              id="exam-preparation"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className={`${sectionMeta[3].theme.bg} border ${sectionMeta[3].theme.border} border-l-4 ${sectionMeta[3].theme.borderLeft} rounded-3xl overflow-hidden shadow-sm hover:shadow-xl ${sectionMeta[3].theme.hoverShadow} transition-all duration-300 p-6 sm:p-8 lg:p-10`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 text-start flex flex-col justify-between h-full order-2 lg:order-1">
                  <div>
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${sectionMeta[3].theme.badgeBg} ${sectionMeta[3].theme.badgeText} text-xs font-bold uppercase mb-4`}>
                      {sectionMeta[3].icon}
                      {isRtl ? sectionMeta[3].theme.label.ar : sectionMeta[3].theme.label.en}
                    </span>
                    <h2 className={`text-3xl font-black ${sectionMeta[3].theme.titleText} font-['Montserrat',_sans-serif] leading-tight mb-2`}>
                      {t.sections.exams.title}
                    </h2>
                    <h4 className="text-lg font-bold text-slate-500 mb-4">
                      {t.sections.exams.subtitle}
                    </h4>
                    <p className="text-slate-600 font-light leading-relaxed mb-6">
                      {t.sections.exams.desc}
                    </p>
                    
                    <div className="mb-8 border-t border-slate-200/50 pt-6">
                      <h5 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-3">
                        {t.sections.exams.focusTitle}
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {t.sections.exams.focusItems.map((item) => (
                          <div key={item} className="flex items-center gap-2 text-sm text-slate-700 font-semibold p-2.5 bg-white border border-slate-150 rounded-xl">
                            <GraduationCap className={`w-4 h-4 ${sectionMeta[3].theme.bullet} shrink-0`} />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <a
                    href="#register-section"
                    onClick={(e) => {
                      e.preventDefault();
                      setForm((prev) => ({ ...prev, course: "ielts" }));
                      scrollToSection("register-section");
                    }}
                    className="inline-flex items-center justify-center gap-2 self-start px-6 py-3 bg-[#002f6c] hover:bg-[#cf1430] text-white text-sm font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
                  >
                    {t.sections.exams.cta}
                    <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRtl ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
                  </a>
                </div>
                <div className="lg:col-span-5 relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-sm order-1 lg:order-2 border border-slate-200">
                  <Image
                    src={sectionMeta[3].image}
                    alt={t.sections.exams.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            </motion.div>

            {/* 5. Young Learners Programs */}
            <motion.div
              id="young-learners"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className={`${sectionMeta[4].theme.bg} border ${sectionMeta[4].theme.border} border-l-4 ${sectionMeta[4].theme.borderLeft} rounded-3xl overflow-hidden shadow-sm hover:shadow-xl ${sectionMeta[4].theme.hoverShadow} transition-all duration-300 p-6 sm:p-8 lg:p-10`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                  <Image
                    src={sectionMeta[4].image}
                    alt={t.sections.young.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="lg:col-span-7 text-start flex flex-col justify-between h-full">
                  <div>
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${sectionMeta[4].theme.badgeBg} ${sectionMeta[4].theme.badgeText} text-xs font-bold uppercase mb-4`}>
                      {sectionMeta[4].icon}
                      {isRtl ? sectionMeta[4].theme.label.ar : sectionMeta[4].theme.label.en}
                    </span>
                    <h2 className={`text-3xl font-black ${sectionMeta[4].theme.titleText} font-['Montserrat',_sans-serif] leading-tight mb-2`}>
                      {t.sections.young.title}
                    </h2>
                    <h4 className="text-lg font-bold text-slate-500 mb-4">
                      {t.sections.young.subtitle}
                    </h4>
                    <p className="text-slate-600 font-light leading-relaxed mb-6">
                      {t.sections.young.desc}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 border-t border-slate-200/50 pt-6">
                      <div>
                        <h5 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-3">
                          {t.sections.young.suitableTitle}
                        </h5>
                        <ul className="space-y-1.5">
                          {t.sections.young.suitableItems.map((item) => (
                            <li key={item} className="flex items-center gap-2 text-sm text-slate-600 font-light">
                              <Check className={`w-4 h-4 ${sectionMeta[4].theme.bullet} shrink-0`} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-3">
                          {t.sections.young.levelsTitle}
                        </h5>
                        <ul className="space-y-1.5">
                          {t.sections.young.levelsItems.map((item) => (
                            <li key={item} className="flex items-center gap-2 text-sm text-slate-600 font-light">
                              <Check className={`w-4 h-4 ${sectionMeta[4].theme.bullet} shrink-0`} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <a
                    href="#register-section"
                    onClick={(e) => {
                      e.preventDefault();
                      setForm((prev) => ({ ...prev, course: "young-learners" }));
                      scrollToSection("register-section");
                    }}
                    className="inline-flex items-center justify-center gap-2 self-start px-6 py-3 bg-[#002f6c] hover:bg-[#cf1430] text-white text-sm font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
                  >
                    {t.sections.young.cta}
                    <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRtl ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* 6. Online & Hybrid Learning */}
            <motion.div
              id="online-hybrid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className={`${sectionMeta[5].theme.bg} border ${sectionMeta[5].theme.border} border-l-4 ${sectionMeta[5].theme.borderLeft} rounded-3xl overflow-hidden shadow-sm hover:shadow-xl ${sectionMeta[5].theme.hoverShadow} transition-all duration-300 p-6 sm:p-8 lg:p-10`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 text-start flex flex-col justify-between h-full order-2 lg:order-1">
                  <div>
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${sectionMeta[5].theme.badgeBg} ${sectionMeta[5].theme.badgeText} text-xs font-bold uppercase mb-4`}>
                      {sectionMeta[5].icon}
                      {isRtl ? sectionMeta[5].theme.label.ar : sectionMeta[5].theme.label.en}
                    </span>
                    <h2 className={`text-3xl font-black ${sectionMeta[5].theme.titleText} font-['Montserrat',_sans-serif] leading-tight mb-2`}>
                      {t.sections.online.title}
                    </h2>
                    <h4 className="text-lg font-bold text-slate-500 mb-4">
                      {t.sections.online.subtitle}
                    </h4>
                    <p className="text-slate-600 font-light leading-relaxed mb-6">
                      {t.sections.online.desc}
                    </p>
                    
                    <div className="mb-8 border-t border-slate-200/50 pt-6">
                      <h5 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-3">
                        {t.sections.online.focusTitle}
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {t.sections.online.focusItems.map((item) => (
                          <span key={item} className="px-3 py-1.5 bg-white text-slate-700 text-sm font-semibold rounded-xl border border-slate-200 hover:border-amber-500/40 hover:bg-amber-50/20 transition-all">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <a
                    href="#register-section"
                    onClick={(e) => {
                      e.preventDefault();
                      setForm((prev) => ({ ...prev, course: "online" }));
                      scrollToSection("register-section");
                    }}
                    className="inline-flex items-center justify-center gap-2 self-start px-6 py-3 bg-[#002f6c] hover:bg-[#cf1430] text-white text-sm font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
                  >
                    {t.sections.online.cta}
                    <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRtl ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
                  </a>
                </div>
                <div className="lg:col-span-5 relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-sm order-1 lg:order-2 border border-slate-200">
                  <Image
                    src={sectionMeta[5].image}
                    alt={t.sections.online.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            </motion.div>

            {/* 7. Private Tuition & Executive Coaching */}
            <motion.div
              id="private-tuition"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className={`${sectionMeta[6].theme.bg} border ${sectionMeta[6].theme.border} border-l-4 ${sectionMeta[6].theme.borderLeft} rounded-3xl overflow-hidden shadow-sm hover:shadow-xl ${sectionMeta[6].theme.hoverShadow} transition-all duration-300 p-6 sm:p-8 lg:p-10`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                  <Image
                    src={sectionMeta[6].image}
                    alt={t.sections.private.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="lg:col-span-7 text-start flex flex-col justify-between h-full">
                  <div>
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${sectionMeta[6].theme.badgeBg} ${sectionMeta[6].theme.badgeText} text-xs font-bold uppercase mb-4`}>
                      {sectionMeta[6].icon}
                      {isRtl ? sectionMeta[6].theme.label.ar : sectionMeta[6].theme.label.en}
                    </span>
                    <h2 className={`text-3xl font-black ${sectionMeta[6].theme.titleText} font-['Montserrat',_sans-serif] leading-tight mb-2`}>
                      {t.sections.private.title}
                    </h2>
                    <h4 className="text-lg font-bold text-slate-500 mb-4">
                      {t.sections.private.subtitle}
                    </h4>
                    <p className="text-slate-600 font-light leading-relaxed mb-6">
                      {t.sections.private.desc}
                    </p>
                    
                    <div className="mb-8 border-t border-slate-200/50 pt-6">
                      <h5 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-3">
                        {t.sections.private.focusTitle}
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {t.sections.private.focusItems.map((item) => (
                          <div key={item} className="flex items-center gap-2 text-sm text-slate-600 font-light">
                            <Check className={`w-4 h-4 ${sectionMeta[6].theme.bullet} shrink-0`} />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <a
                    href="#register-section"
                    onClick={(e) => {
                      e.preventDefault();
                      setForm((prev) => ({ ...prev, course: "private" }));
                      scrollToSection("register-section");
                    }}
                    className="inline-flex items-center justify-center gap-2 self-start px-6 py-3 bg-[#002f6c] hover:bg-[#cf1430] text-white text-sm font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
                  >
                    {t.sections.private.cta}
                    <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRtl ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* 8. Placement Testing & Academic Guidance */}
            <motion.div
              id="placement-testing"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="bg-gradient-to-br from-[#002f6c] to-[#001a3f] text-white rounded-3xl overflow-hidden shadow-xl p-8 sm:p-12 lg:p-16 relative"
            >
              {/* background shapes */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-bl-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-tr-full pointer-events-none" />
              
              <div className="relative z-10 max-w-4xl text-start">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-blue-300 text-xs font-bold uppercase mb-4">
                  <ClipboardCheck className="w-4 h-4" />
                  {isRtl ? "توجيه أكاديمي" : "Assessment & Pathway"}
                </span>
                
                <h2 className="text-3xl sm:text-4xl font-black font-['Montserrat',_sans-serif] leading-tight mb-4">
                  {t.sections.guidance.title}
                </h2>
                <h4 className="text-xl font-bold text-blue-200 mb-6">
                  {t.sections.guidance.subtitle}
                </h4>
                <p className="text-slate-200 font-light text-base sm:text-lg leading-relaxed mb-8 max-w-3xl">
                  {t.sections.guidance.desc}
                </p>
                
                <Link
                  href="/placement-test-booking"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-[#cf1430] text-[#002f6c] hover:text-white text-base font-bold rounded-2xl shadow-lg transition-all duration-300 group"
                >
                  {isRtl ? "احجز اختبار تحديد المستوى" : "Book Placement Assessment"}
                  <ArrowRight className={`w-5 h-5 transition-transform group-hover:translate-x-1.5 ${isRtl ? "rotate-180 group-hover:-translate-x-1.5" : ""}`} />
                </Link>
              </div>
            </motion.div>

            {/* ═════════════════════════════════════════════════════════════ */}
            {/* ─── COLUMN 2: GLOBAL LANGUAGES ─── */}
            {/* ═════════════════════════════════════════════════════════════ */}
            <div className="pt-10 pb-4 border-b-2 border-slate-200">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#002f6c]/10 text-[#002f6c] text-xs font-bold uppercase tracking-wider mb-2">
                <Globe className="w-3.5 h-3.5" />
                {isRtl ? "المحور الثاني: اللغات العالمية" : "Pillar 2: Global Languages"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#002f6c] font-['Montserrat',_sans-serif]">
                {isRtl ? "برامج اللغات العالمية والدراسات الثقافية" : "Global Languages & Cultural Programs"}
              </h2>
            </div>

            {/* 9. Arabic Language & Cultural Studies */}
            <div id="arabic" className="scroll-mt-28" />
            <motion.div
              id="arabic-language"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="bg-[#002f6c]/5 border border-[#002f6c]/20 border-l-4 border-l-[#002f6c] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[#002f6c]/10 transition-all duration-300 p-6 sm:p-8 lg:p-10 scroll-mt-28"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                  <Image
                    src="/lang_arabic.png"
                    alt={t.sections.arabic.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="lg:col-span-7 text-start flex flex-col justify-between h-full">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#002f6c]/10 text-[#002f6c] text-xs font-bold uppercase mb-4">
                      <BookOpen className="w-3.5 h-3.5" />
                      {isRtl ? "تعلم العربية مع IH" : "Learn Arabic with IH"}
                    </span>
                    <h2 className="text-3xl font-black text-[#002f6c] font-['Montserrat',_sans-serif] leading-tight mb-2">
                      {t.sections.arabic.title}
                    </h2>
                    <h4 className="text-lg font-bold text-slate-500 mb-4">
                      {t.sections.arabic.subtitle}
                    </h4>
                    <p className="text-slate-600 font-light leading-relaxed mb-6">
                      {t.sections.arabic.desc}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 border-t border-slate-200/50 pt-6">
                      <div>
                        <h5 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-3">
                          {t.sections.arabic.focusTitle}
                        </h5>
                        <ul className="space-y-1.5">
                          {t.sections.arabic.focusItems.map((item) => (
                            <li key={item} className="flex items-center gap-2 text-sm text-slate-600 font-light">
                              <Check className="w-4 h-4 text-[#002f6c] shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-3">
                          {t.sections.arabic.levelsTitle}
                        </h5>
                        <div className="flex flex-wrap gap-1.5">
                          {t.sections.arabic.levelsItems.map((lvl) => (
                            <span key={lvl} className="px-2.5 py-1 bg-white hover:bg-slate-100 transition-colors text-slate-700 text-xs font-semibold rounded-lg border border-slate-200">
                              {lvl}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    href="#register-section"
                    onClick={(e) => {
                      e.preventDefault();
                      setForm((prev) => ({ ...prev, course: "arabic" }));
                      scrollToSection("register-section");
                    }}
                    className="inline-flex items-center justify-center gap-2 self-start px-6 py-3 bg-[#002f6c] hover:bg-[#cf1430] text-white text-sm font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
                  >
                    {t.sections.arabic.cta}
                    <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRtl ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* 10. Global Languages (French, Spanish, Chinese, etc.) */}
            <motion.div
              id="global-languages"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="bg-[#00d084]/5 border border-[#00d084]/20 border-l-4 border-l-[#00d084] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[#00d084]/10 transition-all duration-300 p-6 sm:p-8 lg:p-10 scroll-mt-28"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 text-start flex flex-col justify-between h-full order-2 lg:order-1">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00d084]/15 text-[#008a55] text-xs font-bold uppercase mb-4">
                      <Languages className="w-3.5 h-3.5" />
                      {isRtl ? "اللغات العالمية (الفرنسية، الإسبانية، الصينية)" : "Global Languages"}
                    </span>
                    <h2 className="text-3xl font-black text-[#008a55] font-['Montserrat',_sans-serif] leading-tight mb-2">
                      {t.sections.globalLanguages.title}
                    </h2>
                    <h4 className="text-lg font-bold text-slate-500 mb-4">
                      {t.sections.globalLanguages.subtitle}
                    </h4>
                    <p className="text-slate-600 font-light leading-relaxed mb-6">
                      {t.sections.globalLanguages.desc}
                    </p>

                    <div className="mb-8 border-t border-slate-200/50 pt-6">
                      <h5 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-3">
                        {t.sections.globalLanguages.focusTitle}
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {t.sections.globalLanguages.focusItems.map((item) => (
                          <div key={item} className="flex items-center gap-2 text-sm text-slate-700 font-semibold p-2.5 bg-white border border-slate-150 rounded-xl">
                            <Check className="w-4 h-4 text-[#00ab6c] shrink-0" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="#register-section"
                      onClick={(e) => {
                        e.preventDefault();
                        setForm((prev) => ({ ...prev, course: "global-languages" }));
                        scrollToSection("register-section");
                      }}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#002f6c] hover:bg-[#cf1430] text-white text-sm font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
                    >
                      {t.sections.globalLanguages.cta}
                      <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRtl ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
                    </a>
                    <Link
                      href="/languages-programs"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-slate-50 text-slate-700 text-sm font-bold rounded-xl border border-slate-200 shadow-sm transition-all"
                    >
                      {isRtl ? "عرض تفاصيل البرامج" : "Detailed Curriculum"}
                      <ArrowRight className={`w-4 h-4 ${isRtl ? "rotate-180" : ""}`} />
                    </Link>
                  </div>
                </div>
                <div className="lg:col-span-5 relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-sm order-1 lg:order-2 border border-slate-200">
                  <Image
                    src="/lang_french.png"
                    alt={t.sections.globalLanguages.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            </motion.div>

            {/* 11. Study Abroad */}
            <div id="study-abroad" className="scroll-mt-28" />
            <motion.div
              id="study-abroad-section"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="bg-[#fcb900]/5 border border-[#fcb900]/20 border-l-4 border-l-[#fcb900] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[#fcb900]/10 transition-all duration-300 p-6 sm:p-8 lg:p-10 scroll-mt-28"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                  <Image
                    src="/dest_london.png"
                    alt={t.sections.studyAbroad.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="lg:col-span-7 text-start flex flex-col justify-between h-full">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fcb900]/15 text-[#b27d00] text-xs font-bold uppercase mb-4">
                      <Compass className="w-3.5 h-3.5" />
                      {isRtl ? "الدراسة والابتعاث بالخارج" : "Personalized International Study"}
                    </span>
                    <h2 className="text-3xl font-black text-[#b27d00] font-['Montserrat',_sans-serif] leading-tight mb-2">
                      {t.sections.studyAbroad.title}
                    </h2>
                    <h4 className="text-lg font-bold text-slate-500 mb-4">
                      {t.sections.studyAbroad.subtitle}
                    </h4>
                    <p className="text-slate-600 font-light leading-relaxed mb-6">
                      {t.sections.studyAbroad.desc}
                    </p>

                    <div className="mb-8 border-t border-slate-200/50 pt-6">
                      <h5 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-3">
                        {t.sections.studyAbroad.focusTitle}
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {t.sections.studyAbroad.focusItems.map((item) => (
                          <div key={item} className="flex items-center gap-2 text-sm text-slate-600 font-light">
                            <Check className="w-4 h-4 text-[#d99e00] shrink-0" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/study-abroad"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#002f6c] hover:bg-[#cf1430] text-white text-sm font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
                    >
                      {t.sections.studyAbroad.cta}
                      <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRtl ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 12. Cultural Learning & International Experiences */}
            <div id="cultural" className="scroll-mt-28" />
            <motion.div
              id="cultural-learning"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="bg-[#9b51e0]/5 border border-[#9b51e0]/20 border-l-4 border-l-[#9b51e0] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[#9b51e0]/10 transition-all duration-300 p-6 sm:p-8 lg:p-10 scroll-mt-28"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 text-start flex flex-col justify-between h-full order-2 lg:order-1">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#9b51e0]/15 text-[#65259e] text-xs font-bold uppercase mb-4">
                      <Sparkles className="w-3.5 h-3.5" />
                      {isRtl ? "تجارب السفر والتبادل الثقافي" : "Cultural Experiences & Travel"}
                    </span>
                    <h2 className="text-3xl font-black text-[#65259e] font-['Montserrat',_sans-serif] leading-tight mb-2">
                      {t.sections.culturalLearning.title}
                    </h2>
                    <h4 className="text-lg font-bold text-slate-500 mb-4">
                      {t.sections.culturalLearning.subtitle}
                    </h4>
                    <p className="text-slate-600 font-light leading-relaxed mb-6">
                      {t.sections.culturalLearning.desc}
                    </p>

                    <div className="mb-8 border-t border-slate-200/50 pt-6">
                      <h5 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-3">
                        {t.sections.culturalLearning.focusTitle}
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {t.sections.culturalLearning.focusItems.map((item) => (
                          <div key={item} className="flex items-center gap-2 text-sm text-slate-600 font-light">
                            <Check className="w-4 h-4 text-[#8038c3] shrink-0" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <a
                    href="#register-section"
                    onClick={(e) => {
                      e.preventDefault();
                      setForm((prev) => ({ ...prev, course: "cultural" }));
                      scrollToSection("register-section");
                    }}
                    className="inline-flex items-center justify-center gap-2 self-start px-6 py-3 bg-[#002f6c] hover:bg-[#cf1430] text-white text-sm font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
                  >
                    {t.sections.culturalLearning.cta}
                    <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRtl ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
                  </a>
                </div>
                <div className="lg:col-span-5 relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-sm order-1 lg:order-2 border border-slate-200">
                  <Image
                    src="/values_mission.png"
                    alt={t.sections.culturalLearning.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            </motion.div>

            {/* ═════════════════════════════════════════════════════════════ */}
            {/* ─── COLUMN 3: ADDITIONAL WORLD LANGUAGES ─── */}
            {/* ═════════════════════════════════════════════════════════════ */}
            <div id="additional-world-languages" className="pt-10 pb-4 border-b-2 border-slate-200 scroll-mt-28">
              <div id="additional" className="scroll-mt-28" />
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#cf1430]/10 text-[#cf1430] text-xs font-bold uppercase tracking-wider mb-2">
                <Languages className="w-3.5 h-3.5" />
                {isRtl ? "المحور الثالث: لغات عالمية إضافية" : "Pillar 3: Additional World Languages"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#002f6c] font-['Montserrat',_sans-serif]">
                {t.sections.additionalLanguages.title}
              </h2>
              <p className="text-slate-600 font-light mt-2 max-w-3xl leading-relaxed">
                {t.sections.additionalLanguages.desc}
              </p>
            </div>

            {/* Grid of the 5 Additional World Languages */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.sections.additionalLanguages.languages.map((langItem) => (
                <motion.div
                  key={langItem.id}
                  id={langItem.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeInUp}
                  className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-red-500/30 transition-all duration-300 flex flex-col justify-between scroll-mt-28 group"
                >
                  <div>
                    <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                      <Image
                        src={langItem.img}
                        alt={langItem.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      <div className="absolute bottom-3 start-3 px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md text-white text-xs font-bold">
                        {langItem.name}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-[#002f6c] mb-2 group-hover:text-[#cf1430] transition-colors">
                        {langItem.name}
                      </h3>
                      <div className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md inline-block mb-3">
                        {langItem.levels}
                      </div>
                      <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed">
                        {langItem.desc}
                      </p>
                    </div>
                  </div>
                  <div className="p-6 pt-0 border-t border-slate-100 mt-4">
                    <a
                      href="#register-section"
                      onClick={(e) => {
                        e.preventDefault();
                        setForm((prev) => ({ ...prev, course: langItem.id }));
                        scrollToSection("register-section");
                      }}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#002f6c] hover:bg-[#cf1430] text-white text-xs font-bold rounded-xl transition-all shadow-sm"
                    >
                      {isRtl ? `التسجيل في دورة ${langItem.name}` : `Register for ${langItem.name}`}
                      <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? "rotate-180" : ""}`} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* ─── SECTION 10: CALL TO ACTION (QUICK ACTIONS) ─── */}
      <section id="courses-cta" className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-[#002f6c] font-['Montserrat',_sans-serif] mb-4">
              {t.cta.title}
            </h2>
            <p className="text-slate-600 font-light text-base sm:text-lg leading-relaxed">
              {t.cta.subtitle}
            </p>
            <div className="w-12 h-1 bg-[#cf1430] mx-auto rounded-full mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Quick Action 1: Placement Test */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white border border-slate-200 rounded-3xl p-8 text-start flex flex-col justify-between group shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all duration-300"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-[#002f6c] group-hover:text-white transition-all">
                  <ClipboardCheck className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-[#002f6c] mb-2">
                  {isRtl ? "تحديد المستوى" : "Placement Assessment"}
                </h4>
                <p className="text-sm font-light text-slate-600 leading-relaxed mb-6">
                  {isRtl 
                    ? "احجز اختبار تحديد المستوى اللغوي لمعرفة رتبتك الأكاديمية والبدء بالمسار الصحيح."
                    : "Schedule a comprehensive evaluation to pinpoint your language level and choose your ideal course."}
                </p>
              </div>
              <a
                href="/register?form=student"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#002f6c] hover:text-[#cf1430] transition-colors"
              >
                {t.cta.placement}
                <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRtl ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
              </a>
            </motion.div>

            {/* Quick Action 2: Explore Options */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-[#00d084] rounded-3xl p-8 text-start flex flex-col justify-between group shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/20 border border-white/20 flex items-center justify-center text-white mb-6 group-hover:bg-white group-hover:text-[#00d084] transition-all">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">
                  {isRtl ? "استكشاف الخيارات" : "Learning Pathways"}
                </h4>
                <p className="text-sm font-light text-white/90 leading-relaxed mb-6">
                  {isRtl 
                    ? "تصفح خيارات الحصص الحضورية، الحصص الحية أونلاين، أو الأنظمة التعليمية الهجينة."
                    : "Find your preferred learning environment: virtual, in-person, private coaching, or group studies."}
                </p>
              </div>
              <button
                onClick={() => scrollToSection("general-english")}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-white hover:text-white/80 transition-colors text-start"
              >
                {t.cta.explore}
                <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRtl ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
              </button>
            </motion.div>

            {/* Quick Action 3: Academic Advisor */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-[#fcb900] rounded-3xl p-8 text-start flex flex-col justify-between group shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/20 border border-white/20 flex items-center justify-center text-white mb-6 group-hover:bg-white group-hover:text-[#fcb900] transition-all">
                  <UserCheck className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">
                  {isRtl ? "مستشار أكاديمي" : "Expert Consultation"}
                </h4>
                <p className="text-sm font-light text-white/90 leading-relaxed mb-6">
                  {isRtl 
                    ? "تحدث مباشرة مع مستشارينا الأكاديميين لتحديد أهدافك المهنية وبناء منهجك الخاص."
                    : "Discuss your professional/personal targets with an advisor to configure a customized roadmap."}
                </p>
              </div>
              <a
                href="/contact?action=consult"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-white hover:text-white/80 transition-colors"
              >
                {t.cta.contact}
                <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRtl ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
              </a>
            </motion.div>

            {/* Quick Action 4: Register Course */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-[#cf1430] rounded-3xl p-8 text-start flex flex-col justify-between group shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/20 border border-white/20 flex items-center justify-center text-white mb-6 group-hover:bg-white group-hover:text-[#cf1430] transition-all">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">
                  {isRtl ? "التسجيل في دورة" : "Course Registration"}
                </h4>
                <p className="text-sm font-light text-white/90 leading-relaxed mb-6">
                  {isRtl 
                    ? "سجل الآن في أحد برامجنا الأكاديمية أو المهنية للبدء في دورتك التدريبية مباشرة."
                    : "Secure your place in our upcoming term. Registration is open for online & physical classes."}
                </p>
              </div>
              <a
                href="#register-section"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-white hover:text-white/80 transition-colors"
              >
                {t.cta.register}
                <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRtl ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
              </a>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 11: INLINE STUDENT REGISTRATION FORM ─── */}
      <section id="register-section" className="py-24 bg-slate-50 border-t border-slate-200 scroll-mt-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#002f6c] mb-3">
              {isRtl ? "سجل الآن في دوراتنا" : "Register for a Course Now"}
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              {isRtl
                ? "املأ هذا النموذج لتأكيد تسجيلك في الدورة وسيتصل بك منسق القبول لدينا."
                : "Fill out this form to register for your preferred language program and start learning."}
            </p>
          </div>

          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="h-1.5 absolute top-0 left-0 right-0 bg-[#002f6c]" />

            {formSubmitted ? (
              <div className="text-center py-10">
                <CheckCircle2 size={48} className="text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-[#002f6c] mb-2">
                  {isRtl ? "تم إرسال طلب التسجيل بنجاح!" : "Registration Submitted Successfully!"}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-md mx-auto">
                  {isRtl
                    ? "نشكرك على التسجيل في معاهد الهاوس الدولي السعودية. سيقوم فريق القبول لدينا بالاتصال بك خلال ٢٤ ساعة لتأكيد موعد الدورة والرسوم واختبار تحديد المستوى."
                    : "Thank you for registering at IH Saudi Arabia. Our admissions team will contact you within 24 hours to confirm schedule availability, placement test, and fees."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                {/* Full Name & Email */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                      {isRtl ? "الاسم الكامل" : "Full Name"} <span className="text-red-500">*</span>
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
                        validationErrors.name ? "border-red-500 bg-red-50/10" : "border-slate-200"
                      }`}
                    />
                    {validationErrors.name && (
                      <p className="text-red-500 text-[10px] mt-1 flex items-center gap-1">
                        <AlertCircle size={10} /> {validationErrors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                      {isRtl ? "البريد الإلكتروني" : "Email Address"} <span className="text-red-500">*</span>
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
                    {validationErrors.email && (
                      <p className="text-red-500 text-[10px] mt-1 flex items-center gap-1">
                        <AlertCircle size={10} /> {validationErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone & Age Group */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                      {isRtl ? "رقم الجوال" : "Phone Number"} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +966 50 000 0000"
                      value={form.phone}
                      onChange={(e) => {
                        setForm({ ...form, phone: e.target.value });
                        if (validationErrors.phone) setValidationErrors({ ...validationErrors, phone: "" });
                      }}
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
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                      {isRtl ? "الفئة العمرية" : "Age Group"} <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      value={form.ageGroup}
                      onChange={(e) => {
                        setForm({ ...form, ageGroup: e.target.value });
                        if (validationErrors.ageGroup) setValidationErrors({ ...validationErrors, ageGroup: "" });
                      }}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 appearance-none cursor-pointer ${
                        validationErrors.ageGroup ? "border-red-500" : "border-slate-200"
                      }`}
                    >
                      <option value="">{isRtl ? "اختر الفئة العمرية" : "Select your age group"}</option>
                      <option value="adult">{isRtl ? "كبار (١٨ سنة فما فوق)" : "Adult (18+ years)"}</option>
                      <option value="young">{isRtl ? "صغار / شباب (٥-١٧ سنة)" : "Young Learner (5-17 years)"}</option>
                    </select>
                    {validationErrors.ageGroup && (
                      <p className="text-red-500 text-[10px] mt-1 flex items-center gap-1">
                        <AlertCircle size={10} /> {validationErrors.ageGroup}
                      </p>
                    )}
                  </div>
                </div>

                {/* Preferred Branch & Course */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                      {isRtl ? "الفرع المفضل" : "Preferred Branch"} <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      value={form.branch}
                      onChange={(e) => setForm({ ...form, branch: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
                    >
                      <option value="">{isRtl ? "اختر الفرع المفضل" : "Select preferred branch"}</option>
                      <option value="dhahran">{isRtl ? "فرع الظهران" : "Dhahran Branch"}</option>
                      <option value="dammam">{isRtl ? "فرع الدمام" : "Dammam Branch"}</option>
                      <option value="jeddah">{isRtl ? "فرع جدة" : "Jeddah Branch"}</option>
                      <option value="online">{isRtl ? "عبر الإنترنت / افتراضي" : "Online / Virtual"}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                      {isRtl ? "الدورة المفضلة" : "Preferred Course"} <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      value={form.course}
                      onChange={(e) => setForm({ ...form, course: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
                    >
                      <option value="">{isRtl ? "اختر الدورة المفضلة" : "Select preferred course"}</option>
                      <optgroup label={isRtl ? "برامج اللغات (الإنجليزية)" : "Language Programs (English)"}>
                        <option value="general">{isRtl ? "اللغة الإنجليزية العامة" : "General English"}</option>
                        <option value="business">{isRtl ? "اللغة الإنجليزية للأعمال" : "Business English"}</option>
                        <option value="technical">{isRtl ? "اللغة الإنجليزية الفنية والتخصصية" : "Technical & Professional English"}</option>
                        <option value="online">{isRtl ? "التعلم عبر الإنترنت والهجين" : "Online & Hybrid Learning"}</option>
                        <option value="young-learners">{isRtl ? "برامج الصغار والشباب" : "Young Learners Program"}</option>
                        <option value="ielts">{isRtl ? "التحضير للاختبارات الدولية (IELTS / Cambridge)" : "International Exam Preparation"}</option>
                        <option value="private">{isRtl ? "الدروس الخصوصية والتدريب الفردي" : "Private Tuition & Coaching"}</option>
                      </optgroup>
                      <optgroup label={isRtl ? "اللغات العالمية" : "Global Languages"}>
                        <option value="arabic">{isRtl ? "اللغة العربية والدراسات الثقافية" : "Arabic Language & Cultural Studies"}</option>
                        <option value="global-languages">{isRtl ? "اللغات العالمية (الفرنسية، الإسبانية، الصينية)" : "Global Languages (French, Spanish, Chinese)"}</option>
                        <option value="study-abroad">{isRtl ? "الدراسة والابتعاث بالخارج" : "Study Abroad Programs"}</option>
                        <option value="cultural">{isRtl ? "التعلم الثقافي والتجارب الدولية" : "Cultural Learning & Experiences"}</option>
                      </optgroup>
                      <optgroup label={isRtl ? "لغات عالمية إضافية" : "Additional World Languages"}>
                        <option value="german">{isRtl ? "الألمانية (Deutsch)" : "German (Deutsch)"}</option>
                        <option value="italian">{isRtl ? "الإيطالية (Italiano)" : "Italian (Italiano)"}</option>
                        <option value="japanese">{isRtl ? "اليابانية (日本語)" : "Japanese (日本語)"}</option>
                        <option value="korean">{isRtl ? "الكورية (한국어)" : "Korean (한국어)"}</option>
                        <option value="turkish">{isRtl ? "التركية (Türkçe)" : "Turkish (Türkçe)"}</option>
                      </optgroup>
                    </select>
                  </div>
                </div>

                {/* Preferred Study Time */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                    {isRtl ? "الوقت المفضل للدراسة" : "Preferred Study Time"} <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    value={form.studyTime}
                    onChange={(e) => setForm({ ...form, studyTime: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
                  >
                    <option value="">{isRtl ? "اختر فترة الدراسة" : "Select study timing"}</option>
                    <option value="morning">{isRtl ? "الصباح" : "Morning"}</option>
                    <option value="afternoon">{isRtl ? "بعد الظهر" : "Afternoon"}</option>
                    <option value="evening">{isRtl ? "المساء" : "Evening"}</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                    {isRtl ? "الرسالة / متطلبات خاصة" : "Message / Requirements"}
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
                      <span>{isRtl ? "جاري الإرسال..." : "Sending..."}</span>
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      <span>{isRtl ? "إرسال طلب التسجيل" : "Submit Registration"}</span>
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
