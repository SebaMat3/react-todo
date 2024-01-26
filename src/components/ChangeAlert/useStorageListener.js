import React from "react";

const useStorageListener = (synchronize) => {

    const [storageChanged, setStorageChanged] = React.useState(false);

    //Event listener for changes in TODOS storage
    window.addEventListener('storage', (change) => {
        if (change.key === 'TODOS_V1') {
            console.log('There has been changes on TODOS_V1')
            setStorageChanged(true)
        }
    });

    //Function for the ChangeAlert button
    const toggleShow = () => {
        synchronize();
        setStorageChanged(false)
    }

    return {
        show: storageChanged,
        toggleShow
    };
}

export {useStorageListener};