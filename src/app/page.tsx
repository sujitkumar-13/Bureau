// import About from "@/components/About";
// import CallToActionSection from "@/components/CallToActionSection";
import CoursesSection from "@/components/CoursesSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Bureau from "@/components/StockBureau";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import YouTubeSection from "@/components/YouTubeSection";
import PhilosophySection from "@/components/OurPhilosophy";
import Serve from "@/components/WhoWeServe";
import Image from "@/components/Images"
import Blogs from "@/components/Blogs";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Bureau />
      {/* <About /> */}
      <YouTubeSection />
      <PhilosophySection />
      <ServicesSection />
      <CoursesSection />
      <WhyChooseSection />
      <TestimonialsSection />
      {/* <CallToActionSection /> */}
      <Serve />
      <Image />
      <Blogs />
      <Footer />
    </div>
  );
}
