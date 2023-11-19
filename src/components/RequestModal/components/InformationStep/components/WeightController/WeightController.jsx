import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { RequestField } from '../shared';
import { WeightFormatInput } from './WeightFormatInput';

export const WeightController = ({ control }) => (
  <Controller
    name="weight"
    control={control}
    render={({ field, fieldState }) => (
      <RequestField
        field={field}
        fieldState={fieldState}
        label={'Вага'}
        inputComponent={WeightFormatInput}
        type="number"
        inputMode="decimal"
        hintBage="кг"
      />
    )}
  />
);

WeightController.propTypes = {
  control: PropTypes.object.isRequired,
};
