import styled from '@emotion/styled';
import { TRANSITION_600_DURATION, TRANSITION_ANIMATION } from '@/constants';

export const FooterContainer = styled.footer`
  justify-self: flex-end;

  background-color: #111;

  box-shadow: 0px 12px 8px 13px rgba(36, 36, 36, 0.82);
`;

export const ContactContainer = styled.div`
  width: 100%;

  padding: 10px 8px;
`;

export const ContactTitle = styled.p`
  margin-bottom: 5px;

  font-size: 13px;

  color: #fa5502;

  text-align: center;

  & > strong {
    font-size: 15px;
    font-weight: 700;

    white-space: nowrap;
  }
`;

export const CopyrightContainer = styled.div`
  padding: 8px;

  color: #fff;

  border-top: 1px solid #444;
`;

export const CopyrightText = styled.p`
  font-size: 10px;

  text-align: center;

  & > span {
    display: none;

    color: #aeaeae;

    @media screen and (min-width: 768px) and (max-width: 959.98px) {
      display: inline;
    }
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0 15px;
`;

export const SocialsList = styled.ul`
  display: flex;
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;

  padding: 10px 7px;

  color: #fff;
  font-size: 14px;
  font-weight: 700;

  transition: color ${TRANSITION_600_DURATION} ${TRANSITION_ANIMATION};

  & > svg {
    width: 26px;
    fill: currentColor;
  }

  & > span {
    display: none;
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
`;

export const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;

  padding: 10px 7px;

  color: #fff;
  font-size: 14px;
  font-weight: 700;

  transition: color ${TRANSITION_600_DURATION} ${TRANSITION_ANIMATION};

  & > svg {
    width: 26px;
    fill: currentColor;
  }

  & > span {
    display: none;
  }

  &:hover {
    color: #fa5502;
  }
`;
