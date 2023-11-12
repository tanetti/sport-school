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

  height: calc(6 * 110px + 5 * 15px);

  container-type: size;

  @media screen and (min-width: 420px) {
    height: calc(6 * 130px + 5 * 15px);
  }

  @media screen and (min-width: 540px) {
    height: calc(6 * 140px + 5 * 15px);
  }

  @media screen and (min-width: 620px) {
    height: calc(6 * 160px + 5 * 15px);
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 10px;

    height: clamp(400px, 60dvh, 600px);
  }
`;

export const SectionsItem = styled.li`
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

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${({ imageJPG }) => `url(${imageJPG})`};
  background-image: ${({ imageWEBP }) => `url(${imageWEBP})`};

  box-shadow: 0px 6px 10px -3px rgba(0, 0, 0, 0.4);

  overflow: hidden;

  transition: flex ${TRANSITION_600_DURATION} ${TRANSITION_ANIMATION},
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
    flex-grow: 0;

    flex-basis: 100cqw;

    font-size: 26px;

    color: #fa5505;

    & > div {
      background-color: transparent;
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 10px;

    &:hover {
      flex-basis: 50cqh;

      font-size: 20px;
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
