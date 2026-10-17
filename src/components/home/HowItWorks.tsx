
import Link from "next/link";
import { whatsappUrl } from "@/config/site";

const steps = [
  {
    number: "01",
    icon: "💬",
    title: "Tell Us Your Goal",
    description:
      "Share your business idea, the products you sell, or the challenges you face while selling online.",
    detail: "Understand your needs",
    accent: "orange",
  },
  {
    number: "02",
    icon: "🧭",
    title: "Find Your Direction",
    description:
      "Explore suitable marketplaces, branding options, digital tools, and practical next steps for your business.",
    detail: "Explore your options",
    accent: "yellow",
  },
  {
    number: "03",
    icon: "🛠️",
    title: "Get the Right Support",
    description:
      "Get guidance on seller setup, product listings, website planning, logistics, or useful AI-powered tools.",
    detail: "Take practical action",
    accent: "orange",
  },
  {
    number: "04",
    icon: "📈",
    title: "Build and Grow",
    description:
      "Put your plan into action, improve your selling process, and discover new ways to grow your online business.",
    detail: "Keep moving forward",
    accent: "yellow",
  },
];

const consultationUrl = `${whatsappUrl}${whatsappUrl.includes("?") ? "&" : "?"}text=${encodeURIComponent(
  "Hi ZSell! I would like guidance on starting or growing my online business."
)}`;

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="w-full overflow-x-clip bg-[#F5F7FA] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-[#FF5A1F]/20 bg-white px-3 py-2 text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#FF5A1F] sm:px-4 sm:text-sm sm:tracking-[0.18em]">
            <span
              aria-hidden="true"
              className="h-2 w-2 shrink-0 rounded-full bg-[#FF5A1F]"
            />
            Simple process. Clear direction.
          </span>

          <h2
            id="how-it-works-heading"
            className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-[#0B1B33] sm:text-4xl lg:text-5xl"
          >
            Your e-commerce journey,
            <span className="mt-1 block text-[#FF5A1F]">
              made simpler.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:mt-5 sm:text-base sm:leading-8 lg:text-lg">
            Whether you are a first-time seller or an established
            business, take the next step with a clear plan and practical
            support from ZSell.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:mt-16 lg:grid-cols-4">
          {steps.map((step) => {
            const isOrange = step.accent === "orange";

            return (
              <article
                key={step.number}
                className="group relative flex min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#FF5A1F]/40 hover:shadow-xl sm:rounded-3xl sm:p-6 lg:p-7"
              >
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl transition-transform duration-300 group-hover:scale-105 sm:h-14 sm:w-14 sm:rounded-2xl ${
                      isOrange
                        ? "bg-[#FF5A1F]/10"
                        : "bg-[#FFD928]/25"
                    }`}
                  >
                    <span aria-hidden="true">{step.icon}</span>
                  </span>

                  <span className="text-2xl font-black tracking-tight text-slate-200 sm:text-3xl">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-extrabold leading-snug text-[#0B1B33] sm:mt-6 sm:text-xl">
                  {step.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>

                <div className="mt-5 border-t border-slate-100 pt-4 sm:mt-6 sm:pt-5">
                  <div className="flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0B1B33] text-xs font-bold text-[#FFD928]"
                    >
                      ✓
                    </span>

                    <span className="text-sm font-bold leading-5 text-[#0B1B33]">
                      {step.detail}
                    </span>
                  </div>
                </div>

                <div
                  aria-hidden="true"
                  className={`absolute inset-x-5 bottom-0 h-1 rounded-t-full transition-all duration-300 group-hover:inset-x-0 group-hover:h-1.5 sm:inset-x-6 ${
                    isOrange ? "bg-[#FF5A1F]" : "bg-[#FFD928]"
                  }`}
                />
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex min-w-0 flex-col gap-6 rounded-2xl bg-[#0B1B33] p-5 sm:mt-12 sm:rounded-3xl sm:p-8 lg:mt-14 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:p-10">
          <div className="min-w-0 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#FFD928] sm:text-sm sm:tracking-[0.16em]">
              Ready to get started?
            </p>

            <h3 className="mt-3 text-xl font-extrabold leading-snug text-white sm:text-2xl lg:text-3xl">
              Every successful business starts with one step.
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
              Tell us what you need, and let&apos;s explore the right
              starting point for your business.
            </p>
          </div>

          <div className="flex w-full shrink-0 flex-col gap-3 lg:w-auto lg:min-w-[240px]">
            <a
              href={consultationUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Start a conversation with ZSell on WhatsApp"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-[#FFD928] bg-[#FFD928] px-5 py-3 text-center text-sm font-extrabold !text-[#0B1B33] transition-colors hover:border-white hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1B33]"
            >
              <span>Start a Conversation</span>
              <span aria-hidden="true">→</span>
            </a>

            <Link
              href="/#services"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border-2 border-white/40 bg-transparent px-5 py-3 text-center text-sm font-bold !text-white transition-colors hover:border-[#FFD928] hover:!text-[#FFD928] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD928] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1B33]"
            >
              <span>Explore our services</span>
              <span aria-hidden="true" className="text-[#FFD928]">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
