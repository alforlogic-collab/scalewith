"use client";

import { useRef } from "react";
import { prefersReducedMotion } from "@/lib/utils";

type Props = {
  index: string;
  title: string;
  body: string;
};

export default function CapabilityCard({ index, title, body }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (prefersReducedMotion()) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 8;
    const y = ((e.clientY - r.top) / r.height - 0.5) * -8;
    el.style.transform = `perspective(900px) rotateX(${y}deg) rotateY(${x}deg)`;
  }

  function onLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateX(0) rotateY(0)";
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="card p-7 md:p-8 h-full transition-transform duration-300 will-change-transform"
    >
      <p className="font-mono text-[11px] tracking-[0.2em] text-[#7b8cff]">{index}</p>
      <h3 className="mt-6 text-xl md:text-2xl tracking-tight text-white">{title}</h3>
      <p className="mt-4 text-[#9aa0ab] leading-relaxed">{body}</p>
    </div>
  );
}
