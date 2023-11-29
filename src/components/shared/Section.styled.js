import styled from '@emotion/styled';

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  padding-top: 50px;
  padding-bottom: 60px;
  padding-left: 10px;
  padding-right: 10px;

  overflow: hidden;

  &:nth-of-type(odd) {
    background-color: #f8f8f8;
  }

  @media screen and (min-width: 768px) {
    padding-top: 70px;
    padding-bottom: 80px;
    padding-left: 26px;
    padding-right: 26px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 90px;
    padding-bottom: 100px;
  }
`;

export const SectionsTitle = styled.h2`
  margin-bottom: 25px;

  font-size: 20px;
  font-weight: 700;

  color: #fa5505;

  text-align: center;

  text-transform: uppercase;

  @media screen and (min-width: 410px) {
    margin-bottom: 30px;

    font-size: 22px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 35px;

    font-size: 26px;
  }
`;
