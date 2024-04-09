import { SectionsTitle, SpriteIcon, StyledSection } from '@/components/shared';
import { DocItem, DocsList, DocLink } from './AboutDocs.styled';
import Statute from '@/assets/docs/dyussh_schools_statute.pdf';
import Rules from '@/assets/docs/dyussh_rules_for_visiting.pdf';
import Services from '@/assets/docs/dyussh_provision_of_paid_services.pdf';

export const AboutDocs = () => (
  <StyledSection>
    <SectionsTitle data-aos="fade-up">Документи закладу</SectionsTitle>

    <DocsList>
      <DocItem data-aos="fade-up-right">
        <DocLink href={Statute} download>
          <SpriteIcon symbol="pdf" />

          <span>Статут закладу</span>
        </DocLink>
      </DocItem>

      <DocItem data-aos="fade-up">
        <DocLink href={Rules} download>
          <SpriteIcon symbol="pdf" />

          <span>Правила відвідування закладу</span>
        </DocLink>
      </DocItem>

      <DocItem data-aos="fade-up-left">
        <DocLink href={Services} download>
          <SpriteIcon symbol="pdf" />

          <span>Положення про надання платних послуг</span>
        </DocLink>
      </DocItem>
    </DocsList>
  </StyledSection>
);
