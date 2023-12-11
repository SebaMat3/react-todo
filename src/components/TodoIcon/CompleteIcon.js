//Using TodoIcon component, adaptable core logic rendering the given type of icon  
import React from "react";
import { TodoIcon } from "./index.js";

const CompleteIcon = ({completed, onComplete}) => {
    return (
        <TodoIcon
            //type attribute will set the specific icon to be called
            type="check"
            color={completed ? "green" : "gray"}
            onClick={onComplete}
        />
    );
}

export {CompleteIcon};