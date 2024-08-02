import JPG_560x1 from '@/assets/advantages/box/tr560x1.jpg';
import WEBP_560x1 from '@/assets/advantages/box/tr560x1.webp';
import JPG_560x2 from '@/assets/advantages/box/tr560x2.jpg';
import WEBP_560x2 from '@/assets/advantages/box/tr560x2.webp';
import JPG_560x3 from '@/assets/advantages/box/tr560x3.jpg';
import WEBP_560x3 from '@/assets/advantages/box/tr560x3.webp';

import { SectionsTitle, StyledSection } from '@/components/shared';
import {
  InfoContainer,
  GraphicContainer,
  TrainingContainer,
  TrainingParagraph,
  AdvancedInfoContaier,
  AdvancedBlock,
  BlockTitle,
  BlockBody,
  Paragraph,
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

    <AdvancedInfoContaier>
      <AdvancedBlock data-wide="true" data-aos="fade-up-right">
        <BlockTitle>Вимоги до батьків</BlockTitle>

        <BlockBody>
          <Paragraph>Ви повністю довіряєте тренеру та клубу.</Paragraph>

          <Paragraph>
            Ви спостерігаєте за процесом, але не приймаєте участь у ньому.
          </Paragraph>

          <Paragraph>
            Ви не тренер, ви маєте давати лише одну установку - слухайся
            тренера.
          </Paragraph>

          <Paragraph>
            Ви на постійному контакті з тренером, приймаєте участь в усіх
            батьківських зборах, індивідуальних бесідах та в усьому допомагаєте
            тренеру, адже у нас з вами спільна мета - виховати здорову,
            соціально адаптовану людину і дати йому шанс стати професійним
            боксером.
          </Paragraph>

          <Paragraph>
            За необхідністю придбати екіпіровку для занять боксом (рукавички,
            шолом, капа, бинти, спортивну форму та взуття).
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
            Співпрацювати з тренером та адміністрацією для забезпечення
            максимально ефективного тренувального процесу.
          </Paragraph>

          <Paragraph>
            Своєчасно інформувати тренера про будь-які зміни у стані здоров’я
            дитини або інші важливі обставини.
          </Paragraph>

          <Paragraph>
            Забезпечити дотримання правил техніки безпеки дитиною під час
            тренувань.
          </Paragraph>

          <Paragraph>
            Показувати особистий приклад здорового способу життя та підтримувати
            спортивні захоплення дитини.
          </Paragraph>
        </BlockBody>
      </AdvancedBlock>

      <AdvancedBlock data-aos="fade-up-left">
        <BlockTitle>
          Основні принципи <br />
          тренувань з боксу
        </BlockTitle>

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
    </AdvancedInfoContaier>
  </StyledSection>
);
