import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Archivo', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        background:    "var(--background)",
        foreground:    "var(--foreground)",
        surface:       "var(--surface)",
        "surface-alt": "var(--surface-alt)",
        border:        "var(--border)",
        rule:          "var(--rule)",
        muted:         "var(--muted)",
        primary:       "var(--primary)",
        accent:        "var(--accent)",
        signal:        "var(--signal)",
      },
    },
  },
  plugins: [],
} satisfies Config;
