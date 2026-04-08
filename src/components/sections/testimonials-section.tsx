"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

import { siteContent } from "@/data/site-content";

import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";

const desktopVisibleCount = 3;

export function TestimonialsSection() {
  const [startIndex, setStartIndex] = useState(0);
  const totalTestimonials = siteContent.testimonials.length;
  const maxStartIndex = Math.max(totalTestimonials - desktopVisibleCount, 0);
  const visibleCount = Math.min(desktopVisibleCount, totalTestimonials);

  const visibleTestimonials = Array.from({ length: visibleCount }, (_, offset) => {
    return siteContent.testimonials[(startIndex + offset) % totalTestimonials];
  });

  const goToPrevious = () => {
    setStartIndex((current) => (current === 0 ? maxStartIndex : current - 1));
  };

  const goToNext = () => {
    setStartIndex((current) => (current >= maxStartIndex ? 0 : current + 1));
  };

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

        <div className="mt-10 md:mt-14">
          <div className="mb-5 flex items-center justify-between gap-4 md:mb-7">
            <p className="text-xs font-semibold tracking-[0.28em] text-white/40 uppercase">Selected endorsements</p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={goToPrevious}
                className="glass-panel flex h-11 w-11 items-center justify-center rounded-full text-white/75 transition hover:-translate-y-0.5 hover:text-white"
                aria-label="Show previous testimonials"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={goToNext}
                className="glass-panel flex h-11 w-11 items-center justify-center rounded-full text-white/75 transition hover:-translate-y-0.5 hover:text-white"
                aria-label="Show next testimonials"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={startIndex}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-4 md:gap-5 xl:grid-cols-3"
            >
              {visibleTestimonials.map((item, index) => (
                <blockquote
                  key={`${item.name}-${startIndex}-${index}`}
                  className={`glass-panel rounded-[1.7rem] p-5 md:rounded-[2rem] md:p-7 ${
                    index >= 1 ? "hidden xl:block" : ""
                  }`}
                >
                  <p className="text-lg leading-8 tracking-[-0.04em] text-white/88 md:text-2xl md:leading-10">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <footer className="mt-7 border-t border-white/8 pt-5 md:mt-10 md:pt-6">
                    <p className="text-sm font-semibold tracking-[0.18em] text-white uppercase">
                      {item.name}
                    </p>
                    <p className="mt-2 text-sm text-white/48">{item.title}</p>
                  </footer>
                </blockquote>
              ))}
            </motion.div>
          </AnimatePresence>

          {maxStartIndex > 0 ? (
            <div className="mt-6 flex items-center justify-center gap-2 md:mt-8">
              {Array.from({ length: maxStartIndex + 1 }, (_, index) => (
                <button
                  key={`testimonial-page-${index}`}
                  type="button"
                  onClick={() => setStartIndex(index)}
                  className={`h-2.5 rounded-full transition ${
                    startIndex === index ? "w-8 bg-white" : "w-2.5 bg-white/24 hover:bg-white/40"
                  }`}
                  aria-label={`Show testimonial group ${index + 1}`}
                />
              ))}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
