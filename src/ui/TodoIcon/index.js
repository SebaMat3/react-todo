//src/ui/TodoIcon/index.js

//Icons imported from react-icons, once the dependecy has been installed through the terminal
import { FaCheckCircle as CheckSVG } from "react-icons/fa";
import { FaTimesCircle as DeleteSVG } from "react-icons/fa";
import { MdEdit as EditSVG} from "react-icons/md";
import "./TodoIcon.css";


//Types of icon to call the TodoIcon to render
// Instead of using a conditional right on, we can add as many "possibilities":<component> as we want using this object
const iconTypes = {
    // Every element has become a function
    "check" : (color) => <CheckSVG className="Icon-svg Icon-svg--check" fill={color}/>,
    "delete" : (color) => <DeleteSVG className="Icon-svg Icon-svg--delete" fill={color}/>,
    "edit" : (color) => <EditSVG className="Icon-svg Icon-svg--edit" fill={color}/>
}

//Function to receive and render a type of Icon
function TodoIcon({type, color,onClick}) {
    return (
        <span
            //Type is used to set the specific class as well
            className = {`Icon-container Icon-container-${type}`}
            onClick={onClick}
        >   
            {iconTypes[type](color)}
        </span>
    )
}

export { TodoIcon };