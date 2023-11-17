import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Modal } from '@/components/shared';
import { SectionStep, InformationStep, StepNavigator } from './components';
import { TRANSITION_STANDART_DURATION_MS } from '@/constants';
import { StepContainer } from './RequestModal.styled';

export const RequestModal = ({ isOpened, closeModal }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isStepVisible, setIsStepVisible] = useState(true);

  const { setValue, watch, reset } = useForm({
    defaultValues: {
      section: null,
    },
  });

  useEffect(() => {
    if (isOpened) return;

    const clearForm = setTimeout(() => {
      setCurrentStep(1);
      reset();
    }, TRANSITION_STANDART_DURATION_MS);

    return () => clearTimeout(clearForm);
  }, [isOpened, reset]);

  const onStepChange = stepNumber => {
    setIsStepVisible(false);

    setTimeout(() => {
      setCurrentStep(stepNumber);

      setIsStepVisible(true);
    }, TRANSITION_STANDART_DURATION_MS);
  };

  const renderStep = currentStep => {
    switch (currentStep) {
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
      <StepNavigator currentStep={currentStep} watch={watch} />

      <StepContainer noValidate isStepVisible={isStepVisible}>
        {renderStep(currentStep)}
      </StepContainer>
    </Modal>
  );
};

RequestModal.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};
