
import Link from "next/link";

const tools = [
  {
    icon: "✍️",
    category: "PRODUCT CONTENT",
    title: "AI Product Description",
    description:
      "Create clear, engaging product descriptions to present your products professionally online.",
    accent: "orange",
  },
  {
    icon: "🔎",
    category: "SEO & LISTINGS",
    title: "Listing Optimization",
    description:
      "Improve product titles, keywords, and listing content to make your products easier to discover.",
    accent: "yellow",
  },
  {
    icon: "📱",
    category: "SOCIAL MEDIA",
    title: "Social Media Content",
    description:
      "Generate content ideas, captions, and post drafts to support your online marketing.",
    accent: "yellow",
  },
  {
    icon: "📊",
    category: "SELLER PRODUCTIVITY",
    title: "Smart Seller Tools",
    description:
      "Explore practical digital tools that simplify repetitive tasks and everyday seller workflows.",
    accent: "orange",
  },
];

export default function AITools() {
  return (
    <section
      id="ai-tools"
      aria-labelledby="ai-tools-heading"
      className="w-full overflow-x-clip bg-[#0B1B33] px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-8 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-10">
          <div className="min-w-0 max-w-3xl">
            <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#FFD928]/25 bg-white/5 px-3 py-2 text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#FFD928] sm:px-4 sm:text-sm sm:tracking-[0.18em]">
              <span aria-hidden="true">✦</span>
              AI-powered productivity
            </span>

            <h2
              id="ai-tools-heading"
              className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Work smarter with{" "}
              <span className="text-[#FF5A1F]">AI tools.</span>
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:mt-5 sm:text-base sm:leading-8 lg:text-lg">
              Spend less time on repetitive tasks and more time building
              your business. Explore useful tools and ideas designed for
              online sellers.
            </p>
          </div>

          <Link
            href="/ai-tools"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-[#FFD928] bg-[#FFD928] px-5 py-3 text-center text-sm font-extrabold !text-[#0B1B33] transition-colors hover:border-white hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1B33] sm:w-fit sm:px-6 sm:text-base"
          >
            Explore All AI Tools
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:mt-16 lg:grid-cols-4">
          {tools.map((tool, index) => {
            const isOrange = tool.accent === "orange";

            return (
              <article
                key={tool.title}
                className="group relative flex min-w-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#192B44] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#FF5A1F]/60 hover:bg-[#203650] hover:shadow-2xl sm:rounded-3xl sm:p-6 lg:p-7"
              >
                <div
                  aria-hidden="true"
                  className={`absolute inset-x-0 top-0 h-1 ${
                    isOrange ? "bg-[#FF5A1F]" : "bg-[#FFD928]"
                  }`}
                />

                <div className="flex items-start justify-between gap-3">
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl transition-transform duration-300 group-hover:scale-105 sm:h-14 sm:w-14 sm:rounded-2xl ${
                      isOrange ? "bg-[#FF5A1F]/15" : "bg-[#FFD928]/15"
                    }`}
                  >
                    <span aria-hidden="true">{tool.icon}</span>
                  </span>

                  <span className="text-sm font-extrabold tabular-nums text-slate-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="mt-5 text-[10px] font-extrabold tracking-[0.14em] text-[#FFD928] sm:mt-6 sm:tracking-[0.16em]">
                  {tool.category}
                </p>

                <h3 className="mt-3 text-lg font-extrabold leading-snug text-white sm:text-xl">
                  {tool.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-slate-300">
                  {tool.description}
                </p>

                <Link
                  href="/ai-tools"
                  aria-label={`Explore ${tool.title}`}
                  className="mt-5 inline-flex min-h-10 items-center gap-2 self-start text-sm font-bold text-white transition-colors hover:text-[#FFD928] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD928] focus-visible:ring-offset-4 focus-visible:ring-offset-[#192B44] sm:mt-6"
                >
                  Explore tool
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex min-w-0 flex-col gap-5 rounded-2xl border border-white/10 bg-[#192B44] p-5 sm:mt-12 sm:rounded-3xl sm:p-7 lg:mt-14 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:p-9">
          <div className="flex min-w-0 items-start gap-3 sm:gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FF5A1F] text-xl text-white sm:h-12 sm:w-12 sm:rounded-2xl">
              <span aria-hidden="true">✨</span>
            </span>

            <div className="min-w-0">
              <h3 className="text-lg font-extrabold leading-snug text-white sm:text-xl">
                Your next business task could be easier.
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-300">
                Discover tools and resources that can help you create
                content, organize your work, and improve your selling
                workflow.
              </p>
            </div>
          </div>

          <Link
            href="/ai-tools"
            className="inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2 rounded-full border border-white/35 bg-transparent px-5 py-3 text-center text-sm font-bold text-white transition-colors hover:border-[#FFD928] hover:bg-[#FFD928] hover:text-[#0B1B33] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD928] focus-visible:ring-offset-2 focus-visible:ring-offset-[#192B44] sm:px-6 lg:w-auto"
          >
            Discover the tools
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
