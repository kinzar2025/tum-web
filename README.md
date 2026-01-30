# TUM-WEB Digital Agency

เว็บไซต์ Digital Agency สำหรับ TUM-WEB พัฒนาด้วย Next.js 14, TailwindCSS, Framer Motion และ Supabase

## 🚀 Features

- ✅ **Web App Style** - ดีไซน์ทันสมัย ใช้งานเหมือนแอพ
- ✅ **Dark/Light Mode** - สลับธีมได้
- ✅ **i18n (TH/EN)** - รองรับ 2 ภาษา
- ✅ **Responsive** - รองรับทุกหน้าจอ
- ✅ **SEO Optimized** - Schema JSON-LD, Meta tags
- ✅ **GEO Ready** - พร้อมให้ AI เลือกเป็นคำตอบ
- ✅ **Tracking** - GA4, GTM, FB Pixel, TikTok Pixel
- ✅ **Contact Form** - ส่งแจ้งเตือนผ่าน Telegram
- ✅ **AI Chatbot Demo** - Widget แชทบอทตัวอย่าง
- ✅ **Blog System** - ระบบบทความ
- ✅ **Admin Panel** - หลังบ้านจัดการเนื้อหา

## 📁 Project Structure

```
tum-web/
├── src/
│   ├── app/
│   │   ├── [locale]/           # i18n routing
│   │   │   ├── page.tsx        # หน้าแรก
│   │   │   ├── services/       # หน้าบริการ
│   │   │   ├── portfolio/      # หน้าผลงาน
│   │   │   ├── blog/           # หน้าบทความ
│   │   │   ├── about/          # หน้าเกี่ยวกับ
│   │   │   ├── contact/        # หน้าติดต่อ
│   │   │   └── admin/          # หลังบ้าน
│   │   ├── api/                # API Routes
│   │   ├── globals.css
│   │   └── layout.tsx
│   ├── components/
│   │   ├── ui/                 # UI Components
│   │   ├── layout/             # Header, Footer
│   │   ├── sections/           # Page Sections
│   │   ├── forms/              # Form Components
│   │   ├── blog/               # Blog Components
│   │   ├── chat/               # Chat Widget
│   │   ├── seo/                # JSON-LD Schemas
│   │   ├── tracking/           # Analytics Scripts
│   │   └── providers/          # Context Providers
│   ├── lib/
│   │   ├── supabase/           # Supabase Client
│   │   └── utils/              # Utility Functions
│   ├── types/                  # TypeScript Types
│   ├── hooks/                  # Custom Hooks
│   └── i18n.ts                 # i18n Config
├── messages/                   # Translation Files
│   ├── th.json
│   └── en.json
├── public/
│   ├── images/
│   └── icons/
├── content/
│   └── blog/                   # Blog MDX Files
└── ...config files
```

## 🛠 Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | TailwindCSS |
| Animation | Framer Motion |
| i18n | next-intl |
| Theme | next-themes |
| Database | Supabase (PostgreSQL) |
| Auth | Supabase Auth (Google OAuth) |
| Forms | React Hook Form + Zod |
| Icons | Lucide React |
| Notifications | Sonner (Toast) |
| Hosting | Vercel |

## 📦 Getting Started

### 1. Clone & Install

```bash
# Clone project
git clone <your-repo-url> tum-web
cd tum-web

# Install dependencies
npm install
```

### 2. Environment Setup

```bash
# Copy environment file
cp .env.example .env.local

# Edit .env.local with your values
```

### 3. Supabase Setup

