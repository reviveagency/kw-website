"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Gauge, Radio } from "lucide-react";
import { LINKS } from "@/lib/links";

const ease = [0.16, 1, 0.3, 1] as const;

const TITLE_WORDS = ["Karting", "outdoor", "em", "Bombarral."];
const WORD_STAGGER_S = 0.09; // 90ms
const WORD_DURATION_S = 0.5;
const LAST_WORD_END_S =
  (TITLE_WORDS.length - 1) * WORD_STAGGER_S + WORD_DURATION_S;
const SUBHEAD_DELAY_S = LAST_WORD_END_S + 0.15; // +150ms after last word
const CTA_DELAY_S = SUBHEAD_DELAY_S + 0.1; // +100ms after subheadline starts

export function Hero() {
  const reduce = useReducedMotion();
  const [videoReady, setVideoReady] = useState(false);

  return (
    <section
      id="top"
      className="relative h-screen overflow-hidden bg-black"
    >
      <div className="absolute inset-0 -z-10 bg-black">
        {/* Replace src with KIRO official footage when available.
            Fades in on canplay to avoid the poster/first-frame flash. */}
        <video
          className="size-full object-cover transition-opacity duration-300 ease-out"
          style={{ opacity: videoReady ? 1 : 0 }}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onCanPlay={() => setVideoReady(true)}
        >
          <source src="/videos/KIROAI_HEROVIDEO.mp4" type="video/mp4" />
        </video>
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.35) 40%, rgba(0,0,0,0.95) 100%)",
          }}
        />
      </div>

      {/* Content sits in the lower 55% of the hero with top clearance from nav. */}
      <div className="absolute inset-x-0 bottom-0 h-[55vh] flex items-end pb-14 md:pb-20">
        <div className="container-page w-full">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-display text-[clamp(2.6rem,7.4vw,5.6rem)] uppercase max-w-[14ch] leading-[0.95]">
                {reduce ? (
                  <>
                    Karting outdoor em
                    <br />
                    Bombarral.
                  </>
                ) : (
                  TITLE_WORDS.map((word, i) => {
                    const isLast = i === TITLE_WORDS.length - 1;
                    return (
                      <span
                        key={`${word}-${i}`}
                        // Force the final word onto its own line; gap between
                        // inline-block spans is preserved with a margin so the
                        // animation logic stays unchanged.
                        className={
                          isLast
                            ? "block overflow-hidden align-baseline"
                            : "inline-block overflow-hidden align-baseline mr-[0.25em]"
                        }
                      >
                        <motion.span
                          className="inline-block"
                          initial={{ opacity: 0, y: 25 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: WORD_DURATION_S,
                            ease: "easeOut",
                            delay: i * WORD_STAGGER_S,
                          }}
                        >
                          {word}
                        </motion.span>
                      </span>
                    );
                  })
                )}
              </h1>

              <motion.p
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: reduce ? 0 : SUBHEAD_DELAY_S,
                }}
                className="font-display uppercase mt-5 text-[clamp(1.3rem,3.2vw,2.2rem)] text-ink-muted max-w-[28ch]"
              >
                Escolhe a sessão. Marca a hora.{" "}
                <span className="text-ink">Vem correr.</span>
              </motion.p>

              <motion.div
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: reduce ? 0 : CTA_DELAY_S,
                }}
                className="mt-8 flex flex-wrap items-center gap-3"
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
                  href="#precos"
                  className="btn-ghost text-base !py-3.5 !px-6"
                >
                  Ver preços
                </Link>
              </motion.div>

              <motion.p
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: reduce ? 0 : CTA_DELAY_S + 0.2,
                }}
                className="mt-5 text-sm text-ink-faint"
              >
                Reserva recomendada para fins de semana e grupos.
              </motion.p>
            </div>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease,
                delay: reduce ? 0 : CTA_DELAY_S,
              }}
              className="lg:col-span-4 lg:justify-self-end w-full max-w-[22rem]"
            >
              <LapCard />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LapCard() {
  return (
    <div className="relative rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md p-5">
      <div className="flex items-center gap-2 text-xs text-ink-faint">
        <Gauge size={13} strokeWidth={2.2} />
        Recorde atual
      </div>
      <div className="mt-2 font-display text-[2.6rem] leading-none tracking-tight tabular-nums">
        00:47<span className="text-flame-accent">.892</span>
      </div>
      <div className="mt-4 pt-4 border-t border-white/8 flex items-center justify-between gap-3">
        <span className="text-sm text-ink-muted">Pronto para bater?</span>
        <Link
          href={LINKS.liveTiming}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-flame-accent hover:text-flame-warm transition-colors"
        >
          <span className="relative inline-flex">
            <Radio size={12} strokeWidth={2.2} />
            <span
              aria-hidden
              className="absolute -right-1 -top-1 size-1.5 rounded-full bg-flame animate-pulse"
            />
          </span>
          Live timing em pista
        </Link>
      </div>
    </div>
  );
}
