import { useEffect } from 'react';
import {
  FootballSlider,
  FootballAdvantages,
  FootballTraining,
  FootballTreiners,
} from '@/components';

export const Football = () => {
  useEffect(() => {
    document.title = 'ДЮСШ Слобожанське - Футбол';

    scroll({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <FootballSlider />

      <FootballAdvantages />

      <FootballTraining />

      <FootballTreiners />
    </>
  );
};
