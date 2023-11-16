import styled from '@emotion/styled';
import { createTransition } from '@/utilities';

export const SectionsContainer = styled.fieldset`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;

  margin: 0 0 20px 0;
  padding: 20px;

  border: none;
`;

export const SectionItem = styled.div`
  flex-basis: calc(50% - 15px);
  max-width: calc(50% - 15px);

  aspect-ratio: 1/1;

  @media screen and (min-width: 768px) {
    flex-grow: 0;

    flex-basis: calc((100% - 60px) / 3);
    max-width: calc((100% - 60px) / 3);
  }
`;

export const SectionLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
  padding: 5px;

  font-size: ${({ active }) => (active ? '12px' : '10px')};
  font-weight: 700;

  border-width: 1px;
  border-style: solid;
  border-radius: 6px;
  border-color: #000;

  color: ${({ active }) => (active ? '#fa5502' : '#fff')};
  background-color: #000;

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

  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  backface-visibility: hidden;

  opacity: ${({ active }) => (active ? 1 : 0.85)};

  transform: ${({ active }) => (active ? 'scale(1.2)' : 'scale(1)')};

  filter: ${({ active }) => (active ? 'grayscale(0)' : 'grayscale(0.6)')};

  transition: ${createTransition(
    ['color', 'opacity', 'transform', 'filter', 'font-size'],
    'standart'
  )};

  & > span {
    font-size: 10px;
    font-weight: 400;

    color: #fff;

    opacity: ${({ active }) => (active ? 1 : 0)};
    visibility: ${({ active }) => (active ? 'visible' : 'hidden')};

    transition: ${({ active }) =>
      active
        ? createTransition(['opacity', 'visibility'], 'standart', 'short')
        : createTransition(['opacity', 'visibility'], 'standart')};
  }

  @media screen and (min-width: 380px) {
    padding: 6px;

    font-size: ${({ active }) => (active ? '13px' : '12px')};

    & > span {
      font-size: 11px;
    }
  }

  @media screen and (min-width: 420px) {
    padding: 8px;

    font-size: ${({ active }) => (active ? '14px' : '12px')};

    transform: ${({ active }) => (active ? 'scale(1.15)' : 'scale(1)')};

    & > span {
      font-size: 12px;
    }
  }

  @media screen and (min-width: 480px) {
    padding: 10px;

    font-size: ${({ active }) => (active ? '16px' : '14px')};

    & > span {
      font-size: 13px;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 8px;

    font-size: ${({ active }) => (active ? '14px' : '12px')};

    transform: ${({ active }) => (active ? 'scale(1.2)' : 'scale(1)')};

    & > span {
      font-size: 11px;
    }
  }
`;
