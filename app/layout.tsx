import type { Metadata, Viewport } from "next";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import SystemBackdrop from "@/components/SystemBackdrop";

export const metadata: Metadata = {
  title: "Abhishek Mathews — Senior Software Engineer",
  description: "The portfolio & curriculum vitæ of Abhishek Mathews — a Senior Software Engineer building cloud platforms, developer tools, and full-stack systems that hold up at scale.",
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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0b1014" },
    { media: "(prefers-color-scheme: light)", color: "#e9ecee" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          href="/fonts/archivo-100-900-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/ibm-plex-mono-400-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/ibm-plex-mono-500-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <SystemBackdrop />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
