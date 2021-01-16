import * as React from 'react';
import './socialbar.scss';

export const SocialBar = ({ children }: any) => {
    return (
        <ul className="social">
            {children}
        </ul>
    )
}

export const SocialIcon = ({ children, link, icon }: any) => (
    <li className="social__icon">
        <a target="_blank" rel="noopener noreferrer" href={link}>
            {/* <FontAwesomeIcon style={{ fontSize: "32px" }} icon={icon} /> */}
            {children}
        </a>
    </li>
)