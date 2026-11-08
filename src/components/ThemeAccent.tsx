"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

interface ThemeAccentProps {
  className?: string;
  /** Height of the stripe bar. Defaults to prominent multi-tier height matching ihworld.com */
  height?: string;
  /** Preserved for backwards compatibility with existing call sites */
  pills?: boolean;
  overlapping?: boolean;
  animate?: boolean;
}

/**
 * Official International House (IH World) Multi-Tier Staggered Rainbow Brand Divider
 * Exact vector replica of https://ihworld.com/wp-content/uploads/2025/01/Rainbow-Bottom.svg
 */
export default function ThemeAccent({
  className = "",
  height,
  pills,
  overlapping,
  animate,
}: ThemeAccentProps) {
  const { isRTL } = useLanguage();

  // Ensure prominent, clearly visible height matching ihworld.com
  let resolvedHeight = "h-8 sm:h-9 md:h-10";
  if (height) {
    if (height.includes("h-1") || height.includes("h-2") || height.includes("h-2.5")) {
      resolvedHeight = "h-7 sm:h-8 md:h-9";
    } else if (height.includes("h-3") || height.includes("h-4") || height.includes("h-5") || height.includes("h-6")) {
      resolvedHeight = "h-8 sm:h-9 md:h-10";
    } else {
      resolvedHeight = height;
    }
  }

  return (
    <div
      className={`w-full overflow-hidden flex items-end select-none pointer-events-none ${resolvedHeight} ${className}`}
      aria-hidden="true"
      dir="ltr"
    >
      <svg
        viewBox="0 0 1440 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-full block"
      >
        <g clipPath="url(#ih-clip-rainbow)">
          <path
            d="M0.00097921 10.7855C0.000979342 9.277 3.821 8.0542 8.521 8.0542L183.461 8.05421L183.461 41.0723L0.000976562 41.0722L0.00097921 10.7855Z"
            fill="#F06C6A"
          />
          <path
            d="M132.352 2.73125C132.352 1.22285 136.172 4.84917e-05 140.872 4.89026e-05L358.392 6.79188e-05C363.102 6.83306e-05 366.922 1.22287 366.922 2.73127L366.922 41.0713L132.352 41.0713L132.352 2.73125Z"
            fill="#E070A2"
          />
          <path
            d="M263.896 10.7855C263.896 9.27696 267.716 8.05416 272.416 8.05416L498.461 8.05418L498.461 41.0722L263.896 41.0722L263.896 10.7855Z"
            fill="#923472"
          />
          <path
            d="M498.444 2.73125C498.444 1.22285 502.26 4.84919e-05 506.967 4.89034e-05L724.484 6.79194e-05C729.192 6.83309e-05 733.008 1.22287 733.008 2.73127L733.008 41.0713L498.444 41.0713L498.444 2.73125Z"
            fill="#3B44B5"
          />
          <path
            d="M733.022 8.05417L916.484 8.05418L916.484 41.0722L733.022 41.0722L733.022 8.05417Z"
            fill="#28AE62"
          />
          <path
            d="M916.478 2.73129C916.478 1.22289 920.294 8.66392e-05 925.001 8.70507e-05L1142.52 0.000106067C1147.23 0.000106478 1151.04 1.22291 1151.04 2.73131L1151.04 41.0713L916.478 41.0713L916.478 2.73129Z"
            fill="#B7DB6E"
          />
          <path
            d="M1099.1 10.7855C1099.1 9.277 1102.92 8.0542 1107.63 8.0542L1282.57 8.05421L1282.57 41.0723L1099.1 41.0722L1099.1 10.7855Z"
            fill="#F4AB63"
          />
          <path
            d="M1231.46 2.73129C1231.46 1.22289 1235.28 8.66396e-05 1239.98 8.70505e-05L1457.5 0.000106067C1462.21 0.000106478 1466.02 1.22291 1466.02 2.73131L1466.02 21.0713C1466.02 32.117 1457.07 41.0713 1446.02 41.0713L1231.46 41.0713L1231.46 2.73129Z"
            fill="#F4CF80"
          />
        </g>
        <defs>
          <clipPath id="ih-clip-rainbow">
            <rect width="1440" height="41" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
