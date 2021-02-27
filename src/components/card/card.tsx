import * as React from 'react';
import cx from 'classnames';
import { Link } from '../ui/link/link';
import { Link as GatsbyLink } from 'gatsby'
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
                        <Link href={gitUrl}>
                            <Icon height={28} width={28} name="git" />
                        </Link>
                    </li>
                }
                {externalUrl &&
                    <li className="card__links-item">
                        <Link href={externalUrl}>
                            <Icon height={28} width={28} name="link" />
                        </Link>
                    </li>
                }
                {appleUrl &&
                    <li className="card__links-item">
                        <Link href={appleUrl}>
                            <Icon height={28} width={28} name="appstore" />
                        </Link>

                    </li>
                }
                {androidUrl &&
                    <li className="card__links-item">
                        <Link href={androidUrl}>
                            <Icon height={28} width={28} name="googleplay" />
                        </Link>
                    </li>
                }
                {snapcraftUrl &&
                    <li className="card__links-item">
                        <Link href={snapcraftUrl}>
                            <Icon height={28} width={28} name="snapcraft" />
                        </Link>
                    </li>
                }
            </ul>
            <div className="card__body">
                <h3>
                    <GatsbyLink to={slug}>
                        {title}
                    </GatsbyLink>
                </h3>
                <p>
                    <GatsbyLink to={slug}>{description}</GatsbyLink>
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