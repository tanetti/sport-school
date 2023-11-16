import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Modal } from '@/components/shared';
import { SectionStep, InformationStep } from './components';
import { TRANSITION_STANDART_DURATION_MS } from '@/constants';
import { StepContainer } from './RequestModal.styled';
import { useForm } from 'react-hook-form';

export const RequestModal = ({ isOpened, closeModal }) => {
  const [step, setStep] = useState(1);
  const [isStepVisible, setIsStepVisible] = useState(true);

  const { setValue, watch, reset } = useForm({
    defaultValues: {
      section: null,
    },
  });

  useEffect(() => {
    if (isOpened) return;

    const clearForm = setTimeout(() => {
      setStep(1);
      reset();
    }, TRANSITION_STANDART_DURATION_MS);

    return () => clearTimeout(clearForm);
  }, [isOpened, reset]);

  const onStepChange = stepNumber => {
    setIsStepVisible(false);

    setTimeout(() => {
      setStep(stepNumber);

      setIsStepVisible(true);
    }, TRANSITION_STANDART_DURATION_MS);
  };

  const selectStep = stepNumber => {
    switch (stepNumber) {
      case 1:
        return (
          <SectionStep
            onStepChange={onStepChange}
            closeModal={closeModal}
            setValue={setValue}
            watch={watch}
          />
        );

      case 2:
        return <InformationStep onStepChange={onStepChange} />;

      default:
        return null;
    }
  };

  return (
    <Modal isOpened={isOpened} closeModal={closeModal} title="Реєстрація">
      <StepContainer noValidate isStepVisible={isStepVisible}>
        {selectStep(step)}
      </StepContainer>
    </Modal>
  );
};

RequestModal.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};
