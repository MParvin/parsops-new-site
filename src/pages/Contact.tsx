import { Clock, Headset, Mail, MapPin, Phone } from 'lucide-react';
import CtaSection from '@/components/ui/CtaSection';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { TelegramIcon, WhatsAppIcon } from '@/components/ui/BrandIcons';
import { site } from '@/data/site';

const contactCards = [
  { label: 'ایمیل', value: site.email, Icon: Mail },
  { label: 'تلفن', value: site.phone, Icon: Phone },
  { label: 'نشانی', value: site.location, Icon: MapPin },
  { label: 'مشاوره', value: site.consultingHours, Icon: Clock },
  { label: 'پشتیبانی فنی', value: site.supportHours, Icon: Headset },
];

export default function Contact() {
  return (
    <>
      <PageHero
        title="تماس با ما"
        description="برای درخواست مشاوره فرم کوتاه را پر کنید یا مستقیم از واتساپ و تلگرام با ما گفتگو کنید."
        crumbs={[{ label: 'تماس با ما' }]}
      />

      <section className="bg-paper py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
            <Reveal className="lg:col-span-3">
              <div className="rounded-lg border border-slate-200/70 bg-white p-7 shadow-card sm:p-9">
                <h2 className="text-xl font-bold text-ink-900">درخواست مشاوره</h2>
                <p className="mt-3 max-w-lg text-sm leading-7 text-slate-500">
                  فرم کوتاه را پر کنید تا با شما تماس بگیریم. اگر سؤال فوری دارید، مستقیم در واتساپ یا تلگرام پیام بدهید.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href={site.surveyUrl} variant="primary" size="lg">
                    تکمیل فرم مشاوره
                  </Button>
                  <Button href={site.whatsappUrl} variant="outline" size="lg">
                    <WhatsAppIcon className="size-4" />
                    واتساپ
                  </Button>
                  <Button href={site.telegramUrl} variant="outline" size="lg">
                    <TelegramIcon className="size-4" />
                    تلگرام
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-2">
              <div className="flex h-full flex-col gap-5">
                {contactCards.map(({ label, value, Icon }) => (
                  <div
                    key={label}
                    className="flex items-start gap-4 rounded-lg border border-slate-200/70 bg-white p-5 shadow-card"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-md bg-trust-50 text-trust-600">
                      <Icon className="size-4.5" aria-hidden="true" />
                    </span>
                    <div>
                      <h2 className="text-sm font-semibold text-ink-900">{label}</h2>
                      <p className="mt-1 text-sm text-slate-500" dir="auto">
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
