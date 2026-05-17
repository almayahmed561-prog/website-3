"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { DollarSign, Clock, Shield, CheckCircle } from "lucide-react";

const features = [
  { icon: DollarSign,  title: "Transparent Pricing",      desc: "Every quote is detailed upfront. No surprises at invoice." },
  { icon: Clock,       title: "Same-Day Availability",    desc: "Emergency slots reserved daily. We're there when it counts." },
  { icon: Shield,      title: "Certified Technicians",    desc: "Every technician is licensed, insured, and background-checked." },
  { icon: CheckCircle, title: "Guaranteed Workmanship",   desc: "Two-year guarantee on all work. No exceptions." },
];

export default function WhyApex() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="bg-offwhite px-12 py-[160px] md:py-[160px] py-[80px]" ref={ref}>
      <div className="max-w-content mx-auto">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[12px] font-medium tracking-[0.15em] uppercase mb-6"
          style={{ color: "#999999" }}
        >
          Why Apex
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="font-light leading-[1.05] mb-20"
          style={{ fontSize: "clamp(40px, 5vw, 64px)", color: "#111111" }}
        >
          The standard others<br />measure against.
        </motion.h2>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="aspect-[4/5] bg-navy flex items-center justify-center"
          >
            <div className="text-center">
              <p className="text-white font-light text-[13px] tracking-[0.3em] uppercase opacity-60">Est.</p>
              <p className="text-white font-light text-[64px] leading-none">2009</p>
            </div>
          </motion.div>

          {/* Right: Features */}
          <div className="flex flex-col justify-center">
            {features.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.25 + i * 0.15, ease: "easeOut" }}
                  className="border-t border-[#E8E8E8] py-8 flex gap-6 items-start group"
                >
                  <Icon size={18} className="mt-1 flex-shrink-0 transition-opacity duration-200" color="#1B3A6B" strokeWidth={1.5} />
                  <div>
                    <h3 className="text-[17px] font-medium text-black mb-2">{feat.title}</h3>
                    <p className="text-[15px] leading-relaxed" style={{ color: "#666666" }}>{feat.desc}</p>
                  </div>
                </motion.div>
              );
            })}
            <div className="border-t border-[#E8E8E8]" />
          </div>
        </div>
      </div>
    </section>
  );
}
