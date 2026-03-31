import { siteContent } from "@/data/site-content";

import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";

export function TestimonialsSection() {
  return (
    <section className="section-spacing relative">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Social Proof"
            title="Testimonials"
            description="What others say about your work is the most powerful proof of its&nbsp;impact."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 md:mt-14 md:gap-5 xl:grid-cols-3">
          {siteContent.testimonials.map((item, index) => (
            <Reveal key={`${item.name}-${item.title}`} delay={index * 0.05}>
              <blockquote className="glass-panel h-full rounded-[1.7rem] p-5 md:rounded-[2rem] md:p-7">
                <p className="text-xl leading-8 tracking-[-0.04em] text-white/88 md:text-2xl md:leading-10">
                  “{item.quote}”
                </p>
                <footer className="mt-7 border-t border-white/8 pt-5 md:mt-10 md:pt-6">
                  <p className="text-sm font-semibold tracking-[0.18em] text-white uppercase">
                    {item.name}
                  </p>
                  <p className="mt-2 text-sm text-white/48">{item.title}</p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
