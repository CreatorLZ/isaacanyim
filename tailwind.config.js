/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--accent)",
        bg: "var(--background)",
        surface: "var(--surface)",
        "surface-hover": "var(--surface-hover)",
        border: "var(--border)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-muted": "var(--text-muted)",
        accent: "var(--accent)",
      },
      boxShadow: {
        theme: "var(--shadow)",
      },
      backgroundImage: {
        graph: "url('/graphnew.jpg')",
      },
      fontFamily: {
        sans: ["var(--font-anybody)"],
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
