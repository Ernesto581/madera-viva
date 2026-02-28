import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WoodCatalog from "@/components/WoodCatalog";
import WoodFacts from "@/components/WoodFacts";
import ToolsSection from "@/components/ToolsSection";
import TechniquesSection from "@/components/TechniquesSection";
import WoodQuiz from "@/components/WoodQuiz";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <WoodCatalog />
      <WoodFacts />
      <ToolsSection />
      <TechniquesSection />
      <WoodQuiz />
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default Index;
