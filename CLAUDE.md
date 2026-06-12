# Liz 教育網站

## 專案資訊

- **專案名稱**: Liz 教育 (兒童教育/補習班網站)
- **GitHub**: https://github.com/Stone-811/Liz-cram-school
- **Vercel**: https://liz-education.vercel.app
- **設計參考**: https://ana.numeracylab.com/

## 技術棧

- **框架**: Next.js 14 (App Router)
- **語言**: TypeScript
- **樣式**: Tailwind CSS
- **動畫**: Framer Motion
- **表單**: React Hook Form + Zod
- **圖示**: Lucide React + 自訂 SVG

## 專案結構

```
liz-education/
├── app/                    # Next.js App Router 頁面
│   ├── page.tsx           # 首頁
│   ├── about/             # 關於我們
│   ├── courses/           # 課程介紹
│   ├── news/              # 最新消息
│   ├── register/          # 課程報名
│   └── contact/           # 聯絡我們
├── components/
│   ├── layout/            # 共用佈局元件
│   │   ├── Header.tsx     # 頂部導航
│   │   └── Footer.tsx     # 底部資訊
│   └── home/              # 首頁專用元件
│       ├── HeroBanner.tsx
│       ├── Philosophy.tsx
│       ├── CoursePreview.tsx
│       ├── NewsPreview.tsx
│       └── CTASection.tsx
├── lib/
│   └── data.ts            # 模擬資料 (課程、消息等)
└── public/                # 靜態資源
```

## 設計系統

### 色彩

| 用途 | 色碼 |
|------|------|
| 主色 (米色) | `#F0CF9B` |
| 主色淺 | `#F8E8C8` |
| 強調色 | `#F8E289` |
| 文字主色 | `#604D3F` |
| 文字次色 | `#8B7355` |
| 背景色 | `#FFFCF5` |

### 風格特色

- 溫暖、活潑、兒童友善
- 圓角卡片設計
- 漸層按鈕
- 流暢過場動畫

## 開發指令

```bash
# 安裝依賴
npm install

# 開發模式
npm run dev

# 建置
npm run build

# 部署到 Vercel
npx vercel --prod
```

## 待辦事項

- [ ] 替換模擬圖片為實際圖片
- [ ] 更新聯絡資訊 (電話、地址、Email)
- [ ] 提供 Logo 替換文字 Logo
- [ ] 連接後端 API 處理表單提交
- [ ] 新增 Google Maps 嵌入地圖
- [ ] 新增課程詳情頁 (`/courses/[id]`)
- [ ] 新增消息詳情頁 (`/news/[id]`)

## 部署

專案已連結 GitHub，push 到 `main` 分支會自動觸發 Vercel 部署。
