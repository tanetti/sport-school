import Team480webp from '@/assets/team/480.webp';
import Team768webp from '@/assets/team/768.webp';
import Team960webp from '@/assets/team/960.webp';
import Team1440webp from '@/assets/team/1440.webp';
import Team1536webp from '@/assets/team/1536.webp';
import Team2304webp from '@/assets/team/2304.webp';
import Team2880webp from '@/assets/team/2880.webp';
import Team4320webp from '@/assets/team/4320.webp';

import Team480jpg from '@/assets/team/480.jpg';
import Team768jpg from '@/assets/team/768.jpg';
import Team960jpg from '@/assets/team/960.jpg';
import Team1440jpg from '@/assets/team/1440.jpg';
import Team1536jpg from '@/assets/team/1536.jpg';
import Team2304jpg from '@/assets/team/2304.jpg';
import Team2880jpg from '@/assets/team/2880.jpg';
import Team4320jpg from '@/assets/team/4320.jpg';

import { SectionsTitle, StyledSection } from '@/components/shared';
import {
  DescriptionItem,
  TeamDescriptionList,
  TeamImage,
} from './AboutTeam.styled';

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

    <picture data-aos="fade-up">
      <source
        type="image/webp"
        srcSet={`${Team480webp} 480w, ${Team768webp} 768w, ${Team960webp} 960w, ${Team1440webp} 1440w, ${Team1536webp} 1536w, ${Team2304webp} 2304w, ${Team2880webp} 2880w, ${Team4320webp} 4320w`}
        sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, (max-width: 960px) 960px, 1440px"
      />

      <source
        type="image/jpg"
        srcSet={`${Team480jpg} 480w, ${Team768jpg} 768w, ${Team960jpg} 960w, ${Team1440jpg} 1440w, ${Team1536jpg} 1536w, ${Team2304jpg} 2304w, ${Team2880jpg} 2880w, ${Team4320jpg} 4320w`}
        sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, (max-width: 960px) 960px, 1440px"
      />

      <TeamImage alt="Колектив на галявині напроти школи" src={Team1440jpg} />
    </picture>
  </StyledSection>
);
