import * as React from "react";
import * as types from "../../types/components"
import "./quote.scss";

export const Quote = ({children} : types.IGenericProps) => {
    return (
        <blockquote className="quote">
            {children}
        </blockquote>
    )
}