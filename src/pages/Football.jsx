import { useEffect } from 'react';
import { Slider } from '@/components/shared';
import { FOOTBALL_SLIDER_SETTINGS } from '@/constants';
import {
  FootballAdvantages,
  FootballTraining,
  FootballCoaches,
} from '@/components';
import { setPageTags } from '@/utilities';

const Football = () => {
  useEffect(() => {
    setPageTags();

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
