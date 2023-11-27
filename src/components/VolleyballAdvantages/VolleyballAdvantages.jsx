import JPG_560x1 from '@/assets/advantages/volleyball/560x1.jpg';
import WEBP_560x1 from '@/assets/advantages/volleyball/560x1.webp';
import JPG_560x2 from '@/assets/advantages/volleyball/560x2.jpg';
import WEBP_560x2 from '@/assets/advantages/volleyball/560x2.webp';
import JPG_560x3 from '@/assets/advantages/volleyball/560x3.jpg';
import WEBP_560x3 from '@/assets/advantages/volleyball/560x3.webp';

import { SectionsTitle, StyledSection } from '@/components/shared';
import {
  AdvantagesContainer,
  Advantageslist,
  GraphicContainer,
  ListItem,
} from '@/components/shared';

export const VolleyballAdvantages = () => (
  <StyledSection>
    <SectionsTitle data-aos="fade-up">
      Переваги заняття волейболом
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
          <em>Волейбол зміцнює опорно-руховий апарат</em> та поліпшує рухливість
          суглобів.
        </ListItem>

        <ListItem data-aos="fade-up">
          <em>Волейбол тренує очні м&apos;язи</em>, а також зберігає зір на
          тривалий час. Розвиває дихальну систему.
        </ListItem>

        <ListItem data-aos="fade-up">
          <em>Волейбол покращує кровообіг</em>, зміцнює серцево-судинну систему
          підвищує витривалість.
        </ListItem>

        <ListItem data-aos="fade-up">
          Люди які регулярно грають в волейбол, відрізняються чудовою
          підтягнутою фігурою і відсутністю жирових відкладень.
        </ListItem>

        <ListItem data-aos="fade-up">
          Волейболом можна замінити будь-які виснажливі фізичні навантаження та
          стресові дієти.
        </ListItem>
      </Advantageslist>
    </AdvantagesContainer>
  </StyledSection>
);
