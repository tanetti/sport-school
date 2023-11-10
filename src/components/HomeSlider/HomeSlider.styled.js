import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { TRANSITION_600_DURATION, TRANSITION_ANIMATION } from '@/constants';

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  max-height: 100dvh;
  margin: 0 auto;
  aspect-ratio: 16/10;

  & span.swiper-pagination-bullet {
    display: none;

    width: 14px;
    height: 14px;

    background-color: #fff;

    opacity: 0.3;

    transition: transform ${TRANSITION_600_DURATION} ${TRANSITION_ANIMATION},
      opacity ${TRANSITION_600_DURATION} ${TRANSITION_ANIMATION},
      background-color ${TRANSITION_600_DURATION} ${TRANSITION_ANIMATION};

    @media screen and (min-width: 768px) {
      display: inline-block;
    }

    &.swiper-pagination-bullet-active {
      background-color: #fa7734;

      opacity: 1;

      transform: scale(1.2);
    }
  }
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  position: relative;

  width: 100%;
  aspect-ratio: 16/10;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${({ image }) =>
    `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)),url(${image})`};
`;

export const Motivation = styled.article`
  position: absolute;
  top: 45%;
  left: 3%;

  max-width: 50%;

  font-size: clamp(10px, 3.6vw, 36px);
  font-weight: 700;
  line-height: 1.5;

  color: #fff;

  & > span {
    display: block;

    font-size: clamp(8px, 2.4vw, 26px);
    font-weight: 400;
    line-height: 1.15;
  }

  & > em {
    display: block;

    padding-top: 10px;

    font-size: clamp(7px, 2.2vw, 22px);
    font-weight: 700;
    line-height: 1.8;

    color: #ccc;
  }

  @media screen and (min-width: 1180px) {
    max-width: 40%;
  }

  @media screen and (min-width: 1440px) {
    max-width: 30%;
  }
`;
