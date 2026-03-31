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
      <span className="inline-flex items-center gap-3 text-[0.65rem] font-semibold tracking-[0.28em] text-white/48 uppercase md:text-xs md:tracking-[0.34em]">
        <span className="h-px w-12 bg-white/16" />
        {eyebrow}
      </span>
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className={cn("max-w-3xl", align === "center" && "mx-auto")}>
          <h2 className="text-balance text-3xl font-semibold tracking-[-0.05em] text-white md:text-5xl lg:text-6xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 max-w-full text-pretty text-sm leading-7 text-white/64 md:mt-5 md:max-w-none md:whitespace-nowrap md:text-lg md:leading-8">
              {description}
            </p>
          ) : null}
        </div>
        {action ? <div className="shrink-0">{action}</div> : null}
      </div>
    </div>
  );
}
