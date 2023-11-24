import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { createTransition } from '@/utilities';

export const NavigationContainer = styled.nav`
  margin-bottom: 5px;

  @media screen and (min-width: 380px) {
    margin-bottom: 15px;
  }

  @media screen and (min-width: 480px) {
    margin-bottom: 20px;
  }
`;

export const SectionsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  padding: 20px;

  @media screen and (min-width: 380px) {
    gap: 30px;
  }
`;

export const SectionItem = styled.li`
  flex-basis: calc(50% - 10px);
  max-width: calc(50% - 10px);

  aspect-ratio: 1/1;

  @media screen and (min-width: 380px) {
    flex-basis: calc(50% - 15px);
    max-width: calc(50% - 15px);
  }

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 60px) / 3);
    max-width: calc((100% - 60px) / 3);
  }
`;

export const SectionLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
  padding: 5px;

  font-size: 12px;
  font-weight: 700;

  border-width: 1px;
  border-style: solid;
  border-radius: 8px;
  border-color: #000;

  color: #aeaeae;
  background-color: #000;

  outline: transparent;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${({ images: { JPGx1 } }) => `url(${JPGx1})`};
  background-image: ${({ images: { WEBPx1 } }) => `url(${WEBPx1})`};

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: ${({ images: { JPGx2 } }) => `url(${JPGx2})`};
    background-image: ${({ images: { WEBPx2 } }) => `url(${WEBPx2})`};
  }

  @media (min-device-pixel-ratio: 3),
    (min-resolution: 288dpi),
    (min-resolution: 3dppx) {
    background-image: ${({ images: { JPGx3 } }) => `url(${JPGx3})`};
    background-image: ${({ images: { WEBPx3 } }) => `url(${WEBPx3})`};
  }

  box-shadow: 0px 8px 10px -3px rgba(0, 0, 0, 0.5);

  opacity: 0.85;

  transform: scale(1);

  filter: grayscale(0.6);

  overflow: hidden;

  transition: ${createTransition(
    ['color', 'opacity', 'transform', 'filter'],
    'standart'
  )};

  &.active {
    color: #fff;

    opacity: 1;

    transform: scale(1.15);

    filter: grayscale(0);

    & > span {
      opacity: 1;
      visibility: visible;

      transition: ${createTransition(
        ['opacity', 'visibility'],
        'standart',
        'short'
      )};
    }
  }

  &:is(:hover, :focus) {
    color: #fa5502;

    opacity: 1;

    filter: grayscale(0);

    & > span {
      opacity: 1;
      visibility: visible;

      transition: ${createTransition(
        ['opacity', 'visibility'],
        'standart',
        'short'
      )};
    }
  }

  & > span {
    font-size: 10px;
    font-weight: 400;

    color: #fff;

    opacity: 0;
    visibility: hidden;

    transition: ${createTransition(['opacity', 'visibility'], 'standart')};
  }

  @media screen and (min-width: 380px) {
    padding: 6px;

    font-size: 14px;

    &.active {
      transform: scale(1.2);
    }

    & > span {
      font-size: 11px;
    }
  }

  @media screen and (min-width: 420px) {
    padding: 8px;

    font-size: 15px;

    &.active {
      transform: scale(1.15);
    }

    & > span {
      font-size: 12px;
    }
  }

  @media screen and (min-width: 480px) {
    padding: 10px;

    font-size: 16px;

    & > span {
      font-size: 13px;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 8px;

    font-size: 13px;

    &.active {
      transform: scale(1.2);
    }

    & > span {
      font-size: 11px;
    }
  }
`;

export const OutlinedButton = styled.button`
  display: block;

  width: 50%;

  margin: 0 auto;
  padding: 8px 10px;

  font-size: 16px;

  color: #fa7734;
  background-color: transparent;

  border-width: 1px;
  border-style: solid;
  border-radius: 6px;
  border-color: #fa7734;

  cursor: pointer;

  transition: ${createTransition(
    ['color', 'background-color', 'border-color'],
    'standart'
  )};

  &:is(:hover, :focus) {
    color: #fa5502;
    background-color: #00000010;

    border-color: #fa5502;
  }
`;
