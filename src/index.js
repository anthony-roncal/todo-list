import './style.css';
import Todo from './todo';
import Project from './project';
import viewController from './viewController';

// init projects array and default project
let projects = [];
const defaultProject = Project(0, "To-Do");
const newProject = Project(1, "My List");
let currentProject = 0;
projects.push(defaultProject);
projects.push(newProject);

// init dummy data
const testTodo1 = Todo('Pay bills', 'Pay credit card bills', '2/28/2023', 'high', 'check for any incorrect charges');
const testTodo2 = Todo('Grocery shopping', 'milk, eggs, cauliflower rice', '2/18/2023', 'high', 'check if we have coupons');
const testTodo3 = Todo('Make doctor appointment', 'Make an appointment for a checkup', '3/01/2023', 'high', '');
const testTodo4 = Todo('Wash car', 'take car to car wash', '2/18/2023', 'low', '');
const testTodo5 = Todo('Call mom', 'return her call, update about vacation plans', '2/19/2023', 'medium', '');
const testTodo6 = Todo('Book flight', 'book flights for vacation', '2/24/2023', 'high', 'check hopper');
defaultProject.addToDo(testTodo1);
defaultProject.addToDo(testTodo2);
defaultProject.addToDo(testTodo3);
newProject.addToDo(testTodo4);
newProject.addToDo(testTodo5);
newProject.addToDo(testTodo6);

// init viewController
const view = viewController(projects, currentProject);
addSwitchProjectsEventListeners();
addDeleteEventListeners();

function addSwitchProjectsEventListeners() {
    // add event listener and function for switching projects
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach(item => {
        item.addEventListener('click', selectProject);
    });
}

function addDeleteEventListeners() {
    // add event listener and function for todo delete buttons
    const deleteBtns = document.querySelectorAll('.delete-todo');
    deleteBtns.forEach(btn => {
        btn.addEventListener('click', deleteTodo);
    });
}

function deleteTodo(e) {
    let index = Array.from(e.target.parentNode.parentNode.children).indexOf(e.target.parentNode);
    projects[currentProject].removeToDo(index);
    view.removeTodoItem(e);
}

function selectProject(e) {
    currentProject = Array.from(e.target.parentNode.children).indexOf(e.target);
    view.updateCurrentProject(currentProject);
    view.updateTodos(projects[currentProject]);
    addDeleteEventListeners();
}