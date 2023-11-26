import { useEffect } from 'react';
import { HomeSlider, AboutTeam, AboutAdministration } from '@/components';

const About = () => {
  useEffect(() => {
    document.title = 'ДЮСШ Слобожанське - Про нас';

    const heroRef = document.getElementById('hero');

    setTimeout(() => {
      if (heroRef?.clientHeight > 60) {
        scrollTo({ top: heroRef.clientHeight - 60, behavior: 'smooth' });
      } else {
        scroll({ top: 0, behavior: 'smooth' });
      }
    }, 10);
  }, []);

  return (
    <>
      <HomeSlider />

      <AboutTeam />

      <AboutAdministration />
    </>
  );
};

export default About;
