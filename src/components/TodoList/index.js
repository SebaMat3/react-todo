import React from 'react';
import './TodoList.css';

function TodoList(props) {
    const renderFunc = props.render || props.children;

    return (

        <section className="TodoList-container">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}

            {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}
            {(!!props.totalTodos && !props.searchedTodos?.length) && props.onEmptySearchResults(props.searchText)}

            {/* {props.searchedTodos.map(todo => props.render(todo))} There is a simpler way to write this */}
            {(!props.loading && !props.error) && props.searchedTodos?.map(renderFunc)}

            {/*         <ul>
            {props.children}
        </ul>   */}
        </section>

    );
}
export { TodoList };