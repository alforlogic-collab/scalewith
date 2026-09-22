import { NAV_LINKS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/8 px-5 md:px-8 py-16">
      <div className="container-site">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div>
            <p className="text-[12px] tracking-[0.28em] uppercase text-white">
              Raja AI Systems
            </p>
            <p className="mt-4 max-w-sm text-[#8a8f98] tracking-[0.04em]">
              Intelligent systems for modern business.
            </p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[11px] tracking-[0.2em] uppercase text-[#8a8f98] hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="text-[11px] tracking-[0.2em] uppercase text-[#8a8f98] hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-14 hairline" />

        <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[12px] text-[#5c616a]">
          <p>© {new Date().getFullYear()} Raja AI Systems</p>
          <p className="flex flex-wrap gap-6">
            <a href="mailto:hello@rajaaisystems.com" className="hover:text-white">
              hello@rajaaisystems.com
            </a>
            <a href="#" className="hover:text-white">
              LinkedIn
            </a>
            <a href="#" className="hover:text-white">
              X
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
