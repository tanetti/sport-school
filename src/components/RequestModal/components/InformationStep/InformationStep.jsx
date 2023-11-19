import PropTypes from 'prop-types';
import { ButtonsContainer, FilledButton, OutlinedButton } from '../shared';
import {
  NameController,
  SurenameController,
  PhoneController,
  HeightController,
  WeightController,
  BirthdateController,
} from './components';
import { FieldCouple, SectionsContainer } from './InformationStep.styled';

export const InformationStep = ({
  onStepChange,
  control,
  getValues,
  submitBlock,
  clearErrors,
  handleSubmit,
}) => {
  const onStepBack = () => {
    clearErrors();

    onStepChange(1);
  };

  const onSubmit = formData => {
    console.log(formData);
  };

  return (
    <>
      <SectionsContainer>
        <legend className="visually_hidden">Заповніть дані</legend>

        <FieldCouple>
          <NameController control={control} />

          <SurenameController control={control} />
        </FieldCouple>

        <FieldCouple>
          <PhoneController control={control} />

          <BirthdateController control={control} getValues={getValues} />
        </FieldCouple>

        <FieldCouple>
          <HeightController control={control} />

          <WeightController control={control} />
        </FieldCouple>
      </SectionsContainer>

      <ButtonsContainer>
        <FilledButton
          type="submit"
          disabled={submitBlock}
          onClick={handleSubmit(onSubmit)}
        >
          Записатися
        </FilledButton>

        <OutlinedButton type="button" onClick={onStepBack}>
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
  clearErrors: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
