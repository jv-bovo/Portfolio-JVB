'use client';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';
import services from '@/data/services';
import projects from '@/data/projects';

export default function Home() {
  return (
    <div className="space-y-16">
      <Hero />

      <motion.section 
        initial={{opacity:0, y:20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.6}}
        viewport={{once: true}}
        className="space-y-8"
      >
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Serviços Especializados</h2>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            Soluções completas em desenvolvimento e automação com IA para impulsionar seu negócio
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0,6).map((service, index) => (
            <motion.div 
              key={service.title} 
              initial={{opacity:0, y:20}}
              whileInView={{opacity:1, y:0}}
              transition={{duration:0.6, delay: index * 0.1}}
              viewport={{once: true}}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section 
        initial={{opacity:0, y:20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.6}}
        viewport={{once: true}}
        className="space-y-8"
      >
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Projetos em Destaque</h2>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi usando as mais modernas tecnologias
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0,6).map((project, index) => (
            <motion.div 
              key={project.title} 
              initial={{opacity:0, y:20}}
              whileInView={{opacity:1, y:0}}
              transition={{duration:0.6, delay: index * 0.1}}
              viewport={{once: true}}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
} 