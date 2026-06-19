import { SITE } from '@/lib/content';

const SOCIALS = [
  { key: 'google', href: SITE.google, label: 'Farm Eden sur Google', icon: '/images/social/google.svg' },
  { key: 'airbnb', href: SITE.airbnb, label: 'Farm Eden sur Airbnb', icon: '/images/social/airbnb.svg' },
  { key: 'instagram', href: SITE.instagram, label: 'Farm Eden sur Instagram', icon: '/images/social/instagram.svg' },
];

export function SocialLinks() {
  const items = SOCIALS.filter((s) => s.href);
  if (!items.length) return null;
  return (
    <div className="flex items-center gap-3 mt-7">
      {items.map((s) => (
        <a
          key={s.key}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          title={s.label}
          className="w-10 h-10 rounded-full bg-[#F5EFE0] hover:bg-[#D4B78A] transition-colors duration-200 flex items-center justify-center"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={s.icon} alt="" aria-hidden="true" className="w-[18px] h-[18px]" />
        </a>
      ))}
    </div>
  );
}
