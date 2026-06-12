"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#604D3F] to-[#8B7355]" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -left-20 w-64 h-64 border-[30px] border-white/5 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-32 -right-32 w-80 h-80 border-[40px] border-white/5 rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            準備好讓孩子開始快樂學習了嗎？
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/80 mb-8"
          >
            立即預約免費試聽課程，讓我們一起為孩子的未來努力
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#F0CF9B] to-[#F8E289] text-[#604D3F] px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all hover:-translate-y-1"
            >
              立即報名
              <ArrowRight size={20} />
            </Link>
            <a
              href="tel:02-1234-5678"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all border border-white/20"
            >
              <Phone size={20} />
              電話諮詢
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
