import PropTypes from 'prop-types';
import { useState } from 'react';
import { Controller } from 'react-hook-form';
import { ukUA } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import 'dayjs/locale/uk';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { getMinMaxDate } from './getMinMaxDate';
import {
  Container,
  ErrorLabel,
  Input,
  Label,
} from '../shared/RequestField/RequestField.styled';

export const BirthdateController = ({ control, getValues }) => {
  const [isDatepickerOpened, setIsDatepickerOpened] = useState(false);

  const { minDate, maxDate } = getMinMaxDate(getValues('section'));

  const onDateChange = (onChange, dateValue) => {
    const newDate = new Date(dateValue);

    if (newDate < minDate || newDate > maxDate) return;

    onChange(newDate);
  };

  return (
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
            localeText={{
              ...ukUA.components.MuiLocalizationProvider.defaultProps
                .localeText,
              ...{
                datePickerToolbarTitle: 'Вкажіть дату народження',
                cancelButtonLabel: 'Закрити',
              },
            }}
          >
            <Container error={!!error}>
              <MobileDatePicker
                {...rest}
                inputRef={controllerRef}
                closeOnSelect={true}
                disableFuture={true}
                openTo="year"
                open={isDatepickerOpened}
                onClose={() => setIsDatepickerOpened(false)}
                onOpen={() => setIsDatepickerOpened(true)}
                onYearChange={null}
                minDate={dayjs(minDate)}
                maxDate={dayjs(maxDate)}
                value={value ? dayjs(value) : null}
                views={['year', 'month', 'day']}
                onChange={value => onDateChange(onChange, value)}
                slots={{ textField: Input }}
                slotProps={{
                  textField: {
                    id: 'input-field-birthdate',
                    name,
                    placeholder: '',
                    label: 'Дата народження',
                    readOnly: true,
                    onKeyDownCapture: () => setIsDatepickerOpened(true),
                  },
                  actionBar: () => ({
                    actions: ['cancel'],
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
};

BirthdateController.propTypes = {
  control: PropTypes.object.isRequired,
  getValues: PropTypes.func.isRequired,
};
