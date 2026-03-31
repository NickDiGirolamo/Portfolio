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

        <div className="mt-14 grid gap-5 xl:grid-cols-3">
          {siteContent.testimonials.map((item, index) => (
            <Reveal key={`${item.name}-${item.title}`} delay={index * 0.05}>
              <blockquote className="glass-panel h-full rounded-[2rem] p-7">
                <p className="text-2xl leading-10 tracking-[-0.04em] text-white/88">
                  “{item.quote}”
                </p>
                <footer className="mt-10 border-t border-white/8 pt-6">
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
