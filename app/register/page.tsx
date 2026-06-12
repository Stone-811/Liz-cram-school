"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, User, Phone, BookOpen } from "lucide-react";
import { courses } from "@/lib/data";

const formSchema = z.object({
  studentName: z.string().min(2, "請輸入學生姓名"),
  studentAge: z.string().min(1, "請選擇年齡"),
  parentName: z.string().min(2, "請輸入家長姓名"),
  phone: z.string().regex(/^09\d{8}$/, "請輸入正確的手機號碼"),
  email: z.string().email("請輸入正確的電子郵件"),
  course: z.string().min(1, "請選擇課程"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

function RegisterForm() {
  const searchParams = useSearchParams();
  const defaultCourse = searchParams.get("course") || "";
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      course: defaultCourse,
    },
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto text-center bg-white rounded-3xl p-12 shadow-lg"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#C5E0B4] to-[#5A9E3E] rounded-full flex items-center justify-center">
              <CheckCircle size={40} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-[#604D3F] mb-4">報名成功！</h2>
            <p className="text-[#8B7355] mb-6">
              感謝您的報名，我們會在1-2個工作天內與您聯繫，確認課程細節。
            </p>
            <a
              href="/"
              className="inline-block bg-gradient-to-r from-[#F0CF9B] to-[#F8E289] text-[#604D3F] px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              返回首頁
            </a>
          </motion.div>
        </div>
      </section>
    );
  }

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
            課程報名
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#8B7355] max-w-2xl mx-auto"
          >
            填寫以下資料，我們將盡快與您聯繫安排試聽課程
          </motion.p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              {/* Student Info */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-[#604D3F] mb-4 flex items-center gap-2">
                  <User size={20} className="text-[#E5B86B]" />
                  學生資料
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#604D3F] mb-2">
                      學生姓名 *
                    </label>
                    <input
                      {...register("studentName")}
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F0CF9B] focus:ring-2 focus:ring-[#F0CF9B]/20 outline-none transition-all"
                      placeholder="請輸入學生姓名"
                    />
                    {errors.studentName && (
                      <p className="text-red-500 text-sm mt-1">{errors.studentName.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#604D3F] mb-2">
                      學生年齡 *
                    </label>
                    <select
                      {...register("studentAge")}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F0CF9B] focus:ring-2 focus:ring-[#F0CF9B]/20 outline-none transition-all"
                    >
                      <option value="">請選擇年齡</option>
                      {[5, 6, 7, 8, 9, 10, 11, 12].map((age) => (
                        <option key={age} value={age}>
                          {age} 歲
                        </option>
                      ))}
                    </select>
                    {errors.studentAge && (
                      <p className="text-red-500 text-sm mt-1">{errors.studentAge.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Parent Info */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-[#604D3F] mb-4 flex items-center gap-2">
                  <Phone size={20} className="text-[#E5B86B]" />
                  家長聯絡資料
                </h3>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-[#604D3F] mb-2">
                      家長姓名 *
                    </label>
                    <input
                      {...register("parentName")}
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F0CF9B] focus:ring-2 focus:ring-[#F0CF9B]/20 outline-none transition-all"
                      placeholder="請輸入家長姓名"
                    />
                    {errors.parentName && (
                      <p className="text-red-500 text-sm mt-1">{errors.parentName.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#604D3F] mb-2">
                      聯絡電話 *
                    </label>
                    <input
                      {...register("phone")}
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F0CF9B] focus:ring-2 focus:ring-[#F0CF9B]/20 outline-none transition-all"
                      placeholder="09xxxxxxxx"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                </div>
                <div>
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
              </div>

              {/* Course Selection */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-[#604D3F] mb-4 flex items-center gap-2">
                  <BookOpen size={20} className="text-[#E5B86B]" />
                  課程選擇
                </h3>
                <div>
                  <label className="block text-sm font-medium text-[#604D3F] mb-2">
                    想報名的課程 *
                  </label>
                  <select
                    {...register("course")}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F0CF9B] focus:ring-2 focus:ring-[#F0CF9B]/20 outline-none transition-all"
                  >
                    <option value="">請選擇課程</option>
                    {courses.map((course) => (
                      <option key={course.id} value={course.id}>
                        {course.title} ({course.category})
                      </option>
                    ))}
                  </select>
                  {errors.course && (
                    <p className="text-red-500 text-sm mt-1">{errors.course.message}</p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-[#604D3F] mb-2">
                  其他需求或問題
                </label>
                <textarea
                  {...register("message")}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F0CF9B] focus:ring-2 focus:ring-[#F0CF9B]/20 outline-none transition-all resize-none"
                  placeholder="請輸入您的問題或需求..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#F0CF9B] to-[#F8E289] text-[#604D3F] py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "提交中..." : "送出報名"}
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </>
  );
}

export default function RegisterPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-[#604D3F]">載入中...</div>
      </div>
    }>
      <RegisterForm />
    </Suspense>
  );
}
