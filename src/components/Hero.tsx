import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

interface HeroProps {
  language: "en" | "th";
}

const Hero = ({ language }: HeroProps) => {
  const content = {
    en: {
      title: "Building Excellence Through Innovation",
      subtitle: "Leading corporate consulting and engineering solutions for Thailand's future",
      cta: "Discover Our Solutions",
      ctaSecondary: "Contact Us"
    },
    th: {
      title: "สร้างความเป็นเลิศด้วยนวัตกรรม",
      subtitle: "ผู้นำด้านที่ปรึกษาองค์กรและวิศวกรรมเพื่ออนาคตของประเทศไทย",
      cta: "ค้นพบโซลูชั่นของเรา",
      ctaSecondary: "ติดต่อเรา"
    }
  };

  const t = content[language];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--hero-dark))] via-[hsl(var(--hero-dark))/0.85] to-[hsl(var(--hero-dark))/0.6]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {t.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            {t.subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 text-lg px-8"
            >
              {t.cta}
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary text-lg px-8"
            >
              {t.ctaSecondary}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
