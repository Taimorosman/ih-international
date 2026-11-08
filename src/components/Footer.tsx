"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import ThemeAccent from "./ThemeAccent";
import { useLanguage } from "@/context/LanguageContext";

// Inline SVG social icons
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
);
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const TiktokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.53V6.77a4.85 4.85 0 01-1.02-.08z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const SnapchatIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12.002 2c-3.58 0-6.02 2.77-6.02 6.03 0 1.25.4 2.47 1.05 3.32.18.23.16.48.01.69-.32.44-.94.75-1.52.92-.37.11-.63.41-.65.79-.03.48.33.86.79.94.73.13 1.44.37 1.94.88.22.22.25.54.12.81-.35.73-1.42 1.44-2.45 1.57-.45.06-.78.43-.77.88.01.44.33.81.77.85 1.63.15 3.51-.12 4.96-.92.35-.19.78-.18 1.13.03.74.45 1.76.71 2.82.71 1.06 0 2.08-.26 2.82-.71.35-.21.78-.22 1.13-.03 1.45.8 3.33 1.07 4.96.92.44-.04.76-.41.77-.85.01-.45-.32-.82-.77-.88-1.03-.13-2.1-.84-2.45-1.57-.13-.27-.1-.59.12-.81.5-.51 1.21-.75 1.94-.88.46-.08.82-.46.79-.94-.02-.38-.28-.68-.65-.79-.58-.17-1.2-.48-1.52-.92-.15-.21-.17-.46.01-.69.65-.85 1.05-2.07 1.05-3.32C18.022 4.77 15.582 2 12.002 2z" />
  </svg>
);
const WhatsappIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Footer() {
  const { t, isRTL } = useLanguage();

  const quickLinks = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.who_we_are"), href: "/who-we-are" },
    { label: t("nav.courses"), href: "/courses" },
    { label: t("nav.languages_programs"), href: "/languages-programs" },
    { label: t("nav.corporate_training"), href: "/corporate-training" },
    { label: t("nav.examinations"), href: "/examinations" },
    { label: t("nav.teacher_training"), href: "/teacher-training" },
    { label: t("nav.study_abroad"), href: "/study-abroad" },
    { label: t("nav.careers"), href: "/careers" },
    { label: t("nav.news"), href: "/news" },
    { label: t("nav.faqs"), href: "/faqs" },
    { label: t("nav.contact"), href: "/contact" },
  ];

  const socials = [
    { icon: <FacebookIcon />, href: "https://www.facebook.com/ihsaudiarabia", label: "Facebook" },
    { icon: <TwitterIcon />, href: "https://x.com/ihsaudiarabia", label: "X (Twitter)" },
    { icon: <InstagramIcon />, href: "https://www.instagram.com/ih.saudiarabia/", label: "Instagram" },
    { icon: <TiktokIcon />, href: "https://www.tiktok.com/@ih.saudiarabia", label: "TikTok" },
    { icon: <SnapchatIcon />, href: "https://snapchat.com/t/LOkn6TqI", label: "Snapchat" },
    { icon: <LinkedinIcon />, href: "https://www.linkedin.com/company/international-house-saudi-arabia/", label: "LinkedIn" },
    { icon: <WhatsappIcon />, href: "https://wa.me/966581781000", label: "WhatsApp" },
  ];

  return (
    <footer style={{ background: "var(--color-primary)" }} className="text-white relative z-10 pb-16">
      {/* Official IH World Staggered Rainbow Divider at the top of the footer */}
      <ThemeAccent />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

          {/* Left Column: Brand & Unified Hotline (lg:col-span-4) */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="bg-white px-3.5 py-2 rounded-xl shadow-sm inline-block cursor-pointer hover:opacity-95 transition-opacity"
            >
              <img
                src="/logo.png"
                alt="International House Saudi Arabia"
                className="h-9 w-auto object-contain"
              />
            </Link>

            <p className="text-blue-200 text-xs sm:text-sm leading-relaxed mt-4 max-w-sm">
              {isRTL
                ? "تعليم اللغة الإنجليزية والتدريب الاحترافي بمعايير عالمية في المملكة منذ عام 2001."
                : "World-class English language education & professional training in the Kingdom since 2001."}
            </p>

            <Link
              href="/who-we-are#our-story"
              className="mt-4 inline-flex items-center bg-white/5 hover:bg-white/10 px-3 py-2 rounded-xl border border-white/10 transition-all cursor-pointer hover:scale-105"
              title="Celebrating 70 Years of IH World"
            >
              <img
                src="/ih_70years_v2.png"
                alt="Celebrating 70 Years"
                className="h-10 w-auto object-contain"
              />
            </Link>

            {/* UNIFIED HOTLINE - SINGLE EXCLUSIVE PHONE LOCATION */}
            <div className="mt-6 pt-5 border-t border-white/10 space-y-3">
              <div>
                <span className="text-[11px] font-bold text-blue-300 uppercase tracking-widest block mb-1">
                  {t("footer.hotline")}
                </span>
                <a
                  href="tel:+966920000364"
                  className="inline-flex items-center gap-2.5 text-lg sm:text-xl font-bold text-white hover:text-yellow-300 transition-colors cursor-pointer group"
                >
                  <div className="w-8 h-8 rounded-lg bg-yellow-400/20 text-yellow-300 flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-blue-950 transition-colors shrink-0">
                    <Phone size={15} />
                  </div>
                  <span dir="ltr">+966 920 000 364</span>
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs sm:text-sm text-blue-200">
                <Mail size={13} className="text-blue-300 shrink-0" />
                <a
                  href="mailto:info@ih-saudiarabia.com"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  info@ih-saudiarabia.com
                </a>
              </div>
            </div>
          </div>

          {/* Middle Column: Quick Links & Follow Us (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h3 className="font-bold text-xs uppercase tracking-widest text-blue-300 mb-4">
              {t("footer.quick_links")}
            </h3>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-2 text-xs">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => {
                      if (typeof window !== "undefined" && window.location.pathname === link.href) {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }}
                    className="text-blue-100 hover:text-white hover:translate-x-1 rtl:hover:-translate-x-1 inline-block transition-all cursor-pointer font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-5 border-t border-white/10">
              <h3 className="font-bold text-xs uppercase tracking-widest text-blue-300 mb-3">
                {t("footer.follow")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110 cursor-pointer shadow-sm"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Full Detailed Branch Addresses (lg:col-span-5 - TOP RIGHT) */}
          <div className="lg:col-span-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-xs uppercase tracking-widest text-blue-300 flex items-center gap-1.5">
                <MapPin size={14} className="text-yellow-400" />
                <span>{t("footer.branches")}</span>
              </h3>
              <Link
                href="/contact#branches"
                className="text-[11px] text-blue-300 hover:text-white transition-colors underline font-medium"
              >
                {isRTL ? "عرض الخريطة ←" : "View on map →"}
              </Link>
            </div>

            <div className="space-y-3">
              {/* Riyadh Branch */}
              <div className="bg-white/5 hover:bg-white/10 rounded-xl p-3 border border-white/10 transition-colors">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#f06c6a] shrink-0" />
                    <h4 className="font-bold text-xs text-white">
                      {isRTL ? "مقر الرياض (المركز الرئيسي)" : "Riyadh Branch (Headquarters)"}
                    </h4>
                  </div>
                  <a
                    href="https://maps.google.com/?cid=5495258829300967609"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-yellow-300 hover:underline flex items-center gap-0.5 shrink-0"
                  >
                    <span>{isRTL ? "الخريطة" : "Map"}</span>
                    <span className="text-[10px]">↗</span>
                  </a>
                </div>
                <p className="text-[11px] text-blue-200 leading-relaxed ps-4">
                  {isRTL
                    ? "مركز الموسى السكني والتجاري، برج رقم 3، بوابة 9، الدور الأول، حي العليا، الرياض 12221"
                    : "Al-Mousa Residential & Commercial Center, Tower 3, Gate 9, 1st Floor, Al Olaya District, Riyadh 12221"}
                </p>
              </div>

              {/* Jeddah Branch */}
              <div className="bg-white/5 hover:bg-white/10 rounded-xl p-3 border border-white/10 transition-colors">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#28ae62] shrink-0" />
                    <h4 className="font-bold text-xs text-white">
                      {isRTL ? "فرع جدة" : "Jeddah Branch"}
                    </h4>
                  </div>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Al+Badriah+Towers+Jeddah+Saudi+Arabia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-yellow-300 hover:underline flex items-center gap-0.5 shrink-0"
                  >
                    <span>{isRTL ? "الخريطة" : "Map"}</span>
                    <span className="text-[10px]">↗</span>
                  </a>
                </div>
                <p className="text-[11px] text-blue-200 leading-relaxed ps-4">
                  {isRTL
                    ? "الدور الرابع، أبراج البدرية، شارع الروضة، حي الخالدية، مدينة جدة"
                    : "4th Floor, Al Badriah Towers, Al Rawdah Street, Al Khalidiyah District, Jeddah"}
                </p>
              </div>

              {/* Dammam Branch */}
              <div className="bg-white/5 hover:bg-white/10 rounded-xl p-3 border border-white/10 transition-colors">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#3b44b5] shrink-0" />
                    <h4 className="font-bold text-xs text-white">
                      {isRTL ? "فرع الدمام والظهران" : "Dammam & Dhahran Branch"}
                    </h4>
                  </div>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Al+Sughaiyer+Tower+Dammam+Saudi+Arabia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-yellow-300 hover:underline flex items-center gap-0.5 shrink-0"
                  >
                    <span>{isRTL ? "الخريطة" : "Map"}</span>
                    <span className="text-[10px]">↗</span>
                  </a>
                </div>
                <p className="text-[11px] text-blue-200 leading-relaxed ps-4">
                  {isRTL
                    ? "الدور الثامن، مبنى رقم 7057، طريق الأمير محمد بن فهد الفرعي، حي المنتزه، الدمام 34242"
                    : "8th Floor, Bldg No. 7057, Al Amir Muhammed Bin Fahd Branch Road, Al Muntazah District, Dammam 34242"}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-blue-300">{t("footer.copyright")}</p>
          <p className="text-xs text-blue-400">
            Affiliated with{" "}
            <a
              href="https://ihworld.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white cursor-pointer font-medium"
            >
              IH World Organization
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
