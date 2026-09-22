"use client";

import { useEffect, useState } from "react";
import { DEMO_STEPS } from "@/lib/data";
import Reveal from "./Reveal";
import { cn } from "@/lib/utils";
import { prefersReducedMotion } from "@/lib/utils";

export default function AIConsole() {
  const [step, setStep] = useState(0);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    if (!running || prefersReducedMotion()) return;
    const id = window.setInterval(() => {
      setStep((s) => (s + 1) % DEMO_STEPS.length);
    }, 1600);
    return () => window.clearInterval(id);
  }, [running]);

  return (
    <section className="section-pad" aria-labelledby="demo-heading">
      <div className="container-site">
        <Reveal>
          <p className="kicker mb-5">Live architecture</p>
        </Reveal>
        <Reveal>
          <h2
            id="demo-heading"
            className="display text-[clamp(2rem,4.5vw,4.4rem)] text-white max-w-[14ch]"
          >
            From signal to outcome.
          </h2>
        </Reveal>
        <p className="mt-6 max-w-xl text-[#8a8f98]">
          Incoming lead → AI analyzes intent → qualifies lead → updates CRM →
          sends response → schedules appointment.
        </p>

        <div className="mt-12 card overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/8">
            <p className="font-mono text-[11px] tracking-[0.2em] text-[#8a8f98]">
              RAJA / CONSOLE
            </p>
            <button
              type="button"
              onClick={() => setRunning((v) => !v)}
              className="text-[11px] tracking-[0.16em] uppercase min-h-11 px-3 text-white"
            >
              {running ? "Pause" : "Run"}
            </button>
          </div>
          <ol className="divide-y divide-white/8">
            {DEMO_STEPS.map((item, i) => {
              const on = i === step;
              const done = i < step;
              return (
                <li
                  key={item.id}
                  className={cn(
                    "grid md:grid-cols-[180px_1fr] gap-3 px-5 py-5 transition-colors duration-300",
                    on ? "bg-white/[0.04]" : ""
                  )}
                >
                  <p
                    className={cn(
                      "font-mono text-[11px] tracking-[0.18em] uppercase",
                      on ? "text-[#9aa6ff]" : done ? "text-[#c5c9d4]" : "text-[#5c616a]"
                    )}
                  >
                    {item.label}
                  </p>
                  <p className={cn("text-sm md:text-base", on ? "text-white" : "text-[#8a8f98]")}>
                    {item.detail}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
