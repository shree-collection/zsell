
import type { Metadata } from "next";
import Link from "next/link";
import { whatsappUrl } from "@/config/site";

export const metadata: Metadata = {
  title: "About ZSell | Sell Smart. Grow Fast.",
  description:
    "Learn how ZSell aims to help Indian entrepreneurs and businesses start, manage, and grow their online selling journey.",
};

const colors = {
  navy: "#0B1B33",
  orange: "#FF5A1F",
  yellow: "#FFD928",
  white: "#FFFFFF",
};

const primaryButtonStyle = {
  backgroundColor: colors.yellow,
  color: colors.navy,
  border: `2px solid ${colors.yellow}`,
};

const secondaryButtonStyle = {
  backgroundColor: colors.navy,
  color: colors.white,
  border: `2px solid ${colors.white}`,
};

const focusAreas = [
  {
    icon: "🛒",
    number: "01",
    title: "Start Selling Online",
    description:
      "Explore marketplace onboarding, seller account preparation, and the basics of launching an online business.",
  },
  {
    icon: "🌐",
    number: "02",
    title: "Build Your Brand",
    description:
      "Learn about websites, product presentation, branding, and ways to build your own online presence.",
  },
  {
    icon: "📦",
    number: "03",
    title: "Simplify Operations",
    description:
      "Understand shipping options, logistics workflows, and practical ways to organize everyday seller tasks.",
  },
  {
    icon: "🤖",
    number: "04",
    title: "Grow with Technology",
    description:
      "Discover digital resources and AI-assisted ideas that can support content creation and business productivity.",
  },
];

const consultationMessage =
  "Hi ZSell! I would like to learn more about your platform and support for online sellers.";

const consultationUrl = `${whatsappUrl}${whatsappUrl.includes("?") ? "&" : "?"}text=${encodeURIComponent(consultationMessage)}`;

export default function AboutPage() {
  return (
    <main
      style={{ backgroundColor: colors.white, color: colors.navy }}
      className="min-h-screen overflow-x-clip"
    >
      {/* Hero */}
      <section
        style={{ backgroundColor: colors.navy }}
        className="relative isolate overflow-hidden px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-24 -z-10 h-72 w-72 rounded-full bg-[#FF5A1F]/20 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-16 -z-10 h-64 w-64 rounded-full bg-[#FFD928]/10 blur-3xl"
        />

        <div className="mx-auto max-w-7xl">
          <span
            style={{
              color: colors.yellow,
              borderColor: "rgba(255,217,40,0.4)",
            }}
            className="inline-flex items-center gap-2 rounded-full border bg-white/5 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] sm:text-sm"
          >
            <span aria-hidden="true">✦</span>
            About ZSell
          </span>

          <div className="mt-10 grid grid-cols-1 items-center gap-10 lg:mt-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(300px,0.85fr)] lg:gap-16">
            {/* Main heading and buttons */}
            <div className="min-w-0">
              <h1
                style={{
                  color: colors.white,
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                  lineHeight: 1.08,
                  letterSpacing: "-0.035em",
                  fontWeight: 800,
                  textAlign: "left",
                }}
                className="max-w-3xl"
              >
                Helping you navigate the world of{" "}
                <span style={{ color: colors.orange }}>
                  online selling.
                </span>
              </h1>

              <p
                style={{ color: "#CBD5E1" }}
                className="mt-6 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8"
              >
                ZSell aims to make e-commerce easier to understand by bringing
                seller guidance, business resources, digital tools, and
                practical learning together in one place.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={consultationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={primaryButtonStyle}
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-center text-sm font-extrabold transition-colors hover:!border-white hover:!bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1B33] sm:w-auto"
                >
                  Connect with ZSell
                  <span aria-hidden="true">→</span>
                </a>

                <Link
                  href="/services"
                  style={secondaryButtonStyle}
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full px-6 py-3 text-center text-sm font-bold transition-colors hover:!border-[#FFD928] hover:!text-[#FFD928] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD928] sm:w-auto"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            {/* Brand statement card */}
            <div className="min-w-0 rounded-2xl border border-white/15 bg-white/[0.06] p-6 shadow-xl sm:rounded-3xl sm:p-8 lg:p-10">
              <p
                style={{ color: colors.yellow }}
                className="text-xs font-extrabold uppercase tracking-[0.16em] sm:text-sm"
              >
                Our approach
              </p>

              <h2
                style={{
                  color: colors.white,
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  lineHeight: 1.12,
                  fontWeight: 800,
                }}
                className="mt-5"
              >
                Sell smart.
                <span
                  style={{ color: colors.orange }}
                  className="mt-2 block"
                >
                  Grow fast.
                </span>
              </h2>

              <p
                style={{ color: "#CBD5E1" }}
                className="mt-5 text-sm leading-7 sm:text-base sm:leading-8"
              >
                Understand your options, plan your next move, and discover
                useful resources for your business journey.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {["Learn", "Plan", "Grow"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold text-white sm:text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div>
            <p
              style={{ color: colors.orange }}
              className="text-xs font-extrabold uppercase tracking-[0.16em] sm:text-sm"
            >
              Why we&apos;re building ZSell
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Online selling should feel less complicated.
            </h2>
          </div>

          <div className="space-y-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            <p>
              Starting an online business can involve many decisions:
              choosing a marketplace, preparing product listings,
              understanding shipping, building a brand, and learning new
              digital tools.
            </p>

            <p>
              ZSell is being developed to help make these topics easier to
              navigate. Our aim is to give sellers a clearer starting point,
              practical information, and ways to explore support based on
              their individual needs.
            </p>

            <p>
              Whether you are exploring your first product idea or expanding
              an existing business, we want to make useful e-commerce
              knowledge easier to discover.
            </p>
          </div>
        </div>
      </section>

      {/* Focus areas */}
      <section className="bg-[#F5F7FA] px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p
              style={{ color: colors.orange }}
              className="text-xs font-extrabold uppercase tracking-[0.16em] sm:text-sm"
            >
              What we focus on
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Support for your selling journey.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Explore the areas where ZSell aims to help sellers build
              knowledge, make plans, and discover practical solutions.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {focusAreas.map((area) => (
              <article
                key={area.number}
                className="group flex h-full min-w-0 flex-col rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#FF5A1F]/40 hover:shadow-xl sm:rounded-3xl sm:p-7"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#FFD928]/30 text-2xl transition-transform group-hover:scale-105">
                    <span aria-hidden="true">{area.icon}</span>
                  </span>

                  <span className="text-sm font-extrabold tracking-widest text-slate-400">
                    {area.number}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-extrabold leading-snug">
                  {area.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl bg-[#0B1B33] p-6 sm:rounded-3xl sm:p-9 lg:p-12">
          <div className="grid grid-cols-1 gap-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-10">
            <div className="max-w-3xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#FFD928] sm:text-sm">
                Let&apos;s build your next step
              </p>

              <h2 className="mt-3 text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl">
                Your business journey starts with a conversation.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                Tell us what you are planning, what you sell, or where you
                need guidance. Let&apos;s explore the next step together.
              </p>
            </div>

            <a
              href={consultationUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={primaryButtonStyle}
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-center text-sm font-extrabold transition-colors hover:!border-white hover:!bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1B33] lg:w-auto"
            >
              Talk to ZSell
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
