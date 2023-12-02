import PropTypes from 'prop-types';
import { useContext } from 'react';
import parse from 'html-react-parser';
import { RequestModalContext } from '@/utilities';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import {
  ActionButton,
  Motivation,
  SliderSection,
  StyledSwiper,
  StyledSwiperSlide,
} from './Slider.styled';

export const Slider = ({ settings }) => {
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
        {settings.map(
          ({ id, motivation: { accent, body, author }, images, vAlign }) => (
            <StyledSwiperSlide key={id} images={images} valign={vAlign}>
              <Motivation>
                {accent}
                <span>{parse(body)}</span>
                <em>{author}</em>
              </Motivation>
            </StyledSwiperSlide>
          )
        )}
      </StyledSwiper>
    </SliderSection>
  );
};

Slider.propTypes = { settings: PropTypes.array.isRequired };
