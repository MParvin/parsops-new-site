import { ArrowLeft } from 'lucide-react';
import CtaSection from '@/components/ui/CtaSection';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { services } from '@/data/services';

export default function Services() {
  return (
    <>
      <PageHero
        title="خدمات ما"
        description="از اتوماسیون و زیرساخت تا امنیت و قابلیت اطمینان؛ مجموعه‌ای یکپارچه و قابل ترکیب از خدمات مهندسی، متناسب با بلوغ و نیاز سازمان شما."
        crumbs={[{ label: 'خدمات' }]}
      />

      <section className="bg-paper py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="دسته‌بندی خدمات"
            title="کاتالوگ کامل خدمات پارس‌آپس"
            description="هر خدمت را به‌صورت مستقل یا به‌عنوان بخشی از یک تحول کامل انتخاب کنید. روی هر خدمت کلیک کنید تا جزئیات، قابلیت‌ها و خروجی‌ها را ببینید."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={(index % 3) * 90}>
                <ServiceCard service={service} index={index} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-14 flex flex-col items-center gap-3 rounded-lg border border-slate-200/70 bg-white p-8 text-center shadow-card sm:flex-row sm:justify-between sm:text-start">
              <div>
                <h2 className="text-lg font-bold text-ink-900">
                  مطمئن نیستید از کجا شروع کنید؟
                </h2>
                <p className="mt-1.5 text-sm leading-7 text-slate-500">
                  با یک ارزیابی رایگان وضعیت فعلی و بلوغ دواپس خود را می‌سنجیم و مسیر درست را پیشنهاد می‌دهیم.
                </p>
              </div>
              <Button to="/contact" className="shrink-0">
                ارزیابی رایگان
                <ArrowLeft className="size-4" aria-hidden="true" />
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
