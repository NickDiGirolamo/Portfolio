import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { siteContent } from "@/data/site-content";

import { Button } from "../ui/button";
import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-14 md:pt-44 md:pb-28">
      <div className="hero-mesh pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-white/24 to-transparent" />
      <Container className="relative">
        <div className="grid gap-10 xl:grid-cols-[minmax(0,1.1fr)_430px] xl:items-end">
          <Reveal className="space-y-8 md:space-y-10">
            <div className="space-y-5 md:space-y-6">
              <h1 className="max-w-5xl text-balance text-[2.85rem] font-semibold tracking-[-0.065em] text-white sm:text-5xl md:text-7xl lg:text-[5.9rem] lg:leading-[0.94]">
                {siteContent.person.name}
              </h1>
              <h2 className="max-w-4xl text-balance text-xl font-medium tracking-[-0.04em] text-white/88 sm:text-2xl md:text-4xl md:leading-[1.04]">
                {siteContent.person.headline}
              </h2>
              <p className="max-w-2xl text-pretty text-base leading-7 text-white/62 md:text-xl md:leading-8">
                {siteContent.person.subheadline}
              </p>
            </div>

            <div className="grid gap-3 sm:flex sm:flex-wrap sm:gap-4">
              <Button href={siteContent.person.primaryCta.href} className="w-full sm:w-auto">
                {siteContent.person.primaryCta.label}
              </Button>
              <Button
                href={siteContent.person.secondaryCta.href}
                variant="secondary"
                className="w-full sm:w-auto"
              >
                {siteContent.person.secondaryCta.label}
              </Button>
              <Button
                href={siteContent.person.tertiaryCta.href}
                variant="ghost"
                className="w-full sm:w-auto"
              >
                <span className="inline-flex items-center gap-2">
                  {siteContent.person.tertiaryCta.label}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-[0.58rem] font-semibold tracking-[0.14em] text-white/50 uppercase sm:grid-cols-4 sm:items-center sm:gap-2 sm:whitespace-nowrap md:flex md:justify-between md:gap-3 md:text-[0.64rem]">
              {siteContent.person.spotlight.map((item, index) => (
                <div key={item} className="flex min-w-0 items-center gap-2 md:gap-3">
                  {index > 0 ? (
                    <span className="hidden h-3 w-px bg-white/16 md:block md:h-3.5" aria-hidden="true" />
                  ) : null}
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
              {siteContent.heroStats.map((item, index) => (
                <Reveal
                  key={item.label}
                  delay={0.08 * index}
                  className="glass-panel rounded-[1.6rem] p-4 md:rounded-[2rem] md:p-5"
                >
                  <p className="text-2xl font-semibold tracking-[-0.06em] text-white md:text-4xl">
                    {item.value}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-white/54 md:text-sm md:leading-6">{item.label}</p>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15} className="xl:-translate-y-10">
            <div className="space-y-5">
              <div className="relative mx-auto max-w-[24rem] overflow-hidden rounded-[2rem] border border-white/10 bg-black/30 shadow-[0_35px_100px_rgba(0,0,0,0.5)] md:max-w-none md:rounded-[2.8rem]">
                <div className="absolute inset-0 rounded-[2rem] ring-1 ring-white/10 ring-inset md:rounded-[2.8rem]" />
                <Image
                  src={siteContent.person.image.src}
                  alt={siteContent.person.image.alt}
                  width={1100}
                  height={1400}
                  priority
                  className="aspect-[4/5] w-full object-cover object-[52%_24%] md:object-[52%_26%]"
                />
              </div>

            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
