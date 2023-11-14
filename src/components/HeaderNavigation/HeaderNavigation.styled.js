import styled from '@emotion/styled';
import { createTransition } from '@/utilities';
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

    transition: ${createTransition('transform', 'standart')};
  }

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 50px;

    padding-right: 20px;
  }
`;

export const NavigationLink = styled(NavLink)`
  display: flex;
  align-items: center;

  font-weight: 700;

  color: #fff;

  transition: ${createTransition('color', 'standart')};

  @media screen and (max-width: 767.98px) {
    gap: 15px;

    padding: 16px 0;

    font-size: 18px;

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

  &.active {
    color: #fa7734;
  }

  &:is(:hover, :focus) {
    color: #fa5502;
  }

  & > svg {
    fill: currentColor;

    @media screen and (max-width: 767.98px) {
      width: 24px;
    }

    @media screen and (min-width: 768px) {
      width: 20px;
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

  transition: ${createTransition('color', 'standart')};

  @media screen and (max-width: 767.98px) {
    gap: 15px;

    padding: 16px 0;

    font-size: 18px;

    & > span {
      padding-top: 5px;
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

  &:is(:hover, :focus) {
    color: #fa5502;
  }

  & > svg {
    fill: currentColor;

    @media screen and (max-width: 767.98px) {
      width: 24px;
    }

    @media screen and (min-width: 768px) {
      width: 20px;
    }
  }
`;
