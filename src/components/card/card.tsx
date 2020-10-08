import * as React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './card.scss';


export const Card = ({ 
    npmURL, 
    appstoreURL, 
    androidURL, 
    githubURL,
    liveURL,
    linuxURL,
    downloadURL,
    title,
    description,
    thumb,
    link,
    style,
    onClick 
}: any) => {
    const placeHolder = "https://via.placeholder.com/300/000000/FFFFFF/?text=Placeholder";
    return (
        <div style={style} onClick={onClick} className="card">
            <Link to={link}>
                <img className="card-image" alt="card-img" src={thumb || placeHolder} />
                <ul className="card-meta">
                    <li>
                        <h4 style={{ margin: 0, paddingBottom: "5px" }}>{title}</h4>
                    </li>
                    <li className="card-description">{description}</li>
                </ul>
                </Link>
                <ul className="card-icon-bar">
                    {/* Icons */}
                    {githubURL &&
                        <a target="_blank" rel="noopener noreferrer" href={githubURL} className="card-icon">
                            <FontAwesomeIcon icon={["fab", "github"]} />
                        </a>
                    }
                    {npmURL && 
                        <a target="_blank" rel="noopener noreferrer" href={npmURL} className="card-icon">
                            <FontAwesomeIcon icon={["fab", "npm"]} />
                        </a>
                    }
                    {liveURL &&
                        <a target="_blank" rel="noopener noreferrer" href={liveURL} className="card-icon">
                            <FontAwesomeIcon icon={["fas", "link"]} />
                        </a>
                    }
                    {appstoreURL &&
                        <a target="_blank" rel="noopener noreferrer" href={appstoreURL} className="card-icon">
                            <FontAwesomeIcon icon={["fab", "app-store"]} />
                        </a>
                    }
                    {androidURL &&
                        <a target="_blank" rel="noopener noreferrer" href={androidURL} className="card-icon">
                            <FontAwesomeIcon icon={["fab", "google-play"]} />
                        </a>
                    }
                    {linuxURL &&
                        <a target="_blank" rel="noopener noreferrer" href={linuxURL} className="card-icon">
                            <FontAwesomeIcon icon={["fab", "linux"]} />
                        </a>
                    }
                    {downloadURL &&
                        <a target="_blank" rel="noopener noreferrer" href={downloadURL} className="card-icon">
                            <FontAwesomeIcon icon={["fas", "download"]} />
                        </a>
                    }
                </ul>
        </div>
    )
}