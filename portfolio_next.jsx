# 📁 Project Structure

```
portfolio/
├─ app/
│  ├─ contact/page.tsx
│  ├─ globals.css
│  ├─ layout.tsx
│  ├─ page.tsx
│  ├─ projects/page.tsx
│  └─ services/page.tsx
├─ components/
│  ├─ Footer.tsx
│  ├─ Hero.tsx
│  ├─ Nav.tsx
│  ├─ ProjectCard.tsx
│  └─ ServiceCard.tsx
├─ data/
│  ├─ projects.ts
│  └─ services.ts
├─ public/
│  └─ favicon.svg
├─ .gitignore
├─ next.config.ts
├─ package.json
├─ postcss.config.mjs
├─ README.md
├─ tailwind.config.ts
└─ tsconfig.json
```

---

# 📦 `package.json`
```json
{
  "name": "portfolio-ai-mvp-builder",
  "private": true,
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.460.0",
    "next": "^14.2.5",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@types/node": "^20.12.12",
    "@types/react": "^18.2.79",
    "@types/react-dom": "^18.2.25",
    "autoprefixer": "^10.4.19",
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.4",
    "typescript": "^5.4.5"
  }
}
```

---

# 📐 `tsconfig.json`
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }]
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

---

# ⚙️ `next.config.ts`
```ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: true
  }
};

export default nextConfig;
```

---

# 🎨 `tailwind.config.ts`
```ts
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7c3aed',
        secondary: '#22d3ee'
      }
    }
  },
  plugins: []
};
export default config;
```

---

# 🧪 `postcss.config.mjs`
```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
};
```

---

# 🧷 `.gitignore`
```gitignore
# dependencies
/node_modules

# builds
/.next
/out

# misc
.env
.DS_Store
```

---

# 🖼️ `public/favicon.svg`
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
  <defs>
    <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0%" stop-color="#7c3aed"/>
      <stop offset="100%" stop-color="#22d3ee"/>
    </linearGradient>
  </defs>
  <rect width="256" height="256" rx="56" fill="url(#g)"/>
  <path d="M70 156c0-26 20-46 46-46h24v-18c0-8 6-14 14-14s14 6 14 14v88c0 8-6 14-14 14H116c-26 0-46-20-46-46z" fill="#fff"/>
</svg>
```

---

# 🧩 `app/globals.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root { color-scheme: dark; }
html, body { height: 100%; }
body { @apply bg-neutral-950 text-neutral-100; }
.container { @apply max-w-6xl mx-auto px-4; }
.btn { @apply inline-flex items-center gap-2 rounded-2xl px-5 py-3 font-medium shadow hover:shadow-lg transition;
  background: linear-gradient(90deg, theme(colors.primary), theme(colors.secondary)); }
.card { @apply rounded-2xl bg-neutral-900/60 border border-neutral-800 p-5 shadow; }
.badge { @apply text-xs px-2 py-1 rounded-full bg-neutral-800 border border-neutral-700; }
```

---

# 🧱 `app/layout.tsx`
```tsx
import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'João – AI MVP Builder',
  description: 'Transformo ideias em apps com IA, automações e deploy rápido.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Nav />
        <main className="container py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

---

# 🏠 `app/page.tsx`
```tsx
'use client';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';
import services from '@/data/services';
import projects from '@/data/projects';

export default function Home() {
  return (
    <div className="space-y-12">
      <Hero />

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Serviços</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {services.slice(0,3).map((s) => (
            <motion.div key={s.title} initial={{opacity:0, y:10}} animate={{opacity:1, y:0}}>
              <ServiceCard {...s} />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Projetos</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {projects.slice(0,3).map((p) => (
            <motion.div key={p.title} initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}}>
              <ProjectCard {...p} />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
```

---

# 🧰 `app/services/page.tsx`
```tsx
import ServiceCard from '@/components/ServiceCard';
import services from '@/data/services';

export default function ServicesPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Serviços</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {services.map((s) => (
          <ServiceCard key={s.title} {...s} />
        ))}
      </div>
    </div>
  );
}
```

