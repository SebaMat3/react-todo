import React from "react";

// Custom hook: everything localStorage related
function useLocalStorage (itemName, initialValue) {
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);


  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);

        let parsedItem;
        // Avoiding error crash on empty localStorage
        if (!localStorageItem){  //Error fish: developing for errors first, if it's empty =>
          console.log('No todos in localStorage');
          //Set a (stringified) empty object inside localStorage
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          //If there's something inside, parse it for javascript to use it on website
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }

        setLoading(false);
      } catch (error) {
        setLoading(false)
        setError(true)
      }
    }, 2000);
  });


// Function to save state changes on localStorage
  const storeItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem)
  };

    return {
      item, 
      storeItem,
      loading,
      error,    
    };
}

export { useLocalStorage };


// For every element of the array we will render a ToDoItem
/* const defaultTodos = [
	{ text: 'Siesta', completed: true }, 
	{ text: 'Tomar el Curso de Intro a React.js', completed: false },
	{ text: 'Armar bici', completed:false }, 
	{ text:'Mueble Tia Mariana', completed: false }
];
localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
localStorage.removeItem(itemName); */