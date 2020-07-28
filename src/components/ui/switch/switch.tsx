import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ThemeSwitch = () => {

    const [theme, setTheme] = React.useState<string>("light");
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
                <span style={{color: "#0B6EFD"}} onClick={() => onClick("light")}><FontAwesomeIcon style={{fontSize: "1.75rem"}} icon={["far", "moon"]}/></span>
                :
                <span style={{color: "#FFCC00"}} onClick={() => onClick("dark")}><FontAwesomeIcon style={{fontSize: "1.75rem"}} icon={["fas", "sun"]}/></span>
            }
        </span>
    )
}