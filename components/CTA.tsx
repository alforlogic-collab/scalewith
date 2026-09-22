"use client";

import { FormEvent, useState } from "react";
import MagneticButton from "./MagneticButton";
import Reveal from "./Reveal";
import SystemCore from "./SystemCore";

export default function CTA() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section
      id="contact"
      className="relative section-pad overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <SystemCore />

      <div className="relative container-site">
        <Reveal>
          <p className="kicker mb-5">Start</p>
        </Reveal>
        <Reveal>
          <h2
            id="cta-heading"
            className="display text-[clamp(2.2rem,5vw,5rem)] text-white max-w-[14ch]"
          >
            Ready to build your system?
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-8 max-w-xl text-lg text-[#9aa0ab] leading-relaxed">
            Tell us where your business is losing time, leads or efficiency.
            We&apos;ll map the opportunity and design the system around it.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <MagneticButton href="#contact-form">Start a project</MagneticButton>
          <MagneticButton href="#work" variant="ghost">
            View systems
          </MagneticButton>
        </div>

        <form
          id="contact-form"
          onSubmit={onSubmit}
          className="mt-16 grid md:grid-cols-2 gap-5 max-w-3xl"
        >
          <div>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" autoComplete="name" required />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="company">Company</label>
            <input id="company" name="company" autoComplete="organization" />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="message">Where is the system leaking?</label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Missed calls, slow follow-up, disconnected CRM…"
            />
          </div>
          <div className="md:col-span-2 flex items-center gap-4">
            <button type="submit" className="btn btn-primary">
              {sent ? "Received" : "Send brief"}
            </button>
            {sent ? (
              <p className="text-sm text-[#9aa0ab]" role="status">
                Brief captured locally. Connect this form to your intake when
                ready.
              </p>
            ) : null}
          </div>
        </form>
      </div>
    </section>
  );
}
