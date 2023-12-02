import styled from '@emotion/styled';

export const Container = styled.div`
  &:nth-of-type(even) {
    background-color: #f8f8f8;
  }
`;

export const StyledArticle = styled.article`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px 16px 60px 16px;

  @media screen and (min-width: 768px) {
    padding: 30px 26px 80px 26px;
  }
`;

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;

  margin-bottom: 5px;
  padding: 2px 5px;

  border-bottom: 1px solid #fa7734;

  @media screen and (min-width: 480px) {
    margin-bottom: 10px;
  }
`;

export const Title = styled.h3`
  font-size: 15px;

  color: #fa5502;

  text-transform: uppercase;

  @media screen and (min-width: 400px) {
    font-size: 17px;
  }

  @media screen and (min-width: 480px) {
    font-size: 19px;
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const Date = styled.p`
  font-size: 12px;
  line-height: 1;

  color: #aeaeae;

  white-space: nowrap;

  & > span {
    font-weight: 700;

    color: #818181;
  }

  @media screen and (min-width: 480px) {
    font-size: 15px;
  }
`;

export const DataContainer = styled.div`
  @media screen and (max-width: 959.98px) {
    display: flex;
    flex-direction: column-reverse;
    gap: 10px;
  }
`;

export const MainInfoContainer = styled.div`
  margin-bottom: 5px;

  font-size: 15px;
  line-height: 1.2;

  & > p {
    padding: 10px;

    &::first-letter {
      padding-left: 24px;
    }
  }

  & > ul {
    padding: 10px;

    & > li {
      &:not(:last-of-type) {
        margin-bottom: 5px;
      }

      &::before {
        content: '';

        display: inline-block;

        width: 8px;
        height: 8px;
        margin: 0 8px 1px 8px;

        border-radius: 50%;

        background-color: #fa5502;
      }
    }
  }

  & b {
    font-weight: 700;
  }

  @media screen and (min-width: 480px) {
    margin-bottom: 10px;
  }
`;

export const ImagesContainer = styled.div`
  border-radius: 12px;

  box-shadow: 3px 6px 10px 2px rgba(0, 0, 0, 0.4);

  overflow: hidden;

  @media screen and (min-width: 960px) {
    display: inline-block;
    float: right;

    width: 50%;
    margin: 15px;
  }

  @media screen and (min-width: 1280px) {
    width: 55%;
  }
`;
