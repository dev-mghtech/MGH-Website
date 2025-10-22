import Header from "@/components/Header";
import OfferCard from "@/components/OfferCard";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Clients from "@/components/Clients";
import Solutions from "@/components/Solutions";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import FloatingChatButton from "@/components/FloatingChatButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <OfferCard />
      <Services />
      <Clients />
      <Solutions />
      <Reviews />
      <Footer />
      <FloatingChatButton />
    </div>
  );
};

export default Index;
