import styled from '@emotion/styled';

export const AdvantagesContainer = styled.div`
  @media screen and (min-width: 960px) {
    display: flex;
    align-items: stretch;

    max-width: 1440px;
    margin: 0 auto;
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

  @media screen and (min-width: 1280px) {
    flex-basis: 40%;
  }

  @media screen and (min-width: 1440px) {
    flex-basis: 30%;
  }
`;

export const Advantageslist = styled.ul`
  @media screen and (min-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 15px;
    flex-basis: 55%;
  }

  @media screen and (min-width: 1280px) {
    flex-basis: 60%;
  }

  @media screen and (min-width: 1440px) {
    flex-basis: 70%;
  }
`;

export const ListItem = styled.li`
  padding: 10px;

  font-size: 15px;
  line-height: 1.26;

  border-radius: 8px;

  @media screen and (max-width: 959.98px) {
    &:not(:last-of-type) {
      margin-bottom: 16px;
    }
  }

  &::before {
    content: '';

    display: inline-block;

    width: 8px;
    height: 8px;
    margin: 0 8px 1px 8px;

    border-radius: 50%;

    background-color: #fa5502;
  }

  & > em {
    font-size: 16px;
    font-weight: 700;
  }

  @media screen and (min-width: 1280px) {
    &::before {
      width: 10px;
      height: 10px;
      margin: 0 10px 1px 10px;
    }
  }
`;
