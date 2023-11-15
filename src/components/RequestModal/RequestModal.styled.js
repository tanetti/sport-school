import styled from '@emotion/styled';
import { createTransition } from '@/utilities';

export const StepContainer = styled.div`
  opacity: ${({ isStepVisible }) => (isStepVisible ? 1 : 0)};
  visibility: ${({ isStepVisible }) => (isStepVisible ? 'visible' : 'hidden')};

  transition: ${createTransition(['opacity', 'visibility'], 'standart')};
`;