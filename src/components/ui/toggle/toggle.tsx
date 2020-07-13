import React, { useState } from 'react';
import { SunIcon, MoonIcon } from '@primer/octicons-react';
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
                <span style={{color: "#4C6EF5"}} onClick={onClick}><MoonIcon size="medium"/></span>
                :
                <span style={{color: "#FFF700"}} onClick={onClick}><SunIcon size="medium"/></span>
            }
        </span>
    )
}