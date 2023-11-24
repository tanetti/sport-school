import { useEffect } from 'react';
import { FootballSlider } from '@/components';

export const Football = () => {
  useEffect(() => {
    document.title = 'ДЮСШ Слобожанське - Футбол';

    scroll({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <FootballSlider />
    </>
  );
};
