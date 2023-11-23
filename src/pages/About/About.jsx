import { useEffect } from 'react';
import { HomeSlider, AboutTeam, AboutAdministration } from '@/components';

export const About = () => {
  useEffect(() => {
    document.title = 'ДЮСШ Слобожанське - Про нас';

    scroll({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <HomeSlider />

      <AboutTeam />

      <AboutAdministration />
    </>
  );
};
