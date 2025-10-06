import { Check } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface AboutProps {
  language: "en" | "th";
}

const About = ({ language }: AboutProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });
  const content = {
    en: {
      title: "Engineering Excellence Since 1995",
      subtitle: "Your trusted partner in corporate transformation",
      description: "Chanmr Company has been at the forefront of Thailand's industrial development for nearly three decades. Our commitment to innovation, quality, and client success has made us the preferred choice for major corporations and government projects nationwide.",
      highlights: [
        "Over 500 successful projects delivered",
        "ISO 9001:2015 certified operations",
        "Advanced steel fabrication capabilities",
        "Expert engineering and consulting team",
        "Sustainable and eco-friendly practices"
      ]
    },
    th: {
      title: "ความเป็นเลิศทางวิศวกรรมตั้งแต่ พ.ศ. 2538",
      subtitle: "พันธมิตรที่เชื่อถือได้ในการเปลี่ยนแปลงองค์กร",
      description: "บริษัท ชาญเอ็มอาร์ จำกัด เป็นผู้นำในการพัฒนาอุตสาหกรรมของไทยมาเกือบสามทศวรรษ ความมุ่งมั่นของเราในด้านนวัตกรรม คุณภาพ และความสำเร็จของลูกค้า ทำให้เราเป็นตัวเลือกที่ได้รับความนิยมสำหรับองค์กรใหญ่และโครงการภาครัฐทั่วประเทศ",
      highlights: [
        "ส่งมอบโครงการสำเร็จมากกว่า 500 โครงการ",
        "การดำเนินงานที่ได้รับการรับรอง ISO 9001:2015",
        "ความสามารถในการผลิตเหล็กขั้นสูง",
        "ทีมวิศวกรและที่ปรึกษาผู้เชี่ยวชาญ",
        "แนวปฏิบัติที่ยั่งยืนและเป็นมิตรกับสิ่งแวดล้อม"
      ]
    }
  };

  const t = content[language];

  return (
    <section id="about" className="py-20 bg-secondary" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img 
                src={aboutImage} 
                alt="Chanmr Company Facility"
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t.title}
            </h2>
            <p className="text-xl text-accent font-semibold mb-6">
              {t.subtitle}
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {t.description}
            </p>

            <div className="space-y-4">
              {t.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-accent" />
                  </div>
                  <p className="text-foreground font-medium">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
