import { useEffect } from 'react';
import { Slider } from '@/components/shared';
import { HOME_SLIDER_SETTINGS } from '@/constants';

const About = () => {
  useEffect(() => {
    document.title = 'ДЮСШ Слобожанське - Новини';

    const heroRef = document.getElementById('hero');

    setTimeout(() => {
      if (heroRef?.clientHeight > 60) {
        scroll({ top: heroRef.clientHeight - 60, behavior: 'smooth' });
      } else {
        scroll({ top: 0, behavior: 'smooth' });
      }
    }, 10);
  }, []);

  return (
    <>
      <Slider settings={HOME_SLIDER_SETTINGS} />
    </>
  );
};

export default About;
