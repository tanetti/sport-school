import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { RequestField } from '../shared';
import { PhoneFormatInput } from './PhoneFormatInput';

export const PhoneController = ({ control, isDisabled }) => (
  <Controller
    name="phone"
    control={control}
    disabled={isDisabled}
    render={({ field, fieldState }) => (
      <RequestField
        field={field}
        fieldState={fieldState}
        label="Номер телефону"
        inputComponent={PhoneFormatInput}
        inputMode="tel"
      />
    )}
  />
);

PhoneController.propTypes = {
  control: PropTypes.object.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};
