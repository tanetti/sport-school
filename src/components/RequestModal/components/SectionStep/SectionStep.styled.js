import styled from '@emotion/styled';
import { createTransition } from '@/utilities';

export const SectionsContainer = styled.fieldset`
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  gap: 20px;

  margin: 0 0 5px 0;
  padding: 20px;

  border: none;

  @media screen and (min-width: 380px) {
    gap: 30px;

    margin: 0 0 15px 0;
  }

  @media screen and (min-width: 480px) {
    margin: 0 0 20px 0;
  }
`;

export const SectionItem = styled.div`
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

export const SectionInput = styled.input`
  &:is(:hover, :focus) + label {
    color: ${({ active }) => (active ? '#fa5502' : '#fff')};

    opacity: 1;

    filter: grayscale(0);
  }
`;

export const SectionLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
  padding: 5px;

  font-size: 11px;
  font-weight: 700;

  border-width: 1px;
  border-style: solid;
  border-radius: 8px;
  border-color: #000;

  color: ${({ active }) => (active ? '#fa5502' : '#aeaeae')};
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

  opacity: ${({ active }) => (active ? 1 : 0.85)};

  transform: ${({ active }) => (active ? 'scale(1.15)' : 'scale(1)')};

  filter: ${({ active }) => (active ? 'grayscale(0)' : 'grayscale(0.6)')};

  overflow: hidden;

  transition: ${createTransition(
    ['color', 'opacity', 'transform', 'filter'],
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

  & > strong {
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
    padding: 8px;

    font-size: 12px;
    font-weight: 700;

    color: #ff3b3b;
    background-color: #00000090;

    text-align: center;

    user-select: none;

    transition: ${({ active }) =>
      active
        ? createTransition(['opacity', 'visibility'], 'standart', 'short')
        : createTransition(['opacity', 'visibility'], 'standart')};
  }

  @media screen and (min-width: 380px) {
    padding: 6px;

    font-size: 12px;

    transform: ${({ active }) => (active ? 'scale(1.2)' : 'scale(1)')};

    & > span {
      font-size: 11px;
    }

    & > strong {
      font-size: 14px;
    }
  }

  @media screen and (min-width: 420px) {
    padding: 8px;

    font-size: 13px;

    transform: ${({ active }) => (active ? 'scale(1.15)' : 'scale(1)')};

    & > span {
      font-size: 12px;
    }

    & > strong {
      font-size: 16px;
    }
  }

  @media screen and (min-width: 480px) {
    font-size: 16px;

    & > span {
      font-size: 13px;
    }

    & > strong {
      font-size: 18px;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 6px;

    font-size: 12px;

    transform: ${({ active }) => (active ? 'scale(1.2)' : 'scale(1)')};

    & > span {
      font-size: 11px;
    }

    & > strong {
      font-size: 14px;
    }
  }
`;
