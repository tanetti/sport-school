import styled from '@emotion/styled';

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  padding-top: 20px;
  padding-bottom: 25px;
  padding-left: 10px;
  padding-right: 10px;

  &:nth-of-type(odd) {
    background-color: #f8f8f8;
  }

  &:nth-of-type(2) {
    padding-top: 40px;
  }

  &:last-of-type {
    padding-bottom: 50px;
  }

  @media screen and (min-width: 768px) {
    padding-top: 35px;
    padding-bottom: 40px;
    padding-left: 26px;
    padding-right: 26px;

    &:nth-of-type(2) {
      padding-top: 70px;
    }

    &:last-of-type {
      padding-bottom: 80px;
    }
  }

  @media screen and (min-width: 1440px) {
    padding-top: 45px;
    padding-bottom: 50px;

    &:nth-of-type(2) {
      padding-top: 90px;
    }

    &:last-of-type {
      padding-bottom: 100px;
    }
  }
`;

export const SectionsTitle = styled.h2`
  margin-bottom: 15px;

  font-size: 20px;
  font-weight: 700;

  color: #fa5505;

  text-align: center;

  text-transform: uppercase;

  @media screen and (min-width: 410px) {
    font-size: 22px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 25px;

    font-size: 26px;
  }
`;
