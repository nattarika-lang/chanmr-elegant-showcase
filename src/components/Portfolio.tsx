import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import caseStudy1 from "@/assets/case-study-1.jpg";
import caseStudy2 from "@/assets/case-study-2.jpg";
import caseStudy3 from "@/assets/case-study-3.jpg";

interface PortfolioProps {
  language: "en" | "th";
}

const Portfolio = ({ language }: PortfolioProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const content = {
    en: {
      title: "Featured Projects",
      subtitle: "Excellence delivered across diverse industries",
      projects: [
        {
          image: caseStudy1,
          title: "Metropolitan Tower Complex",
          category: "Commercial Construction",
          description: "45-story mixed-use development featuring sustainable design and advanced engineering solutions."
        },
        {
          image: caseStudy2,
          title: "Advanced Manufacturing Facility",
          category: "Industrial Engineering",
          description: "State-of-the-art production plant with integrated automation and quality control systems."
        },
        {
          image: caseStudy3,
          title: "Infrastructure Modernization",
          category: "Civil Engineering",
          description: "Large-scale infrastructure upgrade enhancing connectivity and regional development."
        }
      ],
      cta: "View All Projects"
    },
    th: {
      title: "ผลงานที่โดดเด่น",
      subtitle: "ความเป็นเลิศในหลากหลายอุตสาหกรรม",
      projects: [
        {
          image: caseStudy1,
          title: "อาคารเมโทรโพลิแทน คอมเพล็กซ์",
          category: "การก่อสร้างเชิงพาณิชย์",
          description: "โครงการอาคารผสมผสาน 45 ชั้น ด้วยการออกแบบที่ยั่งยืนและโซลูชั่นวิศวกรรมขั้นสูง"
        },
        {
          image: caseStudy2,
          title: "โรงงานผลิตขั้นสูง",
          category: "วิศวกรรมอุตสาหการ",
          description: "โรงงานผลิตที่ทันสมัยพร้อมระบบอัตโนมัติและควบคุมคุณภาพแบบบูรณาการ"
        },
        {
          image: caseStudy3,
          title: "การปรับปรุงโครงสร้างพื้นฐาน",
          category: "วิศวกรรมโยธา",
          description: "การยกระดับโครงสร้างพื้นฐานขนาดใหญ่เพื่อเสริมสร้างการเชื่อมต่อและการพัฒนาภูมิภาค"
        }
      ],
      cta: "ดูโครงการทั้งหมด"
    }
  };

  const t = content[language];

  return (
    <section id="portfolio" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="overflow-x-auto pb-4 -mx-4 px-4 lg:overflow-visible scrollbar-hide">
          <div className="flex lg:grid lg:grid-cols-3 gap-8 min-w-max lg:min-w-0">
            {t.projects.map((project, index) => (
              <Card 
                key={index} 
                className={`group overflow-hidden hover:shadow-2xl transition-all duration-500 flex-shrink-0 w-80 lg:w-auto border-border/50 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
