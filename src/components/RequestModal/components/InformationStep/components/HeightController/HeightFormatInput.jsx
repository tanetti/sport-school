/* eslint-disable react/display-name */
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { NumericFormat } from 'react-number-format';

export const HeightFormatInput = forwardRef((props, ref) => {
  const { onChange, ...other } = props;

  return (
    <NumericFormat
      {...other}
      getInputRef={ref}
      allowNegative={false}
      maxLength={3}
      decimalScale={0}
      valueIsNumericString={true}
      onValueChange={({ floatValue }) => onChange(floatValue || null)}
      isAllowed={({ value }) => value <= 250}
    />
  );
});

HeightFormatInput.propTypes = {
  onChange: PropTypes.func.isRequired,
};
