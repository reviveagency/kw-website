"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { LINKS } from "@/lib/links";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Experiências", href: "#experiencias" },
  { label: "Preços", href: "#precos" },
  { label: "Grupos", href: "#grupos" },
  { label: "Escola", href: "#escola" },
  { label: "Contactos", href: "#contactos" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-[background,border,backdrop-filter] duration-300",
          scrolled
            ? "bg-black/55 backdrop-blur-xl border-b border-white/8"
            : "bg-transparent border-b border-transparent",
        )}
      >
        <div className="container-page flex items-center justify-between h-16 md:h-[72px]">
          <Link
            href="#top"
            className="flex items-center gap-2 -ml-1"
            aria-label="KIRO Karting"
          >
            {/* Replace with vector version of Kiro_logo when provided. */}
            <Image
              src="/images/kiro-logo.png"
              alt="KIRO Karting · Kartódromo do Oeste"
              width={229}
              height={221}
              priority
              className="h-10 md:h-11 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-nav text-[15px] uppercase text-ink-muted hover:text-ink transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href={LINKS.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-flame !py-2.5 !px-4 text-sm hidden sm:inline-flex"
            >
              Marcar sessão
            </Link>
            <button
              type="button"
              aria-label="Abrir menu"
              onClick={() => setOpen(true)}
              className="lg:hidden inline-flex items-center justify-center size-10 rounded-full border border-white/12 hover:border-white/30 hover:bg-white/5 transition-colors"
            >
              <Menu size={18} strokeWidth={2} />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] lg:hidden bg-black/90 backdrop-blur-xl"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ y: -16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="container-page pt-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between h-16">
              <Image
                src="/images/kiro-logo.png"
                alt="KIRO Karting"
                width={229}
                height={221}
                className="h-10 w-auto"
              />
              <button
                type="button"
                aria-label="Fechar menu"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center size-10 rounded-full border border-white/12"
              >
                <X size={18} strokeWidth={2} />
              </button>
            </div>
            <nav className="mt-6 flex flex-col gap-1">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-4 text-2xl font-display uppercase border-b border-white/8"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link
              href={LINKS.booking}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn-flame mt-8 w-full justify-center"
            >
              Marcar sessão
            </Link>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
