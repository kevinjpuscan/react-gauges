export const getValidValue = (value: number, limits: { min: number; max: number }): number => {
  if (value < limits.min) return limits.min;
  if (value > limits.max) return limits.max;
  return value;
};

export const getLabel = (value: number, template: string, limits: { min: number; max: number }): string => {
  return template.replace("{value}", getValidValue(value, limits).toString());
};
