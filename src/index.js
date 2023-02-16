import './style.css';
import Todo from './todo';
import Project from './project';
import viewController from './viewController';

let projects = [];
const defaultProject = Project(0, "To-Do");
projects.push(defaultProject);

const testTodo1 = Todo('Pay bills', 'Pay credit card bills', '2/28/2023', 'high', 'check for any incorrect charges');
const testTodo2 = Todo('Grocery shopping', 'milk, eggs, cauliflower rice', '2/18/2023', 'high', 'check if we have coupons');
const testTodo3 = Todo('Make doctor appointment', 'Make an appointment for a checkup', '3/01/2023', 'high', '');
defaultProject.addToDo(testTodo1);
defaultProject.addToDo(testTodo2);
defaultProject.addToDo(testTodo3);

const view = viewController(projects);

const deleteBtns = document.querySelectorAll('.delete-todo');
deleteBtns.forEach(btn => {
    btn.addEventListener('click', deleteTodo);
});

function deleteTodo(e) {
    projects[0].removeToDo(Array.from(e.target.parentNode.parentNode.children).indexOf(e.target.parentNode));
    view.removeTodoItem(e);
}

