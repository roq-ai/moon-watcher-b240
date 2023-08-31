import * as yup from 'yup';

export const moonMovementValidationSchema = yup.object().shape({
  date: yup.date().required(),
  phase: yup.string().required(),
  transit: yup.string().required(),
  user_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
});
