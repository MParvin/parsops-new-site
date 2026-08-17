import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import type { Service } from '@/data/services';
import { cn } from '@/lib/cn';

interface ServiceCardProps {
  service: Service;
  index?: number;
  className?: string;
}

export function ServiceCard({ service, index, className }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <Link
      to={`/services/${service.slug}`}
      className={cn(
        'group relative flex flex-col rounded-lg border border-slate-200/70 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-trust-300 hover:shadow-lift',
        className,
      )}
    >
      <div className="mb-5 flex items-center justify-between">
        <span className="grid size-11 place-items-center rounded-md bg-trust-50 text-trust-600 transition-colors duration-300 group-hover:bg-trust-500 group-hover:text-white">
          <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
        </span>
        {index !== undefined && (
          <span className="tnum text-xs font-bold text-slate-300">
            {String(index + 1).padStart(2, '0')}
          </span>
        )}
      </div>
      <h3 className="text-base font-semibold text-ink-900">{service.title}</h3>
      <p className="mt-2 text-sm leading-7 text-slate-500">{service.tagline}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 pt-1 text-sm font-semibold text-trust-600">
        بیشتر بدانید
        <ArrowLeft
          className="size-4 transition-transform duration-300 group-hover:-translate-x-1"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}
