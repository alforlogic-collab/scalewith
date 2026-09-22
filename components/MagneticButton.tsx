"use client";

import { useRef, type AnchorHTMLAttributes, type MouseEvent, type ReactNode } from "react";
import { cn, prefersReducedMotion } from "@/lib/utils";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "ghost";
};

export default function MagneticButton({
  children,
  variant = "primary",
  className,
  ...props
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);

  function onMove(e: MouseEvent<HTMLAnchorElement>) {
    if (prefersReducedMotion()) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) * 0.28;
    const y = (e.clientY - r.top - r.height / 2) * 0.28;
    el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }

  function onLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate3d(0,0,0)";
  }

  return (
    <a
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn(
        "btn",
        variant === "primary" ? "btn-primary" : "btn-ghost",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
