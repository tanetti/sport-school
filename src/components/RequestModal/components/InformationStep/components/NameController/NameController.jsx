import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { RequestField } from '../shared';

export const NameController = ({ control }) => (
  <Controller
    name="name"
    control={control}
    render={({ field, fieldState }) => (
      <RequestField field={field} fieldState={fieldState} label={"Ім'я"} />
    )}
  />
);

NameController.propTypes = {
  control: PropTypes.object.isRequired,
};
