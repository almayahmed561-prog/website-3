"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Tag, CheckCircle } from "lucide-react";

const trust = [
  { icon: Tag,         label: "No call-out fee" },
  { icon: Phone,       label: "Upfront pricing" },
  { icon: CheckCircle, label: "Licensed & insured" },
];

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="bg-black px-12 py-[160px] md:py-[160px] py-[80px]" ref={ref}>
      <div className="max-w-content mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[12px] font-medium tracking-[0.15em] uppercase mb-8"
          style={{ color: "#888888" }}
        >
          Get Started
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="font-light leading-[1.05] mb-6"
          style={{ fontSize: "clamp(40px, 5vw, 64px)", color: "#FFFFFF" }}
        >
          A leak won&apos;t wait.<br />Neither should you.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-[17px] font-normal leading-[1.7] mb-12 max-w-lg mx-auto"
          style={{ color: "#888888" }}
        >
          Call us now or book online. We&apos;re available 24/7 for emergencies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-wrap gap-4 justify-center mb-16"
        >
          <a
            href="tel:5550000000"
            className="bg-white text-black text-[15px] font-medium px-8 py-4 transition-opacity duration-200 hover:opacity-80"
          >
            Call Now — (555) 000-0000
          </a>
          <a
            href="#contact"
            className="border border-white text-white text-[15px] font-medium px-8 py-4 transition-opacity duration-200 hover:opacity-60"
            style={{ background: "transparent" }}
          >
            Book Online
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-10"
        >
          {trust.map((t) => {
            const Icon = t.icon;
            return (
              <div key={t.label} className="flex items-center gap-2">
                <Icon size={14} color="#888888" strokeWidth={1.5} />
                <span className="text-[13px] font-normal" style={{ color: "#888888" }}>{t.label}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
