import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Numbers from "@/components/Numbers";
import WhyApex from "@/components/WhyApex";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Services />
      <Numbers />
      <WhyApex />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  );
}
