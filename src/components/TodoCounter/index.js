/* There are different ways of applying in-line styles
We could State CSS properties as an object inside a variable
And then send that variable to our style attribute:
const styles = {
    backgroundColor : 'red',
    //Relative measures must be stated between quotes => '2rem'
    fontSize : '24px',
    padding : '48px',
    margin : '0',
    textAlign : 'center',
}

Lets rather import a stylesheet file, and go for the cleaner way*/

import './TodoCounter.css';
import React from 'react';

function TodoCounter({completedTodos, totalTodos}) {

    return (     
            <h1 className='TodoCounter'>
            {/* react allows us to directly give a styles object to the style attribute a well:
            <h1 style={{
                backgroundColor: 'red',
                fontSize : 24 || '24px'

            }}>
            You've completed {completed} out of {total} TODOs!.
            </h1> */}
                You've completed <span>{completedTodos}</span> out of <span>{totalTodos}</span> TODOs!.
            </h1>
    ); 
}


//literal export 
export { TodoCounter };