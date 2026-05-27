"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { LINKS } from "@/lib/links";

const ease = [0.16, 1, 0.3, 1] as const;

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <PerspectiveBackground />

      <div className="container-page relative text-center">
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.95, ease }}
          className="font-display uppercase text-[clamp(2.4rem,7vw,5.5rem)] max-w-[16ch] mx-auto"
        >
          Pronto para entrar em pista?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease, delay: 0.15 }}
          className="mt-5 text-base md:text-lg text-ink-muted max-w-[44ch] mx-auto"
        >
          Escolhe a sessão, marca a hora e chega pronto para correr.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease, delay: 0.3 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          {/* Replace this with KIRO's real booking/calendar system or custom booking flow. */}
          <Link
            href={LINKS.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-flame text-base !py-3.5 !px-6"
          >
            Marcar sessão
          </Link>
          <Link
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost text-base !py-3.5 !px-6"
          >
            <MessageCircle size={16} strokeWidth={2.2} />
            Falar no WhatsApp
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/**
 * Perspective-grid background. Two layers:
 *  1. Static rays from points along the bottom edge converging on the
 *     vanishing point at (50%, 45%).
 *  2. Animated "road markings" — short transverse dashes drifting along
 *     the centerline toward the vanishing point at ~40px/s. Honors
 *     prefers-reduced-motion via a CSS media query that disables the
 *     animation.
 */
function PerspectiveBackground() {
  // Rays: 13 segments along the bottom edge from x=0 to x=100 (vw units).
  // Vanishing point: (50, 45) in viewBox units of 100 x 100.
  const VP = { x: 50, y: 45 };
  const RAY_COUNT = 13;

  return (
    <div
      aria-hidden
      className="absolute inset-0 -z-10 overflow-hidden"
      style={{
        background: "linear-gradient(to top, #0c0c0c 0%, #1a1a1a 100%)",
      }}
    >
      <svg
        className="absolute inset-0 size-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        focusable="false"
        aria-hidden
      >
        {/* Perspective rays (static) */}
        <g stroke="white" strokeOpacity="0.1" strokeWidth="0.12" fill="none">
          {Array.from({ length: RAY_COUNT }).map((_, i) => {
            const x = (i / (RAY_COUNT - 1)) * 100;
            return (
              <line key={`ray-${i}`} x1={x} y1={100} x2={VP.x} y2={VP.y} />
            );
          })}
          {/* Bottom-left and bottom-right deep rays — slightly brighter */}
          <line x1={0} y1={100} x2={VP.x} y2={VP.y} strokeOpacity="0.16" />
          <line x1={100} y1={100} x2={VP.x} y2={VP.y} strokeOpacity="0.16" />
        </g>

        {/* Animated road markings on the centerline */}
        <g className="road-marks" stroke="white" strokeOpacity="0.18">
          {/* 3 transverse-ish dashes spaced down the center line */}
          <line x1="48" y1="62" x2="52" y2="62" strokeWidth="0.5" />
          <line x1="46.5" y1="76" x2="53.5" y2="76" strokeWidth="0.7" />
          <line x1="44.5" y1="92" x2="55.5" y2="92" strokeWidth="0.9" />
        </g>
      </svg>

      {/* Subtle vignette + cool horizon glow at the vanishing point. */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(40% 30% at 50% 45%, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0) 70%)",
        }}
      />

    </div>
  );
}
