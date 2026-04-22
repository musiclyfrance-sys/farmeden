'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { Star, ArrowRight, MapPin } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';
import { WhatsAppBtn } from '@/components/WhatsAppFloat';
import { KEY_FIGURES, FEATURES, EXPERIENCES, TESTIMONIALS, FAQ, WA_MESSAGES } from '@/lib/content';

/* ─── SVG Pictos personnalisés ─────────────────────────────── */
const PICTOS: Record<string, React.ReactNode> = {
  pool: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" className="w-7 h-7">
      <path d="M3 18c2.5-3.5 4.5-3.5 7 0s4.5 3.5 7 0 4.5-3.5 7 0"/>
      <path d="M3 24c2.5-3.5 4.5-3.5 7 0s4.5 3.5 7 0 4.5-3.5 7 0"/>
      <path d="M16 5v9"/>
      <path d="M12 8h8"/>
      <circle cx="16" cy="4" r="1.2" fill="currentColor" stroke="none"/>
    </svg>
  ),
  villa: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M3 14L16 4l13 10"/>
      <path d="M7 14v13h18V14"/>
      <rect x="13" y="20" width="6" height="7" rx="1.5"/>
      <rect x="8" y="16" width="5" height="4" rx="1"/>
      <rect x="19" y="16" width="5" height="4" rx="1"/>
    </svg>
  ),
  cuisine: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" className="w-7 h-7">
      <path d="M9 3v9c0 2.5-2 4-4.5 4S0 14.5 0 12V3"/>
      <path d="M4.5 16v13"/>
      <path d="M0 6h9"/>
      <path d="M23 3c0 0 6 3.5 6 11v2H17v-2C17 6.5 23 3 23 3z"/>
      <path d="M23 16v13"/>
    </svg>
  ),
  sport: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <circle cx="22" cy="6" r="2.5"/>
      <path d="M15 12l7-4 5 6-5 5-2 10"/>
      <path d="M15 12l-6 9 4 4"/>
      <path d="M9 28l1-4-4-4"/>
    </svg>
  ),
  nature: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" className="w-7 h-7">
      <path d="M16 28V17"/>
      <path d="M7 11c0-5 4-9 9-9 4 0 8 4 8 9s-4 6-4 6h-9s-4-2-4-6z"/>
      <path d="M16 17c-1-3-5-7-4-11"/>
      <path d="M16 17c1-3 4-5 6-9"/>
    </svg>
  ),
  private: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <rect x="7" y="14" width="18" height="14" rx="2.5"/>
      <path d="M11 14v-4a5 5 0 0 1 10 0v4"/>
      <circle cx="16" cy="22" r="2" fill="currentColor" stroke="none"/>
      <path d="M16 22v3"/>
    </svg>
  ),
};

/* ─── Métadonnées visuelles par feature ────────────────────── */
const FEATURE_META: Record<string, { iconBg: string; iconColor: string }> = {
  pool:    { iconBg: 'bg-[#EBF0E2]', iconColor: 'text-[#52632E]' },
  villa:   { iconBg: 'bg-[#F5E6DF]', iconColor: 'text-[#A84A26]' },
  cuisine: { iconBg: 'bg-[#FAF3E8]', iconColor: 'text-[#8B6B3D]' },
  sport:   { iconBg: 'bg-[#EBF0E2]', iconColor: 'text-[#52632E]' },
  nature:  { iconBg: 'bg-[#F5E6DF]', iconColor: 'text-[#A84A26]' },
  private: { iconBg: 'bg-[#231C14]/6', iconColor: 'text-[#231C14]' },
};

/* ─── Couleur des tags d'expériences ───────────────────────── */
const TAG_STYLES: Record<string, string> = {
  olive: 'bg-[#EBF0E2] text-[#52632E]',
  brown: 'bg-[#231C14]/8 text-[#231C14]',
  terra: 'bg-[#F5E6DF] text-[#A84A26]',
  gold:  'bg-[#FAF3E8] text-[#8B6B3D]',
};

/* ─── Boutons CTA variés ────────────────────────────────────── */
const EXP_BTN: Record<string, 'olive' | 'terra' | 'outline' | 'ghost'> = {
  reservation: 'olive',
  seminaire:   'terra',
  evenement:   'outline',
  brunch:      'ghost',
};

