import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

interface FooterProps {
  language: "en" | "th";
}

const Footer = ({ language }: FooterProps) => {
  const content = {
    en: {
      company: {
        title: "Company",
        links: ["About Us", "Our Team", "Careers", "Press"]
      },
      services: {
        title: "Services",
        links: ["Construction", "Engineering", "Consulting", "Fabrication"]
      },
      resources: {
        title: "Resources",
        links: ["Blog", "Case Studies", "Downloads", "Support"]
      },
      contact: {
        title: "Contact Us",
        email: "info@chanmr.com",
        phone: "+66 2 123 4567",
        address: "123 Industrial Park, Bangkok 10110, Thailand"
      },
      copyright: "© 2025 Chanmr Company. All rights reserved."
    },
    th: {
      company: {
        title: "บริษัท",
        links: ["เกี่ยวกับเรา", "ทีมงาน", "ร่วมงาน", "ข่าวสาร"]
      },
      services: {
        title: "บริการ",
        links: ["ก่อสร้าง", "วิศวกรรม", "ที่ปรึกษา", "ผลิตเหล็ก"]
      },
      resources: {
        title: "ทรัพยากร",
        links: ["บล็อก", "กรณีศึกษา", "ดาวน์โหลด", "สนับสนุน"]
      },
      contact: {
        title: "ติดต่อเรา",
        email: "info@chanmr.com",
        phone: "+66 2 123 4567",
        address: "123 นิคมอุตสาหกรรม กรุงเทพฯ 10110 ประเทศไทย"
      },
      copyright: "© 2568 บริษัท ชาญเอ็มอาร์ จำกัด สงวนลิขสิทธิ์"
    }
  };

  const t = content[language];

  return (
    <footer className="bg-[hsl(var(--hero-dark))] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-accent">CHANMR</h3>
            <p className="text-white/70 mb-6">
              {language === "en" 
                ? "Leading corporate consulting and engineering solutions for Thailand's future."
                : "ผู้นำด้านที่ปรึกษาองค์กรและวิศวกรรมเพื่ออนาคตของประเทศไทย"}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">{t.company.title}</h4>
            <ul className="space-y-2">
              {t.company.links.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-white/70 hover:text-accent transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">{t.services.title}</h4>
            <ul className="space-y-2">
              {t.services.links.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-white/70 hover:text-accent transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">{t.contact.title}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <a href={`mailto:${t.contact.email}`} className="text-white/70 hover:text-accent transition-colors">
                  {t.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <a href={`tel:${t.contact.phone}`} className="text-white/70 hover:text-accent transition-colors">
                  {t.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-white/70">
                  {t.contact.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center text-white/60">
          <p>{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
