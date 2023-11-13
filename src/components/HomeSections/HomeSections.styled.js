import styled from '@emotion/styled';
import { createTransition } from '@/utilities';

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  padding: 40px 10px 50px 10px;

  @media screen and (min-width: 768px) {
    padding: 70px 16px 80px 16px;
  }

  @media screen and (min-width: 1440px) {
    padding: 90px 16px 100px 16px;
  }
`;

export const SectionsTitle = styled.h2`
  margin-bottom: 15px;

  font-size: 22px;
  font-weight: 700;

  color: #fa5505;

  text-align: center;

  @media screen and (min-width: 1440px) {
    margin-bottom: 25px;

    font-size: 26px;
  }
`;

export const SectionsList = styled.ul`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 15px;

  height: calc((100vw - 20px) * 2);

  container-type: size;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 10px;

    height: clamp(400px, 60dvh, 600px);
  }
`;

export const SectionsItem = styled.li`
  position: relative;

  display: flex;
  flex-grow: 1;

  flex-basis: 0;

  font-size: 18px;
  font-weight: 700;

  color: #fff;

  border-width: 1px;
  border-style: solid;
  border-color: #212121;
  border-radius: 8px;

  box-shadow: 0px 8px 10px -3px rgba(0, 0, 0, 0.5);

  overflow: hidden;

  transition: ${createTransition(['flex', 'font-size', 'filter'], 'standart')};

  &:hover {
    flex-grow: 0;

    flex-basis: 100cqw;

    font-size: 26px;

    color: #fa5505;

    & > span {
      transform: translateY(0);
    }

    & > div {
      background-color: transparent;
    }

    & p {
      opacity: 1;
      visibility: visible;

      transition: ${createTransition(
        ['opacity', 'visibility', 'transform'],
        'standart',
        'short'
      )};
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 10px;

    &:hover {
      flex-basis: 50cqh;

      font-size: 20px;
    }
  }

  @media screen and (min-width: 820px) {
    &:hover {
      flex-basis: 55cqh;
    }
  }

  @media screen and (min-width: 960px) {
    &:hover {
      font-size: 24px;

      flex-basis: 85cqh;
    }
  }

  @media screen and (min-width: 1100px) {
    font-size: 12px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1440px) {
    &:hover {
      flex-basis: 100cqh;

      font-size: 26px;
    }
  }

  @media screen and (min-width: 1680px) {
    font-size: 18px;
  }
`;

export const CardBackground = styled.span`
  position: absolute;
  top: 0;
  left: 0;

  display: block;

  width: 100%;
  height: 100%;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${({ imageJPG }) => `url(${imageJPG})`};
  background-image: ${({ imageWEBP }) => `url(${imageWEBP})`};

  @media screen and (max-width: 767.98px) {
    height: 100cqw;

    transform: translateY(-10%);

    transition: ${createTransition('transform', 'standart')};
  }
`;

export const CardInfoBox = styled.div`
  position: relative;

  flex-grow: 1;

  padding: 10px;

  background-color: #00000070;

  transition: ${createTransition('background-color', 'standart')};
`;

export const CardTitle = styled.h3`
  font-size: inherit;
  font-weight: inherit;
`;

export const CardAge = styled.p`
  position: absolute;
  bottom: 12px;
  left: 14px;

  font-size: 22px;
  font-weight: 700;

  color: #fff;

  opacity: 0;
  visibility: hidden;

  transition: ${createTransition(
    ['opacity', 'visibility', 'transform'],
    'standart'
  )};

  & > span {
    font-size: 18px;
    font-weight: 400;
  }

  @media screen and (min-width: 1280px) {
    font-size: 28px;

    & > span {
      font-size: 20px;
    }
  }
`;
