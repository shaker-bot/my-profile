"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { Menu, Moon, Sun, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sectionLinks = [
  { label: "Experience", href: "#experience", num: "01" },
  { label: "Skills",     href: "#skills",     num: "02" },
  { label: "Education",  href: "#education",  num: "03" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;
    const ids = sectionLinks.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [isHome]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [menuOpen]);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSectionClick = (href: string) => {
    scrollTo(href);
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
      aria-label="Primary"
      className={`fixed top-0 left-0 right-0 z-50 transition-[background,border,backdrop-filter] duration-300 ${
        scrolled
          ? "backdrop-blur-md shadow-md"
          : "backdrop-blur-[2px]"
      }`}
      style={{
        background: scrolled || menuOpen
          ? "color-mix(in oklab, var(--background) 92%, transparent)"
          : "color-mix(in oklab, var(--background) 55%, transparent)",
        borderBottom: `1px solid ${scrolled || menuOpen ? "var(--rule)" : "transparent"}`,
      }}
    >
      <a
        href="#main-content"
        className="sr-only focus-visible:not-sr-only focus-visible:absolute focus-visible:left-4 focus-visible:top-2 focus-visible:z-[60] focus-visible:px-3 focus-visible:py-1.5 focus-visible:font-mono-tight focus-visible:text-xs focus-visible:uppercase focus-visible:tracking-[0.18em]"
        style={{ background: "var(--signal)", color: "var(--background)" }}
      >
        Skip to content
      </a>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 h-14 flex items-center gap-2 relative">
        {/* ── Logo / Masthead (centered) ── */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
            className="group flex items-baseline gap-2 text-[color:var(--foreground)] hover:text-[color:var(--signal)] transition-colors min-h-[44px]"
          >
            <span className="font-display-italic text-2xl leading-none">
              AM
            </span>
            <span className="hidden sm:inline kicker text-[0.62rem] translate-y-[-1px]">
              / abhishek&nbsp;mathews
            </span>
          </button>
        </div>

        {/* ── Section nav (desktop) ── */}
        <div className="hidden sm:flex items-center gap-1">
          {isHome
            ? sectionLinks.map((link) => {
                const id = link.href.slice(1);
                const isActive = activeSection === id;
                return (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    aria-current={isActive ? "location" : undefined}
                    className={`group relative px-3 py-2 transition-colors ${
                      isActive
                        ? "text-blue-600 text-[color:var(--signal)]"
                        : "text-[color:var(--foreground)] hover:text-[color:var(--signal)]"
                    }`}
                  >
                    <span className="flex items-baseline gap-1.5">
                      <span aria-hidden="true" className="font-mono text-[0.62rem] opacity-60 tracking-widest">
                        {link.num}
                      </span>
                      <span className="font-mono-tight text-[0.82rem] uppercase tracking-[0.14em]">
                        {link.label}
                      </span>
                    </span>
                    {isActive ? (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute left-3 right-3 bottom-1 h-px"
                        style={{ background: "var(--signal)" }}
                      />
                    ) : (
                      <span
                        className="absolute left-3 right-3 bottom-1 h-px scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"
                        style={{ background: "currentColor" }}
                      />
                    )}
                  </button>
                );
              })
            : sectionLinks.map((link) => (
                <Link
                  key={link.href}
                  href={`/${link.href}`}
                  className="group relative px-3 py-2 text-[color:var(--foreground)] hover:text-[color:var(--signal)] transition-colors"
                >
                  <span className="flex items-baseline gap-1.5">
                    <span aria-hidden="true" className="font-mono text-[0.62rem] opacity-60 tracking-widest">{link.num}</span>
                    <span className="font-mono-tight text-[0.82rem] uppercase tracking-[0.14em]">{link.label}</span>
                  </span>
                  <span
                    className="absolute left-3 right-3 bottom-1 h-px scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"
                    style={{ background: "currentColor" }}
                  />
                </Link>
              ))}

          <div className="mx-2 h-5 w-px" style={{ background: "var(--rule)" }} aria-hidden="true" />

          <Link
            href="/hobbies"
            aria-current={pathname === "/hobbies" ? "page" : undefined}
            className={`group relative px-3 py-2 transition-colors ${
              pathname === "/hobbies"
                ? "text-blue-600 text-[color:var(--signal)]"
                : "text-[color:var(--foreground)] hover:text-[color:var(--signal)]"
            }`}
          >
            <span className="flex items-baseline gap-1.5">
              <span aria-hidden="true" className="font-mono text-[0.62rem] opacity-60 tracking-widest">04</span>
              <span className="font-mono-tight text-[0.82rem] uppercase tracking-[0.14em]">Hobbies</span>
            </span>
            {pathname === "/hobbies" ? (
              <span className="absolute left-3 right-3 bottom-1 h-px" style={{ background: "var(--signal)" }} />
            ) : (
              <span
                className="absolute left-3 right-3 bottom-1 h-px scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"
                style={{ background: "currentColor" }}
              />
            )}
          </Link>
        </div>

        {/* ── Right controls ── */}
        <div className="flex items-center gap-1 ml-auto">
          {/* Theme toggle */}
          <AnimatePresence mode="wait">
            {mounted && (
              <motion.button
                key={theme}
                initial={{ opacity: 0, rotate: -60 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 60 }}
                transition={{ duration: 0.25 }}
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-11 h-11 flex items-center justify-center rounded-full border transition-colors hover:text-[color:var(--signal)]"
                style={{ borderColor: "var(--rule)", color: "var(--foreground)" }}
                aria-label="Toggle dark mode"
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </motion.button>
            )}
          </AnimatePresence>

          {/* Mobile menu toggle */}
          <button
            ref={menuButtonRef}
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-panel"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden w-11 h-11 flex items-center justify-center rounded-full border transition-colors hover:text-[color:var(--signal)]"
            style={{ borderColor: "var(--rule)", color: "var(--foreground)" }}
          >
            {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* ── Mobile menu panel ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-panel"
            id="mobile-nav-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="sm:hidden border-t"
            style={{
              background: "color-mix(in oklab, var(--background) 96%, transparent)",
              borderColor: "var(--rule)",
            }}
          >
            <ul className="px-5 py-3">
              {isHome
                ? sectionLinks.map((link) => {
                    const id = link.href.slice(1);
                    const isActive = activeSection === id;
                    return (
                      <li key={link.href}>
                        <button
                          onClick={() => handleSectionClick(link.href)}
                          aria-current={isActive ? "location" : undefined}
                          className={`w-full flex items-baseline justify-between py-4 min-h-[44px] transition-colors ${
                            isActive
                              ? "text-[color:var(--signal)]"
                              : "text-[color:var(--foreground)] hover:text-[color:var(--signal)]"
                          }`}
                          style={{ borderBottom: "1px solid var(--rule)" }}
                        >
                          <span className="flex items-baseline gap-3">
                            <span aria-hidden="true" className="font-mono-tight text-[0.72rem] opacity-60 tracking-[0.2em]">
                              {link.num}
                            </span>
                            <span className="font-display text-xl leading-none">
                              {link.label}
                            </span>
                          </span>
                          <span
                            aria-hidden="true"
                            className="font-mono-tight text-[0.72rem] tracking-[0.18em] uppercase"
                          >
                            {isActive ? "Reading" : "Jump →"}
                          </span>
                        </button>
                      </li>
                    );
                  })
                : sectionLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={`/${link.href}`}
                        onClick={() => setMenuOpen(false)}
                        className="w-full flex items-baseline justify-between py-4 min-h-[44px] text-[color:var(--foreground)] hover:text-[color:var(--signal)] transition-colors"
                        style={{ borderBottom: "1px solid var(--rule)" }}
                      >
                        <span className="flex items-baseline gap-3">
                          <span aria-hidden="true" className="font-mono-tight text-[0.72rem] opacity-60 tracking-[0.2em]">
                            {link.num}
                          </span>
                          <span className="font-display text-xl leading-none">
                            {link.label}
                          </span>
                        </span>
                        <span aria-hidden="true" className="font-mono-tight text-[0.72rem] tracking-[0.18em] uppercase">
                          Jump →
                        </span>
                      </Link>
                    </li>
                  ))}
              <li>
                <Link
                  href="/hobbies"
                  onClick={() => setMenuOpen(false)}
                  aria-current={pathname === "/hobbies" ? "page" : undefined}
                  className={`w-full flex items-baseline justify-between py-4 min-h-[44px] transition-colors ${
                    pathname === "/hobbies"
                      ? "text-[color:var(--signal)]"
                      : "text-[color:var(--foreground)] hover:text-[color:var(--signal)]"
                  }`}
                >
                  <span className="flex items-baseline gap-3">
                    <span aria-hidden="true" className="font-mono-tight text-[0.72rem] opacity-60 tracking-[0.2em]">
                      04
                    </span>
                    <span className="font-display text-xl leading-none">
                      Hobbies
                    </span>
                  </span>
                  <span aria-hidden="true" className="font-mono-tight text-[0.72rem] tracking-[0.18em] uppercase">
                    {pathname === "/hobbies" ? "Here" : "Visit →"}
                  </span>
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
