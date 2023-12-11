import './CreateTodoButton.css';

function CreateTodoButton() {
    return (
      <button
        className="CreateTodoButton"
        onClick={
          (event) => {
            console.log('You have clicked the button')
            console.log(event)
            console.log(event.target)
          }
        }
      >+</button>
    );
}
//literal export 
export { CreateTodoButton };