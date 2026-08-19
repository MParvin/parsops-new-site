import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import type { ReactNode } from 'react';
import CtaSection from '@/components/ui/CtaSection';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { getServiceBySlug, services } from '@/data/services';
import { site } from '@/data/site';

function withBold(text: string, words?: string[]): ReactNode {
  const word = words?.[0];
  if (!word) return text;

  const index = text.indexOf(word);
  if (index < 0) return text;

  return (
    <>
      {text.slice(0, index)}
      <strong className="font-bold text-ink-900">{word}</strong>
      {text.slice(index + word.length)}
    </>
  );
}

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return (
      <Container className="py-24 text-center">
        <h1 className="text-2xl font-bold text-ink-900">خدمت موردنظر پیدا نشد</h1>
        <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-500">
          ممکن است آدرس اشتباه باشد یا این خدمت حذف شده باشد. از فهرست خدمات
          می‌توانید به بقیهٔ خدمات دسترسی داشته باشید.
        </p>
        <Link
          to="/services"
          className="mt-8 inline-flex items-center gap-2 font-semibold text-trust-600 hover:text-trust-700"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          بازگشت به خدمات
        </Link>
      </Container>
    );
  }

  const Icon = service.icon;
  const others = services.filter((item) => item.slug !== service.slug).slice(0, 4);

  return (
    <>
      <PageHero
        title={service.title}
        description={service.tagline}
        crumbs={[{ label: 'خدمات', href: '/services' }, { label: service.title }]}
      />

      <section className="bg-paper py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            <div className="lg:col-span-2">
              <Reveal>
                <div className="flex items-center gap-4">
                  <span className="grid size-14 shrink-0 place-items-center rounded-lg bg-trust-50 text-trust-600">
                    <Icon className="size-7" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-trust-600">
                      {service.englishTitle}
                    </p>
                    <h2 className="mt-1 text-lg font-bold text-ink-900">
                      دربارهٔ این خدمت
                    </h2>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={80}>
                <p className="mt-6 text-base leading-9 text-slate-600">
                  {withBold(service.description, service.boldInDescription)}
                </p>
              </Reveal>

              <Reveal delay={120}>
                <div className="mt-12">
                  <SectionHeading
                    eyebrow="قابلیت‌های کلیدی"
                    title="چه کارهایی برای شما انجام می‌دهیم"
                  />
                  <ul className="mt-7 grid gap-4 sm:grid-cols-2">
                    {service.capabilities.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 rounded-md border border-slate-200/70 bg-white p-4 shadow-card"
                      >
                        <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-trust-50">
                          <Check
                            className="size-3 text-trust-600"
                            aria-hidden="true"
                          />
                        </span>
                        <span className="text-sm leading-7 text-slate-600">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

            <aside>
              <Reveal delay={100}>
                <div className="sticky top-24 rounded-lg border border-slate-200/70 bg-white p-6 shadow-card">
                  <h2 className="text-sm font-bold text-ink-900">
                    خروجی‌ها و تحویل‌دادنی‌ها
                  </h2>
                  <ul className="mt-5 space-y-3.5">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1 size-1.5 shrink-0 rounded-full bg-trust-500" aria-hidden="true" />
                        <span className="text-sm leading-7 text-slate-600">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button href={site.surveyUrl} className="mt-6 w-full" size="lg">
                    درخواست مشاورهٔ رایگان
                  </Button>
                </div>
              </Reveal>
            </aside>
          </div>

          <Reveal delay={80}>
            <div className="mt-20 border-t border-slate-200/70 pt-12">
              <h2 className="text-xl font-bold text-ink-900">سایر خدمات</h2>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {others.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/services/${item.slug}`}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:border-trust-300 hover:text-trust-600"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
