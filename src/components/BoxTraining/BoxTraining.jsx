import { SectionsTitle, StyledSection } from '@/components/shared';
import {
  InfoContainer,
  TrainingContainer,
  TrainingParagraph,
  AdvancedInfoContaier,
  AdvancedBlock,
  BlockTitle,
  BlockBody,
  Paragraph,
  PlayerFrame,
} from './BoxTraining.styled';

export const BoxTraining = () => (
  <StyledSection>
    <SectionsTitle data-aos="fade-up">Тренувальний процес</SectionsTitle>

    <TrainingContainer>
      <InfoContainer>
        <TrainingParagraph data-aos="fade-up">
          Тренувальний процес у відділенні боксу в дитячо-юнацькій спортивній
          школі (ДЮСШ) проходить у декілька етапів і включає різноманітні форми
          підготовки, які спрямовані на розвиток фізичних і технічних навичок
          юних спортсменів.
        </TrainingParagraph>

        <TrainingParagraph data-aos="fade-up">
          <em>Розминка</em> - загальна розминка включає біг, стрибки,
          розтягування та загальні вправи для розігріву м&apos;язів і підготовки
          організму до більш інтенсивних навантажень. Спеціальна розминка може
          включати імітацію боксерських рухів, роботу з тенісними м&apos;ячами
          та інші вправи, що готують до основної частини тренування.
        </TrainingParagraph>

        <TrainingParagraph data-aos="fade-up">
          <em>Техніко-тактична підготовка</em> - вивчення і відпрацювання
          основних боксерських технік: удари, захист, комбінації. Робота в
          парах: відпрацювання атак і захисту з партнером. Бойові тренування та
          спаринги, де учні застосовують на практиці вивчені техніки.
        </TrainingParagraph>

        <TrainingParagraph data-aos="fade-up">
          <em>Фізична підготовка</em> - загальнофізичні вправи: вправи на
          розвиток сили, витривалості, швидкості та координації. Спеціальні
          вправи для боксерів, такі як робота з боксерськими мішками, лапами,
          скакалкою.
        </TrainingParagraph>

        <TrainingParagraph data-aos="fade-up">
          <em>Тактична підготовка</em> - розбір тактичних схем, аналіз боїв,
          навчання тактичного мислення. Відпрацювання різних ситуацій в ринзі,
          розвиток здатності швидко реагувати на дії суперника.
        </TrainingParagraph>

        <TrainingParagraph data-aos="fade-up">
          <em>Психологічна підготовка</em> - розвиток впевненості в собі,
          стресостійкості та здатності концентруватися. Психологічні тренінги та
          бесіди з тренером для підтримки морального духу спортсменів.
        </TrainingParagraph>

        <TrainingParagraph data-aos="fade-up">
          <em>Завершальна частина тренування</em> - розтягування, дихальні
          вправи, вправи на релаксацію для зниження напруги після інтенсивного
          тренування. Підбиття підсумків тренування, обговорення досягнень та
          виявлених помилок.
        </TrainingParagraph>

        <TrainingParagraph data-aos="fade-up">
          Тренування проводяться під керівництвом досвідчених тренерів, які
          складають індивідуальні плани для кожного спортсмена з урахуванням
          їхнього рівня підготовки та особистих потреб.
        </TrainingParagraph>
      </InfoContainer>

      <PlayerFrame
        data-aos="fade-up"
        url="https://youtube.com/shorts/qBkgOK-1Tho?si=4CY6OFIC2tCldO9c"
        width={288}
        height={512}
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
        <BlockTitle>Принципи тренувань</BlockTitle>

        <BlockBody>
          <Paragraph>
            <em>Техніка</em> - постійне вдосконалення ударів, захисту, руху ніг
            та балансування.
          </Paragraph>

          <Paragraph>
            <em>Сила та витривалість</em> - робота з вагою, кардіотренування,
            робота на мішках, грушах та з партнером.
          </Paragraph>

          <Paragraph>
            <em>Швидкість та рефлекси</em> - використання швидкісних груш,
            спаринги, вправи на покращення реакції.
          </Paragraph>

          <Paragraph>
            <em>Тактика та стратегія</em> - вивчення та аналіз суперників,
            розробка плану бою, адаптація до різних стилів.
          </Paragraph>

          <Paragraph>
            <em>Психологічна підготовка</em> - розвиток витримки, впевненості та
            концентрації.
          </Paragraph>
        </BlockBody>
      </AdvancedBlock>

      <AdvancedBlock data-aos="fade-up">
        <BlockTitle>Вимоги до батьків</BlockTitle>

        <BlockBody>
          <Paragraph>Ви повністю довіряєте тренеру.</Paragraph>

          <Paragraph>
            Ви не тренер, ви маєте давати лише одну установку - слухайся
            тренера.
          </Paragraph>

          <Paragraph>
            Ви на постійному контакті з тренером, приймаєте участь в усіх
            батьківських зборах, індивідуальних бесідах та в усьому допомагаєте
            тренеру.
          </Paragraph>

          <Paragraph>
            За необхідністю придбати екіпіровку для занять боксом.
          </Paragraph>

          <Paragraph>
            Забезпечити регулярне відвідування тренувань дитиною згідно з
            графіком.
          </Paragraph>

          <Paragraph>
            Своєчасно повідомляти тренера про можливу відсутність дитини на
            тренуванні.
          </Paragraph>

          <Paragraph>Підтримувати дитину у її прагненнях до спорту.</Paragraph>

          <Paragraph>
            Забезпечувати здоровий спосіб життя та правильне харчування дитини.
          </Paragraph>

          <Paragraph>
            Показувати особистий приклад здорового способу життя та підтримувати
            спортивні захоплення дитини.
          </Paragraph>
        </BlockBody>
      </AdvancedBlock>

      <AdvancedBlock data-aos="fade-up-left">
        <BlockTitle>Вимоги до вихованця</BlockTitle>

        <BlockBody>
          <Paragraph>Витривалість, сила, швидкість і гнучкість.</Paragraph>

          <Paragraph>Розвинені координація та реакція.</Paragraph>

          <Paragraph>Вміння зберігати спокій під тиском.</Paragraph>

          <Paragraph>Високий рівень мотивації та дисципліни.</Paragraph>

          <Paragraph>Дотримання режиму харчування та відпочинку.</Paragraph>

          <Paragraph>Уникання шкідливих звичок.</Paragraph>

          <Paragraph>Повага до суперників, тренерів та суддів.</Paragraph>

          <Paragraph>Вміння працювати в команді.</Paragraph>
        </BlockBody>
      </AdvancedBlock>
    </AdvancedInfoContaier>
  </StyledSection>
);
