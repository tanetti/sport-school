import styled from '@emotion/styled';
import { createTransition } from '@/utilities';

export const AdminList = styled.ul`
  margin: 0 auto;

  @media screen and (max-width: 767.98px) {
    padding: 0 15px;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 15px;
  }

  @media screen and (min-width: 960px) {
    gap: 20px;
  }

  @media screen and (min-width: 1280px) {
    gap: 30px;
  }
`;

export const AdminItem = styled.li`
  position: relative;

  max-width: 420px;

  border-width: 1px;
  border-style: solid;
  border-radius: 8px;
  border-color: #e1e1e1;

  box-shadow: 0px 8px 10px -3px rgba(0, 0, 0, 0.5);

  overflow: hidden;

  &:hover img {
    transform: scale(1.1);
  }

  @media screen and (max-width: 767.98px) {
    &:not(:last-of-type) {
      margin-bottom: 30px;
    }
  }
`;

export const ItemImage = styled.img`
  display: block;

  width: 100%;
  height: auto;

  transform-origin: top;

  transition: ${createTransition('transform', 'standart')};
`;

export const ItemInfo = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;

  width: 100%;

  padding: 8px 12px 12px 12px;

  font-size: 13px;

  color: #616161;
  background-color: #ffffffe1;

  text-align: center;

  backdrop-filter: blur(4px);

  @media screen and (min-width: 768px) and (max-width: 959.98px) {
    padding: 6px 10px 10px 10px;

    font-size: 12px;
  }
`;

export const Name = styled.span`
  display: block;

  padding-top: 12px;

  font-size: 16px;
  font-weight: 700;

  color: #fe5502;

  text-align: center;
  text-transform: uppercase;

  @media screen and (min-width: 768px) and (max-width: 959.98px) {
    padding-top: 10px;

    font-size: 15px;
  }
`;
