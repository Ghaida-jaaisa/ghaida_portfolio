import Image from 'next/image'
import { cn } from '@/lib/utils'
import type { Certificate } from '@/lib/portfolio/types'
import { SectionLabel, SectionTitle } from './primitives'

// Tailwind only generates classes it can see as literals, so the tilts are listed in full.
const tilts = ['rotate-1', '-rotate-1', 'rotate-2']

type CertificatesSectionProps = {
  certificates: Certificate[]
}

export function CertificatesSection({ certificates }: CertificatesSectionProps) {
  return (
    <section id="certificates" className="overflow-hidden bg-[#6A4951] px-6 py-28 text-[#F0E8CD] md:py-36">
      <SectionLabel index="06" className="mb-10 text-[#987E29]">Proof of curiosity</SectionLabel>
      <SectionTitle lines={["Things I've"]} emphasis="learned." className="text-6xl md:text-9xl" emphasisClassName="text-[#987E29]" />
      <div className="group/marquee -mx-6 mt-20 overflow-hidden py-6 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] motion-reduce:overflow-x-auto">
        {/* The list is rendered twice and shifted by -50%, so the loop restarts on an identical frame. */}
        <div className="flex w-max animate-marquee group-hover/marquee:[animation-play-state:paused] group-focus-within/marquee:[animation-play-state:paused] motion-reduce:animate-none">
          {[0, 1].map((copy) =>
            certificates.map((certificate, index) => (
              <CertificateCard
                key={`${copy}-${certificate.title}`}
                certificate={certificate}
                index={index}
                hidden={copy === 1}
              />
            )),
          )}
        </div>
      </div>
    </section>
  )
}

type CertificateCardProps = {
  certificate: Certificate
  index: number
  hidden: boolean
}

function CertificateCard({ certificate, index, hidden }: CertificateCardProps) {
  return (
    // Spacing lives in padding (not flex gap) so both copies are exactly the same width.
    <div className="pr-5" aria-hidden={hidden || undefined}>
      <div
        tabIndex={hidden ? -1 : 0}
        className={cn('group h-56 w-80 perspective-[1200px] outline-none', tilts[index % tilts.length])}
      >
        <div className="relative size-full transition-transform duration-700 transform-3d group-hover:rotate-y-180 group-focus-visible:rotate-y-180 group-has-focus-visible:rotate-y-180 motion-reduce:transition-none">
          <div className="absolute inset-0 overflow-hidden border border-[#F0E8CD]/35 bg-[#F0E8CD] p-2 backface-hidden">
            <div className="relative size-full">
              <Image src={certificate.image} alt={`${certificate.title} certificate`} fill sizes="320px" className="object-cover" />
            </div>
          </div>
          <div className="absolute inset-0 flex rotate-y-180 flex-col justify-between border border-[#F0E8CD]/35 bg-[#F0E8CD] p-5 text-[#434F03] backface-hidden">
            <span className="font-sans text-xs uppercase tracking-[0.18em]">Certificate {String(index + 1).padStart(2, '0')}</span>
            <p className="font-serif text-2xl">{certificate.title}</p>
            <div className="flex items-end justify-between gap-3 font-sans text-[10px] uppercase tracking-[0.18em] text-[#6A4951]">
              <span>{certificate.issuer} · {certificate.date}</span>
              {certificate.credentialUrl && (
                <a
                  href={certificate.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  tabIndex={hidden ? -1 : 0}
                  className="underline underline-offset-4 hover:text-[#987E29]"
                >
                  Verify ↗
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
