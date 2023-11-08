import styled from '@emotion/styled';
import { TRANSITION_600_DURATION, TRANSITION_ANIMATION } from '@/constants';

export const ButtonContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 60px;
  height: 50px;
  padding: 10px 8px;

  cursor: pointer;

  -webkit-tap-highlight-color: transparent;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 4px;

  background-color: #fff;

  border-radius: 2px;

  transition: transform ${TRANSITION_600_DURATION} ${TRANSITION_ANIMATION},
    opacity ${TRANSITION_600_DURATION} ${TRANSITION_ANIMATION};
`;

export const TopLine = styled(Line)`
  transform: ${({ isMenuOpened }) =>
    isMenuOpened
      ? 'rotate(45deg) translate(-1px, -2px)'
      : 'rotate(0) translate(0)'};

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
    isMenuOpened
      ? 'rotate(-45deg) translate(0, 1px)'
      : 'rotate(0) translate(0)'};

  transform-origin: left bottom;
`;
