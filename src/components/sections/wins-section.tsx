import { siteContent } from "@/data/site-content";

import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";

export function WinsSection() {
  return (
    <section id="wins" className="section-spacing relative">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Signature Wins"
            title="Portfolio Highlights"
            description="Great careers are defined by the results that endure."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 xl:grid-cols-3">
          {siteContent.caseStudies.map((study, index) => (
            <Reveal key={study.title} delay={index * 0.05}>
              <article className="glass-panel h-full rounded-[2rem] p-7">
                {study.brand ? (
                  study.logo ? (
                    <div className="mb-5 flex justify-center rounded-[1.2rem] border border-white/8 bg-black/20 px-4 py-3">
                      <img
                        src={study.logo.src}
                        alt={study.logo.alt}
                        className={`h-auto w-auto ${
                          study.logo.alt === "Ethos Mask logo" ? "max-w-[104px]" : "max-w-[160px]"
                        } ${
                          study.logo.alt === "Structure Tone logo" ? "max-w-[185px]" : ""
                        } ${
                          study.logo.alt === "Structure Tone logo" ? "-my-4" : ""
                        }`}
                      />
                    </div>
                  ) : (
                    <div
                      className={`mb-5 inline-flex items-center gap-3 rounded-full px-4 py-2 text-xs font-semibold tracking-[0.18em] uppercase ${
                        study.brandColor === "teal"
                          ? "border border-[#29c7c7]/25 bg-[#29c7c7]/10 text-[#7ee7e7]"
                          : study.brandColor === "blue"
                            ? "border border-[#295bda]/25 bg-[#295bda]/10 text-[#92b3ff]"
                          : "border border-[#3dcd58]/25 bg-[#3dcd58]/10 text-[#7ae18f]"
                      }`}
                    >
                      <span
                        className={`h-2.5 w-2.5 rounded-full ${
                          study.brandColor === "teal"
                            ? "bg-[#29c7c7]"
                            : study.brandColor === "blue"
                              ? "bg-[#295bda]"
                            : "bg-[#3dcd58]"
                        }`}
                        aria-hidden="true"
                      />
                      {study.brand}
                    </div>
                  )
                ) : null}
                <p className="text-xs font-semibold tracking-[0.28em] text-white/55 uppercase">
                  Selected case {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-5 text-3xl font-semibold tracking-[-0.05em] text-white">
                  {study.title}
                </h3>

                <div className="mt-8 space-y-6">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.24em] text-[var(--accent-soft)] uppercase">
                      Challenge
                    </p>
                    <p className="mt-2 text-base leading-7 text-white/64">{study.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-[0.24em] text-[var(--accent-soft)] uppercase">
                      Action
                    </p>
                    <p className="mt-2 text-base leading-7 text-white/64">{study.action}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-[0.24em] text-[var(--accent-soft)] uppercase">
                      Result
                    </p>
                    <p className="mt-2 text-base leading-7 text-white/64">{study.result}</p>
                  </div>
                </div>

                <div className="mt-8 rounded-[1.5rem] border border-white/8 bg-black/25 p-5">
                  <p className="text-xs font-semibold tracking-[0.24em] text-white/70 uppercase">
                    Business impact
                  </p>
                  <p className="mt-3 text-base leading-7 text-white/68">{study.impact}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
