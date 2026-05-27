"use client";

import Link from "next/link";
import { LINKS } from "@/lib/links";

export function MobileBottomCTA() {
  return (
    <div
      className="lg:hidden fixed bottom-0 inset-x-0 z-40 px-3 pb-3 pt-2"
      style={{
        background:
          "linear-gradient(180deg, rgba(7,7,10,0) 0%, rgba(7,7,10,0.85) 60%, rgba(7,7,10,1) 100%)",
      }}
    >
      <div className="grid grid-cols-2 gap-2 rounded-full p-1.5 border border-white/10 bg-black/70 backdrop-blur-xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)]">
        {/* Replace this with KIRO's real booking/calendar system or custom booking flow. */}
        <Link
          href={LINKS.booking}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center h-11 rounded-full text-sm font-semibold bg-flame text-white"
        >
          Marcar sessão
        </Link>
        <Link
          href={LINKS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center h-11 rounded-full text-sm font-medium text-ink border border-white/12"
        >
          WhatsApp
        </Link>
      </div>
    </div>
  );
}
