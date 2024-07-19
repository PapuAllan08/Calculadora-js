document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const botones = document.querySelectorAll('.botones');
    const operadores = document.querySelectorAll('.operadores, .operadores_ultimos');
  
    let currentValue = '';
    let operator = '';
    let firstValue = '';
  
    botones.forEach(button => {
      button.addEventListener('click', () => {
        currentValue += button.textContent;
        display.value = currentValue;
      });
    });
  
    operadores.forEach(button => {
      button.addEventListener('click', () => {
        const operation = button.dataset.operator;
        
        if (operation === 'C') {
          currentValue = '';
          firstValue = '';
          operator = '';
          display.value = '';
          return;
        }
  
        if (operation === '=') {
          if (firstValue && currentValue && operator) {
            currentValue = calculate(firstValue, currentValue, operator);
            display.value = currentValue;
            firstValue = '';
            operator = '';
          }
          return;
        }
  
        if (operation === 'sqrt') {
          currentValue = Math.sqrt(parseFloat(currentValue)).toString();
          display.value = currentValue;
          return;
        }
  
        if (operation === 'power') {
          currentValue = Math.pow(parseFloat(firstValue), parseFloat(currentValue)).toString();
          display.value = currentValue;
          return;
        }
  
        if (!firstValue) {
          firstValue = currentValue;
          operator = operation;
          currentValue = '';
        }
      });
    });
  
    function calculate(a, b, operator) {
      a = parseFloat(a);
      b = parseFloat(b);
      switch (operator) {
        case '+':
          return (a + b).toString();
        case '-':
          return (a - b).toString();
        case '*':
          return (a * b).toString();
        case '/':
          return (a / b).toString();
        default:
          return '';
      }
    }
  });