import type { Metadata } from 'next';
import Image from 'next/image';
import { FadeIn } from '@/components/ui/FadeIn';
import { WhatsAppBtn } from '@/components/WhatsAppFloat';
import type { WhatsAppBtnVariant } from '@/components/WhatsAppFloat';
import { EXPERIENCES, WA_MESSAGES } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Expériences — Farm Eden, ferme avec piscine privée près de Rabat',
  description:
    "Séjour famille, couple, entre amis, séminaire, anniversaire, mariage, brunch — Farm Eden se privatise pour tous vos moments. À 45 minutes de Rabat.",
};

/* ─── Couleurs de tags ────────────────────────────────────── */
const TAG_STYLES: Record<string, string> = {
  olive: 'bg-[#EBF0E2] text-[#52632E]',
  brown: 'bg-[#231C14]/8 text-[#231C14]',
  terra: 'bg-[#F5E6DF] text-[#A84A26]',
  gold:  'bg-[#FAF3E8] text-[#8B6B3D]',
};

const ACTIVITES = [
  'Trampoline', 'Balançoires', 'Ping-pong', 'Badminton',
  'Football', 'Panier de basket', "Tir à l'arc", 'Fléchettes',
];

const ANIMAUX = ['Moutons', 'Chèvres', 'Lapins', 'Oies', 'Paons', 'Oiseaux'];

const SERVICES = [
  {
    title: 'Cuisine marocaine',
    desc: 'Tagine, couscous, méchoui — préparés par l\'équipe sur place, en supplément.',
  },
  {
    title: 'Petit-déjeuner',
    desc: 'Msemen, miel, olives, jus frais — un vrai petit-déj marocain pour commencer la journée.',
  },
  {
    title: 'Ménage',
    desc: 'Entretien de la villa pendant votre séjour, si vous le souhaitez.',
  },
];

