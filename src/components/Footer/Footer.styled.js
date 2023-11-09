import styled from '@emotion/styled';
import { TRANSITION_600_DURATION, TRANSITION_ANIMATION } from '@/constants';

export const FooterContainer = styled.footer`
  justify-self: flex-end;

  background-color: #111;

  box-shadow: 0px 12px 8px 13px rgba(36, 36, 36, 0.82);

  @media screen and (min-width: 960px) {
    display: flex;
    flex-direction: row-reverse;
  }
`;

export const ContactContainer = styled.div`
  width: 100%;

  padding: 10px 8px 4px 8px;

  @media screen and (min-width: 960px) {
    width: auto;

    padding: 10px 8px;
  }
`;

export const ContactTitle = styled.p`
  margin-bottom: 5px;

  font-size: 13px;

  color: #fa7734;

  text-align: center;

  & > strong {
    font-size: 15px;
    font-weight: 700;

    white-space: nowrap;
  }

  @media screen and (min-width: 960px) {
    font-size: 15px;

    & > strong {
      font-size: 17px;
    }
  }
`;

export const CopyrightContainer = styled.div`
  padding: 4px;

  color: #fff;

  @media screen and (min-width: 960px) {
    display: flex;
    flex-grow: 1;

    padding: 10px 8px;
  }
`;

export const CopyrightText = styled.p`
  font-size: 10px;

  text-align: center;

  & > span {
    display: none;

    color: #aeaeae;
  }

  @media screen and (min-width: 768px) and (max-width: 959.98px) {
    & > span {
      display: inline;
    }
  }

  @media screen and (min-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;

    font-size: 12px;

    & > span {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 1;

      height: 100%;

      font-size: clamp(10px, 1.3vw, 32px);
    }
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0 15px;

  @media screen and (min-width: 480px) {
    flex-direction: row-reverse;
    gap: 40px;

    padding: 0 18px 0 8px;
  }
`;

export const SocialsList = styled.ul`
  display: flex;

  @media screen and (min-width: 480px) {
    align-items: flex-end;
  }
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;

  padding: 10px 7px;

  color: #fff;

  transition: color ${TRANSITION_600_DURATION} ${TRANSITION_ANIMATION};

  & > svg {
    width: 26px;
    fill: currentColor;
  }

  &:hover {
    color: #fa5502;
  }
`;

export const SocialLinkYouTube = styled(SocialLink)`
  padding: 7px 7px;

  & > svg {
    width: 32px;
  }
`;

export const ContactList = styled.ul`
  display: flex;

  @media screen and (min-width: 480px) {
    flex-direction: column;
  }
`;

export const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;

  padding: 10px 7px;

  color: #fff;

  transition: color ${TRANSITION_600_DURATION} ${TRANSITION_ANIMATION};

  & > svg {
    width: 26px;
    fill: currentColor;
  }

  & > span {
    display: none;

    color: #aeaeae;

    transition: color ${TRANSITION_600_DURATION} ${TRANSITION_ANIMATION};
  }

  &:hover {
    color: #fa5502;

    & > span {
      color: #fa7734;
    }
  }

  @media screen and (min-width: 480px) {
    padding: 6px 0;

    font-size: 12px;

    & > span {
      display: inline;
    }

    & > svg {
      width: 20px;
    }
  }
`;
