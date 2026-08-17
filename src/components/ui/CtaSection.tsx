import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { site } from '@/data/site';

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-ink-900 bg-grid">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(50% 90% at 50% 100%, rgb(59 130 196 / 0.22), transparent 70%)',
        }}
        aria-hidden="true"
      />
      <Container className="relative py-20 text-center sm:py-24">
        <p className="mb-4 text-xs font-semibold tracking-wide text-trust-300">
          شروعی مطمئن برای زیرساخت شما
        </p>
        <h2 className="mx-auto max-w-2xl text-2xl font-bold leading-snug text-white sm:text-3xl lg:text-4xl">
          آماده‌اید زیرساخت خود را به سطح بعدی ببرید؟
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-slate-300">
          در یک جلسهٔ رایگان دربارهٔ وضعیت فعلی، چالش‌ها و مسیر پیشنهادی شما گفتگو
          می‌کنیم؛ بدون هزینه و بدون هیچ تعهدی.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button to="/contact" variant="inverse" size="lg">
            درخواست مشاورهٔ رایگان
          </Button>
          <Button
            href={`tel:${site.phone.replace(/\s/g, '')}`}
            variant="outline"
            size="lg"
            className="border-white/20 text-white hover:border-white/40 hover:bg-white/5"
          >
            <Phone className="size-4" aria-hidden="true" />
            {site.phone}
          </Button>
        </div>
      </Container>
    </section>
  );
}
