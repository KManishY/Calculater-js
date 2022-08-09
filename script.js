let string = "";
// let arr = [];
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {

    if (e.target.innerHTML === '=') {
      string = eval(string)
      document.querySelector('input').value = string;
    }
    else if (e.target.innerHTML === 'c') {
      document.querySelector('input').value = string;
      string = "";
    }
    else {
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;

    }

  })
})