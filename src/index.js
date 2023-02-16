import './style.css';
import Todo from './todo';
import Project from './project';
import viewController from './viewController';

let projects = [];
const defaultProject = Project(0, "Default Project");
projects.push(defaultProject);
const view = viewController();

// const testProject = Project(1, "Test Project");
// const testTodo1 = Todo('1', 'Pay credit card bills', '2/28/2023', 'high', 'check for any incorrect charges');
// const testTodo2 = Todo('2', 'Pay credit card bills', '2/28/2023', 'high', 'check for any incorrect charges');
// const testTodo3 = Todo('3', 'Pay credit card bills', '2/28/2023', 'high', 'check for any incorrect charges');
// testProject.addToDo(testTodo1);
// testProject.addToDo(testTodo2);
// testProject.addToDo(testTodo3);
// console.log(testProject);
// testProject.removeToDo(2);
// console.log(testProject);
