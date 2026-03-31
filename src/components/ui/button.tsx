import Link from "next/link";
import { type ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  const isExternal = href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:");

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={cn(
        "group inline-flex items-center justify-center rounded-full border px-5 py-3 text-sm font-semibold tracking-[0.16em] uppercase transition-all duration-300",
        variant === "primary" &&
          "border-white/20 bg-white text-black shadow-[0_8px_30px_rgba(255,255,255,0.14)] hover:-translate-y-0.5 hover:bg-white/92",
        variant === "secondary" &&
          "border-white/12 bg-white/6 text-white backdrop-blur-xl hover:-translate-y-0.5 hover:border-white/22 hover:bg-white/10",
        variant === "ghost" &&
          "border-transparent bg-transparent text-white/72 hover:text-white",
        className,
      )}
    >
      {children}
    </Link>
  );
}
