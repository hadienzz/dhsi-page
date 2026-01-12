import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import ClassesSection from "@/components/classes-section";
import FeaturesSection from "@/components/features-section";
import TestimonialsSection from "@/components/testimonials-section";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <main className="">
        <Navbar />
        <Hero />
        <ClassesSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
