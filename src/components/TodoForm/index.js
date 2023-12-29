import React from 'react';
import './TodoForm.css';
import {TodoContext} from '../TodoContext';


function TodoForm(){
    const {
		addTodo,
		setOpenModal,
	}
	= React.useContext(TodoContext);

    const [newText, setNewText] = React.useState();

    const onSubmit = (event) => {
        event.preventDefault();
        setOpenModal(false);
        addTodo(newText);
     }
     const onCancel = () => {
         setOpenModal(false);
     }
     const onChange = (event) => {
        setNewText(event.target.value);
     }
	return (
        <>
            <form onSubmit={onSubmit}>
                <label> Write your new TODO </label>
                <textarea  onChange={onChange} 
                value={newText}
                placeholder="Take Cookie out for a walk"
                required
                />
                <div className="TodoForm-container">
                    <button className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >	Cancel</button>
                    <button className="TodoForm-button TodoForm-button--add"
                    onSubmit={onSubmit}
                >	Add</button>
                </div>
            </form>    
        </>
	);
}

export {TodoForm}