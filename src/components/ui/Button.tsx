import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'accent' | 'outline' | 'ghost' | 'inverse';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  variant?: Variant;
  size?: Size;
  className?: string;
  ariaLabel?: string;
  disabled?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary: 'bg-ink-900 text-white hover:bg-ink-700',
  accent: 'bg-trust-500 text-white hover:bg-trust-400',
  outline:
    'border border-ink-900/15 text-ink-900 hover:border-ink-900/30 hover:bg-ink-900/5',
  ghost: 'text-ink-900 hover:bg-ink-900/5',
  inverse: 'bg-white text-ink-900 hover:bg-trust-100',
};

const sizeClasses: Record<Size, string> = {
  sm: 'gap-1.5 rounded-md px-3.5 py-2 text-xs',
  md: 'gap-2 rounded-md px-5 py-2.5 text-sm',
  lg: 'gap-2 rounded-md px-6 py-3 text-sm',
};

export function Button({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  className,
  ariaLabel,
  disabled,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center font-semibold transition-all duration-200 active:scale-[0.98]',
    disabled && 'pointer-events-none opacity-60',
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
