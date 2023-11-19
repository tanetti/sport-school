import * as yup from 'yup';

yup.addMethod(yup.string, 'lengthIfNotEmpty', function (param, errorMessage) {
  return this.test('length-If-Not-Empty', errorMessage, function (value) {
    const { path, createError } = this;

    if (value.length > 0 && value.length < param) {
      return createError({ path, message: errorMessage });
    }

    return true;
  });
});

export const validationSchema = yup
  .object()
  .shape({
    section: yup.string().required(),
    name: yup
      .string()
      .trim()
      .min(2, "Закоротке ім'я")
      .max(30, "Задовге ім'я")
      .required("Вкажіть ім'я"),
    surename: yup
      .string()
      .trim()
      .min(2, 'Закоротке прізвище')
      .max(30, 'Задовге прізвище')
      .required('Вкажіть прізвище'),
    phone: yup
      .string()
      .trim()
      .lengthIfNotEmpty(19, 'Невірний формат')
      .required('Вкажіть номер телефону'),
    birthdate: yup.date().required('Вкажіть дату народження'),
    height: yup
      .number()
      .nullable()
      .min(60, 'Замалий зріст')
      .max(250, 'Завеликий зріст')
      .required('Вкажіть зріст'),
    weight: yup
      .number()
      .nullable()
      .min(20, 'Замалa вага')
      .max(150, 'Завелика вага')
      .required('Вкажіть вагу'),
  })
  .required();
