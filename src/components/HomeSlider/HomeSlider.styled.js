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
  position: relative;

  width: 100%;
  aspect-ratio: 16/10;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${({ image }) =>
    `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)),url(${image})`};
`;

export const Motivation = styled.p`
  position: absolute;
  top: 45%;
  left: 3%;

  max-width: 40%;

  font-size: clamp(12px, 4vw, 43px);
  font-weight: 700;
  line-height: 1.6;

  color: #fff;

  & > span {
    display: block;

    font-size: clamp(10px, 3vw, 32px);
    font-weight: 400;
    line-height: 1.2;
  }
`;
