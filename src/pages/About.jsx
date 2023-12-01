import { useEffect } from 'react';
import { Slider } from '@/components/shared';
import { AboutTeam, AboutAdministration } from '@/components';
import { HOME_SLIDER_SETTINGS } from '@/constants';

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
      <Slider settings={HOME_SLIDER_SETTINGS} />

      <AboutTeam />

      <AboutAdministration />
    </>
  );
};

export default About;
