import { siteContent } from "@/data/site-content";

import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";

export function BadgesStrip() {
  return (
    <section className="relative py-8">
      <Container>
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-3 rounded-[2rem] border border-white/8 bg-white/[0.03] px-4 py-4">
            {siteContent.badges.map((badge) => {
              const Icon = badge.icon;
              return (
                <div
                  key={badge.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-black/20 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-white/58 uppercase"
                >
                  <Icon className="h-3.5 w-3.5 text-[var(--accent)]" />
                  {badge.label}
                </div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
