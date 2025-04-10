//src/routes/home/HomePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { useTodos } from '../useTodos.js';
import { TodoSearch } from '../../ui/TodoSearch/index.js';
import { TodoList } from '../../ui/TodoList/index.js';
import { TodoItem } from '../../ui/TodoItem/index.js';
import { CreateTodoButton } from '../../ui/CreateTodoButton/index.js';
import { TodoCounter } from '../../ui/TodoCounter/index.js';
import { TodosError } from '../../ui/TodosError/index.js';
import { TodosLoading } from '../../ui/TodosLoading/index.js';
import { EmptyTodos } from '../../ui/EmptyTodos/index.js';
//import { Modal } from '../../ui/Modal/index.js';
//import { TodoForm } from '../../ui/TodoForm/index.js'
import TodoHeader from '../../ui/Header/index.js';
import { ChangeAlert } from '../../ui/ChangeAlert/index.js';

function HomePage() {
  const navigate = useNavigate();

  const {state, stateUpdaters} = useTodos()
  
  const {
    error,
    loading,
    searchedTodos,
    totalTodos,
    completedTodos,
    //openModal,
    searchValue,
  } = state;

  const {
    completeTodo,
    addTodo,
    deleteTodo,
    setSearchValue,
    synchronizeTodos
  } = stateUpdaters;

  return (

    <>
    {/* The rest of the component rendering */}
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
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.id)}
            /* updated navigation action, sending todo object as 2nd param  */ 
            onEdit={() => navigate(
              `/edit/${todo.id}`, 
              {
                state: {todo}
              }
            )}
            onDelete={() => deleteTodo(todo.id)}
          /> 
        )}
      </TodoList>


{/*       {openModal && (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )} */}

      <CreateTodoButton
        //setOpenModal={setOpenModal} 
        onClick={() => navigate('/new')}
      />
        
      <ChangeAlert
        synchronize={synchronizeTodos}
      />

    </>
  );
}

export {HomePage};
