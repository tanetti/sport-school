import { useContext } from 'react';
import { RequestModalContext } from '@/components';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import Slide01 from '@/assets/sliders/home/slide01.jpg';
import Slide02 from '@/assets/sliders/home/slide02.jpg';
import Slide03 from '@/assets/sliders/home/slide03.jpg';
import Slide04 from '@/assets/sliders/home/slide04.jpg';
import Slide05 from '@/assets/sliders/home/slide05.jpg';
import {
  ActionButton,
  Motivation,
  SliderSection,
  StyledSwiper,
  StyledSwiperSlide,
} from './HomeSlider.styled';

export const HomeSlider = () => {
  const { isRequestModalOpened, setIsRequestModalOpened } =
    useContext(RequestModalContext);

  return (
    <SliderSection id="hero">
      <ActionButton
        type="button"
        aria-expanded={isRequestModalOpened}
        aria-controls="request_modal"
        aria-haspopup="dialog"
        onClick={() => setIsRequestModalOpened(true)}
      >
        ЗАПИСАТИСЯ
      </ActionButton>

      <StyledSwiper
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        effect={'fade'}
        pagination={{
          clickable: true,
          renderBullet: (_, className) => {
            return '<span class="' + className + '"></span>';
          },
        }}
        modules={[EffectFade, Autoplay, Pagination]}
      >
        <StyledSwiperSlide image={Slide01}>
          <Motivation>
            Тріумф
            <span>
              не дарує справжньої сили,
              <br />
              її формує боротьба.
            </span>
            <em>&quot;Арнольд Шварценеггер&quot;</em>
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
            <em>&quot;Артур Еш&quot;</em>
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
            <em>&quot;Конор Макгрегор&quot;</em>
          </Motivation>
        </StyledSwiperSlide>

        <StyledSwiperSlide image={Slide04}>
          <Motivation>
            Тренуйся
            <span>
              з тими, хто сильніший. Не здавайся там, де здаються інші. І
              переможеш там, де перемогти не можна.
            </span>
            <em>&quot;Брюс Лі&quot;</em>
          </Motivation>
        </StyledSwiperSlide>

        <StyledSwiperSlide image={Slide05}>
          <Motivation>
            Успіх не випадковість.
            <span>
              Це важка праця, наполегливість, навчання, жертвопринесення і, перш
              за все, любов до того, що ви робите.
            </span>
            <em>&quot;Пеле&quot;</em>
          </Motivation>
        </StyledSwiperSlide>
      </StyledSwiper>
    </SliderSection>
  );
};
