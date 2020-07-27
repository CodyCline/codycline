import * as React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './card.scss';


export const Card = ({ npmUrl, appstoreUrl, androidUrl, style, link, title, description, banner, githubUrl, liveUrl, onClick }: any) => {
    return (
        <div style={style} onClick={onClick} className="card">
            <Link to={link}>
                <img className="card-image" alt="card-img" src={banner} />
                <ul className="card-meta">
                    <li>
                        <h4 style={{ margin: 0, paddingBottom: "5px" }}>{title}</h4>
                    </li>
                    <li className="card-description">{description}</li>
                </ul>
                </Link>
                <ul className="card-icon-bar">
                    {/* Icons */}
                    {githubUrl &&
                        <a target="_blank" rel="noopener noreferrer" href={githubUrl} className="card-icon">
                            <FontAwesomeIcon icon={["fab", "github"]} />
                        </a>
                    }
                    {npmUrl && 
                        <a target="_blank" rel="noopener noreferrer" href={githubUrl} className="card-icon">
                            <FontAwesomeIcon icon={["fab", "github"]} />
                        </a>
                    }
                    {liveUrl &&
                        <a target="_blank" rel="noopener noreferrer" href={liveUrl} className="card-icon">
                            <FontAwesomeIcon icon={["fas", "link"]} />
                        </a>
                    }
                    {appstoreUrl &&
                        <a target="_blank" rel="noopener noreferrer" href={liveUrl} className="card-icon">
                            <FontAwesomeIcon icon={["fas", "link"]} />
                        </a>
                    }
                    {androidUrl &&
                        <a target="_blank" rel="noopener noreferrer" href={liveUrl} className="card-icon">
                            <FontAwesomeIcon icon={["fas", "link"]} />
                        </a>
                    }
                </ul>
        </div>
    )
}