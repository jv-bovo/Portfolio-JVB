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