import * as React from 'react';
import { Icon } from '../ui/icon/icon';
import './social.scss';

export const SocialBar = ({ children }: any) => {
    return (
        <ul className="social">
            {children}
        </ul>
    )
}

export const Social = ({ link, icon }: any) => (
    <li className="social__icon">
        <a target="_blank" rel="noopener noreferrer" href={link}>
            <Icon noTitle name={icon}/>
        </a>
    </li>
)