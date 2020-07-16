import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './strip.scss';



export const Strip = ({ title, description, imageUrl, date, readTime }: any) => {
    return (
        <div className="strip">
            <img src={imageUrl} className="strip-image" />
            <div className="strip-spacer"/>
            <div className="strip-secondary">
                <div className="strip-text">
                    <h2 className="strip-text">{title}</h2>
                    <p>{description}</p>
                </div>
                <div className="strip-meta">
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

