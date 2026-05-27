"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Flame, Zap } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { LINKS } from "@/lib/links";
import { cn } from "@/lib/utils";

const ease = [0.16, 1, 0.3, 1] as const;

type Tier = {
  name: string;
  age: string;
  priceFrom: string;
  cta: string;
  featured?: boolean;
  experience?: boolean;
};

const TIERS: Tier[] = [
  {
    name: "Júnior 120/200cc",
    age: "8–14 anos",
    priceFrom: "€23,50",
    cta: "Marcar sessão",
  },
  {
    name: "Adulto 270cc",
    age: "Maiores de 15 anos",
    priceFrom: "€29",
    cta: "Marcar sessão",
    featured: true,
  },
  {
    name: "Adulto 390cc",
    age: "Maiores de 16 anos",
    priceFrom: "€34,50",
    cta: "Marcar sessão",
  },
  {
    name: "Experiência 2T",
    age: "Para pilotos experientes",
    priceFrom: "€82",
    cta: "Pedir disponibilidade",
    experience: true,
  },
];

export function PricingSection() {
  return (
    <section
      id="precos"
      className="relative section-black pt-24 md:pt-32 pb-20 md:pb-24"
    >
      <div className="container-page">
        <SectionHeading
          title="Preços"
          subcopy="Escolhe o kart e a duração. Sem letra pequena."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease, delay: 0.05 + i * 0.06 }}
            >
              <PricingCard tier={tier} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

function PricingCard({ tier }: { tier: Tier }) {
  const { featured, experience } = tier;
  return (
    <div
      className={cn(
        "relative flex flex-col h-full rounded-2xl p-6 border transition-colors",
        experience
          ? // Visually distinct: deeper black, light cool border, signals different product category
            "border-white/30 bg-black"
          : featured
            ? "border-flame/50 bg-white/[0.03]"
            : "border-white/10 bg-white/[0.02] hover:border-white/20",
      )}
    >
      {featured && (
        <div className="absolute top-4 right-4 inline-flex items-center gap-1 text-xs text-flame-accent font-medium">
          <Flame size={11} strokeWidth={2.4} />
          Mais comum
        </div>
      )}
      {experience && (
        <div className="absolute top-4 right-4 inline-flex items-center gap-1 text-xs text-ink-muted font-medium uppercase tracking-wider">
          <Zap size={11} strokeWidth={2.4} />
          Avançado
        </div>
      )}

      <h3 className="font-display text-lg leading-snug pr-24">{tier.name}</h3>
      <p
        className={cn(
          "mt-1 text-sm",
          experience ? "text-ink-faint" : "text-ink-muted",
        )}
      >
        {tier.age}
      </p>

      <div className="mt-8">
        <div className="text-xs text-ink-faint">Desde</div>
        <div className="mt-1 font-display text-4xl tabular-nums">
          {tier.priceFrom}
        </div>
      </div>

      {/* Replace this with KIRO's real booking/calendar system or custom booking flow. */}
      <Link
        href={LINKS.booking}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "mt-8 inline-flex items-center justify-center gap-2 h-11 rounded-full text-sm font-semibold transition-colors",
          featured
            ? "btn-flame"
            : experience
              ? "border border-white/40 text-ink hover:bg-white hover:text-black"
              : "border border-white/15 text-ink hover:bg-white/5 hover:border-white/30",
        )}
      >
        {tier.cta}
      </Link>
    </div>
  );
}
