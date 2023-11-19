import styled from '@emotion/styled';
import { createTransition } from '@/utilities';

import BackgroundPNGx1 from '@/assets/modal/x1.png';
import BackgroundPNGx2 from '@/assets/modal/x2.png';
import BackgroundPNGx3 from '@/assets/modal/x3.png';

import BackgroundWEBPx1 from '@/assets/modal/x1.webp';
import BackgroundWEBPx2 from '@/assets/modal/x2.webp';
import BackgroundWEBPx3 from '@/assets/modal/x3.webp';

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

  transition: ${createTransition(['opacity', 'visibility'], 'standart')};

  @media screen and (min-width: 960px) {
    backdrop-filter: blur(6px);
  }
`;

export const Window = styled.div`
  position: relative;

  display: flex;

  width: calc(100% - 30px);
  max-height: calc(100dvh - 30px);
  padding: 12px 4px 0 12px;

  background-color: #fff;

  border-radius: 8px;

  overflow: hidden;

  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};

  transform: ${({ isVisible }) => (isVisible ? 'scale(1)' : 'scale(1.5)')};

  box-shadow: 0px 10px 14px -3px rgba(0, 0, 0, 0.8);

  transition: ${createTransition(['transform', 'opacity'], 'standart')};

  @media screen and (min-width: 480px) {
    width: 450px;
  }

  @media screen and (min-width: 768px) {
    width: 520px;
    max-height: calc(100dvh - 40px);

    padding: 16px 6px 0 16px;
  }
`;

export const ContentContainer = styled.div`
  position: relative;

  flex-grow: 1;

  padding: 0 8px 14px 0;

  overflow-x: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;

    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #fa5502;

    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    margin-top: 34px;
    margin-bottom: 14px;

    background-color: #aeaeae;

    border-radius: 4px;
  }

  @media screen and (min-width: 768px) {
    padding: 0 10px 18px 0;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      margin-top: 38px;
      margin-bottom: 18px;
    }
  }
`;

export const BottomGradient = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10;

  width: 100%;
  height: 14px;

  background: linear-gradient(to bottom, #ffffff00, #ffffffff 8px, #ffffffff);

  @media screen and (min-width: 768px) {
    height: 18px;

    background: linear-gradient(
      to bottom,
      #ffffff00,
      #ffffffff 10px,
      #ffffffff
    );
  }
`;

export const Title = styled.h3`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;

  padding: 0 40px 15px 40px;

  font-size: 20px;
  font-weight: 700;

  color: #fa5502;

  background: linear-gradient(to top, #ffffff00, #ffffffff 10px, #ffffffff);

  text-align: center;
  text-transform: uppercase;

  @media screen and (min-width: 480px) {
    padding: 0 40px 20px 40px;

    font-size: 22px;
  }
`;

export const BackgroundContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 20;

  width: 100%;
  height: 100%;

  pointer-events: none;

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

  @media screen and (min-width: 360px) {
    background-size: 90px;
  }

  @media screen and (min-width: 480px) {
    background-size: 100px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 30;

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
