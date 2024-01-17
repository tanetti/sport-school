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
          <Name>Горбаненко Олексій</Name>
        </ItemInfo>

        <Drscription>
          <DescriptionParagraph>
            <em>
              Горбаненко Олексій Романович - український спортсмен з настільного
              тенісу, Майстер Спорту України.
            </em>
          </DescriptionParagraph>

          <DescriptionParagraph>
            Настільним тенісом почав займатися у 2013 році. З 8 класу навчався у
            Дніпропетровському вищому училищі фізичної культури (ДВУФК).
          </DescriptionParagraph>

          <DescriptionParagraph>
            За період навчання в спортивній школі став багаторазовим чемпіоном
            України, чемпіоном області, учасником Чемпіонату Європи 2018.
          </DescriptionParagraph>
        </Drscription>
      </CoachItem>
    </CoachList>
  </StyledSection>
);
