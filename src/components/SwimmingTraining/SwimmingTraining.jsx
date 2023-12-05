import JPG_560x1 from '@/assets/advantages/swimming/tr560x1.jpg';
import WEBP_560x1 from '@/assets/advantages/swimming/tr560x1.webp';
import JPG_560x2 from '@/assets/advantages/swimming/tr560x2.jpg';
import WEBP_560x2 from '@/assets/advantages/swimming/tr560x2.webp';
import JPG_560x3 from '@/assets/advantages/swimming/tr560x3.jpg';
import WEBP_560x3 from '@/assets/advantages/swimming/tr560x3.webp';

import { SectionsTitle, StyledSection } from '@/components/shared';
import {
  InfoContainer,
  GraphicContainer,
  TrainingContainer,
  TrainingParagraph,
} from './SwimmingTraining.styled';

export const SwimmingTraining = () => (
  <StyledSection>
    <SectionsTitle data-aos="fade-up">Тренувальний процес</SectionsTitle>

    <TrainingContainer>
      <InfoContainer>
        <TrainingParagraph data-aos="fade-up">
          <em>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
            libero animi quae ad laudantium earum?
          </em>
        </TrainingParagraph>

        <TrainingParagraph data-aos="fade-up">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quis
          ipsa. Doloremque in reiciendis dignissimos debitis reprehenderit
          dolorem cupiditate ipsam, itaque, eaque repellat culpa, ipsum ea
          distinctio exercitationem est blanditiis?
        </TrainingParagraph>

        <TrainingParagraph data-aos="fade-up">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, facere.
        </TrainingParagraph>

        <TrainingParagraph data-aos="fade-up">
          <em>Lorem ipsum dolor sit amet consectetur adipisicing elit.</em>
          &nbsp; Consequatur fugit impedit inventore quam similique perferendis
          eligendi modi officia porro architecto.
        </TrainingParagraph>
      </InfoContainer>

      <GraphicContainer
        data-aos="fade-up"
        imageJPG_560x1={JPG_560x1}
        imageWEBP_560x1={WEBP_560x1}
        imageJPG_560x2={JPG_560x2}
        imageWEBP_560x2={WEBP_560x2}
        imageJPG_560x3={JPG_560x3}
        imageWEBP_560x3={WEBP_560x3}
      />
    </TrainingContainer>
  </StyledSection>
);
