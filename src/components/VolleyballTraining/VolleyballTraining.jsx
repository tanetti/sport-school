import { SectionsTitle, StyledSection } from '@/components/shared';
import {
  AdvancedBlock,
  AdvancedInfoContaier,
  BlockBody,
  Paragraph,
  BlockTitle,
  InfoContainer,
  PlayerFrame,
  TrainingContainer,
  TrainingParagraph,
  AdvancedMainBlock,
} from './VolleyballTraining.styled';

const origin = location?.origin || 'https://dyussh.dp.ua';

export const VolleyballTraining = () => (
  <StyledSection>
    <SectionsTitle data-aos="fade-up">Тренувальний процес</SectionsTitle>

    <TrainingContainer>
      <InfoContainer>
        <TrainingParagraph data-aos="fade-up">
          <em>Завдання занять залежать від періоду навчального процесу.</em>
        </TrainingParagraph>

        <TrainingParagraph data-aos="fade-up">
          Для зручності планування, заняття умовно ділять на три частини:&nbsp;
          <em>підготовчу</em>, <em>основну</em> і <em>заключну</em>. Ці частини
          органічно пов&apos;язані між собою, обумовлюють одна одну.
        </TrainingParagraph>

        <TrainingParagraph data-aos="fade-up">
          <em>Тренувальні заняття з волейболу тривають 90 - 120 хвилин</em>.
        </TrainingParagraph>
      </InfoContainer>

      <PlayerFrame
        data-aos="fade-up"
        url="https://youtube.com/shorts/qjzcNhJmrn4?si=J6deGggDE3tpvIZL"
        width={216}
        height={384}
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

    <AdvancedInfoContaier>
      <AdvancedBlock data-aos="fade-up-right">
        <BlockTitle>
          Підготовча частина
          <br />
          <span>15 - 20 хвилин</span>
        </BlockTitle>

        <BlockBody>
          <Paragraph>
            У підготовчій частині тренер проводить початкову організаційну
            підготовку групи до занять - організаційний момент (збір,
            шикування), пояснює завдання та зміст заняття, проводить розминку і
            перешиковування для виконання загально-фізичних та спеціальних
            вправ.
          </Paragraph>

          <Paragraph>
            У розминці використовують стройові вправи, гімнастичні вправи в русі
            та на місці, різні стрибки, біг, рухливі ігри, передачі м&apos;яча,
            тощо.
          </Paragraph>
        </BlockBody>
      </AdvancedBlock>

      <AdvancedMainBlock data-aos="fade-up">
        <BlockTitle>
          Основна частина
          <br />
          <span>55 - 70 хвилин</span>
        </BlockTitle>

        <BlockBody>
          <Paragraph>
            Головне завдання занять: навчання техніки подач, передач, нападаючих
            ударів, блокування, тактики індивідуальних та командних дій.
            Одночасно вирішується завдання підвищення загальної фізичної
            підготовки спортсменів на основі комплексу ГПО, виховання моральних
            та вольових якостей.
          </Paragraph>

          <Paragraph>
            Засобами тренування можуть бути вправи з м&apos;ячем, тренувальні
            двосторонні ігри та вправи з інших видів спорту, які в переважній
            більшості виконують на початку основної частини занять.
          </Paragraph>

          <Paragraph>
            Основну частину закінчують рухливою або двосторонньою грою через
            сітку. Час, відведений на гру, залежить від основного завдання. Він
            може бути мінімальним (25-30 хв) у першому році навчання і
            максимальним, якщо ставиться завдання вивчити нові й вдосконалити
            раніше освоєні командні тактичні дії.
          </Paragraph>

          <Paragraph>
            При проведенні двосторонньої гри (якщо група більше 12 чоловік)
            гравці, які не включені до складу команд виконують поставлені
            тренером (інструктором) додаткові завдання (спостерігають за діями
            гравців, виконують вправи для вдосконалення техніки, тощо).
          </Paragraph>
        </BlockBody>
      </AdvancedMainBlock>

      <AdvancedBlock data-aos="fade-up-left">
        <BlockTitle>
          Заключна частина
          <br />
          <span>5 - 10 хвилин</span>
        </BlockTitle>

        <BlockBody>
          <Paragraph>
            В заключній частині заняття здебільшого використовують ходьбу,
            вправи на розслаблення, рухливі ігри, що не вимагають великих
            зусиль, а також проводиться розбір заняття.
          </Paragraph>
        </BlockBody>
      </AdvancedBlock>
    </AdvancedInfoContaier>
  </StyledSection>
);
