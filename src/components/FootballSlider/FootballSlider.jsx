import { useState } from 'react';
import { RequestModal } from '@/components';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import {
  SLIDE_01_IMAGES,
  SLIDE_02_IMAGES,
  SLIDE_03_IMAGES,
  SLIDE_04_IMAGES,
  SLIDE_05_IMAGES,
} from './constants';
import {
  ActionButton,
  Motivation,
  SliderSection,
  StyledSwiper,
  StyledSwiperSlide,
} from './FootballSlider.styled';

export const FootballSlider = () => {
  const [isRequestModalOpened, setIsRequestModalOpened] = useState(false);

  return (
    <SliderSection>
      <ActionButton
        type="button"
        aria-expanded={isRequestModalOpened}
        aria-controls="football_request_modal"
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
        <StyledSwiperSlide images={SLIDE_01_IMAGES}>
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

        <StyledSwiperSlide images={SLIDE_02_IMAGES}>
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

        <StyledSwiperSlide images={SLIDE_03_IMAGES}>
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

        <StyledSwiperSlide images={SLIDE_04_IMAGES}>
          <Motivation>
            Тренуйся
            <span>
              з тими, хто сильніший. Не здавайся там, де здаються інші. І
              переможеш там, де перемогти не можна.
            </span>
            <em>&quot;Брюс Лі&quot;</em>
          </Motivation>
        </StyledSwiperSlide>

        <StyledSwiperSlide images={SLIDE_05_IMAGES}>
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

      <RequestModal
        idControls="football_request_modal"
        defaultSection="football"
        isOpened={isRequestModalOpened}
        closeModal={() => setIsRequestModalOpened(false)}
      />
    </SliderSection>
  );
};
