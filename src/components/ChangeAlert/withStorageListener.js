import React from "react";


export const withStorageListener = (WrappedComponent) => {  
    return function ComponentWithStorageListener(props) {
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
			props.synchronize();
			setStorageChanged(false)
		}

        return (
            <WrappedComponent
                show={storageChanged}
                toggleShow={toggleShow}
            />
        );
    }
}