
import Link from "next/link";
import { whatsappUrl } from "@/config/site";

const services = [
  {
    id: "marketplace-setup",
    number: "01",
    icon: "🛒",
    category: "SELLER ONBOARDING",
    title: "Marketplace Setup",
    description:
      "Start selling online with guidance on choosing platforms and understanding the seller registration process.",
    features: [
      "Amazon, Flipkart and Meesho setup guidance",
      "Seller registration requirements",
      "Product listing and catalog guidance",
      "Account setup and onboarding support",
    ],
  },
  {
    id: "website-branding",
    number: "02",
    icon: "🌐",
    category: "YOUR OWN BRAND",
    title: "Website & Branding",
    description:
      "Build your online identity with a professional website and a clear brand presentation.",
    features: [
      "E-commerce website planning",
      "Domain and website guidance",
      "Brand identity and product presentation",
      "Online store setup support",
    ],
  },
  {
    id: "quick-commerce",
    number: "03",
    icon: "⚡",
    category: "FASTER REACH",
    title: "Quick Commerce",
    description:
      "Explore quick-commerce opportunities and understand the steps involved in taking your products to new channels.",
    features: [
      "Platform suitability guidance",
      "Product and catalog readiness",
      "Onboarding requirements",
      "Channel expansion planning",
    ],
  },
  {
    id: "logistics",
    number: "04",
    icon: "📦",
    category: "DELIVERY & FULFILMENT",
    title: "Courier & Logistics",
    description:
      "Understand shipping options and plan a practical delivery process for your online orders.",
    features: [
      "Courier service options",
      "Shipping workflow planning",
      "Packaging and dispatch guidance",
      "Delivery process improvement",
    ],
  },
  {
    id: "brand-support",
    number: "05",
    icon: "🏷️",
    category: "BUILD YOUR BRAND",
    title: "Brand & Product Support",
    description:
      "Prepare your business and products for online selling with practical guidance on brand-related processes.",
    features: [
      "Brand registry process guidance",
      "Product catalog preparation",
      "Listing content improvement",
      "Brand growth planning",
    ],
  },
  {
    id: "seller-tools",
    number: "06",
    icon: "🤖",
    category: "WORK SMARTER",
    title: "AI Tools for Sellers",
    description:
      "Discover digital tools and AI-assisted workflows for product content, marketing, and everyday seller tasks.",
    features: [
      "AI product description ideas",
      "Listing and keyword assistance",
      "Social media content ideas",
      "Seller productivity tools",
    ],
  },
];

const enquiryUrl = (service: string) =>
  `${whatsappUrl}${whatsappUrl.includes("?") ? "&" : "?"}text=${encodeURIComponent(
    `Hi ZSell! I would like to know more about ${service}. Please guide me on the next steps.`
  )}`;

const primaryButtonStyle = {
  backgroundColor: "#FFD928",
  color: "#0B1B33",
  border: "2px solid #FFD928",
};

const secondaryButtonStyle = {
  backgroundColor: "#0B1B33",
  color: "#FFFFFF",
  border: "2px solid #FFFFFF",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-white text-[#0B1B33]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0B1B33] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#FF5A1F]/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-16 h-64 w-64 rounded-full bg-[#FFD928]/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#FFD928]/30 bg-white/5 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#FFD928] sm:text-sm">
            <span aria-hidden="true">✦</span>
            ZSell Services
          </span>

          <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(260px,0.65fr)] lg:items-end lg:gap-12">
            <div>
              <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Everything you need to{" "}
                <span className="text-[#FF5A1F]">sell online.</span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Apna business online le jaana hai? From marketplace setup to
                building your own brand, website, and delivery process,
                explore support for every stage of your selling journey.
              </p>

              {/* Fixed, clearly visible CTA buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={enquiryUrl("ZSell services")}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={primaryButtonStyle}
                  className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full px-6 py-3 text-center text-sm font-extrabold transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1B33]"
                >
                  <span>Discuss Your Business</span>
                  <span aria-hidden="true">→</span>
                </a>

                <Link
                  href="/#how-it-works"
                  style={secondaryButtonStyle}
                  className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full px-6 py-3 text-center text-sm font-extrabold transition-transform hover:-translate-y-0.5 hover:!border-[#FFD928] hover:!text-[#FFD928] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD928] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1B33]"
                >
                  <span>How It Works</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:rounded-3xl sm:p-7">
              <p className="text-sm font-bold text-[#FFD928]">
                Built around your business
              </p>
              <p className="mt-3 text-2xl font-extrabold leading-snug text-white sm:text-3xl">
                Start. Sell. Scale.
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Explore the options, understand the process, and choose the
                next step that fits your business goals.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {["New sellers", "Growing brands", "Existing businesses"].map(
                  (audience) => (
                    <span
                      key={audience}
                      className="rounded-full border border-white/15 px-3 py-2 text-xs font-semibold text-slate-200"
                    >
                      {audience}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section
        aria-labelledby="service-list-heading"
        className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#E84912] sm:text-sm">
              Explore your options
            </p>

            <h2
              id="service-list-heading"
              className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
            >
              The right support for your next step.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Choose a service to learn more or contact our team to discuss
              what your business needs.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {services.map((service) => (
              <article
                key={service.id}
                id={service.id}
                className="group flex min-w-0 scroll-mt-24 flex-col rounded-2xl border border-slate-200 bg-[#F7F8FA] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#FF5A1F]/40 hover:bg-white hover:shadow-xl sm:rounded-3xl sm:p-7"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#FFD928]/30 text-2xl transition-transform duration-300 group-hover:scale-105">
                    <span aria-hidden="true">{service.icon}</span>
                  </span>

                  <span className="text-sm font-extrabold tracking-widest text-slate-400">
                    {service.number}
                  </span>
                </div>

                <p className="mt-6 text-[10px] font-extrabold tracking-[0.14em] text-[#E84912] sm:text-xs sm:tracking-[0.16em]">
                  {service.category}
                </p>

                <h3 className="mt-2 text-xl font-extrabold leading-snug sm:text-2xl">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>

                <ul className="mt-5 space-y-3 border-t border-slate-200 pt-5">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm leading-6 text-slate-700"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0B1B33] text-xs font-bold text-[#FFD928]"
                      >
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={enquiryUrl(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: "#0B1B33",
                    color: "#FFFFFF",
                    border: "2px solid #0B1B33",
                  }}
                  className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-center text-sm font-bold transition-colors hover:!border-[#FF5A1F] hover:!bg-[#FF5A1F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A1F] focus-visible:ring-offset-2"
                >
                  <span>Enquire on WhatsApp</span>
                  <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 pb-14 sm:px-6 sm:pb-20 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-2xl bg-[#0B1B33] p-6 sm:rounded-3xl sm:p-9 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:p-12">
          <div className="max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#FFD928] sm:text-sm">
              Not sure where to begin?
            </p>

            <h2 className="mt-3 text-2xl font-extrabold leading-tight text-white sm:text-3xl">
              Let&apos;s figure out your next step together.
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
              Tell us about your business idea or current challenges. We can
              discuss which services may be suitable for you.
            </p>
          </div>

          <a
            href={enquiryUrl("a consultation")}
            target="_blank"
            rel="noopener noreferrer"
            style={primaryButtonStyle}
            className="inline-flex min-h-[52px] shrink-0 items-center justify-center gap-2 rounded-full px-6 py-3 text-center text-sm font-extrabold transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1B33]"
          >
            <span>Talk to ZSell</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </main>
  );
}
