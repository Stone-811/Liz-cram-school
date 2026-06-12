export interface Course {
  id: string;
  title: string;
  category: string;
  description: string;
  shortDescription: string;
  image: string;
  ageRange: string;
  schedule: string;
  features: string[];
  price: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  image: string;
}

export interface Philosophy {
  icon: string;
  title: string;
  description: string;
}

export const courses: Course[] = [
  {
    id: "math-basic",
    title: "趣味數學班",
    category: "數學",
    description: "透過遊戲和實作，讓孩子愛上數學！培養邏輯思維能力。",
    shortDescription: "培養邏輯思維，讓數學變有趣",
    image: "/images/courses/math.jpg",
    ageRange: "6-12歲",
    schedule: "每週二、四 16:00-18:00",
    features: ["小班教學", "遊戲式學習", "實作練習", "進度追蹤"],
    price: "NT$ 4,500/月",
  },
  {
    id: "english-fun",
    title: "快樂英語班",
    category: "英文",
    description: "沉浸式英語教學，透過歌曲、故事和對話，自然學會英語。",
    shortDescription: "沉浸式學習，自然開口說英語",
    image: "/images/courses/english.jpg",
    ageRange: "5-12歲",
    schedule: "每週一、三、五 16:30-18:00",
    features: ["外師授課", "情境教學", "互動遊戲", "繪本閱讀"],
    price: "NT$ 5,000/月",
  },
  {
    id: "writing",
    title: "創意寫作班",
    category: "作文",
    description: "激發想像力，培養表達能力，讓孩子愛上寫作。",
    shortDescription: "激發創意，培養文字表達力",
    image: "/images/courses/writing.jpg",
    ageRange: "7-12歲",
    schedule: "每週六 10:00-12:00",
    features: ["主題創作", "繪本引導", "同儕分享", "個別指導"],
    price: "NT$ 3,500/月",
  },
  {
    id: "science",
    title: "小小科學家",
    category: "自然科學",
    description: "動手做實驗，探索自然奧秘，培養科學精神。",
    shortDescription: "動手實驗，探索科學奧秘",
    image: "/images/courses/science.jpg",
    ageRange: "6-12歲",
    schedule: "每週日 14:00-16:00",
    features: ["實驗操作", "科學原理", "戶外探索", "專題報告"],
    price: "NT$ 4,000/月",
  },
];

export const newsItems: NewsItem[] = [
  {
    id: "summer-camp-2024",
    title: "2024 夏令營開始報名！",
    date: "2024-05-15",
    category: "活動公告",
    excerpt: "今年夏令營主題：「小小探險家」，帶領孩子探索自然與科學的奧秘...",
    content: "今年夏令營主題：「小小探險家」，帶領孩子探索自然與科學的奧秘。活動內容包含戶外探索、科學實驗、團隊合作遊戲等精彩活動。名額有限，請儘早報名！",
    image: "/images/news/summer-camp.jpg",
  },
  {
    id: "new-english-course",
    title: "全新英語會話課程上線",
    date: "2024-05-10",
    category: "課程消息",
    excerpt: "針對初學者設計的英語會話課程，由外籍教師全程授課...",
    content: "針對初學者設計的英語會話課程，由外籍教師全程授課，透過遊戲、歌曲和日常對話練習，讓孩子自然開口說英語。",
    image: "/images/news/english-course.jpg",
  },
  {
    id: "math-competition",
    title: "數學小達人競賽圓滿落幕",
    date: "2024-05-05",
    category: "活動報導",
    excerpt: "恭喜所有參賽的小朋友們！本次競賽共有50位學生參加...",
    content: "恭喜所有參賽的小朋友們！本次數學小達人競賽共有50位學生參加，展現了優秀的數學能力和邏輯思維。感謝家長們的支持！",
    image: "/images/news/math-competition.jpg",
  },
  {
    id: "parent-workshop",
    title: "親子共學工作坊",
    date: "2024-04-28",
    category: "活動公告",
    excerpt: "邀請家長與孩子一同參加，學習有效的親子溝通技巧...",
    content: "邀請家長與孩子一同參加，學習有效的親子溝通技巧和在家學習輔導方法。透過實際演練，增進親子關係。",
    image: "/images/news/workshop.jpg",
  },
];

export const philosophies: Philosophy[] = [
  {
    icon: "play",
    title: "遊戲中學習",
    description: "我們相信學習應該是快樂的。透過精心設計的遊戲和活動，讓孩子在玩樂中自然吸收知識。",
  },
  {
    icon: "heart",
    title: "愛與關懷",
    description: "每個孩子都是獨特的個體。我們用心關注每位學生的需求，給予適性化的教學與鼓勵。",
  },
  {
    icon: "star",
    title: "啟發潛能",
    description: "發掘每個孩子的天賦，培養自信心和解決問題的能力，為未來奠定堅實的基礎。",
  },
];

export const testimonials = [
  {
    name: "王媽媽",
    child: "小明（8歲）",
    content: "孩子以前很排斥數學，來到 Liz 教育後，現在每天都期待上課！老師的教學方式真的很棒。",
    avatar: "/images/testimonials/parent1.jpg",
  },
  {
    name: "林爸爸",
    child: "小雅（7歲）",
    content: "女兒的英文進步很多，而且變得更有自信敢開口說英語了。非常感謝老師們的用心。",
    avatar: "/images/testimonials/parent2.jpg",
  },
  {
    name: "陳媽媽",
    child: "小宇（10歲）",
    content: "作文班的老師很有耐心，孩子現在不但不怕寫作文，還會主動分享他的故事給我們聽。",
    avatar: "/images/testimonials/parent3.jpg",
  },
];
