import ServiceCard from '@/components/ServiceCard';
import services from '@/data/services';

export default function ServicesPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Serviços</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {services.map((s) => (
          <ServiceCard key={s.title} {...s} />
        ))}
      </div>
    </div>
  );
} 