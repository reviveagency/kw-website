"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";

const ease = [0.16, 1, 0.3, 1] as const;

export function GroupsSection() {
  return (
    <section
      id="grupos"
      className="relative section-surface py-24 md:py-32 border-y border-white/8"
    >
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-6">
            <SectionHeading
              title="Grupos, aniversários e empresas"
              subcopy="Para grupos, o melhor caminho é pedir disponibilidade. A equipa pode confirmar horários, formato, número de pilotos e opções de restauração."
            />

            <ul className="mt-10 space-y-3">
              <motion.li
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, ease, delay: 0.05 }}
                className="flex items-center gap-3 py-3 border-b border-white/8 text-base"
              >
                <span
                  aria-hidden
                  className="inline-block size-1.5 rounded-full bg-flame"
                />
                Amigos e famílias
              </motion.li>
            </ul>

            <div className="mt-10">
              <GroupForm />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease }}
            className="lg:col-span-6 relative aspect-[4/5] lg:aspect-[5/6] rounded-2xl overflow-hidden border border-white/10 media-placeholder"
          >
            {/* Replace with real KIRO group/event lifestyle photography. */}
            <Image
              src="/images/group-event.webp"
              alt="Grupo em pista no Kartódromo do Oeste"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(7,7,10,0) 60%, rgba(7,7,10,0.7) 100%)",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function GroupForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="rounded-2xl bg-white text-[color:var(--color-light-ink)] p-6 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)]">
      <h3 className="font-display text-xl text-[color:var(--color-light-ink)]">
        Pedir proposta
      </h3>
      <p className="mt-2 text-sm text-[color:var(--color-light-ink-muted)]">
        Respondemos em menos de 24 horas.
      </p>

      {sent ? (
        <div className="mt-5 rounded-xl border border-flame/30 bg-flame-soft p-4 flex items-start gap-3">
          <CheckCircle2
            size={18}
            className="text-flame mt-0.5 shrink-0"
            strokeWidth={2.2}
          />
          <div>
            <div className="font-medium text-[color:var(--color-light-ink)]">
              Pedido enviado.
            </div>
            <p className="text-sm text-[color:var(--color-light-ink-muted)] mt-1">
              A equipa entra em contacto para confirmar a proposta.
            </p>
          </div>
        </div>
      ) : (
        <form className="mt-5 space-y-3" onSubmit={onSubmit}>
          <Input name="nome" placeholder="Nome" />
          <Input name="email" type="email" placeholder="Email" />
          <div className="grid grid-cols-2 gap-3">
            <Input
              name="pessoas"
              type="number"
              min={2}
              placeholder="Nº pessoas"
            />
            <Input name="data" type="date" placeholder="Data pretendida" />
          </div>
          <button
            type="submit"
            className="btn-flame w-full justify-center mt-2"
          >
            Pedir proposta
          </button>
        </form>
      )}
    </div>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full h-11 rounded-lg px-3 bg-white border border-black/15 text-sm text-[color:var(--color-light-ink)] placeholder:text-[color:var(--color-light-ink-faint)] focus:outline-none focus:border-flame transition-colors"
      style={{ colorScheme: "light" }}
    />
  );
}
