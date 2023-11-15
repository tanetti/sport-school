import styled from '@emotion/styled';
import { createTransition } from '@/utilities';

export const GeoLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  margin-bottom: 5px;
  padding: 10px 0;

  font-size: 12px;
  font-weight: 700;

  color: #fa5502;

  transition: ${createTransition('color', 'standart')};

  & > svg {
    width: 18px;

    fill: currentColor;
  }

  & > span {
    padding-top: 4px;

    color: #111111;

    transition: ${createTransition('color', 'standart')};
  }

  &:is(:hover, :focus) {
    color: #fa5502;

    & > span {
      color: #fa7734;
    }
  }

  @media screen and (min-width: 360px) {
    font-size: 14px;

    & > svg {
      width: 22px;
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;

    & > svg {
      width: 24px;
    }
  }
`;

export const MapFrame = styled.iframe`
  display: block;

  width: 100%;
  aspect-ratio: 5/3;

  border-width: 1px;
  border-style: solid;
  border-radius: 6px;
  border-color: #fa5502;
`;
