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
    <section style={{ boxShadow: '0px -9px 8px 13px rgba(36,36,36,0.82)' }}>
      <StyledSwiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect={'fade'}
        modules={[EffectFade, Autoplay]}
      >
        <StyledSwiperSlide image={Slide01}>
          <Motivation>
            Тріумф
            <span>
              не дарує справжньої сили,
              <br />
              її формує боротьба.
            </span>
            <em>Арнольд Шварценеггер</em>
          </Motivation>
        </StyledSwiperSlide>

        <StyledSwiperSlide image={Slide02}>
          <Motivation>
            Почніть
            <span>
              звідти, де ви зараз перебуваєте.
              <br />
              Використовуйте те, що у вас є, і робіть усе, що можете.
            </span>
            <em>Артур Еш</em>
          </Motivation>
        </StyledSwiperSlide>

        <StyledSwiperSlide image={Slide03}>
          <Motivation>
            Ви можете
            <span>
              бути ким завгодно, якщо ви
              <br />
              приділите цьому час.
            </span>
            <em>Конор Макгрегор</em>
          </Motivation>
        </StyledSwiperSlide>

        <StyledSwiperSlide image={Slide04}>
          <Motivation>
            Тренуйся
            <span>
              з тими, хто сильніший. Не здавайся там, де здаються інші. І
              переможеш там, де перемогти не можна.
            </span>
            <em>Брюс Лі</em>
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
