//Babel plugin has automatically been importing React for us, to access useState() we're doing it explicitly: 
import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext'

// Trying components on declarative arrow functions - 
const TodoSearch = () => {
       const {
        searchValue, 
        setSearchValue,
       } = React.useContext(TodoContext)
    return (
        <input placeholder="Search" 
        className='TodoSearch'
        value={searchValue}
        onChange={(event) => {
            setSearchValue(event.target.value);
        }}/>
    );
}

export {TodoSearch};