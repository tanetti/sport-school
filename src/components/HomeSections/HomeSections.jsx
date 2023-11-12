import FootballJPG from '@/assets/sections/football.jpg';
import FootballWEBP from '@/assets/sections/football.webp';
import VolleyballJPG from '@/assets/sections/volleyball.jpg';
import VolleyballWEBP from '@/assets/sections/volleyball.webp';
import TennisJPG from '@/assets/sections/tennis.jpg';
import TennisWEBP from '@/assets/sections/tennis.webp';
import BoxerJPG from '@/assets/sections/boxer.jpg';
import BoxerWEBP from '@/assets/sections/boxer.jpg';
import SwimmerJPG from '@/assets/sections/swimmer.jpg';
import SwimmerWEBP from '@/assets/sections/swimmer.webp';
import {
  SectionsItem,
  SectionsList,
  SectionsTitle,
  StyledSection,
} from './HomeSections.styled';

export const HomeSections = () => {
  return (
    <StyledSection>
      <SectionsTitle>ВІДДІЛЕННЯ</SectionsTitle>

      <SectionsList>
        <SectionsItem imageJPG={FootballJPG} imageWEBP={FootballWEBP}>
          <div>Футбол</div>
        </SectionsItem>

        <SectionsItem imageJPG={VolleyballJPG} imageWEBP={VolleyballWEBP}>
          <div>Волейбол</div>
        </SectionsItem>

        <SectionsItem>
          <div>Скелелазіння</div>
        </SectionsItem>

        <SectionsItem imageJPG={TennisJPG} imageWEBP={TennisWEBP}>
          <div>Теніс настільний</div>
        </SectionsItem>

        <SectionsItem imageJPG={BoxerJPG} imageWEBP={BoxerWEBP}>
          <div>Бокс</div>
        </SectionsItem>

        <SectionsItem imageJPG={SwimmerJPG} imageWEBP={SwimmerWEBP}>
          <div>Плавання</div>
        </SectionsItem>
      </SectionsList>
    </StyledSection>
  );
};
