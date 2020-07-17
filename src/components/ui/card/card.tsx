import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './card.css';

export const Card = ({ title, description, imageUrl, githubUrl, liveUrl, onClick }: any) => {
    return (
        <div onClick={onClick} className="card">
            <img className="card-image" alt="card-img" src="https://via.placeholder.com/300/000000/FFFFFF/?text=Placeholder" />
            <hr className="card-divider" />
            <ul className="card-meta">
                <li><h3 style={{ margin: 0, paddingBottom: "5px" }}>Hello</h3></li>
                <li>{description}</li>
            </ul>
            <ul className="card-icon-bar">
                {/* Icons */}
                <li style={{ fontSize: "1.25rem" }}><FontAwesomeIcon icon={["fab", "github"]} /></li>
                <li style={{ fontSize: "1.25rem" }}><FontAwesomeIcon icon={["fas", "globe"]} /></li>
            </ul>
        </div>
    )
}