---

# 🗂️ `app/projects/page.tsx`
```tsx
import ProjectCard from '@/components/ProjectCard';
import projects from '@/data/projects';

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Projetos</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </div>
  );
}
```

---

# ✉️ `app/contact/page.tsx`
```tsx
'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  function mailto() {
    const subject = encodeURIComponent('Quero transformar minha ideia em app');
    const body = encodeURIComponent(`Nome: ${name}\nEmail: ${email}\nMensagem: ${msg}`);
    window.location.href = `mailto:contato@exemplo.com?subject=${subject}&body=${body}`;
  }

  return (
    <div className="max-w-xl space-y-4">
      <h1 className="text-3xl font-bold">Contato</h1>
      <p>Me conte sua ideia e eu respondo com um plano de MVP em 24h.</p>
      <input className="w-full p-3 rounded-xl bg-neutral-900 border border-neutral-800" placeholder="Seu nome" value={name} onChange={e=>setName(e.target.value)} />
      <input className="w-full p-3 rounded-xl bg-neutral-900 border border-neutral-800" placeholder="Seu e-mail" value={email} onChange={e=>setEmail(e.target.value)} />
      <textarea className="w-full p-3 rounded-xl bg-neutral-900 border border-neutral-800" rows={6} placeholder="Descreva sua ideia" value={msg} onChange={e=>setMsg(e.target.value)} />
      <button className="btn" onClick={mailto}>Enviar</button>
      <p className="text-sm text-neutral-400">Altere o e-mail em <code>app/contact/page.tsx</code> (linha do <code>mailto:</code>).</p>
    </div>
  );
}
```

---

# 🧭 `components/Nav.tsx`
```tsx
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Início' },
  { href: '/services', label: 'Serviços' },
  { href: '/projects', label: 'Projetos' },
  { href: '/contact', label: 'Contato' }
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <header className="border-b border-neutral-800/80 bg-neutral-950/50 sticky top-0 backdrop-blur">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="font-bold tracking-tight">João • AI MVP Builder</Link>
        <nav className="flex gap-4 text-sm">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={`px-3 py-2 rounded-xl hover:bg-neutral-900 ${pathname===l.href ? 'bg-neutral-900 border border-neutral-800' : ''}`}>{l.label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
```

---

# 🦶 `components/Footer.tsx`
```tsx
export default function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-800/80">
      <div className="container py-8 text-sm text-neutral-400 flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} João – MVPs com IA. Todos os direitos reservados.</p>
        <p className="opacity-80">Disponível para freelas globais • Remote only</p>
      </div>
    </footer>
  );
}
```

---

# 🌟 `components/Hero.tsx`
```tsx
'use client';
import { motion } from 'framer-motion';
import { Sparkles, Rocket, Zap } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.5}} className="text-center space-y-6">
        <span className="badge inline-flex items-center gap-2"><Sparkles size={14}/> MVPs com IA</span>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Transformo sua <span className="text-primary">ideia</span> em <span className="text-secondary">app</span> em dias, não meses.
        </h1>
        <p className="text-neutral-300 max-w-2xl mx-auto">
          Prototipagem rápida com IA, automações (n8n/Zapier) e deploy (Vercel/Supabase). Do conceito ao link funcionando.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link href="/contact" className="btn"><Rocket size={18}/> Começar meu MVP</Link>
          <Link href="/projects" className="px-5 py-3 rounded-2xl border border-neutral-800 hover:bg-neutral-900"><Zap size={18}/> Ver projetos</Link>
        </div>
      </motion.div>

      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30" aria-hidden>
        <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full blur-3xl" style={{background:'radial-gradient(circle,#7c3aed33,transparent 60%)'}} />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full blur-3xl" style={{background:'radial-gradient(circle,#22d3ee33,transparent 60%)'}} />
      </div>
    </section>
  );
}
```

---

