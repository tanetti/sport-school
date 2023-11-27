import Coach01Webp480x1 from '@/assets/coaches/volleyball/01/480x1.webp';
import Coach01Jpg480x1 from '@/assets/coaches/volleyball/01/480x1.jpg';

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

export const VolleyballCoaches = () => (
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
          Тренер-викладач з волейболу
          <Name>Святослав Дубовиченко</Name>
        </ItemInfo>

        <Drscription>
          <DescriptionParagraph>
            Святослав Анатолійович Дубовиченко - український
            спортсмен-волейболіст 1 дорослого розряду з 2012 року.
          </DescriptionParagraph>

          <DescriptionParagraph>
            Волейболом почав займатися з дитинства, завдяки першій вчительці з
            фізичної культури. З 9 класу навчався в Дніпропетровському вищому
            училищі фізичної культури (ДВУФК).
          </DescriptionParagraph>

          <DescriptionParagraph>
            За період навчання в школі переможець і призер районних, обласних та
            всеукраїнських змагань з волейболу.
          </DescriptionParagraph>
        </Drscription>
      </CoachItem>
    </CoachList>
  </StyledSection>
);
