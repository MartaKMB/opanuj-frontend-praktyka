export function formValidator(
  firstName: string,
  lastName: string,
  age: number
) {
  const errors: string[] = [];

  if (!firstName) {
    errors.push('First name is required');
  }

  if (!lastName) {
    errors.push('Last name is required');
  }

  if (firstName.length < 1 || lastName.length < 1) {
    errors.push('Name required at least one sign');
  }
  
  if (isNaN(age)) {
    throw new Error('Error: age must be a number');
  }

  if (age < 0) {
    errors.push('Age must be a positive number');
  }

  return errors;
}
