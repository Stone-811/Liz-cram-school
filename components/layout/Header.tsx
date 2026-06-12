"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";

const navItems = [
  { name: "首頁", href: "/" },
  { name: "關於我們", href: "/about" },
  { name: "課程介紹", href: "/courses" },
  { name: "最新消息", href: "/news" },
  { name: "課程報名", href: "/register" },
  { name: "聯絡我們", href: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      {/* Top bar */}
      <div className="hidden md:block bg-[#604D3F] text-white py-2">
        <div className="container mx-auto px-4 flex justify-end items-center gap-6 text-sm">
          <a href="tel:02-1234-5678" className="flex items-center gap-2 hover:text-[#F0CF9B] transition-colors">
            <Phone size={14} />
            <span>02-1234-5678</span>
          </a>
          <a href="mailto:contact@liz-edu.com" className="flex items-center gap-2 hover:text-[#F0CF9B] transition-colors">
            <Mail size={14} />
            <span>contact@liz-edu.com</span>
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#F0CF9B] to-[#F8E289] rounded-full flex items-center justify-center shadow-md">
              <span className="text-[#604D3F] font-bold text-xl">L</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#604D3F]">Liz 教育</h1>
              <p className="text-xs text-[#8B7355]">快樂學習，成就未來</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[#604D3F] hover:text-[#E5B86B] font-medium transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F0CF9B] transition-all group-hover:w-full" />
              </Link>
            ))}
            <Link
              href="/register"
              className="bg-gradient-to-r from-[#F0CF9B] to-[#F8E289] text-[#604D3F] px-6 py-2.5 rounded-full font-semibold hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              立即報名
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[#604D3F]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-[#604D3F] hover:text-[#E5B86B] font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/register"
                className="block text-center bg-gradient-to-r from-[#F0CF9B] to-[#F8E289] text-[#604D3F] px-6 py-3 rounded-full font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                立即報名
              </Link>
              <div className="pt-4 border-t space-y-2 text-sm text-[#8B7355]">
                <a href="tel:02-1234-5678" className="flex items-center gap-2">
                  <Phone size={14} />
                  <span>02-1234-5678</span>
                </a>
                <a href="mailto:contact@liz-edu.com" className="flex items-center gap-2">
                  <Mail size={14} />
                  <span>contact@liz-edu.com</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
