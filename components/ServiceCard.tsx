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