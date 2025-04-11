//Babel plugin has automatically been importing React for us, to access useState() we're doing it explicitly: 
import React from 'react';
import './TodoSearch.css';
//import { useSearchParams } from 'react-router-dom'
import { useLocation, useHistory } from 'react-router-dom';


const TodoSearch = ({setSearchValue, loading}) => {

/*     const [searchParams, setSearchParams] = useSearchParams()
    const paramsValue = searchParams.get('search')

    const onSearchValueChange = ({ target: { value } }) => {
        setSearchValue(value)
        setSearchParams({ search: value })
    } */

        const location = useLocation();
        const history = useHistory();
      
        const searchParams = new URLSearchParams(location.search);
        const paramsValue = searchParams.get('search') || '';
      
        const onSearchValueChange = ({ target: { value } }) => {
          setSearchValue(value);
          searchParams.set('search', value);
          history.push({ search: searchParams.toString() });
        };
    return (
        <input placeholder="Search" 
            className={`TodoSearch ${loading && 'TodoSearch--loading'}`}
            value={paramsValue ?? ''}
            onChange={onSearchValueChange}
            disabled={loading}
        />
    );
}

export {TodoSearch};