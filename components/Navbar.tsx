"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-40 transition-[background,backdrop-filter,border-color] duration-300",
        scrolled || open ? "glass" : "bg-transparent border-b border-transparent"
      )}
    >
      <nav
        className="container-site flex items-center justify-between px-5 md:px-8 h-[72px]"
        aria-label="Primary"
      >
        <a
          href="#top"
          className="text-[12px] tracking-[0.28em] uppercase font-medium text-white"
        >
          Raja AI Systems
        </a>

        <ul className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[11px] tracking-[0.22em] uppercase text-[#8a8f98] hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center min-h-11 px-4 text-[11px] tracking-[0.2em] uppercase font-semibold text-white border border-white/15 rounded-full hover:border-white/40 hover:bg-white/5 transition-colors"
        >
          Start a project
        </a>

        <button
          type="button"
          className="lg:hidden relative w-11 h-11 flex items-center justify-center"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={cn(
              "absolute w-5 h-px bg-white transition-transform duration-300",
              open ? "rotate-45" : "-translate-y-1.5"
            )}
          />
          <span
            className={cn(
              "absolute w-5 h-px bg-white transition-opacity duration-200",
              open ? "opacity-0" : "opacity-100"
            )}
          />
          <span
            className={cn(
              "absolute w-5 h-px bg-white transition-transform duration-300",
              open ? "-rotate-45" : "translate-y-1.5"
            )}
          />
        </button>
      </nav>

      <div
        className={cn(
          "lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          open ? "max-h-[100dvh] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-6 pb-10 pt-4 flex flex-col gap-1 bg-[#050505]/95">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${80 + i * 40}ms` : "0ms" }}
              className="py-4 text-3xl tracking-tight text-white border-b border-white/8"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-8 btn btn-primary w-full"
          >
            Start a project
          </a>
        </div>
      </div>
    </header>
  );
}
