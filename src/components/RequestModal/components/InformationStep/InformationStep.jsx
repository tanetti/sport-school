import PropTypes from 'prop-types';
import { ButtonsContainer, FilledButton, OutlinedButton } from '../shared';
import { SectionsContainer } from './InformationStep.styled';
import { RequestField } from './components/shared';
import { Controller } from 'react-hook-form';

export const InformationStep = ({ onStepChange, control, handleSubmit }) => {
  const onSubmit = formData => {
    console.log(formData);
  };

  return (
    <>
      <SectionsContainer>
        <legend className="visually_hidden">Заповніть дані</legend>

        <Controller
          name="name"
          control={control}
          render={({ field, fieldState }) => (
            <RequestField
              field={field}
              fieldState={fieldState}
              label={"Ім'я"}
            />
          )}
        />
      </SectionsContainer>

      <ButtonsContainer>
        <FilledButton type="submit" onClick={handleSubmit(onSubmit)}>
          Записатися
        </FilledButton>

        <OutlinedButton type="button" onClick={() => onStepChange(1)}>
          Назад
        </OutlinedButton>
      </ButtonsContainer>
    </>
  );
};

InformationStep.propTypes = {
  onStepChange: PropTypes.func.isRequired,
  control: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
