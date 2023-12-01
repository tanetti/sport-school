import styled from '@emotion/styled';
import { createTransition } from '@/utilities';
import { NavLink } from 'react-router-dom';

export const NavigationContainer = styled.nav`
  color: #fff;

  transition: ${createTransition('transform', 'standart')};

  @media screen and (max-width: 767.98px) {
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

    background-color: #000000f0;

    transform: ${({ isMenuOpened }) =>
      isMenuOpened ? 'translateX(0)' : 'translateX(102%)'};
  }

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 24px;

    padding-right: 10px;

    transform: ${({ isScrolled }) =>
      isScrolled ? 'translateX(0)' : 'translateX(140px)'};
  }

  @media screen and (min-width: 960px) {
    gap: 50px;

    padding-right: 20px;

    transform: ${({ isScrolled }) =>
      isScrolled ? 'translateX(0)' : 'translateX(190px)'};
  }

  @media screen and (min-width: 1280px) {
    gap: 90px;

    transform: ${({ isScrolled }) =>
      isScrolled ? 'translateX(0)' : 'translateX(230px)'};
  }
`;

export const MainNavigationList = styled.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 24px;
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

export const RequestButton = styled.button`
  padding: 10px 12px 8px 12px;

  font-size: 16px;

  color: inherit;
  background-color: transparent;

  border-width: 1px;
  border-style: solid;
  border-radius: 10px;
  border-color: #fa7734;

  cursor: pointer;

  text-transform: uppercase;

  animation: puls 10s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;

  transition: ${createTransition(
    ['color', 'border-color', 'opacity', 'visibility', 'transform'],
    'standart'
  )};

  &:is(:hover, :focus) {
    color: #fa5502;

    border-color: #fa5502;
  }

  @media screen and (max-width: 767.98px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 116px;
    padding: 11px 12px 8px 12px;

    font-size: 12px;

    opacity: ${({ isScrolled }) => (isScrolled ? 1 : 0)};
    visibility: ${({ isScrolled }) => (isScrolled ? 'visible' : 'hidden')};

    transform: ${({ isScrolled }) =>
      isScrolled ? 'translateX(0)' : 'translateX(126px)'};
  }

  @media screen and (min-width: 960px) {
    width: 140px;

    font-size: 15px;

    transform: ${({ isScrolled }) =>
      isScrolled ? 'translateX(0)' : 'translateX(160px)'};
  }

  @media screen and (min-width: 1280px) {
    width: 146px;

    font-size: 16px;

    transform: ${({ isScrolled }) =>
      isScrolled ? 'translateX(0)' : 'translateX(166px)'};
  }

  @keyframes puls {
    0% {
      background-color: transparent;

      transform: scale(1);
    }
    5% {
      background-color: #fa773420;

      transform: scale(1.1);
    }
    10% {
      background-color: transparent;

      transform: scale(1);
    }
    100% {
      background-color: transparent;

      transform: scale(1);
    }
  }
`;

export const LinkContainer = styled.div`
  @media screen and (min-width: 768px) {
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
