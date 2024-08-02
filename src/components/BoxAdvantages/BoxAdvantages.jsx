import JPG_560x1 from '@/assets/advantages/box/560x1.jpg';
import WEBP_560x1 from '@/assets/advantages/box/560x1.webp';
import JPG_560x2 from '@/assets/advantages/box/560x2.jpg';
import WEBP_560x2 from '@/assets/advantages/box/560x2.webp';
import JPG_560x3 from '@/assets/advantages/box/560x3.jpg';
import WEBP_560x3 from '@/assets/advantages/box/560x3.webp';

import { SectionsTitle, StyledSection } from '@/components/shared';
import {
  AdvantagesContainer,
  Advantageslist,
  GraphicContainer,
  ListItem,
} from '@/components/shared';

export const BoxAdvantages = () => (
  <StyledSection>
    <SectionsTitle data-aos="fade-up">Переваги заняття боксом</SectionsTitle>

    <AdvantagesContainer>
      <GraphicContainer
        data-aos="fade-up"
        imageJPG_560x1={JPG_560x1}
        imageWEBP_560x1={WEBP_560x1}
        imageJPG_560x2={JPG_560x2}
        imageWEBP_560x2={WEBP_560x2}
        imageJPG_560x3={JPG_560x3}
        imageWEBP_560x3={WEBP_560x3}
      />

      <Advantageslist>
        <ListItem data-aos="fade-up">
          <em>Фізична форма.</em> Бокс вимагає відмінної витривалості, сили та
          витривалості, що допомагає покращити загальну фізичну форму.
        </ListItem>

        <ListItem data-aos="fade-up">
          <em>Покращення координації.</em> Бокс значно розвиває координацію
          рухів, швидкість реакції та зосередженість.
        </ListItem>

        <ListItem data-aos="fade-up">
          <em>Зняття стресу.</em> Фізична активність у поєднанні з технікою
          боксу може стати чудовим способом зняття стресу та емоційного
          напруження.
        </ListItem>

        <ListItem data-aos="fade-up">
          <em>Самозахист.</em> Навчання боксу допомагає розвинути навички
          самозахисту, що може бути корисним у небезпечних ситуаціях.
        </ListItem>

        <ListItem data-aos="fade-up">
          <em>Дисципліна та впевненість.</em> Тренування в боксі вимагають
          дисципліни і можуть допомогти підвищити самоконтроль і впевненість у
          собі.
        </ListItem>

        <ListItem data-aos="fade-up">
          <em>Соціальні навички.</em> Заняття в групах чи з партнерами створюють
          можливості для спілкування та побудови дружніх стосунків.
        </ListItem>

        <ListItem data-aos="fade-up">
          <em>Поліпшення серцево-судинної системи.</em> Регулярні тренування з
          боксу сприяють покращенню роботи серця і судин.
        </ListItem>

        <ListItem data-aos="fade-up">
          <em>Гнучкість і сила.</em> Бокс включає різноманітні рухи, які
          розвивають м’язову силу і гнучкість.
        </ListItem>
      </Advantageslist>
    </AdvantagesContainer>
  </StyledSection>
);
