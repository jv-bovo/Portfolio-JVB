export default function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-800/80">
      <div className="container py-8 text-sm text-neutral-400 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Victor Bovo – Desenvolvedor Full Stack & Especialista em IA. Todos os direitos reservados.</p>
        <div className="flex items-center gap-4">
          <span className="opacity-80">Disponível para projetos globais</span>
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="opacity-80">Remote only</span>
        </div>
      </div>
    </footer>
  );
} 