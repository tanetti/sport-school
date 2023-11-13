import FootballJPG from '@/assets/sections/football.jpg';
import FootballWEBP from '@/assets/sections/football.webp';
import VolleyballJPG from '@/assets/sections/volleyball.jpg';
import VolleyballWEBP from '@/assets/sections/volleyball.webp';
import ClimbingJPG from '@/assets/sections/climbing.jpg';
import ClimbingWEBP from '@/assets/sections/climbing.webp';
import TennisJPG from '@/assets/sections/tennis.jpg';
import TennisWEBP from '@/assets/sections/tennis.webp';
import BoxerJPG from '@/assets/sections/boxer.jpg';
import BoxerWEBP from '@/assets/sections/boxer.jpg';
import SwimmerJPG from '@/assets/sections/swimmer.jpg';
import SwimmerWEBP from '@/assets/sections/swimmer.webp';
import {
  CardAge,
  CardTitle,
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
          <div style={{ position: 'relative' }}>
            <CardTitle>Футбол</CardTitle>

            <CardAge>
              14 - 18
              <span> років</span>
            </CardAge>
          </div>
        </SectionsItem>

        <SectionsItem imageJPG={VolleyballJPG} imageWEBP={VolleyballWEBP}>
          <div style={{ position: 'relative' }}>
            <CardTitle>Волейбол</CardTitle>

            <CardAge>
              15 - 19<span> років</span>
            </CardAge>
          </div>
        </SectionsItem>

        <SectionsItem imageJPG={ClimbingJPG} imageWEBP={ClimbingWEBP}>
          <div style={{ position: 'relative' }}>
            <CardTitle>Скелелазіння</CardTitle>

            <CardAge>
              16 - 20<span> років</span>
            </CardAge>
          </div>
        </SectionsItem>

        <SectionsItem imageJPG={TennisJPG} imageWEBP={TennisWEBP}>
          <div style={{ position: 'relative' }}>
            <CardTitle>Теніс настільний</CardTitle>

            <CardAge>
              12 - 18<span> років</span>
            </CardAge>
          </div>
        </SectionsItem>

        <SectionsItem imageJPG={BoxerJPG} imageWEBP={BoxerWEBP}>
          <div style={{ position: 'relative' }}>
            <CardTitle>Бокс</CardTitle>

            <CardAge>
              16 - 20<span> років</span>
            </CardAge>
          </div>
        </SectionsItem>

        <SectionsItem imageJPG={SwimmerJPG} imageWEBP={SwimmerWEBP}>
          <div style={{ position: 'relative' }}>
            <CardTitle>Плавання</CardTitle>

            <CardAge>
              12 - 18<span> років</span>
            </CardAge>
          </div>
        </SectionsItem>
      </SectionsList>
    </StyledSection>
  );
};
