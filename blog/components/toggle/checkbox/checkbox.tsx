import * as React from 'react';

export const CheckBox = ({ checked }: any) => {
    const [isToggled, toggleInput] = React.useState<boolean>(checked);
    const toggle = () => {
        toggleInput(!isToggled);
    }
    return (
        <input disabled={checked} aria-label="checkbox" type="checkbox" checked={isToggled} onChange={toggle} />
    )
}