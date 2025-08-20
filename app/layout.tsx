import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Victor Bovo – Desenvolvedor Full Stack & Especialista em IA',
  description: 'Transformo ideias em soluções digitais com IA. MVPs rápidos, automações inteligentes e chatbots conversacionais.'
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