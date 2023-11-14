import styled from '@emotion/styled';
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

  backdrop-filter: blur(6px);

  transition: ${createTransition(['opacity', 'visibility'], 'standart')};
`;

export const Window = styled.div`
  position: relative;

  min-width: 300px;
  max-width: calc(100% - 20px);
  max-height: calc(100dvh - 30px);
  padding: 10px;

  background-color: #fff;

  border-radius: 8px;

  overflow: hidden;

  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};

  transform: ${({ isVisible }) => (isVisible ? 'scale(1)' : 'scale(1.5)')};

  box-shadow: 0px 10px 14px -3px rgba(0, 0, 0, 0.8);

  transition: ${createTransition(['transform', 'opacity'], 'standart')};

  @media screen and (min-width: 480px) {
    max-width: calc(100% - 40px);
    max-height: calc(100dvh - 60px);
  }

  @media screen and (min-width: 768px) {
    max-width: calc(100% - 60px);
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
