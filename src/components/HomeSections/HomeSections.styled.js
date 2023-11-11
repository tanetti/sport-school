import styled from '@emotion/styled';
import { TRANSITION_600_DURATION, TRANSITION_ANIMATION } from '@/constants';

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
`;

export const SectionsList = styled.ul`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 15px;

  min-height: calc(6 * 110px + 5 * 15px);

  @media screen and (min-width: 420px) {
    min-height: calc(6 * 130px + 5 * 15px);
  }

  @media screen and (min-width: 540px) {
    min-height: calc(6 * 140px + 5 * 15px);
  }

  @media screen and (min-width: 620px) {
    min-height: calc(6 * 160px + 5 * 15px);
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 10px;

    min-height: 400px;
    height: 60dvh;
    max-height: 600px;
  }
`;

export const SectionsItem = styled.li`
  display: flex;
  flex-grow: 1;

  max-height: calc(100vw - 20px);

  font-size: 18px;
  font-weight: 700;

  color: #fff;

  border-width: 1px;
  border-style: solid;
  border-color: #212121;
  border-radius: 8px;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${({ image }) => `url(${image})`};

  box-shadow: 0px 6px 10px -3px rgba(0, 0, 0, 0.4);

  overflow: hidden;

  transition: flex-grow ${TRANSITION_600_DURATION} ${TRANSITION_ANIMATION},
    font-size ${TRANSITION_600_DURATION} ${TRANSITION_ANIMATION},
    filter ${TRANSITION_600_DURATION} ${TRANSITION_ANIMATION};

  & > div {
    flex-grow: 1;

    padding: 10px;

    background-color: #00000070;

    transition: ${`background-color ${TRANSITION_600_DURATION}
      ${TRANSITION_ANIMATION}`};
  }

  &:hover {
    flex-grow: 20;

    font-size: 26px;

    color: #fa5505;

    & > div {
      background-color: transparent;
    }
  }

  @media screen and (min-width: 768px) {
    flex-basis: 0;

    max-width: clamp(400px, 60dvh, 600px);
    max-height: auto;

    font-size: 10px;

    &:hover {
      flex-grow: 10;

      font-size: 20px;
    }
  }

  @media screen and (min-width: 960px) {
    &:hover {
      font-size: 24px;
    }
  }

  @media screen and (min-width: 1100px) {
    font-size: 12px;

    &:hover {
      flex-grow: 6;
    }
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;

    &:hover {
      flex-grow: 4;
    }
  }

  @media screen and (min-width: 1440px) {
    &:hover {
      flex-grow: 3;

      font-size: 26px;
    }
  }

  @media screen and (min-width: 1680px) {
    font-size: 18px;

    &:hover {
      flex-grow: 2.5;
    }
  }

  @media screen and (min-width: 1920px) {
    &:hover {
      flex-grow: 2.4;
    }
  }

  @media screen and (min-width: 2200px) {
    &:hover {
      flex-grow: 2;
    }
  }

  @media screen and (min-width: 2500px) {
    &:hover {
      flex-grow: 1.8;
    }
  }
`;
