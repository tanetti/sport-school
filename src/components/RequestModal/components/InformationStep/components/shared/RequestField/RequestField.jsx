import PropTypes from 'prop-types';
import { Container, Input, Label } from './RequestField.styled';

export const RequestField = ({
  field,
  fieldState,
  label,
  inputMode = 'text',
}) => {
  const { name } = field;
  const { error } = fieldState;

  console.log(error);

  return (
    <Container>
      <Input
        id={`input-field-${name}`}
        type="text"
        placeholder=""
        {...field}
        inputMode={inputMode}
      />

      {label ? <Label htmlFor={`input-field-${name}`}>{label}</Label> : null}
    </Container>
  );
};

RequestField.propTypes = {
  field: PropTypes.object.isRequired,
  fieldState: PropTypes.object.isRequired,
  label: PropTypes.string,
  inputMode: PropTypes.string,
};
