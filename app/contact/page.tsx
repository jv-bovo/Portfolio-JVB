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