//src/components/ChangeAlert/index.js
import React from "react";
import { useStorageListener } from "./useStorageListener.js"
import './ChangeAlert.css';


function ChangeAlert ( {synchronize} ) {
    const {show, toggleShow} = useStorageListener(synchronize);
        if (show) {
            return (
                
                <div className="ChangeAlert-bg justify-center items-center">
                    <div className="ChangeAlert-container ">
                        <p className="text-xl font-bold">
                            There has been changes!
                        </p>
                        <p className="text-md">
                            You should:
                        </p>
                        <button
                            className="TodoForm-button TodoForm-button--add p-5"
                            onClick={toggleShow}
                        >
                            Synchronize changes
                        </button>
                    </div>
                </div>
            )
        } else {
            return null;
        }
}

export {ChangeAlert};






