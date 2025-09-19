import Coach01Webp480x1 from "@/assets/coaches/box/01/480x1.webp";
import Coach01Jpg480x1 from "@/assets/coaches/box/01/480x1.jpg";

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

export const BoxCoaches = () => (
  <StyledSection>
    <SectionsTitle data-aos="fade-up">Тренери</SectionsTitle>

    <CoachList>
      <CoachItem data-aos="fade-up">
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
          Тренер-викладач з боксу
          <Name>Сергій Меркотун</Name>
        </ItemInfo>

        <Drscription>
          <DescriptionParagraph>
            Меркотун Сергій Вікторович - майстер спорту України, учасник
            міжнародних турнірів, призер всеукраїнських змагань.
          </DescriptionParagraph>

          <DescriptionParagraph>
            У 2011 році закінчив із відзнакою Дніпропетровський інститут
            фізичної культури та спорту.
          </DescriptionParagraph>

          <DescriptionParagraph>
            Боксом займається з дитинства, а вже у 8 класі усвідомив, що хоче
            пов’язати своє життя з цим видом спорту на професійному рівні.
          </DescriptionParagraph>
        </Drscription>
      </CoachItem>
    </CoachList>
  </StyledSection>
);
