import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen">
      <Navbar />
      <Hero />
      <Ticker />
      <Experience />
      <Skills />
      <Education />
      <Footer />
    </main>
  );
}
