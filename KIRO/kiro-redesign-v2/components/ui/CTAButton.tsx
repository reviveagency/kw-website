import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "flame" | "ghost";

type Props = Omit<ComponentProps<typeof Link>, "children"> & {
  variant?: Variant;
  children: ReactNode;
  icon?: ReactNode;
};

export function CTAButton({
  variant = "flame",
  className,
  children,
  icon,
  ...rest
}: Props) {
  return (
    <Link
      {...rest}
      className={cn(variant === "flame" ? "btn-flame" : "btn-ghost", className)}
    >
      {children}
      {icon}
    </Link>
  );
}
