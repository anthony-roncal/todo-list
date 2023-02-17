export default function viewController(projectsArray, currentProject) {
    (function init() {
        const header = document.createElement('header');
        const sidebar = document.createElement('div');
        const projectsList = document.createElement('ul');
        const content = document.createElement('div');
        const todoList = document.createElement('ul');

        header.textContent = 'Odin To-Do List';

        // init sidebar with projects
        sidebar.classList.add('sidebar');
        projectsArray.forEach(project => {
            const projectListItem = document.createElement('li');
            projectListItem.classList.add('project-item');
            projectListItem.textContent = project.title;
            if(project.id === currentProject) {
                projectListItem.classList.add('current-project');
            }
            projectsList.appendChild(projectListItem);
        });
        projectsList.classList.add('projects-ul');
        console.log(projectsArray[currentProject]);
        sidebar.appendChild(projectsList);

        // init content with todos
        content.classList.add('content');
        projectsArray[0].todos.forEach(todo => {
            const todoListItem = document.createElement('li');
            todoListItem.classList.add('todo-item');
            todoListItem.textContent = todo.title;

            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('delete-todo');

            todoListItem.appendChild(deleteBtn);
            todoList.appendChild(todoListItem);
        });
        todoList.classList.add('todo-ul');
        content.appendChild(todoList);

        document.body.append(header, sidebar, content);
    })();

    function removeTodoItem(e) {
        e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    }

    return {
        removeTodoItem
    }
};