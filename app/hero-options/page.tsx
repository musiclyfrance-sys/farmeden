import Image from 'next/image';
import type { Metadata } from 'next';
import { Star, ArrowRight, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hero options',
  robots: { index: false, follow: false },
};

const HEADLINE = (
  <>
    Un séjour à la ferme<br />
    <em className="italic text-[#52632E]">dont tout le monde se souvient.</em>
  </>
);

function Stars() {
  return (
    <span className="inline-flex items-center gap-2.5 bg-[#FAF3E8] border border-[#D4B78A]/40 px-4 py-2 rounded-full">
      <span className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-[#D4B78A] text-[#D4B78A]" />)}</span>
      <span className="text-xs font-medium text-[#8B6B3D]">Plus de 150 avis 5 étoiles</span>
    </span>
  );
}
function Cta({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex flex-wrap gap-3">
      <span className={`inline-flex items-center gap-2 ${dark ? 'bg-[#F5EFE0] text-[#231C14]' : 'bg-[#231C14] text-[#F5EFE0]'} text-base font-medium px-7 py-4 rounded-full`}>Réserver maintenant</span>
      <span className={`inline-flex items-center gap-2 border ${dark ? 'border-white/40 text-white' : 'border-[#231C14]/20 text-[#231C14]'} text-base font-medium px-7 py-4 rounded-full`}>Découvrir la ferme <ArrowRight className="w-4 h-4" /></span>
    </div>
  );
}

function Opt1() {
  return (
    <section className="bg-[#F5EFE0] overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 md:px-8 grid grid-cols-1 md:grid-cols-2 md:min-h-screen items-center gap-10">
        <div className="pt-12 md:pt-0">
          <div className="mb-7"><Stars /></div>
          <h1 className="font-display font-normal text-[#231C14] leading-[1.05] mb-6" style={{ fontSize: 'clamp(2.6rem,3.8vw,3.6rem)' }}>{HEADLINE}</h1>
          <p className="text-[#231C14]/65 text-lg leading-relaxed mb-9 max-w-md">Une piscine privée, une villa entière pour douze personnes et la cuisine marocaine, à 45 minutes de Rabat.</p>
          <Cta />
          <div className="md:hidden relative w-full rounded-[1.5rem] overflow-hidden shadow-xl mt-10 mb-12" style={{ aspectRatio: '4/3' }}>
            <Image src="/images/farm/piscine.jpg" alt="" fill sizes="100vw" className="object-cover" quality={82} />
          </div>
        </div>
        <div className="hidden md:flex relative items-center justify-end h-full py-16 pl-10">
          <div className="relative" style={{ width: 'clamp(260px,28vw,380px)' }}>
            <div className="relative w-full rounded-[2rem] overflow-hidden shadow-2xl shadow-[#231C14]/15" style={{ aspectRatio: '3/4' }}>
              <Image src="/images/farm/piscine.jpg" alt="" fill priority sizes="380px" className="object-cover" quality={85} />
            </div>
            <div className="absolute -bottom-6 -left-10 bg-white rounded-2xl shadow-xl p-4 w-52">
              <div className="flex gap-0.5 mb-2">{[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-[#D4B78A] text-[#D4B78A]" />)}</div>
              <p className="text-[#231C14] text-sm font-medium leading-snug">Un endroit parfait pour déconnecter.</p>
              <p className="text-[#231C14]/45 text-xs mt-1.5">Salma R., Casablanca</p>
            </div>
            <div className="absolute -top-8 -right-8 w-36 rounded-2xl overflow-hidden border-[3px] border-white shadow-lg" style={{ aspectRatio: '2/3' }}>
              <Image src="/images/farm/daybed.jpg" alt="" fill sizes="144px" className="object-cover" quality={80} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Opt2() {
  return (
    <section className="bg-[#F5EFE0] relative overflow-hidden md:min-h-screen flex items-center">
      <div className="mx-auto max-w-6xl px-5 md:px-8 w-full grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div className="pt-12 md:pt-0 relative z-10">
          <div className="mb-7"><Stars /></div>
          <h1 className="font-display font-normal text-[#231C14] leading-[1.05] mb-6" style={{ fontSize: 'clamp(2.7rem,4vw,4rem)' }}>{HEADLINE}</h1>
          <p className="text-[#231C14]/65 text-lg leading-relaxed mb-9 max-w-md">La propriété entière, rien que pour vous et vos invités. Piscine, villa et jardin, à 45 minutes de Rabat.</p>
          <Cta />
          <div className="md:hidden relative w-full rounded-[1.5rem] overflow-hidden shadow-xl mt-10 mb-12" style={{ aspectRatio: '4/3' }}>
            <Image src="/images/farm/piscine-turquoise.jpg" alt="" fill sizes="100vw" className="object-cover" quality={82} />
          </div>
        </div>
      </div>
      <div className="hidden md:block absolute top-0 right-0 h-full w-[46vw] rounded-l-[3rem] overflow-hidden shadow-2xl">
        <Image src="/images/farm/piscine-turquoise.jpg" alt="" fill priority sizes="46vw" className="object-cover" quality={86} />
        <span className="absolute top-6 left-6 bg-white/90 backdrop-blur text-[#52632E] text-xs font-semibold px-3.5 py-2 rounded-full shadow">Privatisé pour vous</span>
      </div>
    </section>
  );
}

function Opt3() {
  return (
    <section className="bg-[#F5EFE0] min-h-screen flex flex-col justify-center">
      <div className="mx-auto max-w-3xl px-5 md:px-8 pt-24 pb-12 text-center flex flex-col items-center">
        <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-[#A84A26] mb-6"><MapPin className="w-3.5 h-3.5" /> Ferme privée · 45 min de Rabat</span>
        <h1 className="font-display font-normal text-[#231C14] leading-[1.04] mb-6" style={{ fontSize: 'clamp(2.6rem,5vw,4.6rem)' }}>{HEADLINE}</h1>
        <p className="text-[#231C14]/65 text-lg leading-relaxed mb-8 max-w-xl">Une piscine privée, une villa entière pour douze personnes et la cuisine marocaine. La ferme est entièrement à vous.</p>
        <div className="flex justify-center"><Cta /></div>
      </div>
      <div className="grid grid-cols-4 gap-2 md:gap-3 px-3 pb-3">
        {['piscine', 'salon', 'daybed', 'palmeraie'].map((s, i) => (
          <div key={s} className={`relative overflow-hidden rounded-2xl bg-[#EDE5D0] aspect-[3/4] ${i % 2 ? '' : 'md:translate-y-5'}`}>
            <Image src={`/images/farm/${s}.jpg`} alt="" fill priority sizes="25vw" className="object-cover" quality={84} />
          </div>
        ))}
      </div>
    </section>
  );
}

function Opt4() {
  return (
    <section className="bg-[#F5EFE0] overflow-hidden md:min-h-screen flex items-center">
      <div className="mx-auto max-w-6xl px-5 md:px-8 w-full grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div className="pt-12 md:pt-0">
          <div className="mb-7"><Stars /></div>
          <h1 className="font-display font-normal text-[#231C14] leading-[1.05] mb-6" style={{ fontSize: 'clamp(2.6rem,3.8vw,3.7rem)' }}>{HEADLINE}</h1>
          <p className="text-[#231C14]/65 text-lg leading-relaxed mb-9 max-w-md">Une piscine privée, une villa entière et la cuisine marocaine, à 45 minutes de Rabat.</p>
          <Cta />
          <div className="md:hidden grid grid-cols-2 gap-3 mt-10 mb-12">
            <div className="relative rounded-2xl overflow-hidden shadow-lg" style={{ aspectRatio: '3/4' }}><Image src="/images/farm/piscine.jpg" alt="" fill sizes="50vw" className="object-cover" quality={80} /></div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg" style={{ aspectRatio: '3/4' }}><Image src="/images/farm/terrasse-salon.jpg" alt="" fill sizes="50vw" className="object-cover" quality={80} /></div>
          </div>
        </div>
        <div className="hidden md:flex gap-4 h-full items-center justify-end py-16">
          <div className="relative w-1/2 rounded-[1.75rem] overflow-hidden shadow-xl -translate-y-6" style={{ aspectRatio: '3/4' }}>
            <Image src="/images/farm/piscine.jpg" alt="" fill priority sizes="22vw" className="object-cover" quality={84} />
          </div>
          <div className="relative w-1/2 rounded-[1.75rem] overflow-hidden shadow-xl translate-y-6" style={{ aspectRatio: '3/4' }}>
            <Image src="/images/farm/terrasse-salon.jpg" alt="" fill priority sizes="22vw" className="object-cover" quality={84} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Opt5() {
  return (
    <section className="bg-[#F5EFE0] min-h-screen flex items-center py-12">
      <div className="mx-auto max-w-6xl px-5 md:px-8 w-full">
        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl" style={{ minHeight: '78vh' }}>
          <Image src="/images/farm/piscine-turquoise.jpg" alt="" fill priority sizes="100vw" className="object-cover" quality={86} />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#231C14]/30 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 md:bottom-8 md:left-8 md:right-auto md:max-w-lg bg-[#F5EFE0]/97 backdrop-blur rounded-3xl p-7 md:p-9 shadow-xl">
            <div className="mb-5"><Stars /></div>
            <h1 className="font-display font-normal text-[#231C14] leading-[1.05] mb-4" style={{ fontSize: 'clamp(2rem,3.2vw,3rem)' }}>{HEADLINE}</h1>
            <p className="text-[#231C14]/65 text-base leading-relaxed mb-6">Piscine privée, villa entière, cuisine marocaine. À 45 minutes de Rabat.</p>
            <Cta />
          </div>
        </div>
      </div>
    </section>
  );
}

const OPTS: { node: React.ReactNode; name: string }[] = [
  { node: <Opt1 />, name: 'Split éditorial (l\'actuel, affiné)' },
  { node: <Opt2 />, name: 'Grande image plein bord' },
  { node: <Opt3 />, name: 'Centré magazine + bande de photos' },
  { node: <Opt4 />, name: 'Collage de deux photos' },
  { node: <Opt5 />, name: 'Image panoramique + carte' },
];

function Banner({ i, name }: { i: number; name: string }) {
  return (
    <div className="bg-[#231C14] text-[#F5EFE0] px-5 md:px-8 py-3 text-sm sticky top-0 z-30 flex items-center gap-3">
      <span className="font-semibold bg-[#52632E] rounded-full w-7 h-7 inline-flex items-center justify-center shrink-0">{i}</span>
      <span>Option {i} <span className="text-[#F5EFE0]/55">· {name}</span></span>
    </div>
  );
}

export default async function HeroOptions({ searchParams }: { searchParams: Promise<{ n?: string }> }) {
  const { n } = await searchParams;
  if (n) {
    const opt = Number(n);
    return OPTS[opt - 1]?.node ?? OPTS[0].node;
  }
  // Pas de paramètre : on affiche les 5 options empilées pour comparer facilement (mobile + desktop).
  return (
    <div className="bg-white pt-16">
      <div className="bg-[#F5EFE0] px-5 md:px-8 py-4 text-center text-sm text-[#231C14]/70 border-b border-[#231C14]/8">
        5 propositions de hero. Faites défiler. Dites-moi le numéro que vous préférez.
      </div>
      {OPTS.map((o, idx) => (
        <div key={idx}>
          <Banner i={idx + 1} name={o.name} />
          {o.node}
        </div>
      ))}
    </div>
  );
}
