//Babel plugin has automatically been importing React for us, to access useState() we're doing it explicitly: 
import React from 'react';
import './TodoSearch.css';

// Trying components on declarative arrow functions - 
const TodoSearch = ({searchValue, setSearchValue, loading}) => {

    return (
        <input placeholder="Search" 
            className='TodoSearch'
            value={searchValue}
            onChange={(event) => {
                setSearchValue(event.target.value);
            }}
            disabled={loading}
        />
    );
}

export {TodoSearch};