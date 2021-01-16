import * as React from 'react';
import { Link } from 'gatsby';
import { Icon } from '../icon/icon';
import './tags.scss';

export const Tag = ({ children, link, icon }: any) => (
    <Link className="meta" to={link}>
        <Icon name={icon.toLowerCase()}/>
        <span className="meta__tag">
            {children && children.toLowerCase()}
        </span>
    </Link>
);

export const ExternalTag = ({link, icon}:any) => (
    <a className="external__tag" href={link} rel="noopener noreferrer">
        <Icon name="link"/>
    </a>
)