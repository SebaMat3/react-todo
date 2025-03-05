import React from "react";
import { TodoForm } from '../../ui/TodoForm/index.js'

function NewTodoPage() {
    return (
        <TodoForm
            label="Create your new TODO"
            submitText="Add"
            submitEvent={(newTodoValue) => console.log(newTodoValue)}
        />
    );
}

export { NewTodoPage };