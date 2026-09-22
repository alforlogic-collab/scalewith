"use client";

export default function SystemCore() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute left-1/2 top-[42%] h-[min(70vw,640px)] w-[min(70vw,640px)] -translate-x-1/2 -translate-y-1/2">
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(123,140,255,0.16),transparent_62%)]" />
        <div className="absolute inset-[18%] rounded-full border border-white/10" />
        <div className="absolute inset-[32%] rounded-full border border-[#7b8cff]/25" />
        <div className="absolute inset-[46%] rounded-full bg-white/5 border border-white/20" />
        <svg className="absolute inset-0 h-full w-full animate-[spin_48s_linear_infinite] motion-reduce:animate-none" viewBox="0 0 100 100">
          <circle cx="50" cy="8" r="1.1" fill="#c5c9d4" />
          <circle cx="88" cy="38" r="1.1" fill="#9aa6ff" />
          <circle cx="72" cy="86" r="1.1" fill="#c5c9d4" />
          <circle cx="18" cy="70" r="1.1" fill="#9aa6ff" />
          <circle cx="22" cy="22" r="1.1" fill="#c5c9d4" />
          <path
            d="M50 8 L88 38 L72 86 L18 70 L22 22 Z"
            fill="none"
            stroke="rgba(123,140,255,0.22)"
            strokeWidth="0.25"
          />
        </svg>
      </div>
      <div className="absolute inset-0 grid-fade opacity-40" />
    </div>
  );
}
