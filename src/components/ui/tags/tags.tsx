import * as React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import './tags.scss';

export const SelectTag = ({children, isActive, onClick}: any) => {
    return (
        <span onClick={onClick} className={cx("select-tag", isActive? "active-tag" : null)}>{children}</span>
    );
}

export const Tag = ({children, onClick} : any) => (
    <Link to={"/meta/" + children}>
        <span className="tag">{children}</span>
    </Link>
);