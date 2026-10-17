
import Link from "next/link";
import {
  siteConfig,
  whatsappUrl,
  emailUrl,
  getActiveSocialLinks,
} from "@/config/site";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "AI Tools", href: "/ai-tools" },
  { label: "Resources", href: "/resources" },
  { label: "Connect with us", href: "/connect" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Marketplace Setup", href: "/services#marketplace-setup" },
  { label: "Website & Branding", href: "/services#website-branding" },
  { label: "Quick Commerce", href: "/services#quick-commerce" },
  { label: "Courier & Logistics", href: "/services#logistics" },
  { label: "Brand & Product Support", href: "/services#brand-support" },
  { label: "AI Tools for Sellers", href: "/ai-tools" },
];

const socialIcons: Record<string, string> = {
  Instagram: "◎",
  LinkedIn: "in",
  Facebook: "f",
  YouTube: "▶",
};

const footerLinkClass =
  "inline-block max-w-full break-words text-sm leading-6 text-white/75 transition-colors duration-200 hover:text-[#FFD928] focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD928]";

export default function Footer() {
  const socials = getActiveSocialLinks();

  return (
    <footer className="w-full overflow-hidden bg-[#0B1B33] text-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-4 lg:gap-10">
          {/* Brand */}
          <div className="min-w-0 sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              aria-label={`${siteConfig.name} home`}
              className="inline-flex items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD928] focus-visible:ring-offset-4 focus-visible:ring-offset-[#0B1B33]"
            >
              <span className="text-[32px] font-black leading-none tracking-[-0.075em] sm:text-[36px]">
                <span className="text-[#FF5A1F]">Z</span>
                <span className="text-white">Sell</span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/75 sm:text-[15px]">
              Your partner in e-commerce growth. From marketplace setup to
              branding and AI-powered tools, we help businesses sell smarter
              and grow online.
            </p>

            <p className="mt-4 break-words text-xs font-bold uppercase tracking-[0.15em] text-[#FFD928] sm:text-sm sm:tracking-[0.18em]">
              {siteConfig.tagline}
            </p>

            {socials.length > 0 && (
              <div
                className="mt-5 flex flex-wrap gap-3"
                aria-label="Follow ZSell"
              >
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`ZSell on ${social.name}`}
                    title={social.name}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/5 text-sm font-bold text-white transition-colors duration-200 hover:border-[#FFD928] hover:bg-[#FFD928] hover:text-[#0B1B33] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD928] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1B33]"
                  >
                    {socialIcons[social.name] ?? "↗"}
                  </a>
                ))}
              </div>
            )}

            <Link
              href="/connect"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#FFD928] transition-colors hover:text-white focus-visible:outline-none focus-visible:underline focus-visible:underline-offset-4"
            >
              All social links
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Quick links */}
          <nav aria-label="Explore ZSell" className="min-w-0">
            <h2 className="mb-4 text-base font-bold text-white sm:mb-5 sm:text-lg">
              Explore
            </h2>

            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={footerLinkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="ZSell services" className="min-w-0">
            <h2 className="mb-4 text-base font-bold text-white sm:mb-5 sm:text-lg">
              Our Services
            </h2>

            <ul className="space-y-3">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={footerLinkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="min-w-0">
            <h2 className="mb-4 text-base font-bold text-white sm:mb-5 sm:text-lg">
              Get in Touch
            </h2>

            <div className="space-y-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-w-0 items-start gap-3 text-sm leading-6 text-white/75 transition-colors hover:text-[#FFD928] focus-visible:outline-none focus-visible:underline"
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-lg text-[#FF5A1F]"
                >
                  ☎
                </span>
                <span className="break-words">
                  {siteConfig.whatsappDisplay}
                </span>
              </a>

              <a
                href={emailUrl}
                className="flex min-w-0 items-start gap-3 text-sm leading-6 text-white/75 transition-colors hover:text-[#FFD928] focus-visible:outline-none focus-visible:underline"
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-lg text-[#FF5A1F]"
                >
                  ✉
                </span>
                <span className="break-all">{siteConfig.email}</span>
              </a>

              <Link
                href="/connect"
                className="flex min-w-0 items-start gap-3 text-sm leading-6 text-white/75 transition-colors hover:text-[#FFD928] focus-visible:outline-none focus-visible:underline"
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-lg text-[#FF5A1F]"
                >
                  ↗
                </span>
                <span>Connect with ZSell</span>
              </Link>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#0B1B33",
                backgroundColor: "#FFD928",
              }}
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-[#FFD928] px-5 py-3 text-center text-sm font-bold transition-colors hover:!bg-white sm:w-auto"
            >
              Let&apos;s Get Started
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start gap-2 px-4 py-5 sm:px-6 md:flex-row md:items-center md:justify-between md:gap-4 lg:px-8">
          <p className="text-xs leading-5 text-white/60 sm:text-sm">
            © 2026 {siteConfig.name}. All rights reserved.
          </p>

          <p className="text-xs leading-5 text-white/60 sm:text-sm md:text-right">
            {siteConfig.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
