import * as React from 'react';
import './list.scss';

//Map this out so we can override the default numbered list
export const OrderedList = ({children}) => {
    return (
        <ol className="list__container">
            {
                React.Children.map(children, (child, index) => {
                    return (
                        <li className="bullet__list">
                            <div className="bullet bullet__list-number">
                                {index + 1}
                            </div>
                            {child.props.children}
                        </li>
                    );
                })
            }
        </ol>
    )
}

export const List = (props : any) => {
    return (
        <li className="bullet__list">
            <div className="bullet"/>
            {props.children}
        </li>
    );
}

export const ListContainer = (props : any) => {
    return (
        <ul className="list__container">{props.children}</ul>
    )
}