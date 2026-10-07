import { cn } from '@/lib/utils'
import { SectionLabel, SectionTitle } from './primitives'

// Tailwind only generates classes it can see as literals, so the tilts are listed in full.
const tilts = ['rotate-1', 'rotate-2']

type CertificatesSectionProps = {
  certificates: string[]
  ownerName: string
}

export function CertificatesSection({ certificates, ownerName }: CertificatesSectionProps) {
  return (
    <section id="certificates" className="overflow-hidden bg-[#6A4951] px-6 py-28 text-[#F0E8CD] md:py-36">
      <SectionLabel index="06" className="mb-10 text-[#987E29]">Proof of curiosity</SectionLabel>
      <SectionTitle lines={["Things I've"]} emphasis="learned." className="text-6xl md:text-9xl" emphasisClassName="text-[#987E29]" />
      <div className="mt-20 flex min-w-max gap-5">
        {certificates.map((certificate, index) => (
          <div
            key={certificate}
            className={cn(
              'flex h-56 w-64 flex-col justify-between border border-[#F0E8CD]/35 bg-[#F0E8CD] p-5 text-[#434F03] transition-transform hover:-translate-y-3 hover:rotate-0',
              tilts[index % tilts.length],
            )}
          >
            <span className="font-sans text-xs uppercase tracking-[0.18em]">Certificate {String(index + 1).padStart(2, '0')}</span>
            <p className="font-serif text-2xl">{certificate}</p>
            <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-[#6A4951]">{ownerName} · 2025</span>
          </div>
        ))}
      </div>
    </section>
  )
}
