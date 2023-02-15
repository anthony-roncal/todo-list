import './style.css';
import Todo from './todo';

const element = document.createElement('div');
element.textContent = "Hello World";
element.classList.add('hello');
document.body.appendChild(element);

const test = Todo('Pay bills', 'Pay credit card bills', '2/28/2023', 'high', 'check for any incorrect charges', 'monthly');
console.log({test});
