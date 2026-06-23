'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, ArrowRight, Waves, House, UtensilsCrossed, Volleyball, PawPrint, ShieldCheck } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';
import { WhatsAppBtn } from '@/components/WhatsAppFloat';
import { CTASection } from '@/components/CTASection';
import { InfiniteMarquee } from '@/components/InfiniteMarquee';
import { ReservationSteps } from '@/components/ReservationSteps';
import { FaqAccordion } from '@/components/FaqAccordion';
import { KEY_FIGURES, FEATURES, TESTIMONIALS, FAQ, WA_MESSAGES, type Experience } from '@/lib/content';

const ICONS: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  pool: Waves, villa: House, cuisine: UtensilsCrossed, sport: Volleyball, nature: PawPrint, private: ShieldCheck,
};

const RESERVATION_STEPS = [
  { n: '01', title: 'Envoyez-nous vos dates', desc: 'Dites-nous quand vous venez et combien vous serez.' },
  { n: '02', title: 'On vous confirme tout', desc: 'Nous vérifions la disponibilité et le tarif.' },
  { n: '03', title: 'Profitez de la ferme', desc: 'Le jour venu, la ferme est entièrement à vous.' },
];

interface Img { src: string; alt: string }

export function HomeClient({ hero, heroAccent, featured, marquee }: { hero: Img; heroAccent: Img; featured: Experience[]; marquee: Img[] }) {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative bg-[#F5EFE0] overflow-hidden">
        <div className="mx-auto max-w-6xl px-5 md:px-8 grid grid-cols-1 md:grid-cols-2 md:min-h-[92svh] items-center">
          <div className="pt-28 pb-10 md:py-32 pr-0 md:pr-10 lg:pr-16">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }} className="inline-flex items-center gap-2.5 bg-[#FAF3E8] border border-[#D4B78A]/40 px-4 py-2 rounded-full mb-8">
              <div className="flex gap-0.5" aria-hidden="true">{[...Array(5)].map((_, i) => (<Star key={i} className="w-3 h-3 fill-[#D4B78A] text-[#D4B78A]" />))}</div>
              <span className="text-xs font-medium text-[#8B6B3D]">Plus de 150 avis 5 étoiles</span>
            </motion.div>

            <motion.h1 className="font-display font-normal text-[#231C14] leading-[1.05] mb-6" style={{ fontSize: 'clamp(2.6rem, 3.8vw, 3.6rem)' }} initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
              Un séjour à la ferme <em className="italic text-[#52632E]">dont tout le monde se souvient.</em>
            </motion.h1>

            <motion.p className="text-[#231C14]/65 text-lg leading-relaxed mb-9 max-w-md" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
              Une piscine privée, une villa entière pour douze personnes et la cuisine marocaine. La ferme est entièrement à vous, à 45 minutes de Rabat.
            </motion.p>

            <motion.div className="flex flex-wrap gap-3" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }}>
              <WhatsAppBtn message={WA_MESSAGES.reservation} label="Réserver maintenant" variant="primary" size="lg" />
              <Link href="/la-ferme" className="inline-flex items-center gap-2 border border-[#231C14]/20 hover:border-[#231C14] text-[#231C14] text-base font-medium px-7 py-4 rounded-full transition-colors duration-200 min-h-[52px]">
                Découvrir la ferme<ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </motion.div>
          </div>

          {/* Composition photo (desktop) */}
          <div className="hidden md:flex relative items-center justify-end h-full py-20 pl-6 lg:pl-10">
            <div className="relative" style={{ width: 'clamp(260px, 28vw, 380px)' }}>
              <motion.div className="relative w-full rounded-[2rem] overflow-hidden shadow-2xl shadow-[#231C14]/15" style={{ aspectRatio: '3/4' }} initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
                <Image src={hero.src} alt={hero.alt} fill priority sizes="380px" className="object-cover" quality={90} />
              </motion.div>
              <motion.div className="absolute -bottom-6 -left-10 bg-white rounded-2xl shadow-xl shadow-black/8 p-4 w-52 z-10" initial={{ opacity: 0, x: -16, y: 10 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ delay: 0.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
                <div className="flex gap-0.5 mb-2" aria-hidden="true">{[...Array(5)].map((_, i) => (<Star key={i} className="w-3 h-3 fill-[#D4B78A] text-[#D4B78A]" />))}</div>
                <p className="text-[#231C14] text-sm font-medium leading-snug">Un endroit parfait pour déconnecter.</p>
                <p className="text-[#231C14]/45 text-xs mt-1.5">Salma R., Casablanca</p>
              </motion.div>
              <motion.div className="absolute -top-8 -right-8 w-36 rounded-2xl overflow-hidden border-[3px] border-white shadow-lg z-10" style={{ aspectRatio: '2/3' }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
                <Image src={heroAccent.src} alt={heroAccent.alt} fill sizes="144px" className="object-cover" quality={80} />
              </motion.div>
            </div>
          </div>

          {/* Photo mobile */}
          <div className="md:hidden pb-14">
            <motion.div className="relative w-full rounded-[1.75rem] overflow-hidden shadow-xl shadow-[#231C14]/15" style={{ aspectRatio: '4/3' }} initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
              <Image src={hero.src} alt={hero.alt} fill priority sizes="100vw" className="object-cover" quality={85} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ PHOTO VILLA (bloc largeur page) ═══ */}
      <section className="bg-[#F5EFE0] pb-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FadeIn blur={false}>
            <div className="relative w-full aspect-[4/3] md:aspect-[12/5] rounded-[1.75rem] md:rounded-[2rem] overflow-hidden shadow-xl shadow-[#231C14]/15">
              <Image
                src="/images/home/villa-large.jpg"
                alt="La villa de Farm Eden, ferme avec piscine privée à louer près de Rabat"
                fill
                sizes="(max-width: 1152px) 100vw, 1152px"
                className="object-cover object-center"
                quality={90}
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ COMMENT ÇA MARCHE ═══ */}
      <section className="bg-[#52632E] grain relative overflow-hidden py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-center">
            <div>
              <FadeIn><p className="text-xs font-medium tracking-widest uppercase text-[#D4B78A] mb-5">Ferme privatisée près de Rabat</p></FadeIn>
              <FadeIn delay={0.08}><h2 className="font-display font-normal text-[#F5EFE0] leading-[1.1] mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3.4rem)' }}>Une ferme avec <em className="italic">piscine privée à louer</em> près de Rabat</h2></FadeIn>
              <FadeIn delay={0.14}>
                <p className="text-[#F5EFE0]/75 text-lg leading-relaxed mb-4">Farm Eden est une ferme avec piscine privée à louer à Ain Johra, près de Tiflet, dans la région Rabat-Salé-Kénitra. Vous réservez la <Link href="/la-ferme" className="text-[#D4B78A] hover:text-[#e6d3b0] transition-colors">villa entière et son grand jardin</Link>, rien que pour votre groupe.</p>
                <p className="text-[#F5EFE0]/75 text-lg leading-relaxed mb-10">La villa, la piscine et tous les espaces sont <Link href="/privatiser-la-ferme" className="text-[#D4B78A] hover:text-[#e6d3b0] transition-colors">réservés à vous et à vos invités</Link>. C&apos;est le cadre idéal pour un <Link href="/experiences" className="text-[#D4B78A] hover:text-[#e6d3b0] transition-colors">séjour en famille, un brunch ou un séminaire d&apos;entreprise</Link>. Vous arrivez, vous profitez et vous repartez avec de beaux souvenirs.</p>
              </FadeIn>
              <FadeIn delay={0.2}><WhatsAppBtn message={WA_MESSAGES.reservation} label="Demander les disponibilités" variant="cream" size="lg" icon="calendar" /></FadeIn>
            </div>
            <FadeIn delay={0.1} direction="left">
              <div className="grid grid-cols-2 gap-4">
                {KEY_FIGURES.map((fig) => (
                  <div key={fig.value} className="bg-white/8 border border-white/12 rounded-2xl p-7 flex flex-col gap-2">
                    <span className="font-display font-normal text-[#F5EFE0] leading-none" style={{ fontSize: 'clamp(2rem, 3vw, 2.8rem)' }}>{fig.value}</span>
                    <span className="text-[#F5EFE0]/55 text-sm">{fig.label}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══ CE QUI VOUS ATTEND ═══ */}
      <section className="bg-[#F5EFE0] py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FadeIn><p className="text-xs font-medium tracking-widest uppercase text-[#A84A26] mb-5">Ce qui vous attend</p></FadeIn>
          <FadeIn delay={0.06}><h2 className="font-display font-normal text-[#231C14] leading-[1.1] mb-14 max-w-xl" style={{ fontSize: 'clamp(1.9rem, 3.5vw, 3rem)' }}>Tout ce qu&apos;il faut pour passer <em className="italic text-[#52632E]">un très bon moment.</em></h2></FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f, i) => {
              const Icon = ICONS[f.icon] ?? ShieldCheck;
              return (
                <FadeIn key={f.title} delay={i * 0.07}>
                  <div className="bg-white rounded-2xl p-7 flex flex-col gap-5 h-full border border-[#231C14]/5 hover:border-[#52632E]/25 transition-colors duration-200 group">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-[#EBF0E2] text-[#52632E] transition-transform duration-300 group-hover:scale-105"><Icon className="w-6 h-6" strokeWidth={1.6} /></div>
                    <div><h3 className="font-semibold text-[#231C14] mb-2 text-base">{f.title}</h3><p className="text-[#231C14]/60 text-sm leading-relaxed">{f.description}</p></div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ RÉSERVATION ═══ */}
      <section className="bg-white py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          <div className="md:col-span-5">
            <FadeIn><p className="text-xs font-medium tracking-widest uppercase text-[#A84A26] mb-5">Réservation</p></FadeIn>
            <FadeIn delay={0.06}><h2 className="font-display font-normal text-[#231C14] leading-[1.1] mb-8" style={{ fontSize: 'clamp(1.9rem, 3.5vw, 3rem)' }}>Simple comme <em className="italic text-[#52632E]">un message WhatsApp.</em></h2></FadeIn>
            <FadeIn delay={0.12}><WhatsAppBtn message={WA_MESSAGES.reservation} label="Réserver les dates" variant="olive" size="lg" icon="calendar" /></FadeIn>
          </div>
          <div className="md:col-span-7"><ReservationSteps steps={RESERVATION_STEPS} /></div>
        </div>
      </section>

      {/* ═══ LA GALERIE ═══ */}
      <section className="bg-[#F5EFE0] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8 mb-12 md:mb-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <FadeIn><p className="text-xs font-medium tracking-widest uppercase text-[#52632E] mb-5">La galerie</p></FadeIn>
              <FadeIn delay={0.06}><h2 className="font-display font-normal text-[#231C14] leading-[1.1] max-w-lg" style={{ fontSize: 'clamp(1.9rem, 3.5vw, 3rem)' }}>Un avant-goût <em className="italic text-[#52632E]">de votre séjour.</em></h2></FadeIn>
            </div>
            <FadeIn delay={0.1}>
              <Link href="/galerie" className="inline-flex items-center gap-2.5 bg-[#52632E] text-white text-base font-medium px-8 py-4 rounded-full min-h-[52px] hover:bg-[#3f4d23] transition-colors duration-200">Voir toutes les photos<ArrowRight className="w-4 h-4" aria-hidden="true" /></Link>
            </FadeIn>
          </div>
        </div>
        <FadeIn delay={0.05} blur={false}><InfiniteMarquee photos={marquee} duration={60} /></FadeIn>
      </section>

      {/* ═══ POURQUOI VENIR ═══ */}
      <section className="bg-white py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FadeIn><p className="text-xs font-medium tracking-widest uppercase text-[#A84A26] mb-5">Pourquoi venir</p></FadeIn>
          <FadeIn delay={0.06}><h2 className="font-display font-normal text-[#231C14] leading-[1.1] mb-14" style={{ fontSize: 'clamp(1.9rem, 3.5vw, 3rem)' }}>Pour chaque occasion, <em className="italic text-[#52632E]">Farm Eden s&apos;adapte.</em></h2></FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((exp, i) => (
              <FadeIn key={exp.slug} delay={i * 0.08}>
                <Link href={`/experiences/${exp.slug}`} className="group block bg-[#F5EFE0] rounded-2xl overflow-hidden h-full hover:shadow-lg hover:shadow-black/8 transition-shadow duration-300">
                  <div className="relative overflow-hidden bg-[#EDE5D0]" style={{ aspectRatio: '16/10' }}>
                    <Image src={exp.cardImage} alt={exp.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 ease-[0.22,1,0.36,1] group-hover:scale-[1.04]" quality={80} />
                    <span className="absolute top-4 left-4 text-xs font-semibold tracking-wide uppercase px-3 py-1.5 rounded-full bg-[#EBF0E2] text-[#52632E]">{exp.tag}</span>
                  </div>
                  <div className="p-7 flex flex-col gap-3">
                    <p className="text-xs text-[#231C14]/40 font-medium uppercase tracking-wider">{exp.subtitle}</p>
                    <h3 className="font-display font-normal text-[#231C14] text-xl">{exp.title}</h3>
                    <p className="text-[#231C14]/60 text-sm leading-relaxed">{exp.cardDescription}</p>
                    <span className="inline-flex items-center gap-2 text-[#52632E] font-medium text-sm mt-2 group-hover:gap-3 transition-all">Découvrir<ArrowRight className="w-4 h-4" aria-hidden="true" /></span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.12} className="mt-10 text-center">
            <Link href="/experiences" className="inline-flex items-center gap-2 text-[#231C14] font-medium border-b border-[#52632E]/40 hover:border-[#52632E] pb-0.5 transition-colors text-base">Voir toutes les expériences<ArrowRight className="w-4 h-4" aria-hidden="true" /></Link>
          </FadeIn>
        </div>
      </section>

      {/* ═══ CE QU'ILS EN DISENT ═══ */}
      <section className="bg-[#F5EFE0] py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FadeIn><p className="text-xs font-medium tracking-widest uppercase text-[#A84A26] mb-5">Ce qu&apos;ils en disent</p></FadeIn>
          <FadeIn delay={0.06}><h2 className="font-display font-normal text-[#231C14] leading-[1.1] mb-14" style={{ fontSize: 'clamp(1.9rem, 3.5vw, 3rem)' }}>Ils sont venus, <em className="italic text-[#52632E]">ils sont revenus.</em></h2></FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.1}>
                <blockquote className="bg-white border border-[#231C14]/6 rounded-2xl p-7 flex flex-col gap-5 h-full">
                  <div className="flex gap-0.5" aria-label={`${t.stars} étoiles`}>{[...Array(t.stars)].map((_, j) => (<Star key={j} className="w-3.5 h-3.5 fill-[#D4B78A] text-[#D4B78A]" aria-hidden="true" />))}</div>
                  <p className="text-[#231C14]/70 text-sm leading-relaxed flex-1">{t.text}</p>
                  <footer className="text-[#52632E] text-sm font-medium">{t.name} <span className="text-[#231C14]/35 font-normal">· {t.from}</span></footer>
                </blockquote>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <FadeIn><p className="text-xs font-medium tracking-widest uppercase text-[#A84A26] mb-5">Questions fréquentes</p></FadeIn>
          <FadeIn delay={0.06}><h2 className="font-display font-normal text-[#231C14] leading-[1.1] mb-12" style={{ fontSize: 'clamp(1.9rem, 3.5vw, 3rem)' }}>Des questions ? <em className="italic text-[#52632E]">On a les réponses.</em></h2></FadeIn>
          <FadeIn delay={0.1}><FaqAccordion items={FAQ} /></FadeIn>
        </div>
      </section>

      {/* ═══ CTA FINAL ═══ */}
      <CTASection title="Prêt à réserver votre séjour ?" text="Envoyez-nous vos dates et votre nombre de personnes. Nous vous répondons rapidement avec les disponibilités et le tarif." label="Réserver sur WhatsApp" wa="reservation" />
    </>
  );
}
