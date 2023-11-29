import { useEffect } from 'react';
import { Slider } from '@/components/shared';
import { TENNIS_SLIDER_SETTINGS } from '@/constants';

const Tennis = () => {
  useEffect(() => {
    document.title = 'ДЮСШ Слобожанське - Теніс';

    scroll({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Slider settings={TENNIS_SLIDER_SETTINGS} />
    </>
  );
};

export default Tennis;
