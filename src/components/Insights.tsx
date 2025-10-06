import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface InsightsProps {
  language: "en" | "th";
}

const Insights = ({ language }: InsightsProps) => {
  const content = {
    en: {
      title: "Latest Insights",
      subtitle: "Stay informed with industry trends and company updates",
      articles: [
        {
          date: "March 15, 2025",
          category: "Industry Trends",
          title: "The Future of Sustainable Construction in Southeast Asia",
          excerpt: "Exploring innovative approaches to eco-friendly building practices and their impact on regional development."
        },
        {
          date: "March 8, 2025",
          category: "Company News",
          title: "Chanmr Expands Advanced Manufacturing Capabilities",
          excerpt: "New facility opening marks significant milestone in our commitment to technological advancement and quality."
        },
        {
          date: "February 28, 2025",
          category: "Engineering",
          title: "Digital Transformation in Industrial Engineering",
          excerpt: "How AI and automation are revolutionizing project management and operational efficiency."
        }
      ],
      cta: "Read All Insights"
    },
    th: {
      title: "ข่าวสารล่าสุด",
      subtitle: "ติดตามเทรนด์อุตสาหกรรมและข่าวสารของบริษัท",
      articles: [
        {
          date: "15 มีนาคม 2568",
          category: "เทรนด์อุตสาหกรรม",
          title: "อนาคตของการก่อสร้างที่ยั่งยืนในเอเชียตะวันออกเฉียงใต้",
          excerpt: "สำรวจแนวทางใหม่ในการก่อสร้างที่เป็นมิตรกับสิ่งแวดล้อมและผลกระทบต่อการพัฒนาภูมิภาค"
        },
        {
          date: "8 มีนาคม 2568",
          category: "ข่าวบริษัท",
          title: "ชาญเอ็มอาร์ ขยายขีดความสามารถการผลิตขั้นสูง",
          excerpt: "การเปิดโรงงานใหม่เป็นก้าวสำคัญในความมุ่งมั่นด้านเทคโนโลยีและคุณภาพของเรา"
        },
        {
          date: "28 กุมภาพันธ์ 2568",
          category: "วิศวกรรม",
          title: "การเปลี่ยนแปลงดิจิทัลในวิศวกรรมอุตสาหการ",
          excerpt: "AI และระบบอัตโนมัติกำลังปฏิวัติการจัดการโครงการและประสิทธิภาพการดำเนินงาน"
        }
      ],
      cta: "อ่านข่าวสารทั้งหมด"
    }
  };

  const t = content[language];

  return (
    <section id="insights" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {t.articles.map((article, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{article.date}</span>
                </div>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4">
                  {article.category}
                </span>
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                <button className="text-primary font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  {language === "en" ? "Read More" : "อ่านเพิ่มเติม"}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            {t.cta}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Insights;
