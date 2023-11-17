import styled from '@emotion/styled';
import { createTransition } from '@/utilities';

export const NavigatorContainer = styled.div`
  display: flex;

  margin-bottom: 2px;

  @media screen and (min-width: 380px) {
    margin-bottom: 10px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 15px;
  }
`;

export const StepItem = styled.div`
  position: relative;

  flex-grow: 0;
  flex-basis: 100%;

  padding: 4px 4px 3px 14px;

  font-size: 9px;
  line-height: 1;

  color: ${({ active, passed }) => {
    if (active) return '#fa5502';
    if (passed) return '#fff';
    return '#aeaeae';
  }};

  background-color: ${({ active, passed }) => {
    if (active) return '#fff';
    if (passed) return '#fa7734';
    return '#eee';
  }};

  border-width: 2px;
  border-style: solid;
  border-color: ${({ active, passed }) =>
    active || passed ? '#fa7734' : '#aeaeae'};

  text-align: center;

  overflow: hidden;

  transition: ${createTransition(
    ['color', 'background-color', 'border-color'],
    'standart'
  )};

  &:first-of-type {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  &:not(:first-of-type) {
    border-left-width: 0;
  }

  &:not(:last-of-type) {
    border-right-width: 0;
  }

  &:last-of-type {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  @media screen and (min-width: 340px) {
    font-size: 10px;
  }

  @media screen and (min-width: 370px) {
    font-size: 11px;
  }

  @media screen and (min-width: 400px) {
    font-size: 12px;
  }
`;

export const PassedLabel = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  padding: 4px 4px 3px 14px;

  font-weight: 700;

  background-color: ${({ passed }) => (passed ? '#fa7734' : '#fff')};

  opacity: ${({ passed }) => (passed ? 1 : 0)};
  visibility: ${({ passed }) => (passed ? 'visible' : 'hidden')};

  transition: ${createTransition(
    ['opacity', 'background-color', 'visibility'],
    'standart'
  )};
`;

export const Arrow = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  height: 100%;

  aspect-ratio: 1/1;

  font-weight: 700;

  background-color: ${({ active, passed, next }) => {
    if (next) return '#fff';
    if (active || passed) return '#fa7734';
    return 'transparent';
  }};

  transform: rotate(45deg) translate(-50%, 50%);

  transition: ${createTransition('background-color', 'standart')};
`;
