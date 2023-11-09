import { Swiper, SwiperSlide } from 'swiper/react';
import styled from '@emotion/styled';

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  max-height: 100dvh;
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

export const Motivation = styled.article`
  position: absolute;
  top: 45%;
  left: 3%;

  max-width: 40%;

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

  @media screen and (min-width: 1440px) {
    max-width: 30%;
  }
`;
