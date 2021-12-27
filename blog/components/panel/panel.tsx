import * as React from "react";
import { Link } from "gatsby";
import { Tag } from "../ui/tags/tags";
import * as types from "../../types/components";
import "./panel.scss";



export const Panel = ({ title, description, imageUrl, onClick, tags, slug }: types.IPanelProps) => {
    return (
        <article className="panel" onClick={onClick}>
            <Link className="panel__image" to={slug}>
                <img role="link" alt="thumb" src={imageUrl} className="panel__image" />
            </Link>
            <h3 className="panel__header">
                <Link to={slug}>
                    {title}
                </Link>
            </h3>
            <p className="panel__text">
                <Link to={slug}>{description}</Link>
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

