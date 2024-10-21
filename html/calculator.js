let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');

let input = '';
let operator = '';
let num1 = '';
let num2 = '';
let result = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    let value = button.value;

    if (value === '=' || value === 'C') {
      handleEqualsOrClear(value);
    } else if (value === '+' || value === '-' || value === '*' || value === '/') {
      handleOperator(value);
    } else {
      handleNumber(value);
    }
  });
});

function handleNumber(value) {
  input += value;
  display.value = input;
}

function handleOperator(value) {
  if (input === '') return; // Prevent operator if no number is entered
  operator = value;
  num1 = input;
  input = '';
  display.value = '';
}

function handleEqualsOrClear(value) {
  if (value === '=') {
    if (!num1 || !input || !operator) return; // Ensure all values are available before calculation
    num2 = input;
    input = '';
    result = calculate(num1, operator, num2);
    display.value = result;
    num1 = result;
    num2 = '';
    operator = '';
  } else if (value === 'C') {
    // Clear all variables
    display.value = '';
    input = '';
    num1 = '';
    num2 = '';
    operator = '';
  }
}

function calculate(num1, operator, num2) {
  let result = 0;

  switch (operator) {
    case '+':
      result = parseFloat(num1) + parseFloat(num2);
      break;
    case '-':
      result = parseFloat(num1) - parseFloat(num2);
      break;
    case '*':
      result = parseFloat(num1) * parseFloat(num2);
      break;
    case '/':
      if (parseFloat(num2) === 0) {
        return 'Error: Division by zero';
      }
      result = parseFloat(num1) / parseFloat(num2);
      break;
  }

  return result.toString();
}
