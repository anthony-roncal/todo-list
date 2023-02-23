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
const testTodo2 = Todo('Grocery shopping', 'milk, eggs, cauliflower rice', '2/18/2023', 'medium', 'check if we have coupons');
const testTodo3 = Todo('Make doctor appointment', 'Make an appointment for a checkup', '3/01/2023', 'low', '');
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

// add event listeners
addSelectProjectsEventListeners();
addDeleteProjectEventListeners();
addCompleteTodoEventListeners();
addTodoDetailsEventListeners();
addDeleteTodoEventListeners();

const showAddProjectFormBtn = document.querySelector('.show-add-project-form-btn');
showAddProjectFormBtn.addEventListener('click', toggleAddProjectForm);

const addProjectCancelBtn = document.querySelector('.add-project-cancel-btn');
addProjectCancelBtn.addEventListener('click', toggleAddProjectForm);

const addProjectBtn = document.querySelector('.add-project-btn');
addProjectBtn.addEventListener('click', addProject);

const showAddTodoFormBtn = document.querySelector('.show-add-todo-form-btn');
showAddTodoFormBtn.addEventListener('click', toggleAddTodoForm);

const addTodoCancelBtn = document.querySelector('.add-todo-cancel-btn');
addTodoCancelBtn.addEventListener('click', toggleAddTodoForm);

const addTodoBtn = document.querySelector('.add-todo-btn');
addTodoBtn.addEventListener('click', addTodo);

function addSelectProjectsEventListeners() {
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach(item => {
        item.addEventListener('click', selectProject);
    });
}

function selectProject(e) {
    currentProject = Array.from(e.target.parentNode.children).indexOf(e.target);
    view.updateCurrentProject(currentProject);
    view.updateTodos(projects[currentProject]);
    addCompleteTodoEventListeners();
    addTodoDetailsEventListeners();
    addDeleteTodoEventListeners();
}

function addDeleteProjectEventListeners() {
    const deleteBtns = document.querySelectorAll('.delete-project');
    deleteBtns.forEach(btn => btn.addEventListener('click', deleteItem));
}

function addCompleteTodoEventListeners() {
    const checkboxes = document.querySelectorAll('input[type=checkbox]');
    checkboxes.forEach(checkbox => checkbox.addEventListener('click', completeTodo));
}

function addTodoDetailsEventListeners() {
    const todoItems = document.querySelectorAll('.todo-item');
    todoItems.forEach(todoItem => todoItem.addEventListener('click', toggleTodoDetails));
}

function addDeleteTodoEventListeners() {
    const deleteBtns = document.querySelectorAll('.delete-todo');
    deleteBtns.forEach(btn => btn.addEventListener('click', deleteItem));
}

function addProject() {
    const addProjectFieldValue = document.querySelector('.add-project-field').value.toString().trim();
    if(addProjectFieldValue) {
        const newProject = Project(projects.length, addProjectFieldValue);
        projects.push(newProject);
        view.toggleAddProjectForm();
        view.updateProjects(currentProject);
        addDeleteProjectEventListeners()
        addSelectProjectsEventListeners();
    }
} 

function addTodo() {
    const addTodoFieldValue = document.querySelector('.add-todo-field').value.toString().trim();
    if(addTodoFieldValue) {
        const newTodo = Todo(addTodoFieldValue);
        projects[currentProject].todos.push(newTodo);
        view.toggleAddTodoForm();
        view.updateTodos(projects[currentProject]);
        addTodoDetailsEventListeners();
        addDeleteTodoEventListeners();
    }
}

function toggleAddProjectForm() {
    view.toggleAddProjectForm();
}

function toggleAddTodoForm() {
    view.toggleAddTodoForm();
}

function completeTodo(e) {
    let index = Array.from(e.target.parentNode.parentNode.parentNode.children).indexOf(e.target.parentNode.parentNode);
    projects[currentProject].todos[index].complete = !projects[currentProject].todos[index].complete;
}

function toggleTodoDetails(e) {
    view.toggleTodoDetails(e);
}

function deleteItem(e) {
    let index = Array.from(e.target.parentNode.parentNode.children).indexOf(e.target.parentNode);
    (e.target.classList[0] === "delete-project") ? projects.splice(index, 1) : projects[currentProject].removeToDo(index);
    view.removeItem(e);
}
