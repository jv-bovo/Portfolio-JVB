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