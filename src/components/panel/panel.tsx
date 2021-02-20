import * as React from 'react';
import { Link } from 'gatsby';
import './panel.scss';
import { Tag } from '../ui/tags/tags';



export const Panel = ({ title, description, imageUrl, onClick, tags, link }: any) => {
    return (
        <article className="panel" onClick={onClick}>
            <Link className="panel__image" to={link}>
                <img role="link" alt="thumb.jpg" src={imageUrl} className="panel__image" />
            </Link>
            <h3 className="panel__header">
                <Link to={link}>
                    {title}
                </Link>
            </h3>
            <p className="panel__text">
                <Link to={link}>{description}</Link>
            </p>
            <div className="panel__links">
                {tags.map((tag: string, index: number) => {
                    return (
                        <Tag key={index} icon={tag} link={`/meta/${tag}`}>
                            {tag}
                        </Tag>
                    )
                })}
            </div>
        </article>
    );
}

