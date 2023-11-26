import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { createTransition } from '@/utilities';

export const SectionsList = styled.ul`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 15px;

  container-type: size;

  height: calc((100vw - 20px) * 2);

  @media screen and (min-width: 480px) and (max-width: 767.98px) {
    width: 460px;
    height: 920px;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 10px;

    height: clamp(400px, 60dvh, 600px);
  }

  @media screen and (min-width: 1680px) {
    width: 1628px;
    margin: 0 auto;
  }
`;

export const SectionsItem = styled.li`
  position: relative;

  display: flex;
  flex-grow: 1;

  flex-basis: 0;

  font-size: 18px;
  font-weight: 700;

  color: #fff;
  background-color: #000;

  border-width: 1px;
  border-style: solid;
  border-color: #212121;
  border-radius: 8px;

  box-shadow: 0px 8px 10px -3px rgba(0, 0, 0, 0.5);

  overflow: hidden;

  transition: ${createTransition(['flex', 'font-size'], 'standart')};

  &:is(:hover, :focus-within) {
    flex-grow: 0;

    flex-basis: calc(100vw - 20px);

    font-size: 26px;

    color: #fa5505;

    & > span {
      transform: translateY(0);
    }

    & > div {
      background-color: transparent;
    }

    & p {
      flex-wrap: wrap;

      opacity: 1;

      transform: scale(1);

      transition: ${createTransition(
        ['opacity', 'transform'],
        'standart',
        'short'
      )};
    }
  }

  @media screen and (min-width: 480px) and (max-width: 767.98px) {
    &:is(:hover, :focus-within) {
      flex-basis: 460px;
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 10px;

    &:is(:hover, :focus-within) {
      flex-basis: 50cqh;

      font-size: 20px;
    }
  }

  @media screen and (min-width: 820px) {
    &:is(:hover, :focus-within) {
      flex-basis: 55cqh;
    }
  }

  @media screen and (min-width: 960px) {
    &:is(:hover, :focus-within) {
      font-size: 24px;

      flex-basis: 85cqh;
    }
  }

  @media screen and (min-width: 1100px) {
    font-size: 12px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1440px) {
    &:is(:hover, :focus-within) {
      flex-basis: 100cqh;

      font-size: 26px;
    }
  }

  @media screen and (min-width: 1680px) {
    font-size: 18px;
  }
`;

export const CardBackground = styled.span`
  position: absolute;
  top: 0;
  left: 0;

  display: block;

  width: 100%;
  min-height: 100%;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${({ imageJPG_360x1 }) => `url(${imageJPG_360x1})`};
  background-image: ${({ imageWEBP_360x1 }) => `url(${imageWEBP_360x1})`};

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: ${({ imageJPG_360x2 }) => `url(${imageJPG_360x2})`};
    background-image: ${({ imageWEBP_360x2 }) => `url(${imageWEBP_360x2})`};
  }

  @media (min-device-pixel-ratio: 3),
    (min-resolution: 288dpi),
    (min-resolution: 3dppx) {
    background-image: ${({ imageJPG_360x3 }) => `url(${imageJPG_360x3})`};
    background-image: ${({ imageWEBP_360x3 }) => `url(${imageWEBP_360x3})`};
  }

  @media screen and (max-width: 479.98px) {
    height: calc(100vw - 20px);
  }

  @media screen and (min-width: 480px) and (max-width: 767.98px) {
    height: 460px;
  }

  @media screen and (max-width: 767.98px) {
    transform: translateY(-10%);

    transition: ${createTransition('transform', 'standart')};
  }

  @media screen and (min-width: 360px) {
    background-image: ${({ imageJPG_420x1 }) => `url(${imageJPG_420x1})`};
    background-image: ${({ imageWEBP_420x1 }) => `url(${imageWEBP_420x1})`};

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: ${({ imageJPG_420x2 }) => `url(${imageJPG_420x2})`};
      background-image: ${({ imageWEBP_420x2 }) => `url(${imageWEBP_420x2})`};
    }

    @media (min-device-pixel-ratio: 3),
      (min-resolution: 288dpi),
      (min-resolution: 3dppx) {
      background-image: ${({ imageJPG_420x3 }) => `url(${imageJPG_420x3})`};
      background-image: ${({ imageWEBP_420x3 }) => `url(${imageWEBP_420x3})`};
    }
  }

  @media screen and (min-width: 420px) {
    background-image: ${({ imageJPG_768x1 }) => `url(${imageJPG_768x1})`};
    background-image: ${({ imageWEBP_768x1 }) => `url(${imageWEBP_768x1})`};

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: ${({ imageJPG_768x2 }) => `url(${imageJPG_768x2})`};
      background-image: ${({ imageWEBP_768x2 }) => `url(${imageWEBP_768x2})`};
    }

    @media (min-device-pixel-ratio: 3),
      (min-resolution: 288dpi),
      (min-resolution: 3dppx) {
      background-image: ${({ imageJPG_768x3 }) => `url(${imageJPG_768x3})`};
      background-image: ${({ imageWEBP_768x3 }) => `url(${imageWEBP_768x3})`};
    }
  }
`;

export const CardInfoBox = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;

  padding: 10px;

  background-color: #00000070;

  overflow: hidden;

  transition: ${createTransition('background-color', 'standart')};
`;

export const CardTitle = styled.h3`
  font-size: inherit;
  font-weight: inherit;
`;

export const CartBottomBox = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 10px;

  padding: 3px;

  opacity: 0;

  transform: scale(0);

  transition: ${createTransition(['opacity', 'transform'], 'standart')};
`;

export const CardAge = styled.span`
  font-size: 22px;
  font-weight: 700;

  color: #fff;

  transform: translateY(5px);

  white-space: nowrap;

  & > span {
    font-size: 18px;
    font-weight: 400;
  }

  @media screen and (min-width: 1280px) {
    font-size: 28px;

    & > span {
      font-size: 20px;
    }
  }
`;

export const CardLink = styled(Link)`
  display: block;

  padding: 8px 16px 5px 16px;

  font-size: 14px;
  font-weight: 400;

  border-width: 1px;
  border-style: solid;
  border-color: #fa7734;
  border-radius: 6px;

  color: #fff;
  background-color: #00000090;

  backdrop-filter: blur(6px);

  box-shadow: 0px 8px 10px -3px rgba(0, 0, 0, 0.6);

  transform-origin: right;

  cursor: pointer;

  outline-offset: 4px;

  transition: ${createTransition(
    ['color', 'border-color', 'background-color', 'transform'],
    'standart'
  )};

  &:is(:hover, :focus) {
    color: #fa7734;
    background-color: #000000c0;

    border-color: #fa5502;

    transform: scale(1.1);
  }

  @media screen and (min-width: 360px) {
    font-size: 16px;
  }

  @media screen and (min-width: 480px) {
    font-size: 18px;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 960px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 18px;

    padding: 9px 16px 7px 16px;
  }
`;
