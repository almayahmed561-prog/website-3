"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Droplets, Flame, Bath, Search, Wrench } from "lucide-react";

const services = [
  { icon: Zap,      name: "Emergency Repairs",   desc: "Round-the-clock response when it matters most." },
  { icon: Droplets, name: "Drain Cleaning",       desc: "Thorough clearing of blockages, root to pipe." },
  { icon: Flame,    name: "Water Heaters",        desc: "Installation, repair, and efficient replacement." },
  { icon: Bath,     name: "Bathroom Remodels",    desc: "Complete fixture upgrades, precisely executed." },
  { icon: Search,   name: "Leak Detection",       desc: "Advanced diagnostics. Found fast, fixed right." },
  { icon: Wrench,   name: "Pipe Installation",    desc: "New builds and full repiping done to last." },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="bg-white px-12 py-[160px] md:py-[160px] py-[80px]">
      <div className="max-w-content mx-auto">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[12px] font-medium tracking-[0.15em] uppercase mb-6"
          style={{ color: "#999999" }}
          ref={ref}
        >
          What We Do
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="font-light leading-[1.05] mb-20"
          style={{ fontSize: "clamp(40px, 5vw, 64px)", color: "#111111" }}
        >
          Every job.<br />Done right.
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.name}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.15 + i * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.02, boxShadow: "0 8px 40px rgba(0,0,0,0.10)" }}
                className="bg-white border border-[#E8E8E8] p-10 cursor-pointer transition-shadow duration-300"
                style={{ boxShadow: "none" }}
              >
                <Icon size={24} className="mb-6" color="#1B3A6B" strokeWidth={1.5} />
                <h3 className="text-[20px] font-medium text-black mb-3 leading-tight">{svc.name}</h3>
                <p className="text-[15px] leading-relaxed" style={{ color: "#666666" }}>{svc.desc}</p>
                <div className="mt-6">
                  <span
                    className="text-[14px] font-medium text-navy inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-200"
                    style={{ color: "#1B3A6B" }}
                  >
                    Learn more →
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
