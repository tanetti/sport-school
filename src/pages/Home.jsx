import { useEffect } from 'react';
import { Slider } from '@/components/shared';
import { HomeSections } from '@/components';
import { HOME_SLIDER_SETTINGS } from '@/constants';
import { setPageTags } from '@/utilities';

const Home = () => {
  useEffect(() => {
    setPageTags();

    scroll({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <h1 className="visually_hidden">
        Дитячо-юнацька спортивна школа Слобожанської селищної ради,
        Дніпропетровська область, Слобожанське, вулиця Спортивна 4
      </h1>

      <Slider settings={HOME_SLIDER_SETTINGS} />

      <HomeSections />
    </>
  );
};

export default Home;
