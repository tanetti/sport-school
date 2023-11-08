import styled from '@emotion/styled';
import {
  MAX_PAGE_WIDTH,
  TRANSITION_ANIMATION,
  TRANSITION_600_DURATION,
} from '@/constants';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  width: 100vw;

  background-color: ${({ isScrolled }) =>
    isScrolled ? '#000000a0' : 'transparent'};

  box-shadow: ${({ isScrolled }) =>
    isScrolled ? '4px 4px 14px 1px rgba(0, 0, 0, 0.2)' : 'none'};

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-color: ${({ isScrolled }) =>
    isScrolled ? '#000000da' : 'transparent'};

  transition: background-color ${TRANSITION_600_DURATION}
      ${TRANSITION_ANIMATION},
    box-shadow ${TRANSITION_600_DURATION} ${TRANSITION_ANIMATION},
    border-color ${TRANSITION_600_DURATION} ${TRANSITION_ANIMATION};
`;

export const HeaderSizer = styled.div`
  display: flex;
  justify-content: space-between;

  max-width: ${MAX_PAGE_WIDTH}px;
  margin: 0 auto;
  padding: 10px 8px;

  backdrop-filter: ${({ isScrolled }) =>
    isScrolled ? 'blur(6px)' : 'initial'};

  @media screen and (min-width: 768px) {
    padding: 20px 16px;
  }
`;

export const LogoImg = styled.img`
  width: 60px;

  @media screen and (min-width: 768px) {
    width: 90px;
  }

  @media screen and (min-width: 1280px) {
    width: 120px;
  }
`;
