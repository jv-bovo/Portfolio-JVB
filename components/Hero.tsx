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