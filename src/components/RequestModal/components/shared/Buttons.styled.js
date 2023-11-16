import styled from '@emotion/styled';
import { createTransition } from '@/utilities';

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
`;

export const OutlinedButton = styled.button`
  flex-grow: 0;
  flex-basis: calc(50% - 6px);

  padding: 8px 10px;

  font-size: 16px;

  color: #fa7734;
  background-color: transparent;

  border-width: 1px;
  border-style: solid;
  border-radius: 6px;
  border-color: #fa7734;

  cursor: pointer;

  transition: ${createTransition(
    ['color', 'background-color', 'border-color'],
    'standart'
  )};

  &:is(:hover, :focus) {
    color: #fa5502;
    background-color: #00000010;

    border-color: #fa5502;
  }

  &:disabled {
    color: #6e6e6e;
    background-color: #00000010;

    border-color: #6e6e6e;

    cursor: initial;
  }
`;

export const FilledButton = styled.button`
  flex-grow: 0;
  flex-basis: calc(50% - 6px);

  padding: 8px 10px;

  font-size: 16px;

  color: #fff;
  background-color: #fa7734e8;

  border-width: 1px;
  border-style: solid;
  border-radius: 6px;
  border-color: #fa5502;

  cursor: pointer;

  transition: ${createTransition(
    ['background-color', 'border-color'],
    'standart'
  )};

  &:is(:hover, :focus) {
    background-color: #fa5502;

    border-color: #fa5502;
  }

  &:disabled {
    background-color: #000000a0;

    border-color: #6e6e6e;

    cursor: initial;
  }
`;
