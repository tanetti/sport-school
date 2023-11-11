import {
  SectionsItem,
  SectionsList,
  SectionsTitle,
  StyledSection,
} from './HomeSections.styled';
import Football from '@/assets/sections/football.jpg';

export const HomeSections = () => {
  return (
    <StyledSection>
      <SectionsTitle>ВІДДІЛЕННЯ</SectionsTitle>

      <SectionsList>
        <SectionsItem image={Football}>
          <div>Футбол</div>
        </SectionsItem>

        <SectionsItem image={Football}>
          <div>Волейбол</div>
        </SectionsItem>

        <SectionsItem image={Football}>
          <div>Скелелазіння</div>
        </SectionsItem>

        <SectionsItem image={Football}>
          <div>Теніс настільний</div>
        </SectionsItem>

        <SectionsItem image={Football}>
          <div>Бокс</div>
        </SectionsItem>

        <SectionsItem image={Football}>
          <div>Плавання</div>
        </SectionsItem>
      </SectionsList>
    </StyledSection>
  );
};
