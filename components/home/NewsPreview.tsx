"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { newsItems } from "@/lib/data";

const categoryColors: { [key: string]: string } = {
  活動公告: "bg-[#FFE4D1] text-[#C97B3C]",
  課程消息: "bg-[#D4E8F0] text-[#4A8FB0]",
  活動報導: "bg-[#C5E0B4] text-[#5A9E3E]",
};

export default function NewsPreview() {
  const latestNews = newsItems.slice(0, 3);

  return (
    <section className="py-20 bg-[#FFF9EE]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-[#E5B86B] font-medium mb-2"
            >
              Latest News
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-[#604D3F]"
            >
              最新消息
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-[#604D3F] hover:text-[#E5B86B] font-medium transition-colors group mt-4 md:mt-0"
            >
              查看全部消息
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* News Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {latestNews.map((news, index) => (
            <motion.article
              key={news.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all card-hover group"
            >
              {/* Image placeholder */}
              <div className="h-48 bg-gradient-to-br from-[#F0CF9B] to-[#F8E289] relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl">
                    {news.category === "活動公告" && "📢"}
                    {news.category === "課程消息" && "📖"}
                    {news.category === "活動報導" && "📷"}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[news.category]}`}>
                    {news.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-[#A89683]">
                    <Calendar size={12} />
                    {news.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#604D3F] mb-2 group-hover:text-[#E5B86B] transition-colors line-clamp-2">
                  {news.title}
                </h3>

                <p className="text-sm text-[#8B7355] mb-4 line-clamp-2">{news.excerpt}</p>

                <Link
                  href={`/news/${news.id}`}
                  className="inline-flex items-center gap-1 text-sm text-[#604D3F] hover:text-[#E5B86B] font-medium transition-colors"
                >
                  閱讀更多
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
