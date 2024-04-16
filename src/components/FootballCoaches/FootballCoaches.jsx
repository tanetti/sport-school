import Coach01Webp480x1 from '@/assets/coaches/football/01/480x1.webp';
import Coach01Jpg480x1 from '@/assets/coaches/football/01/480x1.jpg';

import Coach02Webp480x1 from '@/assets/coaches/football/02/480x1.webp';
import Coach02Jpg480x1 from '@/assets/coaches/football/02/480x1.jpg';

import Coach03Webp480x1 from '@/assets/coaches/football/03/480x1.webp';
import Coach03Jpg480x1 from '@/assets/coaches/football/03/480x1.jpg';

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

export const FootballCoaches = () => (
  <StyledSection>
    <SectionsTitle data-aos="fade-up">Тренери</SectionsTitle>

    <CoachList>
      <CoachItem data-aos="fade-up-right">
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
          Тренер-викладач з футболу / футзалу
          <Name>Костянтин Король</Name>
        </ItemInfo>

        <Drscription>
          <DescriptionParagraph>
            Український футболіст, що грав на позиції як нападника, так і
            захисника та півзахисника. Відомий за виступами в українських
            футбольних клубах різних ліг.
          </DescriptionParagraph>

          <DescriptionParagraph>
            Костянтин Король розпочав виступи на футбольних полях у клубі другої
            української ліги «Динамо», другої ліги «Титан», команди вищої
            української ліги «Таврія».
          </DescriptionParagraph>

          <DescriptionParagraph>
            Двічі чемпіон України серед команд-професіоналів другої ліги з
            футболу.
          </DescriptionParagraph>
        </Drscription>
      </CoachItem>

      <CoachItem data-aos="fade-up">
        <div style={{ overflow: 'hidden' }}>
          <picture>
            <source
              type="image/webp"
              srcSet={`${Coach02Webp480x1} 480w`}
              sizes="480px"
            />

            <source
              type="image/jpg"
              srcSet={`${Coach02Jpg480x1} 480w`}
              sizes="480px"
            />

            <ItemImage alt="Тренер" loading="lazy" src={Coach02Jpg480x1} />
          </picture>
        </div>

        <ItemInfo>
          Тренер-викладач з футзалу
          <Name>Ільченко Вадим</Name>
        </ItemInfo>

        <Drscription>
          <DescriptionParagraph>
            Тренерську діяльність розпочав у 2016 році, зробивши вагомий внесок
            у розвиток дитячо-юнацького футболу у селище Слобожанське.
          </DescriptionParagraph>

          <DescriptionParagraph>
            Триразовий чемпіон України з футболу серед дітей 2006/07 р.н. у
            Всеукраїнських турнірах. Чемпіон України з футзалу серед дітей
            2006/07 р.н. у Всеукраїнських турнірах. Срібний призер Чемпіонату
            України з футзалу у категорії U-15. Півфіналіст Чемпіонату України з
            футзалу у категорії U-16. Дворазовий переможець Міжнародних турнірів
            з футболу серед дітей 2006/07 р.н. та срібний призер. Багаторазовий
            чемпіон Дніпропетровської області з футзалу серед дітей 2006/07 р.н.
          </DescriptionParagraph>
        </Drscription>
      </CoachItem>

      <CoachItem data-aos="fade-up-left">
        <div style={{ overflow: 'hidden' }}>
          <picture>
            <source
              type="image/webp"
              srcSet={`${Coach03Webp480x1} 480w`}
              sizes="480px"
            />

            <source
              type="image/jpg"
              srcSet={`${Coach03Jpg480x1} 480w`}
              sizes="480px"
            />

            <ItemImage alt="Тренер" loading="lazy" src={Coach03Jpg480x1} />
          </picture>
        </div>

        <ItemInfo>
          Тренер-викладач з футболу
          <Name>Андрій Кондратюк</Name>
        </ItemInfo>

        <Drscription>
          <DescriptionParagraph>
            У віці 12 років Андрія взяли до ФК «Дніпро», з яким здобули бронзові
            місця Чемпіонату України U-15, і багато трофеїв у різних міжнародних
            турнірах.
          </DescriptionParagraph>

          <DescriptionParagraph>
            Завдяки навчанню та багаторічному досвіду у футболі, став працювати
            тренером-викладачем фізичного виховання.
          </DescriptionParagraph>

          <DescriptionParagraph>
            Дитячим тренером став у віці 21 року.
          </DescriptionParagraph>
        </Drscription>
      </CoachItem>
    </CoachList>
  </StyledSection>
);
