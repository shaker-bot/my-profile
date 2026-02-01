import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abhishek Mathews - Senior Software Engineer",
  description: "Portfolio and resume of Abhishek Mathews, Senior Software Engineer with 7+ years of experience in cloud infrastructure and full-stack development.",
  keywords: ["Abhishek Mathews", "Software Engineer", "AWS", "TypeScript", "Python", "Cloud Engineer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
