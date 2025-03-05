//src/routes/new/NewTodoPage.jsx
import React from "react";
import { TodoForm } from '../../ui/TodoForm/index.js'
import { useTodos } from "../useTodos.js";

function NewTodoPage() {
    const { stateUpdaters} = useTodos();
    const { addTodo } = stateUpdaters;
    return (
        <TodoForm
            label="Create your new TODO"
            submitText="Add"
            submitEvent={(text) => addTodo(text)}
        />
    );
}

export { NewTodoPage };