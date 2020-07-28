import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ThemeSwitch = ({onChange} : any) => {

    const [toggled, toggleTheme] = React.useState<boolean>(false);
    
    const toggle = () => {
        toggleTheme(!toggled);
        onChange();
    }
    return (
        <span className="toggle-background">
            {
                toggled?
                <span style={{color: "#0B6EFD"}} onClick={toggle}><FontAwesomeIcon style={{fontSize: "1.75rem"}} icon={["far", "moon"]}/></span>
                :
                <span style={{color: "#FFCC00"}} onClick={toggle}><FontAwesomeIcon style={{fontSize: "1.75rem"}} icon={["fas", "sun"]}/></span>
            }
        </span>
    )
}