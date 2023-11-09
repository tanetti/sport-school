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
import {
  Motivation,
  StyledSwiper,
  StyledSwiperSlide,
} from './HomeSlider.styled';

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
        <StyledSwiperSlide image={Slide01}>
          <Motivation>
            Перший слоган
            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptate repellat soluta et nobis! Iusto, mollitia aspernatur.
            </span>
          </Motivation>
        </StyledSwiperSlide>

        <StyledSwiperSlide image={Slide02}>
          <Motivation>
            Другий слоган
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              mollitia asperiores reiciendis quas error laudantium?
            </span>
          </Motivation>
        </StyledSwiperSlide>

        <StyledSwiperSlide image={Slide03}>
          <Motivation>
            Третій слоган
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
              corrupti doloremque beatae reprehenderit non saepe deserunt ipsum
              suscipit.
            </span>
          </Motivation>
        </StyledSwiperSlide>

        <StyledSwiperSlide image={Slide04}>
          <Motivation>
            Четвертий слоган
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem sapiente accusamus rem consequuntur.
            </span>
          </Motivation>
        </StyledSwiperSlide>

        <StyledSwiperSlide image={Slide05}>
          <Motivation>
            П&apos;ятий слоган
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              mollitia repellat id nulla repellendus error dignissimos provident
              accusamus cupiditate explicabo.
            </span>
          </Motivation>
        </StyledSwiperSlide>
      </StyledSwiper>
    </section>
  );
};
