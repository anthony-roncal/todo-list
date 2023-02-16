export default function Todo(title, description, dueDate, priority, notes) {
    return {
        title: title, 
        description: description, 
        dueDate: dueDate, 
        priority: priority, 
        notes: notes, 
        complete: false
    };
};