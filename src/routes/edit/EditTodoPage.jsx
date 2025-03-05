//src/routes/edit/EditTodoPage.jsx
import React from "react";
import { TodoForm } from '../../ui/TodoForm/index.js'

function EditTodoPage() {
    return (
        <TodoForm
            label="Edit your TODO"
            submitText="Confirm"
            submitEvent={() => console.log('call EditTodo')}
        />
    );
}

export { EditTodoPage };