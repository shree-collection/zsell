
import Link from "next/link";

import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import HowItWorks from "@/components/home/HowItWorks";
import AITools from "@/components/home/AITools";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FinalCTA from "@/components/home/FinalCTA";

const platforms = [
  { name: "Amazon", className: "font-extrabold tracking-tight" },
  { name: "Flipkart", className: "font-extrabold italic" },
  { name: "Meesho", className: "font-extrabold" },
  { name: "JioMart", className: "font-bold" },
  { name: "Snapdeal", className: "font-bold" },
];

const sellerTypes = [
  {
    icon: "🏪",
    title: "Small & Local Sellers",
    description:
      "Take your local shop online and explore new ways to reach customers.",
    action: "Explore selling options",
  },
  {
    icon: "📦",
    title: "Online Sellers",
    description:
      "Improve product listings, explore marketplaces, and strengthen your online presence.",
    action: "Improve your online store",
  },
  {
    icon: "🏭",
    title: "Wholesalers & Manufacturers",
    description:
      "Showcase your products through digital channels and reach more potential buyers.",
    action: "Explore digital channels",
  },
  {
    icon: "🚀",
    title: "Growing Brands",
    description:
      "Build your brand identity, launch a website, and develop your digital business.",
    action: "Build your brand",
  },
];

export default function Home() {
  return (
    <div className="w-full overflow-x-clip bg-white text-[#0B1B33]">
      {/* Hero */}
      <Hero />

      {/* Marketplace platforms */}
      <section
        aria-labelledby="marketplace-heading"
        className="border-y border-slate-200 bg-[#F7F8FA] px-4 py-7 sm:px-6 sm:py-9 lg:px-8"
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-5 lg:flex-row lg:justify-between lg:gap-8">
          <div className="text-center lg:text-left">
            <p
              id="marketplace-heading"
              className="text-xs font-extrabold uppercase leading-5 tracking-[0.13em] text-slate-600 sm:tracking-[0.15em]"
            >
              Where you can sell online
            </p>
            <p className="mt-1 text-xs leading-5 text-slate-500">
              Explore multiple selling channels with ZSell.
            </p>
          </div>

          <ul
            aria-label="Examples of online marketplaces"
            className="flex w-full flex-wrap items-center justify-center gap-x-5 gap-y-4 sm:gap-x-8 lg:flex-1 lg:gap-x-7"
          >
            {platforms.map((platform) => (
              <li key={platform.name}>
                <span
                  className={`whitespace-nowrap text-base text-slate-700 transition-colors duration-200 hover:text-[#FF5A1F] sm:text-xl ${platform.className}`}
                >
                  {platform.name}
                </span>
              </li>
            ))}
          </ul>

          <p className="text-center text-xs text-slate-500 lg:text-right">
            Plus websites and other channels
          </p>
        </div>
      </section>

      {/* Who we support */}
      <section
        id="who-we-support"
        aria-labelledby="seller-types-heading"
        className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-eyebrow">Who we support</p>

            <h2
              id="seller-types-heading"
              className="section-title mx-auto"
            >
              Every business deserves a chance to grow.
            </h2>

            <p className="section-description mx-auto">
              Whether you run a local shop, sell online, manufacture products,
              or manage a growing brand, ZSell helps you explore your next
              business opportunity.
            </p>
          </div>

          {/* Seller categories */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {sellerTypes.map((seller, index) => (
              <article
                key={seller.title}
                className="group flex h-full min-w-0 flex-col rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#FF5A1F]/40 hover:shadow-lg sm:rounded-3xl sm:p-6"
              >
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-2xl transition-transform duration-300 group-hover:scale-105 ${
                    index % 2 === 0
                      ? "bg-[#FF5A1F]/10"
                      : "bg-[#FFD928]/30"
                  }`}
                  aria-hidden="true"
                >
                  {seller.icon}
                </span>

                <h3 className="mt-5 text-lg font-extrabold leading-snug text-[#0B1B33]">
                  {seller.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                  {seller.description}
                </p>

                <Link
                  href="/services"
                  className="mt-5 inline-flex min-h-10 items-center gap-2 self-start text-sm font-bold text-[#E84912] transition-colors hover:text-[#0B1B33] focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A1F] focus-visible:ring-offset-2"
                >
                  {seller.action}
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Core services */}
      <Services />

      {/* How it works */}
      <HowItWorks />

      {/* AI tools */}
      <AITools />

      {/* Why choose ZSell */}
      <WhyChooseUs />

      {/* Final call to action */}
      <FinalCTA />
    </div>
  );
}
