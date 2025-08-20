import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

type Service = {
  title: string;
  description: string;
  bullets: string[];
  cta?: string;
  link?: string;
};

export default function ServiceCard({ title, description, bullets, cta = 'Solicitar Orçamento', link = '/contact' }: Service) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="card group cursor-pointer"
    >
      <div className="space-y-4">
        <h3 className="text-xl font-semibold group-hover:text-secondary transition-colors">{title}</h3>
        <p className="text-neutral-300 leading-relaxed">{description}</p>
        
        <ul className="space-y-2">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-neutral-300">
              <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        
        <a 
          href={link} 
          className="inline-flex items-center gap-2 text-secondary hover:text-accent transition-colors font-medium group/link"
        >
          {cta}
          <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform"/>
        </a>
      </div>
    </motion.div>
  );
} 