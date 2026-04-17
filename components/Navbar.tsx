"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
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
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const isHome = pathname === "/";

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

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-[background,border,backdrop-filter] duration-300 ${
        scrolled
          ? "backdrop-blur-md shadow-md"
          : "backdrop-blur-[2px]"
      }`}
      style={{
        background: scrolled
          ? "color-mix(in oklab, var(--background) 86%, transparent)"
          : "color-mix(in oklab, var(--background) 55%, transparent)",
        borderBottom: `1px solid ${scrolled ? "var(--rule)" : "transparent"}`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
        {/* ── Logo / Masthead ── */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group flex items-baseline gap-2 text-[color:var(--foreground)] hover:text-[color:var(--signal)] transition-colors"
        >
          <span className="font-display-italic text-2xl leading-none">
            AM
          </span>
          <span className="hidden sm:inline kicker text-[0.62rem] translate-y-[-1px]">
            / abhishek&nbsp;mathews
          </span>
        </button>

        {/* ── Section nav ── */}
        <div className="hidden sm:flex items-center gap-1">
          {isHome
            ? sectionLinks.map((link) => {
                const id = link.href.slice(1);
                const isActive = activeSection === id;
                return (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
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

        {/* ── Theme toggle ── */}
        <AnimatePresence mode="wait">
          {mounted && (
            <motion.button
              key={theme}
              initial={{ opacity: 0, rotate: -60 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 60 }}
              transition={{ duration: 0.25 }}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-9 h-9 flex items-center justify-center rounded-full border transition-colors hover:text-[color:var(--signal)]"
              style={{ borderColor: "var(--rule)", color: "var(--foreground)" }}
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
