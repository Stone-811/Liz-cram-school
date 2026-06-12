import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
  </svg>
);

const quickLinks = [
  { name: "關於我們", href: "/about" },
  { name: "課程介紹", href: "/courses" },
  { name: "最新消息", href: "/news" },
  { name: "課程報名", href: "/register" },
  { name: "聯絡我們", href: "/contact" },
];

const courses = [
  { name: "數學課程", href: "/courses#math" },
  { name: "英文課程", href: "/courses#english" },
  { name: "作文課程", href: "/courses#writing" },
  { name: "自然科學", href: "/courses#science" },
];

export default function Footer() {
  return (
    <footer className="bg-[#604D3F] text-white">
      {/* Wave divider */}
      <div className="h-16 bg-background relative overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-16"
          viewBox="0 0 1440 64"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0 32C240 64 480 0 720 32C960 64 1200 0 1440 32V64H0V32Z"
            fill="#604D3F"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#F0CF9B] to-[#F8E289] rounded-full flex items-center justify-center">
                <span className="text-[#604D3F] font-bold text-xl">L</span>
              </div>
              <div>
                <h2 className="text-xl font-bold">Liz 教育</h2>
                <p className="text-sm text-[#F0CF9B]">快樂學習，成就未來</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              我們致力於提供優質的兒童教育服務，透過創新的教學方法，讓每個孩子都能在快樂中學習成長。
            </p>
            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#F0CF9B] hover:text-[#604D3F] transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#F0CF9B] hover:text-[#604D3F] transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#F0CF9B] hover:text-[#604D3F] transition-colors"
                aria-label="Youtube"
              >
                <YoutubeIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#F0CF9B]">快速連結</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors inline-flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-[#F0CF9B] rounded-full" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#F0CF9B]">課程分類</h3>
            <ul className="space-y-2">
              {courses.map((course) => (
                <li key={course.name}>
                  <Link
                    href={course.href}
                    className="text-gray-300 hover:text-white transition-colors inline-flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-[#F0CF9B] rounded-full" />
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#F0CF9B]">聯絡資訊</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin size={18} className="text-[#F0CF9B] mt-0.5 flex-shrink-0" />
                <span>台北市大安區教育路123號</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Phone size={18} className="text-[#F0CF9B] flex-shrink-0" />
                <a href="tel:02-1234-5678" className="hover:text-white transition-colors">
                  02-1234-5678
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Mail size={18} className="text-[#F0CF9B] flex-shrink-0" />
                <a href="mailto:contact@liz-edu.com" className="hover:text-white transition-colors">
                  contact@liz-edu.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <Clock size={18} className="text-[#F0CF9B] mt-0.5 flex-shrink-0" />
                <div>
                  <p>週一至週五：14:00 - 21:00</p>
                  <p>週六至週日：09:00 - 18:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Liz 教育. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
