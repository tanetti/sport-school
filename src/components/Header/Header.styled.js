import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { createTransition } from '@/utilities';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  width: 100vw;
  margin-right: calc((100vw - 100%) * -1);

  background-color: ${({ scrolled }) =>
    scrolled ? '#000000e0' : 'transparent'};

  box-shadow: ${({ scrolled }) =>
    scrolled ? '0px -9px 8px 13px rgba(36, 36, 36, 0.82)' : 'none'};

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-color: ${({ scrolled }) => (scrolled ? '#000000da' : 'transparent')};

  transition: ${createTransition(
    ['background-color', 'border-color', 'box-shadow'],
    'standart'
  )};
`;

export const HeaderSizer = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 0 auto;
  padding: 10px 8px;

  @media screen and (min-width: 768px) {
    padding: 10px 16px;
  }

  @media screen and (min-width: 960px) {
    backdrop-filter: ${({ scrolled }) => (scrolled ? 'blur(6px)' : 'initial')};
  }
`;

export const LogoLink = styled(NavLink)`
  width: ${({ scrolled }) => (scrolled === 'true' ? '44px' : '60px')};
  height: ${({ scrolled }) => (scrolled === 'true' ? '48px' : '65px')};

  color: #fff;

  transition: ${createTransition(['color', 'width', 'height'], 'standart')};

  & > svg {
    display: block;

    width: 100%;
    max-height: 100%;

    fill: currentColor;
  }

  &:is(:hover, :focus) {
    color: #fa5502;
  }

  @media screen and (min-width: 768px) {
    width: ${({ scrolled }) => (scrolled === 'true' ? '60px' : '80px')};
    height: ${({ scrolled }) => (scrolled === 'true' ? '65px' : '86px')};
  }

  @media screen and (min-width: 1280px) {
    width: ${({ scrolled }) => (scrolled === 'true' ? '70px' : '120px')};
    height: ${({ scrolled }) => (scrolled === 'true' ? '76px' : '130px')};
  }
`;
