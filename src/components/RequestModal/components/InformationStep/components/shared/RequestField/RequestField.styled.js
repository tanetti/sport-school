import styled from '@emotion/styled';
import { createTransition } from '@/utilities';

export const Container = styled.div`
  position: relative;

  width: 100%;

  border-width: 2px;
  border-style: solid;
  border-radius: 8px;
  border-color: #aeaeae;

  transition: ${createTransition(['border-color'], 'long')};

  cursor: text;

  &:hover {
    border-color: #fa7734aa;

    & > label {
      color: #fa7734ee;
    }
  }

  &:focus-within {
    border-color: #fa5502;

    & > label {
      color: #fa5502;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 12px 8px 12px;

  font-weight: 700;

  border-width: 0;
  border-radius: 8px;

  color: #111;
  caret-color: #aeaeae;

  outline: transparent;

  overflow: hidden;
  text-overflow: ellipsis;

  &:is(:focus, :not(:placeholder-shown)) + label {
    transform: translateY(-156%) translateX(-6px) scale(0.8);

    background-color: #fff;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 15px;

  padding: 0 6px;

  color: #a1a1a1;
  background-color: transparent;

  border-radius: 6px;

  pointer-events: none;

  transform: translateY(-47%);

  transition: ${createTransition(
    ['color', 'background-color', 'transform'],
    'standart'
  )};
`;
