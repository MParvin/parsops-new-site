import { Map, Rocket, Search, TrendingUp } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

const steps = [
  {
    icon: Search,
    title: 'کشف و ارزیابی',
    description:
      'شناخت عمیق سیستم، تیم و اهداف شما؛ قبل از هر تصمیمی.',
  },
  {
    icon: Map,
    title: 'طراحی نقشهٔ راه',
    description:
      'معماری پیشنهادی و برنامهٔ اجرایی مرحله‌به‌مرحله با اولویت‌بندی.',
  },
  {
    icon: Rocket,
    title: 'اجرا و پیاده‌سازی',
    description:
      'استقرار، آموزش ضمن کار و تحویل مستند؛ با کنترل کیفیت مداوم.',
  },
  {
    icon: TrendingUp,
    title: 'اندازه‌گیری و بهبود',
    description:
      'پایش، گزارش‌های دوره‌ای و بهبود مستمر قابلیت اطمینان و هزینه.',
  },
];

export default function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-paper bg-grid-soft py-20 sm:py-24">
      <Container className="relative">
        <SectionHeading
          eyebrow="رویکرد ما"
          title="مسیری روشن، از شناخت تا بهبود مستمر"
          description="فرایند کاری مشخص و مرحله‌به‌مرحله؛ در هر گام، نتیجه قابل‌مشاهده و مستند تحویل می‌دهیم."
          align="center"
          className="mx-auto"
        />

        <ol className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div
            className="pointer-events-none absolute inset-x-6 top-6 hidden h-px bg-gradient-to-l from-trust-200 via-trust-400/50 to-trust-200 lg:block"
            aria-hidden="true"
          />
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.title} delay={index * 90}>
                <li className="relative flex flex-col items-center text-center">
                  <span className="relative z-10 grid size-12 place-items-center rounded-full border border-trust-200 bg-white text-trust-600 shadow-card">
                    <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <span className="tnum mt-4 text-xs font-bold tracking-wider text-slate-400">
                    مرحلهٔ {index + 1}
                  </span>
                  <h3 className="mt-2 text-base font-semibold text-ink-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-[16rem] text-sm leading-7 text-slate-500">
                    {step.description}
                  </p>
                </li>
              </Reveal>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
