import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';

const statusRows = [
  { name: 'پایپلاین CI/CD', uptime: '99.98%' },
  { name: 'پلتفرم کوبرنیتیز', uptime: '99.96%' },
  { name: 'زیرساخت ابری', uptime: '99.99%' },
  { name: 'مانیتورینگ و هشدار', uptime: '99.97%' },
];

const weekBars = [42, 58, 50, 74, 66, 88, 82];

function StatusConsole() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div
        className="absolute -inset-6 -z-10 rounded-3xl bg-trust-500/15 blur-2xl"
        aria-hidden="true"
      />
      <div className="rounded-xl border border-white/10 bg-ink-800/70 p-6 shadow-lift backdrop-blur">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-sm font-semibold text-white">وضعیت سرویس‌ها</h3>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[11px] font-medium text-emerald-300">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex size-1.5 rounded-full bg-emerald-400" />
            </span>
            همه سیستم‌ها عملیاتی
          </span>
        </div>

        <ul className="mt-5 divide-y divide-white/5">
          {statusRows.map((row) => (
            <li
              key={row.name}
              className="flex items-center justify-between gap-3 py-3"
            >
              <span className="flex items-center gap-2.5 text-sm text-slate-200">
                <CheckCircle2
                  className="size-4 text-emerald-400"
                  aria-hidden="true"
                />
                {row.name}
              </span>
              <span className="tnum text-sm font-semibold text-trust-300">
                {row.uptime}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-4 border-t border-white/10 pt-5">
          <div className="flex items-end justify-between gap-2" aria-hidden="true">
            {weekBars.map((height, index) => (
              <div
                key={index}
                className="w-full rounded-sm bg-trust-500/30"
                style={{ height: `${height}%`, minHeight: '1.25rem' }}
              />
            ))}
          </div>
          <p className="tnum mt-3 text-xs text-slate-400">
            دسترس‌پذیری این هفته: <span className="font-bold text-emerald-300">99.9٪</span>
          </p>
        </div>
      </div>
    </div>
  );
}

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
      <Container className="relative grid items-center gap-14 py-20 lg:grid-cols-2 lg:gap-16 lg:py-28">
        <div>
          <Reveal>
            <Badge tone="dark">پارس‌آپس — شریک مهندسی زیرساخت شما</Badge>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.3] text-white sm:text-5xl lg:text-6xl lg:leading-[1.25]">
              زیرساختی که می‌شود به آن اعتماد کرد
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg sm:leading-9">
              پارس‌آپس خدمات حرفه‌ای دواپس، طراحی زیرساخت ابری و داخلی، امنیت،
              مهندسی پلتفرم و قابلیت اطمینان را با رویکردی شفاف و قابل‌اندازه‌گیری
              به سازمان‌ها ارائه می‌دهد.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button to="/contact" variant="inverse" size="lg">
                شروع مشاورهٔ رایگان
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
              بدون هزینه، بدون تعهد — پاسخ در کمتر از 24 ساعت.
            </p>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <StatusConsole />
        </Reveal>
      </Container>
    </section>
  );
}
