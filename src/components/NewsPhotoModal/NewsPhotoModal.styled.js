import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { createTransition } from '@/utilities';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100dvh;

  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};

  background-color: #000000b0;

  backdrop-filter: blur(6px);

  transition: ${createTransition(['opacity', 'visibility'], 'standart')};
`;

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;

  & div.swiper-button-prev {
    color: #fa5502;

    transition: ${createTransition(['opacity', 'transform'], 'standart')};

    &:hover {
      transform: scale(1.2);
    }
  }

  & div.swiper-button-next {
    color: #fa5502;

    transition: ${createTransition(['opacity', 'transform'], 'standart')};

    &:hover {
      transform: scale(1.2);
    }
  }

  & span.swiper-pagination-bullet {
    width: 16px;
    height: 16px;

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
  display: flex;
  justify-content: center;
  align-items: center;

  width: 86vw;
  max-width: 1920px;

  opacity: 0;

  transform: scale(0);

  transition: ${createTransition(['opacity', 'transform'], 'long')};

  &.swiper-slide-active {
    opacity: 1;

    transform: scale(1);
  }
`;

export const Image = styled.img`
  display: block;

  width: 100%;
  max-width: fit-content;
  max-height: 86dvh;

  border-radius: 12px;

  object-fit: contain;

  cursor: grab;

  user-select: none;

  box-shadow: 5px 8px 14px 4px rgba(0, 0, 0, 0.7);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 30;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;

  border: none;

  color: #fff;
  background-color: transparent;

  cursor: pointer;

  transition: ${createTransition(['color', 'transform'], 'standart')};

  &:is(:hover, :focus) {
    color: #fa5502;

    transform: scale(1.2);
  }

  & > svg {
    width: 100%;
    height: 100%;

    fill: currentColor;
  }
`;
