import styled from '@emotion/styled';
import { createTransition } from '@/utilities';
import { NavLink } from 'react-router-dom';

export const NavigationContainer = styled.nav`
  color: #fff;

  transition: ${createTransition('transform', 'standart')};

  @media screen and (max-width: 959.98px) {
    position: fixed;
    top: 0;
    right: 0;

    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    gap: 50px;

    min-width: 200px;
    height: 100dvh;

    padding: 90px 16px 20px 16px;

    background-color: #111111f0;

    overflow: auto;

    transform: ${({ isMenuOpened }) =>
      isMenuOpened ? 'translateX(0)' : 'translateX(102%)'};
  }

  @media screen and (min-width: 960px) {
    display: flex;
    align-items: center;
    gap: 24px;

    padding-right: 10px;

    transform: ${({ isScrolled }) =>
      isScrolled ? 'translateX(0)' : 'translateX(170px)'};
  }

  @media screen and (min-width: 1280px) {
    gap: 50px;

    padding-right: 40px;

    transform: ${({ isScrolled }) =>
      isScrolled ? 'translateX(0)' : 'translateX(230px)'};
  }

  @media screen and (min-width: 1440px) {
    gap: 90px;

    padding-right: 60px;

    transform: ${({ isScrolled }) =>
      isScrolled ? 'translateX(0)' : 'translateX(290px)'};
  }
`;

export const MainNavigationList = styled.ul`
  @media screen and (min-width: 960px) {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  @media screen and (min-width: 1280px) {
    gap: 30px;
  }

  @media screen and (min-width: 1440px) {
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

  color: inherit;

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

  @media screen and (min-width: 960px) {
    gap: 7px;

    padding: 20px 0;

    font-size: 14px;

    & > svg {
      width: 16px;
      height: 16px;
    }
  }

  @media screen and (min-width: 1280px) {
    gap: 8px;

    font-size: 16px;

    & > svg {
      width: 18px;
      height: 18px;
    }
  }

  @media screen and (min-width: 1440px) {
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

  color: inherit;
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

  @media screen and (min-width: 960px) {
    gap: 7px;

    padding: 20px 0;

    font-size: 14px;

    & > svg {
      width: 16px;
      height: 16px;
    }
  }

  @media screen and (min-width: 1280px) {
    gap: 8px;

    font-size: 16px;

    & > svg {
      width: 18px;
      height: 18px;
    }
  }

  @media screen and (min-width: 1440px) {
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

export const RequestButton = styled.button`
  padding: 10px 12px 8px 12px;

  font-size: 16px;
  font-weight: 700;

  color: #fff;
  background-color: #fa550250;

  border-width: 1px;
  border-style: solid;
  border-radius: 10px;
  border-color: #fa5502;

  cursor: pointer;

  text-transform: uppercase;

  animation: puls 6s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;

  transition: ${createTransition(
    ['background-color', 'border-color', 'opacity', 'visibility', 'transform'],
    'standart'
  )};

  &:is(:hover, :focus) {
    background-color: #fa550280;

    border-color: #fa7734;
  }

  @media screen and (max-width: 959.98px) {
    width: 100%;
  }

  @media screen and (min-width: 960px) {
    width: 146px;
    padding: 11px 12px 8px 12px;

    font-size: 15px;

    opacity: ${({ isScrolled }) => (isScrolled ? 1 : 0)};
    visibility: ${({ isScrolled }) => (isScrolled ? 'visible' : 'hidden')};

    transform: ${({ isScrolled }) =>
      isScrolled ? 'translateX(0)' : 'translateX(156px)'};
  }

  @media screen and (min-width: 1280px) {
    width: 170px;

    font-size: 17px;

    transform: ${({ isScrolled }) =>
      isScrolled ? 'translateX(0)' : 'translateX(210px)'};
  }

  @media screen and (min-width: 1440px) {
    width: 186px;

    font-size: 19px;

    transform: ${({ isScrolled }) =>
      isScrolled ? 'translateX(0)' : 'translateX(246px)'};
  }

  @keyframes puls {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(1.1);
    }
    20% {
      transform: scale(1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const LinkContainer = styled.div`
  @media screen and (min-width: 960px) {
    display: none;
  }
`;

export const ContactList = styled.ul`
  display: flex;
  justify-content: space-around;
`;

export const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;

  padding: 10px 7px;

  color: #aeaeae;

  transition: ${createTransition('color', 'standart')};

  & > svg {
    width: 30px;
    height: 30px;

    fill: currentColor;
  }

  &:is(:hover, :focus) {
    color: #fa5502;
  }
`;
