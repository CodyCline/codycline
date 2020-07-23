import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './card.css';

export const Card = ({ style, title, description, imageUrl, githubUrl, liveUrl, onClick }: any) => {
    return (
        <div style={style} onClick={onClick} className="card">
            <img className="card-image" alt="card-img" src="https://via.placeholder.com/300/000000/FFFFFF/?text=Placeholder" />
            <ul className="card-meta">
                <li><h4 style={{ margin: 0, paddingBottom: "5px" }}>{title}</h4></li>
                <li style={{color: "#CCC"}}>{description}</li>
            </ul>
            <ul className="card-icon-bar">
                {/* Icons */}
                {githubUrl && 
                    <a href={githubUrl} className="card-icon">
                        <FontAwesomeIcon icon={["fab", "github"]} />
                    </a>
                }
                {liveUrl && 
                    <a href={liveUrl} className="card-icon">
                        <FontAwesomeIcon icon={["fas", "link"]} />
                    </a>
                }
                {liveUrl && 
                    <a href={liveUrl} className="card-icon">
                        <FontAwesomeIcon icon={["fas", "link"]} />
                    </a>
                }
                {liveUrl && 
                    <a href={liveUrl} className="card-icon">
                        <FontAwesomeIcon icon={["fas", "link"]} />
                    </a>
                }
            </ul>
        </div>
    )
}