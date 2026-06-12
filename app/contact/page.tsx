"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "請輸入姓名"),
  email: z.string().email("請輸入正確的電子郵件"),
  phone: z.string().optional(),
  subject: z.string().min(1, "請選擇主題"),
  message: z.string().min(10, "請輸入至少10個字元"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: MapPin,
    title: "地址",
    content: "台北市大安區教育路123號",
    link: "https://maps.google.com",
  },
  {
    icon: Phone,
    title: "電話",
    content: "02-1234-5678",
    link: "tel:02-1234-5678",
  },
  {
    icon: Mail,
    title: "電子郵件",
    content: "contact@liz-edu.com",
    link: "mailto:contact@liz-edu.com",
  },
  {
    icon: Clock,
    title: "營業時間",
    content: "週一至週五 14:00-21:00\n週六至週日 09:00-18:00",
  },
];

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    setIsSubmitted(true);
  };

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
            聯絡我們
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#8B7355] max-w-2xl mx-auto"
          >
            有任何問題或建議，歡迎與我們聯繫
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-2xl font-bold text-[#604D3F] mb-6">聯絡資訊</h2>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#F0CF9B] to-[#F8E289] rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon size={22} className="text-[#604D3F]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#604D3F] mb-1">{item.title}</h3>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-[#8B7355] hover:text-[#E5B86B] transition-colors whitespace-pre-line"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-[#8B7355] whitespace-pre-line">{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="mt-8 h-64 bg-gradient-to-br from-[#F0CF9B]/20 to-[#F8E289]/20 rounded-2xl flex items-center justify-center">
                <div className="text-center text-[#8B7355]">
                  <MapPin size={40} className="mx-auto mb-2 text-[#E5B86B]" />
                  <p>地圖顯示區域</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#604D3F] hover:text-[#E5B86B] font-medium"
                  >
                    在 Google Maps 上查看
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-2xl font-bold text-[#604D3F] mb-6">線上諮詢</h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-3xl p-12 shadow-lg text-center"
                >
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#C5E0B4] to-[#5A9E3E] rounded-full flex items-center justify-center">
                    <CheckCircle size={40} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#604D3F] mb-4">訊息已送出！</h3>
                  <p className="text-[#8B7355]">
                    感謝您的來信，我們會盡快回覆您。
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="bg-white rounded-3xl p-8 shadow-lg"
                >
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-[#604D3F] mb-2">
                        姓名 *
                      </label>
                      <input
                        {...register("name")}
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F0CF9B] focus:ring-2 focus:ring-[#F0CF9B]/20 outline-none transition-all"
                        placeholder="請輸入姓名"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#604D3F] mb-2">
                        電話
                      </label>
                      <input
                        {...register("phone")}
                        type="tel"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F0CF9B] focus:ring-2 focus:ring-[#F0CF9B]/20 outline-none transition-all"
                        placeholder="選填"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-[#604D3F] mb-2">
                      電子郵件 *
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F0CF9B] focus:ring-2 focus:ring-[#F0CF9B]/20 outline-none transition-all"
                      placeholder="example@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-[#604D3F] mb-2">
                      諮詢主題 *
                    </label>
                    <select
                      {...register("subject")}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F0CF9B] focus:ring-2 focus:ring-[#F0CF9B]/20 outline-none transition-all"
                    >
                      <option value="">請選擇主題</option>
                      <option value="course">課程諮詢</option>
                      <option value="trial">預約試聽</option>
                      <option value="registration">報名問題</option>
                      <option value="other">其他</option>
                    </select>
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                    )}
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-[#604D3F] mb-2">
                      訊息內容 *
                    </label>
                    <textarea
                      {...register("message")}
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F0CF9B] focus:ring-2 focus:ring-[#F0CF9B]/20 outline-none transition-all resize-none"
                      placeholder="請輸入您的問題或需求..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#F0CF9B] to-[#F8E289] text-[#604D3F] py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      "送出中..."
                    ) : (
                      <>
                        <Send size={20} />
                        送出訊息
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
