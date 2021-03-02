import * as React from "react";
import cx from "classnames"
import { Icon } from "../ui/icon/icon";
import * as types from "../../types/components";
import "./spoiler.scss";


export const Spoiler = ({ children, title }: types.SpoilerProps) => {
    const [toggled, toggleSpoiler] = React.useState<boolean>(false);
    const onToggle = () => {
        toggleSpoiler(!toggled);
    }
    return (
        <React.Fragment>
            <ul onClick={onToggle} role="navigation" className={cx(toggled? `spoiler__border-open`: `spoiler__border`, `spoiler__header`)}>
                <li>{title}</li>
                <li>
                    <Icon className="spoiler__icon" height={32} width={32} name={toggled? `chevron-down`: `chevron-up`}/>
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