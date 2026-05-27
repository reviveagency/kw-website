"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { LINKS } from "@/lib/links";
import { cn } from "@/lib/utils";

const ease = [0.16, 1, 0.3, 1] as const;

type Review = {
  name: string;
  text: string;
};

// Real Google Reviews. Daniel S is featured as the pull quote above.
const PULL_QUOTE: Review = {
  name: "Daniel S",
  text: "Owner is a F3 European champion and an enthusiast that was happy to chat with us.",
};

const REVIEWS: Review[] = [
  {
    name: "Kenster66",
    text: "Excellent place to have fun and go fast. They supply everything needed to have a great day carting. No membership required. Open to public. Believe me…these karts are very fast.",
  },
  {
    name: "Irish Layug",
    text: "Friendly staff, speak multiple languages and explain well enough about karting for the 1st timer. Recommended!",
  },
  {
    name: "Luis Rolão",
    text: "A pista é variada em curvas e declives, o asfalto está bom, o staff é simpático e os karts de 270cm3 são recentes e rápidos. Para quem gosta de desportos motorizados é uma experiência muito boa, principalmente se for com um grupo grande. Recomendo.",
  },
  {
    name: "Filipa Marques",
    text: "Espaço agradável, com staff muito profissional e preocupado com a segurança dos participantes. Sitio ideal para grupos que depois da corrida querem almoçar em conjunto.",
  },
];

const AUTO_INTERVAL_MS = 5000;

export function ReviewsSection() {
  return (
    <section className="relative section-black pt-24 md:pt-32 pb-24 md:pb-32">
      <div className="container-page">
        <PullQuote review={PULL_QUOTE} />

        <ReviewCarousel reviews={REVIEWS} />

        <div className="mt-10 flex justify-center">
          <Link
            href={LINKS.reviews}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-flame"
          >
            Ver Google Reviews
          </Link>
        </div>
      </div>
    </section>
  );
}

function PullQuote({ review }: { review: Review }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.9, ease }}
      className="mt-0 max-w-4xl mx-auto text-center"
    >
      {/* Spoken testimonial — use body sans-serif so character case renders
         naturally; the display font (Bebas) renders glyphs as all-caps. */}
      <blockquote className="text-[clamp(1.5rem,3.4vw,2.1rem)] leading-[1.32] text-ink font-normal">
        <span className="text-flame-accent">&ldquo;</span>
        {review.text}
        <span className="text-flame-accent">&rdquo;</span>
      </blockquote>
      <figcaption className="mt-6 flex flex-col items-center gap-2">
        <Stars />
        <div className="text-sm text-ink-muted">{review.name}</div>
        <div className="text-xs text-ink-faint">Avaliação Google</div>
      </figcaption>
    </motion.figure>
  );
}

function ReviewCarousel({ reviews }: { reviews: Review[] }) {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(1);

  // 1 card on mobile, 2 cards on lg+
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setPerView(mq.matches ? 2 : 1);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const total = reviews.length;
  const maxIndex = Math.max(total - perView, 0);

  const next = useCallback(() => {
    setIndex((i) => (i >= maxIndex ? 0 : i + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setIndex((i) => (i <= 0 ? maxIndex : i - 1));
  }, [maxIndex]);

  // Auto-advance every 5s
  useEffect(() => {
    const id = window.setInterval(next, AUTO_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [next]);

  // Derive a clamped index in render so resizing the viewport never leaves
  // the carousel parked past its last valid slide.
  const safeIndex = Math.min(index, maxIndex);
  const slideWidthPct = 100 / perView;
  const translatePct = -(safeIndex * slideWidthPct);

  return (
    <div className="mt-12 md:mt-16">
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translate3d(${translatePct}%, 0, 0)` }}
        >
          {reviews.map((r) => (
            <div
              key={r.name}
              className="shrink-0 px-2"
              style={{ flex: `0 0 ${slideWidthPct}%` }}
            >
              <ReviewCard review={r} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={prev}
          aria-label="Avaliação anterior"
          className="inline-flex items-center justify-center size-10 rounded-full border border-white/15 hover:border-white/40 hover:bg-white/5 transition-colors"
        >
          <ChevronLeft size={18} strokeWidth={2} />
        </button>
        <div className="flex items-center gap-1.5">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Ir para slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={cn(
                "h-1.5 rounded-full transition-all",
                i === safeIndex ? "w-6 bg-flame" : "w-1.5 bg-white/25",
              )}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={next}
          aria-label="Próxima avaliação"
          className="inline-flex items-center justify-center size-10 rounded-full border border-white/15 hover:border-white/40 hover:bg-white/5 transition-colors"
        >
          <ChevronRight size={18} strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="card p-6 md:p-7 h-full flex flex-col">
      <Stars />
      <p className="mt-4 text-base text-ink-muted leading-relaxed">
        {review.text}
      </p>
      <div className="mt-6 pt-5 border-t border-white/8 flex items-center justify-between">
        <span className="text-sm font-medium text-ink">{review.name}</span>
        <span className="text-xs text-ink-faint">Avaliação Google</span>
      </div>
    </article>
  );
}

function Stars() {
  return (
    <div
      aria-label="Cinco estrelas"
      className="inline-flex items-center gap-0.5"
      style={{ color: "#fbbf24" }}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} strokeWidth={1.5} fill="currentColor" />
      ))}
    </div>
  );
}
