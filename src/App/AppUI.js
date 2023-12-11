import {TodoSearch} from '../components/TodoSearch/index.js';
import {TodoList} from '../components/TodoList/index.js';
import {TodoItem} from '../components/TodoItem/index.js';
import {CreateTodoButton} from '../components/CreateTodoButton/index.js';
import {TodoCounter} from '../components/TodoCounter/index.js';

function AppUI ({ completedTodos, 
    totalTodos, 
    searchValue, 
    setSearchValue, 
    searchedTodos, 
    completeTodo,
    deleteTodo,
}) {
    return (
        //this looks like html, but the React engine will actually render it to JS. => JSX
        <>
    
          <TodoCounter 
            completed={completedTodos} 
            total={totalTodos}
          />
          <TodoSearch 
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
    
          <TodoList>
          {searchedTodos.map(todo => (
                    //We need to give an identity to each element, by giving it a key. In this case, although each element has a text property, its value is different from the others, lets use that:
                    <TodoItem 
                        key={todo.text} 
                        text={todo.text} 
                        completed ={todo.completed}
              // Nested argumented function, to avoid endless calls & crash, React will call it only onClick
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)} 
                    />
                    ))}
          </TodoList>
    
          <CreateTodoButton/>
        </>
    );
}

export { AppUI };