import { siteContent } from "@/data/site-content";

import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-spacing relative">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Career Timeline"
            description="“Life is a journey, not a destination.” — Ralph Waldo Emerson"
          />
        </Reveal>

        <div className="relative mt-12 space-y-6 before:absolute before:top-0 before:bottom-0 before:left-3 before:w-px before:bg-gradient-to-b before:from-transparent before:via-white/16 before:to-transparent md:mt-16 md:space-y-8 md:before:left-1/2">
          {siteContent.experience.map((item, index) => (
            <Reveal key={`${item.company}-${item.role}`} delay={index * 0.06}>
              <div className="relative grid gap-4 md:grid-cols-2 md:gap-10">
                <div className={index % 2 === 0 ? "md:pr-12" : "md:order-2 md:pl-12"}>
                  <div className="glass-panel rounded-[1.7rem] p-5 md:rounded-[2rem] md:p-7">
                    <p className="text-xs font-semibold tracking-[0.3em] text-white/42 uppercase">
                      {item.timeframe}
                    </p>
                    <h3 className="mt-4 text-2xl font-semibold tracking-[-0.05em] text-white md:mt-5 md:text-3xl">
                      {item.role}
                    </h3>
                    <p className="mt-2 text-base text-[var(--accent-soft)] md:text-lg">{item.company}</p>
                    <p className="mt-4 text-sm leading-6 text-white/62 md:mt-5 md:text-base md:leading-7">{item.summary}</p>
                    <ul className="mt-5 space-y-3 text-sm leading-6 text-white/58 md:mt-6 md:leading-7">
                      {item.achievements.map((achievement) => (
                        <li key={achievement} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 rounded-[1.3rem] border border-white/8 bg-black/25 px-4 py-4 text-sm leading-6 text-white/68 md:mt-6 md:rounded-[1.5rem] md:leading-7">
                      {item.impact}
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 0 ? "md:pl-12" : "md:order-1 md:pr-12"}>
                  <div className="hidden h-full items-center md:flex">
                    <div className="w-full rounded-[2rem] border border-white/8 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-7">
                      {item.logo ? (
                        <div className="mb-5 flex min-h-[96px] items-center justify-center overflow-hidden rounded-[1.4rem] border border-white/8 bg-black/20 px-4 py-3">
                          <img
                            src={item.logo.src}
                            alt={item.logo.alt}
                            className={`h-auto w-auto ${
                              item.logo.alt === "Ethos Mask logo" ? "max-w-[104px]" : "max-w-[180px]"
                            } ${
                              item.logo.alt === "Structure Tone logo" ? "max-w-[200px]" : ""
                            } ${
                              item.logo.alt === "Structure Tone logo" ? "-my-6" : ""
                            }`}
                          />
                        </div>
                      ) : item.logos ? (
                        <div className="mb-5 flex items-center justify-center gap-4 rounded-[1.4rem] border border-white/8 bg-black/20 p-4">
                          {item.logos.map((logo, logoIndex) => (
                            <div key={logo.src} className="flex items-center gap-4">
                              {logoIndex > 0 ? (
                                <span className="h-10 w-px bg-white/14" aria-hidden="true" />
                              ) : null}
                              <img
                                src={logo.src}
                                alt={logo.alt}
                                className={`h-auto w-auto ${
                                  logo.alt === "EV Connect logo" ? "max-w-[140px]" : "max-w-[120px]"
                                }`}
                              />
                            </div>
                          ))}
                        </div>
                      ) : null}
                      <p className="text-xs font-semibold tracking-[0.28em] text-white/40 uppercase">
                        Role narrative
                      </p>
                      <p className="mt-6 text-2xl leading-10 tracking-[-0.04em] text-white/90">
                        {item.role} at {item.company} represents a clear step in leadership scope, commercial sophistication, and systems ownership.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute left-3 top-9 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full border border-[var(--accent)]/45 bg-black shadow-[0_0_28px_rgba(113,217,255,0.45)] md:left-1/2 md:top-10 md:h-6 md:w-6">
                  <div className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
