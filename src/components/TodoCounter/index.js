
/* There are different ways of applying in-line styles
We could State CSS properties as an object inside a variable
And then send that variable to our style attribute
const styles = {
    backgroundColor : 'red',
    //Relative measures must be stated between quotes => '2rem'
    fontSize : '24px',
    padding : '48px',
    margin : '0',
    textAlign : 'center',
}*/

import './TodoCounter.css';

function TodoCounter({completed, total}) {   
    return (     
            <h1 className='TodoCounter'>
            {/* react allows us to directly give a styles object to the style attribute a well:
            <h1 style={{
                backgroundColor: 'red',
                fontSize : 24 || '24px'

            }}>
            You've completed {completed} out of {total} TODOs!.
            </h1> */}
                You've completed <span>{completed}</span> out of <span>{total}</span> TODOs!.
            </h1>
    ); 
}

//literal export 
export { TodoCounter };