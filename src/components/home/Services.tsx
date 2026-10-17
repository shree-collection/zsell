
import Link from "next/link";
import { whatsappUrl } from "@/config/site";

const services = [
  {
    number: "01",
    icon: "🛍️",
    title: "Marketplace Setup",
    description:
      "Start selling online with guidance on seller registration, marketplace onboarding, product listings, and store setup.",
    features: [
      "Seller account setup guidance",
      "Product listing support",
      "Marketplace onboarding",
    ],
    href: "/services#marketplace-setup",
    accent: "orange",
  },
  {
    number: "02",
    icon: "🌐",
    title: "Website & Branding",
    description:
      "Build a professional online presence with a business website, consistent branding, and a better customer experience.",
    features: [
      "Business website guidance",
      "Brand identity support",
      "Online store planning",
    ],
    href: "/services#website-branding",
    accent: "yellow",
  },
  {
    number: "03",
    icon: "⚡",
    title: "Quick Commerce",
    description:
      "Explore quick-commerce opportunities and understand the steps involved in taking your products to new customers.",
    features: [
      "Platform readiness guidance",
      "Product catalogue preparation",
      "Listing process support",
    ],
    href: "/services#quick-commerce",
    accent: "orange",
  },
  {
    number: "04",
    icon: "📦",
    title: "Courier & Logistics",
    description:
      "Understand shipping options, delivery workflows, and order fulfilment to support your growing online business.",
    features: [
      "Courier option guidance",
      "Shipping workflow planning",
      "Order fulfilment support",
    ],
    href: "/services#logistics",
    accent: "yellow",
  },
  {
    number: "05",
    icon: "🎯",
    title: "Brand & Product Support",
    description:
      "Present your products professionally with better listings, product descriptions, images, and brand positioning.",
    features: [
      "Product content guidance",
      "Listing improvement ideas",
      "Brand presentation support",
    ],
    href: "/services#brand-support",
    accent: "orange",
  },
  {
    number: "06",
    icon: "🤖",
    title: "AI Tools for Sellers",
    description:
      "Discover practical AI-powered tools that can help simplify everyday seller tasks and improve productivity.",
    features: [
      "AI-assisted content creation",
      "Seller productivity tools",
      "Smarter business workflows",
    ],
    href: "/ai-tools",
    accent: "yellow",
  },
];

const whatsappMessage =
  "Hi ZSell, I need help choosing the right services for my business.";

const consultationUrl = `${whatsappUrl}?text=${encodeURIComponent(
  whatsappMessage
)}`;

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="w-full scroll-mt-24 overflow-x-clip bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-[#FF5A1F]/20 bg-[#FF5A1F]/5 px-3 py-2 text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#E84912] sm:px-4 sm:text-xs sm:tracking-[0.18em]">
            <span
              aria-hidden="true"
              className="h-2 w-2 shrink-0 rounded-full bg-[#FF5A1F]"
            />
            What we offer
          </span>

          <h2
            id="services-heading"
            className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-[#0B1B33] sm:text-4xl lg:text-5xl"
          >
            Everything you need to{" "}
            <span className="text-[#FF5A1F]">sell online.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:mt-5 sm:text-base sm:leading-8 lg:text-lg">
            From starting your first online store to improving your existing
            business, ZSell helps you navigate e-commerce with practical
            guidance and useful digital tools.
          </p>
        </div>

        {/* Service cards */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {services.map((service) => {
            const isOrange = service.accent === "orange";

            return (
              <article
                key={service.number}
                className="group relative flex min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#FF5A1F]/40 hover:shadow-xl sm:rounded-3xl sm:p-6 lg:p-7 motion-reduce:transform-none motion-reduce:transition-none"
              >
                {/* Top accent */}
                <div
                  aria-hidden="true"
                  className={`absolute inset-x-0 top-0 h-1 transition-all duration-300 group-hover:h-1.5 ${
                    isOrange ? "bg-[#FF5A1F]" : "bg-[#FFD928]"
                  }`}
                />

                {/* Icon and number */}
                <div className="flex items-start justify-between gap-3">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl transition-transform duration-300 group-hover:scale-105 sm:h-14 sm:w-14 sm:rounded-2xl ${
                      isOrange ? "bg-[#FF5A1F]/10" : "bg-[#FFD928]/25"
                    }`}
                  >
                    <span aria-hidden="true">{service.icon}</span>
                  </div>

                  <span
                    aria-label={`Service ${service.number}`}
                    className="text-sm font-extrabold tracking-widest text-slate-300"
                  >
                    {service.number}
                  </span>
                </div>

                {/* Description */}
                <h3 className="mt-5 text-xl font-extrabold leading-snug tracking-tight text-[#0B1B33] sm:mt-6 sm:text-2xl">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="mt-5 space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex min-w-0 items-start gap-3 text-sm leading-6 text-slate-600"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0B1B33]/5 text-xs font-extrabold text-[#E84912]"
                      >
                        ✓
                      </span>

                      <span className="min-w-0">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Explore link */}
                <div className="mt-auto pt-6">
                  <Link
                    href={service.href}
                    className="inline-flex min-h-11 items-center gap-2 text-sm font-extrabold text-[#0B1B33] transition-colors hover:text-[#E84912] focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A1F] focus-visible:ring-offset-4"
                  >
                    Explore service
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="relative mt-8 overflow-hidden rounded-2xl bg-[#0B1B33] px-5 py-7 sm:mt-12 sm:rounded-3xl sm:px-8 sm:py-10 lg:mt-16 lg:px-10 lg:py-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-20 h-56 w-56 rounded-full bg-[#FF5A1F]/15 blur-3xl"
          />

          <div className="relative flex min-w-0 flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
            <div className="min-w-0 max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#FFD928] sm:text-sm sm:tracking-[0.18em]">
                Not sure where to start?
              </p>

              <h3 className="mt-3 text-xl font-extrabold leading-snug text-white sm:text-2xl lg:text-3xl">
                Let&apos;s find the right solution for your business.
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                Tell us what you sell and what you want to achieve. We&apos;ll
                help you explore the next steps.
              </p>
            </div>

            <div className="flex w-full shrink-0 flex-col gap-3 sm:flex-row lg:w-auto lg:min-w-[220px] lg:flex-col">
              <a
                href={consultationUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#0B1B33",
                  backgroundColor: "#FFD928",
                  borderColor: "#FFD928",
                }}
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border px-5 py-3 text-center text-sm font-extrabold transition-colors hover:!border-white hover:!bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1B33]"
              >
                Talk to our team
                <span aria-hidden="true">→</span>
              </a>

              <Link
                href="/services"
                style={{
                  color: "#FFFFFF",
                  backgroundColor: "#0B1B33",
                  borderColor: "rgba(255,255,255,0.4)",
                }}
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border-2 px-5 py-3 text-center text-sm font-bold transition-colors hover:!border-[#FFD928] hover:!text-[#FFD928] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD928] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1B33]"
              >
                View all services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
