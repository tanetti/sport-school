import { SectionsTitle, StyledSection } from '@/components/shared';
import { SECTIONS } from '@/constants';
import {
  CardAge,
  CardBackground,
  CardInfoBox,
  CardLink,
  CardTitle,
  CartBottomBox,
  SectionsItem,
  SectionsList,
  UnavailableSection,
} from './HomeSections.styled';

export const HomeSections = () => (
  <StyledSection>
    <SectionsTitle data-aos="fade-up">Відділення</SectionsTitle>

    <SectionsList data-aos="fade-up">
      {SECTIONS.map(
        ({ name, label, startAge, endAge, homeImages, disabled }) => (
          <SectionsItem key={name}>
            <CardBackground images={homeImages} />

            <CardInfoBox>
              <CardTitle>{label}</CardTitle>

              <CartBottomBox>
                <CardAge>
                  {`${startAge} - ${endAge}`}
                  <span> років</span>
                </CardAge>

                {!disabled ? (
                  <CardLink to={`/${name}`}>Перейти</CardLink>
                ) : null}
              </CartBottomBox>

              {disabled ? (
                <UnavailableSection>Тимчасово недоступно</UnavailableSection>
              ) : null}
            </CardInfoBox>
          </SectionsItem>
        )
      )}
    </SectionsList>
  </StyledSection>
);
