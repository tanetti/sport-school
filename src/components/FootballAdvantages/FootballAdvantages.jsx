import JPG_560x1 from '@/assets/advantages/football/560x1.jpg';
import WEBP_560x1 from '@/assets/advantages/football/560x1.webp';
import JPG_560x2 from '@/assets/advantages/football/560x2.jpg';
import WEBP_560x2 from '@/assets/advantages/football/560x2.webp';
import JPG_560x3 from '@/assets/advantages/football/560x3.jpg';
import WEBP_560x3 from '@/assets/advantages/football/560x3.webp';

import { SectionsTitle, StyledSection } from '@/components/shared';
import {
  AdvantagesContainer,
  Advantageslist,
  GraphicContainer,
  ListItem,
} from '@/components/shared';

export const FootballAdvantages = () => (
  <StyledSection>
    <SectionsTitle data-aos="fade-up">
      Переваги заняття футболом / футзалом
    </SectionsTitle>

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
          <em>Це гарне кардіотренування</em>, що покращує аеробні здібності та
          здоров&apos;я серця і судин, допомагає тримати в нормі вагу та
          покращує тонус м&apos;язів, позитивно впливає на силу і витривалість.
        </ListItem>

        <ListItem data-aos="fade-up">
          <em>Навчає координації</em>, сприяє спільній роботі та обміну, вчить
          &quot;думати на ходу&quot;, допомагає підвищити навички концентрації,
          наполегливості та самодисципліни, підвищує впевненість та самооцінку.
        </ListItem>

        <ListItem data-aos="fade-up">
          <em>Гра як ліки</em> - багато досліджень вказують на користь цього
          виду фізичної активності для людей будь-якого віку.
        </ListItem>

        <ListItem data-aos="fade-up">
          <em>Командні ігри це адреналін</em>. Ми напоготові та серце калатає.
          Але фізична активність схожа на відволікання — поки ви тренуєтеся, ви
          не думаєте ні про що, крім тренування та гри, і тим самим
          заспокоюєтеся.
        </ListItem>

        <ListItem data-aos="fade-up">
          Є докази, що футбол в різних форматах тривалості тренувань і
          навантаження - корисний вид фізичної активності в разі хронічних
          хвороб - діабету 1 та 2 типу, гіпертонії, ожиріння, багатьох
          захворювань м&apos;язів, кісток і суглобів (остеоартрит, ревматоїдний
          артрит, остеопороз), синдрому хронічної втоми та навіть депресії.
        </ListItem>
      </Advantageslist>
    </AdvantagesContainer>
  </StyledSection>
);
