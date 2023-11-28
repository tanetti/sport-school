import Coach01Webp480x1 from '@/assets/coaches/climbing/01/480x1.webp';
import Coach01Jpg480x1 from '@/assets/coaches/climbing/01/480x1.jpg';

import Coach02Webp480x1 from '@/assets/coaches/climbing/02/480x1.webp';
import Coach02Jpg480x1 from '@/assets/coaches/climbing/02/480x1.jpg';

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

export const ClimbingCoaches = () => (
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
          Тренер-викладач зі скелелазіння
          <Name>Тетяна Колкотіна</Name>
        </ItemInfo>

        <Drscription>
          <DescriptionParagraph>
            <em>
              Колкотіна Тетяна Петрівна майстер спорту України зі скелелазіння
            </em>
            . Багаторазова призерка чемпіонатів України та міжнародних турнірів,
            член національної збірної команди України, спортсмен-інструктор ЗСУ
            9 роти. З 2013 року почала займатися тренерською діяльністю, та
            успішно поєднувати тренерство з власними тренуваннями та виступами у
            змаганнях. Майже за 10 років тренерської діяльності виховала 10
            чемпіонів України серед молоді, призерів всеукраїнських і обласних
            змагань.
          </DescriptionParagraph>

          <DescriptionParagraph>
            З початком повномасштабної війни у 2022 році Тетяна працювала
            тренером збірної США у Атланті, де команда «Stone Summit» під її
            керівництвом посіла 1 місце на національному чемпіонаті Америки у
            виді лазіння на швидкість.
          </DescriptionParagraph>

          <DescriptionParagraph>
            Життєвий девіз Тетяни –&nbsp;
            <em>
              «Життя це не те, що ви отримуєте. Це те, що ви робите з
              отриманим!»
            </em>
          </DescriptionParagraph>
        </Drscription>
      </CoachItem>

      <CoachItem data-aos="fade-up-left">
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
          Тренер-викладач зі скелелазіння
          <Name>Ігор Тяпкін</Name>
        </ItemInfo>

        <Drscription>
          <DescriptionParagraph>
            <em>Тяпкін Ігор Олегович майстер спорту України</em>, тренер
            національної збірної команди України у виді лазіння на швидкість,
            багаторазовий призер всеукраїнських та міжнародних змагань.
            Тренерський стаж - 15 років. Ігор учасник та призер чемпіонатів
            Світу у Австрії (2005 р.), Китаї (2006 р.), Польщі (2015 р.), Італії
            (2016 р.) та ін.
          </DescriptionParagraph>

          <DescriptionParagraph>
            Ігор Олегович виховав: Бронзового призера чемпіонату Світу 2011 року
            - Барковського Сергія, чемпіона Європи 2012 року, Зінченко
            Володимира, призерів Кубків Європи Глушко Артема та Ткачову Дар’ю,
            переможницю Кубка Європи Щигарєву Аліну.
          </DescriptionParagraph>

          <DescriptionParagraph>
            Спортсмени кажуть про Ігоря Олеговича, що він дуже наполегливий та
            надзвичайно добрий тренер, адже до кожного спортсмена знаходить свій
            підхід. Ігор завжди працює на результат.&nbsp;
            <em>Тільки результат спортсмена показує роботу тренера</em> –
            наголошує Ігор.
          </DescriptionParagraph>
        </Drscription>
      </CoachItem>
    </CoachList>
  </StyledSection>
);
