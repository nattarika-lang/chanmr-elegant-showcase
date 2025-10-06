import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Insights from "@/components/Insights";
import Footer from "@/components/Footer";

const Index = () => {
  const [language, setLanguage] = useState<"en" | "th">("en");

  const toggleLanguage = () => {
    setLanguage(prev => prev === "en" ? "th" : "en");
  };

  return (
    <div className="min-h-screen font-['Inter']">
      <Navbar language={language} onLanguageToggle={toggleLanguage} />
      <Hero language={language} />
      <Services language={language} />
      <Portfolio language={language} />
      <About language={language} />
      <Insights language={language} />
      <Footer language={language} />
    </div>
  );
};

export default Index;
