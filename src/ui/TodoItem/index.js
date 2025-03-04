//src/ui/TodoItem/index.js

import './TodoItem.css';
import {DeleteIcon} from '../TodoIcon/DeleteIcon.js'
import {CompleteIcon} from '../TodoIcon/CompleteIcon.js'
import { EditIcon } from '../TodoIcon/EditIcon.js';

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
      <EditIcon 
        onEdit={props.onEdit}
      />
      <DeleteIcon
        onDelete={props.onDelete}
      />
    </li>
  );
}

export { TodoItem };
