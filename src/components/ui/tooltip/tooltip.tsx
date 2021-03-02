import * as React from "react";
import cx from "classnames";
import "./tooltip.scss";

export const Tooltip = ({children, position, delay, content, followCursor = false,} :any) => {
    let timeout;
    const [active, setActive] = React.useState<boolean>(false);

    const showTip = () => {
        timeout = setTimeout(() => {
            setActive(true);
        }, delay || 480);
    }

    const hideTip = () => {
        clearInterval(timeout);
        setActive(false);
    }

    return (
        <div
            className="tooltip__wrapper"
            // When to show the tooltip
            onMouseEnter={showTip}
            onMouseLeave={hideTip}
        >
            {/* Wrapping */}
            {children}
            {active && (
                <div className={cx(`tooltip`, `${position || `left`}`, )}>
                    {content}
                </div>
            )}
        </div>
    );
};

