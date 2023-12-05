import { useEffect } from 'react';
import { Slider } from '@/components/shared';
import { SwimmingAdvantages, SwimmingTraining } from '@/components';
import { SWIMMING_SLIDER_SETTINGS } from '@/constants';
import { setPageTags } from '@/utilities';

const Swimming = () => {
  useEffect(() => {
    setPageTags();

    scroll({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Slider settings={SWIMMING_SLIDER_SETTINGS} />

      <SwimmingAdvantages />

      <SwimmingTraining />
    </>
  );
};

export default Swimming;
