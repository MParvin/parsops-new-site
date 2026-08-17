import { Check } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

const features = [
  {
    title: 'بی‌طرفی و استقلال فنی',
    description:
      'پیشنهاد ابزار و معماری بر اساس نیاز شما، نه سبد محصول یک فروشندهٔ خاص.',
  },
  {
    title: 'شفافیت و تحویل مستند',
    description:
      'هر کار، تصمیم و تغییر مستند، قابل ممیزی و قابل تحویل است — نه دانش پراکندهٔ فردی.',
  },
  {
    title: 'معیارهای قابل‌اندازه‌گیری',
    description:
      'SLO، متریک و گزارش‌های دوره‌ای؛ اعتماد بر پایهٔ عدد ساخته می‌شود، نه ادعا.',
  },
  {
    title: 'امنیت در اولویت',
    description:
      'امنیت از روز اول در معماری و فرایند گنجانده می‌شود؛ نه به‌عنوان مرهمی در پایان کار.',
  },
];

const checklist = [
  'مستند معماری و نمودارهای زیرساخت',
  'زیرساخت به‌عنوان کد و مخازن نسخه‌بندی‌شده',
  'داشبوردهای SLO و هشدارهای عملیاتی',
  'راهنمای بهره‌برداری و انتقال دانش',
];

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-ink-900 bg-grid">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(50% 70% at 8% 90%, rgb(59 130 196 / 0.16), transparent 70%)',
        }}
        aria-hidden="true"
      />
      <Container className="relative grid items-center gap-14 py-20 sm:py-24 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="چرا پارس‌آپس"
            title="اعتمادی که بر پایهٔ شفافیت ساخته می‌شود"
            description="ما اعتقاد داریم ارزش یک شریک فنی در قابلیت اطمینان، مستند بودن و نتیجهٔ قابل‌سنجش آن است؛ نه فقط در اجرای پروژه."
            tone="dark"
          />

          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {features.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 80}>
                <li>
                  <h3 className="text-base font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    {feature.description}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={160}>
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div
              className="absolute -inset-5 -z-10 rounded-3xl bg-trust-500/10 blur-2xl"
              aria-hidden="true"
            />
            <div className="rounded-xl border border-white/10 bg-ink-800/70 p-7 shadow-lift backdrop-blur">
              <p className="text-xs font-semibold tracking-wide text-trust-300">
                نمونهٔ تحویل‌دادنی‌های هر پروژه
              </p>
              <h3 className="mt-2 text-lg font-bold text-white">
                بستهٔ تحویل استاندارد
              </h3>
              <ul className="mt-6 space-y-4">
                {checklist.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-trust-500/15">
                      <Check className="size-3 text-trust-300" aria-hidden="true" />
                    </span>
                    <span className="text-sm leading-7 text-slate-200">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
