import { Link } from 'react-router-dom';
import { Headset, Clock, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Logo } from '@/components/ui/Logo';
import { TelegramIcon, WhatsAppIcon } from '@/components/ui/BrandIcons';
import { services } from '@/data/services';
import type { Service } from '@/data/services';
import { navItems, site } from '@/data/site';

const socials = [
  { label: 'واتساپ', href: site.whatsappUrl, Icon: WhatsAppIcon },
  { label: 'تلگرام', href: site.telegramUrl, Icon: TelegramIcon },
  { label: 'گیت‌هاب', href: 'https://github.com', Icon: Github },
  { label: 'لینکدین', href: 'https://linkedin.com', Icon: Linkedin },
];

const contactRows = [
  { label: 'ایمیل', value: site.email, Icon: Mail },
  { label: 'تلفن', value: site.phone, Icon: Phone },
  { label: 'نشانی', value: site.location, Icon: MapPin },
  { label: 'مشاوره', value: site.consultingHours, Icon: Clock },
  { label: 'پشتیبانی فنی', value: site.supportHours, Icon: Headset },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950">
      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-7 text-slate-400">
              خدمات دواپس، طراحی زیرساخت ابری و On-Premise، امنیت و پایداری
              سیستم — شفاف و قابل اندازه‌گیری.
            </p>
            <ul className="mt-6 flex items-center gap-2">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid size-9 place-items-center rounded-md border border-white/10 text-slate-400 transition-colors hover:border-trust-300/40 hover:text-white"
                  >
                    <Icon className="size-4" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav className="lg:col-span-3" aria-label="خدمات">
            <h3 className="text-sm font-bold text-white">خدمات</h3>
            <ul className="mt-5 space-y-3">
              {services.slice(0, 6).map((service: Service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-sm text-slate-400 transition-colors hover:text-trust-300"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="lg:col-span-2" aria-label="دسترسی سریع">
            <h3 className="text-sm font-bold text-white">دسترسی سریع</h3>
            <ul className="mt-5 space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-slate-400 transition-colors hover:text-trust-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold text-white">تماس با ما</h3>
            <ul className="mt-5 space-y-4">
              {contactRows.map(({ label, value, Icon }) => (
                <li key={label} className="flex items-start gap-3">
                  <Icon
                    className="mt-0.5 size-4 shrink-0 text-trust-300"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-slate-400">
                    <span className="block text-xs text-slate-500">{label}</span>
                    {value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-5 text-xs text-slate-500 sm:flex-row">
          <p>
            © 2026 پارس‌آپس — تمامی حقوق محفوظ است.
          </p>
          <p>{site.tagline}</p>
        </Container>
      </div>
    </footer>
  );
}
