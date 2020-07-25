import * as React from 'react';
import cx from 'classnames';
import './tags.scss';

export const SelectTag = ({children, isActive, onClick}: any) => {
    return (
        <span onClick={onClick} className={cx("select-tag", isActive? "active-tag" : null)}>{children}</span>
    );
}