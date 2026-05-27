"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle, Clock } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { LINKS } from "@/lib/links";

const ease = [0.16, 1, 0.3, 1] as const;

// Google Maps embed for Kartódromo do Oeste (KIRO).
// Lat/Lng from the venue place link.
const MAPS_EMBED_SRC =
  "https://www.google.com/maps?q=KIRO+Karting+International+West+Region+Bombarral&ll=39.266304,-9.1884174&z=15&output=embed";

export function ContactSection() {
  return (
    <section
      id="contactos"
      className="relative section-surface py-24 md:py-32 border-t border-white/8"
    >
      <div className="container-page">
        <SectionHeading
          title="Estamos em Bombarral"
        />

        <div className="mt-12 grid lg:grid-cols-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease }}
            className="lg:col-span-5 card p-7"
          >
            <h3 className="font-display text-xl">Kartódromo do Oeste</h3>
            <p className="text-ink-muted mt-1">Bombarral, Portugal</p>

            <div className="mt-7 flex flex-wrap gap-2">
              <Link
                href={LINKS.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-flame !py-2.5 !px-4 text-sm"
              >
                <MapPin size={14} strokeWidth={2.4} />
                Abrir no Google Maps
              </Link>
              <Link
                href={LINKS.phone}
                className="btn-ghost !py-2.5 !px-4 text-sm"
              >
                <Phone size={14} strokeWidth={2.2} />
                Ligar agora
              </Link>
              <Link
                href={LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost !py-2.5 !px-4 text-sm"
              >
                <MessageCircle size={14} strokeWidth={2.2} />
                WhatsApp
              </Link>
            </div>

            <div className="mt-6 pt-6 border-t border-white/8 space-y-1.5 text-sm">
              <div className="flex items-center gap-2 text-ink-muted">
                <Phone size={13} strokeWidth={2} className="text-ink-faint" />
                <Link
                  href={LINKS.phone}
                  className="hover:text-ink transition-colors tabular-nums"
                >
                  {LINKS.phoneDisplay}
                </Link>
              </div>
              <div className="flex items-center gap-2 text-ink-muted">
                <MessageCircle
                  size={13}
                  strokeWidth={2}
                  className="text-ink-faint"
                />
                <Link
                  href={LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ink transition-colors tabular-nums"
                >
                  {LINKS.phoneDisplay}
                </Link>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/8">
              <div className="flex items-center gap-2 text-sm text-ink-muted">
                <Clock size={13} strokeWidth={2} className="text-ink-faint" />
                Horários
              </div>
              <p className="mt-2 text-sm text-ink-faint">
                Horários a confirmar com a equipa KIRO.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease, delay: 0.1 }}
            className="lg:col-span-7 relative aspect-[5/4] lg:aspect-auto rounded-2xl border border-white/10 overflow-hidden media-placeholder"
          >
            <iframe
              src={MAPS_EMBED_SRC}
              title="Kartódromo do Oeste — Google Maps"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 size-full grayscale-[0.2] contrast-110"
              style={{ border: 0, filter: "invert(0.92) hue-rotate(180deg)" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
