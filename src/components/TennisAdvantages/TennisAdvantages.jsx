import JPG_560x1 from '@/assets/advantages/tennis/560x1.jpg';
import WEBP_560x1 from '@/assets/advantages/tennis/560x1.webp';
import JPG_560x2 from '@/assets/advantages/tennis/560x2.jpg';
import WEBP_560x2 from '@/assets/advantages/tennis/560x2.webp';
import JPG_560x3 from '@/assets/advantages/tennis/560x3.jpg';
import WEBP_560x3 from '@/assets/advantages/tennis/560x3.webp';

import { SectionsTitle, StyledSection } from '@/components/shared';
import {
  AdvantagesContainer,
  Advantageslist,
  GraphicContainer,
  ListItem,
} from '@/components/shared';

export const TennisAdvantages = () => (
  <StyledSection>
    <SectionsTitle data-aos="fade-up">
      Переваги заняття настільним тенісом
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
          <em>Настільний теніс</em> не вимагає значних витрат, все що потрібно -
          це купити пару ракеток та м`ячик.
        </ListItem>

        <ListItem data-aos="fade-up">
          <em>В настільному тенісі</em> найзахоплююче те що в ньому не буває
          жодної однакової партії.
        </ListItem>

        <ListItem data-aos="fade-up">
          <em>Під час гри в настільний теніс</em> активно задіюються та
          розвиваються різні відділи головного мозку.
        </ListItem>

        <ListItem data-aos="fade-up">
          <em>Гра у настільний теніс</em> цікава тим, що чим більше спортсмен
          грає, тим більш професійним він стає.
        </ListItem>

        <ListItem data-aos="fade-up">
          <em>Гра у настільний теніс</em> - це прекрасна можливість зміцнити
          м`язи і розім`яти тіло, а також прекрасний спосіб цікаво та активно
          провести час з близькими.
        </ListItem>
      </Advantageslist>
    </AdvantagesContainer>
  </StyledSection>
);
