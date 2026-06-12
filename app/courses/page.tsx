"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Users, Clock, Check } from "lucide-react";
import { courses } from "@/lib/data";

const categories = ["全部", "數學", "英文", "作文", "自然科學"];

const categoryColors: { [key: string]: string } = {
  數學: "bg-[#FFE4D1] text-[#C97B3C]",
  英文: "bg-[#D4E8F0] text-[#4A8FB0]",
  作文: "bg-[#E8E4FF] text-[#7B6BC7]",
  自然科學: "bg-[#C5E0B4] text-[#5A9E3E]",
};

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState("全部");

  const filteredCourses =
    activeCategory === "全部"
      ? courses
      : courses.filter((course) => course.category === activeCategory);

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
            課程介紹
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#8B7355] max-w-2xl mx-auto"
          >
            專為不同年齡層孩子設計的多元課程，讓學習變得有趣又有效
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white sticky top-[73px] z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? "bg-[#604D3F] text-white"
                    : "bg-[#F8E8C8] text-[#604D3F] hover:bg-[#F0CF9B]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all"
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Image */}
                  <div className="lg:w-2/5 h-48 lg:h-auto bg-gradient-to-br from-[#F0CF9B] to-[#F8E289] relative flex items-center justify-center">
                    <span className="text-7xl">
                      {course.category === "數學" && "🔢"}
                      {course.category === "英文" && "📚"}
                      {course.category === "作文" && "✍️"}
                      {course.category === "自然科學" && "🔬"}
                    </span>
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[course.category]}`}>
                        {course.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:w-3/5 p-6">
                    <h3 className="text-xl font-bold text-[#604D3F] mb-2">{course.title}</h3>
                    <p className="text-[#8B7355] mb-4">{course.description}</p>

                    <div className="flex flex-wrap gap-4 text-sm text-[#A89683] mb-4">
                      <div className="flex items-center gap-1">
                        <Users size={16} />
                        <span>{course.ageRange}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        <span>{course.schedule}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm font-medium text-[#604D3F] mb-2">課程特色：</p>
                      <div className="flex flex-wrap gap-2">
                        {course.features.map((feature, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1 text-xs bg-[#FFF9EE] text-[#8B7355] px-2 py-1 rounded-full"
                          >
                            <Check size={12} className="text-[#5A9E3E]" />
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-xl font-bold text-[#E5B86B]">{course.price}</span>
                      <Link
                        href={`/register?course=${course.id}`}
                        className="bg-gradient-to-r from-[#F0CF9B] to-[#F8E289] text-[#604D3F] px-6 py-2 rounded-full font-semibold hover:shadow-md transition-all"
                      >
                        立即報名
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
