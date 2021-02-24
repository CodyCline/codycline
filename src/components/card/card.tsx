import * as React from 'react';
import cx from 'classnames';
import { Link } from 'gatsby';
import { ExternalLink } from '../ui/link/link';
import { Icon } from '../ui/icon/icon';
import './card.scss';

export const Card = ({
    title,
    description,
    platform,
    slug,
    status,
    version,
    gitUrl,
    externalUrl,
    appleUrl,
    androidUrl,
    snapcraftUrl,

}: any) => {
    type Status = "passing" | "failing" | "mixed";

    //Display icon depending on whether project is 
    const getIcon = (platform: string) => {
        switch (platform) {
            case "web":
                return (`folder`);
            case "mobile":
                return (`folder`);
            case "hardware":
                return (`circuit`);
            case "network":
                return (`globe`);
            case "desktop":
                return (`desktop`);
            case "package":
                return (`package`);
            default:
                return (`folder`);
        }
    }

    //Display CI status if applicable
    const getStatus = (status: Status) => {
        switch (status) {
            case "passing":
                return (`status__passing`);
            case "failing":
                return (`status__failing`);
            case "mixed":
                return (`status__mixed`)
            default:
                return (`status__mixed`);
        }
    }

    return (
        <div className="card">
            <div className="card__icon">
                <Icon fill={`#58a6ff`} height={72} width={72} title={platform} name={getIcon(platform)}/>
            </div>
            <ul className="card__meta card__links">
                {gitUrl &&
                    <li className="card__links-item">
                        <ExternalLink href={gitUrl}>
                            <Icon height={28} width={28} name="git" />
                        </ExternalLink>
                    </li>
                }
                {externalUrl &&
                    <li className="card__links-item">
                        <ExternalLink href={externalUrl}>
                            <Icon height={28} width={28} name="link" />
                        </ExternalLink>
                    </li>
                }
                {appleUrl &&
                    <li className="card__links-item">
                        <ExternalLink href={externalUrl}>
                            <Icon height={28} width={28} name="appstore" />
                        </ExternalLink>

                    </li>
                }
                {androidUrl &&
                    <li className="card__links-item">
                        <ExternalLink href={androidUrl}>
                            <Icon height={28} width={28} name="googleplay" />
                        </ExternalLink>
                    </li>
                }
                {snapcraftUrl &&
                    <li className="card__links-item">
                        <ExternalLink href={snapcraftUrl}>
                            <Icon height={28} width={28} name="snapcraft" />
                        </ExternalLink>
                    </li>
                }
            </ul>
            <div className="card__body">
                <h3>
                    <Link to={slug}>
                        {title}
                    </Link>
                </h3>
                <p>
                    <Link to={slug}>{description}</Link>
                </p>
            </div>
            <ul className="card__meta card__status">
                <li className="card__status-item">
                    {version}
                </li>
                <li className="card__status-item">
                    {status && 
                        <div
                            role="tooltip" 
                            className={cx(`status__light`, getStatus(status))}
                        />
                    }
                </li>
            </ul>
        </div>
    );
}