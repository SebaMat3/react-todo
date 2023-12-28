import './App.css';
import React from 'react';
import { AppUI } from './AppUI.js';
import { TodoProvider } from '../components/TodoContext/index.js';


function App() {
  return (
    <TodoProvider>
      <AppUI 
/*    completedTodos={completedTodos} 
      totalTodos={totalTodos} 
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos} 
      completeTodo={completeTodo} 
      deleteTodo={deleteTodo} */
    />
    </TodoProvider>
  );
}

export default App;
