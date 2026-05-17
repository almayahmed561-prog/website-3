"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["Services", "About", "Contact"];

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.95)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: scrolled ? "1px solid #E8E8E8" : "1px solid transparent",
        }}
      >
        <div className="max-w-content mx-auto px-12 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-baseline gap-1 group">
            <span className="text-black font-semibold text-base tracking-tight">APEX</span>
            <span className="text-black font-light text-base tracking-tight">Plumbing</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[15px] font-normal text-black transition-opacity duration-200 hover:opacity-50"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="bg-navy text-white text-[13px] font-medium px-6 py-3 transition-opacity duration-200 hover:opacity-80"
              style={{ letterSpacing: "0.01em" }}
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-black"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile Fullscreen Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="absolute top-6 right-6 text-white"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
            <div className="flex flex-col items-center gap-10">
              {links.map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-white font-light text-4xl tracking-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.1, duration: 0.5 }}
                  onClick={() => setOpen(false)}
                >
                  {link}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                className="mt-4 bg-white text-black text-[15px] font-medium px-8 py-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                onClick={() => setOpen(false)}
              >
                Get a Quote
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
