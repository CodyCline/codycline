import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './toggle.scss';

export const ThemeToggle = () => {
    const [toggled, toggleTheme] = useState<boolean>(false);
    const onClick = () => {
        toggleTheme(!toggled);
    }
    return (
        <span className="toggle-background">
            {
                toggled?
                <span style={{color: "#4C6EF5"}} onClick={onClick}><FontAwesomeIcon icon={["far", "moon"]}/></span>
                :
                <span style={{color: "#FFF700"}} onClick={onClick}><FontAwesomeIcon icon={["fas", "sun"]}/></span>
            }
        </span>
    )
}