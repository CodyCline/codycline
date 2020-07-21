import * as React from 'react';
import cx from 'classnames';
import './tags.scss';

export const SelectTag = ({children, isActive}: any) => {
    return (
        <span className={cx("select-tag", isActive? "active-tag" : null)}>{children}</span>
    );
}