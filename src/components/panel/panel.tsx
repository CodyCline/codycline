import * as React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './panel.scss';



export const Panel = ({ title, description, imageUrl, date, readTime, onClick, tags, link}: any) => {
    return (
        <Link to={link}>
        <div className="panel" onClick={onClick}>
            <img src={imageUrl} className="panel-image" />
            <div className="panel-secondary">
                <div>
                    <h3 className="panel-header">{title}</h3>
                    <p className="panel-text">{description}</p>
                    <p className="panel-text"><FontAwesomeIcon icon={["far", "clock"]} /> {date}</p>
                    <p>
                        {tags.map((tag:any) => {
                            return <PanelTag>{tag}</PanelTag>
                        })}
                    </p>
                </div>
            </div>
        </div>
        </Link>
    );
}

const PanelTag = ({children, onClick} : any) => (
    <Link to={"/tags/" + children}>
        <span className="panel-tag">{children}</span>
    </Link>
);