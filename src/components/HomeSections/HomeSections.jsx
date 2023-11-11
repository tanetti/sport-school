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
        <SectionsItem image={Football}>Футбол</SectionsItem>

        <SectionsItem image={Football}>Волейбол</SectionsItem>

        <SectionsItem image={Football}>Скелелазіння</SectionsItem>

        <SectionsItem image={Football}>Теніс настільний</SectionsItem>

        <SectionsItem image={Football}>Бокс</SectionsItem>

        <SectionsItem image={Football}>Плавання</SectionsItem>
      </SectionsList>
    </StyledSection>
  );
};
