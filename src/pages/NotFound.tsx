import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-ink-900 bg-grid">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 80% at 50% 0%, rgb(59 130 196 / 0.18), transparent 70%)',
        }}
        aria-hidden="true"
      />
      <Container className="relative py-28 text-center sm:py-36">
        <p className="tnum text-7xl font-extrabold text-white sm:text-8xl">404</p>
        <h1 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
          این صفحه پیدا نشد
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-slate-400">
          ممکن است آدرس اشتباه باشد یا صفحه حذف شده باشد. از صفحهٔ اصلی می‌توانید
          به بقیهٔ بخش‌های سایت بروید.
        </p>
        <Button to="/" variant="inverse" size="lg" className="mt-9">
          <ArrowLeft className="size-4" aria-hidden="true" />
          بازگشت به خانه
        </Button>
      </Container>
    </section>
  );
}
