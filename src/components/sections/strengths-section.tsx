import { siteContent } from "@/data/site-content";

import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";

export function StrengthsSection() {
  return (
    <section id="strengths" className="section-spacing relative">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Leadership Strengths"
            title="Strengths"
            description="“Do not wish to be anything but what you are, and try to be that perfectly.” — Saint&nbsp;Francis&nbsp;de&nbsp;Sales"
          />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {siteContent.strengths.map((strength, index) => {
            const Icon = strength.icon;

            return (
              <Reveal key={strength.title} delay={index * 0.04}>
                <div className="glass-panel group rounded-[2rem] p-7 transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/8">
                    <Icon className="h-6 w-6 text-[var(--accent)]" />
                  </div>
                  <h3 className="mt-7 text-2xl font-semibold tracking-[-0.04em] text-white">
                    {strength.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-white/58">
                    {strength.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
