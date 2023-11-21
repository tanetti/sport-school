import styled from '@emotion/styled';

export const SectionsContainer = styled.fieldset`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;

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

export const FieldCouple = styled.div`
  &:not(:last-of-type) {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 767.98px) {
    & :not(:last-of-type) {
      margin-bottom: 20px;
    }
  }

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 16px;

    &:not(:last-of-type) {
      margin-bottom: 30px;
    }
  }
`;
