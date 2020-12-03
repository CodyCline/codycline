import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './switch.scss';

export const ThemeSwitch = () => {
    if (typeof window !== `undefined`) {
        const currentTheme = (window.localStorage.getItem("theme__preference")) || "dark"
        const [toggled, toggleButton] = useState<boolean>(false);
        React.useEffect(() => {
            document.documentElement.className = `theme--${currentTheme}`
        })
        const onClick = (mode: "dark" | "light") => {
            window.localStorage.setItem("theme__preference", mode)
            toggleButton(!toggled);
        }
        return (
            <React.Fragment>
                {
                    toggled ?
                        <p className="icon icon--dark" onClick={() => onClick("dark")}><FontAwesomeIcon style={{ fontSize: "1.75rem" }} icon={["far", "moon"]} /></p>
                        :
                        <p className="icon icon--light" onClick={() => onClick("light")}><FontAwesomeIcon style={{ fontSize: "1.75rem" }} icon={["fas", "lightbulb"]} /></p>
                }
            </React.Fragment>
        )
    }
    return <React.Fragment/>
}


export const CheckBox = ({checked}:any) => {
    const [isToggled, toggleInput] = React.useState<boolean>(checked);
    const toggle = () => {
        toggleInput(!isToggled);
    }
    return (
        <input disabled={checked} aria-label="checkbox" type="checkbox" checked={isToggled} onChange={toggle} />
    )
}
