export type FormValuesType = { email?: string; password?: string };

export type OnSubmitTypes = {
  resetForm: () => void;
  setErrors: (arg0: object) => void;
};
