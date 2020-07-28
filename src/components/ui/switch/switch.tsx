import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './switch.scss';

export const ThemeSwitch = () => {

    const [theme, setTheme] = React.useState<string>("dark");
    const [toggled, toggleTheme] = useState<boolean>(false);
    React.useEffect(() => {
        document.documentElement.className = `theme--${theme}`
    }, [theme])
    const onClick = (mode:string) => {
        toggleTheme(!toggled);
        setTheme(mode);
    }
    return (
        <span className="theme-switch">
            {
                toggled?
                <span className="theme-dark-icon" onClick={() => onClick("dark")}><FontAwesomeIcon style={{fontSize: "1.75rem"}} icon={["far", "moon"]}/></span>
                :
                <span className="theme-light-icon" onClick={() => onClick("light")}><FontAwesomeIcon style={{fontSize: "1.75rem"}} icon={["fas", "bolt"]}/></span>
            }
        </span>
    )
}