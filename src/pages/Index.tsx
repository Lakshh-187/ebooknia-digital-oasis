
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { DealsOfTheWeek } from "@/components/DealsOfTheWeek";
import { FeaturedCategories } from "@/components/FeaturedCategories";
import { BestSellers } from "@/components/BestSellers";
import { PopularBooks } from "@/components/PopularBooks";
import { MostDemanding } from "@/components/MostDemanding";
import { StatsSection } from "@/components/StatsSection";
import { ComparisonTable } from "@/components/ComparisonTable";
import { BurgerComparison } from "@/components/BurgerComparison";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { WhatsAppPopup } from "@/components/WhatsAppPopup";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Header />
      <Hero />
      <DealsOfTheWeek />
      <FeaturedCategories />
      <BestSellers />
      <PopularBooks />
      <MostDemanding />
      <StatsSection />
      <ComparisonTable />
      <BurgerComparison />
      <Testimonials />
      <FAQ />
      <AboutSection />
      <Footer />
      <WhatsAppButton />
      <WhatsAppPopup />
    </div>
  );
};

export default Index;
