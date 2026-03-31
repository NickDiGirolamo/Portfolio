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

        <div className="mt-10 grid gap-4 md:mt-14 md:grid-cols-2 md:gap-5 xl:grid-cols-3">
          {siteContent.strengths.map((strength, index) => {
            const Icon = strength.icon;

            return (
              <Reveal key={strength.title} delay={index * 0.04}>
                <div className="glass-panel group rounded-[1.7rem] p-5 transition-transform duration-300 hover:-translate-y-1 md:rounded-[2rem] md:p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/8 md:h-14 md:w-14 md:rounded-2xl">
                    <Icon className="h-5 w-5 text-[var(--accent)] md:h-6 md:w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-[-0.04em] text-white md:mt-7 md:text-2xl">
                    {strength.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/58 md:text-base md:leading-7">
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