export default function HomePage() {
  const reduced = useReducedMotion();

  return (
    <>
      {/* ══════════════════════════════════════════════════════════
          1. HERO — split éditorial
      ══════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#F5EFE0] overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid grid-cols-1 md:grid-cols-2 min-h-[95svh] items-center">

          {/* ── Colonne gauche : texte ── */}
          <div className="pt-28 pb-16 md:py-32 pr-0 md:pr-10 lg:pr-16">

            {/* Étoiles */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 bg-[#FAF3E8] border border-[#D4B78A]/40
                         px-4 py-2 rounded-full mb-8"
              aria-label="Note 5 étoiles sur 150 avis"
            >
              <div className="flex gap-0.5" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-[#D4B78A] text-[#D4B78A]" />
                ))}
              </div>
              <span className="text-xs font-medium text-[#8B6B3D]">+150 avis 5 étoiles</span>
            </motion.div>

            {/* Titre */}
            <motion.h1
              className="font-display font-normal text-[#231C14] leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(2.6rem, 3.8vw, 3.6rem)' }}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              Un séjour à la ferme<br />
              <em className="italic text-[#52632E]">dont tout le monde se souvient.</em>
            </motion.h1>

            {/* Accroche */}
            <motion.p
              className="text-[#231C14]/65 text-lg leading-relaxed mb-10 max-w-md"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Piscine privée, villa entière pour 12 personnes, cuisine marocaine
              — la ferme est entièrement à vous, à 45 minutes de Rabat.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-3 mb-12"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <WhatsAppBtn
                message={WA_MESSAGES.reservation}
                label="Réserver maintenant"
                variant="primary"
                size="lg"
              />
              <Link
                href="/la-ferme"
                className="inline-flex items-center gap-2 border border-[#231C14]/20 hover:border-[#231C14]
                           text-[#231C14] text-base font-medium px-7 py-4 rounded-full transition-colors duration-200
                           min-h-[52px]"
              >
                Découvrir la ferme
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </motion.div>

          </div>

          {/* ── Colonne droite : composition photo ── */}
          <div className="hidden md:flex relative items-center justify-end h-full py-20 pl-6 lg:pl-10">
            <div className="relative" style={{ width: 'clamp(260px, 28vw, 380px)' }}>

              {/* Photo principale */}
              <motion.div
                className="relative w-full rounded-[2rem] overflow-hidden shadow-2xl shadow-[#231C14]/15"
                style={{ aspectRatio: '3/4' }}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src="/images/hero.jpg"
                  alt="Piscine privée de Farm Eden entourée de verdure"
                  fill
                  priority
                  sizes="380px"
                  className="object-cover"
                  quality={90}
                />
                {/* Badge privatisé */}
                <div className="absolute top-4 left-4 bg-[#52632E] text-white text-xs font-medium
                                px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/70" aria-hidden="true" />
                  Privatisé pour vous
                </div>
              </motion.div>

              {/* Carte avis flottante — bas gauche */}
              <motion.div
                className="absolute -bottom-6 -left-10 bg-white rounded-2xl shadow-xl shadow-black/8
                           p-4 w-52 z-10"
                initial={{ opacity: 0, x: -16, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex gap-0.5 mb-2" aria-hidden="true">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[#D4B78A] text-[#D4B78A]" />
                  ))}
                </div>
                <p className="text-[#231C14] text-sm font-medium leading-snug">
                  &ldquo;Un endroit parfait pour déconnecter.&rdquo;
                </p>
                <p className="text-[#231C14]/45 text-xs mt-1.5">— Salma R., Casablanca</p>
              </motion.div>

              {/* Petite photo accent — haut droite */}
              <motion.div
                className="absolute -top-8 -right-8 w-36 rounded-2xl overflow-hidden
                           border-[3px] border-white shadow-lg z-10"
                style={{ aspectRatio: '2/3' }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src="/images/exp-brunch.jpg"
                  alt="Brunch en plein air à Farm Eden"
                  fill
                  sizes="144px"
                  className="object-cover"
                  quality={80}
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Flèche de défilement */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          aria-hidden="true"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-8 h-8 rounded-full border border-[#231C14]/15 flex items-center justify-center"
          >
            <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 text-[#231C14]/35" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <path d="M4 6l4 4 4-4"/>
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          2. STRIP PHOTO — défilement horizontal
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-[#EDE5D0] py-5 overflow-hidden" aria-hidden="true">
        <div className="flex gap-3 overflow-x-auto scroll-strip px-5 md:px-8">
          {[
            { src: '/images/hero.jpg',           alt: 'Piscine privée' },
            { src: '/images/lieu-hero.jpg',       alt: 'La villa' },
            { src: '/images/exp-brunch.jpg',      alt: 'Brunch en plein air' },
            { src: '/images/exp-sejour.jpg',      alt: 'Séjour famille' },
            { src: '/images/exp-anniversaire.jpg',alt: 'Fête & événement' },
            { src: '/images/exp-seminaire.jpg',   alt: 'Séminaire' },
          ].map((photo, i) => (
            <div
              key={i}
              className="relative shrink-0 w-40 sm:w-48 md:w-56 rounded-2xl overflow-hidden bg-[#EBF0E2]"
              style={{ aspectRatio: '3/4' }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="224px"
                className="object-cover"
                quality={75}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          3. LA FERME ENTIÈRE — fond olive
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-[#52632E] grain relative overflow-hidden py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-center">

            {/* Texte */}
            <div>
              <FadeIn>
                <p className="text-xs font-medium tracking-widest uppercase text-[#D4B78A] mb-5">
                  Comment ça marche
                </p>
              </FadeIn>
              <FadeIn delay={0.08}>
                <h2
                  className="font-display font-normal text-[#F5EFE0] leading-[1.1] mb-6"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3.4rem)' }}
                >
                  La propriété entière<br />
                  <em className="italic">est réservée pour vous.</em>
                </h2>
              </FadeIn>
              <FadeIn delay={0.14}>
                <p className="text-[#F5EFE0]/75 text-lg leading-relaxed mb-4">
                  La villa, la piscine, le jardin et tous les espaces sont réservés exclusivement pour vous et vos invités — aucun autre groupe pendant votre séjour.
                </p>
                <p className="text-[#F5EFE0]/75 text-lg leading-relaxed mb-10">
                  C&apos;est simple et tranquille. Vous arrivez, vous profitez, vous repartez avec de beaux souvenirs.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <WhatsAppBtn
                  message={WA_MESSAGES.reservation}
                  label="Demander les disponibilités"
                  variant="cream"
                  size="lg"
                />
              </FadeIn>
            </div>

            {/* Chiffres */}
            <FadeIn delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                {KEY_FIGURES.map((fig) => (
                  <div
                    key={fig.value}
                    className="bg-white/8 border border-white/12 rounded-2xl p-7 flex flex-col gap-2"
                  >
                    <span
                      className="font-display font-normal text-[#F5EFE0] leading-none"
                      style={{ fontSize: 'clamp(2rem, 3vw, 2.8rem)' }}
                    >
                      {fig.value}
                    </span>
                    <span className="text-[#F5EFE0]/55 text-sm">{fig.label}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          4. CE QUI VOUS ATTEND — grille features
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-[#F5EFE0] py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FadeIn>
            <p className="text-xs font-medium tracking-widest uppercase text-[#A84A26] mb-5">
              Ce qui vous attend
            </p>
          </FadeIn>
          <FadeIn delay={0.06}>
            <h2
              className="font-display font-normal text-[#231C14] leading-[1.1] mb-14 max-w-xl"
              style={{ fontSize: 'clamp(1.9rem, 3.5vw, 3rem)' }}
            >
              Tout ce qu&apos;il faut pour passer<br />
              <em className="italic">un très bon moment.</em>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f, i) => {
              const meta = FEATURE_META[f.icon] ?? { iconBg: 'bg-[#231C14]/6', iconColor: 'text-[#231C14]' };
              return (
                <FadeIn key={f.title} delay={i * 0.07}>
                  <div className="bg-white rounded-2xl p-7 flex flex-col gap-5 h-full
                                  border border-[#231C14]/5 hover:border-[#231C14]/12
                                  transition-colors duration-200 group">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center
                                  ${meta.iconBg} ${meta.iconColor}
                                  transition-transform duration-300 group-hover:scale-105`}
                    >
                      {PICTOS[f.icon]}
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#231C14] mb-2 text-base">{f.title}</h3>
                      <p className="text-[#231C14]/60 text-sm leading-relaxed">{f.description}</p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          <FadeIn delay={0.15} className="mt-12">
            <Link
              href="/la-ferme"
              className="inline-flex items-center gap-2 text-[#231C14] font-medium
                         border-b border-[#231C14]/25 hover:border-[#231C14] pb-0.5
                         transition-colors text-base"
            >
              Visiter la ferme en détail
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          5. EXPÉRIENCES — 4 occasions de venir
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FadeIn>
            <p className="text-xs font-medium tracking-widest uppercase text-[#A84A26] mb-5">
              Pourquoi venir
            </p>
          </FadeIn>
          <FadeIn delay={0.06}>
            <h2
              className="font-display font-normal text-[#231C14] leading-[1.1] mb-14"
              style={{ fontSize: 'clamp(1.9rem, 3.5vw, 3rem)' }}
            >
              Pour chaque occasion,<br />
              <em className="italic">Farm Eden s&apos;adapte.</em>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EXPERIENCES.filter(e => ['sejour-famille', 'seminaire', 'anniversaire'].includes(e.slug)).map((exp, i) => {
              const tagStyle = TAG_STYLES[exp.tagColor] ?? TAG_STYLES.brown;
              const btnVariant = EXP_BTN[exp.wa] ?? 'ghost';
              return (
                <FadeIn key={exp.slug} delay={i * 0.08}>
                  <article className="group bg-[#F5EFE0] rounded-2xl overflow-hidden flex flex-col
                                      hover:shadow-md hover:shadow-black/6 transition-shadow duration-300">
                    <div className="relative overflow-hidden bg-[#EDE5D0]" style={{ aspectRatio: '16/9' }}>
                      <Image
                        src={exp.image}
                        alt={exp.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 ease-[0.22,1,0.36,1]
                                   group-hover:scale-[1.03]"
                        quality={80}
                      />
                      <span className={`absolute top-4 left-4 text-xs font-semibold tracking-wide uppercase
                                       px-3 py-1.5 rounded-full ${tagStyle}`}>
                        {exp.tag}
                      </span>
                    </div>
                    <div className="p-7 flex flex-col gap-3 flex-1">
                      <p className="text-xs text-[#231C14]/40 font-medium uppercase tracking-wider">{exp.subtitle}</p>
                      <h3 className="font-display font-normal text-[#231C14] text-xl">{exp.title}</h3>
                      <p className="text-[#231C14]/60 text-sm leading-relaxed flex-1">{exp.description}</p>
                      <WhatsAppBtn
                        message={WA_MESSAGES[exp.wa as keyof typeof WA_MESSAGES]}
                        label={exp.ctaLabel}
                        variant={btnVariant as 'olive' | 'terra' | 'outline' | 'ghost'}
                        size="sm"
                        className="self-start mt-3"
                      />
                    </div>
                  </article>
                </FadeIn>
              );
            })}
          </div>

          <FadeIn delay={0.12} className="mt-10 text-center">
            <Link
              href="/experiences"
              className="inline-flex items-center gap-2 text-[#231C14] font-medium
                         border-b border-[#231C14]/25 hover:border-[#231C14] pb-0.5
                         transition-colors text-base"
            >
              Voir toutes les expériences
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          6. GALERIE APERÇU — fond vert olive clair
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-[#EBF0E2] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div>
              <FadeIn>
                <p className="text-xs font-medium tracking-widest uppercase text-[#52632E] mb-5">
                  La galerie
                </p>
              </FadeIn>
              <FadeIn delay={0.06}>
                <h2
                  className="font-display font-normal text-[#231C14] leading-[1.1] mb-6"
                  style={{ fontSize: 'clamp(1.9rem, 3.5vw, 3rem)' }}
                >
                  La ferme,<br />
                  <em className="italic">vue de l&apos;intérieur.</em>
                </h2>
              </FadeIn>
              <FadeIn delay={0.12}>
                <p className="text-[#231C14]/60 text-lg leading-relaxed mb-8">
                  La villa, la piscine, le jardin et les animaux — tout est organisé pour que vous puissiez voir exactement ce qui vous attend.
                </p>
                <Link
                  href="/galerie"
                  className="inline-flex items-center gap-2.5 bg-[#52632E] text-white
                             text-base font-medium px-8 py-4 rounded-full min-h-[52px]
                             hover:bg-[#3f4d23] transition-colors duration-200"
                >
                  Voir toutes les photos
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </FadeIn>
            </div>

            {/* Mini grille 4 photos */}
            <FadeIn delay={0.1}>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { src: '/images/hero.jpg',        alt: 'La piscine', aspect: '3/4' },
                  { src: '/images/lieu-hero.jpg',    alt: 'La villa',   aspect: '3/4' },
                  { src: '/images/exp-brunch.jpg',   alt: 'Le jardin',  aspect: '3/2' },
                  { src: '/images/exp-anniversaire.jpg', alt: 'Les espaces', aspect: '3/2' },
                ].map((p, i) => (
                  <div
                    key={i}
                    className="relative rounded-xl overflow-hidden bg-[#D4C9B6]"
                    style={{ aspectRatio: p.aspect }}
                  >
                    <Image
                      src={p.src}
                      alt={p.alt}
                      fill
                      sizes="(max-width: 768px) 45vw, 22vw"
                      className="object-cover"
                      quality={75}
                    />
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          7. TÉMOIGNAGES — fond brun
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-[#231C14] py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FadeIn>
            <p className="text-xs font-medium tracking-widest uppercase text-[#D4B78A] mb-5">
              Ce qu&apos;ils en disent
            </p>
          </FadeIn>
          <FadeIn delay={0.06}>
            <h2
              className="font-display font-normal text-[#F5EFE0] leading-[1.1] mb-14"
              style={{ fontSize: 'clamp(1.9rem, 3.5vw, 3rem)' }}
            >
              Ils sont venus,<br />
              <em className="italic">ils sont revenus.</em>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.1}>
                <blockquote className="bg-white/6 border border-white/8 rounded-2xl p-7 flex flex-col gap-5 h-full">
                  <div className="flex gap-0.5" aria-label={`${t.stars} étoiles`}>
                    {[...Array(t.stars)].map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-[#D4B78A] text-[#D4B78A]" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="text-[#F5EFE0]/80 text-sm leading-relaxed flex-1">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <footer className="text-[#D4B78A] text-sm font-medium">
                    {t.name}{' '}
                    <span className="text-[#F5EFE0]/30 font-normal">— {t.from}</span>
                  </footer>
                </blockquote>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          8. COMMENT RÉSERVER — fond terracotta
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-[#A84A26] grain relative overflow-hidden py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FadeIn>
            <p className="text-xs font-medium tracking-widest uppercase text-white/60 mb-5">
              Réservation
            </p>
          </FadeIn>
          <FadeIn delay={0.06}>
            <h2
              className="font-display font-normal text-white leading-[1.1] mb-16"
              style={{ fontSize: 'clamp(1.9rem, 3.5vw, 3rem)' }}
            >
              Simple comme<br />
              <em className="italic">un message WhatsApp.</em>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-14">
            {[
              {
                n: '01',
                title: 'Envoyez-nous vos dates',
                desc: 'Dites-nous quand vous voulez venir et combien vous serez.',
              },
              {
                n: '02',
                title: 'On vous confirme tout',
                desc: 'On vérifie la disponibilité et on vous envoie les détails et le tarif.',
              },
              {
                n: '03',
                title: 'Profitez de la ferme',
                desc: 'Le jour J, la ferme est entièrement à vous. Plus rien à gérer.',
              },
            ].map((step, i) => (
              <FadeIn key={step.n} delay={i * 0.1}>
                <div className="flex flex-col gap-4">
                  <span className="font-display text-6xl font-normal text-white/15 leading-none">
                    {step.n}
                  </span>
                  <h3 className="font-semibold text-white text-lg">{step.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.2}>
            <WhatsAppBtn
              message={WA_MESSAGES.reservation}
              label="Réserver sur WhatsApp"
              variant="cream"
              size="lg"
            />
          </FadeIn>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          9. FAQ — fond blanc
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <FadeIn>
            <p className="text-xs font-medium tracking-widest uppercase text-[#A84A26] mb-5">
              Questions fréquentes
            </p>
          </FadeIn>
          <FadeIn delay={0.06}>
            <h2
              className="font-display font-normal text-[#231C14] leading-[1.1] mb-12"
              style={{ fontSize: 'clamp(1.9rem, 3.5vw, 3rem)' }}
            >
              Des questions ?<br />
              <em className="italic">On a les réponses.</em>
            </h2>
          </FadeIn>

          <div className="flex flex-col divide-y divide-[#231C14]/8">
            {FAQ.map((item, i) => (
              <FadeIn key={item.q} delay={i * 0.05}>
                <details className="group py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <summary className="flex justify-between items-center gap-4 font-medium
                                      text-[#231C14] text-base select-none">
                    {item.q}
                    <span className="w-6 h-6 shrink-0 text-[#231C14]/35 transition-transform
                                     duration-200 group-open:rotate-45 flex-none">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                        <path d="M12 5v14M5 12h14"/>
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-3 text-[#231C14]/60 text-sm leading-relaxed pr-8">{item.a}</p>
                </details>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.2} className="mt-12 pt-8 border-t border-[#231C14]/8 flex flex-wrap items-center gap-4">
            <p className="text-[#231C14]/60 text-sm">Une autre question ?</p>
            <WhatsAppBtn
              message={WA_MESSAGES.general}
              label="Écrivez-nous directement"
              variant="outline"
              size="sm"
            />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
