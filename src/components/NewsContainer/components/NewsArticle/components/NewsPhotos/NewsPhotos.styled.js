import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { createTransition } from '@/utilities';

export const StyledSwiper = styled(Swiper)`
  aspect-ratio: 16/10;

  & span.swiper-pagination-bullet {
    width: 10px;
    height: 10px;

    background-color: #fff;

    opacity: 0.3;

    transition: ${createTransition(
      ['background-color', 'opacity', 'transform'],
      'standart'
    )};

    &.swiper-pagination-bullet-active {
      background-color: #fa7734;

      opacity: 1;

      transform: scale(1.3);
    }

    &:hover {
      background-color: #fa5502;

      opacity: 1;
    }
  }
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${({ image }) => `url(${image})`};

  -webkit-tap-highlight-color: transparent;

  @media screen and (min-width: 960px) {
    cursor: pointer;
  }
`;
