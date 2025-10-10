import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-normal leading-relaxed">
              Empowering Excellence in Technology Consulting and Strategic Solutions, 
              Your Partner for Success.
            </h3>
            
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
          </div>

          <div>
            <h4 className="text-lg mb-6 text-muted">Company Info</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Login
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Global Locations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Partners
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg mb-6 text-muted">Learn More</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Investor Relations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Government Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Continuing Education
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Sitemap
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 pb-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-background">
                <span className="text-lg font-bold text-foreground">M</span>
              </div>
              <span className="text-2xl font-semibold">MGH Tech</span>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <a href="#" className="hover:text-primary transition-colors">
                Terms Of Use
              </a>
              <span className="text-muted">|</span>
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <span className="text-muted">|</span>
              <a href="#" className="hover:text-primary transition-colors">
                Security
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted">
            <p>Copyright © {currentYear}</p>
            <p>Design By MGH Tech</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
