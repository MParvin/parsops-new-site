import { ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { site } from '@/data/site';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-900 bg-grid">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(55% 75% at 85% 10%, rgb(59 130 196 / 0.2), transparent 70%)',
        }}
        aria-hidden="true"
      />
      <Container className="relative py-20 lg:py-28">
        <div className="max-w-3xl">
          <Reveal>
            <Badge tone="dark">پارس‌آپس — {site.tagline}</Badge>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.3] text-white sm:text-5xl lg:text-6xl lg:leading-[1.25]">
              بیش از ۱۸ سال تخصص در حوزه زیرساخت
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg sm:leading-9">
              ما به سازمان‌ها کمک می‌کنیم زیرساخت و دواپس خود را درست بسازند و
              نگهداری کنند. کارمان شفاف است و نتیجه آن را می‌توان اندازه گرفت.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href={site.surveyUrl} variant="inverse" size="lg">
                مشاورهٔ رایگان
              </Button>
              <Button
                to="/services"
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:border-white/40 hover:bg-white/5"
              >
                مشاهدهٔ خدمات
                <ArrowLeft className="size-4" aria-hidden="true" />
              </Button>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <p className="mt-6 text-xs text-slate-400">
              مشاوره رایگان است و تعهدی برای شما ایجاد نمی‌کند. تا ۲۴ ساعت پاسخ
              می‌دهیم.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
