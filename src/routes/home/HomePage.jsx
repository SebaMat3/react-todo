//src/routes/home/HomePage.jsx
import '../App.css';
import React from 'react';
import { useTodos } from '../useTodos.js';
import { TodoSearch } from '../../ui/TodoSearch/index.js';
import { TodoList } from '../../ui/TodoList/index.js';
import { TodoItem } from '../../ui/TodoItem/index.js';
import { CreateTodoButton } from '../../ui/CreateTodoButton/index.js';
import { TodoCounter } from '../../ui/TodoCounter/index.js';
import { TodosError } from '../../ui/TodosError/index.js';
import { TodosLoading } from '../../ui/TodosLoading/index.js';
import { EmptyTodos } from '../../ui/EmptyTodos/index.js';
import { Modal } from '../../ui/Modal/index.js';
import { TodoForm } from '../../ui/TodoForm/index.js'
import TodoHeader from '../../ui/Header/index.js';
import { ChangeAlert } from '../../ui/ChangeAlert/index.js';

function HomePage() {
  const {
    states,
    stateUpdaters
  } = useTodos()
  
  const {
    error,
    loading,
    searchedTodos,
    totalTodos,
    completedTodos,
    openModal,
    searchValue,
  } = states;

  const {
    completeTodo,
    setOpenModal,
    addTodo,
    deleteTodo,
    setSearchValue,
    synchronizeTodos
  } = stateUpdaters;

  return (

    <>
      <TodoHeader loading={loading}>
        <TodoCounter 
          completedTodos={completedTodos} 
          totalTodos={totalTodos} 
        />
        <TodoSearch 
          searchValue={searchValue} 
          setSearchValue={setSearchValue} 
        />
      </TodoHeader>

      <TodoList
        error={error}
         // Render props - functions passed as props that return React elements
        onError={error => <TodosError error={error} />}
        loading={loading}
        onLoading={() => <TodosLoading />}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={(searchText) => <p>No results for: {searchText}</p>}
      >
        {todo => (
          //Render prop
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onEdit={() => console.log('Editing')}
            onDelete={() => deleteTodo(todo.text)}
          /> 
        )}
      </TodoList>


      {openModal && (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal} />
        
      <ChangeAlert
        synchronize={synchronizeTodos}
      />

    </>
  );
}

export {HomePage};
