import styled from '@emotion/styled';
import ReactPlayer from 'react-player';

export const TrainingContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  @media screen and (min-width: 960px) {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;

export const InfoContainer = styled.div`
  @media screen and (max-width: 959.98px) {
    margin-bottom: 36px;
  }

  @media screen and (min-width: 960px) {
    flex-basis: 60%;
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
`;

export const PlayerFrame = styled(ReactPlayer)`
  aspect-ratio: 16/9;

  border-radius: 8px;

  overflow: hidden;

  box-shadow: 3px 6px 10px 2px rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 959.98px) {
    width: 100%;
    max-width: 560px;
    margin: 0 auto;
  }

  @media screen and (min-width: 960px) {
    flex-basis: 40%;
  }
`;
