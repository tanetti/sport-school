import { HomeSlider, HomeSections } from '@/components';
import { VisuallyHidden } from '@/components/shared';

export const Home = () => {
  return (
    <>
      <VisuallyHidden>
        <h1>
          Дитячо-юнацька спортивна школа Слобожанської селищної ради,
          Дніпропетровська область, Слобожанське, вулиця Спортивна 4
        </h1>
      </VisuallyHidden>

      <HomeSlider />

      <HomeSections />
    </>
  );
};
