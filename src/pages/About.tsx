import { Award, FileCheck2, GraduationCap, ShieldCheck } from 'lucide-react';
import CtaSection from '@/components/ui/CtaSection';
import { Container } from '@/components/ui/Container';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { stats } from '@/data/site';

const values = [
  {
    icon: Award,
    title: 'تخصص عمیق فنی',
    description:
      'عمق دانش در دواپس، ابر، پلتفرم و امنیت — نتیجهٔ سال‌ها کار عملیاتی و مهندسی در محیط‌های تولید.',
  },
  {
    icon: FileCheck2,
    title: 'شفافیت کامل',
    description:
      'هر تصمیم و تحویلی مستند و قابل بازبینی است؛ مشتری همیشه می‌داند چه چیزی، چرا و چگونه انجام می‌شود.',
  },
  {
    icon: ShieldCheck,
    title: 'مسئولیت‌پذیری',
    description:
      'در برابر نتایج کار خود پاسخگو هستیم و برای تعهدات، معیارهای قابل‌اندازه‌گیری تعریف می‌کنیم.',
  },
  {
    icon: GraduationCap,
    title: 'یادگیری مستمر',
    description:
      'همیشه در جریان جدیدترین روش‌ها و ابزارها هستیم و آن‌ها را در پروژه‌ها به‌صورت عملی به کار می‌گیریم.',
  },
];

export default function About() {
  return (
    <>
      <PageHero
        title="دربارهٔ پارس‌آپس"
        description="ما باور داریم زیرساخت، پشتوانهٔ خاموش هر محصولی است. مأموریت ما ساختن زیرساخت‌هایی است که سازمان‌ها بتوانند به آن‌ها تکیه کنند."
        crumbs={[{ label: 'دربارهٔ ما' }]}
      />

      <section className="bg-paper py-20 sm:py-24">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="معرفی"
                title="شریک فنی شما، نه فقط پیمانکار پروژه"
                description="پارس‌آپس مجموعه‌ای از مهندسان دواپس، ابر، پلتفرم و امنیت است که سازمان‌ها را در تحویل و نگهداری نرم‌افزار همراهی می‌کنند."
              />
              <Reveal delay={80}>
                <div className="mt-6 space-y-4">
                  <p className="text-base leading-9 text-slate-600">
                    تفاوت ما در نگاه به پروژه است: ما نتیجه را با عدد و سند اندازه
                    می‌گیریم و دانش را به‌صورت مستند و قابل‌انتقال به تیم شما
                    تحویل می‌دهیم. به همین دلیل، برای ما «اتمام کار» زمانی است که
                    تیم شما به‌تنهایی بتواند روی زیرساخت ساخته‌شده حرکت کند.
                  </p>
                  <p className="text-base leading-9 text-slate-600">
                    استقلال فنی در انتخاب ابزار، شفافیت در هر تصمیم و اولویت
                    دادن به امنیت و قابلیت اطمینان، اصولی است که در همهٔ
                    پروژه‌های ما ثابت می‌ماند.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Reveal key={value.title} delay={index * 80}>
                    <div className="h-full rounded-lg border border-slate-200/70 bg-white p-6 shadow-card">
                      <span className="grid size-11 place-items-center rounded-md bg-trust-50 text-trust-600">
                        <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
                      </span>
                      <h3 className="mt-4 text-base font-semibold text-ink-900">
                        {value.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-500">
                        {value.description}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-200/70 bg-white py-20">
        <Container>
          <SectionHeading
            eyebrow="عملکرد ما"
            title="اعدادی که پشت کار ما هستند"
            description="اعتماد سازمان‌ها برای ما نتیجهٔ عادت به اندازه‌گیری و پاسخگویی است؛ این‌ها برخی از معیارهای عملکرد ما هستند."
            align="center"
            className="mx-auto"
          />
          <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 80}>
                <div className="text-center">
                  <dd className="tnum text-4xl font-extrabold text-ink-900">
                    {stat.value}
                  </dd>
                  <dt className="mx-auto mt-2 max-w-[12rem] text-sm leading-7 text-slate-500">
                    {stat.label}
                  </dt>
                </div>
              </Reveal>
            ))}
          </dl>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
