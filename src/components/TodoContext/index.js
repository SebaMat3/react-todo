import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext()

function TodoProvider({ children }) {
  //All the app logic goes here
  const {
    item: todos,
    storeItem: storeTodos,
    error,
    loading,
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  //DERIVATED STATE: Number of completed todos, using double negation !! to ensure a boolean expression 
  const completedTodos = todos.filter(
    todo => !!todo.completed
  ).length;
  const totalTodos = todos.length;

  // Logic to search for tasks
  const searchedTodos = todos.filter(
    (todo) => {
      //return todo.text.toLowerCase().includes(searchValue.toLowerCase())
      const lowerTodo = todo.text.toLocaleLowerCase();
      const lowerSearch = searchValue.toLocaleLowerCase();
      return lowerTodo.includes(lowerSearch)
    }
  );

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false,
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

  return (
    <TodoContext.Provider value={{
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
      setOpenModal
    }}>
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };