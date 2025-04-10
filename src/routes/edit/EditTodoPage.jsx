//src/routes/edit/EditTodoPage.jsx

import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { TodoForm } from '../../ui/TodoForm/index.js'
import { useTodos } from "../useTodos.js";

function EditTodoPage() {
    const location = useLocation();
    //Extract the id and ensure it is a number
    const params = useParams();
    const id = Number(params.id);

    const { state, stateUpdaters} = useTodos();
    const { getTodo, loading } = state;
    const { editTodo } = stateUpdaters;

    let todoText;

    if (location.state?.todo){
        todoText = location.state.todo.text;
    }
    else if (loading) {
        return <div>Loading...</div>;
    } else {
        const todo = getTodo(id);
        todoText = todo.text;
    }

    return (
        <TodoForm
            label="Edit your TODO"
            loading={loading}
            defaultTodoText={todoText}
            submitText="Confirm"
            submitEvent={(newText) => editTodo(id, newText)}
        />
    );

}

export { EditTodoPage };