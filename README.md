# 🎓 Student Dashboard

A futuristic, animated student learning dashboard built with Next.js App Router, Supabase, Tailwind CSS, and Framer Motion.

## 🚀 Live Demo
[https://student-dashboard-7ina.vercel.app/](https://student-dashboard-7ina.vercel.app/)

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 16 (App Router) | Framework + Server Components |
| Supabase (PostgreSQL) | Database + Data Fetching |
| Tailwind CSS | Styling + Dark Mode |
| Framer Motion | Animations + Spring Physics |
| Lucide React | Dynamic Icons |

## ✨ Features

- **Bento Grid Layout** — Hero tile, dynamic course tiles, activity graph
- **Live Supabase Data** — Courses fetched server-side from PostgreSQL
- **Staggered Animations** — Tiles fade + slide in sequentially on load
- **Spring Physics** — All hover and transition animations use Framer Motion springs
- **Sidebar** — Collapsible with `layoutId` sliding highlight animation
- **Animated Progress Bars** — Animate from 0% to actual value on load
- **Skeleton Loaders** — Shimmer placeholders while data fetches
- **Error Handling** — Graceful UI if Supabase connection fails
- **Fully Responsive** — Desktop, tablet (icon sidebar), mobile (bottom nav)

## 🏗 Architecture

### Server / Client Split
- `page.tsx` → **Server Component** — fetches Supabase data securely on the server, never exposes keys to client
- All tiles → **Client Components** — receive data as props, handle all animations
- `loading.tsx` → **Suspense boundary** — shows shimmer skeletons during fetch

### Key Technical Decisions
- `useEffect` for `Math.random()` in ActivityTile to prevent SSR hydration mismatch
- Explicit `iconMap` in CourseTile instead of dynamic `import *` to avoid invalid component type errors
- Sidebar auto-collapses on tablet via `useEffect` + `window.innerWidth` resize listener
- `boxShadow` used for hover glow instead of `border` to avoid layout shifts

## 📁 Project Structure
app/
├── components/
│   ├── Sidebar/
│   │   ├── Sidebar.tsx          ← Collapsible desktop nav
│   │   ├── SidebarNavItem.tsx   ← layoutId sliding highlight
│   │   └── MobileNav.tsx        ← Bottom nav for mobile
│   ├── BentoGrid/
│   │   ├── BentoGrid.tsx        ← Stagger animation wrapper
│   │   ├── HeroTile.tsx         ← Welcome + streak tile
│   │   ├── CourseTile.tsx       ← Dynamic course cards
│   │   └── ActivityTile.tsx     ← Contribution graph
│   └── ui/
│       ├── ProgressBar.tsx      ← Animated 0→value progress
│       └── SkeletonTile.tsx     ← Shimmer loader
├── lib/
│   ├── supabase.ts              ← Supabase client
│   └── types.ts                 ← TypeScript interfaces
├── loading.tsx                  ← Global skeleton UI
└── page.tsx                     ← Server Component entry

## 🔐 Environment Variables

Create a `.env.local` file based on `.env.example`:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

## 💻 Local Setup

```bash
# 1. Clone the repo
git clone https://github.com/dalemohit05/student-dashboard.git

# 2. Install dependencies
npm install

# 3. Add environment variables
cp .env.example .env.local
# Fill in your Supabase keys in .env.local

# 4. Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## 🗄 Database Schema

```sql
CREATE TABLE courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  progress INTEGER NOT NULL,
  icon_name TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);
```