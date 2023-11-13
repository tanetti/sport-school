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
  CardBackground,
  CardInfoBox,
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
        <SectionsItem>
          <CardBackground imageJPG={FootballJPG} imageWEBP={FootballWEBP} />

          <CardInfoBox>
            <CardTitle>Футбол</CardTitle>

            <CardAge>
              6 - 18
              <span> років</span>
            </CardAge>
          </CardInfoBox>
        </SectionsItem>

        <SectionsItem>
          <CardBackground imageJPG={VolleyballJPG} imageWEBP={VolleyballWEBP} />

          <CardInfoBox>
            <CardTitle>Волейбол</CardTitle>

            <CardAge>
              8 - 18<span> років</span>
            </CardAge>
          </CardInfoBox>
        </SectionsItem>

        <SectionsItem>
          <CardBackground imageJPG={ClimbingJPG} imageWEBP={ClimbingWEBP} />

          <CardInfoBox>
            <CardTitle>Скелелазіння</CardTitle>

            <CardAge>
              8 - 18<span> років</span>
            </CardAge>
          </CardInfoBox>
        </SectionsItem>

        <SectionsItem>
          <CardBackground imageJPG={TennisJPG} imageWEBP={TennisWEBP} />

          <CardInfoBox>
            <CardTitle>Теніс настільний</CardTitle>

            <CardAge>
              7 - 18<span> років</span>
            </CardAge>
          </CardInfoBox>
        </SectionsItem>

        <SectionsItem>
          <CardBackground imageJPG={BoxerJPG} imageWEBP={BoxerWEBP} />

          <CardInfoBox>
            <CardTitle>Бокс</CardTitle>

            <CardAge>
              10 - 18<span> років</span>
            </CardAge>
          </CardInfoBox>
        </SectionsItem>

        <SectionsItem>
          <CardBackground imageJPG={SwimmerJPG} imageWEBP={SwimmerWEBP} />

          <CardInfoBox>
            <CardTitle>Плавання</CardTitle>

            <CardAge>
              8 - 18<span> років</span>
            </CardAge>
          </CardInfoBox>
        </SectionsItem>
      </SectionsList>
    </StyledSection>
  );
};
