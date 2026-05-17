"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { number: "2,400+", label: "Jobs Completed" },
  { number: "15",     label: "Years in Business" },
  { number: "< 2hrs", label: "Average Response" },
  { number: "4.9★",   label: "Customer Rating" },
];

export default function Numbers() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-black px-12 py-[160px] md:py-[160px] py-[80px]" ref={ref}>
      <div className="max-w-content mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
              className="flex flex-col items-center text-center py-8 px-6 border-r border-[#333333] last:border-r-0 odd:border-r-[#333333] sm:border-r sm:last:border-r-0"
            >
              <span
                className="font-light leading-none mb-4"
                style={{ fontSize: "clamp(48px, 5vw, 72px)", color: "#FFFFFF" }}
              >
                {stat.number}
              </span>
              <span className="text-[14px] font-normal" style={{ color: "#888888" }}>
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
