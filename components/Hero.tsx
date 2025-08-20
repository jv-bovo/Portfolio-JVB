'use client';
import { motion } from 'framer-motion';
import { Sparkles, Rocket, Zap, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[80vh] flex items-center">
      <motion.div 
        initial={{opacity:0, y:20}} 
        animate={{opacity:1, y:0}} 
        transition={{duration:0.8}} 
        className="text-center space-y-8 w-full"
      >
        <motion.div
          initial={{opacity:0, scale:0.9}}
          animate={{opacity:1, scale:1}}
          transition={{delay:0.2, duration:0.6}}
        >
          <span className="badge inline-flex items-center gap-2 text-sm">
            <Sparkles size={16}/> Especialista em IA & Automação
          </span>
        </motion.div>

        <motion.h1 
          initial={{opacity:0, y:20}}
          animate={{opacity:1, y:0}}
          transition={{delay:0.3, duration:0.8}}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          Transformo <span className="gradient-text">ideias</span> em{' '}
          <span className="gradient-text">soluções</span> digitais
        </motion.h1>

        <motion.p 
          initial={{opacity:0, y:20}}
          animate={{opacity:1, y:0}}
          transition={{delay:0.4, duration:0.8}}
          className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed"
        >
          Desenvolvedor Full Stack especializado em IA. Crio MVPs funcionais, 
          automações inteligentes e chatbots conversacionais que geram valor real para seu negócio.
        </motion.p>

        <motion.div 
          initial={{opacity:0, y:20}}
          animate={{opacity:1, y:0}}
          transition={{delay:0.5, duration:0.8}}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <Link href="/contact" className="btn text-lg">
            <Rocket size={20}/> Começar Projeto
          </Link>
          <Link href="/projects" className="btn-secondary text-lg">
            <Zap size={20}/> Ver Projetos
          </Link>
          <a 
            href="https://wa.me/5511999999999?text=Olá! Vi seu portfólio e gostaria de conversar sobre um projeto." 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary text-lg"
          >
            <MessageCircle size={20}/> WhatsApp
          </a>
        </motion.div>

        <motion.div
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:0.8, duration:1}}
          className="flex items-center justify-center gap-8 text-sm text-neutral-400 mt-12"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Disponível para projetos
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            Resposta em 24h
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            Garantia de qualidade
          </div>
        </motion.div>
      </motion.div>

      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-20" aria-hidden>
        <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full blur-3xl animate-float" 
             style={{background:'radial-gradient(circle,#3b82f633,transparent 60%)'}} />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full blur-3xl animate-float" 
             style={{animationDelay:'1.5s', background:'radial-gradient(circle,#0ea5e933,transparent 60%)'}} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl animate-float" 
             style={{animationDelay:'3s', background:'radial-gradient(circle,#1e293b33,transparent 60%)'}} />
      </div>
    </section>
  );
} 