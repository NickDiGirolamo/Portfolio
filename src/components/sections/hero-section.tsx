import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { siteContent } from "@/data/site-content";

import { Button } from "../ui/button";
import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
      <div className="hero-mesh pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-white/24 to-transparent" />
      <Container className="relative">
        <div className="grid gap-14 xl:grid-cols-[minmax(0,1.1fr)_430px] xl:items-end">
          <Reveal className="space-y-10">
            <div className="space-y-6">
              <h1 className="max-w-5xl text-balance text-5xl font-semibold tracking-[-0.065em] text-white md:text-7xl lg:text-[5.9rem] lg:leading-[0.94]">
                {siteContent.person.name}
              </h1>
              <h2 className="max-w-4xl text-balance text-2xl font-medium tracking-[-0.04em] text-white/88 md:text-4xl md:leading-[1.04]">
                {siteContent.person.headline}
              </h2>
              <p className="max-w-2xl text-pretty text-lg leading-8 text-white/62 md:text-xl">
                {siteContent.person.subheadline}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button href={siteContent.person.primaryCta.href}>
                {siteContent.person.primaryCta.label}
              </Button>
              <Button href={siteContent.person.secondaryCta.href} variant="secondary">
                {siteContent.person.secondaryCta.label}
              </Button>
              <Button href={siteContent.person.tertiaryCta.href} variant="ghost">
                <span className="inline-flex items-center gap-2">
                  {siteContent.person.tertiaryCta.label}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Button>
            </div>

            <div className="flex items-center justify-between gap-2 whitespace-nowrap text-[0.56rem] font-semibold tracking-[0.14em] text-white/50 uppercase md:gap-3 md:text-[0.64rem]">
              {siteContent.person.spotlight.map((item, index) => (
                <div key={item} className="flex min-w-0 items-center gap-2 md:gap-3">
                  {index > 0 ? <span className="h-3 w-px bg-white/16 md:h-3.5" aria-hidden="true" /> : null}
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="grid gap-4 md:grid-cols-4">
              {siteContent.heroStats.map((item, index) => (
                <Reveal
                  key={item.label}
                  delay={0.08 * index}
                  className="glass-panel rounded-[2rem] p-5"
                >
                  <p className="text-3xl font-semibold tracking-[-0.06em] text-white md:text-4xl">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/54">{item.label}</p>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15} className="xl:-translate-y-10">
            <div className="space-y-5">
              <div className="relative overflow-hidden rounded-[2.8rem] border border-white/10 bg-black/30 shadow-[0_35px_100px_rgba(0,0,0,0.5)]">
                <div className="absolute inset-0 rounded-[2.8rem] ring-1 ring-white/10 ring-inset" />
                <Image
                  src={siteContent.person.image.src}
                  alt={siteContent.person.image.alt}
                  width={1100}
                  height={1400}
                  priority
                  className="aspect-[4/5] w-full object-cover object-[52%_26%]"
                />
              </div>

            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
