import * as yup from 'yup';

export const dataAnalystValidationSchema = yup.object().shape({
  specialization: yup.string().nullable(),
  years_of_experience: yup.number().integer().nullable(),
  date_joined: yup.date().required(),
  user_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
});
