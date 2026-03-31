import { siteContent } from "@/data/site-content";

import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";

export function AboutSection() {
  return (
    <section id="about" className="section-spacing relative">
      <Container>
        <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_420px] xl:items-center">
          <Reveal>
            <SectionHeading
              eyebrow={siteContent.about.eyebrow}
              title={siteContent.about.title}
              description={siteContent.about.summary}
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {siteContent.about.bullets.map((bullet, index) => (
                <Reveal
                  key={bullet}
                  delay={index * 0.06}
                  className="rounded-[1.75rem] border border-white/8 bg-white/[0.04] p-5"
                >
                  <p className="text-base leading-7 text-white/66">{bullet}</p>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="glass-panel relative overflow-hidden rounded-[2rem] p-8 md:p-10">
              <div className="absolute -top-16 right-0 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(113,217,255,0.26),transparent_70%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent_45%)]" />
              <div className="relative space-y-5">
                <div className="rounded-[1.75rem] border border-white/8 bg-[linear-gradient(160deg,rgba(255,255,255,0.12),rgba(255,255,255,0.03))] p-7">
                  <p className="text-xs font-semibold tracking-[0.3em] text-white/46 uppercase">
                    Operating style
                  </p>
                  <p className="mt-5 text-3xl leading-10 tracking-[-0.05em] text-white/92">
                    Strategic enough for the boardroom, hands-on enough to build the system.
                  </p>
                  <p className="mt-5 text-base leading-7 text-white/62">
                    This panel now reinforces your positioning with language and structure rather than repeating the portrait. It gives the section more balance and keeps the photo treatment feeling premium.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {siteContent.about.highlights.map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.25rem] border border-white/10 bg-white/[0.04] px-4 py-4 text-xs font-semibold tracking-[0.22em] text-white/62 uppercase"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
