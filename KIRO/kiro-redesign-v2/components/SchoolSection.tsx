"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "./ui/SectionHeading";
import { LINKS } from "@/lib/links";

const ease = [0.16, 1, 0.3, 1] as const;

const BULLETS = [
  "Técnica de condução",
  "Segurança em pista",
  "Evolução acompanhada",
  "Primeira experiência competitiva",
];

export function SchoolSection() {
  return (
    <section id="escola" className="relative section-black py-24 md:py-32">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Image — left on desktop, top on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease }}
            className="lg:col-span-6 lg:order-1 relative aspect-[4/3] lg:aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 media-placeholder"
          >
            {/* Replace with photo of KIRO school session, helmet or piloto júnior. */}
            <Image
              src="/images/karting-school.webp"
              alt="Escola de karting KIRO"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(17,17,17,0) 65%, rgba(17,17,17,0.6) 100%)",
              }}
            />
          </motion.div>

          {/* Text — right on desktop */}
          <div className="lg:col-span-6 lg:order-2">
            <SectionHeading
              title="Escola de Karting"
              subcopy="Formação para jovens pilotos que querem aprender técnica, segurança e controlo em pista."
            />

            <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3 text-base">
              {BULLETS.map((b, i) => (
                <motion.li
                  key={b}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, ease, delay: 0.04 + i * 0.05 }}
                  className="flex items-center gap-3 py-2"
                >
                  <span
                    aria-hidden
                    className="inline-block size-1.5 rounded-full bg-flame"
                  />
                  {b}
                </motion.li>
              ))}
            </ul>

            <div className="mt-10">
              <Link
                href={LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-flame"
              >
                Falar sobre a escola
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
