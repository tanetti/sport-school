import styled from '@emotion/styled';
import { createTransition } from '@/utilities';

export const Container = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  &:focus + label {
    color: #fa5502;
  }

  &:checked + label > span {
    background-color: ${({ value }) => (value ? '#fa5502' : '#818181')};
  }

  &:checked + label > span::after {
    transform: ${({ value }) => (value ? 'translateX(100%)' : 'initial')};
  }

  &:disabled + label {
    color: #aeaeae;

    & > span {
      background-color: #aeaeae;
    }
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 20px;

  padding: 8px;

  font-size: 14px;
  font-weight: 700;

  color: #111;

  cursor: pointer;

  user-select: none;

  -webkit-tap-highlight-color: transparent;

  transition: ${createTransition(['color'], 'standart')};

  &:is(:hover, :focus) {
    color: #fa5502;
  }

  @media screen and (min-width: 340px) {
    font-size: 16px;
  }
`;

export const Switch = styled.span`
  position: relative;

  display: block;
  width: 56px;
  height: 30px;

  background-color: #818181;

  border-radius: 15px;

  transition: ${createTransition(['background-color'], 'standart')};

  &::after {
    content: '';

    position: absolute;
    top: 2px;
    left: 2px;

    height: calc(100% - 4px);
    aspect-ratio: 1/1;

    background-color: #fff;

    border-radius: 50%;

    transition: ${createTransition(['transform'], 'standart')};
  }
`;
