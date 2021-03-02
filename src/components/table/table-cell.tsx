import * as React from "react";
import "./table.scss";

export const TableCell = (props: any) => {
    const cellRef = React.useRef<any>();
    const copy = () => {
        const element = cellRef.current;
        if (element) {
            navigator.clipboard.writeText(element.innerText);
        }
    }
    return (
        <div
            {...props}
            ref={cellRef}
            onDoubleClick={copy}
            tabIndex={props.tabIndex}
            className="table__cell"
        >
            {props.children}
        </div>
    );
}