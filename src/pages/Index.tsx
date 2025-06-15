
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PopularBooks } from "@/components/PopularBooks";
import { ComparisonTable } from "@/components/ComparisonTable";
import { Testimonials } from "@/components/Testimonials";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Header />
      <Hero />
      <PopularBooks />
      <ComparisonTable />
      <Testimonials />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
