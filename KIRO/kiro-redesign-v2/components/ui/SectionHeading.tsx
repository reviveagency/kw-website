"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: ReactNode;
  title: ReactNode;
  subcopy?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

const ease = [0.16, 1, 0.3, 1] as const;

export function SectionHeading({
  eyebrow,
  title,
  subcopy,
  align = "left",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "max-w-[60ch]",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, ease }}
          className="text-sm text-flame-accent font-medium"
        >
          {eyebrow}
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.75, ease, delay: 0.05 }}
        className="font-display mt-3 text-[clamp(1.75rem,3.6vw,2.75rem)]"
      >
        {title}
      </motion.h2>
      {subcopy && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease, delay: 0.15 }}
          className="mt-4 text-base md:text-lg text-ink-muted leading-relaxed"
        >
          {subcopy}
        </motion.p>
      )}
    </div>
  );
}
