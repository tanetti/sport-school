import styled from '@emotion/styled';
// import { createTransition } from '@/utilities';

export const SectionsContainer = styled.fieldset`
  display: flex;
  flex-grow: 1;

  margin: 0 0 5px 0;
  padding: 20px;

  border: none;

  @media screen and (min-width: 380px) {
    margin: 0 0 15px 0;
  }

  @media screen and (min-width: 480px) {
    margin: 0 0 20px 0;
  }
`;
