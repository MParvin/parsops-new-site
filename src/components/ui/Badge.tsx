import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface BadgeProps {
  children: ReactNode;
  tone?: 'light' | 'dark';
  className?: string;
}

export function Badge({ children, tone = 'light', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium',
        tone === 'light'
          ? 'border-trust-200 bg-trust-50 text-trust-700'
          : 'border-white/15 bg-white/5 text-trust-200',
        className,
      )}
    >
      <span
        className={cn(
          'size-1.5 rounded-full',
          tone === 'light' ? 'bg-trust-500' : 'bg-trust-300',
        )}
        aria-hidden="true"
      />
      {children}
    </span>
  );
}