# 📦 `components/ServiceCard.tsx`
```tsx
import { ReactNode } from 'react';

type Service = {
  title: string;
  description: string;
  bullets: string[];
  cta?: string;
  link?: string;
};

export default function ServiceCard({ title, description, bullets, cta = 'Quero este serviço', link = '/contact' }: Service) {
  return (
    <div className="card space-y-3">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-neutral-300 text-sm">{description}</p>
      <ul className="text-sm list-disc pl-5 space-y-1 text-neutral-300">
        {bullets.map((b) => <li key={b}>{b}</li>)}
      </ul>
      <a href={link} className="btn text-sm w-fit">{cta}</a>
    </div>
  );
}
```

---

# 🗃️ `components/ProjectCard.tsx`
```tsx
import { ExternalLink } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
};

export default function ProjectCard({ title, description, tags, link }: Project) {
  return (
    <div className="card space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        {link && (
          <a href={link} target="_blank" className="text-neutral-300 hover:text-white" aria-label="ver projeto"><ExternalLink size={18}/></a>
        )}
      </div>
      <p className="text-neutral-300 text-sm">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => <span key={t} className="badge">{t}</span>)}
      </div>
    </div>
  );
}
```

---

# 🗄️ `data/services.ts`
```ts
const services = [
  {
    title: 'MVP Rápido com IA',
    description: 'Construo um MVP funcional para validar sua ideia sem gastar uma fortuna.',
    bullets: ['1 funcionalidade principal', 'Deploy no Vercel', 'Documentação básica']
  },
  {
    title: 'Automações Inteligentes (n8n/Zapier)',
    description: 'Poupe horas integrando ferramentas e IA no seu fluxo de trabalho.',
    bullets: ['Integração de até 3 ferramentas', 'IA para e-mails/relatórios', 'Testes inclusos']
  },
  {
    title: 'Deploy & Infra Simples',
    description: 'Coloco seu app/API online (Vercel, Railway, Supabase).',
    bullets: ['Setup de variáveis', 'Banco (Supabase) opcional', 'URL pública']
  }
];

export default services;
```

---

# 🗄️ `data/projects.ts`
```ts
const projects = [
  {
    title: 'Resumidor de Texto com IA',
    description: 'App Next.js que resume textos longos via API e entrega em segundos.',
    tags: ['Next.js', 'Vercel', 'OpenAI'],
    link: '#'
  },
  {
    title: 'Chatbot para Site',
    description: 'Widget de chat integrado ao site para responder dúvidas frequentes com IA.',
    tags: ['Widget', 'Chatbot', 'API'],
    link: '#'
  },
  {
    title: 'Automação n8n + Sheets',
    description: 'Fluxo que recebe formulários, gera resumo com IA e envia por e-mail.',
    tags: ['n8n', 'Google Sheets', 'OpenAI'],
    link: '#'
  }
];

export default projects;
```

---

# 📄 `README.md`
```md
# Portfólio – AI MVP Builder

Site minimalista para vender serviços de MVPs com IA, automações e deploy.

## 🚀 Como rodar localmente
```bash
npm install
npm run dev
```
Acesse http://localhost:3000

## ☁️ Deploy no Vercel (grátis)
1. Crie um repositório **público** no GitHub e envie estes arquivos.
2. Acesse Vercel → **New Project** → importe o repositório.
3. Deploy. Pronto! Seu link `*.vercel.app` estará ativo.

## ✏️ Personalização rápida
- Nome/branding: edite `app/layout.tsx` (title/description) e `components/Nav.tsx`.
- Serviços: edite `data/services.ts`.
- Projetos: edite `data/projects.ts` (coloque links reais quando tiver).
- Contato: troque o e-mail em `app/contact/page.tsx`.

## 🧩 Stack
- Next.js 14 (App Router) • TailwindCSS • Framer Motion • Lucide Icons

## 📎 Dica
Crie 2–3 projetos demo reais e publique links no Vercel. Isso aumenta a conversão no Fiverr/Upwork.
