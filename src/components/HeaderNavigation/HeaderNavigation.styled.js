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

    transform: ${({ isMenuOpened }) =>
      isMenuOpened ? 'translateX(0)' : 'translateX(102%)'};

    transition: ${createTransition('transform', 'standart')};
  }

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 24px;

    padding-right: 20px;
  }

  @media screen and (min-width: 960px) {
    gap: 30px;
  }

  @media screen and (min-width: 1280px) {
    gap: 50px;
  }
`;

export const NavigationLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 15px;

  padding: 16px 0;

  font-size: 18px;
  font-weight: 700;

  color: #fff;

  transition: ${createTransition('color', 'standart')};

  & > span {
    padding-top: 4px;

    text-transform: uppercase;
  }

  & > svg {
    width: 24px;
    height: 24px;

    fill: currentColor;
  }

  &.active {
    color: #fa7734;
  }

  &:is(:hover, :focus) {
    color: #fa5502;
  }

  @media screen and (min-width: 768px) {
    gap: 7px;

    padding: 20px 0;

    font-size: 14px;

    & > svg {
      width: 16px;
      height: 16px;
    }
  }

  @media screen and (min-width: 960px) {
    gap: 8px;

    font-size: 16px;

    & > svg {
      width: 18px;
      height: 18px;
    }
  }

  @media screen and (min-width: 1280px) {
    gap: 10px;

    font-size: 17px;

    & > span {
      padding-top: 3px;
    }

    & > svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const NavigationButton = styled.button`
  display: flex;
  align-items: center;
  gap: 15px;

  padding: 16px 0;

  font-size: 18px;
  font-weight: 700;

  color: #fff;
  background-color: transparent;

  border: none;

  cursor: pointer;

  transition: ${createTransition('color', 'standart')};

  & > span {
    padding-top: 4px;

    text-transform: uppercase;
  }

  &.active {
    color: #fa7734;
  }

  &:is(:hover, :focus) {
    color: #fa5502;
  }

  & > svg {
    width: 24px;
    height: 24px;

    fill: currentColor;
  }

  @media screen and (min-width: 768px) {
    gap: 7px;

    padding: 20px 0;

    font-size: 14px;

    & > svg {
      width: 16px;
      height: 16px;
    }
  }

  @media screen and (min-width: 960px) {
    gap: 8px;

    font-size: 16px;

    & > svg {
      width: 18px;
      height: 18px;
    }
  }

  @media screen and (min-width: 1280px) {
    gap: 10px;

    font-size: 17px;

    & > span {
      padding-top: 3px;
    }

    & > svg {
      width: 20px;
      height: 20px;
    }
  }
`;
