
import Link from "next/link";
import { whatsappUrl } from "@/config/site";

const consultationUrl = `${whatsappUrl}${whatsappUrl.includes("?") ? "&" : "?"}text=${encodeURIComponent(
  "Hi ZSell! I want to take my business online and would like to know how you can help."
)}`;

export default function FinalCTA() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="w-full overflow-x-clip bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="relative isolate overflow-hidden rounded-2xl bg-[#0B1B33] px-5 py-9 text-center sm:rounded-3xl sm:px-8 sm:py-12 lg:rounded-[2rem] lg:px-20 lg:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 -z-10 h-64 w-64 rounded-full bg-[#FF5A1F]/20 blur-3xl sm:h-72 sm:w-72"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -left-16 -z-10 h-64 w-64 rounded-full bg-[#FFD928]/10 blur-3xl sm:h-72 sm:w-72"
          />

          <span className="inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-[#FFD928]/30 bg-white/5 px-3 py-2 text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#FFD928] sm:px-4 sm:text-sm sm:tracking-[0.18em]">
            <span aria-hidden="true">✦</span>
            Your next step starts here
          </span>

          <h2
            id="final-cta-heading"
            className="mx-auto mt-5 max-w-4xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:mt-6 sm:text-4xl lg:text-6xl"
          >
            Ready to take your business{" "}
            <span className="text-[#FF5A1F]">online?</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
            Whether you are starting from scratch or looking to grow your
            existing online business, let&apos;s explore the right next
            step for you.
          </p>

          <div className="mt-7 flex w-full flex-col items-stretch justify-center gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <a
              href={consultationUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact ZSell on WhatsApp"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-[#FFD928] bg-[#FFD928] px-5 py-3 text-center text-sm font-extrabold leading-5 text-[#0B1B33] shadow-lg transition-colors hover:border-white hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1B33] sm:min-h-14 sm:w-auto sm:px-8 sm:text-base"
            >
              <span>Let&apos;s Talk on WhatsApp</span>
              <span aria-hidden="true">→</span>
            </a>

            <Link
              href="/#services"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border-2 border-white bg-transparent px-5 py-3 text-center text-sm font-bold leading-5 text-white transition-colors hover:border-[#FFD928] hover:text-[#FFD928] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD928] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1B33] sm:min-h-14 sm:w-auto sm:px-8 sm:text-base"
            >
              <span>Explore Our Services</span>
              <span aria-hidden="true" className="text-[#FFD928]">
                →
              </span>
            </Link>
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium leading-6 text-slate-300 sm:mt-10 sm:gap-x-6 sm:gap-y-3 sm:text-sm">
            <span className="inline-flex items-center gap-2">
              <span className="text-[#FFD928]" aria-hidden="true">
                ✓
              </span>
              Practical seller guidance
            </span>

            <span className="inline-flex items-center gap-2">
              <span className="text-[#FFD928]" aria-hidden="true">
                ✓
              </span>
              E-commerce resources
            </span>

            <span className="inline-flex items-center gap-2">
              <span className="text-[#FFD928]" aria-hidden="true">
                ✓
              </span>
              Digital tools for sellers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
