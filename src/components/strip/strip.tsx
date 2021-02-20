import { Link } from 'gatsby';
import * as React from 'react';
import { Icon } from '../ui/icon/icon';
import './strip.scss';

export const Strip = ({title, description, category, date, slug}) => {
    return (
        <ul className="strip">
            {/* <li className="strip__icon">
                
            </li> */}
            <li className="strip__title">
                <span className="strip__icon">
                    <Icon height={32} width={32} name={category}/>
                </span>
                <Link to={slug}>{title}</Link>
            </li>
            <li className="strip__description">
                <p>{description}</p>
            </li>
            <li className="strip__date">
                <p>{date}</p>
            </li>
        </ul>
    )
}