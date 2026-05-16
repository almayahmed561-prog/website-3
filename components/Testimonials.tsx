"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    quote: "They arrived within the hour, diagnosed the issue immediately, and had everything fixed before dinner. Exceptional.",
    name: "MARGARET L.",
    tag: "Verified Customer",
  },
  {
    quote: "I've hired a lot of contractors over the years. Apex is in a different league. Pricing was clear, work was immaculate.",
    name: "DANIEL R.",
    tag: "Verified Customer",
  },
  {
    quote: "Called at 11pm with a burst pipe. Someone picked up immediately. Crisis resolved by 1am. Remarkable service.",
    name: "PRIYA K.",
    tag: "Verified Customer",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-white px-12 py-[160px] md:py-[160px] py-[80px]" ref={ref}>
      <div className="max-w-content mx-auto">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[12px] font-medium tracking-[0.15em] uppercase mb-6"
          style={{ color: "#999999" }}
        >
          What People Say
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="font-light leading-[1.05] mb-20"
          style={{ fontSize: "clamp(40px, 5vw, 64px)", color: "#111111" }}
        >
          Trusted by homeowners<br />across the city.
        </motion.h2>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 + i * 0.15, ease: "easeOut" }}
              className="flex flex-col"
            >
              <p
                className="text-[18px] font-light italic leading-relaxed mb-8"
                style={{ color: "#333333" }}
              >
                {t.quote}
              </p>
              <div className="w-10 h-px bg-navy mb-6" />
              <span className="text-[13px] font-medium tracking-[0.12em] text-black mb-1">{t.name}</span>
              <span className="text-[12px]" style={{ color: "#999999" }}>{t.tag}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
