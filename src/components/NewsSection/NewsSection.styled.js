import styled from '@emotion/styled';

export const StyledNewsSection = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  padding-top: 50px;
  padding-bottom: 60px;

  overflow: hidden;

  @media screen and (min-width: 768px) {
    padding-top: 70px;
    padding-bottom: 80px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 90px;
    padding-bottom: 100px;
  }
`;
