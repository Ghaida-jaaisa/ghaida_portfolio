import type { PortfolioContent } from "@/lib/portfolio/types";
import { AboutSection } from "./about-section";
import { CertificatesSection } from "./certificates-section";
import { ContactFooter } from "./contact-footer";
import { HeroSection } from "./hero-section";
import { PathSection } from "./path-section";
import { MindsetSection } from "./mindset-section";
import { SiteHeader } from "./site-header";
import { ThinkingSection } from "./thinking-section";
import { ToolboxSection } from "./toolbox-section";
import { WorkSection } from "./work-section";
import { BeliefsSection } from "./beliefs-section";

type PortfolioProps = {
  content: PortfolioContent;
};

export default function Portfolio({ content }: PortfolioProps) {
  const { owner } = content;

  return (
    <main className="min-h-screen overflow-hidden bg-[#F0E8CD] text-[#434F03]">
      <SiteHeader
        brand={owner.name}
        email={owner.email}
        navItems={content.navItems}
      />
      <HeroSection role={owner.role} words={content.heroWords} />
      <MindsetSection />

      <PathSection entries={content.path} education={content.education} />

      <WorkSection
        projects={content.projects}
        categories={content.categories}
      />

       <ToolboxSection
        tools={content.tools}
        defaultTool={content.defaultTool}
        fallbackDescription={content.defaultToolDescription}
      />

      {/* <ThinkingSection /> */}
     
      <CertificatesSection certificates={content.certificates} />
      {/* <AboutSection name={owner.name} focus={content.currently} /> */}

      <BeliefsSection quotes={content.qoutes} />
      <ContactFooter
        email={owner.email}
        ownerName={owner.fullName}
        socials={content.socials}
      />
    </main>
  );
}
