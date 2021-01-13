import * as React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './tags.scss';
import { Icon } from '../../../utils/icon/icon';

export const IconTag = ({ children, link }: any) => (
    <Link className="meta" to={link}>
        <Icon name={children.toLowerCase()}/>
        <span className="meta__tag">
            {children && children.toLowerCase()}
        </span>
    </Link>
);

export const ExternalTag = ({link, icon}:any) => (
    <a className="external__tag" href={link} rel="noopener noreferrer">
        <FontAwesomeIcon icon={icon}/>
    </a>
)