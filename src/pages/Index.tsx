import Header from "@/components/Header";
import OfferCard from "@/components/OfferCard";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Clients from "@/components/Clients";
import Solutions from "@/components/Solutions";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import FloatingChatButton from "@/components/FloatingChatButton";
import { useFeatureFlag } from "@/hooks/useFeatureFlags";

const Index = () => {
  const showOfferBanner = useFeatureFlag("offerBanner");
  const showHero = useFeatureFlag("hero");
  const showServices = useFeatureFlag("services");
  const showClients = useFeatureFlag("clients");
  const showSolutions = useFeatureFlag("solutions");
  const showReviews = useFeatureFlag("reviews");
  const showFloatingChat = useFeatureFlag("floatingChatButton");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {showOfferBanner && <OfferCard />}
      {showHero && <Hero />}
      {showClients && <Clients />}
      {showServices && <Services />}
      {showSolutions && <Solutions />}
      {showReviews && <Reviews />}
      <Footer />
      {showFloatingChat && <FloatingChatButton />}
    </div>
  );
};

export default Index;
