"use client";

import { useState } from "react";
import { INDUSTRIES } from "@/lib/data";
import Reveal from "./Reveal";
import { cn } from "@/lib/utils";

export default function IndustryExplorer() {
  const [active, setActive] = useState(0);
  const current = INDUSTRIES[active];

  return (
    <section className="section-pad" aria-labelledby="industries-heading">
      <div className="container-site">
        <Reveal>
          <p className="kicker mb-5">Industries</p>
        </Reveal>
        <Reveal>
          <h2
            id="industries-heading"
            className="display text-[clamp(2rem,4.5vw,4.4rem)] text-white max-w-[16ch]"
          >
            Systems designed around how a business actually runs.
          </h2>
        </Reveal>
        <p className="mt-6 max-w-xl text-[#8a8f98]">
          These are categories the architecture can be designed for — not a list of
          claimed clients.
        </p>

        <div className="mt-12 grid lg:grid-cols-[1fr_0.9fr] gap-8">
          <ul className="grid sm:grid-cols-2 gap-2">
            {INDUSTRIES.map((ind, i) => (
              <li key={ind.name}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  className={cn(
                    "w-full min-h-14 px-5 text-left text-sm tracking-[0.12em] uppercase border rounded-xl transition-colors duration-200",
                    i === active
                      ? "bg-white text-[#050505] border-white"
                      : "bg-transparent text-[#c5c9d4] border-white/10 hover:border-white/30"
                  )}
                >
                  {ind.name}
                </button>
              </li>
            ))}
          </ul>
          <div className="card p-8 md:p-10 flex flex-col justify-center min-h-[220px]">
            <p className="kicker mb-4">Designed for</p>
            <h3 className="text-3xl tracking-tight text-white">{current.name}</h3>
            <p className="mt-5 text-[#9aa0ab] text-lg leading-relaxed">{current.copy}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
