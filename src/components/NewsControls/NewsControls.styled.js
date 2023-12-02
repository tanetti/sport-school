import styled from '@emotion/styled';
import { createTransition } from '@/utilities';

export const ControlsContainer = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;

  padding: 0 10px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    gap: 16px;

    padding: 0 16px;
    margin-bottom: 50px;
  }
`;

export const Switch = styled.button`
  min-width: 80px;
  padding: 8px 12px 7px 12px;

  font-size: 15px;
  font-weight: 700;

  color: ${({ isActive }) => (isActive ? '#fff' : '#000')};
  background-color: ${({ isActive }) => (isActive ? '#fa7734' : '#fff')};

  border-width: 1px;
  border-style: solid;
  border-color: #fa7734;
  border-radius: 10px;

  cursor: pointer;

  transition: ${createTransition(
    ['color', 'background-color', 'border-color', 'box-shadow'],
    'standart'
  )};

  &:is(:focus, :hover) {
    color: #fff;
    background-color: #fa5502;
    border-color: #fa5502;

    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }

  @media screen and (min-width: 1280px) {
    min-width: 100px;
    padding: 10px 14px 8px 14px;

    font-size: 16px;
  }
`;
