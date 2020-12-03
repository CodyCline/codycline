import * as React from "react";
import * as types from "../../types/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./spoiler.scss";


export const Spoiler = ({ children, title }: types.SpoilerProps) => {
    const [toggled, toggleSpoiler] = React.useState<boolean>(false);
    const onToggle = () => {
        toggleSpoiler(!toggled);
    }
    return (
        <React.Fragment>
            <ul onClick={onToggle} role="navigation" className="spoiler__header">
                <li>{title}</li>
                <li>
                    <FontAwesomeIcon
                        icon={["fas", toggled ? "chevron-up" : "chevron-down"]}
                    />
                </li>
            </ul>
            {toggled &&
                <div className="spoiler__body">
                    {children}
                </div>
            }
        </React.Fragment>
    );
}