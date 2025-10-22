import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Globe } from "lucide-react";
import logo from "@/assets/logo.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { useChat } from "@/contexts/ChatContext";

const Header = () => {
  const { language, t } = useLanguage();
  const { openChat } = useChat();
  const location = useLocation();
  const prefix = language === "fr" ? "/fr" : "";
  const otherLang = language === "fr" ? "en" : "fr";
  const otherLangPath = language === "fr" 
    ? location.pathname.replace("/fr", "") || "/"
    : "/fr" + location.pathname;

  return (
    <header className="w-full border-b bg-background">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link to={prefix + "/"} className="flex items-center space-x-2">
          <img src={logo} alt="MGH Tech Logo" className="h-10 w-10" />
          <span className="text-xl font-semibold">MGH Tech</span>
        </Link>
        
        <ul className="hidden md:flex items-center space-x-8">
          <li><a href={prefix + "/#services"} className="text-foreground hover:text-primary transition-colors">{t("header.services")}</a></li>
          <li><a href={prefix + "/#solutions"} className="text-foreground hover:text-primary transition-colors">{t("header.solutions")}</a></li>
          <li><Link to={prefix + "/about"} className="text-foreground hover:text-primary transition-colors">{t("header.about")}</Link></li>
          <li><Link to={prefix + "/blog"} className="text-foreground hover:text-primary transition-colors">{t("header.blog")}</Link></li>
          <li><a href={prefix + "/#contact"} className="text-foreground hover:text-primary transition-colors">{t("header.contact")}</a></li>
        </ul>
        
        <div className="flex items-center space-x-3">
          <Link to={otherLangPath}>
            <Button variant="ghost" size="icon">
              <Globe className="w-4 h-4" />
              <span className="sr-only">Switch to {otherLang === "fr" ? "French" : "English"}</span>
            </Button>
          </Link>
          <Button onClick={openChat}>
            {t("header.getInTouch")}
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
