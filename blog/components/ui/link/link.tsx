import * as React from "react";
import { Link as GatsbyLink } from "gatsby";
import * as types from "../../../types/components";
import "./link.scss";



export const Link = ({href, children, externalOnly = false} : types.ILinkProps) => {
	const currentHost = process.env.NODE_ENV === `development` ? `localhost:8000`: `codycline.com`;
	if (href.includes(currentHost) || href[0] === `/`) {
		return <GatsbyLink className="link" to={href}>{children}</GatsbyLink>
	}
	return (
		<a className="link" href={href} target="_blank" rel="noopener noreferrer">
			{children}
		</a>
	)
}