import { Link } from 'react-router-dom';
import { cn } from '@/lib/cn';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link
      to="/"
      className={cn('group inline-flex items-center gap-2.5', className)}
      aria-label="پارس‌آپس — صفحهٔ اصلی"
    >
      <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-ink-900 ring-1 ring-white/10 transition ring-offset-2 ring-offset-transparent group-hover:ring-trust-300/50">
        <svg width="22" height="22" viewBox="0 0 64 64" fill="none" aria-hidden="true">
          <path
            d="M32 10L50.5 20.5V41.5L32 52L13.5 41.5V20.5L32 10Z"
            stroke="#93C5E8"
            strokeWidth="3.2"
            strokeLinejoin="round"
          />
          <path
            d="M24 36V28.5M32 38V26M40 34V29"
            stroke="#93C5E8"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <path
            d="M44 44.5a8 8 0 1 1-7.2-11.6"
            stroke="#3B82C4"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <path
            d="M35.5 30.5l1.3 3.2 3.4.2"
            stroke="#3B82C4"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-lg font-extrabold text-white">پارس‌آپس</span>
        <span className="mt-1 text-[10px] font-medium tracking-wide text-slate-400">
          زیرساخت امن و پایدار
        </span>
      </span>
    </Link>
  );
}
