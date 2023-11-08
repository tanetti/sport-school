import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Slide01 from '@/assets/sliders/home/slide01.jpg';
import Slide02 from '@/assets/sliders/home/slide02.jpg';
import Slide03 from '@/assets/sliders/home/slide03.jpg';
import Slide04 from '@/assets/sliders/home/slide04.jpg';
import Slide05 from '@/assets/sliders/home/slide05.jpg';
import { StyledSwiper, StyledSwiperSlide } from './HomeSlider.styled';

export const HomeSlider = () => {
  return (
    <section>
      <StyledSwiper
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        effect={'fade'}
        modules={[EffectFade, Autoplay]}
      >
        <StyledSwiperSlide image={Slide01}></StyledSwiperSlide>

        <StyledSwiperSlide image={Slide02}></StyledSwiperSlide>

        <StyledSwiperSlide image={Slide03}></StyledSwiperSlide>

        <StyledSwiperSlide image={Slide04}></StyledSwiperSlide>

        <StyledSwiperSlide image={Slide05}></StyledSwiperSlide>
      </StyledSwiper>
    </section>
  );
};
