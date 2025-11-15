import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { useLanguage } from "@/translations/LanguageContext";
import { useFeatureFlag } from "@/hooks/useFeatureFlags";
import { openCalendlyBooking } from "@/lib/calendly";
import logo from "@/assets/logo.png";

const Footer = () => {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();
  const prefix = language === "fr" ? "/fr" : "";
  const showBlog = useFeatureFlag("blog");
  const showSocialMedia = useFeatureFlag("socialMedia");

  return (
    <footer id="contact" className="bg-black text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-normal leading-relaxed">
              {t("footer.tagline")}
            </h3>
            
            {showSocialMedia && (
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a 
                  href="#" 
                  className="hover:text-primary transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-6 w-6" />
                </a>
                <a 
                  href="#" 
                  className="hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a 
                  href="#" 
                  className="hover:text-primary transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
            )}
          </div>

          <div>
            <h4 className="text-lg mb-6 text-white/60">{t("footer.company")}</h4>
            <ul className="space-y-3">
            <li>
                <a href={prefix + "/#solutions"} className="hover:text-primary transition-colors">
                Services
                </a>
              </li>
              <li>
                <a href={prefix + "/about"} className="hover:text-primary transition-colors">
                  {t("footer.about")}
                </a>
              </li>
            
              <li>
                <button 
                  onClick={() => openCalendlyBooking("footer")}
                  className="hover:text-primary transition-colors text-left"
                >
                  {t("footer.contact")}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg mb-6 text-white/60">{t("footer.resources")}</h4>
            <ul className="space-y-3">
              {showBlog && (
                <li>
                  <a href={prefix + "/blog"} className="hover:text-primary transition-colors">
                    {t("footer.blog")}
                  </a>
                </li>
              )}
              <li>
                <button 
                  onClick={() => openCalendlyBooking("footer-resources")}
                  className="hover:text-primary transition-colors text-left"
                >
                  Book a Call
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 pb-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="MGH Tech Logo" className="h-10 w-10" />
              <span className="text-2xl logo-text">MGH Tech</span>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <button 
                onClick={() => openCalendlyBooking("footer-bottom")}
                className="hover:text-primary transition-colors"
              >
                Schedule Consultation
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>Copyright © {currentYear} MGH Tech. {t("footer.rights")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
