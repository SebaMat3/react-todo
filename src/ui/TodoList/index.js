//src/components/TodoList/index.js
import React from 'react';
import './TodoList.css';

function TodoList(props) {
    //The todos rendering function allows using data from render props OR receiving it from render functions (children)
    const renderFunc = props.render || props.children;

    return (
        <section className="TodoList-container">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            
            {/* Showing `onEmptyTodos()` component, when not loading and undefined totalTodos  */}
            {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

            {(!!props.totalTodos && !props.searchedTodos?.length) && props.onEmptySearchResults(props.searchText)}

            {/* 
                        {props.searchedTodos?.map(todo => renderFunc(todo))} There is a simpler way to write this */}
            {(!props.loading && !props.error) && props.searchedTodos?.map(renderFunc)}

            {/*         
            <ul>
                {props.children}
            </ul>   
            */}
        </section>

    );
}
export { TodoList };