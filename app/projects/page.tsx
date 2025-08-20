import ProjectCard from '@/components/ProjectCard';
import projects from '@/data/projects';

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Projetos</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </div>
  );
} 