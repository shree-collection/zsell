
import Image from "next/image";
import Link from "next/link";
import { whatsappUrl } from "@/config/site";

const highlights = [
  "Marketplace Setup",
  "Website & Branding",
  "AI Tools & Resources",
];

const whatsappMessage =
  "Hi ZSell! I want to grow my online business. Please help me get started.";

const getStartedUrl = `${whatsappUrl}?text=${encodeURIComponent(
  whatsappMessage
)}`;

export default function Hero() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[#0B1B33] text-white">
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-24 -z-10 h-72 w-72 rounded-full bg-[#FF5A1F]/15 blur-[90px] sm:h-[420px] sm:w-[420px] sm:blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-24 -z-10 h-72 w-72 rounded-full bg-[#FFD928]/10 blur-[90px] sm:h-[420px] sm:w-[420px] sm:blur-[120px]"
      />

      <div className="site-container relative grid min-w-0 items-center gap-10 py-12 sm:gap-12 sm:py-16 lg:min-h-[650px] lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-14 lg:py-20 xl:gap-20">
        {/* Hero content */}
        <div className="relative z-10 min-w-0">
          <p className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-[#FFD928]/40 bg-white/[0.06] px-4 py-2 text-[11px] font-extrabold uppercase leading-5 tracking-[0.14em] text-[#FFD928] sm:text-xs">
            <span
              aria-hidden="true"
              className="h-2 w-2 shrink-0 rounded-full bg-[#FF5A1F]"
            />
            Your e-commerce growth partner
          </p>

          <h1 className="max-w-[650px] text-[clamp(2.75rem,8vw,4.5rem)] font-extrabold leading-[1.04] tracking-[-0.055em] text-white sm:text-6xl xl:text-7xl">
            Sell Smart.
            <span className="mt-1 block text-[#FF5A1F]">
              Grow Fast.
            </span>
          </h1>

          <p className="mt-5 max-w-[560px] text-[15px] leading-7 text-[#D0D5DD] sm:mt-6 sm:text-lg sm:leading-8">
            Apne business ko online grow karna hai? ZSell helps Indian
            sellers with marketplace setup, website and branding,
            business resources, and smart AI tools.
          </p>

          {/* Service highlights */}
          <ul
            aria-label="ZSell services"
            className="mt-6 flex flex-wrap gap-2 sm:mt-7 sm:gap-2.5"
          >
            {highlights.map((highlight) => (
              <li
                key={highlight}
                className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3 py-2 text-xs font-bold leading-5 text-[#F2F4F7] sm:px-3.5 sm:py-2.5"
              >
                <span
                  aria-hidden="true"
                  className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FFD928] text-[11px] font-black text-[#0B1B33]"
                >
                  ✓
                </span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          {/* Calls to action */}
          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            {/* Primary CTA */}
            <a
              href={getStartedUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "#FFD928",
                color: "#0B1B33",
                border: "2px solid #FFD928",
              }}
              className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full px-7 py-3 text-center text-sm font-extrabold leading-5 shadow-md transition-transform duration-200 hover:-translate-y-0.5 sm:w-auto"
            >
              <span>Talk to Us on WhatsApp</span>
              <span aria-hidden="true">→</span>
            </a>

            {/* Secondary CTA */}
            <Link
              href="/services"
              style={{
                backgroundColor: "#0B1B33",
                color: "#FFFFFF",
                border: "2px solid #FFFFFF",
              }}
              className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full px-7 py-3 text-center text-sm font-extrabold leading-5 transition-transform duration-200 hover:-translate-y-0.5 sm:w-auto"
            >
              <span>Explore Our Services</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <p className="mt-5 text-xs font-medium leading-6 text-[#B8C3D1] sm:mt-6 sm:text-sm">
            Practical support for your business, from starting out to
            growing your brand.
          </p>
        </div>

        {/* Hero image */}
        <div className="relative mx-auto mt-2 w-full min-w-0 max-w-[650px] lg:my-5">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-3 rounded-3xl bg-[#FFD928]/20 blur-3xl sm:inset-5 sm:rounded-[40px]"
          />

          <div className="relative z-10 overflow-hidden rounded-2xl border border-white/15 bg-white shadow-[0_24px_70px_rgba(0,0,0,0.25)] sm:rounded-[30px]">
            <Image
              src="/images/hero-seller.png"
              alt="Indian seller managing an online business with products and shipping packages"
              width={1536}
              height={1024}
              priority
              sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) calc(100vw - 48px), (max-width: 1279px) 46vw, 600px"
              className="block h-auto w-full object-contain"
            />
          </div>

          {/* Supporting card */}
          <div className="relative z-20 mx-auto mt-4 w-fit max-w-full rounded-2xl border border-[#E4E7EC] bg-white p-3 text-[#0B1B33] shadow-[0_12px_35px_rgba(0,0,0,0.18)] sm:absolute sm:-bottom-5 sm:right-4 sm:mx-0 sm:mt-0 sm:max-w-[calc(100%-32px)] sm:p-4 lg:-right-4">
            <div className="flex items-center gap-3">
              <div
                aria-hidden="true"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF0E9] text-lg font-black text-[#E84912]"
              >
                ✓
              </div>

              <div className="min-w-0">
                <p className="text-xs font-extrabold leading-5 text-[#0B1B33] sm:text-sm">
                  Built for Indian businesses
                </p>
                <p className="mt-1 text-[10px] font-medium leading-4 text-[#667085] sm:text-xs">
                  Sellers · Wholesalers · Manufacturers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
