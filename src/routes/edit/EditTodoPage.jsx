//src/routes/edit/EditTodoPage.jsx

import React from "react";
import { TodoForm } from '../../ui/TodoForm/index.js'
import { useTodos } from "../useTodos.js";
import { useParams } from "react-router-dom";

function EditTodoPage() {
    //Extract the id and ensure it is a number
    const params = useParams();
    const id = Number(params.id);

    const { stateUpdaters} = useTodos();
    const { editTodo } = stateUpdaters;

    return (
        <TodoForm
            label="Edit your TODO"
            submitText="Confirm"
            submitEvent={(newText) => editTodo(id, newText)}
        />
    );
}

export { EditTodoPage };