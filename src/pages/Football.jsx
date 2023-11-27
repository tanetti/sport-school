import { useEffect } from 'react';
import { Slider } from '@/components/shared';
import { FOOTBALL_SLIDER_SETTINGS } from '@/constants';
import {
  FootballAdvantages,
  FootballTraining,
  FootballCoaches,
} from '@/components';

const Football = () => {
  useEffect(() => {
    document.title = 'ДЮСШ Слобожанське - Футбол';

    scroll({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Slider settings={FOOTBALL_SLIDER_SETTINGS} />

      <FootballAdvantages />

      <FootballTraining />

      <FootballCoaches />
    </>
  );
};

export default Football;
