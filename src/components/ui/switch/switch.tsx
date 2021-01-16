import React, { useState } from 'react';
import { Icon } from '../../ui/icon/icon';
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
                        <p className="icon icon--dark" onClick={() => onClick("dark")}>
                            <Icon name="moon" height={30} width={30} />
                        </p>
                        :
                        <p className="icon icon--light" onClick={() => onClick("light")}>
                            <Icon name="moon" height={30} width={30} />
                        </p>
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
