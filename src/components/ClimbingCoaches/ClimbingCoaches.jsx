import Coach01Webp480x1 from '@/assets/coaches/climbing/01/480x1.webp';
import Coach01Jpg480x1 from '@/assets/coaches/climbing/01/480x1.jpg';

import Coach02Webp480x1 from '@/assets/coaches/climbing/02/480x1.webp';
import Coach02Jpg480x1 from '@/assets/coaches/climbing/02/480x1.jpg';

import Coach03Webp480x1 from '@/assets/coaches/climbing/03/480x1.webp';
import Coach03Jpg480x1 from '@/assets/coaches/climbing/03/480x1.jpg';

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
          <Name>Анастасія Шереметьєва</Name>
        </ItemInfo>

        <Drscription>
          <DescriptionParagraph>
            <em>
              Анастасія Шереметьєва — досвідчена спортсменка з восьмирічним
              стажем сходжень на вершини
            </em>
            , чотири з яких вона виступає на професійному рівні. Вона
            неодноразово ставала призеркою чемпіонатів України та охоче
            допомагає дітям, які роблять перші кроки у спорті.
          </DescriptionParagraph>

          <DescriptionParagraph>
            Анастасія навчається у Мелітопольському педагогічному університеті
            за спеціальністю «Тренерська діяльність у обраному виді спорту».
            Свою діяльність вона розпочала у 16 років як помічник тренера.
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
          Тренер-викладач зі скелелазіння
          <Name>Марина Ткачьова</Name>
        </ItemInfo>

        <Drscription>
          <DescriptionParagraph>
            <em>Ткачьова Марина Сергіївна</em> з дитинства захоплюється
            спортивним туризмом, що дозволило їй досягти значних успіхів і
            здобути звання Кандидата в майстри спорту України. Окрім своєї
            спортивної кар`єри, Марина здобула освіту вчителя молодших класів і
            дефектолога, що допомагає їй ефективно працювати з дітьми, особливо
            з тими, хто має психофізичні вади.
          </DescriptionParagraph>

          <DescriptionParagraph>
            Наразі Марина продовжує свій професійний розвиток і навчається за
            спеціальністю &quot;Фізична культура і спорт&quot;. Її трудова
            діяльність як тренера триває вже 4 роки. Особливої уваги заслуговує
            її робота з дітьми з особливими потребами, а також з малюками віком
            від 4 років, яким вона допомагає знайти радість у спорті і фізичній
            активності.
          </DescriptionParagraph>
        </Drscription>
      </CoachItem>
    </CoachList>
  </StyledSection>
);
