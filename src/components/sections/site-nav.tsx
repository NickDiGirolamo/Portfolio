"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

import { siteContent } from "@/data/site-content";

import { Button } from "../ui/button";
import { Container } from "../ui/container";

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-4">
      <Container>
        <div className="rounded-full border border-white/10 bg-black/40 px-4 py-3 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
          <div className="flex items-center justify-between gap-4">
            <Link href="#home" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/8 text-sm font-semibold tracking-[0.24em] text-white uppercase">
                ND
              </span>
              <div className="hidden min-[440px]:block">
                <p className="text-sm font-semibold tracking-[0.16em] text-white uppercase">
                  {siteContent.person.name}
                </p>
                <p className="text-xs text-white/44">Executive brand site</p>
              </div>
            </Link>

            <nav className="hidden items-center gap-6 lg:flex">
              {siteContent.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/64 transition-colors duration-300 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:block">
              <Button href="#contact" variant="secondary" className="px-4 py-2.5">
                Contact
              </Button>
            </div>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/6 text-white lg:hidden"
              onClick={() => setOpen((current) => !current)}
              aria-label="Toggle navigation"
              aria-expanded={open}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>

          {open ? (
            <nav className="mt-4 grid gap-3 border-t border-white/10 pt-4 lg:hidden">
              {siteContent.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-white/72 transition-colors hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          ) : null}
        </div>
      </Container>
    </header>
  );
}

