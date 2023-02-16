export default function Project(id, title) {
    let todos = [];

    function addToDo(todo) {
        this.todos.push(todo);
    }

    function removeToDo(index) {
        if(index < todos.length) {
            todos.splice(index, 1);
        } else {
            alert("Attempting to remove an invalid ToDo");
        }
    }

    return {
        id: id,
        title: title,
        todos: todos,
        addToDo,
        removeToDo
    }
}
