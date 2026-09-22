"use client";

import dynamic from "next/dynamic";
import MagneticButton from "./MagneticButton";

const Hero3D = dynamic(() => import("./Hero3D"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 grid-fade" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(123,140,255,0.12),transparent_55%)]" />
    </div>
  ),
});

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100dvh] flex items-end overflow-hidden"
    >
      <Hero3D />
      <div className="relative z-10 container-site w-full px-5 md:px-8 pb-16 md:pb-24 pt-32">
        <p className="kicker mb-8 text-[#8a8f98]">Raja AI Systems</p>
        <h1 className="display text-[clamp(2.6rem,7.4vw,7.4rem)] text-white max-w-[14ch]">
          We build intelligent systems.
        </h1>
        <p className="mt-8 max-w-xl text-[#b4b8c2] text-lg md:text-xl leading-relaxed">
          AI infrastructure that turns complex business operations into
          intelligent, automated systems.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <MagneticButton href="#contact">Build your system</MagneticButton>
          <MagneticButton href="#capabilities" variant="ghost">
            Explore capabilities
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
