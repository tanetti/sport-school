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

        <SectionsItem>Волейбол</SectionsItem>

        <SectionsItem>Скелелазіння</SectionsItem>

        <SectionsItem>Теніс настільний</SectionsItem>

        <SectionsItem>Бокс</SectionsItem>

        <SectionsItem>Плавання</SectionsItem>
      </SectionsList>
    </StyledSection>
  );
};
