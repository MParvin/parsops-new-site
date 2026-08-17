import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { stats, techKeywords } from '@/data/site';

export default function TrustBar() {
  return (
    <section className="border-b border-slate-200/70 bg-white">
      <Container className="py-10">
        <Reveal>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <span className="text-xs font-semibold text-slate-400">
              حوزه‌های تخصصی
            </span>
            <ul className="flex flex-wrap items-center gap-x-2 gap-y-2" aria-label="حوزه‌های تخصصی">
              {techKeywords.map((keyword) => (
                <li
                  key={keyword}
                  className="tnum rounded-full border border-slate-200 bg-paper px-3 py-1 text-xs font-medium text-slate-500"
                >
                  {keyword}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 80}>
              <div className="border-s border-trust-500/30 ps-5">
                <dt className="order-2 mt-1.5 text-sm text-slate-500">
                  {stat.label}
                </dt>
                <dd className="tnum text-3xl font-extrabold text-ink-900 lg:text-4xl">
                  {stat.value}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
