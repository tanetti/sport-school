import Coach01Webp480x1 from "@/assets/coaches/volleyball/01/480x1.webp";
import Coach01Jpg480x1 from "@/assets/coaches/volleyball/01/480x1.jpg";
import Coach02Webp480x1 from "@/assets/coaches/volleyball/02/480x1.webp";
import Coach02Jpg480x1 from "@/assets/coaches/volleyball/02/480x1.jpg";

import { SectionsTitle, StyledSection } from "@/components/shared";
import {
  CoachItem,
  CoachList,
  ItemImage,
  ItemInfo,
  Name,
  Drscription,
  DescriptionParagraph,
} from "@/components/shared";

export const VolleyballCoaches = () => (
  <StyledSection>
    <SectionsTitle data-aos="fade-up">Тренери</SectionsTitle>

    <CoachList>
      <CoachItem data-aos="fade-up-right">
        <div style={{ overflow: "hidden" }}>
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

      <CoachItem data-aos="fade-up-left">
        <div style={{ overflow: "hidden" }}>
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
          Тренер-викладач з волейболу
          <Name>Валентина Благовещенська</Name>
        </ItemInfo>

        <Drscription>
          <DescriptionParagraph>
            Благовещенська Валентина Валентинівна
          </DescriptionParagraph>

          <DescriptionParagraph>
            Валентина почала займатися волейболом ще з 8 класу, і відтоді цей
            вид спорту став невід’ємною частиною її життя. У 2009 році вона
            закінчила Дніпропетровський державний інститут фізичної культури і
            спорту, здобувши профільну педагогічну освіту.
          </DescriptionParagraph>

          <DescriptionParagraph>
            Під час навчання, проходячи практику в дитячому таборі, вона вперше
            відчула справжнє покликання працювати з дітьми — саме тоді з’явилося
            бажання стати тренером.
          </DescriptionParagraph>

          <DescriptionParagraph>
            Є призером всеукраїнських змагань серед ОТГ.
          </DescriptionParagraph>

          <DescriptionParagraph>
            У роботі з дітьми Валентину надихає можливість допомагати їм
            розкривати свій потенціал, розвивати дисципліну, впевненість у собі
            та вміння працювати в команді.
          </DescriptionParagraph>

          <DescriptionParagraph>
            Волейбол вона цінує за динаміку, командний дух і щирі емоції, які
            він дарує.
          </DescriptionParagraph>
        </Drscription>
      </CoachItem>
    </CoachList>
  </StyledSection>
);
