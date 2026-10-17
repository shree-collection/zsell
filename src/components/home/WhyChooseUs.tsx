
import Link from "next/link";
import { whatsappUrl } from "@/config/site";

const benefits = [
  {
    number: "01",
    icon: "🎯",
    title: "Seller-Focused Solutions",
    description:
      "Practical guidance designed around your products, business goals, and online selling challenges.",
  },
  {
    number: "02",
    icon: "🧭",
    title: "Clear, Practical Guidance",
    description:
      "Understand your options and the next steps without getting lost in complicated processes.",
  },
  {
    number: "03",
    icon: "🛠️",
    title: "Services in One Place",
    description:
      "Explore marketplace setup, website planning, product support, logistics guidance, and more.",
  },
  {
    number: "04",
    icon: "🤖",
    title: "Useful Digital & AI Tools",
    description:
      "Discover tools and resources that can help simplify everyday business tasks and workflows.",
  },
];

const consultationUrl = `${whatsappUrl}${whatsappUrl.includes("?") ? "&" : "?"}text=${encodeURIComponent(
  "Hi ZSell! I would like to know more about your services for online sellers."
)}`;

export default function WhyChooseUs() {
  return (
    <section
      id="why-zsell"
      aria-labelledby="why-zsell-heading"
      className="w-full overflow-x-clip bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24"
    >
      <div className="mx-auto grid w-full max-w-7xl min-w-0 grid-cols-1 items-center gap-9 sm:gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="min-w-0">
          <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#FF5A1F]/20 bg-[#FF5A1F]/5 px-3 py-2 text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#FF5A1F] sm:px-4 sm:text-sm sm:tracking-[0.18em]">
            <span aria-hidden="true">✦</span>
            Why choose ZSell?
          </span>

          <h2
            id="why-zsell-heading"
            className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-[#0B1B33] sm:text-4xl lg:text-5xl"
          >
            Your partner for{" "}
            <span className="text-[#FF5A1F]">
              smarter online selling.
            </span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:mt-5 sm:text-base sm:leading-8 lg:text-lg">
            Starting and growing an online business can feel complicated.
            ZSell brings useful guidance, seller-focused services, and
            digital resources together to help you plan your next move.
          </p>

          <div className="mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap">
            <a
              href={consultationUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Talk to the ZSell team on WhatsApp"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-[#FFD928] bg-[#FFD928] px-6 py-3 text-center text-sm font-extrabold text-[#0B1B33] transition-colors hover:bg-[#ffe45c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B1B33] focus-visible:ring-offset-2 sm:w-auto"
            >
              Talk to our team
              <span aria-hidden="true">→</span>
            </a>

            <Link
              href="/#services"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-center text-sm font-bold text-[#0B1B33] transition-colors hover:border-[#FF5A1F] hover:text-[#FF5A1F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A1F] focus-visible:ring-offset-2 sm:w-auto"
            >
              Explore services
            </Link>
          </div>
        </div>

        <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          {benefits.map((benefit, index) => (
            <article
              key={benefit.number}
              className="group flex min-w-0 flex-col rounded-2xl border border-slate-200 bg-[#F7F8FA] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#FF5A1F]/40 hover:bg-white hover:shadow-xl sm:rounded-3xl sm:p-6 lg:p-7"
            >
              <div className="flex items-center justify-between gap-3">
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-xl transition-transform duration-300 group-hover:scale-105 sm:h-14 sm:w-14 sm:rounded-2xl ${
                    index % 2 === 0
                      ? "bg-[#FF5A1F]/10"
                      : "bg-[#FFD928]/30"
                  }`}
                >
                  <span aria-hidden="true">{benefit.icon}</span>
                </span>

                <span className="text-sm font-extrabold tracking-widest text-slate-300">
                  {benefit.number}
                </span>
              </div>

              <h3 className="mt-5 text-lg font-extrabold leading-snug text-[#0B1B33] sm:text-xl">
                {benefit.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="relative mx-auto mt-10 w-full max-w-7xl overflow-hidden rounded-2xl bg-[#0B1B33] px-5 py-7 sm:mt-16 sm:rounded-3xl sm:px-8 sm:py-9 lg:mt-20 lg:px-10 lg:py-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-[#FF5A1F]/15 blur-3xl sm:h-64 sm:w-64"
        />

        <div className="relative flex min-w-0 flex-col gap-6 sm:gap-7 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <div className="min-w-0">
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#FFD928] sm:text-sm sm:tracking-[0.18em]">
              The ZSell approach
            </p>

            <h3 className="mt-3 text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl">
              Sell smart. Grow fast.
            </h3>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              Get the guidance and resources you need to take your next
              step in e-commerce.
            </p>
          </div>

          <div className="w-full shrink-0 sm:w-auto">
            <a
              href={consultationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-[#FF5A1F] bg-[#FF5A1F] px-6 py-3 text-center text-sm font-extrabold text-white transition-colors hover:border-[#e84912] hover:bg-[#e84912] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD928] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1B33] sm:w-auto"
            >
              Connect with ZSell
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
