
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

const tools = [
  {
    number: "01",
    icon: "✍️",
    category: "PRODUCT CONTENT",
    title: "AI Product Description",
    description:
      "Create clear, attractive product descriptions that explain your product's features and benefits to potential customers.",
    benefits: [
      "Product highlights and key features",
      "Customer-friendly descriptions",
      "Content ideas for product listings",
    ],
    status: "Planned tool",
    accent: "orange",
  },
  {
    number: "02",
    icon: "🔎",
    category: "SEO & LISTINGS",
    title: "Listing Optimization",
    description:
      "Explore ideas for better product titles, relevant keywords, and organized listing content.",
    benefits: [
      "Product title suggestions",
      "Keyword and search-term ideas",
      "Listing content improvements",
    ],
    status: "Planned tool",
    accent: "yellow",
  },
  {
    number: "03",
    icon: "📱",
    category: "SOCIAL MEDIA",
    title: "Social Media Content",
    description:
      "Get inspiration for social posts, captions, promotional messages, and content calendars for your business.",
    benefits: [
      "Caption and post ideas",
      "Promotional content drafts",
      "Content planning inspiration",
    ],
    status: "Planned tool",
    accent: "yellow",
  },
  {
    number: "04",
    icon: "📊",
    category: "SELLER PRODUCTIVITY",
    title: "Smart Seller Tools",
    description:
      "Discover practical digital utilities that can help organize information and simplify everyday seller tasks.",
    benefits: [
      "Useful online utilities",
      "Everyday workflow assistance",
      "Ideas for saving time",
    ],
    status: "In development",
    accent: "orange",
  },
];

const contactMessage =
  "Hi ZSell! I am interested in your AI tools for e-commerce sellers. Please share more details.";

const contactUrl = `${whatsappUrl}${whatsappUrl.includes("?") ? "&" : "?"}text=${encodeURIComponent(contactMessage)}`;

export default function AIToolsPage() {
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
            ZSell AI Tools
          </span>

          <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(260px,0.6fr)] lg:items-center lg:gap-12">
            <div>
              <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Work smarter.
                <span className="mt-2 block text-[#FF5A1F]">
                  Grow your business.
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Discover AI-powered ideas and digital resources for product
                descriptions, online listings, social media, and everyday
                e-commerce tasks.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={contactUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={primaryButtonStyle}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-center text-sm font-extrabold transition-colors hover:!border-white hover:!bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1B33]"
                >
                  Ask About AI Tools
                  <span aria-hidden="true">→</span>
                </a>

                <Link
                  href="/#services"
                  style={secondaryButtonStyle}
                  className="inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-center text-sm font-bold transition-colors hover:!border-[#FFD928] hover:!text-[#FFD928] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD928]"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:rounded-3xl sm:p-7">
              <p className="text-sm font-bold text-[#FFD928]">
                Built for online sellers
              </p>

              <h2 className="mt-3 text-2xl font-extrabold leading-snug text-white sm:text-3xl">
                Less repetitive work. More time to grow.
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                Explore ways to improve product content, organize your
                workflow, and plan your next business move.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Product content", "Marketing", "Productivity"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/15 px-3 py-2 text-xs font-semibold text-slate-200"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Tools */}
      <section
        id="tools"
        aria-labelledby="tools-heading"
        className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#FF5A1F] sm:text-sm">
              Explore the possibilities
            </p>

            <h2
              id="tools-heading"
              className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
            >
              Useful tools for everyday selling.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              From product content to marketing ideas, explore the tools
              ZSell is building to support online sellers.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {tools.map((tool) => {
              const isOrange = tool.accent === "orange";

              return (
                <article
                  key={tool.number}
                  className="group relative flex min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-[#F7F8FA] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#FF5A1F]/40 hover:bg-white hover:shadow-xl sm:rounded-3xl sm:p-6 lg:p-7"
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
                      <span aria-hidden="true">{tool.icon}</span>
                    </span>

                    <span className="text-sm font-extrabold tracking-widest text-slate-400">
                      {tool.number}
                    </span>
                  </div>

                  <p className="mt-6 text-[10px] font-extrabold tracking-[0.14em] text-[#FF5A1F] sm:text-xs sm:tracking-[0.16em]">
                    {tool.category}
                  </p>

                  <h3 className="mt-2 text-xl font-extrabold leading-snug sm:text-2xl">
                    {tool.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {tool.description}
                  </p>

                  <ul className="mt-5 space-y-3 border-t border-slate-200 pt-5">
                    {tool.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-2.5 text-sm leading-6 text-slate-700"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0B1B33] text-xs font-bold text-[#FFD928]"
                        >
                          ✓
                        </span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 border-t border-slate-200 pt-4">
                    <span
                      className={`inline-flex rounded-full px-3 py-1.5 text-xs font-bold ${
                        tool.status === "In development"
                          ? "bg-[#FF5A1F]/10 text-[#B9380B]"
                          : "bg-[#FFD928]/30 text-[#654D00]"
                      }`}
                    >
                      {tool.status}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 pb-14 sm:px-6 sm:pb-20 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-2xl bg-[#0B1B33] p-6 sm:rounded-3xl sm:p-9 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:p-12">
          <div className="max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#FFD928] sm:text-sm">
              Have an idea for a tool?
            </p>

            <h2 className="mt-3 text-2xl font-extrabold leading-tight text-white sm:text-3xl">
              Tell us what would make selling easier.
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
              Share the tasks that take up your time. Your feedback can help
              shape future ZSell tools and resources.
            </p>
          </div>

          <a
            href={contactUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={primaryButtonStyle}
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full px-6 py-3 text-center text-sm font-extrabold transition-colors hover:!border-white hover:!bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1B33]"
          >
            Share Your Idea
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </main>
  );
}
