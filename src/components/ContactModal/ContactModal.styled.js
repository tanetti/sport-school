import styled from '@emotion/styled';
import { createTransition } from '@/utilities';

export const MainContactsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;

  padding: 10px 0;
`;

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;

  padding: 6px 0 6px 6px;

  font-size: 15px;

  color: #fa5502;

  & > svg {
    width: 30px;

    fill: currentColor;
  }

  & > span {
    color: #212121;

    transition: ${createTransition('color', 'standart')};
  }

  &:is(:hover, :focus) > span {
    color: #fa7734;
  }

  @media screen and (min-width: 360px) {
    font-size: 17px;

    & > svg {
      width: 32px;
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;

    & > svg {
      width: 34px;
    }
  }
`;

export const SocialsList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;

  padding: 6px 0 6px 7px;

  color: #515151;

  transition: ${createTransition('color', 'standart')};

  & > svg {
    width: 28px;

    fill: currentColor;
  }

  &:is(:hover, :focus) {
    color: #fa5502;
  }

  @media screen and (min-width: 360px) {
    & > svg {
      width: 30px;
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;

    & > svg {
      width: 34px;
    }
  }
`;

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

  & > svg {
    width: 18px;

    fill: currentColor;
  }

  & > span {
    padding-top: 4px;

    color: #111111;

    transition: ${createTransition('color', 'standart')};
  }

  &:is(:hover, :focus) > span {
    color: #fa7734;
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
