import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { createTransition } from '@/utilities';

export const SliderSection = styled.section`
  position: relative;

  box-shadow: 0px -9px 8px 13px rgba(36, 36, 36, 0.82);
`;

export const ActionButton = styled.button`
  position: absolute;
  bottom: 8%;
  left: 50%;
  z-index: 5;

  padding: 8px 16px 5px 16px;

  font-size: 16px;
  font-weight: 400;

  border-width: 1px;
  border-style: solid;
  border-color: #fa7734;
  border-radius: 8px;

  color: #fff;
  background-color: #00000090;

  backdrop-filter: blur(6px);

  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.8);

  transform: translateX(-50%);

  cursor: pointer;

  outline-offset: 6px;

  transition: ${createTransition(
    ['color', 'border-color', 'transform'],
    'standart'
  )};

  &:is(:hover, :focus) {
    color: #fa5502;

    border-color: #fa5502;

    transform: translateX(-50%) scale(1.1);
  }

  @media screen and (min-width: 768px) {
    bottom: 12%;

    padding: 10px 26px 7px 26px;

    font-size: 20px;

    border-radius: 10px;
  }

  @media screen and (min-width: 1440px) {
    padding: 14px 32px 10px 32px;

    font-size: 22px;

    border-radius: 14px;
  }
`;

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

    transition: ${createTransition(
      ['background-color', 'opacity', 'transform'],
      'standart'
    )};

    @media screen and (min-width: 768px) {
      display: inline-block;
    }

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
  position: relative;

  width: 100%;
  aspect-ratio: 16/10;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${({ image }) =>
    `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${image})`};

  & > article {
    opacity: 0;
    visibility: hidden;

    transform-origin: left;

    transition: ${createTransition(['visibility', 'opacity'], 'standart')};
  }

  &.swiper-slide-active > article {
    opacity: 1;
    visibility: visible;

    transition: ${createTransition(
      ['visibility', 'opacity'],
      'long',
      'standart'
    )};
  }
`;

export const Motivation = styled.article`
  position: absolute;
  top: 45%;
  left: 3%;

  max-width: 50%;

  font-size: clamp(10px, 3.6vw, 36px);
  font-weight: 700;
  line-height: 1.5;

  color: #fa7734;

  & > span {
    display: block;

    font-size: clamp(8px, 2.4vw, 26px);
    font-weight: 400;
    line-height: 1.15;

    color: #fff;
  }

  & > em {
    display: block;

    padding-top: 10px;

    font-size: clamp(7px, 2.2vw, 22px);
    font-weight: 700;
    line-height: 1.8;

    color: #bababa;
  }

  @media screen and (min-width: 1180px) {
    max-width: 40%;
  }

  @media screen and (min-width: 1440px) {
    max-width: 30%;
  }
`;
