import React from "react";
import { useLocalStorage } from "./useLocalStorage";


function useTodos() {
  //All the app logic goes here
  const {
    item: todos,
    storeItem: storeTodos,
    error,
    loading,
    synchronizeItem: synchronizeTodos,
  } = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  //DERIVATED STATE: Number of completed todos, using double negation !! to ensure a boolean expression 
  const completedTodos = todos.filter(
    todo => !!todo.completed
  ).length;
  const totalTodos = todos.length;


  // Logic to search for tasks
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

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
    });
    storeTodos(newTodos);
  };

  // "Complete todo" functionality, to provide to todoItems 
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    storeTodos(newTodos);
  };

  // "Delete todo" functionality, to provide to todoItems, almost the same as achieveTodos
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    storeTodos(newTodos);
  }

   return {
      loading,
      error,
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      addTodo,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
      synchronizeTodos
    };
}

export { useTodos };