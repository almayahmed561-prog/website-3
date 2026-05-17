"use client";
import { Instagram, Twitter, Linkedin } from "lucide-react";

const navLinks = ["Services", "About", "Contact"];
const legalLinks = ["Privacy Policy", "Terms"];

export default function Footer() {
  return (
    <footer className="bg-black px-12 pt-16 pb-10">
      <div className="max-w-content mx-auto">
        {/* Top row */}
        <div className="flex flex-wrap items-center justify-between gap-8 pb-8">
          {/* Logo */}
          <div className="flex items-baseline gap-1">
            <span className="text-white font-semibold text-base tracking-tight">APEX</span>
            <span className="text-white font-light text-base tracking-tight">Plumbing</span>
          </div>

          {/* Nav */}
          <nav className="flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[14px] font-normal transition-opacity duration-200 hover:opacity-80"
                style={{ color: "#888888" }}
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-5">
            {[Instagram, Twitter, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="transition-opacity duration-200 hover:opacity-80">
                <Icon size={18} color="#888888" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#333333] my-0" />

        {/* Bottom row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-8">
          <p className="text-[12px] font-normal" style={{ color: "#888888" }}>
            © 2024 Apex Plumbing. All rights reserved.
          </p>
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-[12px] font-normal transition-opacity duration-200 hover:opacity-80"
                style={{ color: "#888888" }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
