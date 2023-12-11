import './TodoItem.css';
import {DeleteIcon} from '../TodoIcon/DeleteIcon.js'
import {CompleteIcon} from '../TodoIcon/CompleteIcon.js'

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <CompleteIcon 
        completed={props.completed}
        onComplete={props.onComplete}
      />

      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>

      <DeleteIcon
        onDelete={props.onDelete}
      />
    </li>
  );
}

/* We are avoiding default export, to minimize misleading names, specially on bigger projects; 
as this way of exporting won't "care" what name you choose for it.
export default TodoItem; */
export { TodoItem };
// Instead, explicit export ensures the need to type the specific name