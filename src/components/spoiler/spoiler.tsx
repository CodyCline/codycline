import * as React from "react";
import * as types from "../../types/components";
import "./spoiler.scss";
import { Icon } from "../ui/icon/icon";


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
                    {
                        toggled?
                        <Icon name="chevron_up"/>
                        :
                        <Icon name="chevron_down"/>
                    }
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