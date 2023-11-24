import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRequest } from '@/hooks';
import { Modal } from '@/components/shared';
import { SectionStep, InformationStep, StepNavigator } from './components';
import { TRANSITION_STANDART_DURATION_MS, API_URL } from '@/constants';
import { validationSchema } from './utilities';
import { StepContainer } from './RequestModal.styled';

export const RequestModal = ({ isOpened, closeModal, idControls }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isStepVisible, setIsStepVisible] = useState(true);
  const scrollContainerRef = useRef(null);

  const {
    control,
    getValues,
    setValue,
    watch,
    reset,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      section: null,
      name: '',
      surename: '',
      phone: '',
      weight: null,
      height: null,
      birthdate: null,
      medical: false,
    },
  });

  const { sendRequest, isPending, isSuccess, isError } = useRequest(isOpened);

  const onSubmit = formData => {
    sendRequest(formData);
  };

  useEffect(() => {
    const wakeupRequest = async () => {
      try {
        await axios.post(`${API_URL}/wakeup`);
      } catch {
        return;
      }
    };

    if (isOpened) {
      wakeupRequest();

      return;
    }

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

      scrollContainerRef.current?.scroll({ top: 0, behavior: 'smooth' });
    }, TRANSITION_STANDART_DURATION_MS);
  };

  const renderStep = () => {
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

      case 2: {
        const submitBlock = !!Object.keys(errors)?.length;

        return (
          <InformationStep
            onStepChange={onStepChange}
            control={control}
            getValues={getValues}
            submitBlock={submitBlock}
            isDisabled={isPending || isSuccess || isError}
            clearErrors={clearErrors}
          />
        );
      }

      default:
        return null;
    }
  };

  return (
    <Modal
      isOpened={isOpened}
      closeModal={closeModal}
      idControls={idControls}
      isControlsDisabled={isPending}
      isLoading={isPending}
      loadingCaption="Відправляємо..."
      isSuccess={isSuccess}
      successCaption="Готово!"
      successDescription="Дякуємо, ми зв'яжемося з Вами найближчим часом."
      isError={isError}
      errorCaption="Біда та й годі!"
      errorDescription="Щось пішло не за планом, будь ласка, спробуйте ще раз пізніше."
      focusTrigger={currentStep}
      title="Реєстрація"
      scrollContainerRef={scrollContainerRef}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <StepNavigator currentStep={currentStep} watch={watch} />

        <StepContainer
          noValidate
          isStepVisible={isStepVisible}
          onSubmit={handleSubmit(onSubmit)}
        >
          {renderStep()}
        </StepContainer>
      </div>
    </Modal>
  );
};

RequestModal.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  idControls: PropTypes.string.isRequired,
};
