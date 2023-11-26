import { useContext } from 'react';
import { RequestModalContext } from '@/components';
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
  const { isRequestModalOpened, setIsRequestModalOpened } =
    useContext(RequestModalContext);

  return (
    <SliderSection>
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
        <StyledSwiperSlide images={SLIDE_01_IMAGES}>
          <Motivation>
            Футбол
            <span>
              це не питання життя і смерті.
              <br />
              Він набагато важливіший.
            </span>
            <em>&quot;Білл Шенклі&quot;</em>
          </Motivation>
        </StyledSwiperSlide>

        <StyledSwiperSlide images={SLIDE_02_IMAGES}>
          <Motivation>
            Футбол
            <span>
              це командний вид спорту.
              <br />
              Індивідуальні нагороди виграються завдяки командній роботі.
            </span>
            <em>&quot;Пеле&quot;</em>
          </Motivation>
        </StyledSwiperSlide>

        <StyledSwiperSlide images={SLIDE_03_IMAGES}>
          <Motivation>
            Футбол
            <span>
              простий, але набагато складніше
              <br />
              грати в простий футбол.
            </span>
            <em>&quot;Йоган Кройф&quot;</em>
          </Motivation>
        </StyledSwiperSlide>

        <StyledSwiperSlide images={SLIDE_04_IMAGES}>
          <Motivation>
            Футбол
            <span>
              складається з перемог і поразок,
              <br />
              головне - не зупинятися через труднощі.
            </span>
            <em>&quot;Неймар&quot;</em>
          </Motivation>
        </StyledSwiperSlide>

        <StyledSwiperSlide images={SLIDE_05_IMAGES}>
          <Motivation>
            Ви повинні
            <span>
              боротися, щоб досягти своєї мрії.
              <br />
              Ви повинні жертвувати і працювати заради цього.
            </span>
            <em>&quot;Ліонель Мессі&quot;</em>
          </Motivation>
        </StyledSwiperSlide>
      </StyledSwiper>
    </SliderSection>
  );
};
