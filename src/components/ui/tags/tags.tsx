import * as React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import conan from '../../../assets/icons/code/conan.svg';
import './tags.scss';

export const IconTag = ({ children, link }: any) => (
    <Link className="meta" to={link}>
        <img style={{height: "25px", width: "25px"}} src={conan} alt="icon.svg" />
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