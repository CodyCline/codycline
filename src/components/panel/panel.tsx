import * as React from 'react';
import { Link } from 'react-router-dom';
import { Tag } from '../ui/tags/tags';
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
                        {tags.map((tag:any, inc:number) => {
                            return <Tag key={inc}>{tag}</Tag>
                        })}
                    </p>
                </div>
            </div>
        </div>
        </Link>
    );
}

