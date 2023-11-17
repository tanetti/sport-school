import PropTypes from 'prop-types';
import { ButtonsContainer, FilledButton, OutlinedButton } from '../shared';
import { SectionsContainer } from './InformationStep.styled';

export const InformationStep = ({ onStepChange }) => {
  return (
    <>
      <SectionsContainer>123</SectionsContainer>

      <ButtonsContainer>
        <OutlinedButton type="button" onClick={() => onStepChange(1)}>
          Назад
        </OutlinedButton>

        <FilledButton type="button" onClick={() => null}>
          Записатися
        </FilledButton>
      </ButtonsContainer>
    </>
  );
};

InformationStep.propTypes = {
  onStepChange: PropTypes.func.isRequired,
};
