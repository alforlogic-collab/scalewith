"use client";

import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section-pad" aria-labelledby="about-heading">
      <div className="container-site grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-end">
        <div>
          <Reveal>
            <p className="kicker mb-5">About</p>
          </Reveal>
          <Reveal>
            <h2
              id="about-heading"
              className="display text-[clamp(2rem,4.6vw,4.6rem)] text-white max-w-[14ch]"
            >
              We don&apos;t just add AI. We design systems around it.
            </h2>
          </Reveal>
        </div>
        <Reveal delay={80}>
          <p className="text-lg text-[#9aa0ab] leading-relaxed max-w-xl">
            Raja AI Systems connects intelligent agents, automation, data and
            customer experiences into practical business systems. The work is
            architectural: decide what should think, what should run, and what
            should remain human — then build the infrastructure that holds it
            together.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
