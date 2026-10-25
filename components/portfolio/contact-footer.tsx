import type { SocialLink } from "@/lib/portfolio/types";
import { SectionLabel, SectionTitle } from "./primitives";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMailOpen } from "react-icons/io5";


type ContactFooterProps = {
  email: string;
  ownerName: string;
  socials: SocialLink[];
};

export function ContactFooter({
  email,
  ownerName,
  socials,
}: ContactFooterProps) {
  return (
    <footer
      id="contact"
      className="bg-[#434F03] px-6 py-14 text-[#F0E8CD] md:px-12 md:py-28"
    >
      <div className="flex flex-col gap-20 md:flex-row md:items-end md:justify-between">
        <div>
          <SectionLabel index="07" className="mb-8 text-[#987E29]">
            Contact
          </SectionLabel>
          <SectionTitle
            lines={["Let's build"]}
            emphasis="something."
            className="text-6xl leading-[0.85] tracking-[-0.05em] md:text-9xl"
            emphasisClassName="text-[#987E29]"
          />
        </div>
        <div className="font-sans text-sm">
          <p className="mb-5 text-[#F0E8CD]/60">
            Have an idea, a problem, or something worth building?
          </p>
          <a
            className="text-2xl underline decoration-[#987E29] underline-offset-8"
            href={`mailto:${email}`}
          >
            Start a conversation →
          </a>
          <div className="mt-8 flex gap-5 text-xs uppercase tracking-[0.15em]">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center gap-2 hover:text-[#987E29]"
              >
                {social.label === "GitHub" && <FaGithub size={22} />}
                {social.label === "LinkedIn" && <FaLinkedin size={22} />}
                {social.label === "Gmail" && <IoMailOpen size={22} />}

                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-24 flex justify-between border-t border-[#F0E8CD]/25 pt-5 font-sans text-[10px] uppercase tracking-[0.2em] text-[#F0E8CD]/60">
        <span>{ownerName} © 2026</span>
        <span>Made with curiosity &amp; code</span>
      </div>
    </footer>
  );
}
