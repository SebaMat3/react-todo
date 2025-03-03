import './CreateTodoButton.css';


function CreateTodoButton({ setOpenModal }) {
  const onClickButton = () => {
    setOpenModal(prevState => !prevState);
  };
  return (
    <button
      className="CreateTodoButton"
      onClick={onClickButton}
    >
      +
    </button>
  );
}
//literal export 
export { CreateTodoButton };