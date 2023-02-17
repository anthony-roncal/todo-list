export default function viewController(projectsArray, currentProject) {
    const header = document.createElement('header');
    const sidebar = document.createElement('div');
    const projectsList = document.createElement('ul');
    const content = document.createElement('div');
    const todoList = document.createElement('ul');

    (function init() {
        header.textContent = 'Odin To-Do List';

        // init sidebar with projects
        sidebar.classList.add('sidebar');
        updateProjects();
        projectsList.classList.add('projects-ul');
        sidebar.appendChild(projectsList);

        // init content with todos
        content.classList.add('content');
        todoList.classList.add('todo-ul');
        updateTodos(projectsArray[0]);

        document.body.append(header, sidebar, content);
    })();

    function updateCurrentProject(currentProject) {
        // update selected project
        let projectListItems = document.querySelectorAll('.project-item');
        projectListItems.forEach(project => {
            if(project.classList.contains('current-project')) {
                project.classList.remove('current-project');
            }
        });
        projectListItems[currentProject].classList.toggle('current-project');

        // update content
        // updateTodos(projectsArray[currentProject]);
    }

    function updateProjects() {
        // remove old Projects
        Array.from(projectsList.children).forEach(project => {
            projectsList.removeChild(project);
        });
        // add new Projects
        projectsArray.forEach(project => {
            const projectListItem = document.createElement('li');
            projectListItem.classList.add('project-item');
            projectListItem.textContent = project.title;
            if(project.id === currentProject) {
                projectListItem.classList.toggle('current-project');
            }
            projectsList.appendChild(projectListItem);
        });
    }

    function updateTodos(project) {
        // remove old Todos
        Array.from(todoList.children).forEach(todo => {
            todoList.removeChild(todo);
        });
        // add new Todos
        project.todos.forEach(todo => {
            const todoListItem = document.createElement('li');
            todoListItem.classList.add('todo-item');
            todoListItem.textContent = todo.title;

            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('delete-todo');

            todoListItem.appendChild(deleteBtn);
            todoList.appendChild(todoListItem);
        });
        content.appendChild(todoList);
    }

    function removeTodoItem(e) {
        e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    }

    return {
        removeTodoItem,
        updateCurrentProject,
        updateTodos
    }
};