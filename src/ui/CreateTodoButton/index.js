// src/ui/CreateTodoButton/index.js
import './CreateTodoButton.css';

function CreateTodoButton( props ) {
/*   const onClickButton = () => {
    setOpenModal(prevState => !prevState);
  }; */

  return (
    <button
      className="CreateTodoButton"
      //onClick={onClickButton}
      onClick={props.onClick}
    >
      +
    </button>
  );
}

export { CreateTodoButton };