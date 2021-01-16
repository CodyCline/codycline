import * as React from "react";
import * as ReactDOM from "react-dom"
import "./offline.scss";

//Detect if a user is offline
export const Offline = () => {
    //Assume user is online by default
    const [isOffline, setOfflineStatus] = React.useState<boolean>(false);
    React.useEffect(() => {
        if (typeof window !== `undefined`) {
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