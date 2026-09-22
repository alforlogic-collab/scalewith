"use client";

import { CAPABILITIES } from "@/lib/data";
import CapabilityCard from "./CapabilityCard";
import Reveal from "./Reveal";

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="section-pad"
      aria-labelledby="capabilities-heading"
    >
      <div className="container-site">
        <Reveal>
          <p className="kicker mb-5">Capabilities</p>
        </Reveal>
        <Reveal>
          <h2
            id="capabilities-heading"
            className="display text-[clamp(2rem,4.5vw,4.4rem)] text-white max-w-[16ch]"
          >
            Infrastructure, not isolated tools.
          </h2>
        </Reveal>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CAPABILITIES.map((c, i) => (
            <Reveal key={c.index} delay={i * 50}>
              <CapabilityCard {...c} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
