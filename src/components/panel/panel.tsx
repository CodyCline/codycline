import * as React from 'react';
import { Link } from 'gatsby';
import './panel.scss';



export const Panel = ({ children, title, description, imageUrl, onClick, tags, link }: any) => {
    return (
        <article className="panel" onClick={onClick}>
            <div>
            <Link to={link}>
                <img alt="thumb.jpg" src={imageUrl} className="panel__image" />
            </Link>
            </div>
            <div className="panel-secondary">
                <h3 className="panel-header">
                    <Link to={link}>
                        {title}
                    </Link>
                </h3>
                <p>
                    <Link to={link}>{description}</Link>
                </p>
                <p className="panel__links">
                    {children}
                </p>
            </div>
        </article>
    );
}

