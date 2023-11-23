import styled from '@emotion/styled';
import { createTransition } from '@/utilities';

export const AdminList = styled.ul`
  margin: 0 auto;

  @media screen and (max-width: 767.98px) {
    padding: 0 15px;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 20px;
  }

  @media screen and (min-width: 960px) {
    gap: 30px;
  }

  @media screen and (min-width: 1280px) {
    gap: 40px;
  }
`;

export const AdminItem = styled.li`
  position: relative;

  max-width: 400px;

  border-radius: 8px;

  box-shadow: 3px 6px 10px 2px rgba(0, 0, 0, 0.5);

  overflow: hidden;

  &:hover img {
    transform: scale(1.1);
  }

  @media screen and (max-width: 767.98px) {
    &:not(:last-of-type) {
      margin-bottom: 40px;
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
  bottom: -1px;
  left: 0;

  width: 100%;

  padding: 12px;

  font-size: 13px;

  color: #aeaeae;
  background-color: #000000d1;

  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  text-align: center;

  backdrop-filter: blur(4px);

  @media screen and (min-width: 768px) and (max-width: 959.98px) {
    padding: 10px;

    font-size: 12px;
  }
`;

export const Name = styled.span`
  display: block;

  padding-top: 12px;

  font-size: 16px;
  font-weight: 700;

  color: #fe7734;

  text-align: center;
  text-transform: uppercase;

  @media screen and (min-width: 768px) and (max-width: 959.98px) {
    padding-top: 10px;

    font-size: 15px;
  }
`;
