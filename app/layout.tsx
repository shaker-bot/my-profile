import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import ParticleBackground from "@/components/ParticleBackground";

export const metadata: Metadata = {
  title: "Abhishek Mathews - Senior Software Engineer",
  description: "Portfolio and resume of Abhishek Mathews, Senior Software Engineer with 7+ years of experience in cloud infrastructure and full-stack development.",
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
      <body className="antialiased">
        <ThemeProvider>
          <ParticleBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
