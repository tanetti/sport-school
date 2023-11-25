import Trainer01Webp480x1 from '@/assets/trainers/football/01/480x1.webp';
import Trainer01Jpg480x1 from '@/assets/trainers/football/01/480x1.jpg';

import Trainer02Webp480x1 from '@/assets/trainers/football/02/480x1.webp';
import Trainer02Jpg480x1 from '@/assets/trainers/football/02/480x1.jpg';

import { SectionsTitle, StyledSection } from '@/components/shared';
import {
  TrainerItem,
  TrainerList,
  ItemImage,
  ItemInfo,
  Name,
  Drscription,
  DescriptionParagraph,
} from './FootballTreiners.styled';

export const FootballTreiners = () => (
  <StyledSection>
    <SectionsTitle data-aos="fade-up">Тренери</SectionsTitle>

    <TrainerList>
      <TrainerItem data-aos="fade-up-right">
        <div style={{ overflow: 'hidden' }}>
          <picture>
            <source
              type="image/webp"
              srcSet={`${Trainer01Webp480x1} 480w`}
              sizes="480px"
            />

            <source
              type="image/jpg"
              srcSet={`${Trainer01Jpg480x1} 480w`}
              sizes="480px"
            />

            <ItemImage alt="Тренер" loading="lazy" src={Trainer01Jpg480x1} />
          </picture>
        </div>

        <ItemInfo>
          Тренер-викладач з футболу
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
      </TrainerItem>

      <TrainerItem data-aos="fade-up-left">
        <div style={{ overflow: 'hidden' }}>
          <picture>
            <source
              type="image/webp"
              srcSet={`${Trainer02Webp480x1} 480w`}
              sizes="480px"
            />

            <source
              type="image/jpg"
              srcSet={`${Trainer02Jpg480x1} 480w`}
              sizes="480px"
            />

            <ItemImage alt="Тренер" loading="lazy" src={Trainer02Jpg480x1} />
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
      </TrainerItem>
    </TrainerList>
  </StyledSection>
);
