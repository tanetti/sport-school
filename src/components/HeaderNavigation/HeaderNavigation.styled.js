import styled from '@emotion/styled';
import { TRANSITION_600_DURATION, TRANSITION_ANIMATION } from '@/constants';

export const NavigationContainer = styled.nav`
  color: #fff;

  @media screen and (max-width: 797.98px) {
    position: fixed;
    top: 0;
    right: 0;

    min-width: 200px;
    height: 100vh;

    padding: 20px 16px;

    background-color: #000000e0;

    backdrop-filter: blur(6px);

    transform: ${({ isMenuOpened }) =>
      isMenuOpened ? 'translateX(0)' : 'translateX(102%)'};

    transition: transform ${TRANSITION_600_DURATION} ${TRANSITION_ANIMATION};
  }
`;
