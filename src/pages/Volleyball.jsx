import { useEffect } from 'react';
import { Slider } from '@/components/shared';
import { VOLLEYBALL_SLIDER_SETTINGS } from '@/constants';
import {
  VolleyballAdvantages,
  VolleyballTraining,
  VolleyballCoaches,
} from '@/components';

const Volleyball = () => {
  useEffect(() => {
    document.title = 'ДЮСШ Слобожанське - Волейбол';

    scroll({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Slider settings={VOLLEYBALL_SLIDER_SETTINGS} />

      <VolleyballAdvantages />

      <VolleyballTraining />

      <VolleyballCoaches />
    </>
  );
};

export default Volleyball;
