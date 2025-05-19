import * as yup from 'yup';

export const textInputSchema = yup
  .string()
  .min(3, 'Minimum 3 characters')
  .required('This field is required');
export const textAreaSchema = yup
  .string()
  .min(10, 'Minimum 10 characters')
  .required('This field is required');
export const emailSchema = yup
  .string()
  .email('Invalid email format')
  .required('Email is required');

export const buttonSchema = yup.object().shape({
  label: yup.string().required('Button label is required'),
  onClick: yup.mixed().required('onClick handler is required'),
});

export const validateSchema = async (
  schema: yup.StringSchema,
  value: string,
): Promise<void> => {
  try {
    await schema.validate(value);
  } catch (err) {
    if (err instanceof yup.ValidationError) {
      throw err;
    } else {
      console.error('Unexpected validation error:', err);
      throw new Error('Unexpected validation error');
    }
  }
};
