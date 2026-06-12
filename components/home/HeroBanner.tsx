"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "快樂學習，成就未來",
    subtitle: "讓每個孩子在遊戲中發現學習的樂趣",
    cta: "了解更多",
    ctaLink: "/about",
    bgColor: "from-[#F8E8C8] to-[#FFF9EE]",
  },
  {
    title: "專業師資，用心教學",
    subtitle: "小班制教學，關注每一位孩子的學習進度",
    cta: "課程介紹",
    ctaLink: "/courses",
    bgColor: "from-[#FFE4D1] to-[#FFF5EE]",
  },
  {
    title: "2024 夏令營熱烈報名中",
    subtitle: "小小探險家主題營隊，名額有限！",
    cta: "立即報名",
    ctaLink: "/register",
    bgColor: "from-[#D4E8F0] to-[#F0F8FF]",
  },
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section className="relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`min-h-[500px] md:min-h-[600px] bg-gradient-to-br ${slides[current].bgColor} relative`}
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 left-10 w-20 h-20 bg-[#F0CF9B]/30 rounded-full"
            />
            <motion.div
              animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-40 right-20 w-32 h-32 bg-[#F8E289]/40 rounded-full"
            />
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-20 left-1/4 w-16 h-16 bg-[#FFD1D1]/30 rounded-full"
            />
            <motion.div
              animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-32 right-1/3 w-24 h-24 bg-[#B8D4E3]/30 rounded-full"
            />
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#604D3F] mb-6"
              >
                {slides[current].title}
              </motion.h1>
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl text-[#8B7355] mb-8"
              >
                {slides[current].subtitle}
              </motion.p>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Link
                  href={slides[current].ctaLink}
                  className="inline-block bg-gradient-to-r from-[#F0CF9B] to-[#F8E289] text-[#604D3F] px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  {slides[current].cta}
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 rounded-full flex items-center justify-center text-[#604D3F] hover:bg-white transition-colors shadow-md"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 rounded-full flex items-center justify-center text-[#604D3F] hover:bg-white transition-colors shadow-md"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === current ? "bg-[#604D3F] w-8" : "bg-[#604D3F]/30"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
