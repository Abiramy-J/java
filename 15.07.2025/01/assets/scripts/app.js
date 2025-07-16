const inputDisplay = document.getElementById('input-display');
const expressionDisplay = document.getElementById('expression-display');
const buttons = document.querySelectorAll('.btn');
const clearBtn = document.getElementById('clear');
const equalsBtn = document.getElementById('equals');
const backspaceBtn = document.getElementById('backspace');

let expression = '';

buttons.forEach(button => {
  const value = button.dataset.value;

  if (value) {
    button.addEventListener('click', () => {
      expression += value;
      inputDisplay.value = expression;
    });
  }
});

equalsBtn.addEventListener('click', () => {
  try {
    const result = eval(expression);
    expressionDisplay.textContent = expression.replace(/\*/g, '×').replace(/\//g, '÷');
    inputDisplay.value = result;
    expression = result.toString(); // allow continued calc
  } catch (error) {
    inputDisplay.value = 'Error';
  }
});

clearBtn.addEventListener('click', () => {
  expression = '';
  inputDisplay.value = '';
  expressionDisplay.textContent = '';
});

backspaceBtn.addEventListener('click', () => {
  expression = expression.slice(0, -1);
  inputDisplay.value = expression;
});
