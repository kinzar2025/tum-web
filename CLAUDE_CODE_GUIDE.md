# TUM-WEB - Claude Code Development Guide

## 📁 Project Overview

นี่คือโปรเจกต์เว็บไซต์ Digital Agency สำหรับ TUM-WEB สร้างด้วย Next.js 14

## 🎯 Project Goals

1. เว็บสไตล์ Web App ทันสมัย
2. รองรับ TH/EN
3. Dark/Light Mode
4. SEO/GEO Optimized (AI-friendly content)
5. Tracking ครบ (GA4, GTM, FB Pixel, TikTok Pixel)
6. Admin Panel สำหรับจัดการ Blog
7. AI Writer (Claude API) - Phase ถัดไป

## 🏗️ Architecture

```
Tech Stack:
- Next.js 14 (App Router)
- TypeScript
- TailwindCSS
- Framer Motion
- Supabase (Auth + Database)
- next-intl (i18n)
- next-themes (Dark/Light)
```

## 📋 Pages to Create

### Public Pages (Priority Order)

1. **Homepage** `/` - ✅ Created
2. **Services Overview** `/services` - TODO
3. **Website Service** `/services/website` - TODO
4. **Web App Service** `/services/webapp` - TODO
5. **Mobile App Service** `/services/app` - TODO
6. **AI Solutions** `/services/ai` - TODO
7. **Advertising** `/services/ads` - TODO
8. **SEO Service** `/services/seo` - TODO
9. **Social Media** `/services/social` - TODO
10. **Portfolio** `/portfolio` - TODO
11. **Blog Listing** `/blog` - TODO
12. **Blog Post** `/blog/[slug]` - TODO
13. **About** `/about` - TODO
14. **Contact** `/contact` - TODO

### Admin Pages

1. **Admin Login** `/admin` - TODO
2. **Dashboard** `/admin/dashboard` - TODO
3. **Blog Management** `/admin/blog` - TODO
4. **Blog Editor** `/admin/blog/new` - TODO
5. **Contacts** `/admin/contacts` - TODO

## 🎨 Design System

### Colors (from tailwind.config.ts)

```
Brand:
- Purple: #8B5CF6
- Blue: #3B82F6
- Cyan: #06B6D4
- Green: #10B981

Dark Mode:
- Background: #0A0A0A
- Surface: #171717
- Border: #262626
- Text: #FFFFFF
- Muted: #A3A3A3

Light Mode:
- Background: #FAFAFA
- Surface: #FFFFFF
- Border: #E5E5E5
- Text: #171717
- Muted: #737373
```

### Components (from globals.css)

- `.btn-primary` - Gradient button
- `.btn-secondary` - Outlined button
- `.btn-ghost` - Text button
- `.card` - Basic card
- `.card-hover` - Card with hover effect
- `.input` - Form input
- `.glass` - Glassmorphism effect
- `.text-gradient` - Gradient text

## 📝 Content Guidelines (VSO/GEO)

### Article Template

```markdown
# [คำถามที่คนถามจริง]

[Introduction: บอกปัญหา + บทความนี้ช่วยอะไร]

## [สิ่งนี้] คืออะไร?
## เหมาะกับใคร?
## ข้อดี-ข้อควรรู้
## คำแนะนำจาก TUM-WEB

## สรุป

## คำถามที่พบบ่อย
Q: [คำถาม]?
A: [คำตอบ]
```

### Writing Style

- เขียนแบบคนพูด (Conversational)
- ใช้คำถามเป็น H1
- ตอบตรงประเด็น
- มี FAQ ท้ายทุกบทความ
- มี CTA ชัดเจน

## 🔧 Development Commands

```bash
# Common tasks
npm run dev          # Start development
npm run build        # Build production
npm run lint         # Run linter

# When creating new pages
# 1. Create page.tsx in the correct folder
# 2. Add translations to messages/th.json and messages/en.json
# 3. Add Schema JSON-LD if applicable
```

## 📂 File Locations

| Task | Location |
|------|----------|
| Add new page | `src/app/[locale]/[path]/page.tsx` |
| Add component | `src/components/[category]/[name].tsx` |
| Add translation | `messages/th.json` & `messages/en.json` |
| Add API route | `src/app/api/[route]/route.ts` |
| Add utility | `src/lib/utils/index.ts` |
| Add type | `src/types/index.ts` |

## 🎯 Current Focus

เริ่มจากสร้างหน้า Services ก่อน เพราะเป็นหน้าสำคัญสำหรับ SEO

### Service Page Template

แต่ละหน้าบริการควรมี:
1. Hero Section (ชื่อบริการ + คำอธิบาย)
2. Features/Benefits
3. How It Works
4. Pricing (or "Contact for quote")
5. FAQ
6. CTA
7. Related Services
8. Schema JSON-LD (ServiceSchema)

## 🚀 Deployment Notes

- Deploy ที่ Vercel
- Domain: tum-web.com
- ต้องตั้ง Environment Variables ใน Vercel Dashboard
- ใช้ Supabase สำหรับ Database
- Google OAuth ผ่าน Supabase Auth

## 💡 Tips

1. ใช้ `useTranslations()` hook สำหรับ i18n
2. ใช้ `motion` จาก framer-motion สำหรับ animation
3. ใช้ `cn()` จาก lib/utils สำหรับ conditional classes
4. ทุก component ควรมี 'use client' ถ้าใช้ hooks
5. ใช้ Schema components จาก `@/components/seo/json-ld`

## 📞 Contact Info (for content)

- LINE: @tumweb
- LINE URL: https://lin.ee/EE6XyPL
- Email: tumweb.com@gmail.com
- Website: tum-web.com
- Facebook: facebook.com/tumweb.co
- ⚠️ ไม่แสดงเบอร์โทรบนเว็บ

---

หากต้องการให้ช่วยอะไร บอกได้เลย!
