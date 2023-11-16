import PropTypes from 'prop-types';
import { ButtonsContainer, FilledButton, OutlinedButton } from '../shared';

export const InformationStep = ({ onStepChange }) => {
  return (
    <>
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
