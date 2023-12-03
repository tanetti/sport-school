import styled from '@emotion/styled';

export const NoNews = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  padding: 80px 40px;

  font-size: 22px;
`;

export const Item = styled.div`
  &:nth-of-type(even) {
    background-color: #f8f8f8;
  }
`;
