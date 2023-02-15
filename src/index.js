import './style.css';

const element = document.createElement('div');
element.textContent = "Hello World";
element.classList.add('hello');
document.body.appendChild(element);