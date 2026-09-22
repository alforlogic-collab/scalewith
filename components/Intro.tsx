"use client";

import Reveal from "./Reveal";

export default function Intro() {
  return (
    <section className="section-pad" aria-labelledby="intro-heading">
      <div className="container-site">
        <Reveal>
          <p className="kicker mb-8">The premise</p>
        </Reveal>
        <h2
          id="intro-heading"
          className="display text-[clamp(2rem,5.2vw,5.2rem)] text-white max-w-[16ch]"
        >
          <Reveal as="span" className="block">
            Your business doesn&apos;t need more software.
          </Reveal>
          <Reveal as="span" className="block mt-3 text-[#8a8f98]" delay={120}>
            It needs a system.
          </Reveal>
        </h2>
        <Reveal delay={180}>
          <p className="mt-10 max-w-2xl text-[#9aa0ab] text-lg leading-relaxed">
            Raja AI Systems designs and deploys intelligent infrastructure that
            connects AI agents, automation, customer interactions, data and
            business workflows into one operating system.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
