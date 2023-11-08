import { Swiper, SwiperSlide } from 'swiper/react';
import styled from '@emotion/styled';
import { MAX_PAGE_WIDTH } from '@/constants';

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  max-width: ${MAX_PAGE_WIDTH}px;
  margin: 0 auto;
  aspect-ratio: 16/10;
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  width: 100%;
  aspect-ratio: 16/10;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${({ image }) =>
    `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${image})`};
`;
