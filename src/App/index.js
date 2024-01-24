import './App.css';
import React from 'react';
import { useTodos } from './useTodos.js';
import { TodoSearch } from '../components/TodoSearch/index.js';
import { TodoList } from '../components/TodoList/index.js';
import { TodoItem } from '../components/TodoItem/index.js';
import { CreateTodoButton } from '../components/CreateTodoButton/index.js';
import { TodoCounter } from '../components/TodoCounter/index.js';
import { TodosError } from '../components/TodosError/index.js';
import { TodosLoading } from '../components/TodosLoading/index.js';
import { EmptyTodos } from '../components/EmptyTodos/index.js';
import { Modal } from '../components/Modal/index.js';
import { TodoForm } from '../components/TodoForm/index.js'
import TodoHeader from '../components/Header/index.js';
import { ChangeAlertWithStorage } from '../components/ChangeAlert/index.js';

function App() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    addTodo,
    synchronizeTodos
  } = useTodos() /* React.useContext(TodoContext); */
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
        onError={error => <TodosError error={error} />}
        loading={loading}
        onLoading={() => <TodosLoading />}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={(searchText) => <p>No results for: {searchText}</p>}
      >
{/*         render={todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          /> 
        )} */}
        {todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
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
        
      <ChangeAlertWithStorage
        synchronize={synchronizeTodos}
      />

    </>
  );
}

export default App;
