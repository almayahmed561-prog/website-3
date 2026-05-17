"use client";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, delay, ease: "easeOut" },
});

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-12 pt-16 bg-white">
      <div className="max-w-content w-full flex flex-col items-center">
        {/* Eyebrow */}
        <motion.p
          {...fadeUp(0.1)}
          className="text-caption uppercase tracking-[0.15em] text-[12px] font-medium mb-12"
          style={{ color: "#999999" }}
        >
          Licensed &amp; Insured — Serving Since 2009
        </motion.p>

        {/* Headline */}
        <motion.h1 {...fadeUp(0.25)}>
          <span
            className="block font-light leading-none"
            style={{ fontSize: "clamp(52px, 8vw, 96px)", color: "#111111" }}
          >
            Water.
          </span>
          <span
            className="block font-light leading-none"
            style={{ fontSize: "clamp(52px, 8vw, 96px)", color: "#111111" }}
          >
            Solved.
          </span>
        </motion.h1>

        {/* Subline */}
        <motion.p
          {...fadeUp(0.4)}
          className="mt-8 text-[17px] font-normal leading-[1.7] max-w-[560px]"
          style={{ color: "#666666" }}
        >
          Emergency repairs, full installations, and preventive maintenance — delivered with the precision your home deserves.
        </motion.p>

        {/* Buttons */}
        <motion.div {...fadeUp(0.55)} className="mt-12 flex flex-wrap gap-4 justify-center">
          <a
            href="#contact"
            className="bg-navy text-white text-[15px] font-medium px-8 py-4 transition-opacity duration-200 hover:opacity-80"
          >
            Book a Service
          </a>
          <a
            href="#services"
            className="border border-navy text-navy text-[15px] font-medium px-8 py-4 transition-opacity duration-200 hover:opacity-60"
            style={{ background: "transparent" }}
          >
            View Services
          </a>
        </motion.div>

        {/* Stat pills */}
        <motion.div
          {...fadeUp(0.7)}
          className="mt-20 w-full"
        >
          <div className="w-full h-px bg-[#E8E8E8] mb-8" />
          <div className="flex flex-wrap justify-center gap-12">
            {["2hr Response", "15yr Experience", "100% Guaranteed"].map((stat) => (
              <span key={stat} className="text-[13px] font-medium tracking-wide" style={{ color: "#999999" }}>
                {stat}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
