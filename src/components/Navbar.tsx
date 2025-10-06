import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";

interface NavbarProps {
  language: "en" | "th";
  onLanguageToggle: () => void;
}

const Navbar = ({ language, onLanguageToggle }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = {
    en: ["Services", "Portfolio", "About", "Insights", "Contact"],
    th: ["บริการ", "ผลงาน", "เกี่ยวกับ", "ข่าวสาร", "ติดต่อ"]
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary">
              CHANMR
            </h1>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navItems[language].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </a>
            ))}
            
            {/* Language Toggle */}
            <button
              onClick={onLanguageToggle}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 hover:bg-accent/20 transition-all duration-300 hover:scale-105"
            >
              <Globe className="h-4 w-4" />
              <span className="inline-block transition-transform duration-300">
                {language === "en" ? "TH" : "EN"}
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navItems[language].map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button
                onClick={onLanguageToggle}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 hover:bg-accent/20 transition-all duration-300 w-fit"
              >
                <Globe className="h-4 w-4" />
                <span className="inline-block transition-transform duration-300">
                  {language === "en" ? "ไทย" : "English"}
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
