
import './App.css';
import { useLocalStorage } from '../hooks/useLocalStorage.js';
import { AppUI } from './AppUI.js';


import React from 'react';


// For every element of the array we will render a ToDoItem
/* const defaultTodos = [
	{ text: 'Siesta', completed: true }, 
	{ text: 'Tomar el Curso de Intro a React.js', completed: false },
	{ text: 'Armar bici', completed:false }, 
	{ text:'Mueble Tia Mariana', completed: false }
];
localStorage.setItem(itemName, JSON.stringify(defaultTodos));
localStorage.removeItem(itemName); */



//React component. "Notice the first uppercase on Name".
function App() {

  const [todos, setTodos] = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = React.useState('');
  console.log('User looks for all ' + searchValue);

  //DERIVATED STATE: Number of completed todos, using double negation !! to ensure a boolean expression 
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  // (Out of) total todos
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

// "Complete todo" functionality, to provide to todoItems 
const completeTodo = (text) => { 
  //Copy the todos array
  const newTodos = [...todos];
  //Find the todo which .text matches the string arg
  const todoIndex = newTodos.findIndex(
    (todo) => todo.text === text
    );
    //Turn its completed property to true
    newTodos[todoIndex].completed = true;
    //Return the "updated" version of the todos
    storageTodos(newTodos);
   }

// "Delete todo" functionality, to provide to todoItems, almost the same as achieveTodos
const deleteTodo = (text) => { 
  const newTodos = [...todos];
  const todoIndex = newTodos.findIndex(
    (todo) => todo.text === text
  );
  //Delete that one specific element from the array
  newTodos.splice(todoIndex,1);
  //Return the "updated" version of the todos
  storageTodos(newTodos);
}
  return (
    <AppUI 
      completedTodos={completedTodos} 
      totalTodos={totalTodos} 
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos} 
      completeTodo={completeTodo} 
      deleteTodo={deleteTodo}
    />
  );
}

//Exporting
export default App;
