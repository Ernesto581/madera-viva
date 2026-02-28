import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WoodCatalog from "@/components/WoodCatalog";
import ToolsSection from "@/components/ToolsSection";
import TechniquesSection from "@/components/TechniquesSection";
import WoodQuiz from "@/components/WoodQuiz";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <WoodCatalog />
      <ToolsSection />
      <TechniquesSection />
      <WoodQuiz />
      <Footer />
    </main>
  );
};

export default Index;
