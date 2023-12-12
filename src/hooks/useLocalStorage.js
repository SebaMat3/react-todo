import React from "react";

// Custom hook: everything localStorage related
function useLocalStorage (itemName, initialValue) {
    const [item, setItem] = React.useState(initialValue);
    const localStorageItem = localStorage.getItem(itemName);
    
  React.useEffect(() => {
    let parsedItem;
    // Avoiding error crash on empty localStorage
    if (!localStorageItem){  //Error fish: developing for errors first, if it's empty =>
      console.log('No todos in localStorage');
      //Set a (stringified) empty object inside localStorage
      localStorage.setItem(itemName, JSON.stringify([]));

      parsedItem = initialValue;
    }else{
      //If there's something inside, parse it for javascript to use it on website
      parsedItem = JSON.parse(localStorageItem);
    }
  })


// Function to save state changes on localStorage
const storeItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem)
    }

    return [item, storeItem];
}

export {useLocalStorage};