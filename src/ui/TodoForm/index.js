//src/ui/TodoForm/index.js
import React from 'react';
import './TodoForm.css';
import { useNavigate } from 'react-router-dom';


function TodoForm (props){
    const navigate = useNavigate();
    const [newTodoValue, setNewTodoValue] = React.useState(props.defaultTodoText || '');

    const onChange = (event) => {
       setNewTodoValue(event.target.value);
    }
    const onCancel = () => {
        navigate('/');
    }
    const onSubmit = (event) => {
        event.preventDefault();
        props.submitEvent(newTodoValue);
        navigate('/');
        //setOpenModal(false);
        //addTodo(newTodoValue);
     }
	return (
        <>
            <form onSubmit={onSubmit}>
                {/* <label> Write your new TODO </label> */}
                <label>{props.label}</label>
                <textarea
                    disabled={props.loading}
                    value={newTodoValue}
                    onChange={onChange} 
                    placeholder="Take Cookie out for a walk"
                    required
                />
                <div className="TodoForm-container">
                    <button className="TodoForm-button TodoForm-button--cancel"
                        onClick={onCancel}
                    >	
                     Cancel
                    </button>
                    <button
                        disabled={props.loading}
                        type="submit" 
                        className="TodoForm-button TodoForm-button--add"
                        onSubmit={onSubmit}
                    >	
                        {/* Add */}
                        {props.submitText}
                    </button>
                </div>
            </form>    
        </>
	);
}

export {TodoForm}