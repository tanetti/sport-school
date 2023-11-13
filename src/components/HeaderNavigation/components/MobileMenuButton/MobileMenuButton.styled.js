import styled from '@emotion/styled';
import { createTransition } from '@/utilities';

export const ButtonContainer = styled.div`
  display: flex;
  align-self: center;
  flex-direction: column;
  justify-content: space-between;

  width: 50px;
  height: 46px;
  padding: 10px 8px;

  cursor: pointer;

  -webkit-tap-highlight-color: transparent;

  &:hover > div {
    background-color: #fa5502;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 4px;

  background-color: #fff;

  border-radius: 2px;

  transition: ${createTransition(
    ['background-color', 'opacity', 'transform'],
    'standart'
  )};
`;

export const TopLine = styled(Line)`
  transform: ${({ isMenuOpened }) =>
    isMenuOpened ? 'rotate(45deg) scaleX(0.98)' : 'rotate(0) scaleX(1)'};

  transform-origin: left top;
`;

export const MidLine = styled(Line)`
  transform: ${({ isMenuOpened }) =>
    isMenuOpened ? 'scaleX(0)' : 'scaleX(1)'};

  transform-origin: left;

  opacity: ${({ isMenuOpened }) => (isMenuOpened ? 0 : 1)};
`;

export const BotLine = styled(Line)`
  transform: ${({ isMenuOpened }) =>
    isMenuOpened ? 'rotate(-45deg) scaleX(0.98)' : 'rotate(0) scaleX(1)'};

  transform-origin: left bottom;
`;
