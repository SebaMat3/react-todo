//src/routes/useTodos.js
import React from "react";
import { useLocalStorage } from "./useLocalStorage";


function useTodos() {
  const {
    item: todos,
    saveItem: storeTodos,
    synchronizeItem: synchronizeTodos,
    error,
    loading,
  } = useLocalStorage('TODOS_V2', []);

  // Rest of the logic...
  const [searchValue, setSearchValue] = React.useState('');

  // These are derived states - they are computed from the main todos state
  const completedTodos = todos.filter(
    todo => !!todo.completed
  ).length;
  const totalTodos = todos.length;

  // This is also derived state - computed from todos and searchValue
  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }
  
  const getTodo = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    return todos[todoIndex];
  }

  const addTodo = (text) => {
    //const idList = todos.map(todo => todo.id);
    
    let id = newId(todos);

    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
      id
    });
    storeTodos(newTodos);
  };
  
  const completeTodo = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    storeTodos(newTodos);
  };
  const editTodo = (id, newText) => {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    const newTodos = [...todos];
    newTodos[todoIndex].text = newText;

    storeTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    storeTodos(newTodos);
  };
  
  const state = {
    error,
    loading,
    searchedTodos,
    totalTodos,
    completedTodos,
    //openModal,
    searchValue,
    getTodo
  }
  
  const stateUpdaters = {
    completeTodo,
    //setOpenModal,
    addTodo,
    deleteTodo,
    setSearchValue,
    synchronizeTodos,
    editTodo
  }
  
  return {
    state, stateUpdaters
    /*       loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    searchedTodos,
    openModal,
    setSearchValue,
    addTodo,
    completeTodo,
    deleteTodo,
    setOpenModal,
    synchronizeTodos */
  };
}


/* super simple Date based ID generator
function newTodoId() {
  return Date.now(); //  Unrepeated number of mililiseconds: 1668393426376
} */

const newId = (todoList) => {
  if (!todoList || todoList.length === 0) {
    return 1;
  }
  
  const idList = todoList.map(todo => todo.id);
  const maxID = Math.max(...idList);
  return maxID + 1;
  
};

export { useTodos };