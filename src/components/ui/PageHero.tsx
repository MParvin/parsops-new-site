import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/cn';

interface Crumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  description?: string;
  crumbs?: Crumb[];
  className?: string;
}

export function PageHero({ title, description, crumbs, className }: PageHeroProps) {
  const trail: Crumb[] = [
    { label: 'خانه', href: '/' },
    ...(crumbs ?? []),
  ];

  return (
    <section
      className={cn(
        'relative overflow-hidden border-b border-white/10 bg-ink-900 bg-grid',
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 80% at 50% 0%, rgb(59 130 196 / 0.18), transparent 70%)',
        }}
        aria-hidden="true"
      />
      <Container className="relative py-16 sm:py-20">
        <nav aria-label="مسیر صفحه" className="mb-6">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-slate-400">
            {trail.map((crumb, index) => {
              const isLast = index === trail.length - 1;
              return (
                <Fragment key={crumb.label}>
                  {index > 0 && (
                    <li aria-hidden="true">
                      <ChevronLeft className="size-3.5 text-slate-500" />
                    </li>
                  )}
                  <li>
                    {isLast || !crumb.href ? (
                      <span
                        aria-current={isLast ? 'page' : undefined}
                        className={isLast ? 'text-trust-300' : undefined}
                      >
                        {crumb.label}
                      </span>
                    ) : (
                      <Link to={crumb.href} className="transition-colors hover:text-white">
                        {crumb.label}
                      </Link>
                    )}
                  </li>
                </Fragment>
              );
            })}
          </ol>
        </nav>
        <h1 className="max-w-3xl text-3xl font-extrabold leading-snug text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
