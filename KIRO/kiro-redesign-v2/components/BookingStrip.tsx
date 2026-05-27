"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Flag, Clock, Users, Calendar } from "lucide-react";
import { LINKS } from "@/lib/links";
import { cn } from "@/lib/utils";

const ease = [0.16, 1, 0.3, 1] as const;

const SESSION_TYPES = ["Individual", "Grupo"] as const;
const DURATIONS = ["15 min", "30 min", "45 min", "60 min"] as const;

export function BookingStrip() {
  const [sessionType, setSessionType] = useState<string>("Individual");
  const [duration, setDuration] = useState<string>("15 min");

  return (
    <section
      aria-label="Marcar sessão"
      className="relative section-black z-10"
    >
      <div className="container-page py-10 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease }}
          className="rounded-2xl border border-black/10 bg-white p-6 md:p-8 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.45)]"
        >
          <div className="flex flex-col lg:flex-row lg:items-end gap-8">
            <div className="lg:max-w-xs shrink-0">
              <h2 className="font-display text-[clamp(1.5rem,2.5vw,1.9rem)] text-[color:var(--color-light-ink)]">
                Marca a tua sessão
              </h2>
              <p className="mt-2 text-sm text-[color:var(--color-light-ink-muted)]">
                Escolhe o kart, a duração e a data pretendida.
              </p>
            </div>

            <div className="flex-1 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              <Field label="Tipo de sessão" icon={<Flag size={13} strokeWidth={2} />}>
                <div className="flex flex-wrap gap-1.5">
                  {SESSION_TYPES.map((id) => {
                    const active = sessionType === id;
                    return (
                      <button
                        key={id}
                        type="button"
                        onClick={() => setSessionType(id)}
                        className={cn(
                          "px-3 h-9 rounded-full text-sm border transition-colors",
                          active
                            ? "bg-flame text-white border-flame"
                            : "border-black/15 text-[color:var(--color-light-ink-muted)] hover:text-[color:var(--color-light-ink)] hover:border-black/40",
                        )}
                      >
                        {id}
                      </button>
                    );
                  })}
                </div>
              </Field>

              <Field label="Duração" icon={<Clock size={13} strokeWidth={2} />}>
                <div className="flex flex-wrap gap-1.5">
                  {DURATIONS.map((d) => {
                    const active = duration === d;
                    return (
                      <button
                        key={d}
                        type="button"
                        onClick={() => setDuration(d)}
                        className={cn(
                          "min-w-[58px] h-9 rounded-full text-sm border transition-colors px-2.5",
                          active
                            ? "bg-[color:var(--color-light-ink)] text-white border-[color:var(--color-light-ink)]"
                            : "border-black/15 text-[color:var(--color-light-ink-muted)] hover:text-[color:var(--color-light-ink)] hover:border-black/40",
                        )}
                      >
                        {d}
                      </button>
                    );
                  })}
                </div>
              </Field>

              <Field label="Pilotos" icon={<Users size={13} strokeWidth={2} />}>
                <input
                  type="number"
                  min={1}
                  placeholder="Número de pilotos"
                  className="w-full h-11 rounded-lg px-3 bg-white border border-black/15 text-sm text-[color:var(--color-light-ink)] placeholder:text-[color:var(--color-light-ink-faint)] focus:outline-none focus:border-flame transition-colors"
                />
              </Field>

              <Field label="Data" icon={<Calendar size={13} strokeWidth={2} />}>
                <input
                  type="date"
                  className="w-full h-11 rounded-lg px-3 bg-white border border-black/15 text-sm text-[color:var(--color-light-ink)] placeholder:text-[color:var(--color-light-ink-faint)] focus:outline-none focus:border-flame transition-colors"
                  style={{ colorScheme: "light" }}
                />
              </Field>
            </div>
          </div>

          <p className="mt-6 text-sm text-[color:var(--color-light-ink-muted)]">
            Para grupos, aniversários ou empresas,{" "}
            <Link
              href="#contactos"
              className="font-medium text-[color:var(--color-light-ink)] underline underline-offset-4 decoration-black/30 hover:decoration-black/80 transition-colors"
            >
              fala connosco
            </Link>
            .
          </p>

          <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-end gap-3 pt-6 border-t border-black/10">
            {/* Replace this with KIRO's real booking/calendar system or custom booking flow. */}
            <Link
              href={LINKS.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-flame w-full md:w-auto justify-center"
            >
              Ver disponibilidade
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Field({
  label,
  icon,
  children,
}: {
  label: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-1.5 text-sm text-[color:var(--color-light-ink-muted)] mb-2">
        {icon && (
          <span className="text-[color:var(--color-light-ink-faint)]">
            {icon}
          </span>
        )}
        {label}
      </div>
      {children}
    </div>
  );
}
