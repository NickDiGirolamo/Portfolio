import { ArrowUpRight, Download, Mail } from "lucide-react";

import { siteContent } from "@/data/site-content";

import { Button } from "../ui/button";
import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";

export function ContactSection() {
  return (
    <section id="contact" className="section-spacing relative pb-16">
      <Container>
        <Reveal>
          <div className="glass-panel relative overflow-hidden rounded-[1.9rem] p-5 md:rounded-[2.4rem] md:p-12 lg:p-14">
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
            <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_360px] xl:items-end">
              <div>
                <p className="text-xs font-semibold tracking-[0.3em] text-white/42 uppercase">
                  Contact
                </p>
                <h2 className="mt-4 max-w-3xl text-balance text-3xl font-semibold tracking-[-0.05em] text-white md:mt-5 md:text-6xl">
                  {siteContent.contact.title}
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-white/60 md:mt-6 md:text-lg md:leading-8">
                  {siteContent.contact.description}
                </p>

                <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap sm:gap-4 md:mt-8">
                  <Button href={`mailto:${siteContent.contact.email}`} className="w-full sm:w-auto">
                    <span className="inline-flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email Me
                    </span>
                  </Button>
                  <Button href={siteContent.contact.linkedin} variant="secondary" className="w-full sm:w-auto">
                    <span className="inline-flex items-center gap-2">
                      <ArrowUpRight className="h-4 w-4" />
                      LinkedIn
                    </span>
                  </Button>
                  <Button href={siteContent.contact.resume} variant="secondary" className="w-full sm:w-auto">
                    <span className="inline-flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      Resume
                    </span>
                  </Button>
                </div>
              </div>

              <div className="rounded-[1.7rem] border border-white/8 bg-black/28 p-5 md:rounded-[2rem] md:p-6">
                <p className="text-xs font-semibold tracking-[0.28em] text-white/38 uppercase">
                  Quick links
                </p>
                <div className="mt-6 grid gap-4">
                  <a
                    href={`mailto:${siteContent.contact.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-[1.3rem] border border-white/8 bg-white/[0.03] px-4 py-4 text-white/72 transition-colors hover:text-white"
                  >
                    {siteContent.contact.email}
                  </a>
                  <a
                    href={siteContent.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-[1.3rem] border border-white/8 bg-white/[0.03] px-4 py-4 text-white/72 transition-colors hover:text-white"
                  >
                    LinkedIn profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
