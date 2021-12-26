import * as React from "react";
import cx from "classnames";
import { Link as GatsbyLink } from "gatsby"
import { Link } from "../ui/link/link";
import { Tooltip } from "../ui/tooltip/tooltip";
import { Icon } from "../ui/icon/icon";
import * as types from "../../types/components";
import "./card.scss";

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

}: types.Card.IProps) => {
    

    //Display icon depending on whether project is 
    const getIcon = (platform: types.Card.Platform) => {
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
    const getStatus = (status: types.Card.Status) => {
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
                <Icon className="card__icon-platform" height={72} width={72} title={platform} name={getIcon(platform)}/>
            </div>
            <ul className="card__meta card__links">
                {gitUrl &&
                    <li className="card__links-item">
                        <Tooltip position="top" content="View Source">
                            <Link href={gitUrl}>
                                <Icon noTitle  height={28} width={28} name="git" />
                            </Link>
                        </Tooltip>
                    </li>
                }
                {externalUrl &&
                    <li className="card__links-item">
                        <Tooltip position="top" content="View Live">
                            <Link href={externalUrl}>
                                <Icon noTitle  height={28} width={28} name="link" />
                            </Link>
                        </Tooltip>
                    </li>
                }
                {appleUrl &&
                    <li className="card__links-item">
                        <Tooltip position="top" content="View on App Store">
                            <Link href={appleUrl}>
                                <Icon noTitle  height={28} width={28} name="appstore" />
                            </Link>
                        </Tooltip>
                    </li>
                }
                {androidUrl &&
                    <li className="card__links-item">
                        <Tooltip position="top" content="View on Play Store">
                            <Link href={androidUrl}>
                                <Icon height={28} width={28} name="googleplay" />
                            </Link>
                        </Tooltip>
                    </li>
                }
                {snapcraftUrl &&
                    <li className="card__links-item">
                        <Tooltip position="top" content="View on Snapcraft Store">
                            <Link href={snapcraftUrl}>
                                <Icon noTitle height={28} width={28} name="snapcraft" />
                            </Link>
                        </Tooltip>
                    </li>
                }
            </ul>
            <div className="card__body">
                <h3 className="card__header">
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
                        <Tooltip position="bottom" content={status}>
                            <div
                                role="tooltip" 
                                className={cx(`status__light`, getStatus(status))}
                            />
                        </Tooltip> 
                    }
                </li>
            </ul>
        </div>
    );
}