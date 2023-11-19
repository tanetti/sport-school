import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { RequestField } from '../shared';
import { HeightFormatInput } from './HeightFormatInput';

export const HeightController = ({ control }) => (
  <Controller
    name="height"
    control={control}
    render={({ field, fieldState }) => (
      <RequestField
        field={field}
        fieldState={fieldState}
        label={'Зріст'}
        inputComponent={HeightFormatInput}
        inputMode="decimal"
        hintBage="см"
      />
    )}
  />
);

HeightController.propTypes = {
  control: PropTypes.object.isRequired,
};
