import { site } from '@/data/site';
import { TelegramIcon, WhatsAppIcon } from '@/components/ui/BrandIcons';

const chats = [
  {
    label: 'گفتگو در واتساپ',
    href: site.whatsappUrl,
    Icon: WhatsAppIcon,
    className: 'bg-[#25D366] text-white hover:bg-[#1ebe57]',
  },
  {
    label: 'گفتگو در تلگرام',
    href: site.telegramUrl,
    Icon: TelegramIcon,
    className: 'bg-[#229ED9] text-white hover:bg-[#1b8bc0]',
  },
];

export default function ChatButtons() {
  return (
    <div className="fixed bottom-5 end-5 z-40 flex flex-col gap-3">
      {chats.map(({ label, href, Icon, className }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`grid size-12 place-items-center rounded-full shadow-lift transition-transform hover:scale-105 ${className}`}
        >
          <Icon className="size-6" />
        </a>
      ))}
    </div>
  );
}
