import { SectionsTitle, SpriteIcon, StyledSection } from '@/components/shared';
import { DocItem, DocsList, DocLink } from './AboutDocs.styled';

export const AboutDocs = () => (
  <StyledSection>
    <SectionsTitle data-aos="fade-up">Документи закладу</SectionsTitle>

    <DocsList>
      <DocItem data-aos="fade-up-right">
        <DocLink href="/docs/dyussh_schools_statute.pdf" download>
          <SpriteIcon symbol="pdf" />

          <span>Статут закладу</span>
        </DocLink>
      </DocItem>

      <DocItem data-aos="fade-up">
        <DocLink href="/docs/dyussh_rules_for_visiting.pdf" download>
          <SpriteIcon symbol="pdf" />

          <span>Правила відвідування закладу</span>
        </DocLink>
      </DocItem>

      <DocItem data-aos="fade-up-left">
        <DocLink href="/docs/dyussh_provision_of_paid_services.pdf" download>
          <SpriteIcon symbol="pdf" />

          <span>Положення про надання платних послуг</span>
        </DocLink>
      </DocItem>
    </DocsList>
  </StyledSection>
);
