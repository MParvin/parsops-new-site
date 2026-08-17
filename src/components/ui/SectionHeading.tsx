import { cn } from '@/lib/cn';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'start' | 'center';
  tone?: 'light' | 'dark';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'start',
  tone = 'light',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            'mb-3 inline-flex items-center gap-2 text-xs font-semibold tracking-wide',
            tone === 'light' ? 'text-trust-600' : 'text-trust-300',
          )}
        >
          <span
            className={cn(
              'h-px w-6',
              tone === 'light' ? 'bg-trust-500' : 'bg-trust-300',
            )}
            aria-hidden="true"
          />
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          'text-2xl font-bold leading-snug sm:text-3xl lg:text-4xl',
          tone === 'light' ? 'text-ink-900' : 'text-white',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-base leading-8',
            tone === 'light' ? 'text-slate-500' : 'text-slate-300',
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
