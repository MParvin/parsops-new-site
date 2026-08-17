import { useState, type ChangeEvent, type FormEvent } from 'react';
import { CheckCircle2, Clock, Mail, MapPin, Phone, Send } from 'lucide-react';
import CtaSection from '@/components/ui/CtaSection';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { services } from '@/data/services';
import { site } from '@/data/site';
import { cn } from '@/lib/cn';

interface FormState {
  name: string;
  email: string;
  organization: string;
  service: string;
  message: string;
}

type FormErrors = Partial<Record<'name' | 'email' | 'message', string>>;

const initialForm: FormState = {
  name: '',
  email: '',
  organization: '',
  service: '',
  message: '',
};

const contactCards = [
  { label: 'ایمیل', value: site.email, Icon: Mail },
  { label: 'تلفن', value: site.phone, Icon: Phone },
  { label: 'نشانی', value: site.location, Icon: MapPin },
  { label: 'ساعات کاری', value: site.hours, Icon: Clock },
];

const inputClasses =
  'w-full rounded-md border border-slate-200 bg-white px-4 py-2.5 text-sm text-ink-900 placeholder:text-slate-400 transition-colors focus:border-trust-500 focus:outline-none';

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: FormErrors = {};
    if (!form.name.trim()) nextErrors.name = 'لطفاً نام خود را وارد کنید.';
    if (!form.email.trim()) {
      nextErrors.email = 'لطفاً ایمیل کاری خود را وارد کنید.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = 'فرمت ایمیل واردشده معتبر نیست.';
    }
    if (!form.message.trim()) nextErrors.message = 'لطفاً پیام خود را بنویسید.';

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const fieldError = (key: keyof FormErrors) =>
    errors[key] ? (
      <p className="mt-1.5 text-xs text-red-600" role="alert">
        {errors[key]}
      </p>
    ) : null;

  return (
    <>
      <PageHero
        title="تماس با ما"
        description="برای شروع گفتگو، درخواست مشاوره یا طرح سؤال، فرم زیر را پر کنید یا مستقیم با ما در تماس باشید. پاسخ را در کمتر از 24 ساعت می‌دهیم."
        crumbs={[{ label: 'تماس با ما' }]}
      />

      <section className="bg-paper py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
            <Reveal className="lg:col-span-3">
              <div className="rounded-lg border border-slate-200/70 bg-white p-7 shadow-card sm:p-9">
                {submitted ? (
                  <div
                    className="flex min-h-[28rem] flex-col items-center justify-center text-center"
                    aria-live="polite"
                  >
                    <span className="grid size-16 place-items-center rounded-full bg-emerald-50">
                      <CheckCircle2
                        className="size-8 text-emerald-500"
                        aria-hidden="true"
                      />
                    </span>
                    <h2 className="mt-6 text-xl font-bold text-ink-900">
                      پیام شما دریافت شد
                    </h2>
                    <p className="mt-3 max-w-sm text-sm leading-7 text-slate-500">
                      از اعتماد شما سپاسگزاریم. تیم پارس‌آپس در کمتر از 24 ساعت
                      کاری با شما تماس می‌گیرد.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setForm(initialForm);
                        setSubmitted(false);
                      }}
                      className="mt-8 text-sm font-semibold text-trust-600 hover:text-trust-700"
                    >
                      ارسال پیام جدید
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-1.5 block text-sm font-medium text-ink-900"
                        >
                          نام و نام خانوادگی
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={form.name}
                          onChange={handleChange}
                          className={cn(inputClasses, errors.name && 'border-red-400')}
                          placeholder="مثلاً سارا احمدی"
                          autoComplete="name"
                        />
                        {fieldError('name')}
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="mb-1.5 block text-sm font-medium text-ink-900"
                        >
                          ایمیل کاری
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          dir="ltr"
                          value={form.email}
                          onChange={handleChange}
                          className={cn(
                            inputClasses,
                            'text-left',
                            errors.email && 'border-red-400',
                          )}
                          placeholder="name@company.com"
                          autoComplete="email"
                        />
                        {fieldError('email')}
                      </div>
                      <div>
                        <label
                          htmlFor="organization"
                          className="mb-1.5 block text-sm font-medium text-ink-900"
                        >
                          نام سازمان
                        </label>
                        <input
                          id="organization"
                          name="organization"
                          type="text"
                          value={form.organization}
                          onChange={handleChange}
                          className={inputClasses}
                          placeholder="اختیاری"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="service"
                          className="mb-1.5 block text-sm font-medium text-ink-900"
                        >
                          سرویس موردنظر
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className={inputClasses}
                        >
                          <option value="">انتخاب کنید…</option>
                          {services.map((service) => (
                            <option key={service.slug} value={service.slug}>
                              {service.title}
                            </option>
                          ))}
                          <option value="other">سایر / مشاورهٔ عمومی</option>
                        </select>
                      </div>
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="message"
                          className="mb-1.5 block text-sm font-medium text-ink-900"
                        >
                          پیام شما
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={form.message}
                          onChange={handleChange}
                          className={cn(
                            inputClasses,
                            'resize-y',
                            errors.message && 'border-red-400',
                          )}
                          placeholder="دربارهٔ وضعیت فعلی زیرساخت یا نیاز خود بنویسید…"
                        />
                        {fieldError('message')}
                      </div>
                    </div>

                    <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                      <Button type="submit" variant="primary" size="lg" disabled={submitting}>
                        {submitting ? (
                          <span className="inline-block size-4 animate-spin rounded-full border-2 border-white/40 border-t-white" aria-hidden="true" />
                        ) : (
                          <Send className="size-4" aria-hidden="true" />
                        )}
                        {submitting ? 'در حال ارسال…' : 'ارسال پیام'}
                      </Button>
                      <p className="text-xs text-slate-400">
                        اطلاعات شما نزد ما محرمانه می‌ماند و با شخص ثالث به اشتراک
                        گذاشته نمی‌شود.
                      </p>
                    </div>
                  </form>
                )}
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
                <div className="mt-auto rounded-lg border border-trust-200 bg-trust-50 p-5">
                  <h2 className="text-sm font-bold text-ink-900">
                    مشاورهٔ رایگان
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    اگر مطمئن نیستید چه خدمتی به کار شما می‌آید، یک جلسهٔ
                    ارزیابی رایگان رزرو کنید.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
