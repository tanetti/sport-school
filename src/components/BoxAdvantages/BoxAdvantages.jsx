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
          <em>Бокс</em> — це досить інтенсивний вид спорту, з допомогою якого ви
          швидко спалите від 300 до 1100 калорій.
        </ListItem>

        <ListItem data-aos="fade-up">
          Під час занять <em>покращується кровообіг</em>, що означає більше
          кисню у мозку спортсмена, і він може краще зосереджуватися.
        </ListItem>

        <ListItem data-aos="fade-up">
          Завдяки стрибкам, ударам, блокам та різним силовим прийомам,&nbsp;
          <em>м`язи всього тіла</em> отримують серйозне навантаження та
          розвиток.
        </ListItem>

        <ListItem data-aos="fade-up">
          Під час тренування організм спортсмена виробляє ендорфіни та
          серотонін. Ці речовини змушують людину&nbsp;
          <em>відчувати себе щасливим і розслабленим</em>.
        </ListItem>

        <ListItem data-aos="fade-up">
          Спортсмен контролюєте своє тіло і розум, що&nbsp;
          <em>дає велику &quot;силу&quot;</em>.
        </ListItem>
      </Advantageslist>
    </AdvantagesContainer>
  </StyledSection>
);
