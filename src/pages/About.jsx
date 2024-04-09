import { useEffect } from 'react';
import { Slider } from '@/components/shared';
import { AboutTeam, AboutAdministration, AboutDocs } from '@/components';
import { HOME_SLIDER_SETTINGS } from '@/constants';
import { setPageTags } from '@/utilities';

const About = () => {
  useEffect(() => {
    setPageTags();

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

      <AboutTeam />

      <AboutAdministration />

      <AboutDocs />
    </>
  );
};

export default About;
