"use client";

import { motion } from "framer-motion";
import { Gamepad2, Heart, Star } from "lucide-react";
import { philosophies } from "@/lib/data";

const iconMap: { [key: string]: React.ReactNode } = {
  play: <Gamepad2 size={32} />,
  heart: <Heart size={32} />,
  star: <Star size={32} />,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Philosophy() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-[#FFF9EE]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-[#E5B86B] font-medium mb-4"
          >
            Our Philosophy
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-[#604D3F] mb-4"
          >
            教育理念
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#8B7355] max-w-2xl mx-auto"
          >
            我們相信每個孩子都有無限潛能，透過愛與關懷，引導他們在快樂中學習成長
          </motion.p>
        </div>

        {/* Philosophy Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {philosophies.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow card-hover"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#F0CF9B] to-[#F8E289] rounded-2xl flex items-center justify-center text-[#604D3F] mb-6">
                {iconMap[item.icon]}
              </div>
              <h3 className="text-xl font-bold text-[#604D3F] mb-4">{item.title}</h3>
              <p className="text-[#8B7355] leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
