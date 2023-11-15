import PropTypes from 'prop-types';
import { useState } from 'react';
import { Modal } from '@/components/shared';
import { TRANSITION_STANDART_DURATION_MS } from '@/constants';
import { StepContainer } from './RequestModal.styled';

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
    <Modal isOpened={isOpened} closeModal={onModalClose} title="Запит запису">
      <StepContainer isStepVisible={isStepVisible}>
        {step === 1 ? (
          <button type="button" onClick={() => onStepChange(2)}>
            next
          </button>
        ) : null}

        {step === 2 ? (
          <button type="button" onClick={() => onStepChange(1)}>
            previous
          </button>
        ) : null}
      </StepContainer>
    </Modal>
  );
};

RequestModal.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};
