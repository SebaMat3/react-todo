import { TodoSearch } from '../components/TodoSearch/index.js';
import { TodoList } from '../components/TodoList/index.js';
import { TodoItem } from '../components/TodoItem/index.js';
import { CreateTodoButton } from '../components/CreateTodoButton/index.js';
import { TodoCounter } from '../components/TodoCounter/index.js';
import { TodosError } from '../components/TodosError/index.js';
import { TodosLoading } from '../components/TodosLoading/index.js';
import { EmptyTodos } from '../components/EmptyTodos/index.js';
import { TodoContext } from '../components/TodoContext';
import { Modal } from '../components/Modal/index.js';
import { TodoForm } from '../components/TodoForm/index.js'
import React from 'react';



function AppUI(/*{     
    error,
    loading,
    completedTodos, 
    totalTodos, 
    searchValue, 
    setSearchValue, 
    searchedTodos, 
    completeTodo,
    deleteTodo, 
}*/) {
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);
    return (
        //this looks like html, but the React engine will actually render it to JS. => JSX
        <>
            <TodoCounter />
            <TodoSearch />

            <TodoList>
                {error && (
                    <TodosError />
                )}
                {loading && (
                    <>
                        <TodosLoading />
                        <TodosLoading />
                        <TodosLoading />
                    </>
                )}
                {(!loading && searchedTodos.length === 0) && <EmptyTodos />}

                {searchedTodos.map(todo => (
                    //We need to give an identity to each element, by giving it a key. In this case, although each element has a text property, its value is different from the others, lets use that:
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        // Nested argumented function, to avoid endless calls & crash, React will call it only onClick
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>
            <CreateTodoButton 
                setOpenModal={setOpenModal} />

            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>

            )}
        </>
    );
}

export { AppUI };