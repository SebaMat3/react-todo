//src/ui/TodoIcon/EditIcon.js
import React from "react";
import { TodoIcon } from "./index.js";

const EditIcon = ({ onEdit }) => {
    return (
        <TodoIcon
            type="edit"
            onClick={onEdit}
        />
    );
}

export { EditIcon };