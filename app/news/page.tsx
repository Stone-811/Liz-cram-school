"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { newsItems } from "@/lib/data";

const categoryColors: { [key: string]: string } = {
  活動公告: "bg-[#FFE4D1] text-[#C97B3C]",
  課程消息: "bg-[#D4E8F0] text-[#4A8FB0]",
  活動報導: "bg-[#C5E0B4] text-[#5A9E3E]",
};

export default function NewsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-[#F8E8C8] to-background">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-[#604D3F] mb-4"
          >
            最新消息
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#8B7355] max-w-2xl mx-auto"
          >
            掌握 Liz 教育的最新動態、課程資訊與活動公告
          </motion.p>
        </div>
      </section>

      {/* News List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {newsItems.map((news, index) => (
              <motion.article
                key={news.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all mb-6 card-hover"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="md:w-1/3 h-48 md:h-auto bg-gradient-to-br from-[#F0CF9B] to-[#F8E289] relative flex items-center justify-center">
                    <span className="text-6xl">
                      {news.category === "活動公告" && "📢"}
                      {news.category === "課程消息" && "📖"}
                      {news.category === "活動報導" && "📷"}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[news.category]}`}>
                        {news.category}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-[#A89683]">
                        <Calendar size={14} />
                        {news.date}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-[#604D3F] mb-3 hover:text-[#E5B86B] transition-colors">
                      <Link href={`/news/${news.id}`}>{news.title}</Link>
                    </h2>

                    <p className="text-[#8B7355] mb-4 line-clamp-2">{news.excerpt}</p>

                    <Link
                      href={`/news/${news.id}`}
                      className="inline-flex items-center gap-2 text-[#604D3F] hover:text-[#E5B86B] font-medium transition-colors"
                    >
                      閱讀全文
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
