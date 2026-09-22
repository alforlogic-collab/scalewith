"use client";

import { SELECTED_SYSTEMS } from "@/lib/data";
import Reveal from "./Reveal";

export default function SystemDemo() {
  return (
    <section id="work" className="section-pad" aria-labelledby="work-heading">
      <div className="container-site">
        <Reveal>
          <p className="kicker mb-5">Work</p>
        </Reveal>
        <Reveal>
          <h2
            id="work-heading"
            className="display text-[clamp(2rem,4.5vw,4.4rem)] text-white max-w-[12ch]"
          >
            Selected systems
          </h2>
        </Reveal>
        <p className="mt-6 max-w-xl text-[#8a8f98]">
          Conceptual architectures. Labeled as demo or concept — not client case
          studies.
        </p>

        <div className="mt-14 grid md:grid-cols-2 gap-4">
          {SELECTED_SYSTEMS.map((s, i) => (
            <Reveal key={s.code} delay={i * 60}>
              <article className="card p-8 h-full group">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-[11px] tracking-[0.2em] text-[#7b8cff]">
                    {s.code}
                  </span>
                  <span className="text-[10px] tracking-[0.18em] uppercase text-[#8a8f98] border border-white/12 rounded-full px-3 py-1">
                    {s.kind}
                  </span>
                </div>
                <h3 className="mt-8 text-2xl md:text-3xl tracking-tight text-white group-hover:text-white">
                  {s.title}
                </h3>
                <p className="mt-4 text-[#9aa0ab] leading-relaxed">{s.summary}</p>
                <ul className="mt-8 flex flex-wrap gap-2">
                  {s.stack.map((tag) => (
                    <li
                      key={tag}
                      className="text-[10px] tracking-[0.16em] uppercase text-[#c5c9d4] border border-white/10 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
