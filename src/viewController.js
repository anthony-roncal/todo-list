export default function viewController(projectsArray, currentProject) {
    const header = document.createElement('header');
    const sidebar = document.createElement('div');
    const projectsList = document.createElement('ul');
    const content = document.createElement('div');
    const todoList = document.createElement('ul');
    const showAddProjectFormBtn = document.createElement('button');
    const addProjectField = document.createElement('input');
    const addProjectContainer = document.createElement('div');
    const addProjectBtn = document.createElement('button');
    const addProjectCancelBtn = document.createElement('button');

    (function init() {
        header.textContent = 'Odin To-Do List';

        // init sidebar with projects
        sidebar.classList.add('sidebar');
        updateProjects(currentProject);
        projectsList.classList.add('projects-ul');
        sidebar.appendChild(projectsList);

        // init hidden add project form
        showAddProjectFormBtn.textContent = '+ Add new project';
        showAddProjectFormBtn.classList.add('show-add-project-form-btn');
        
        addProjectField.setAttribute('type', 'text');
        addProjectField.classList.add('add-project-field');
        addProjectField.classList.add('hidden');
        
        addProjectContainer.classList.add('add-project-container');
        
        addProjectBtn.textContent = 'Add project';
        addProjectBtn.classList.add('add-project-btn');
        addProjectBtn.classList.add('hidden');
        
        addProjectCancelBtn.textContent = 'X';
        addProjectCancelBtn.classList.add('add-project-cancel-btn');
        addProjectCancelBtn.classList.add('hidden');
        
        addProjectContainer.append(addProjectBtn, addProjectCancelBtn);
        projectsList.append(addProjectField, showAddProjectFormBtn, addProjectContainer);

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
    }

    function updateProjects(currentProject) {
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
            projectsList.append(projectListItem, addProjectField, showAddProjectFormBtn, addProjectContainer);
        });
        
    }

    function toggleAddProjectForm() {
        addProjectField.classList.toggle('hidden');
        addProjectField.focus();
        addProjectField.select();
        addProjectBtn.classList.toggle('hidden');
        addProjectCancelBtn.classList.toggle('hidden');
        showAddProjectFormBtn.classList.toggle('hidden');
        addProjectField.value = '';
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
            deleteBtn.textContent = 'x';

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
        updateProjects,
        updateCurrentProject,
        toggleAddProjectForm,
        updateTodos
    }
};