import * as React from "react";
import cx from "classnames";
import { useStickyState } from "../../../../utils/use-sticky-state";
import { useHasMounted } from "../../../../utils/use-has-mounted";
import { Icon } from "../../icon/icon";
import "./theme-toggle.scss";

export const ThemeToggle = () => {
    const [theme, setTheme]:any = useStickyState(`dark`, `theme__preference`);
    React.useEffect(() => {
        document.documentElement.className = `theme--${theme}`
    })
    const toggleTheme = () => {
        const themeIsDark = theme === `dark`;
        if (themeIsDark) {
            setTheme(`light`);
        } else {
            setTheme(`dark`);
        }
    }
    return (
        <button role="checkbox" className="theme__toggle" onClick={toggleTheme}>
            <Icon
                className="theme__toggle-icon"
                name="lightbulb"
                height={32}
                width={32}
            />
        </button>
    );
}