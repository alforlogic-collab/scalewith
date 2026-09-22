"use client";

import { useCallback, useRef, useState } from "react";
import { AFTER_ITEMS, BEFORE_ITEMS } from "@/lib/data";
import Reveal from "./Reveal";

export default function TransformationSection() {
  const track = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(52);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = track.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const next = ((clientX - r.left) / r.width) * 100;
    setValue(Math.min(96, Math.max(4, next)));
  }, []);

  function onPointerDown(e: React.PointerEvent<HTMLDivElement>) {
    dragging.current = true;
    (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
    setFromClientX(e.clientX);
  }

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (!dragging.current) return;
    setFromClientX(e.clientX);
  }

  function onPointerUp() {
    dragging.current = false;
  }

  return (
    <section className="section-pad" aria-labelledby="transform-heading">
      <div className="container-site">
        <Reveal>
          <p className="kicker mb-5">Before / After</p>
        </Reveal>
        <Reveal>
          <h2
            id="transform-heading"
            className="display text-[clamp(2rem,4.5vw,4.4rem)] text-white max-w-[14ch]"
          >
            From fragmented work to a system.
          </h2>
        </Reveal>

        <div
          ref={track}
          className="relative mt-14 min-h-[420px] md:min-h-[480px] rounded-2xl overflow-hidden border border-white/10 select-none touch-none"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          role="slider"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(value)}
          aria-label="Before and after comparison"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") setValue((v) => Math.max(4, v - 4));
            if (e.key === "ArrowRight") setValue((v) => Math.min(96, v + 4));
          }}
        >
          <div className="absolute inset-0 bg-[#0b0b0d] p-8 md:p-12">
            <p className="kicker text-[#8a8f98]">After</p>
            <ul className="mt-8 space-y-4">
              {AFTER_ITEMS.map((item) => (
                <li key={item} className="text-2xl md:text-3xl tracking-tight text-white">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="absolute inset-0 bg-[#141418] p-8 md:p-12 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
          >
            <p className="kicker text-[#8a8f98]">Before</p>
            <ul className="mt-8 space-y-4">
              {BEFORE_ITEMS.map((item) => (
                <li
                  key={item}
                  className="text-2xl md:text-3xl tracking-tight text-[#9aa0ab]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="absolute top-0 bottom-0 w-px bg-white/70"
            style={{ left: `${value}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white text-[#050505] flex items-center justify-center text-[10px] tracking-[0.14em] uppercase font-semibold">
              Drag
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
