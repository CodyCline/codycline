import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './panel.scss';



export const Panel = ({ title, description, imageUrl, date, readTime }: any) => {
    return (
        <div className="panel">
            <img src={imageUrl} className="panel-image" />
            <div className="panel-secondary">
                <div className="panel-text">
                    <h2 className="panel-text">{title}</h2>
                    <p>{description}</p>
                </div>
                <div className="panel-meta">
                    <span>
                        <FontAwesomeIcon icon={["fab", "clock"]}/> {date}
                    </span>
                    <span>
                        <FontAwesomeIcon icon={["far", "book-alt"]}/>{readTime} minute read
                    </span>
                </div>
            </div>

        </div>
    );
}

