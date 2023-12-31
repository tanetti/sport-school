import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { RequestField } from '../shared';

export const SurenameController = ({ control, isDisabled }) => (
  <Controller
    name="surename"
    control={control}
    disabled={isDisabled}
    render={({ field, fieldState }) => (
      <RequestField field={field} fieldState={fieldState} label="Прізвище" />
    )}
  />
);

SurenameController.propTypes = {
  control: PropTypes.object.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};
