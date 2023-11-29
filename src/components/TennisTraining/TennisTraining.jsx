import JPG_560x1 from '@/assets/advantages/tennis/tr560x1.jpg';
import WEBP_560x1 from '@/assets/advantages/tennis/tr560x1.webp';
import JPG_560x2 from '@/assets/advantages/tennis/tr560x2.jpg';
import WEBP_560x2 from '@/assets/advantages/tennis/tr560x2.webp';
import JPG_560x3 from '@/assets/advantages/tennis/tr560x3.jpg';
import WEBP_560x3 from '@/assets/advantages/tennis/tr560x3.webp';

import { SectionsTitle, StyledSection } from '@/components/shared';
import {
  InfoContainer,
  GraphicContainer,
  TrainingContainer,
  TrainingParagraph,
} from './TennisTraining.styled';

export const TennisTraining = () => (
  <StyledSection>
    <SectionsTitle data-aos="fade-up">Тренувальний процес</SectionsTitle>

    <TrainingContainer>
      <InfoContainer>
        <TrainingParagraph data-aos="fade-up">
          На тренуваннях ми виховувуемо свідоме ставлення до занять фізичною
          культурою, морально-вольові якості: <em>дисциплінованість</em>,&nbsp;
          <em>цілеспрямованість</em>, <em>наполегливість</em> у досягненні мети.
        </TrainingParagraph>

        <TrainingParagraph data-aos="fade-up">
          <em>Навчаємо</em> виконанню захисних прийомів техніки гри, виконанню
          нападаючих ударів «накат» справа та зліва.
        </TrainingParagraph>

        <TrainingParagraph data-aos="fade-up">
          <em>Удосконалюємо</em> рухові навички і вміння у виконанні
          загально-розвиваючих вправ та спеціальних вправ тенісиста.
        </TrainingParagraph>

        <TrainingParagraph data-aos="fade-up">
          <em>Закріпляємо</em> поштовхові удари з партнером під час навчальної
          гри.
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
