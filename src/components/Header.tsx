
"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  siteConfig,
  whatsappUrl,
  emailUrl,
} from "@/config/site";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "AI Tools", href: "/ai-tools" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const getStartedUrl = `${whatsappUrl}?text=${encodeURIComponent(
  "Hi ZSell, I would like to grow my online business."
)}`;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const searchInputRef = useRef<HTMLInputElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const searchButtonRef = useRef<HTMLButtonElement>(null);

  const closePanels = useCallback(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, []);

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const query = searchTerm.trim();

    if (!query) {
      searchInputRef.current?.focus();
      return;
    }

    closePanels();
    window.location.href = `/?search=${encodeURIComponent(query)}#services`;
  }

  function toggleMenu() {
    setMenuOpen((open) => !open);
    setSearchOpen(false);
  }

  function toggleSearch() {
    setSearchOpen((open) => !open);
    setMenuOpen(false);
  }

  useEffect(() => {
    if (searchOpen) {
      searchInputRef.current?.focus();
    }
  }, [searchOpen]);

  useEffect(() => {
    if (!menuOpen && !searchOpen) return;

    function handleEscape(event: KeyboardEvent) {
      if (event.key !== "Escape") return;

      if (menuOpen) {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      } else {
        setSearchOpen(false);
        searchButtonRef.current?.focus();
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen, searchOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="site-header sticky top-0 z-50 w-full bg-white">
      {/* Top contact bar */}
      <div className="border-b border-white/10 bg-[#0B1B33] text-white">
        <div className="mx-auto flex min-h-9 w-full max-w-7xl flex-wrap items-center justify-center gap-x-4 gap-y-1 px-4 py-2 text-xs sm:justify-between sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 sm:justify-start">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-7 items-center gap-2 text-white transition-colors hover:text-[#FFD928] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD928]"
            >
              <span className="text-[#FFD928]" aria-hidden="true">
                ☎
              </span>
              <span>{siteConfig.whatsappDisplay}</span>
            </a>

            <a
              href={emailUrl}
              className="hidden min-h-7 items-center gap-2 text-white transition-colors hover:text-[#FFD928] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD928] sm:inline-flex"
            >
              <span className="text-[#FFD928]" aria-hidden="true">
                ✉
              </span>
              <span className="break-all">{siteConfig.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ZSell on Instagram"
              className="inline-flex min-h-7 items-center font-bold text-[#FFD928] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD928]"
            >
              Instagram ↗
            </a>

            <span
              aria-hidden="true"
              className="hidden h-4 w-px bg-white/20 sm:block"
            />

            <label className="flex items-center">
              <span className="sr-only">Choose language</span>
              <select
                value={language}
                onChange={(event) => setLanguage(event.target.value)}
                aria-label="Choose language"
                className="min-h-8 max-w-[100px] cursor-pointer rounded-md border-0 bg-transparent px-1 text-xs text-white outline-none focus-visible:ring-2 focus-visible:ring-[#FFD928]"
              >
                <option value="en" className="text-slate-900">
                  English
                </option>
                <option value="hi" className="text-slate-900">
                  हिंदी
                </option>
              </select>
            </label>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="relative border-b border-slate-200 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex min-h-[64px] w-full max-w-7xl items-center justify-between gap-2 px-4 sm:min-h-[76px] sm:gap-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            onClick={closePanels}
            aria-label={`${siteConfig.name} home`}
            className="inline-flex min-w-0 shrink-0 items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A1F]"
          >
            <span className="whitespace-nowrap text-[30px] font-black leading-none tracking-[-0.075em] sm:text-[37px]">
              <span className="bg-gradient-to-br from-[#FF5A1F] to-[#E84912] bg-clip-text text-transparent">
                Z
              </span>
              <span className="text-[#0B1B33]">Sell</span>
            </span>

            <span className="ml-2 hidden border-l border-slate-200 pl-2 text-[9px] font-extrabold uppercase leading-[1.5] tracking-[0.1em] text-[#0B1B33] sm:ml-3 sm:block sm:pl-3 sm:text-[10px]">
              Sell Smart.
              <br />
              Grow Fast.
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav
            className="hidden items-center gap-3 xl:flex 2xl:gap-5"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="whitespace-nowrap text-[12px] font-bold text-[#263449] transition-colors hover:text-[#FF5A1F] focus-visible:outline-none focus-visible:underline focus-visible:underline-offset-4 2xl:text-[13px]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Header actions */}
          <div className="flex shrink-0 items-center gap-2">
            {/* Search toggle — available on mobile and desktop */}
            <button
              ref={searchButtonRef}
              type="button"
              onClick={toggleSearch}
              aria-label={searchOpen ? "Close search" : "Open search"}
              aria-expanded={searchOpen}
              aria-controls="header-search"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-xl text-[#0B1B33] transition-colors hover:border-[#FF5A1F] hover:text-[#FF5A1F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A1F] sm:h-11 sm:w-11"
            >
              <span aria-hidden="true">{searchOpen ? "×" : "⌕"}</span>
            </button>

            {/* WhatsApp CTA */}
            <a
              href={getStartedUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#0B1B33",
                backgroundColor: "#FFD928",
              }}
              className="hidden min-h-11 items-center justify-center gap-2 rounded-full px-4 text-sm font-extrabold transition-colors hover:!bg-[#F0C400] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B1B33] focus-visible:ring-offset-2 sm:inline-flex sm:px-5"
            >
              <span className="hidden md:inline">Get Started</span>
              <span className="md:hidden">Start</span>
              <span aria-hidden="true">→</span>
            </a>

            {/* Mobile menu toggle */}
            <button
              ref={menuButtonRef}
              type="button"
              onClick={toggleMenu}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-xl text-[#0B1B33] transition-colors hover:border-[#FF5A1F] hover:text-[#FF5A1F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A1F] xl:hidden sm:h-11 sm:w-11"
            >
              <span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
            </button>
          </div>
        </div>

        {/* Search panel */}
        {searchOpen && (
          <div
            id="header-search"
            className="border-t border-slate-200 bg-white"
          >
            <form
              onSubmit={handleSearch}
              className="mx-auto flex w-full max-w-7xl items-center gap-2 px-4 py-3 sm:gap-3 sm:px-6 sm:py-4 lg:px-8"
            >
              <label htmlFor="header-search-input" className="sr-only">
                Search services and resources
              </label>

              <input
                ref={searchInputRef}
                id="header-search-input"
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search services and resources..."
                className="min-h-11 min-w-0 flex-1 rounded-xl border border-slate-200 px-3 py-2 text-sm text-[#0B1B33] outline-none focus:border-[#FF5A1F] focus:ring-2 focus:ring-[#FF5A1F]/15 sm:px-4"
              />

              <button
                type="submit"
                className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-xl bg-[#0B1B33] px-4 text-sm font-extrabold text-white transition-colors hover:bg-[#172A45] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A1F] sm:px-5"
              >
                Search
              </button>
            </form>
          </div>
        )}

        {/* Mobile menu backdrop and navigation */}
        {menuOpen && (
          <>
            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={closePanels}
              className="fixed inset-x-0 bottom-0 top-0 z-40 cursor-default bg-[#0B1B33]/35 xl:hidden"
            />

            <nav
              id="mobile-navigation"
              aria-label="Mobile navigation"
              className="absolute left-0 right-0 top-full z-50 max-h-[calc(100dvh-80px)] overflow-y-auto border-t border-slate-200 bg-white shadow-xl xl:hidden"
            >
              <div className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
                {navigation.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={closePanels}
                    className="flex min-h-12 items-center rounded-xl px-4 py-3 text-sm font-bold text-[#263449] transition-colors hover:bg-[#FFF4EF] hover:text-[#E84912] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A1F]"
                  >
                    {item.label}
                  </Link>
                ))}

                <a
                  href={getStartedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closePanels}
                  style={{
                    color: "#0B1B33",
                    backgroundColor: "#FFD928",
                  }}
                  className="mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-extrabold transition-colors hover:!bg-[#F0C400] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B1B33]"
                >
                  Get Started on WhatsApp
                  <span aria-hidden="true">→</span>
                </a>

                <a
                  href={emailUrl}
                  onClick={closePanels}
                  className="mt-1 flex min-h-11 items-center justify-center rounded-xl px-3 text-sm font-semibold text-slate-600 transition-colors hover:text-[#FF5A1F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A1F] sm:hidden"
                >
                  {siteConfig.email}
                </a>
              </div>
            </nav>
          </>
        )}
      </div>
    </header>
  );
}
