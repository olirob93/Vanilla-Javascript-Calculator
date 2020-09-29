//display
const display = document.querySelector('.display');


//buttons
const buttons = document.querySelectorAll('button');

let calculate = (event) => {
    const clickedButtonValue = event.target.value;

    if (clickedButtonValue === '=') {
      
      if (display.value !== '') {
        
        display.value = eval(display.value);
      }
    } else if (clickedButtonValue === 'C') {
      
      display.value = '';
    } else {
      
      display.value += clickedButtonValue;
    }
  };


buttons.forEach(button => {
    button.addEventListener('click', calculate);
})






