//src/App/useLocalStorage.js
import React from "react";

function useLocalStorage(itemName, initialValue) {

  const [state, dispatch] = React.useReducer(reducer, initialState({ initialValue }));

  const {
    synchronizedItems,
    item,
    loading,
    error,
  } = state;

  // ACTION CREATORS
  const onError = (error) => dispatch({ type: actionTypes.error, payload: error });
  const onSuccess = (item) => dispatch({ type: actionTypes.success, payload: item });
  const onSave = (item) => dispatch({ type: actionTypes.save, payload: item });
  const onSynchronize = () => dispatch({ type: actionTypes.synchronize });

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        // Avoiding error crash on empty localStorage
        if (!localStorageItem) {  //Error fish: developing for errors first, if it's empty =>
          console.log('No todos in localStorage');
          //Set a (stringified) empty object inside localStorage
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          //If there's something inside, parse it for javascript to use it on website
          parsedItem = JSON.parse(localStorageItem);
        }

        onSuccess(parsedItem);
      } catch (error) {
        onError(error);
      }
    }, 2000);
  }, [synchronizedItems]);


  // Function to save state changes on localStorage
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      onSave(newItem);
    } catch (error) {
      onError(error);
    }
  };

  //Function to start synchronizing TODOs on different windows
  const synchronizeItem = () => {
    onSynchronize();
  };


  return {
    item,
    saveItem,
    loading,
    error,
    synchronizeItem
  };
}

const initialState = ({ initialValue }) => ({
  synchronizedItems: true,
  error: false,
  loading: true,
  item: initialValue,
});

const actionTypes = {
  error: 'ERROR',
  success: 'SUCCESS',
  save: 'SAVE',
  synchronize: 'SYNCHRONIZE'
};

const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: true,
  },
  [actionTypes.success]: {
    ...state,
    error: false,
    loading: false,
    synchronizedItems: true,
    item: payload,
  },
  [actionTypes.save]: {
    ...state,
    item: payload,
  },
  [actionTypes.synchronize]: {
    ...state,
    synchronizedItems: false,
    loading: true,
  },

})

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
}

export { useLocalStorage };