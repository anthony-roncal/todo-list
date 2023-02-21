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
    const showAddTodoFormBtn = document.createElement('button');
    const addTodoField = document.createElement('input');
    const addTodoContainer = document.createElement('div');
    const addTodoBtn = document.createElement('button');
    const addTodoCancelBtn = document.createElement('button');

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
        
        addProjectBtn.textContent = 'Add project';
        addProjectBtn.classList.add('add-project-btn');
        
        addProjectCancelBtn.textContent = 'X';
        addProjectCancelBtn.classList.add('add-project-cancel-btn');

        addProjectContainer.classList.add('add-project-container');
        addProjectContainer.classList.add('hidden');
        
        addProjectContainer.append(addProjectBtn, addProjectCancelBtn);
        projectsList.append(addProjectField, showAddProjectFormBtn, addProjectContainer);

        // init content with todos
        content.classList.add('content');
        todoList.classList.add('todo-ul');
        updateTodos(projectsArray[0]);

        // init hidden add todo form
        showAddTodoFormBtn.textContent = '+ Add new to-do';
        showAddTodoFormBtn.classList.add('show-add-todo-form-btn');

        addTodoField.setAttribute('type', 'text');
        addTodoField.classList.add('add-todo-field');
        addTodoField.classList.add('hidden');

        addTodoBtn.textContent = 'Add to-do';
        addTodoBtn.classList.add('add-todo-btn');

        addTodoCancelBtn.textContent = 'X';
        addTodoCancelBtn.classList.add('add-todo-cancel-btn');

        addTodoContainer.classList.add('add-todo-container');
        addTodoContainer.classList.add('hidden');

        addTodoContainer.append(addTodoBtn, addTodoCancelBtn);
        todoList.append(addTodoField, showAddTodoFormBtn, addTodoContainer);

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
            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('delete-project');
            deleteBtn.textContent = 'x';

            projectListItem.appendChild(deleteBtn);

            projectsList.append(projectListItem, addProjectField, showAddProjectFormBtn, addProjectContainer);
        });
    }

    function toggleAddProjectForm() {
        addProjectField.classList.toggle('hidden');
        addProjectField.focus();
        addProjectField.select();

        addProjectContainer.classList.toggle('hidden');
        showAddProjectFormBtn.classList.toggle('hidden');
        addProjectField.value = '';
    }

    function toggleAddTodoForm() {
        addTodoField.classList.toggle('hidden');
        addTodoField.focus();
        addTodoField.select();

        addTodoContainer.classList.toggle('hidden');
        showAddTodoFormBtn.classList.toggle('hidden');
        addTodoField.value = '';
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

            const checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            (todo.complete) ? checkbox.checked = true : checkbox.checked = false;

            const todoTitle = document.createElement('label');
            todoTitle.textContent = todo.title;
            todoTitle.classList.add('strikethrough');

            const checkboxTitlecontainer = document.createElement('div');
            checkboxTitlecontainer.append(checkbox, todoTitle);

            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('delete-todo');
            deleteBtn.textContent = 'x';

            const chevron = document.createElement('button');
            chevron.classList.add('chevron');

            todoListItem.append(checkboxTitlecontainer, chevron); // deleteBtn
            todoList.appendChild(todoListItem);
        });
        todoList.append(addTodoField, showAddTodoFormBtn, addTodoContainer);
        content.appendChild(todoList);
    }

    function removeItem(e) {
        e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    }

    return {
        updateProjects,
        updateCurrentProject,
        toggleAddProjectForm,
        toggleAddTodoForm,
        updateTodos,
        removeItem
    }
};