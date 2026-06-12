"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Users, Clock } from "lucide-react";
import { courses } from "@/lib/data";

const categoryColors: { [key: string]: string } = {
  數學: "bg-[#FFE4D1] text-[#C97B3C]",
  英文: "bg-[#D4E8F0] text-[#4A8FB0]",
  作文: "bg-[#E8E4FF] text-[#7B6BC7]",
  自然科學: "bg-[#C5E0B4] text-[#5A9E3E]",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function CoursePreview() {
  return (
    <section className="py-20">
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
              Our Courses
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-[#604D3F]"
            >
              熱門課程
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 text-[#604D3F] hover:text-[#E5B86B] font-medium transition-colors group mt-4 md:mt-0"
            >
              查看全部課程
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Course Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {courses.map((course) => (
            <motion.div
              key={course.id}
              variants={itemVariants}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all card-hover group"
            >
              {/* Image placeholder */}
              <div className="h-48 bg-gradient-to-br from-[#F0CF9B] to-[#F8E289] relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl">
                    {course.category === "數學" && "🔢"}
                    {course.category === "英文" && "📚"}
                    {course.category === "作文" && "✍️"}
                    {course.category === "自然科學" && "🔬"}
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[course.category]}`}>
                    {course.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-[#604D3F] mb-2 group-hover:text-[#E5B86B] transition-colors">
                  {course.title}
                </h3>
                <p className="text-sm text-[#8B7355] mb-4">{course.shortDescription}</p>

                <div className="flex items-center gap-4 text-sm text-[#A89683] mb-4">
                  <div className="flex items-center gap-1">
                    <Users size={14} />
                    <span>{course.ageRange}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{course.schedule.split(" ")[0]}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#E5B86B] font-bold">{course.price}</span>
                  <Link
                    href={`/courses/${course.id}`}
                    className="text-sm text-[#604D3F] hover:text-[#E5B86B] font-medium transition-colors"
                  >
                    了解更多 →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
