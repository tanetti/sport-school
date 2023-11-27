import { SectionsTitle, StyledSection } from '@/components/shared';
import {
  AdvancedBlock,
  AdvancedInfoContaier,
  BlockList,
  BlockTitle,
  InfoContainer,
  ListItem,
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

    <AdvancedInfoContaier>
      <AdvancedBlock data-aos="fade-up-right">
        <BlockTitle>Принципи тренувань</BlockTitle>

        <BlockList>
          <ListItem>Якісна демонстрація та роз&apos;яснення вправ.</ListItem>

          <ListItem>Принцип «від простого до складного».</ListItem>

          <ListItem>
            Правильність виконання, потім швидкість та інтенсивність.
          </ListItem>

          <ListItem>
            Різноманітність вправ. Акцент на роботу двома ногами.
          </ListItem>

          <ListItem>Високий емоційний стан.</ListItem>

          <ListItem>Постійний контроль та мотивація футболістів.</ListItem>

          <ListItem>Дисципліна, як основний фактор прогресу.</ListItem>
        </BlockList>
      </AdvancedBlock>

      <AdvancedBlock data-aos="fade-up">
        <BlockTitle>Вимоги до футболіста</BlockTitle>

        <BlockList>
          <ListItem>Дисципліна! Фактор росту та досягнення цілей.</ListItem>

          <ListItem>Бажання вирости в професійного футболіста.</ListItem>

          <ListItem>
            Пунктуальність, присутність на всіх тренуваннях та заходу клубу.
          </ListItem>

          <ListItem>
            Надійність, взаємодопомога, дружелюбність, повага та підтримка
            партнерів клубу.
          </ListItem>

          <ListItem>
            Чистоплотність, бережне відношення до своїх та речей партнерів
            клубу.
          </ListItem>

          <ListItem>
            Відношення до критики - тренер не робить зауважень, тренер вчить,
            діє в інтересах футболіста.
          </ListItem>

          <ListItem>Характер, сила волі.</ListItem>

          <ListItem>Успішність в школі.</ListItem>

          <ListItem>Приклад поведінки в соціумі.</ListItem>
        </BlockList>
      </AdvancedBlock>

      <AdvancedBlock data-aos="fade-up-left">
        <BlockTitle>Вимоги до батьків</BlockTitle>

        <BlockList>
          <ListItem>Ви повністю довіряєте тренеру та клубу.</ListItem>

          <ListItem>
            Ви спостерігаєте за процесом, але не приймаєте участь у ньому.
          </ListItem>

          <ListItem>
            Ви не викрикуєте та не підказуєте нічого з трибун, це відволікає.
            Футболіст має сам приймати рішення.
          </ListItem>

          <ListItem>
            Ви не тренер, ви маєте давати лише одну установку - слухайся
            тренера.
          </ListItem>

          <ListItem>
            Ви на постійному контакті з тренером, приймаєте участь в усіх
            батьківських зборах, індивідуальних бесідах та в усьому допомагаєте
            тренеру, адже у нас з вами спільна мета - виховати здорову,
            соціально адаптовану людину і дати йому шанс стати професійним
            футболістом.
          </ListItem>
        </BlockList>
      </AdvancedBlock>
    </AdvancedInfoContaier>
  </StyledSection>
);