1. สร้าง Project ใหม่ที่ [supabase.com](https://supabase.com)
2. คัดลอก URL และ Keys ไปใส่ใน `.env.local`
3. เปิด Google Auth ใน Authentication > Providers
4. รัน SQL สร้างตาราง:

```sql
-- Blog Posts
CREATE TABLE blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT,
  excerpt TEXT,
  meta_title TEXT,
  meta_description TEXT,
  featured_image TEXT,
  category TEXT,
  tags TEXT[],
  faq JSONB,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Contact Submissions
CREATE TABLE contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT,
  line_id TEXT,
  phone TEXT,
  service TEXT,
  budget TEXT,
  message TEXT NOT NULL,
  source_url TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  notified_telegram BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Policies (adjust as needed)
CREATE POLICY "Public can read published posts" ON blog_posts
  FOR SELECT USING (status = 'published');

CREATE POLICY "Authenticated users can manage posts" ON blog_posts
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Anyone can submit contact" ON contacts
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Authenticated users can read contacts" ON contacts
  FOR SELECT USING (auth.role() = 'authenticated');
```

### 4. Google OAuth Setup

1. ไปที่ [Google Cloud Console](https://console.cloud.google.com)
2. เลือก Project (ใช้ KINZAR)
3. ไปที่ APIs & Services > Credentials
4. สร้าง OAuth 2.0 Client ID
5. ตั้งค่า Redirect URI:
   ```
   https://[YOUR-PROJECT].supabase.co/auth/v1/callback
   ```
6. คัดลอก Client ID และ Secret ไปใส่ใน Supabase Dashboard

### 5. Telegram Bot Setup

1. สร้าง Bot ผ่าน [@BotFather](https://t.me/BotFather)
2. คัดลอก Token ไปใส่ใน `.env.local`
3. สร้าง Group/Channel และเพิ่ม Bot เข้าไป
4. หา Chat ID และใส่ใน `.env.local`

### 6. Tracking Setup

1. **Google Tag Manager**: สร้าง Container และคัดลอก GTM ID
2. **Google Analytics 4**: สร้าง Property และคัดลอก Measurement ID
3. **Facebook Pixel**: สร้างใน Events Manager
4. **TikTok Pixel**: สร้างใน TikTok Ads Manager

### 7. Run Development

```bash
npm run dev
```

เปิด [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment

### Deploy to Vercel

1. Push code ขึ้น GitHub
2. Import project ใน [Vercel](https://vercel.com)
3. ตั้งค่า Environment Variables
4. Deploy!

### Environment Variables (Vercel)

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_SITE_URL=https://tum-web.com
NEXT_PUBLIC_GTM_ID=
NEXT_PUBLIC_GA_MEASUREMENT_ID=
NEXT_PUBLIC_FB_PIXEL_ID=
NEXT_PUBLIC_TIKTOK_PIXEL_ID=
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
```

## 📝 Development with Claude Code

โปรเจกต์นี้ออกแบบมาให้ใช้งานกับ VS Code + Claude Code ได้ง่าย:

### Commands ที่ใช้บ่อย

```bash
# สร้างหน้าบริการใหม่
# ให้ Claude สร้างไฟล์ใน src/app/[locale]/services/[service-name]/page.tsx

# สร้างบทความ Blog
# ให้ Claude สร้างไฟล์ใน content/blog/[slug].mdx

# เพิ่ม Component ใหม่
# ให้ Claude สร้างใน src/components/

# แก้ไข Translation
# แก้ไขไฟล์ใน messages/th.json และ messages/en.json
```

### Tips

1. **เพิ่มหน้าบริการ**: สร้างไฟล์ page.tsx ใน services/[name] และเพิ่ม translation ใน messages
2. **เพิ่มบทความ**: สร้าง MDX file และ add to database
3. **แก้ไขสี**: แก้ใน tailwind.config.ts
4. **แก้ไข Schema**: แก้ใน src/components/seo/json-ld.tsx

## 📊 SEO / GEO Checklist

- [x] Organization Schema
- [x] WebSite Schema
- [x] Service Schema (แต่ละบริการ)
- [x] Article Schema (Blog)
- [x] FAQ Schema
- [x] Breadcrumb Schema
- [x] Meta Tags (Title, Description, OG, Twitter)
- [x] Sitemap.xml (TODO: implement)
- [x] Robots.txt (TODO: implement)
- [ ] Blog Articles (10 บทความ)

## 🎯 Next Steps

1. [ ] สร้างหน้า Services แต่ละบริการ (7 หน้า)
2. [ ] สร้างหน้า Portfolio รายละเอียด
3. [ ] สร้างหน้า Blog listing + single post
4. [ ] สร้างหน้า About
5. [ ] สร้างหน้า Contact
6. [ ] สร้าง Admin Panel
7. [ ] เขียน Blog 10 บทความ
8. [ ] ทดสอบ Tracking
9. [ ] Deploy Production

## 📞 Contact

- **Website**: [tum-web.com](https://tum-web.com)
- **LINE**: @tumweb
- **Email**: tumweb.com@gmail.com

---

Made with ❤️ by TUM-WEB Team
