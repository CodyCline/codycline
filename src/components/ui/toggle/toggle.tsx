import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './toggle.scss';

export const ThemeToggle = () => {

    const [theme, setTheme] = React.useState<string>("dark");
    const [toggled, toggleTheme] = useState<boolean>(false);
    React.useEffect(() => {
        document.documentElement.className = `theme--${theme}`
    })
    const onClick = (mode:string) => {
        toggleTheme(!toggled);
        setTheme(mode);
    }
    return (
        <span className="toggle-background">
            {
                toggled?
                <span style={{color: "#4C6EF5"}} onClick={() => onClick("light")}><FontAwesomeIcon icon={["far", "moon"]}/></span>
                :
                <span style={{color: "#FFF700"}} onClick={() => onClick("dark")}><FontAwesomeIcon icon={["fas", "sun"]}/></span>
            }
        </span>
    )
}