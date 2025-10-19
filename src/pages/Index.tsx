import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Clients from "@/components/Clients";
import Solutions from "@/components/Solutions";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Clients />
      <Solutions />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Index;
