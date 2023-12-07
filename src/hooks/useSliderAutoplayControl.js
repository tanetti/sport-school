import { useCallback, useEffect } from 'react';

const BODY_ELEMENT = document.getElementsByTagName('body')[0];

const OBSERVER_CONFIG = { attributeFilter: ['class'], characterData: false };

export const useSliderAutoplayControl = targetSlider => {
  const sliderAutoplay = targetSlider?.current?.swiper?.autoplay;

  const observerCallback = useCallback(
    mutationList => {
      if (!sliderAutoplay) return;

      const [mutation] = mutationList;

      if (mutation.target.classList.contains('modal')) {
        sliderAutoplay.pause();
      } else {
        sliderAutoplay.resume();
      }
    },
    [sliderAutoplay]
  );

  useEffect(() => {
    const observer = new MutationObserver(observerCallback);

    observer.observe(BODY_ELEMENT, OBSERVER_CONFIG);

    return () => observer.disconnect();
  }, [observerCallback]);
};
