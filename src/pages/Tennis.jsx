import { useEffect } from 'react';
import { Slider } from '@/components/shared';
import { TENNIS_SLIDER_SETTINGS } from '@/constants';
import { TennisAdvantages, TennisTraining, TennisCoaches } from '@/components';

const Tennis = () => {
  useEffect(() => {
    document.title = 'ДЮСШ Слобожанське - Теніс настільний';

    scroll({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Slider settings={TENNIS_SLIDER_SETTINGS} />

      <TennisAdvantages />

      <TennisTraining />

      <TennisCoaches />
    </>
  );
};

export default Tennis;
