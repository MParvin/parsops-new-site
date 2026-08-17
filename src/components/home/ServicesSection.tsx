import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { services } from '@/data/services';

export default function ServicesSection() {
  return (
    <section className="bg-paper py-20 sm:py-24">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="خدمات ما"
            title="هر چیزی که برای تحویل و نگهداری نرم‌افزار نیاز دارید"
            description="از اتوماسیون و زیرساخت تا امنیت و قابلیت اطمینان — مجموعه‌ای یکپارچه از خدمات مهندسی، قابل ترکیب و متناسب با بلوغ سازمان شما."
          />
          <Reveal delay={120}>
            <Button to="/services" variant="outline" size="md" className="shrink-0">
              همهٔ خدمات
              <ArrowLeft className="size-4" aria-hidden="true" />
            </Button>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={(index % 3) * 90}>
              <ServiceCard service={service} index={index} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
