import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col, Visible } from 'react-grid-system';
import './strip.scss';
import { ClockIcon, BookIcon } from '@primer/octicons-react';


export const Strip = ({ title, description, imageUrl, date, readTime }: any) => {
    return (
        <div className="strip">
            <img src={imageUrl} className="strip-image" />
            <div className="strip-spacer"/>
            <div className="strip-secondary">
                <div className="strip-text">
                    <h3 className="strip-text">{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="strip-meta">
                    <span>
                        <ClockIcon/> {date}
                    </span>
                    <span>
                        <BookIcon/>{readTime} minute read
                    </span>
                </div>
            </div>

        </div>
    );
}

