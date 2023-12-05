import { useEffect } from 'react';
import { Slider } from '@/components/shared';
import { HomeSections } from '@/components';
import { HOME_SLIDER_SETTINGS } from '@/constants';

const Home = () => {
  useEffect(() => {
    document.title = 'ДЮСШ Слобожанське - Головна';

    // const ogTitleMeta = document.querySelector('meta[property="og:title"]');
    // if (ogTitleMeta) {
    //   ogTitleMeta.setAttribute('content', 'ДЮСШ Слобожанське - Головна22');
    // }

    // console.log(location);

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
