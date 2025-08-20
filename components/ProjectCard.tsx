import { ExternalLink, ArrowUpRight } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
};

export default function ProjectCard({ title, description, tags, link }: Project) {
  return (
    <div className="card group cursor-pointer hover:-translate-y-1 transition-all duration-300">
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-semibold group-hover:text-secondary transition-colors">{title}</h3>
          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-secondary transition-colors p-1 rounded-lg hover:bg-neutral-800/50"
              aria-label="ver projeto"
            >
              <ArrowUpRight size={18}/>
            </a>
          )}
        </div>
        
        <p className="text-neutral-300 leading-relaxed">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="badge text-xs">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
} 