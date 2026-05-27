"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Gauge, Users, Gift, Briefcase, GraduationCap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { LINKS } from "@/lib/links";
import { cn } from "@/lib/utils";

const ease = [0.16, 1, 0.3, 1] as const;

type Card = {
  title: string;
  copy: string;
  cta: string;
  href: string;
  image: string;
  Icon: LucideIcon;
};

// Replace image paths with real KIRO photography when available.
const CARDS: Card[] = [
  {
    title: "Sessão individual",
    copy: "Para pilotos que querem reservar uma sessão e entrar em pista.",
    cta: "Marcar sessão",
    href: LINKS.booking,
    image: "/images/session-individual.webp",
    Icon: Gauge,
  },
  {
    title: "Grupos",
    copy: "Corridas para amigos, famílias e grupos com horários a confirmar.",
    cta: "Reservar grupo",
    href: "#grupos",
    image: "/images/groups.webp",
    Icon: Users,
  },
  {
    title: "Aniversários",
    copy: "Karting como atividade principal de uma celebração.",
    cta: "Pedir proposta",
    href: "#grupos",
    image: "/images/birthday.webp",
    Icon: Gift,
  },
  {
    title: "Empresas",
    copy: "Eventos de equipa, competição e restauração num só espaço.",
    cta: "Organizar evento",
    href: "#grupos",
    image: "/images/corporate.webp",
    Icon: Briefcase,
  },
  {
    title: "Escola",
    copy: "Formação para jovens pilotos com acompanhamento técnico.",
    cta: "Conhecer escola",
    href: "#escola",
    image: "/images/school.webp",
    Icon: GraduationCap,
  },
];

// Bento layout:
//  Row 1 — Sessão individual (largest, 7/12)  +  Grupos (5/12)
//  Row 2 — Aniversários (6/12)                +  Empresas (6/12)
//  Row 3 — Escola (full width, 12/12)
const SPANS = [
  { col: "lg:col-span-7", ratio: "aspect-[16/10]", size: "feature-lg" },
  { col: "lg:col-span-5", ratio: "aspect-[4/3]", size: "feature-md" },
  { col: "lg:col-span-6", ratio: "aspect-[4/3]", size: "standard" },
  { col: "lg:col-span-6", ratio: "aspect-[4/3]", size: "standard" },
  { col: "lg:col-span-12", ratio: "aspect-[21/9]", size: "feature-lg" },
] as const;

export function ExperienceCards() {
  return (
    <section
      id="experiencias"
      className="relative section-surface py-24 md:py-32"
    >
      <div className="container-page">
        <SectionHeading
          title="Escolhe a tua experiência"
          subcopy="Marca uma sessão individual, um grupo ou um evento."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-4">
          {CARDS.map((c, i) => {
            const span = SPANS[i];
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  ease,
                  delay: 0.04 + (i % 3) * 0.06,
                }}
                className={span.col}
              >
                <ExperienceCard
                  card={c}
                  ratio={span.ratio}
                  size={span.size}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({
  card,
  ratio,
  size,
}: {
  card: Card;
  ratio: string;
  size: "feature-lg" | "feature-md" | "standard";
}) {
  const isBooking = card.href === LINKS.booking;
  const Icon = card.Icon;
  return (
    <Link
      href={card.href}
      target={isBooking ? "_blank" : undefined}
      rel={isBooking ? "noopener noreferrer" : undefined}
      className="group block relative overflow-hidden rounded-xl border border-white/10 hover:border-white/25 transition-colors h-full"
    >
      <div className={cn("relative", ratio)}>
        {/* Replace with real KIRO photo at this path. */}
        <Image
          src={card.image}
          alt={card.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <div
          aria-hidden
          className="absolute inset-0 media-placeholder -z-10"
        />
        {/* consistent dark overlay across every card */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(7,7,10,0.05) 0%, rgba(7,7,10,0.45) 50%, rgba(7,7,10,0.9) 100%)",
          }}
        />
        <span
          aria-hidden
          className="absolute top-4 left-4 inline-flex items-center justify-center size-9 rounded-full border border-white/15 bg-black/30 backdrop-blur-sm text-ink"
        >
          <Icon size={15} strokeWidth={2} />
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
        <h3
          className={cn(
            "font-display",
            size === "feature-lg"
              ? "text-2xl md:text-3xl"
              : size === "feature-md"
                ? "text-xl md:text-2xl"
                : "text-xl",
          )}
        >
          {card.title}
        </h3>
        <p className="mt-2 text-sm md:text-base text-ink-muted max-w-[44ch]">
          {card.copy}
        </p>
        <div className="mt-4 text-sm font-medium text-flame-warm">
          {card.cta}
        </div>
      </div>
    </Link>
  );
}
