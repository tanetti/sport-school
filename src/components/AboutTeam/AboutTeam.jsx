import Team_01_480webp from "@/assets/team/01/480.webp";
import Team_01_768webp from "@/assets/team/01/768.webp";
import Team_01_960webp from "@/assets/team/01/960.webp";
import Team_01_1440webp from "@/assets/team/01/1440.webp";
import Team_01_1536webp from "@/assets/team/01/1536.webp";
import Team_01_2304webp from "@/assets/team/01/2304.webp";
import Team_01_2880webp from "@/assets/team/01/2880.webp";
import Team_01_4320webp from "@/assets/team/01/4320.webp";

import Team_01_480jpg from "@/assets/team/01/480.jpg";
import Team_01_768jpg from "@/assets/team/01/768.jpg";
import Team_01_960jpg from "@/assets/team/01/960.jpg";
import Team_01_1440jpg from "@/assets/team/01/1440.jpg";
import Team_01_1536jpg from "@/assets/team/01/1536.jpg";
import Team_01_2304jpg from "@/assets/team/01/2304.jpg";
import Team_01_2880jpg from "@/assets/team/01/2880.jpg";
import Team_01_4320jpg from "@/assets/team/01/4320.jpg";

import Team_02_480webp from "@/assets/team/02/480.webp";
import Team_02_768webp from "@/assets/team/02/768.webp";
import Team_02_960webp from "@/assets/team/02/960.webp";
import Team_02_1440webp from "@/assets/team/02/1440.webp";
import Team_02_1536webp from "@/assets/team/02/1536.webp";
import Team_02_2304webp from "@/assets/team/02/2304.webp";
import Team_02_2880webp from "@/assets/team/02/2880.webp";
import Team_02_4320webp from "@/assets/team/02/4320.webp";

import Team_02_480jpg from "@/assets/team/02/480.jpg";
import Team_02_768jpg from "@/assets/team/02/768.jpg";
import Team_02_960jpg from "@/assets/team/02/960.jpg";
import Team_02_1440jpg from "@/assets/team/02/1440.jpg";
import Team_02_1536jpg from "@/assets/team/02/1536.jpg";
import Team_02_2304jpg from "@/assets/team/02/2304.jpg";
import Team_02_2880jpg from "@/assets/team/02/2880.jpg";
import Team_02_4320jpg from "@/assets/team/02/4320.jpg";

import { SectionsTitle, StyledSection } from "@/components/shared";
import {
  DescriptionItem,
  TeamDescriptionList,
  TeamImage,
  TeamImageAnimated,
  TeamImageArea,
} from "./AboutTeam.styled";

export const AboutTeam = () => (
  <StyledSection>
    <SectionsTitle data-aos="fade-up">Чому саме наша школа?</SectionsTitle>

    <TeamDescriptionList>
      <DescriptionItem data-aos="fade-up">
        <em>
          Наші двері завжди відчинені для активних, цілеспрямованих, бажаючих
          розвитку у спорті дітей!
        </em>
      </DescriptionItem>

      <DescriptionItem data-aos="fade-up">
        <span>
          Наша команда це висококваліфіковані спеціалісти своєї справи, які
          йдуть у ногу з часом та націлені на високий результат, прагнуть
          вдосконалення від себе та своїх вихованців.
        </span>
      </DescriptionItem>

      <DescriptionItem data-aos="fade-up">
        <span>
          Наша спортивна школа відкрита Слобожанською громадою, де насамперед
          цінують та підтримують здоровий дух дітей. Школа має сучасну спортивну
          базу яка постійно удосконалюється та має сучасний інвентар.
        </span>
      </DescriptionItem>
    </TeamDescriptionList>

    <TeamImageArea data-aos="fade-up">
      <picture>
        <source
          type="image/webp"
          srcSet={`${Team_01_480webp} 480w, ${Team_01_768webp} 768w, ${Team_01_960webp} 960w, ${Team_01_1440webp} 1440w, ${Team_01_1536webp} 1536w, ${Team_01_2304webp} 2304w, ${Team_01_2880webp} 2880w, ${Team_01_4320webp} 4320w`}
          sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, (max-width: 960px) 960px, 1440px"
        />

        <source
          type="image/jpg"
          srcSet={`${Team_01_480jpg} 480w, ${Team_01_768jpg} 768w, ${Team_01_960jpg} 960w, ${Team_01_1440jpg} 1440w, ${Team_01_1536jpg} 1536w, ${Team_01_2304jpg} 2304w, ${Team_01_2880jpg} 2880w, ${Team_01_4320jpg} 4320w`}
          sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, (max-width: 960px) 960px, 1440px"
        />

        <TeamImage alt="Колектив на вході в школу" src={Team_01_1440jpg} />
      </picture>

      <picture>
        <source
          type="image/webp"
          srcSet={`${Team_02_480webp} 480w, ${Team_02_768webp} 768w, ${Team_02_960webp} 960w, ${Team_02_1440webp} 1440w, ${Team_02_1536webp} 1536w, ${Team_02_2304webp} 2304w, ${Team_02_2880webp} 2880w, ${Team_02_4320webp} 4320w`}
          sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, (max-width: 960px) 960px, 1440px"
        />

        <source
          type="image/jpg"
          srcSet={`${Team_02_480jpg} 480w, ${Team_02_768jpg} 768w, ${Team_02_960jpg} 960w, ${Team_02_1440jpg} 1440w, ${Team_02_1536jpg} 1536w, ${Team_02_2304jpg} 2304w, ${Team_02_2880jpg} 2880w, ${Team_02_4320jpg} 4320w`}
          sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, (max-width: 960px) 960px, 1440px"
        />

        <TeamImageAnimated
          alt="Колектив на галявині напроти школи"
          src={Team_02_1440jpg}
        />
      </picture>
    </TeamImageArea>
  </StyledSection>
);
