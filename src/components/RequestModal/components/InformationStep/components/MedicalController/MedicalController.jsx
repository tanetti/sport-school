import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { Container, Input, Label, Switch } from './MedicalController.styled';

export const MedicalController = ({ control }) => (
  <Controller
    name="medical"
    control={control}
    render={({ field }) => (
      <Container>
        <Input
          {...field}
          id="medial-checkbox"
          type="checkbox"
          aria-label="Перемикач наявності дозволу від лікаря"
          aria-checked={field.value}
          className="visually_hidden"
        />

        <Label htmlFor="medial-checkbox">
          <Switch />
          Дозвіл від лікаря
        </Label>
      </Container>
    )}
  />
);

MedicalController.propTypes = {
  control: PropTypes.object.isRequired,
};
