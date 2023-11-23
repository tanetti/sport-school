import styled from '@emotion/styled';

export const TeamImage = styled.img`
  display: block;

  width: 100%;
  max-width: 1280px;
  height: auto;
  margin: 0 auto 20px auto;

  border-width: 1px;
  border-style: solid;
  border-radius: 8px;
  border-color: #616161;

  box-shadow: 0px 8px 10px -3px rgba(0, 0, 0, 0.5);
`;

export const TeamDescriptionList = styled.ul`
  max-width: 1000px;
  margin: 0 auto;

  font-size: 14px;
  line-height: 1.2;
`;

export const DescriptionItem = styled.li`
  position: relative;

  padding: 16px;

  &::before {
    content: '';

    display: inline-block;

    width: 8px;
    height: 8px;
    margin: 0 8px 1px 8px;

    border-radius: 50%;

    background-color: #fa5502;
  }

  & > em {
    font-weight: 700;
  }

  @media screen and (min-width: 480px) {
    font-size: 15px;

    &::before {
      width: 10px;
      height: 10px;
      margin: 0 10px 1px 10px;
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 17px;
    line-height: 1.3;

    &::before {
      width: 12px;
      height: 12px;
    }
  }
`;
