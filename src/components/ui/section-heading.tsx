import { type ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  action?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  action,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "mx-auto max-w-3xl items-center text-center",
      )}
    >
      <span className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.34em] text-white/48 uppercase">
        <span className="h-px w-12 bg-white/16" />
        {eyebrow}
      </span>
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className={cn("max-w-3xl", align === "center" && "mx-auto")}>
          <h2 className="text-balance text-4xl font-semibold tracking-[-0.05em] text-white md:text-5xl lg:text-6xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-5 max-w-3xl text-pretty text-base leading-8 text-white/64 md:text-lg">
              {description}
            </p>
          ) : null}
        </div>
        {action ? <div className="shrink-0">{action}</div> : null}
      </div>
    </div>
  );
}
