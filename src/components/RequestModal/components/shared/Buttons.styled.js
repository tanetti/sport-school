import styled from '@emotion/styled';
import { createTransition } from '@/utilities';

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  gap: 12px;

  @media screen and (min-width: 768px) {
    gap: 18px;
  }
`;

const SharedButton = styled.button`
  flex-grow: 0;
  flex-basis: calc(50% - 6px);

  padding: 8px 10px;

  font-size: 16px;

  border-width: 1px;
  border-style: solid;
  border-radius: 6px;

  cursor: pointer;

  &:disabled {
    cursor: initial;
  }

  @media screen and (min-width: 768px) {
    flex-basis: calc(50% - 9px);
  }
`;

export const OutlinedButton = styled(SharedButton)`
  color: #fa7734;
  background-color: transparent;

  border-color: #fa7734;

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
  }
`;

export const FilledButton = styled(SharedButton)`
  color: #fff;
  background-color: #fa7734e8;

  border-color: #fa5502;

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
  }
`;
