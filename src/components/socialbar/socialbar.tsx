import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './socialbar.scss';

export const SocialBar = ({ children }: any) => {
    return (
        <ul className="social-bar">
            {children}
        </ul>
    )
}

export const SocialIcon = ({ children, link, icon }: any) => (
    <li className="social-icon">
        <a target="_blank" rel="noopener noreferrer" href={link}>
            <FontAwesomeIcon style={{ fontSize: "32px" }} icon={icon} />
            {children}
        </a>
    </li>
)