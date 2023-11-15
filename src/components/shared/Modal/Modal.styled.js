import styled from '@emotion/styled';
import BackgroundPNGx1 from '@/assets/modal/x1.png';
import BackgroundPNGx2 from '@/assets/modal/x2.png';
import BackgroundPNGx3 from '@/assets/modal/x3.png';

import BackgroundWEBPx1 from '@/assets/modal/x1.webp';
import BackgroundWEBPx2 from '@/assets/modal/x2.webp';
import BackgroundWEBPx3 from '@/assets/modal/x3.webp';
import { createTransition } from '@/utilities';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100dvh;

  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};

  background-color: #000000b0;

  transition: ${createTransition(['opacity', 'visibility'], 'standart')};

  @media screen and (min-width: 960px) {
    backdrop-filter: blur(6px);
  }
`;

export const Window = styled.div`
  position: relative;

  width: calc(100% - 30px);
  max-height: calc(100dvh - 30px);
  padding: 10px;

  background-color: #fff;

  border-radius: 8px;

  overflow: hidden;

  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};

  transform: ${({ isVisible }) => (isVisible ? 'scale(1)' : 'scale(1.5)')};

  background-size: 80px;
  background-repeat: no-repeat;
  background-image: ${`url(${BackgroundPNGx1})`};
  background-image: ${`url(${BackgroundWEBPx1})`};

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: ${`url(${BackgroundPNGx2})`};
    background-image: ${`url(${BackgroundWEBPx2})`};
  }

  @media (min-device-pixel-ratio: 3),
    (min-resolution: 288dpi),
    (min-resolution: 3dppx) {
    background-image: ${`url(${BackgroundPNGx3})`};
    background-image: ${`url(${BackgroundWEBPx3})`};
  }

  box-shadow: 0px 10px 14px -3px rgba(0, 0, 0, 0.8);

  transition: ${createTransition(['transform', 'opacity'], 'standart')};

  @media screen and (min-width: 360px) {
    background-size: 90px;
  }

  @media screen and (min-width: 480px) {
    width: 460px;
    max-height: calc(100dvh - 60px);

    background-size: 100px;
  }

  @media screen and (min-width: 768px) {
    width: 520px;
    max-height: calc(100dvh - 80px);

    padding: 15px;
  }
`;

export const Title = styled.h3`
  margin-bottom: 15px;
  padding: 0 40px;

  font-size: 20px;
  font-weight: 700;

  color: #fa5502;

  text-align: center;
  text-transform: uppercase;

  @media screen and (min-width: 480px) {
    margin-bottom: 20px;

    font-size: 22px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 30px;

  border: none;

  color: #949494;
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
