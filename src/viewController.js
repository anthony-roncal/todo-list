export default function viewController(projectsArray, currentProject) {
    const header = document.createElement('header');
    const title = document.createElement('p');
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
        header.appendChild(title);
        title.textContent = 'Odin To-Do List';

        // init sidebar with projects
        sidebar.classList.add('sidebar');
        updateProjects(currentProject);
        projectsList.classList.add('projects-ul');
        sidebar.appendChild(projectsList);

        // init hidden add project form
        showAddProjectFormBtn.textContent = '+ Add new project';
        showAddProjectFormBtn.classList.add('show-add-project-form-btn');
        
        addProjectField.setAttribute('type', 'text');
        addProjectField.classList.add('add-project-field', 'hidden');
        
        addProjectBtn.textContent = 'Add project';
        addProjectBtn.classList.add('add-project-btn');
        
        addProjectCancelBtn.textContent = 'X';
        addProjectCancelBtn.classList.add('add-project-cancel-btn');

        addProjectContainer.classList.add('add-project-container', 'hidden');
        
        addProjectContainer.append(addProjectBtn, addProjectCancelBtn);
        projectsList.append(addProjectField, showAddProjectFormBtn, addProjectContainer);

        // init content with todos
        content.classList.add('content');
        todoList.classList.add('todo-ul');
        updateTodos(projectsArray[currentProject]);

        // init hidden add todo form
        showAddTodoFormBtn.textContent = '+ Add new to-do';
        showAddTodoFormBtn.classList.add('show-add-todo-form-btn');

        addTodoField.setAttribute('type', 'text');
        addTodoField.classList.add('add-todo-field', 'hidden');

        addTodoBtn.textContent = 'Add to-do';
        addTodoBtn.classList.add('add-todo-btn');

        addTodoCancelBtn.textContent = 'X';
        addTodoCancelBtn.classList.add('add-todo-cancel-btn');

        addTodoContainer.classList.add('add-todo-container', 'hidden');

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
            deleteBtn.textContent = 'X';

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

    function toggleShowTodoDetails(e) {
        if(e.target.classList.contains('checkbox-title-container') || e.target.classList.contains('strikethrough') || e.target.classList.contains('chevron')) {
            var detailsContainer;
            switch(e.target.nodeName) {
                case 'DIV': 
                    detailsContainer = e.target.parentNode.children[2];
                    break;
                case 'LABEL':
                    detailsContainer = e.target.parentNode.parentNode.children[2];
                    break;
                case 'BUTTON':
                    detailsContainer = e.target.parentNode.children[2];
                    break;
            }
            detailsContainer.classList.toggle('hidden');
            detailsContainer.parentNode.classList.toggle('expanded');
            // rotate chevron
            detailsContainer.parentNode.children[1].classList.toggle('rotate');
            // hide checkbox and title
            // detailsContainer.parentNode.children[0].classList.toggle('hidden');
        }
    }

    function toggleTodoEditMode(e) {
        const formElements = e.target.parentNode.parentNode.children;
        Array.from(formElements).forEach(element => element.disabled = !element.disabled);
        if(e.target.classList.contains('edit-details-btn')) {
            e.target.classList.toggle('hidden');
            e.target.parentNode.children[1].classList.toggle('hidden');
            e.target.parentNode.children[2].classList.toggle('hidden');
        }
        if(e.target.classList.contains('cancel-details-btn')) {
            e.target.classList.toggle('hidden');
            e.target.parentNode.children[0].classList.toggle('hidden');
            e.target.parentNode.children[1].classList.toggle('hidden');
        }
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
        project.todos.forEach(todo => {
            const todoListItem = document.createElement('li');
            todoListItem.classList.add('todo-item');

            const checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            (todo.complete) ? checkbox.checked = true : checkbox.checked = false;
            checkbox.classList.add(todo.priority);

            const todoTitle = document.createElement('label');
            todoTitle.textContent = todo.title;
            todoTitle.classList.add('strikethrough');

            const checkboxTitlecontainer = document.createElement('div');
            checkboxTitlecontainer.classList.add('checkbox-title-container')
            checkboxTitlecontainer.append(checkbox, todoTitle);

            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('delete-todo');
            deleteBtn.textContent = 'X';

            const chevron = document.createElement('button');
            chevron.classList.add('chevron');

            // todo details/edit
            const todoDetailsContainer = document.createElement('form');
            todoDetailsContainer.classList.add('todo-details-form', 'hidden');
            
            const todoTitleLabel = document.createElement('label');
            todoTitleLabel.textContent = 'To-do';
            const todoTitleInput = document.createElement('input');
            todoTitleInput.setAttribute('type', 'text');
            todoTitleInput.value = todo.title;
            
            const todoDescriptionLabel = document.createElement('label');
            todoDescriptionLabel.textContent = 'Description';
            const todoDescriptionInput = document.createElement('textarea');
            todoDescriptionInput.value = todo.description;
            
            const todoDueDateLabel = document.createElement('label');
            todoDueDateLabel.textContent = 'Due';
            const todoDueDateInput = document.createElement('input');
            todoDueDateInput.setAttribute('type', 'date');
            todoDueDateInput.value = todo.dueDate;
            
            const todoPriorityLabel = document.createElement('label');
            todoPriorityLabel.textContent = 'Priority';
            const todoPriorityInput = document.createElement('select');
            const lowPriorityOption = document.createElement('option');
            lowPriorityOption.value = 'low';
            lowPriorityOption.textContent = 'low';
            const medPriorityOption = document.createElement('option');
            medPriorityOption.selected = 'selected';
            medPriorityOption.value = 'medium';
            medPriorityOption.textContent = 'medium';
            const highPriorityOption = document.createElement('option');
            highPriorityOption.value = 'high';
            highPriorityOption.textContent = 'high';
            
            const todoNotesLabel = document.createElement('label');
            todoNotesLabel.textContent = 'Notes';
            const todoNotesInput = document.createElement('textarea');
            todoNotesInput.value = todo.notes;

            const formButtonsContainer = document.createElement('div');
            const editDetailsBtn = document.createElement('button');
            editDetailsBtn.textContent = 'Edit';
            editDetailsBtn.classList.add('edit-details-btn');
            editDetailsBtn.setAttribute('type', 'button');
            const saveDetailsBtn = document.createElement('button');
            saveDetailsBtn.textContent = 'Save changes';
            saveDetailsBtn.classList.add('save-details-btn', 'hidden');
            saveDetailsBtn.setAttribute('type', 'button');
            const cancelDetailsBtn = document.createElement('button');
            cancelDetailsBtn.textContent = 'X';
            cancelDetailsBtn.classList.add('cancel-details-btn', 'hidden');
            cancelDetailsBtn.setAttribute('type', 'button');

            todoPriorityInput.append(lowPriorityOption, medPriorityOption, highPriorityOption);
            todoPriorityInput.value = todo.priority;


            formButtonsContainer.append(editDetailsBtn, saveDetailsBtn, cancelDetailsBtn);

            todoDetailsContainer.append(todoTitleLabel, todoTitleInput, 
                todoDescriptionLabel, todoDescriptionInput, 
                todoDueDateLabel, todoDueDateInput, 
                todoPriorityLabel, todoPriorityInput,
                todoNotesLabel, todoNotesInput,
                formButtonsContainer
            );

            Array.from(todoDetailsContainer.children).forEach(element => {
                if((element.nodeName === 'INPUT') || (element.nodeName === 'TEXTAREA') || (element.nodeName === 'SELECT')) {
                    element.disabled = true;
                }
            })

            todoListItem.append(checkboxTitlecontainer, chevron, todoDetailsContainer); // deleteBtn
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
        toggleShowTodoDetails,
        toggleTodoEditMode,
        toggleAddTodoForm,
        updateTodos,
        removeItem
    }
};