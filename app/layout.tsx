import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import ParticleBackground from "@/components/ParticleBackground";

export const metadata: Metadata = {
  title: "Abhishek Mathews — Staff Engineer, ink & infrastructure",
  description: "The portfolio & curriculum vitæ of Abhishek Mathews — a Senior Software Engineer building cloud platforms, developer tools, and quietly over-engineered side projects.",
  keywords: ["Abhishek Mathews", "Software Engineer", "AWS", "TypeScript", "Python", "Cloud Engineer"],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon0.svg", type: "image/svg+xml" },
      { url: "/icon1.png", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT@0,9..144,400..900,30..100;1,9..144,400..900,30..100&family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <div className="ambient-gradient" aria-hidden="true" />
          <ParticleBackground />
          <div className="grain-overlay" aria-hidden="true" />
          <div className="relative z-10">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
