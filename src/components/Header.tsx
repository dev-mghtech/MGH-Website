import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full border-b bg-background">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
            <span className="text-lg font-bold text-primary-foreground">M</span>
          </div>
          <span className="text-xl font-semibold">MGH Tech</span>
        </div>
        
        <ul className="hidden md:flex items-center space-x-8">
          <li><a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a></li>
          <li><a href="#solutions" className="text-foreground hover:text-primary transition-colors">Solutions</a></li>
          <li><a href="#about" className="text-foreground hover:text-primary transition-colors">About</a></li>
          <li><a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a></li>
        </ul>
        
        <div className="flex items-center space-x-3">
          <Button variant="ghost" className="hidden sm:inline-flex">
            Log in
          </Button>
          <Button>
            Get Started
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
