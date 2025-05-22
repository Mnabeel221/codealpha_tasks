const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let input = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.dataset.value;
    const action = button.dataset.action;

    if (value) {
      input += value;
      display.value = input;
    } else if (action) {
      handleAction(action);
    }
  });
});

function handleAction(action) {
  switch (action) {
    case 'clear':
      input = '';
      display.value = '';
      break;
    case 'backspace':
      input = input.trim();
      input = input.slice(0, -1);
      display.value = input;
      break;
    case 'calculate':
      try {
        input = eval(input).toString();
        display.value = input;
      } catch {
        display.value = 'Error';
        input = '';
      }
      break;
  }
}
