"use client";

import Image from "next/image";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  useScroll,
  animate,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useRef } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

type Stat =
  | { kind: "number"; value: number; suffix?: string; label: string }
  | { kind: "text"; value: string; label: string };

const STATS: Stat[] = [
  { kind: "number", value: 1225, suffix: "m", label: "de pista" },
  { kind: "number", value: 70, suffix: "+", label: "variantes" },
  { kind: "text", value: "Bombarral", label: "complexo outdoor" },
  {
    kind: "text",
    value: "Todas as idades",
    label: "jovens, adultos e grupos",
  },
];

export function StatsSection() {
  return (
    <section className="relative section-black">
      <ParallaxImage />

      <StatsBand />
    </section>
  );
}

function ParallaxImage() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // image translates at ~60% of scroll speed → so when the container moves by H,
  // the image moves by 0.4H in the opposite-ish direction (slower). We render the
  // image taller (110%) and offset Y between -10% and 0%.
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "0%"]);

  return (
    <div
      ref={ref}
      className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden media-placeholder"
    >
      <motion.div
        className="absolute inset-x-0 top-0 h-[110%]"
        style={reduce ? undefined : { y }}
      >
        {/* Replace src with real aerial photo or video of KIRO track. */}
        <Image
          src="/images/track-aerial.webp"
          alt="Vista aérea do Kartódromo do Oeste"
          fill
          sizes="100vw"
          priority={false}
          className="object-cover"
        />
      </motion.div>

      {/* Dark gradient rising from bottom — terminates at the exact stats-band bg
         color so the seam between image and band is invisible. */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,20,20,0) 35%, rgba(20,20,20,0.75) 75%, #141414 100%)",
        }}
      />

      <div className="absolute inset-x-0 bottom-0">
        <div className="container-page pb-10 md:pb-14">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.85, ease }}
            className="font-display text-[clamp(2rem,5vw,3.6rem)] text-white"
          >
            A pista
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease, delay: 0.12 }}
            className="mt-3 max-w-2xl text-base md:text-lg text-white/80 leading-relaxed"
          >
            O Kartódromo do Oeste combina pista outdoor, zonas de apoio,
            restauração, loja e estrutura para grupos e eventos. Iluminação
            disponível para sessões noturnas.
          </motion.p>
        </div>
      </div>
    </div>
  );
}

function StatsBand() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div
      ref={ref}
      className="relative border-b border-white/8"
      style={{ background: "#141414" }}
    >
      <div className="container-page">
        <div className="grid grid-cols-4 divide-x divide-white/8">
          {STATS.map((stat) => (
            <StatBlock key={stat.label} stat={stat} inView={inView} />
          ))}
        </div>
      </div>
    </div>
  );
}

function StatBlock({
  stat,
  inView,
}: {
  stat: Stat;
  inView: boolean;
}) {
  return (
    <div className="px-3 md:px-6 py-10 md:py-14 first:pl-0 last:pr-0 min-w-0">
      <div className="font-display text-[clamp(1.7rem,4.8vw,4.3rem)] leading-[1.05] tracking-tight tabular-nums">
        {stat.kind === "number" ? (
          <CountUp to={stat.value} suffix={stat.suffix} inView={inView} />
        ) : (
          <FadeIn inView={inView}>
            <span className="block whitespace-nowrap text-[clamp(1.15rem,2.9vw,2.4rem)]">
              {stat.value}
            </span>
          </FadeIn>
        )}
      </div>
      <div className="mt-3 text-xs md:text-sm text-ink-muted leading-snug">
        {stat.label}
      </div>
    </div>
  );
}

function CountUp({
  to,
  suffix,
  inView,
}: {
  to: number;
  suffix?: string;
  inView: boolean;
}) {
  const reduce = useReducedMotion();
  const mv = useMotionValue(reduce ? to : 0);
  const rounded = useTransform(mv, (v) => {
    const n = Math.round(v);
    const formatted =
      to >= 1000 ? n.toLocaleString("pt-PT") : n.toString();
    return `${formatted}${suffix ?? ""}`;
  });

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(mv, to, {
      duration: 1.5,
      ease: [0, 0, 0.2, 1], // ease-out
    });
    return controls.stop;
  }, [inView, mv, to, reduce]);

  return <motion.span>{rounded}</motion.span>;
}

function FadeIn({
  inView,
  children,
}: {
  inView: boolean;
  children: React.ReactNode;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <span className="block">{children}</span>;
  return (
    <motion.span
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}
      className="block"
    >
      {children}
    </motion.span>
  );
}