export default function ExperiencesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-[#F5EFE0] pt-28 md:pt-36 pb-16 md:pb-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FadeIn>
            <p className="text-xs font-medium tracking-widest uppercase text-[#A84A26] mb-4">
              Expériences
            </p>
          </FadeIn>
          <FadeIn delay={0.07}>
            <h1
              className="font-display font-normal text-[#231C14] leading-[1.0] max-w-2xl"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              Pour chaque occasion,<br />
              <em className="italic">on s&apos;adapte.</em>
            </h1>
          </FadeIn>
          <FadeIn delay={0.14}>
            <p className="text-[#231C14]/60 text-lg leading-relaxed max-w-xl mt-6">
              Famille, couple, amis, EVJF, séminaire, anniversaire, mariage, bien-être ou brunch — la ferme se privatise entièrement pour vous, le temps qu'il vous faut.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Grille expériences ── */}
      <section className="bg-[#F5EFE0] pb-20 md:pb-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPERIENCES.map((exp, i) => {
            const tagStyle = TAG_STYLES[exp.tagColor] ?? TAG_STYLES.brown;
            const variant = (exp.ctaVariant ?? 'olive') as WhatsAppBtnVariant;
            const message = WA_MESSAGES[exp.wa as keyof typeof WA_MESSAGES] ?? WA_MESSAGES.general;

            return (
              <FadeIn key={exp.slug} delay={i * 0.07}>
                <article className="bg-white rounded-2xl overflow-hidden flex flex-col h-full
                                    hover:shadow-md hover:shadow-black/6 transition-shadow duration-300">
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#EDE5D0]">
                    <Image
                      src={exp.image}
                      alt={exp.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover hover:scale-[1.03] transition-transform duration-500 ease-[0.22,1,0.36,1]"
                      quality={80}
                    />
                    <span className={`absolute top-4 left-4 text-xs font-semibold tracking-wide
                                     uppercase px-3 py-1.5 rounded-full ${tagStyle}`}>
                      {exp.tag}
                    </span>
                  </div>
                  <div className="p-7 flex flex-col gap-3 flex-1">
                    <p className="text-[#231C14]/40 text-xs font-medium tracking-wide uppercase">
                      {exp.subtitle}
                    </p>
                    <h2 className="font-display font-normal text-[#231C14] text-2xl">{exp.title}</h2>
                    <p className="text-[#231C14]/60 text-sm leading-relaxed flex-1">{exp.description}</p>
                    <div className="pt-2">
                      <WhatsAppBtn
                        message={message}
                        label={exp.ctaLabel}
                        variant={variant}
                        size="sm"
                      />
                    </div>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* ── Activités ── */}
      <section className="bg-white py-20 md:py-28 border-t border-[#231C14]/6">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">

            <div>
              <FadeIn>
                <p className="text-xs font-medium tracking-widest uppercase text-[#A84A26] mb-4">
                  Activités
                </p>
              </FadeIn>
              <FadeIn delay={0.07}>
                <h2
                  className="font-display font-normal text-[#231C14] leading-[1.1] mb-8"
                  style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)' }}
                >
                  Pour les petits<br />
                  <em className="italic">et les grands.</em>
                </h2>
              </FadeIn>
              <FadeIn delay={0.12}>
                <ul className="grid grid-cols-2 gap-3" role="list">
                  {ACTIVITES.map((act) => (
                    <li key={act} className="flex items-center gap-2.5 text-[#231C14]/70 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A84A26] shrink-0" aria-hidden="true" />
                      {act}
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>

            <div>
              <FadeIn>
                <p className="text-xs font-medium tracking-widest uppercase text-[#A84A26] mb-4">
                  Espace animaux
                </p>
              </FadeIn>
              <FadeIn delay={0.07}>
                <h2
                  className="font-display font-normal text-[#231C14] leading-[1.1] mb-4"
                  style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)' }}
                >
                  Une vraie ferme<br />
                  <em className="italic">avec ses animaux.</em>
                </h2>
              </FadeIn>
              <FadeIn delay={0.12}>
                <p className="text-[#231C14]/60 text-base leading-relaxed mb-6">
                  Un espace animaux librement accessible pendant votre séjour. Les enfants adorent passer du temps avec eux.
                </p>
                <div className="flex flex-wrap gap-2">
                  {ANIMAUX.map((a) => (
                    <span
                      key={a}
                      className="text-sm bg-[#52632E]/10 text-[#52632E] font-medium px-4 py-2 rounded-full"
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="bg-[#231C14] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="md:col-span-1">
              <FadeIn>
                <p className="text-xs font-medium tracking-widest uppercase text-[#D4B78A] mb-3">
                  Services
                </p>
              </FadeIn>
              <FadeIn delay={0.07}>
                <h2
                  className="font-display font-normal text-[#F5EFE0] leading-[1.1]"
                  style={{ fontSize: 'clamp(1.4rem, 2vw, 1.9rem)' }}
                >
                  Sur place,<br />
                  <em className="italic">si vous voulez.</em>
                </h2>
              </FadeIn>
            </div>
            <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
              {SERVICES.map((s, i) => (
                <FadeIn key={s.title} delay={i * 0.1}>
                  <div className="flex flex-col gap-2">
                    <p className="text-[#D4B78A] font-semibold text-sm">{s.title}</p>
                    <p className="text-[#F5EFE0]/55 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#F5EFE0] py-20 md:py-24 text-center">
        <div className="mx-auto max-w-xl px-5 md:px-8">
          <FadeIn>
            <h2
              className="font-display font-normal text-[#231C14] leading-[1.1] mb-4"
              style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)' }}
            >
              Une autre idée<br />
              <em className="italic">d&apos;événement ?</em>
            </h2>
          </FadeIn>
          <FadeIn delay={0.08}>
            <p className="text-[#231C14]/60 text-base mb-8 leading-relaxed">
              Écrivez-nous et on trouve une formule qui vous convient.
            </p>
          </FadeIn>
          <FadeIn delay={0.14}>
            <WhatsAppBtn message={WA_MESSAGES.evenement} label="Nous contacter" variant="terra" size="lg" />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
