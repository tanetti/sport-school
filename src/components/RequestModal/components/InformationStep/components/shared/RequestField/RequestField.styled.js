import styled from '@emotion/styled';
import { createTransition } from '@/utilities';

export const Container = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  width: 100%;

  color: #111;

  border-width: 2px;
  border-style: solid;
  border-radius: 8px;
  border-color: ${({ error }) => (error ? '#db1a04a1' : '#aeaeae')};

  transition: ${createTransition(['color', 'border-color'], 'long')};

  cursor: text;

  & > div {
    opacity: ${({ error }) => (error ? 1 : 0)};
    visibility: ${({ error }) => (error ? 'visible' : 'hidden')};
  }

  &:hover {
    border-color: ${({ error }) => (error ? '#db1a04' : '#fa7734aa')};

    & > label {
      color: ${({ error }) => (error ? '#db1a04' : '#fa7734ee')};
    }
  }

  &:focus-within {
    border-color: ${({ error }) => (error ? '#db1a04' : '#fa5502')};

    & > label {
      ${({ error }) => (error ? '#db1a04' : '#fa5502')};
    }
  }

  &:has(input:disabled) {
    border-color: #e1e1e1;

    color: #aeaeae;

    & > label {
      color: #e1e1e1;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 12px 8px 12px;

  font-weight: 700;

  border-width: 0;
  border-radius: 8px;

  color: inherit;
  caret-color: #aeaeae;

  outline: transparent;

  overflow: hidden;
  text-overflow: ellipsis;

  text-transform: capitalize;

  &:is(:focus, :not(:placeholder-shown)) + label {
    transform: translateY(-156%) scale(0.8);

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

  transform-origin: left;

  transition: ${createTransition(
    ['color', 'background-color', 'transform'],
    'standart'
  )};
`;

export const ErrorLabel = styled.div`
  position: absolute;
  bottom: -8px;
  left: 10px;

  padding: 0 5px;

  font-size: 12px;
  font-weight: 700;

  color: #db1a04;
  background-color: #fff;

  border-radius: 6px;

  transition: ${createTransition(['opacity', 'visibility'], 'standart')};
`;

export const HintBage = styled.span`
  padding: 0 8px;

  font-weight: 700;

  color: #aeaeae;

  text-transform: lowercase;
`;
