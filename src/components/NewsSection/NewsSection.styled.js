import styled from '@emotion/styled';
import { createTransition } from '@/utilities';

export const StyledNewsSection = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  padding-top: 50px;
  padding-bottom: 60px;

  overflow: hidden;

  @media screen and (min-width: 768px) {
    padding-top: 70px;
    padding-bottom: 80px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 90px;
    padding-bottom: 100px;
  }
`;

export const UpButton = styled.button`
  position: fixed;
  right: 30px;
  bottom: 40px;
  z-index: 10;

  width: 50px;
  height: 50px;
  padding: 2px;

  color: #fa5502;
  background-color: #000000ce;

  border-width: 2px;
  border-style: solid;
  border-radius: 12px;
  border-color: #fa5502;

  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);

  opacity: ${({ isShown }) => (isShown ? 1 : 0)};
  visibility: ${({ isShown }) => (isShown ? 'visible' : 'hidden')};

  transform: ${({ verticalShift }) => `translateY(${verticalShift * -1}px)`};

  cursor: pointer;

  transition: ${createTransition(
    [
      'color',
      'background-color',
      'border-color',
      'opacity',
      'visibility',
      'transform',
    ],
    'standart'
  )};

  &:is(:hover, :focus) {
    color: #fa7734;
    background-color: #000000ff;

    border-color: #fa7734;

    transform: scale(1.2);
  }

  & > svg {
    width: 100%;
    height: 100%;

    stroke: currentColor;
  }
`;
