import PropTypes from 'prop-types';
import { useState } from 'react';
import { Modal } from '@/components/shared';
import { SectionStep } from './components';
import { TRANSITION_STANDART_DURATION_MS } from '@/constants';
import { StepContainer } from './RequestModal.styled';

const selectStep = (stepNumber, onStepChange) => {
  switch (stepNumber) {
    case 1:
      return <SectionStep onStepChange={onStepChange} />;

    case 2:
      return (
        <button type="button" onClick={() => onStepChange(1)}>
          previous
        </button>
      );

    default:
      return null;
  }
};

export const RequestModal = ({ isOpened, closeModal }) => {
  const [step, setStep] = useState(1);
  const [isStepVisible, setIsStepVisible] = useState(true);

  const onModalClose = () => {
    setStep(1);

    closeModal();
  };

  const onStepChange = stepNumber => {
    setIsStepVisible(false);

    setTimeout(() => {
      setStep(stepNumber);

      setIsStepVisible(true);
    }, TRANSITION_STANDART_DURATION_MS);
  };

  return (
    <Modal isOpened={isOpened} closeModal={onModalClose} title="Реєстрація">
      <StepContainer noValidate isStepVisible={isStepVisible}>
        {selectStep(step, onStepChange)}
      </StepContainer>
    </Modal>
  );
};

RequestModal.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};
