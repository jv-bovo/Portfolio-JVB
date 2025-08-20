'use client';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';
import services from '@/data/services';
import projects from '@/data/projects';

export default function Home() {
  return (
    <div className="space-y-12">
      <Hero />

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Serviços</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {services.slice(0,3).map((s) => (
            <motion.div key={s.title} initial={{opacity:0, y:10}} animate={{opacity:1, y:0}}>
              <ServiceCard {...s} />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Projetos</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {projects.slice(0,3).map((p) => (
            <motion.div key={p.title} initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}}>
              <ProjectCard {...p} />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
} 