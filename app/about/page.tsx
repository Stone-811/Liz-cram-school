"use client";

import { motion } from "framer-motion";
import { Award, Users, BookOpen, Heart } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "學生人數" },
  { icon: BookOpen, value: "10+", label: "課程種類" },
  { icon: Award, value: "8", label: "專業師資" },
  { icon: Heart, value: "98%", label: "家長滿意度" },
];

const team = [
  {
    name: "王老師",
    role: "數學教學主任",
    description: "擁有15年教學經驗，擅長啟發式教學，讓孩子愛上數學。",
    avatar: "👨‍🏫",
  },
  {
    name: "Lisa 老師",
    role: "英語教學主任",
    description: "美國教育碩士，專精幼兒英語教學，注重互動式學習。",
    avatar: "👩‍🏫",
  },
  {
    name: "陳老師",
    role: "作文教學主任",
    description: "中文系畢業，熱愛兒童文學，引導孩子發現寫作的樂趣。",
    avatar: "👨‍🏫",
  },
  {
    name: "林老師",
    role: "科學教學主任",
    description: "理工背景出身，擅長將複雜的科學概念轉化為有趣的實驗。",
    avatar: "👩‍🔬",
  },
];

const timeline = [
  { year: "2015", title: "成立", description: "Liz 教育在台北成立，開始提供數學教學服務。" },
  { year: "2017", title: "擴展", description: "新增英語課程，聘請外籍教師加入團隊。" },
  { year: "2019", title: "成長", description: "學生人數突破300人，開設作文與科學課程。" },
  { year: "2022", title: "創新", description: "導入數位教學工具，提升學習效果。" },
  { year: "2024", title: "展望", description: "持續精進教學品質，為更多孩子點亮學習之光。" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-[#F8E8C8] to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-[#604D3F] mb-6"
            >
              關於 Liz 教育
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-[#8B7355] leading-relaxed"
            >
              我們相信每個孩子都有無限可能。自2015年成立以來，Liz 教育致力於提供優質的兒童教育服務，
              透過創新的教學方法和溫暖的學習環境，幫助孩子在快樂中成長、學習。
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#F0CF9B] to-[#F8E289] rounded-2xl flex items-center justify-center text-[#604D3F]">
                  <stat.icon size={28} />
                </div>
                <div className="text-3xl font-bold text-[#604D3F] mb-1">{stat.value}</div>
                <div className="text-[#8B7355]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-[#FFF9EE]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-[#E5B86B] font-medium mb-2 block">Our Mission</span>
                <h2 className="text-3xl font-bold text-[#604D3F] mb-6">我們的使命</h2>
                <div className="space-y-4 text-[#8B7355] leading-relaxed">
                  <p>
                    在 Liz 教育，我們相信學習應該是一段充滿樂趣的旅程。我們的使命是透過創新的教學方法，
                    讓每個孩子都能發現學習的樂趣，培養終身學習的熱情。
                  </p>
                  <p>
                    我們重視每一位學生的獨特性，提供個性化的學習計畫，確保每個孩子都能在適合自己的步調中成長。
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#F0CF9B] to-[#F8E289] rounded-3xl p-8 aspect-square flex items-center justify-center"
              >
                <span className="text-9xl">🎯</span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#E5B86B] font-medium mb-2 block">Our Team</span>
            <h2 className="text-3xl font-bold text-[#604D3F]">專業師資團隊</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all text-center card-hover"
              >
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h3 className="text-lg font-bold text-[#604D3F] mb-1">{member.name}</h3>
                <p className="text-sm text-[#E5B86B] mb-3">{member.role}</p>
                <p className="text-sm text-[#8B7355]">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-[#FFF9EE]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#E5B86B] font-medium mb-2 block">Our Journey</span>
            <h2 className="text-3xl font-bold text-[#604D3F]">發展歷程</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="text-xl font-bold text-[#E5B86B]">{item.year}</span>
                </div>
                <div className="relative flex-shrink-0">
                  <div className="w-4 h-4 bg-[#F0CF9B] rounded-full border-4 border-white shadow-md" />
                  {index < timeline.length - 1 && (
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-0.5 h-full bg-[#F0CF9B]/30" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="font-bold text-[#604D3F] mb-2">{item.title}</h3>
                  <p className="text-[#8B7355]">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
