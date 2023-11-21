import PropTypes from 'prop-types';
import { ButtonsContainer, FilledButton, OutlinedButton } from '../shared';
import {
  NameController,
  SurenameController,
  PhoneController,
  HeightController,
  WeightController,
  BirthdateController,
  MedicalController,
} from './components';
import { FieldCouple, SectionsContainer } from './InformationStep.styled';

export const InformationStep = ({
  onStepChange,
  control,
  getValues,
  submitBlock,
  isDisabled,
  clearErrors,
}) => {
  const onStepBack = () => {
    clearErrors();

    onStepChange(1);
  };

  return (
    <>
      <SectionsContainer disabled={isDisabled}>
        <legend className="visually_hidden">Заповніть дані</legend>

        <FieldCouple>
          <NameController control={control} isDisabled={isDisabled} />

          <SurenameController control={control} isDisabled={isDisabled} />
        </FieldCouple>

        <FieldCouple>
          <PhoneController control={control} isDisabled={isDisabled} />

          <BirthdateController
            control={control}
            getValues={getValues}
            isDisabled={isDisabled}
          />
        </FieldCouple>

        <FieldCouple>
          <HeightController control={control} isDisabled={isDisabled} />

          <WeightController control={control} isDisabled={isDisabled} />
        </FieldCouple>

        <MedicalController control={control} isDisabled={isDisabled} />
      </SectionsContainer>

      <ButtonsContainer>
        <FilledButton type="submit" disabled={submitBlock || isDisabled}>
          Записатися
        </FilledButton>

        <OutlinedButton
          type="button"
          disabled={isDisabled}
          onClick={onStepBack}
        >
          Назад
        </OutlinedButton>
      </ButtonsContainer>
    </>
  );
};

InformationStep.propTypes = {
  onStepChange: PropTypes.func.isRequired,
  control: PropTypes.object.isRequired,
  getValues: PropTypes.func.isRequired,
  submitBlock: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  clearErrors: PropTypes.func.isRequired,
};
