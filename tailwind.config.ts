import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white:    "#FFFFFF",
      offwhite: "#F5F5F7",
      black:    "#111111",
      navy:     "#1B3A6B",
      transparent: "transparent",
      current:  "currentColor",
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        "hero":    ["96px",  { lineHeight: "1.0", fontWeight: "300" }],
        "hero-sm": ["52px",  { lineHeight: "1.0", fontWeight: "300" }],
        "section": ["64px",  { lineHeight: "1.05", fontWeight: "300" }],
        "section-sm": ["40px", { lineHeight: "1.05", fontWeight: "300" }],
        "sub":     ["32px",  { lineHeight: "1.2",  fontWeight: "400" }],
        "sub-sm":  ["24px",  { lineHeight: "1.2",  fontWeight: "400" }],
        "body":    ["17px",  { lineHeight: "1.7",  fontWeight: "400" }],
        "caption": ["12px",  { lineHeight: "1.5",  fontWeight: "500", letterSpacing: "0.15em" }],
      },
      spacing: {
        "section": "160px",
        "section-sm": "80px",
      },
      maxWidth: {
        "content": "1120px",
      },
      boxShadow: {
        "card": "0 4px 24px rgba(0,0,0,0.06)",
        "card-hover": "0 8px 40px rgba(0,0,0,0.10)",
      },
      transitionDuration: {
        "200": "200ms",
        "300": "300ms",
        "800": "800ms",
      },
    },
  },
  plugins: [],
};

export default config;
