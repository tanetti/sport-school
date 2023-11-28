import { useEffect } from 'react';
import { Slider } from '@/components/shared';
import { CLIMBING_SLIDER_SETTINGS } from '@/constants';

const Climbing = () => {
  useEffect(() => {
    document.title = 'ДЮСШ Слобожанське - Скелелазіння';

    scroll({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Slider settings={CLIMBING_SLIDER_SETTINGS} />
    </>
  );
};

export default Climbing;
