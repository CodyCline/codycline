import * as React from 'react';
import { Link } from 'gatsby';
import cx from 'classnames';
import './tags.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const MetaTag = ({ children, link }: any) => (
    <Link className="meta" to={link}>
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