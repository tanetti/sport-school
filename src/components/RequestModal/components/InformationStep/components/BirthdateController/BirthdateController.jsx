import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { ukUA } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import 'dayjs/locale/uk';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {
  Container,
  ErrorLabel,
  Input,
  Label,
} from '../shared/RequestField/RequestField.styled';

export const BirthdateController = ({ control }) => (
  <Controller
    name="birthdate"
    control={control}
    render={({
      field: { onChange, value, ref: controllerRef, name, ...rest },
      fieldState,
    }) => {
      const { error } = fieldState;

      return (
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          adapterLocale="uk"
          localeText={
            ukUA.components.MuiLocalizationProvider.defaultProps.localeText
          }
        >
          <Container error={!!error}>
            <MobileDatePicker
              {...rest}
              inputRef={controllerRef}
              closeOnSelect={true}
              disableFuture={true}
              openTo="year"
              value={value ? dayjs(value) : null}
              views={['year', 'month', 'day']}
              onChange={value => onChange(new Date(value))}
              slots={{ textField: Input }}
              slotProps={{
                textField: {
                  id: 'input-field-birthdate',
                  name,
                  placeholder: '',
                  label: 'Дата народження',
                  readOnly: true,
                },
                actionBar: () => ({
                  actions: ['cancel', 'accept'],
                }),
                mobilePaper: {
                  sx: {
                    '& .MuiPickersYear-root button.Mui-selected': {
                      backgroundColor: '#fa5502',
                      color: '#fff',
                    },
                    '& .MuiPickersMonth-root button.Mui-selected': {
                      backgroundColor: '#fa5502',
                      color: '#fff',
                    },
                    '& .MuiDayCalendar-weekContainer button.Mui-selected': {
                      backgroundColor: '#fa5502',
                      color: '#fff',
                    },
                    '& .MuiDialogActions-root button': {
                      color: '#fa5502',
                    },
                  },
                },
              }}
            />

            <Label htmlFor="input-field-birthdate">Дата народження</Label>

            <ErrorLabel>{error?.message}</ErrorLabel>
          </Container>
        </LocalizationProvider>
      );
    }}
  />
);

BirthdateController.propTypes = {
  control: PropTypes.object.isRequired,
};
