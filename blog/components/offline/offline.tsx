import * as React from "react";
import * as ReactDOM from "react-dom";
import { useHasMounted } from "../../../utils/use-has-mounted";
import "./offline.scss";

//Detect if a user is offline
export const Offline = () => {
    //Assume user is online by default
    const hasMounted = useHasMounted();
    const [isOffline, setOfflineStatus] = React.useState<boolean>(false);
    React.useEffect(() => {
        if (hasMounted) {
            window.addEventListener("online", () => setOfflineStatus(false));
            window.addEventListener("offline", () => setOfflineStatus(true));
            return () => {
                window.removeEventListener("online", () => setOfflineStatus(true));
                window.removeEventListener("offline", () => setOfflineStatus(false));
            }
        }
    });

    return (
        <React.Fragment>
            {isOffline &&
                ReactDOM.createPortal(
                    <p className="offline">
                        You are offline please check your internet connection and refresh the page
                    </p>,
                    document.body
                )
            }
        </React.Fragment>

    );
}