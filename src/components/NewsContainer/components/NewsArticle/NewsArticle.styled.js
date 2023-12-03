import styled from '@emotion/styled';
import { createTransition } from '@/utilities';

export const StyledArticle = styled.article`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 30px 16px 60px 16px;

  @media screen and (min-width: 768px) {
    padding: 40px 26px 80px 26px;
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

export const MainInfoContainer = styled.div`
  font-size: 15px;
  line-height: 1.2;

  overflow: hidden;

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
`;

export const ImagesContainer = styled.div`
  margin: 16px 10px 16px 10px;

  border-radius: 12px;

  box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.4);

  overflow: hidden;

  @media screen and (min-width: 960px) {
    float: right;

    width: 50%;
    margin: 10px 10px 16px 16px;
  }

  @media screen and (min-width: 1280px) {
    width: 55%;
  }
`;

export const ExpandButton = styled.button`
  min-width: 160px;
  margin: 30px 20px 0 10px;
  padding: 9px 12px 7px 12px;

  font-size: 15px;

  color: #616161;
  background-color: transparent;

  border-width: 1px;
  border-style: solid;
  border-color: #fa7734;
  border-radius: 10px;

  cursor: pointer;

  transition: ${createTransition(['color', 'border-color'], 'standart')};

  &:is(:focus, :hover) {
    color: #fa5502;
    border-color: #fa5502;
  }

  @media screen and (max-width: 959.98px) {
    float: right;
  }
`;
