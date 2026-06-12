import HeroBanner from "@/components/home/HeroBanner";
import Philosophy from "@/components/home/Philosophy";
import CoursePreview from "@/components/home/CoursePreview";
import NewsPreview from "@/components/home/NewsPreview";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <Philosophy />
      <CoursePreview />
      <NewsPreview />
      <CTASection />
    </>
  );
}
