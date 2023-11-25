import { SectionsTitle, StyledSection } from '@/components/shared';
import {
  InfoContainer,
  PlayerFrame,
  TrainingContainer,
  TrainingParagraph,
} from './FootballTraining.styled';

const origin = location?.origin || 'https://dyussh.dp.ua';

export const FootballTraining = () => (
  <StyledSection>
    <SectionsTitle data-aos="fade-up">Тренувальний процес</SectionsTitle>

    <TrainingContainer>
      <InfoContainer>
        <TrainingParagraph data-aos="fade-up">
          Футбол у ДЮСШ ділиться на кілька дисциплін від футболу 5*5 у залі до
          футболу 11*11. Початкова дисципліна-це набір дітей віком 5-6 років. У
          школі займається шість вікових категорій віком до 18 років. Школа
          приділяє важливу увагу підвищенню кваліфікацій тренерів для оновлення
          знань та впровадження нових методики навчання. Завдяки цілорічному
          циклу змагань та тренувальних зборів, процес навчання та становлення
          майстерності спортсмена проходить швидше. У групах постійно ведеться
          робота над помилками за допомогою відео розборів ігор та тактичних
          занять.
        </TrainingParagraph>

        <TrainingParagraph data-aos="fade-up">
          <em>
            Школа націлена на створення сприятливого психологічного клімату у
            групах, командах для більшої якості взаємодії гравців як у
            змаганнях, так і у повсякденному житті.
          </em>
        </TrainingParagraph>
      </InfoContainer>

      <PlayerFrame
        data-aos="fade-up"
        url="https://www.youtube.com/embed/0FqBY5wSvJI"
        width={null}
        height={null}
        muted={true}
        loop={true}
        config={{
          youtube: {
            playerVars: {
              hl: 'uk',
              rel: 0,
              autoplay: 1,
              origin,
            },
          },
        }}
      />
    </TrainingContainer>
  </StyledSection>
);
