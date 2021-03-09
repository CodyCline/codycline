import * as React from "react";

export const Quiz = ({children} : any) => {
    return (
        <div className="quiz__container">
            <ul className="quiz" style={{border: `1px solid green`}}>
                {children}
            </ul>
        </div>
    )
}

export const QuizItem = ({children} : any) => {
    return (
        <li>{children}</li>
    )
}