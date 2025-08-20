'use client';
import { useState } from 'react';
import { Mail, MessageCircle, Clock, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  function mailto() {
    const subject = encodeURIComponent('Projeto com Victor Bovo - Desenvolvedor Full Stack & IA');
    const body = encodeURIComponent(`Nome: ${name}\nEmail: ${email}\nMensagem: ${msg}`);
    window.location.href = `mailto:joaov.bovo@outlook.com?subject=${subject}&body=${body}`;
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold">Vamos Conversar</h1>
        <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
          Me conte sobre seu projeto e eu respondo com uma proposta personalizada em 24h.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6 animate-slide-up">
          <div className="card space-y-4">
            <h2 className="text-2xl font-semibold">Informações do Projeto</h2>
            <input 
              className="w-full p-4 rounded-xl bg-neutral-900/50 border border-neutral-700 focus:border-secondary focus:outline-none transition-colors" 
              placeholder="Seu nome" 
              value={name} 
              onChange={e=>setName(e.target.value)} 
            />
            <input 
              className="w-full p-4 rounded-xl bg-neutral-900/50 border border-neutral-700 focus:border-secondary focus:outline-none transition-colors" 
              placeholder="Seu e-mail" 
              value={email} 
              onChange={e=>setEmail(e.target.value)} 
            />
            <textarea 
              className="w-full p-4 rounded-xl bg-neutral-900/50 border border-neutral-700 focus:border-secondary focus:outline-none transition-colors resize-none" 
              rows={6} 
              placeholder="Descreva seu projeto, objetivos e timeline desejado..." 
              value={msg} 
              onChange={e=>setMsg(e.target.value)} 
            />
            <button className="btn w-full text-lg" onClick={mailto}>
              <Mail size={20}/> Enviar Proposta
            </button>
          </div>
        </div>

        <div className="space-y-6 animate-slide-up" style={{animationDelay: '0.2s'}}>
          <div className="card space-y-6">
            <h2 className="text-2xl font-semibold">Outras Formas de Contato</h2>
            
            <div className="space-y-4">
              <a 
                href="https://wa.me/5511999999999?text=Olá! Vi seu portfólio e gostaria de conversar sobre um projeto." 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-neutral-900/50 border border-neutral-700 hover:border-secondary transition-colors"
              >
                <MessageCircle size={24} className="text-green-500"/>
                <div>
                  <div className="font-medium">WhatsApp</div>
                  <div className="text-sm text-neutral-400">Resposta em minutos</div>
                </div>
              </a>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-neutral-900/50 border border-neutral-700">
                <Mail size={24} className="text-blue-500"/>
                <div>
                  <div className="font-medium">E-mail</div>
                  <div className="text-sm text-neutral-400">joaov.bovo@outlook.com</div>
                </div>
              </div>
            </div>
          </div>

          <div className="card space-y-4">
            <h3 className="text-lg font-semibold">Por que trabalhar comigo?</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle size={20} className="text-green-500"/>
                <span className="text-sm">Especialista em IA e automação</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle size={20} className="text-green-500"/>
                <span className="text-sm">Desenvolvimento rápido e eficiente</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle size={20} className="text-green-500"/>
                <span className="text-sm">Suporte contínuo e documentação</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle size={20} className="text-green-500"/>
                <span className="text-sm">Garantia de qualidade</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-xl bg-neutral-900/50 border border-neutral-700">
            <Clock size={20} className="text-yellow-500"/>
            <div className="text-sm">
              <div className="font-medium">Resposta em 24h</div>
              <div className="text-neutral-400">Proposta personalizada</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 