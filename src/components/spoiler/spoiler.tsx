import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './spoiler.scss';


export const Spoiler = ({ children, title }) => {
    const [toggled, toggleSpoiler] = React.useState<boolean>(false);
    const onToggle = () => {
        toggleSpoiler(!toggled);
    }
    return (
        <div className="spoiler">
            <ul onClick={onToggle} role="navigation" className="spoiler-header">
                <li>{title}</li>
                <li>
                    <FontAwesomeIcon
                        icon={["fas", toggled ? "chevron-up" : "chevron-down"]}
                    />
                </li>
            </ul>
            {toggled &&
                <div className="spoiler-body">
                    {children}
                </div>
            }
        </div>
    );
}