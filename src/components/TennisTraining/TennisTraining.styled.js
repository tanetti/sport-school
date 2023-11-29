import styled from '@emotion/styled';

export const TrainingContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  @media screen and (min-width: 960px) {
    display: flex;
    align-items: center;
    gap: 20px;

    padding-top: 30px;
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

export const GraphicContainer = styled.div`
  aspect-ratio: 1/1;

  background-repeat: no-repeat;
  background-size: contain;
  background-image: ${({ imageJPG_560x1 }) => `url(${imageJPG_560x1})`};
  background-image: ${({ imageWEBP_560x1 }) => `url(${imageWEBP_560x1})`};

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: ${({ imageJPG_560x2 }) => `url(${imageJPG_560x2})`};
    background-image: ${({ imageWEBP_560x2 }) => `url(${imageWEBP_560x2})`};
  }

  @media (min-device-pixel-ratio: 3),
    (min-resolution: 288dpi),
    (min-resolution: 3dppx) {
    background-image: ${({ imageJPG_560x3 }) => `url(${imageJPG_560x3})`};
    background-image: ${({ imageWEBP_560x3 }) => `url(${imageWEBP_560x3})`};
  }

  @media screen and (max-width: 959.98px) {
    width: 100%;
    max-width: 320px;
    margin: 0 auto 30px auto;
  }

  @media screen and (min-width: 960px) {
    align-self: center;

    flex-basis: 45%;
  }

  @media screen and (min-width: 1120px) {
    flex-basis: 40%;
  }
`;
