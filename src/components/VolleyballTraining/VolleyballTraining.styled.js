import styled from '@emotion/styled';
import ReactPlayer from 'react-player';

export const TrainingContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  @media screen and (min-width: 960px) {
    display: flex;
    gap: 30px;

    padding-top: 30px;
  }
`;

export const InfoContainer = styled.div`
  @media screen and (max-width: 959.98px) {
    margin-bottom: 36px;
  }

  @media screen and (min-width: 960px) {
    flex-basis: 70%;
  }
`;

export const TrainingParagraph = styled.p`
  padding: 10px;

  font-size: 15px;
  line-height: 1.32;

  &::first-letter {
    padding-left: 30px;
  }

  & > em {
    font-size: 16px;
    font-weight: 700;
  }

  @media screen and (min-width: 960px) {
    font-size: 17px;

    & > em {
      font-size: 18px;
    }
  }
`;

export const PlayerFrame = styled(ReactPlayer)`
  aspect-ratio: 9/16;

  border-radius: 12px;

  overflow: hidden;

  box-shadow: 3px 6px 10px 2px rgba(0, 0, 0, 0.4);

  @media screen and (max-width: 959.98px) {
    width: 100%;
    max-width: 560px;
    margin: 0 auto;
  }
`;

export const AdvancedInfoContaier = styled.div`
  padding-top: 80px;

  @media screen and (max-width: 959.98px) {
    max-width: 460px;
    margin: 0 auto;
  }

  @media screen and (min-width: 960px) {
    display: flex;
    align-items: stretch;
    gap: 30px;

    max-width: 1120px;
    margin: 0 auto;
  }
`;

export const AdvancedBlock = styled.div`
  border-radius: 12px;

  box-shadow: 3px 6px 10px 2px rgba(0, 0, 0, 0.4);

  background-color: #fff;

  overflow: hidden;

  @media screen and (max-width: 959.98px) {
    &:not(:last-of-type) {
      margin-bottom: 50px;
    }
  }

  @media screen and (min-width: 960px) {
    flex-grow: 1;

    max-width: 280px;
  }
`;

export const AdvancedMainBlock = styled(AdvancedBlock)`
  @media screen and (min-width: 960px) {
    flex-grow: 1;

    max-width: 100%;
  }
`;

export const BlockTitle = styled.p`
  display: block;

  padding: 17px 10px 14px 10px;

  font-size: 17px;
  font-weight: 700;

  color: #fa7734;
  background-color: #111;

  text-align: center;
  text-transform: uppercase;

  & > span {
    display: block;

    padding-top: 10px;

    font-size: 15px;
    font-weight: 400;

    color: #fff;

    text-transform: initial;
  }
`;

export const BlockBody = styled.div`
  padding: 15px 10px;
`;

export const Paragraph = styled.p`
  font-size: 15px;
  line-height: 1.26;

  &:not(:last-of-type) {
    margin-bottom: 16px;
  }

  &::before {
    content: '';

    display: inline-block;

    width: 10px;
    height: 10px;
    margin: 0 10px 1px 10px;

    border-radius: 50%;

    background-color: #fa5502;
  }
`;
