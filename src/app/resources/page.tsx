
import Link from "next/link";
import { whatsappUrl } from "@/config/site";

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

const resources = [
  {
    number: "01",
    icon: "🛒",
    category: "GETTING STARTED",
    title: "Beginner's Guide to Online Selling",
    description:
      "Understand the basics of starting an online business, choosing products, and exploring suitable selling channels.",
    takeaways: [
      "Understand marketplace selling",
      "Prepare for seller registration",
      "Plan your first steps",
    ],
    type: "Beginner guide",
    accent: "orange",
  },
  {
    number: "02",
    icon: "📋",
    category: "SELLER CHECKLIST",
    title: "Seller Account Preparation Checklist",
    description:
      "Organize the information and documents you may need before applying to sell on an online marketplace.",
    takeaways: [
      "Review platform requirements",
      "Organize business information",
      "Prepare product details",
    ],
    type: "Checklist",
    accent: "yellow",
  },
  {
    number: "03",
    icon: "📸",
    category: "PRODUCT LISTINGS",
    title: "Create Better Product Listings",
    description:
      "Learn how clear product titles, useful descriptions, accurate details, and good images support your catalog.",
    takeaways: [
      "Write informative titles",
      "Highlight product features",
      "Plan clear product images",
    ],
    type: "Practical guide",
    accent: "yellow",
  },
  {
    number: "04",
    icon: "🏷️",
    category: "BRANDING",
    title: "Build Your Own Brand",
    description:
      "Explore the basics of choosing a brand identity, presenting your products, and planning your online presence.",
    takeaways: [
      "Define your brand identity",
      "Improve product presentation",
      "Explore your own website",
    ],
    type: "Brand guide",
    accent: "orange",
  },
  {
    number: "05",
    icon: "📦",
    category: "SHIPPING & DELIVERY",
    title: "Understand E-commerce Shipping",
    description:
      "Learn about packaging, shipping workflows, delivery expectations, and the questions to ask courier providers.",
    takeaways: [
      "Compare shipping options",
      "Plan packaging requirements",
      "Understand dispatch workflows",
    ],
    type: "Learning guide",
    accent: "orange",
  },
  {
    number: "06",
    icon: "🤖",
    category: "AI FOR SELLERS",
    title: "Use AI in Your Business",
    description:
      "Discover practical ways to use AI for content ideas, product descriptions, marketing drafts, and routine tasks.",
    takeaways: [
      "Generate content ideas",
      "Draft product descriptions",
      "Review AI-generated content",
    ],
    type: "AI guide",
    accent: "yellow",
  },
];

const contactMessage =
  "Hi ZSell! I am looking for e-commerce seller guides and learning resources. Please guide me.";

const contactUrl = `${whatsappUrl}${whatsappUrl.includes("?") ? "&" : "?"}text=${encodeURIComponent(contactMessage)}`;

export default function ResourcesPage() {
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
            ZSell Learning Hub
          </span>

          <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(260px,0.6fr)] lg:items-center lg:gap-12">
            <div>
              <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Learn the business.
                <span className="mt-2 block text-[#FF5A1F]">
                  Grow with confidence.
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Explore practical e-commerce learning resources for new
                sellers, growing brands, and businesses looking to expand
                online.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#resource-library"
                  style={primaryButtonStyle}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-center text-sm font-extrabold transition-colors hover:!border-white hover:!bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1B33]"
                >
                  Explore Resources
                  <span aria-hidden="true">↓</span>
                </a>

                <Link
                  href="/services"
                  style={secondaryButtonStyle}
                  className="inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-center text-sm font-bold transition-colors hover:!border-[#FFD928] hover:!text-[#FFD928] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD928]"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:rounded-3xl sm:p-7">
              <p className="text-sm font-bold text-[#FFD928]">
                Learn at your own pace
              </p>

              <h2 className="mt-3 text-2xl font-extrabold leading-snug text-white sm:text-3xl">
                From your first listing to your next big step.
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                Break down complex processes into manageable tasks and make
                more informed decisions for your business.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Guides", "Checklists", "AI ideas"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/15 px-3 py-2 text-xs font-semibold text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resource library */}
      <section
        id="resource-library"
        aria-labelledby="resource-library-heading"
        className="scroll-mt-24 px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#FF5A1F] sm:text-sm">
              The resource library
            </p>

            <h2
              id="resource-library-heading"
              className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
            >
              Knowledge for every stage.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Start with the topic that matters most to your business and use
              these learning paths to plan your next steps.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {resources.map((resource) => {
              const isOrange = resource.accent === "orange";

              return (
                <article
                  key={resource.number}
                  className="group relative flex min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-[#F7F8FA] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#FF5A1F]/40 hover:bg-white hover:shadow-xl sm:rounded-3xl sm:p-7"
                >
                  <div
                    aria-hidden="true"
                    className={`absolute inset-x-0 top-0 h-1 ${
                      isOrange ? "bg-[#FF5A1F]" : "bg-[#FFD928]"
                    }`}
                  />

                  <div className="flex items-start justify-between gap-3">
                    <span
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl ${
                        isOrange ? "bg-[#FF5A1F]/10" : "bg-[#FFD928]/30"
                      }`}
                    >
                      <span aria-hidden="true">{resource.icon}</span>
                    </span>

                    <span className="text-sm font-extrabold tracking-widest text-slate-400">
                      {resource.number}
                    </span>
                  </div>

                  <p className="mt-6 text-[10px] font-extrabold tracking-[0.14em] text-[#FF5A1F] sm:text-xs sm:tracking-[0.16em]">
                    {resource.category}
                  </p>

                  <h3 className="mt-2 text-xl font-extrabold leading-snug sm:text-2xl">
                    {resource.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {resource.description}
                  </p>

                  <ul className="mt-5 space-y-3 border-t border-slate-200 pt-5">
                    {resource.takeaways.map((takeaway) => (
                      <li
                        key={takeaway}
                        className="flex items-start gap-2.5 text-sm leading-6 text-slate-700"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0B1B33] text-xs font-bold text-[#FFD928]"
                        >
                          ✓
                        </span>
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 border-t border-slate-200 pt-4">
                    <span className="inline-flex rounded-full bg-white px-3 py-1.5 text-xs font-bold text-slate-600 ring-1 ring-slate-200">
                      {resource.type}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-6 text-slate-500 sm:mt-10 sm:text-sm">
            These topics are learning pathways, not downloadable guides or
            interactive courses yet. Detailed articles and downloadable
            resources can be added as they become available.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 pb-14 sm:px-6 sm:pb-20 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-2xl bg-[#0B1B33] p-6 sm:rounded-3xl sm:p-9 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:p-12">
          <div className="max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#FFD928] sm:text-sm">
              Need a little guidance?
            </p>

            <h2 className="mt-3 text-2xl font-extrabold leading-tight text-white sm:text-3xl">
              Not sure which step to take next?
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
              Tell us about your business and the challenges you are facing.
              We can discuss suitable services and resources.
            </p>
          </div>

          <a
            href={contactUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={primaryButtonStyle}
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full px-6 py-3 text-center text-sm font-extrabold transition-colors hover:!border-white hover:!bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1B33]"
          >
            Ask ZSell
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </main>
  );
}
