import Coach01Webp480x1 from '@/assets/coaches/tennis/01/480x1.webp';
import Coach01Jpg480x1 from '@/assets/coaches/tennis/01/480x1.jpg';

import { SectionsTitle, StyledSection } from '@/components/shared';
import {
  CoachItem,
  CoachList,
  ItemImage,
  ItemInfo,
  Name,
  Drscription,
  DescriptionParagraph,
} from '@/components/shared';

export const TennisCoaches = () => (
  <StyledSection>
    <SectionsTitle data-aos="fade-up">Тренери</SectionsTitle>

    <CoachList>
      <CoachItem data-aos="fade-up">
        <div style={{ overflow: 'hidden' }}>
          <picture>
            <source
              type="image/webp"
              srcSet={`${Coach01Webp480x1} 480w`}
              sizes="480px"
            />

            <source
              type="image/jpg"
              srcSet={`${Coach01Jpg480x1} 480w`}
              sizes="480px"
            />

            <ItemImage alt="Тренер" loading="lazy" src={Coach01Jpg480x1} />
          </picture>
        </div>

        <ItemInfo>
          Тренер-викладач з настільного тенісу
          <Name>Владислав Ратушняк </Name>
        </ItemInfo>

        <Drscription>
          <DescriptionParagraph>
            <em>Владислав Ратушняк майстер спорту з настільного тенісу</em>. У
            2014 році став переможцем чемпіонату України серед юніорів (в
            одиночному та командному розрядах), також на ЮЧЕ-2014 здолав самого
            Дарко Йоргіча, став №95 у світі за юніорами та №405 у світовому
            рейтингу серед дорослих.
          </DescriptionParagraph>

          <DescriptionParagraph>
            Член збірної команди України серед молоді сезону 2012-2014. Виступав
            у різних клубних чемпіонатах: у Словаччині за команду &quot;Para
            TT&quot;, У Німеччині &quot;TTC Langen&quot;, та &quot;СумДУ&quot;,
            зараз є членом команди супер ліги &quot;СК Лірс&quot;.
          </DescriptionParagraph>
        </Drscription>
      </CoachItem>
    </CoachList>
  </StyledSection>
);
