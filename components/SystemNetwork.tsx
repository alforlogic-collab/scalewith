"use client";

import { useMemo, useState } from "react";
import { NETWORK_NODES } from "@/lib/data";
import Reveal from "./Reveal";
import { cn } from "@/lib/utils";

export default function SystemNetwork() {
  const [active, setActive] = useState<string | null>(null);
  const nodes = NETWORK_NODES;

  const positions = useMemo(() => {
    return nodes.map((node, i) => {
      const angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
      const r = 42;
      return {
        ...node,
        x: 50 + Math.cos(angle) * r,
        y: 50 + Math.sin(angle) * r * 0.92,
      };
    });
  }, [nodes]);

  const selected = nodes.find((n) => n.id === active) ?? nodes[0];

  return (
    <section id="systems" className="section-pad" aria-labelledby="systems-heading">
      <div className="container-site">
        <Reveal>
          <p className="kicker mb-5">Systems</p>
        </Reveal>
        <Reveal>
          <h2
            id="systems-heading"
            className="display text-[clamp(2rem,4.5vw,4.4rem)] text-white max-w-[14ch]"
          >
            One core. Many connected surfaces.
          </h2>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-[1.4fr_0.8fr] gap-10 items-center">
          <div className="relative aspect-square max-h-[640px] mx-auto w-full hidden md:block">
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
              {positions.map((n) => (
                <line
                  key={`l-${n.id}`}
                  x1="50"
                  y1="50"
                  x2={n.x}
                  y2={n.y}
                  stroke={active === n.id ? "rgba(123,140,255,0.7)" : "rgba(255,255,255,0.12)"}
                  strokeWidth={active === n.id ? 0.35 : 0.18}
                />
              ))}
              <circle cx="50" cy="50" r="8.5" fill="none" stroke="rgba(155,166,255,0.45)" strokeWidth="0.35" />
              <circle cx="50" cy="50" r="4.2" fill="rgba(155,166,255,0.16)" stroke="rgba(200,210,255,0.7)" strokeWidth="0.3" />
            </svg>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <p className="text-[10px] tracking-[0.28em] uppercase text-[#c5c9d4]">
                AI Core
              </p>
            </div>
            {positions.map((n) => (
              <button
                key={n.id}
                type="button"
                onMouseEnter={() => setActive(n.id)}
                onFocus={() => setActive(n.id)}
                onClick={() => setActive(n.id)}
                style={{ left: `${n.x}%`, top: `${n.y}%` }}
                className={cn(
                  "absolute -translate-x-1/2 -translate-y-1/2 min-h-11 px-3 py-2 rounded-full border text-[10px] tracking-[0.14em] uppercase whitespace-nowrap transition-colors duration-200",
                  active === n.id
                    ? "bg-white text-[#050505] border-white"
                    : "bg-[#050505]/80 text-[#c5c9d4] border-white/15 hover:border-white/40"
                )}
              >
                {n.label}
              </button>
            ))}
          </div>

          <ul className="grid grid-cols-2 gap-2 md:hidden">
            {nodes.map((n) => (
              <li key={n.id}>
                <button
                  type="button"
                  onClick={() => setActive(n.id)}
                  className={cn(
                    "w-full min-h-12 px-4 text-left text-[11px] tracking-[0.12em] uppercase rounded-xl border transition-colors duration-200",
                    active === n.id
                      ? "bg-white text-[#050505] border-white"
                      : "bg-transparent text-[#c5c9d4] border-white/12"
                  )}
                >
                  {n.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="card p-8 min-h-[220px]">
            <p className="kicker mb-4">Node</p>
            <h3 className="text-2xl tracking-tight text-white">{selected.label}</h3>
            <p className="mt-4 text-[#9aa0ab] leading-relaxed">{selected.copy}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
