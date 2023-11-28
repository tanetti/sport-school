import JPG_560x1 from '@/assets/advantages/climbing/560x1.jpg';
import WEBP_560x1 from '@/assets/advantages/climbing/560x1.webp';
import JPG_560x2 from '@/assets/advantages/climbing/560x2.jpg';
import WEBP_560x2 from '@/assets/advantages/climbing/560x2.webp';
import JPG_560x3 from '@/assets/advantages/climbing/560x3.jpg';
import WEBP_560x3 from '@/assets/advantages/climbing/560x3.webp';

import { SectionsTitle, StyledSection } from '@/components/shared';
import {
  AdvantagesContainer,
  Advantageslist,
  GraphicContainer,
  ListItem,
} from '@/components/shared';

export const ClimbingAdvantages = () => (
  <StyledSection>
    <SectionsTitle data-aos="fade-up">
      Переваги заняття cкелелазінням
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
          <em>Скелелазіння</em> - це не просто тренування, але й похідне життя,
          пісні біля вогнища, ночівлі в наметах і веселе спілкування.
        </ListItem>

        <ListItem data-aos="fade-up">
          <em>Скелелазіння</em> - це гарний стимул побачити світ і приєднатися
          до справжніх професіоналів.
        </ListItem>

        <ListItem data-aos="fade-up">
          <em>Скелелазіння</em> - це регулярні тренування цілий рік, які дають
          гарне виховання витримки та сили волі.
        </ListItem>

        <ListItem data-aos="fade-up">
          <em>Скелелазіння</em> - це спорт, яким можна займатися до глибокої
          старості, тому що він дає гарну фізичну форму.
        </ListItem>

        <ListItem data-aos="fade-up">
          <em>Скелелазіння</em> - це унікальні навички альпінізму, та можливість
          отримати в майбутньому професію своєї мрії.
        </ListItem>
      </Advantageslist>
    </AdvantagesContainer>
  </StyledSection>
);
