import { siteContent } from "@/data/site-content";

import { AnimatedCounter } from "../ui/animated-counter";
import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";

export function ResultsSection() {
  return (
    <section id="results" className="section-spacing relative">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Proof"
            title="Commercial Results"
            description="Quantifiable impact across revenue growth, partner performance, and program scalability."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 md:mt-14 md:grid-cols-2 md:gap-5 xl:grid-cols-3">
          {siteContent.metrics.map((metric, index) => (
            <Reveal
              key={metric.label}
              delay={index * 0.05}
              className="glass-panel group rounded-[1.7rem] p-5 transition-transform duration-300 hover:-translate-y-1 md:rounded-[2rem] md:p-7"
            >
              <p className="text-xs font-semibold tracking-[0.3em] text-white/40 uppercase">
                Metric {String(index + 1).padStart(2, "0")}
              </p>
              <div className="mt-6 flex items-end gap-1 text-4xl font-semibold tracking-[-0.08em] text-white md:mt-8 md:text-6xl">
                <AnimatedCounter
                  value={metric.value}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                />
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-[-0.04em] text-white md:mt-6 md:text-2xl">
                {metric.label}
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/58 md:text-base md:leading-7">{metric.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
