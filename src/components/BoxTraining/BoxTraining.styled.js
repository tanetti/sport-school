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
    flex-basis: 33%;
  }
`;

export const BlockTitle = styled.p`
  display: block;

  padding: 17px 10px 14px 10px;

  font-size: 17px;
  font-weight: 700;
  line-height: 1.4;

  color: #fa7734;
  background-color: #111;

  text-align: center;
  text-transform: uppercase;
`;

export const BlockBody = styled.div`
  padding: 15px 10px;
`;

export const Paragraph = styled.p`
  font-size: 15px;
  line-height: 1.26;

  & > em {
    font-weight: 700;
  }

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
