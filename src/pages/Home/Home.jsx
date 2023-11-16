import { HomeSlider, HomeSections } from '@/components';

export const Home = () => {
  return (
    <>
      <h1 className="visually_hidden">
        Дитячо-юнацька спортивна школа Слобожанської селищної ради,
        Дніпропетровська область, Слобожанське, вулиця Спортивна 4
      </h1>

      <HomeSlider />

      <HomeSections />
    </>
  );
};
