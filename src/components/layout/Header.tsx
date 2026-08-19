import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Logo } from '@/components/ui/Logo';
import { navItems, site } from '@/data/site';
import { useScrolled } from '@/hooks/useScroll';
import { cn } from '@/lib/cn';

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <>
      {navItems.map((item) => (
        <NavLink
          key={item.href}
          to={item.href}
          end={item.href === '/'}
          onClick={onNavigate}
          className={({ isActive }) =>
            cn(
              'rounded-md px-3.5 py-2 text-sm font-medium transition-colors hover:text-white',
              isActive ? 'bg-white/[0.06] text-white' : 'text-slate-300',
            )
          }
        >
          {item.label}
        </NavLink>
      ))}
    </>
  );
}

export default function Header() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b border-white/10 bg-ink-900/90 backdrop-blur transition-shadow',
        scrolled && 'shadow-lg shadow-ink-950/20',
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <Logo />

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="ناوبری اصلی"
        >
          <NavLinks />
        </nav>

        <div className="hidden lg:block">
          <Button href={site.surveyUrl} size="sm">
            مشاورهٔ رایگان
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'بستن منو' : 'باز کردن منو'}
          className="grid size-10 place-items-center rounded-md text-slate-300 transition-colors hover:bg-white/5 hover:text-white lg:hidden"
        >
          {open ? (
            <X className="size-5" aria-hidden="true" />
          ) : (
            <Menu className="size-5" aria-hidden="true" />
          )}
        </button>
      </Container>

      {open && (
        <div id="mobile-menu" className="border-t border-white/10 bg-ink-900 lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            <NavLinks onNavigate={() => setOpen(false)} />
            <div className="mt-3 border-t border-white/10 pt-4">
              <Button
                href={site.surveyUrl}
                className="w-full"
                onClick={() => setOpen(false)}
              >
                مشاورهٔ رایگان
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
