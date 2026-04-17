import Navbar from "@/components/Navbar";
import Hobbies from "@/components/Hobbies";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Hobbies – Abhishek Mathews",
  description: "A look at what Abhishek Mathews enjoys outside of work.",
};

export default function HobbiesPage() {
  return (
    <main id="main-content" className="min-h-screen">
      <Navbar />
      <Hobbies />
      <Footer />
    </main>
  );
}
