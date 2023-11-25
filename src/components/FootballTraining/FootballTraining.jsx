import ReactPlayer from 'react-player';
import { SectionsTitle, StyledSection } from '@/components/shared';

const origin = location?.origin || 'https://dyussh.dp.ua';

export const FootballTraining = () => (
  <StyledSection>
    <SectionsTitle data-aos="fade-up">Тренувальний процес</SectionsTitle>

    <ReactPlayer
      data-aos="fade-up"
      url="https://www.youtube.com/embed/0FqBY5wSvJI"
      muted={true}
      loop={true}
      config={{
        youtube: {
          playerVars: {
            hl: 'uk',
            rel: 0,
            autoplay: 1,
            origin,
          },
        },
      }}
    />
  </StyledSection>
);
