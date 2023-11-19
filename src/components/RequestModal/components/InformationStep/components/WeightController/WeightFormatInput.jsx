/* eslint-disable react/display-name */
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { NumericFormat } from 'react-number-format';

export const WeightFormatInput = forwardRef((props, ref) => {
  const { onChange, ...other } = props;

  return (
    <NumericFormat
      {...other}
      getInputRef={ref}
      allowNegative={false}
      maxLength={6}
      decimalScale={2}
      valueIsNumericString={true}
      onValueChange={({ floatValue }) => onChange(floatValue || null)}
      decimalSeparator="."
      allowedDecimalSeparators={['.', ',']}
      isAllowed={values => values.value <= 150}
    />
  );
});

WeightFormatInput.propTypes = {
  onChange: PropTypes.func.isRequired,
};
