import styled from '@emotion/styled';
import { TRANSITION_600_DURATION, TRANSITION_ANIMATION } from '@/constants';
import { NavLink } from 'react-router-dom';

export const NavigationContainer = styled.nav`
  color: #fff;

  @media screen and (max-width: 767.98px) {
    position: fixed;
    top: 0;
    right: 0;

    min-width: 200px;
    height: 100dvh;

    padding: 70px 16px 20px 16px;

    background-color: #000000e0;

    backdrop-filter: blur(6px);

    transform: ${({ isMenuOpened }) =>
      isMenuOpened ? 'translateX(0)' : 'translateX(102%)'};

    transition: transform ${TRANSITION_600_DURATION} ${TRANSITION_ANIMATION};
  }

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 50px;

    padding-right: 10px;
  }

  @media screen and (min-width: 1280px) {
    gap: 60px;
  }
`;

export const NavigationLink = styled(NavLink)`
  display: flex;
  align-items: center;

  font-weight: 700;

  color: #fff;

  -webkit-tap-highlight-color: transparent;

  transition: color ${TRANSITION_600_DURATION} ${TRANSITION_ANIMATION};

  @media screen and (max-width: 767.98px) {
    gap: 15px;

    padding: 16px 0;

    font-size: 20px;

    & > span {
      padding-top: 6px;
    }
  }

  @media screen and (min-width: 768px) {
    gap: 10px;

    padding: 20px 0;

    font-size: 17px;

    & > span {
      padding-top: 5px;
    }
  }

  @media screen and (min-width: 1280px) {
    gap: 13px;

    padding: 25px 0;

    font-size: 19px;

    & > span {
      padding-top: 6px;
    }
  }

  &.active {
    color: #fa7734;
  }

  &:hover {
    color: #fa5502;
  }

  & > svg {
    fill: currentColor;

    @media screen and (max-width: 767.98px) {
      width: 28px;
    }

    @media screen and (min-width: 768px) {
      width: 20px;
    }

    @media screen and (min-width: 1280px) {
      width: 24px;
    }
  }
`;

export const NavigationButton = styled.button`
  display: flex;
  align-items: center;

  font-weight: 700;

  color: #fff;
  background-color: transparent;

  border: none;

  cursor: pointer;

  -webkit-tap-highlight-color: transparent;

  transition: color ${TRANSITION_600_DURATION} ${TRANSITION_ANIMATION};

  @media screen and (max-width: 767.98px) {
    gap: 15px;

    padding: 16px 0;

    font-size: 20px;

    & > span {
      padding-top: 6px;
    }
  }

  @media screen and (min-width: 768px) {
    gap: 10px;

    padding: 20px 0;

    font-size: 17px;

    & > span {
      padding-top: 5px;
    }
  }

  @media screen and (min-width: 1280px) {
    gap: 13px;

    padding: 25px 0;

    font-size: 19px;

    & > span {
      padding-top: 6px;
    }
  }

  &:hover {
    color: #fa5502;
  }

  & > svg {
    fill: currentColor;

    @media screen and (max-width: 767.98px) {
      width: 28px;
    }

    @media screen and (min-width: 768px) {
      width: 20px;
    }

    @media screen and (min-width: 1280px) {
      width: 24px;
    }
  }
`;
