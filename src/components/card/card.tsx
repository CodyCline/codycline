import * as React from 'react';
import './card.scss';
import { Icon } from '../ui/icon/icon';
import { ExternalLink } from '../ui/link/link';

export const Card = ({ 
    title, 
    description,
    type, 
    status, 
    version,
    gitUrl,
    externalUrl,
    appleUrl,
    androidUrl,
    snapcraftUrl,
    
}: any) => {
    return (
        <div className="card">
            <div className="card__icon">
                <Icon height={60} width={60} name="folder" />
            </div>
            <ul className="card__links">
                <li>
                    {
                        gitUrl && 
                        <ExternalLink href={gitUrl}>
                            <Icon height={28} width={28} name="git" />
                        </ExternalLink>
                    }
                </li>
                <li>
                    {externalUrl &&
                        <ExternalLink href={externalUrl}>
                            <Icon height={28} width={28} name="link" />
                        </ExternalLink>
                    }
                </li>
                <li>
                    {appleUrl && <Icon height={28} width={28} name="appstore" />}
                </li>
                <li>
                    {androidUrl && <Icon height={28} width={28} name="googleplay" />}
                </li>
                <li>
                    {snapcraftUrl && <Icon height={28} width={28} name="appstore" />}
                </li>
            </ul>
            <div className="card__body">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className="card__status">
                <li className="card__status-item">
                    {version}
                </li>
                <li className="card__status-item">
                    {status && <div className="card__status-light"/>}
                </li>
            </div>
            
        </div>
    )
}