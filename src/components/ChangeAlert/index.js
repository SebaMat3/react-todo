import { withStorageListener } from "./withStorageListener.js"

function ChangeAlert ({show, toggleShow}) {
        if (show) {
            return (
                <div>
                    <p className="alert alert-warning">
                        "There has been changes!"
                    </p>
                    <button
                        onClick={toggleShow}
                    >
                        Synchronize changes
                    </button>
                </div>
            )
        } else {
            return null;
        }
}

export const ChangeAlertWithStorage = withStorageListener(ChangeAlert);






