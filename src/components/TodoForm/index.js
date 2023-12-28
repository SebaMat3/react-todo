import './TodoForm.css' 

function TodoForm(){
	return (
        <>
            <form onSubmit={(event) =>{
                event.preventDefault();
            }}>
                <label> Write your new TODO </label>
                <textarea placeholder="Take Cookie out for a walk"
                />
                <div className="TodoForm-container">
                    <button className="TodoForm-button TodoForm-button--cancel"
                >	Cancel</button>
                    <button className="TodoForm-button TodoForm-button--add"
                >	Add</button>
                </div>
            </form>    
        </>

	);
}

export {TodoForm}