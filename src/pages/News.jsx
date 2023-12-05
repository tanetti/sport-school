import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Slider } from '@/components/shared';
import { NewsSection } from '@/components';
import { SECTIONS, HOME_SLIDER_SETTINGS } from '@/constants';
import { setPageTags } from '@/utilities';

const News = () => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const sectionFilter = searchParams.get('section');

    const sectionLabel = SECTIONS.find(
      ({ name }) => name === sectionFilter
    )?.label;

    setPageTags(sectionLabel);
  }, [searchParams]);

  useEffect(() => {
    const heroRef = document.getElementById('hero');

    setTimeout(() => {
      if (heroRef?.clientHeight > 60) {
        scroll({ top: heroRef.clientHeight - 60, behavior: 'smooth' });
      } else {
        scroll({ top: 0, behavior: 'smooth' });
      }
    }, 10);
  }, []);

  return (
    <>
      <Slider settings={HOME_SLIDER_SETTINGS} />

      <NewsSection />
    </>
  );
};

export default News;
