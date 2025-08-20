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