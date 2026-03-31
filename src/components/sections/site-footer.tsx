import Link from "next/link";

import { siteContent } from "@/data/site-content";

import { Container } from "../ui/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 py-8">
      <Container className="flex flex-col gap-4 text-sm text-white/42 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold tracking-[0.18em] text-white/72 uppercase">
            {siteContent.person.name}
          </p>
          <p className="mt-2">{siteContent.footer.note}</p>
        </div>
        <div className="flex flex-wrap items-center gap-5">
          <Link
            href={siteContent.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            LinkedIn
          </Link>
          <Link
            href={`mailto:${siteContent.contact.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            Email
          </Link>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </Container>
    </footer>
  );
}
