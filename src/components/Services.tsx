import { Building2, Wrench, TrendingUp, Users, Cog, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface ServicesProps {
  language: "en" | "th";
}

const Services = ({ language }: ServicesProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const content = {
    en: {
      title: "Our Services",
      subtitle: "Comprehensive solutions for modern enterprises",
      services: [
        {
          icon: Building2,
          title: "Construction Management",
          description: "Complete project oversight from concept to completion with industry-leading expertise."
        },
        {
          icon: Wrench,
          title: "Steel Fabrication",
          description: "Advanced manufacturing and precision engineering for structural steel components."
        },
        {
          icon: TrendingUp,
          title: "Corporate Consulting",
          description: "Strategic business guidance to optimize operations and drive growth."
        },
        {
          icon: Users,
          title: "Project Coordination",
          description: "Seamless integration of teams, resources, and timelines for project success."
        },
        {
          icon: Cog,
          title: "Engineering Solutions",
          description: "Innovative technical design and problem-solving for complex challenges."
        },
        {
          icon: Shield,
          title: "Quality Assurance",
          description: "Rigorous standards and continuous monitoring to ensure excellence."
        }
      ]
    },
    th: {
      title: "บริการของเรา",
      subtitle: "โซลูชั่นครบวงจรสำหรับองค์กรสมัยใหม่",
      services: [
        {
          icon: Building2,
          title: "การจัดการก่อสร้าง",
          description: "การดูแลโครงการอย่างครบวงจรตั้งแต่แนวคิดจนเสร็จสมบูรณ์ด้วยความเชี่ยวชาญชั้นนำ"
        },
        {
          icon: Wrench,
          title: "การผลิตโครงสร้างเหล็ก",
          description: "การผลิตขั้นสูงและวิศวกรรมที่แม่นยำสำหรับชิ้นส่วนโครงสร้างเหล็ก"
        },
        {
          icon: TrendingUp,
          title: "ที่ปรึกษาองค์กร",
          description: "คำแนะนำเชิงกลยุทธ์เพื่อเพิ่มประสิทธิภาพและขับเคลื่อนการเติบโต"
        },
        {
          icon: Users,
          title: "ประสานงานโครงการ",
          description: "การบูรณาการทีม ทรัพยากร และกำหนดการอย่างราบรื่นเพื่อความสำเร็จ"
        },
        {
          icon: Cog,
          title: "โซลูชั่นวิศวกรรม",
          description: "การออกแบบทางเทคนิคที่สร้างสรรค์และแก้ไขปัญหาที่ซับซ้อน"
        },
        {
          icon: Shield,
          title: "การประกันคุณภาพ",
          description: "มาตรฐานที่เข้มงวดและการตรวจสอบอย่างต่อเนื่องเพื่อความเป็นเลิศ"
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section id="services" className="py-20 bg-secondary" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-border/50 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <Icon className="h-7 w-7 text-primary group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
