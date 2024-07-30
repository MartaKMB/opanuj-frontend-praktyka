import { z, ZodError } from 'zod';

const form = document.querySelector('#flight-form') as HTMLFormElement;
const errorMessage = document.querySelector('#errors') as HTMLUListElement;

const VALIDATION_MESSAGES = {
  ORIGIN_ERROR: 'Lokalizacja startowa musi być wypełniona',
  DATE_ERROR: 'Daty muszą być w poprawnym formacie DD-MM-YYYY',
  TRIP_TYPE_ERROR: 'Typ podróży (w jedną stronę lub powrót) musi być jedną z dwóch oczekiwanych wartości',
};

const FormValidation = z.object({
  origin: z.string().min(1, {message: VALIDATION_MESSAGES.ORIGIN_ERROR}),
  startDate: z.string().regex(/^\d{2}-\d{2}-\d{4}$/, {message: VALIDATION_MESSAGES.DATE_ERROR}),
  endDate: z.union([z.string().regex(/^\d{2}-\d{2}-\d{4}$/, {message: VALIDATION_MESSAGES.DATE_ERROR}), z.string().length(0)]).optional(),
  trip: z.enum(['one-way', 'round-trip']),
});

type FormValues = z.infer<typeof FormValidation>;

function renderErrorMessages(error: ZodError) {
  errorMessage.innerHTML = '';
  error.errors.forEach((err) => {
    const liElement = document.createElement('li');
    liElement.textContent = err.message;
    errorMessage.appendChild(liElement);
  })
}

function cleanErrorMessages() {
  errorMessage.innerHTML = '';
}

function validateFlightForm(values: FormValues) {
  try {
    FormValidation.parse(values);
    cleanErrorMessages();
  } catch (error) {
    if (error instanceof ZodError) renderErrorMessages(error)
  }
}


form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const values = Object.fromEntries(formData.entries()) as FormValues;
  validateFlightForm(values);
});
