import styled from '@emotion/styled';

export const MapFrame = styled.iframe`
  width: 100%;
  height: 180px;

  border-width: 1px;
  border-style: solid;
  border-radius: 6px;
  border-color: #fa5502;

  box-shadow: 0px 8px 10px -3px rgba(0, 0, 0, 0.5);

  @media screen and (min-width: 410px) {
    width: 340px;
    height: 200px;
  }

  @media screen and (min-width: 620px) {
    width: 400px;
    height: 240px;
  }

  @media screen and (min-width: 768px) {
    width: 500px;
    height: 300px;
  }
`;
