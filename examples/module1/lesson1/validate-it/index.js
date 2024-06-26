function validator() {
  const input = document.getElementById('input');
  const validateBtn = document.getElementById('validateBtn');
  const clearBtn = document.getElementById('clearBtn');
  const result = document.getElementById('result');

  validateBtn.addEventListener('click', () => {
    const inputValue = Number(input.value);
    const isValueNumber = Number.isInteger(inputValue);
    const isNumberCorrect = inputValue > 0 && inputValue < 100 && inputValue % 2 === 0;

    if (!inputValue || !isValueNumber) result.innerHTML = 'Invalid';

    if (isValueNumber) result.innerHTML = isNumberCorrect ? 'Valid' : 'Invalid';
  });

  clearBtn.addEventListener('click', () => {
    input.value = '';
    result.innerHTML = '';
  });
}

validator();
