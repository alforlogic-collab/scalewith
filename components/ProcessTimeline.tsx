"use client";

import { PROCESS_STEPS } from "@/lib/data";
import Reveal from "./Reveal";

export default function ProcessTimeline() {
  return (
    <section id="process" className="section-pad" aria-labelledby="process-heading">
      <div className="container-site">
        <Reveal>
          <p className="kicker mb-5">Process</p>
        </Reveal>
        <Reveal>
          <h2
            id="process-heading"
            className="display text-[clamp(2rem,4.5vw,4.4rem)] text-white max-w-[12ch]"
          >
            Designed. Then built.
          </h2>
        </Reveal>

        <ol className="mt-16 relative">
          <div className="hidden md:block absolute left-0 right-0 top-[18px] hairline" />
          {PROCESS_STEPS.map((step, i) => (
            <li
              key={step.index}
              className="md:grid md:grid-cols-5 gap-8 py-8 md:py-0 md:pb-4 border-b border-white/8 md:border-none"
            >
              <Reveal delay={i * 60} className="md:col-span-5 md:grid md:grid-cols-5 md:gap-8">
                <div className="flex items-start gap-4 md:block">
                  <span className="mt-1 md:mt-0 inline-flex w-9 h-9 rounded-full border border-white/20 items-center justify-center text-[11px] text-white bg-[#050505]">
                    {step.index}
                  </span>
                  <h3 className="md:mt-8 text-xl text-white tracking-tight">{step.title}</h3>
                </div>
                <p className="mt-3 md:mt-20 md:col-span-4 text-[#9aa0ab] max-w-xl leading-relaxed">
                  {step.body}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
