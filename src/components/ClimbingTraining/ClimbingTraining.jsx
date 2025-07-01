import { SectionsTitle, StyledSection } from "@/components/shared";
import {
  AdvancedBlock,
  AdvancedInfoContaier,
  BlockBody,
  BlockTitle,
  InfoContainer,
  Paragraph,
  PlayerFrame,
  TrainingContainer,
  TrainingParagraph,
} from "./ClimbingTraining.styled";

const origin = location?.origin || "https://dyussh.dp.ua";

export const ClimbingTraining = () => (
  <StyledSection>
    <SectionsTitle data-aos="fade-up">Тренувальний процес</SectionsTitle>

    <TrainingContainer>
      <InfoContainer>
        <TrainingParagraph data-aos="fade-up">
          <em>Скелелазіння</em> не тільки формує спеціальні фізичні навички,
          необхідні для участі у спортивних змаганнях, а й удосконалює духовний
          та фізичний розвиток, задовольняє потреби у самореалізації, виховує
          морально-вольові якості особистості, патріотизму, любові до України!
        </TrainingParagraph>

        <TrainingParagraph data-aos="fade-up">
          Система спортивної підготовки включає такі види: фізична, технічна,
          психологічна, тактична, теоретична та інтегральна. Значну увагу
          тренери приділяють саме загальній фізичній підготовці, яка спрямована
          на підвищення загальної працездатності, на якій у майбутньому буде
          базуватися технічна та спеціальна підготовка. До загальної фізичної
          підготовки можна віднести: біг на короткі чи великі дистанції,
          підтягування на перекладині , стрибки з місця у довжину або через
          бар’єри.
        </TrainingParagraph>

        <TrainingParagraph data-aos="fade-up">
          <em>
            Головна мета - перемога на Олімпійських іграх, Всесвітніх іграх,
            чемпіонатах світу, Європи, які являють собою змагання найвищого
            рангу, проміжна мета - перемога на чемпіонатах міста та області,
            Кубках України, чемпіонаті України та Кубках світу.
          </em>
        </TrainingParagraph>

        <TrainingParagraph data-aos="fade-up">
          Спортсмени поділяються на групи в залежності від вікових категорій та
          навичок - <em>група початкової підготовки</em>,&nbsp;
          <em>група базової підготовки</em> та&nbsp;
          <em>група спеціальної підготовки</em>
        </TrainingParagraph>
      </InfoContainer>

      <PlayerFrame
        data-aos="fade-up"
        url="https://youtu.be/cSOsxrY-MYk?si=FDOJyfdW9WAaMb3L"
        width={null}
        height={null}
        muted={true}
        loop={true}
        config={{
          youtube: {
            playerVars: {
              hl: "uk",
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
          Початкова підготовка<span>8+ років, вступні нормативи</span>
        </BlockTitle>

        <BlockBody>
          <Paragraph>
            <em>
              Спортсмени віком від 8 років зараховуються до відділення
              скелелазіння згідно вступних контрольних нормативів.
            </em>
          </Paragraph>

          <Paragraph>
            Основна задача тренера початкової підготовки - закласти фундамент
            базової фізичної підготовки спортсмена. Тому тренування зі
            скелелазіння дуже різноманітні, що не дозволяє нудьгувати юним
            атлетам!
          </Paragraph>

          <Paragraph>
            Cпортсмени тренують три вида скелелазіння: лазіння на швидкість,
            лазіння на складність та болдеринг.
          </Paragraph>
        </BlockBody>
      </AdvancedBlock>

      <AdvancedBlock data-aos="fade-up">
        <BlockTitle>
          Базова підготовка<span>10+ років, 2+ юнацький розряд</span>
        </BlockTitle>

        <BlockBody>
          <Paragraph>
            <em>
              Спортсмени віком від 10 років, що пройшли етапи початкової
              підготовки та мають спортивний розряд від 2 юнацького та вище.
            </em>
          </Paragraph>

          <Paragraph>
            На етапі базової підготовки продовжується ріст фізичної підготовки
            спортсмена. Тренування стають ще більш різноманітними, відбувається
            підготовка до етапу спеціальної підготовки
          </Paragraph>

          <Paragraph>
            Cпортсмени також тренують три вида скелелазіння: лазіння на
            швидкість, лазіння на складність та болдеринг.
          </Paragraph>
        </BlockBody>
      </AdvancedBlock>

      <AdvancedBlock data-aos="fade-up-left">
        <BlockTitle>
          Спеціальна підготовка<span>1+ дорослий розряд</span>
        </BlockTitle>

        <BlockBody>
          <Paragraph>
            <em>
              Спортсмени, що мають спортивний розряд від 1 дорослого та вище.
            </em>
          </Paragraph>

          <Paragraph>
            На цьому етапі підготовки спортсмен разом із тренером обирає своє
            єдине направлення та відточує майстерність.
          </Paragraph>

          <Paragraph>
            Для цієї групи характерно приділяти більше уваги технічній
            підготовці, морально-вольовим якостям спортсмена. Це участь у
            всеукраїнських та міжнародних змаганнях, виїзди на
            навчально-тренувальні збори, тощо.
          </Paragraph>
        </BlockBody>
      </AdvancedBlock>
    </AdvancedInfoContaier>
  </StyledSection>
);
