import { useEffect } from 'react';
import { Slider } from '@/components/shared';
import { BoxAdvantages, BoxTraining } from '@/components';
import { BOX_SLIDER_SETTINGS } from '@/constants';

const Box = () => {
  useEffect(() => {
    document.title = 'ДЮСШ Слобожанське - Бокс';

    scroll({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Slider settings={BOX_SLIDER_SETTINGS} />

      <BoxAdvantages />

      <BoxTraining />
    </>
  );
};

export default Box;
