import styled from '@emotion/styled';
import { TRANSITION_600_DURATION, TRANSITION_ANIMATION } from '@/constants';

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  padding: 40px 15px 50px 15px;
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
  gap: 17px;

  min-height: calc(6 * 110px + 5 * 17px);

  @media screen and (min-width: 420px) {
    min-height: calc(6 * 130px + 5 * 17px);
  }

  @media screen and (min-width: 540px) {
    min-height: calc(6 * 140px + 5 * 17px);
  }

  @media screen and (min-width: 620px) {
    min-height: calc(6 * 160px + 5 * 17px);
  }
`;

export const SectionsItem = styled.li`
  flex-grow: 1;

  max-height: calc(100vw - 30px);
  padding: 10px 10px;

  font-size: 18px;
  font-weight: 700;

  color: #fff;

  border-radius: 8px;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${({ image }) =>
    `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${image})`};

  box-shadow: 0px 6px 10px -3px rgba(0, 0, 0, 0.4);

  transition: flex-grow ${TRANSITION_600_DURATION} ${TRANSITION_ANIMATION},
    font-size ${TRANSITION_600_DURATION} ${TRANSITION_ANIMATION};

  &:hover {
    flex-grow: 30;

    font-size: 26px;

    color: #fa5505;
  }
`;
