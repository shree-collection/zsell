
import type { Metadata } from "next";
import Link from "next/link";
import {
  siteConfig,
  whatsappUrl,
  emailUrl,
  getActiveSocialLinks,
} from "@/config/site";

export const metadata: Metadata = {
  title: "Connect With Us | ZSell",
  description:
    "Connect with ZSell for e-commerce services, marketplace support, AI tools, and business growth.",
};

const socialIcons: Record<string, string> = {
  instagram: "◎",
  linkedin: "in",
  facebook: "f",
  youtube: "▶",
};

const contactMessage =
  "Hi ZSell! I would like to know more about your e-commerce services. Please guide me on the next steps.";

const consultationUrl = `${whatsappUrl}${
  whatsappUrl.includes("?") ? "&" : "?"
}text=${encodeURIComponent(contactMessage)}`;

const buttonPrimary =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#FFD928] px-6 py-3 text-center font-extrabold text-[#0B1B33] transition duration-200 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1B33]";

const buttonSecondary =
  "inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-6 py-3 text-center font-bold text-white transition duration-200 hover:border-[#FF5A1F] hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD928]";

export default function ConnectPage() {
  const socials = getActiveSocialLinks();

  return (
    <main className="min-h-screen overflow-x-clip bg-[#F5F7FA]">
      {/* Hero */}
      <section
        aria-labelledby="connect-heading"
        className="relative isolate overflow-hidden bg-[#0B1B33] px-4 py-16 text-white sm:px-6 sm:py-24 lg:px-8 lg:py-28"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full bg-[#FF5A1F]/20 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-20 -z-10 h-72 w-72 rounded-full bg-[#FFD928]/10 blur-3xl"
        />

        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#FFD928] sm:text-sm">
            <span aria-hidden="true">✦</span>
            Stay connected
          </span>

          <h1
            id="connect-heading"
            className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Connect with{" "}
            <span className="text-[#FF5A1F]">ZSell.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Follow our journey, discover useful e-commerce resources, and
            connect with our team to take your business forward.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={consultationUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with ZSell on WhatsApp"
              className={buttonPrimary}
            >
              Chat with us
              <span aria-hidden="true">→</span>
            </a>

            <a href="#social-links" className={buttonSecondary}>
              Explore social media
            </a>
          </div>
        </div>
      </section>

      {/* Social media */}
      <section
        id="social-links"
        aria-labelledby="social-heading"
        className="scroll-mt-24 mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="mb-10 text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#FF5A1F] sm:text-sm">
            Find us online
          </p>

          <h2
            id="social-heading"
            className="mt-3 text-3xl font-extrabold tracking-tight text-[#0B1B33] sm:text-4xl"
          >
            Let&apos;s stay connected
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Follow ZSell for updates, practical tips, useful resources, and
            ideas to help your business grow online.
          </p>
        </div>

        {socials.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {socials.map((social) => {
              const icon =
                socialIcons[social.icon?.toLowerCase()] ?? "↗";

              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ZSell on ${social.name}`}
                  className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#FF5A1F]/50 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A1F] focus-visible:ring-offset-2 sm:p-7"
                >
                  <div className="flex items-center gap-4">
                    <span
                      aria-hidden="true"
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0B1B33] text-xl font-extrabold text-[#FFD928] transition-colors group-hover:bg-[#FF5A1F] group-hover:text-white"
                    >
                      {icon}
                    </span>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-bold text-[#0B1B33] sm:text-xl">
                        {social.name}
                      </h3>

                      <p className="mt-1 break-words text-sm text-slate-500">
                        {social.handle}
                      </p>
                    </div>

                    <span
                      aria-hidden="true"
                      className="shrink-0 text-xl text-slate-400 transition group-hover:translate-x-1 group-hover:text-[#FF5A1F]"
                    >
                      ↗
                    </span>
                  </div>

                  <p className="mt-5 flex-1 text-sm leading-7 text-slate-600">
                    {social.description}
                  </p>

                  <p className="mt-5 text-sm font-extrabold text-[#FF5A1F]">
                    Visit {social.name}
                    <span className="ml-1" aria-hidden="true">
                      →
                    </span>
                  </p>
                </a>
              );
            })}
          </div>
        ) : (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center">
            <p className="font-semibold text-[#0B1B33]">
              Our social links are coming soon.
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              You can contact our team directly using the details below.
            </p>
          </div>
        )}

        {/* Contact details */}
        <div
          id="contact-details"
          className="relative mt-12 overflow-hidden rounded-2xl bg-[#0B1B33] p-5 text-white sm:rounded-3xl sm:p-8 lg:mt-16 lg:p-12"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[#FF5A1F]/15 blur-3xl"
          />

          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-12">
            <div className="min-w-0">
              <span className="inline-flex rounded-full bg-[#FFD928]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#FFD928]">
                Contact ZSell
              </span>

              <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
                Have a business idea?
                <span className="mt-1 block text-[#FF5A1F]">
                  Let&apos;s talk.
                </span>
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                Whether you are starting to sell online or growing an
                existing business, reach out to discuss your goals and
                the support you may need.
              </p>

              <div className="mt-6 space-y-4">
                <a
                  href={consultationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-fit max-w-full items-center gap-3 break-words text-sm font-semibold text-white transition-colors hover:text-[#FFD928] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD928]"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-lg text-[#FFD928]"
                  >
                    ☎
                  </span>
                  <span>{siteConfig.whatsappDisplay}</span>
                </a>

                <a
                  href={emailUrl}
                  className="flex w-fit max-w-full items-center gap-3 break-all text-sm font-semibold text-white transition-colors hover:text-[#FFD928] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD928]"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-lg text-[#FFD928]"
                  >
                    ✉
                  </span>
                  <span>{siteConfig.email}</span>
                </a>
              </div>
            </div>

            <div className="flex min-w-0 flex-col gap-3 sm:flex-row lg:w-48 lg:flex-col">
              <a
                href={consultationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonPrimary}
              >
                WhatsApp us
                <span aria-hidden="true">→</span>
              </a>

              <a href={emailUrl} className={buttonSecondary}>
                Send an email
              </a>
            </div>
          </div>
        </div>

        {/* Back to home */}
        <div className="mt-10 text-center">
          <Link
            href="/"
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-bold text-[#0B1B33] transition-colors hover:text-[#FF5A1F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A1F]"
          >
            <span aria-hidden="true">←</span>
            Back to ZSell home
          </Link>
        </div>
      </section>
    </main>
  );
}
