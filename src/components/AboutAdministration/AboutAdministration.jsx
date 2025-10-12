import DirWebp from "@/assets/dir/dir.webp";
import DirJpg from "@/assets/dir/dir.jpg";

import ZamlWebp from "@/assets/zaml/zaml.webp";
import ZamlJpg from "@/assets/zaml/zaml.jpg";

import ZamWebp from "@/assets/zam/zam.webp";
import ZamJpg from "@/assets/zam/zam.jpg";

import BuhWebp from "@/assets/buh/buh.webp";
import BuhJpg from "@/assets/buh/buh.jpg";

import { SectionsTitle, StyledSection } from "@/components/shared";
import {
  AdminItem,
  AdminList,
  ItemImage,
  ItemInfo,
  Name,
} from "./AboutAdministration.styled";

export const AboutAdministration = () => (
  <StyledSection>
    <SectionsTitle data-aos="fade-up">Адміністрація</SectionsTitle>

    <AdminList>
      <AdminItem data-aos="fade-up-right">
        <div style={{ overflow: "hidden" }}>
          <picture>
            <source
              type="image/webp"
              srcSet={`${DirWebp} 622w`}
              sizes="622px"
            />

            <source type="image/jpg" srcSet={`${DirJpg} 622w`} sizes="622px" />

            <ItemImage alt="Директор в кабінеті" loading="lazy" src={DirJpg} />
          </picture>
        </div>

        <ItemInfo>
          Директор
          <br />
          &nbsp;
          <Name>Володимир Дейнеко</Name>
        </ItemInfo>
      </AdminItem>

      <AdminItem data-aos="fade-up-left">
        <div style={{ overflow: "hidden" }}>
          <picture>
            <source
              type="image/webp"
              srcSet={`${ZamlWebp} 622w`}
              sizes="622px"
            />

            <source type="image/jpg" srcSet={`${ZamlJpg} 622w`} sizes="622px" />

            <ItemImage
              alt="Заступник директора в кабінеті"
              loading="lazy"
              src={ZamlJpg}
            />
          </picture>
        </div>

        <ItemInfo>
          Заступник директора
          <br />з адміністративно-господарської роботи
          <Name>Людмила Вульферт</Name>
        </ItemInfo>
      </AdminItem>

      <AdminItem data-aos="fade-up-right">
        <div style={{ overflow: "hidden" }}>
          <picture>
            <source
              type="image/webp"
              srcSet={`${ZamWebp} 622w`}
              sizes="622px"
            />

            <source type="image/jpg" srcSet={`${ZamJpg} 622w`} sizes="622px" />

            <ItemImage
              alt="Заступник директора в кабінеті"
              loading="lazy"
              src={ZamJpg}
            />
          </picture>
        </div>

        <ItemInfo>
          Заступник директора
          <br />з навчально-тренувальної роботи
          <Name>Тетяна Колкотіна</Name>
        </ItemInfo>
      </AdminItem>

      <AdminItem data-aos="fade-up-left">
        <div style={{ overflow: "hidden" }}>
          <picture>
            <source
              type="image/webp"
              srcSet={`${BuhWebp} 622w`}
              sizes="622px"
            />

            <source type="image/jpg" srcSet={`${BuhJpg} 622w`} sizes="622px" />

            <ItemImage
              alt="Головний бухгалтер в кабінеті"
              loading="lazy"
              src={BuhJpg}
            />
          </picture>
        </div>

        <ItemInfo>
          Головний бухгалтер
          <br />
          &nbsp;
          <Name>Вікторія Артеменко</Name>
        </ItemInfo>
      </AdminItem>
    </AdminList>
  </StyledSection>
);
